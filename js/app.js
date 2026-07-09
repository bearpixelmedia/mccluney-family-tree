/*
  McCluney Family Tree - Main Application Logic
  Pure vanilla JS. No build step required.
*/

// Tailwind script configuration
function initTailwind() {
  document.documentElement.style.setProperty('--accent', '#8B5E3C');
  
  // Optional: Extend Tailwind config if needed
  // (Play CDN supports limited config via script)
}

// Dark mode toggle
let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  const html = document.documentElement;
  const icon = document.querySelector('#dark-toggle i');
  
  if (darkMode) {
    html.classList.add('dark');
    document.body.style.backgroundColor = '#1F1710';
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    html.classList.remove('dark');
    document.body.style.backgroundColor = '#FDF8F0';
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Render all people cards in the grid
function renderPeopleGrid(filteredData = null) {
  const grid = document.getElementById('people-grid');
  grid.innerHTML = '';
  
  let data = filteredData || window.familyData;
  
  // Apply current sort
  const sortMode = document.getElementById('sort-select')?.value || 'name-asc';
  
  data = [...data].sort((a, b) => {
    if (sortMode === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortMode === 'birth-desc') {
      return (parseInt(b.birth) || 0) - (parseInt(a.birth) || 0);
    } else if (sortMode === 'birth-asc') {
      return (parseInt(a.birth) || 0) - (parseInt(b.birth) || 0);
    }
    return 0;
  });
  
  data.forEach(person => {
    const card = document.createElement('div');
    card.className = `family-card bg-white border border-[#E5DFD3] rounded-3xl overflow-hidden cursor-pointer flex flex-col`;
    card.innerHTML = `
      <div class="relative">
        <img src="${person.photo}" alt="${person.name}" 
             class="w-full h-48 object-cover">
        <div class="absolute top-4 right-4">
          ${person.death === null 
            ? `<span class="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full">Living</span>` 
            : ''}
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <div class="flex-1">
          <h3 class="font-semibold text-xl tracking-tight">${person.name}</h3>
          <p class="text-[#8B5E3C] text-sm mt-0.5">${person.birth} — ${person.death || 'Present'}</p>
          
          ${person.birthPlace ? `<p class="text-xs text-[#6B5B4F] mt-2 line-clamp-1"><i class="fa-solid fa-map-marker-alt mr-1.5"></i>${person.birthPlace}</p>` : ''}
          
          <p class="text-sm text-[#3F2A1E] mt-3 line-clamp-3">${person.bio ? person.bio.substring(0, 140) + (person.bio.length > 140 ? '...' : '') : ''}</p>
        </div>
        
        <div class="mt-4 pt-4 border-t border-[#F5F0E6] flex items-center justify-between text-xs">
          <div class="flex items-center gap-x-1.5 text-[#8B5E3C]">
            <i class="fa-solid fa-users"></i>
            <span>${(person.children || []).length} children</span>
          </div>
          <button class="text-[#4A3728] hover:text-[#8B5E3C] font-medium flex items-center gap-x-1 transition-colors">
            View Profile <i class="fa-solid fa-arrow-right text-xs ml-1"></i>
          </button>
        </div>
      </div>
    `;
    
    // Click to open modal
    card.onclick = () => openModal(person.id);
    
    grid.appendChild(card);
  });
}

// Filter people based on search input
function filterPeople() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
  
  if (!searchTerm) {
    renderPeopleGrid();
    return;
  }
  
  const filtered = window.familyData.filter(person => {
    const searchable = `${person.name} ${person.bio || ''} ${person.birthPlace || ''} ${person.deathPlace || ''}`.toLowerCase();
    return searchable.includes(searchTerm);
  });
  
  renderPeopleGrid(filtered);
}

// Open person detail modal
let currentPersonId = null;

