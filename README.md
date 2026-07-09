# mccluney-family-tree

A beautiful, interactive website project to preserve and explore the McCluney family heritage.

> "A project put in place by Byron McCluney to help other McCluney's find their heritage."

## 🌳 Features

- **Elegant & Responsive Design**: Warm, heritage-inspired theme that works beautifully on desktop, tablet, and mobile.
- **Powerful Search & Browse**: Instantly search the family directory by name, birthplace, or any detail. Filter and sort results.
- **Rich Person Profiles**: Click any card to open a detailed modal with biography, photos, and interactive family connections (parents, spouse, children — all clickable!).
- **Interactive Visual Family Tree**: A clean, expandable top-down tree visualization built with pure HTML/CSS/JS. Click any person to open their full profile.
- **Deep Linking**: Share direct links to specific family members (e.g. `#person-14`).
- **Easy to Extend**: All data lives in a simple JavaScript file. No database or backend required.
- **Zero Dependencies to Build**: Open `index.html` directly in any browser. Perfect for GitHub Pages.

## 🚀 Getting Started

### View Locally
1. Clone or download this repository
2. Open `index.html` in your web browser
   - For best results (if adding images later), serve it locally:
     ```bash
     python -m http.server 8000
     # or npx serve
     ```
3. Navigate to http://localhost:8000

### Deploy with GitHub Pages (Recommended)
1. Go to your repository **Settings** → **Pages**
2. Under "Build and deployment", set **Source** to "Deploy from a branch"
3. Select branch `main` and folder `/ (root)`
4. Save — your site will be live at `https://bearpixelmedia.github.io/mccluney-family-tree/`

## 📝 How to Add Real Family Data

All family information is stored in **`js/data.js`** as a simple array of objects. This makes it trivial to edit, version control, and contribute via Pull Requests.

### Person Schema
```js
{
  id: 14,                           // Unique integer
  name: "Byron McCluney",
  birth: "1978",                    // Year or full date string
  death: null,                      // null for living, or year/date
  birthPlace: "Waynesville, NC",
  deathPlace: "",
  parents: [13],                    // Array of parent IDs
  spouses: [],                      // Array of spouse IDs
  children: [],                     // Array of children IDs
  bio: "Full or short biography...",
  photo: "https://picsum.photos/id/1005/400/400",  // Placeholder or path to /images/yourphoto.jpg
  generation: 5                     // Optional: for badges/filters
}
```

### Steps to Add Members
1. Open `js/data.js`
2. Add a new object to the `familyData` array following the schema above.
3. Update `parents`, `spouses`, and `children` arrays on related people so relationships stay consistent.
4. (Optional) Add real photos to an `images/` folder and update the `photo` paths.
5. Commit and push (or open a Pull Request).

**Tip**: Start with the oldest known ancestor as the tree root for the visual tree.

## 🛠 Tech Stack
- **Frontend**: Vanilla HTML5 + CSS3 + JavaScript (ES2020+)
- **Styling**: Tailwind CSS (loaded via CDN — no build step)
- **Icons**: Font Awesome 6 (CDN)
- **No backend, no frameworks, no compilation** — pure static site

## 🌟 Future Roadmap Ideas
- [ ] GEDCOM file import / export
- [ ] Interactive map of family migrations (Leaflet)
- [ ] Timeline view
- [ ] Private branches or user-submitted stories with moderation
- [ ] PDF export of individual profiles or full tree
- [ ] Multi-generational photo galleries
- [ ] Dark mode polish & accessibility improvements

## 🤝 Contributing

This is a living family project. Contributions from McCluney descendants are warmly welcomed!

- Add verified ancestors, descendants, photos, or stories
- Fix bugs or improve the UI/UX
- Suggest new features

Please be mindful of the privacy of living relatives when adding information.

## 📜 License
Open source for the McCluney family community. Feel free to fork and adapt for your own family tree.

---

Built with ❤️ for the McCluney family by Byron McCluney & Grok.