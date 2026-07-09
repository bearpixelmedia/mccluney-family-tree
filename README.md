# mccluney-family-tree

A beautiful, interactive website project to preserve and explore the McCluney family heritage, with active tools to research and discover more ancestors from public sources.

> "A project put in place by Byron McCluney to help other McCluney's find their heritage."

## 🌳 Features

- **Elegant & Responsive Design**: Warm, heritage-inspired theme.
- **Interactive Family Tree + Searchable Directory**: Clickable profiles, expandable branches, filters.
- **Rich Profiles**: Bios, family connections, sources, and photos.
- **Research Hub** (new!): Pre-built links to WikiTree, Find A Grave, FamilySearch. Quick search generator that creates links for any ancestor. Local Python crawler script to automatically discover public profiles.
- **Easy to Extend**: All data in `js/data.js`. Add new verified people and the tree updates automatically.
- **Zero Build Tools**: Open `index.html` directly or deploy via GitHub Pages.

## 🚀 Getting Started

### View Locally
1. Clone or download this repository
2. Open `index.html` in your web browser
3. For the Research Hub crawler: See instructions below

### Deploy with GitHub Pages
1. Repo Settings → Pages
2. Source: Deploy from `main` branch, root folder
3. Your site: https://bearpixelmedia.github.io/mccluney-family-tree/

## 🔍 Research Hub & Crawler

The project now actively helps you find more McCluney information:

### In the Website
- Go to the **Research Hub** section
- Use the Quick Search Generator: Type any name → instant links to WikiTree, Find A Grave, FamilySearch, Google
- Click pre-built links for key ancestors (e.g., William McCluney 1772 immigrant)

### Local Python Crawler (scripts/mccluney_crawler.py)
A starter script that uses public APIs (starting with WikiTree) to search for McCluney profiles and extract structured data.

**How to run:**
```bash
# Clone the repo if you haven't
git clone https://github.com/bearpixelmedia/mccluney-family-tree.git
cd mccluney-family-tree

# Install dependencies (one time)
pip install requests beautifulsoup4

# Run the crawler
cd scripts
python mccluney_crawler.py --search "McCluney" --limit 30

# Output: findings.json (review and merge useful entries into js/data.js)
```

**What it does:**
- Searches WikiTree for McCluney surname
- Fetches profile details (birth, death, parents, etc.)
- Outputs clean JSON you can review and import
- Easy to extend for Find A Grave scraping or other public sources

**Tips:**
- Always verify data from the crawler with primary sources
- Run periodically as new profiles are added to WikiTree
- Customize the script for specific ancestors or locations (e.g., "Chester County SC")

**Future expansions:** Add more sources, scheduled GitHub Actions runs, or merge script.

## 📝 How to Add Real Family Data

Edit `js/data.js` following the schema. The tree and modals update automatically.

See the Research Hub for discovering new people to add.

## 🛠 Tech Stack
- Vanilla HTML/CSS/JS + Tailwind (CDN)
- Python crawler for research automation
- GitHub for version control and Pages hosting

## 🌟 Future Roadmap
- [x] Research Hub with links + search generator
- [x] Starter crawler script (WikiTree API)
- [ ] Full GEDCOM import/export
- [ ] Migration map visualization
- [ ] Timeline view
- [ ] More sources in crawler (Find A Grave, FamilySearch records)
- [ ] Scheduled auto-discovery (GitHub Actions)

## ⚖️ Privacy & Verification
Only public or user-provided data. Always verify with primary records. Living relatives have minimal details.

## 🤝 Contributing
Pull requests welcome! Especially new verified ancestors, photos, stories, or improvements to the crawler.

## 📋 License
Open for the McCluney family community.

---

Built with ❤️ for the McCluney family by Byron Patrick McCluney & Grok.