function openModal(personId) {
  const person = window.getPersonById(personId);
  if (!person) return;
  
  currentPersonId = personId;
  
  // Set basic info
  document.getElementById('modal-name').textContent = person.name;
  document.getElementById('modal-dates').textContent = `${person.birth} — ${person.death || 'Present'}`;
  document.getElementById('modal-places').innerHTML = 
    `${person.birthPlace ? `<span><i class="fa-solid fa-map-marker-alt mr-1"></i>${person.birthPlace}</span>` : ''} 
     ${person.deathPlace ? `→ ${person.deathPlace}` : ''}`;
  document.getElementById('modal-bio').textContent = person.bio || 'No biography available yet.';
  document.getElementById('modal-id').textContent = `ID: ${person.id}`;
  
  // Photo
  const photoContainer = document.getElementById('modal-photo');
  photoContainer.innerHTML = `<img src="${person.photo}" alt="${person.name}" class="w-full h-full object-cover">`;
  
  // Family connections
  renderFamilyConnections(person);
  
  // Show modal
  document.getElementById('person-modal').classList.remove('hidden');
  document.getElementById('person-modal').classList.add('flex');
  
  // Update URL hash for deep linking
  history.replaceState(null, null, `#person-${personId}`);
}

function closeModal() {
  const modal = document.getElementById('person-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  
  // Clean URL
  if (location.hash.startsWith('#person-')) {
    history.replaceState(null, null, location.pathname + location.search);
  }
}

// Render parents, spouses, children in modal
function renderFamilyConnections(person) {
  // Parents
  const parentsContainer = document.getElementById('modal-parents');
  parentsContainer.innerHTML = '';
  if (person.parents && person.parents.length > 0) {
    person.parents.forEach(parentId => {
      const parent = window.getPersonById(parentId);
      if (parent) {
        const el = createRelationshipElement(parent, 'parent');
        parentsContainer.appendChild(el);
      }
    });
  } else {
    parentsContainer.innerHTML = '<p class="text-xs text-[#8B5E3C]/70 italic">Unknown / Not documented</p>';
  }

  // Spouses
  const spousesContainer = document.getElementById('modal-spouses');
  spousesContainer.innerHTML = '';
  if (person.spouses && person.spouses.length > 0) {
    person.spouses.forEach(spouseId => {
      const spouse = window.getPersonById(spouseId);
      if (spouse) {
        const el = createRelationshipElement(spouse, 'spouse');
        spousesContainer.appendChild(el);
      }
    });
  } else {
    spousesContainer.innerHTML = '<p class="text-xs text-[#8B5E3C]/70 italic">None documented</p>';
  }

  // Children
  const childrenContainer = document.getElementById('modal-children');
  childrenContainer.innerHTML = '';
  if (person.children && person.children.length > 0) {
    person.children.forEach(childId => {
      const child = window.getPersonById(childId);
      if (child) {
        const el = createRelationshipElement(child, 'child');
        childrenContainer.appendChild(el);
      }
    });
  } else {
    childrenContainer.innerHTML = '<p class="text-xs text-[#8B5E3C]/70 italic">No children documented</p>';
  }
}

function createRelationshipElement(person, relationType) {
  const div = document.createElement('div');
  div.className = `flex items-center gap-3 p-2.5 bg-[#F5F0E6] hover:bg-[#EDE6D9] rounded-2xl cursor-pointer transition-colors`;
  div.innerHTML = `
    <img src="${person.photo}" alt="${person.name}" class="w-9 h-9 rounded-xl object-cover border border-[#D1C7B8]">
    <div class="flex-1 min-w-0">
      <div class="font-medium text-sm truncate">${person.name}</div>
      <div class="text-[10px] text-[#6B5B4F]">${person.birth} — ${person.death || 'Present'}</div>
    </div>
  `;
  
  div.onclick = () => {
    closeModal();
    // Small delay so close animation finishes
    setTimeout(() => {
      openModal(person.id);
    }, 180);
  };
  
  return div;
}

// Copy link to current person
function copyPersonLink() {
  if (!currentPersonId) return;
  const url = `${window.location.origin}${window.location.pathname}#person-${currentPersonId}`;
  navigator.clipboard.writeText(url).then(() => {
    const originalText = event.currentTarget ? event.currentTarget.innerHTML : '';
    // Simple toast
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#2C1810] text-white text-sm px-5 py-2.5 rounded-2xl shadow-lg flex items-center gap-x-2 z-[200]';
    toast.innerHTML = `<i class="fa-solid fa-check mr-2"></i> Link copied to clipboard`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }).catch(() => {
    // Fallback
    prompt('Copy this link:', url);
  });
}

// ==================== FAMILY TREE RENDERING ====================

function renderFamilyTree(rootId = 1) {
  const container = document.getElementById('family-tree-container');
  container.innerHTML = '';
  
  const rootPerson = window.getPersonById(rootId);
  if (!rootPerson) {
    container.innerHTML = '<p class="text-red-500 p-4">Root person not found.</p>';
    return;
  }

  const treeRoot = document.createElement('ul');
  treeRoot.className = 'family-tree';
  
  const rootLi = createTreeNode(rootPerson, true);
  treeRoot.appendChild(rootLi);
  
  container.appendChild(treeRoot);
}

function createTreeNode(person, isRoot = false) {
  const li = document.createElement('li');
  
  // Person node card
  const node = document.createElement('div');
  node.className = `person-node ${isRoot ? 'ring-2 ring-[#8B5E3C] ring-offset-2' : ''}`;
  node.innerHTML = `
    <img src="${person.photo}" alt="${person.name}">
    <div class="node-info flex-1">
      <div class="name">${person.name}</div>
      <div class="years">${person.birth} — ${person.death || 'Present'}</div>
    </div>
    
    ${(person.children && person.children.length > 0) ? `
      <button class="ml-auto w-6 h-6 flex items-center justify-center text-[#8B5E3C] hover:bg-[#F5F0E6] rounded-full transition-colors toggle-btn" title="Toggle children">
        <i class="fa-solid fa-chevron-down text-xs"></i>
      </button>
    ` : ''}
  `;
  
  // Click name/photo to open modal
  node.onclick = (e) => {
    if (!e.target.closest('.toggle-btn')) {
      openModal(person.id);
    }
  };
  
  li.appendChild(node);
  
  // Children subtree
  if (person.children && person.children.length > 0) {
    const childUl = document.createElement('ul');
    
    person.children.forEach(childId => {
      const child = window.getPersonById(childId);
      if (child) {
        const childLi = createTreeNode(child);
        childUl.appendChild(childLi);
      }
    });
    
    li.appendChild(childUl);
    
    // Toggle functionality
    const toggleBtn = node.querySelector('.toggle-btn');
    if (toggleBtn) {
      let expanded = true;
      
      toggleBtn.onclick = (e) => {
        e.stopImmediatePropagation();
        expanded = !expanded;
        childUl.style.display = expanded ? '' : 'none';
        toggleBtn.querySelector('i').classList.toggle('fa-chevron-down', expanded);
        toggleBtn.querySelector('i').classList.toggle('fa-chevron-right', !expanded);
      };
    }
  }
  
  return li;
}

function resetTree() {
  const container = document.getElementById('family-tree-container');
  container.innerHTML = '';
  renderFamilyTree(1); // Reset to patriarch
  
  // Optional: scroll to top of tree
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Handle deep linking on page load
function handleDeepLink() {
  if (location.hash.startsWith('#person-')) {
    const id = parseInt(location.hash.replace('#person-', ''));
    if (id && window.getPersonById(id)) {
      // Wait for render
      setTimeout(() => {
        openModal(id);
      }, 450);
    }
  }
}

// Initialize everything
function initApp() {
  initTailwind();
  
  // Render people directory
  renderPeopleGrid();
  
  // Render interactive family tree (starting from oldest ancestor - ID 1)
  renderFamilyTree(1);
  
  // Sort select change already wired via onchange in HTML
  
  // Keyboard shortcut: press '/' to focus search
  document.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      document.getElementById('search-input').focus();
    }
    if (e.key === 'Escape') {
      const modal = document.getElementById('person-modal');
      if (!modal.classList.contains('hidden')) {
        closeModal();
      } else {
        const contrib = document.getElementById('contribute-modal');
        if (!contrib.classList.contains('hidden')) closeContributeModal();
      }
    }
  });
  
  // Initial filter if search has value (rare)
  const searchInput = document.getElementById('search-input');
  if (searchInput.value) filterPeople();
  
  // Handle deep links
  handleDeepLink();
  
  // Bonus: Make sure clicking logo or brand scrolls to top
  const brand = document.querySelector('nav .flex.items-center');
  if (brand) {
    brand.style.cursor = 'pointer';
    brand.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Welcome console message
  console.log('%c[McCluney Family Tree] Website initialized successfully. Data loaded from js/data.js', 'color:#8B5E3C');
}

// Contribute modal helpers
function showContributeModal() {
  document.getElementById('contribute-modal').classList.remove('hidden');
  document.getElementById('contribute-modal').classList.add('flex');
}

function closeContributeModal() {
  const modal = document.getElementById('contribute-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Boot the app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);