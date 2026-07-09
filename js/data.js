/*
  McCluney Family Tree - Real Lineage Data
  
  IMPORTANT: This data is based on research provided by Byron Patrick McCluney and public sources.
  All details should be independently verified with primary sources (census, vital records, DNA).
  Respect privacy of living relatives. Photos are placeholders — replace with family images.
  
  9-generation paternal line from 1772 Ulster immigrant William McCluney.
  Hereditary 'Byron' naming across three generations preserved.
  
  Sources for William McCluney: WikiTree McCluney-89, Find A Grave memorial 51784666, SC Audited Accounts, censuses.
*/

const familyData = [
  {
    id: 1,
    name: "William McCluney",
    birth: "c. 1735",
    death: "c. 1833",
    birthPlace: "County Antrim, Ireland",
    deathPlace: "Chester County, South Carolina",
    parents: [],
    spouses: [15],
    children: [2],
    bio: "The original immigrant patriarch (6th great-grandfather). Arrived in colonial South Carolina in November 1772 on a 100-acre land grant on Rocky Creek (later additional 250 acres). Enlisted in the SC militia under Col. David Hopkins during the American Revolution, serving 125 days as a horseman in backcountry combat. Lived to nearly 98 and is buried in the Irish Cemetery, Chester, SC. Will probated Dec 1833 bequeathing estate and enslaved people to wife Margaret and children. Sources: WikiTree McCluney-89, Find A Grave #51784666, SC Audited Accounts, 1800/1810 censuses.",
    photo: "https://picsum.photos/id/1005/400/400",
    generation: 1,
    sources: ["https://www.wikitree.com/wiki/McCluney-89", "https://www.findagrave.com/memorial/51784666/william-mccluney"]
  },
  {
    id: 2,
    name: "John McCluney",
    birth: "c. 1794",
    death: "",
    birthPlace: "Chester County, South Carolina",
    deathPlace: "",
    parents: [1],
    spouses: [10],
    children: [3],
    bio: "5th great-grandfather. Married Mary McLees. Raised his family in the South Carolina backcountry during the War of 1812 era while managing the family's agricultural holdings.",
    photo: "https://picsum.photos/id/1011/400/400",
    generation: 2
  },
  {
    id: 3,
    name: "Dr. John Frank McCluney",
    birth: "c. 1834",
    death: "",
    birthPlace: "South Carolina",
    deathPlace: "Gowdeysville Township, South Carolina",
    parents: [2],
    spouses: [],
    children: [4],
    bio: "4th great-grandfather. Transitioned the family into educated professionals. Graduated as a medical doctor from Jefferson Medical College (Philadelphia) in 1858. Maintained a prominent practice in Gowdeysville Township through the Civil War and Reconstruction.",
    photo: "https://picsum.photos/id/160/400/400",
    generation: 3
  },
  {
    id: 4,
    name: "Hillie C. McCluney",
    birth: "c. 1846",
    death: "",
    birthPlace: "South Carolina",
    deathPlace: "",
    parents: [3],
    spouses: [],
    children: [5],
    bio: "3rd great-grandfather (also recorded as Hilliard or Hill). Pushed the family footprint westward from South Carolina into Tennessee and Northern Alabama in the late 19th century.",
    photo: "https://picsum.photos/id/29/400/400",
    generation: 4
  },
  {
    id: 5,
    name: "John Hill Calhoun McCluney",
    birth: "c. 1869",
    death: "1939",
    birthPlace: "Alabama",
    deathPlace: "Tampa, Florida",
    parents: [4],
    spouses: [11],
    children: [6],
    bio: "2nd great-grandfather. Married Viola Augustus Caddell on Feb 11, 1891 in Etowah County, Alabama. His middle name reflects intermarriage with the prominent Calhoun family. Migrated south and established the family in Tampa, Florida by the early 20th century.",
    photo: "https://picsum.photos/id/1006/400/400",
    generation: 5
  },
  {
    id: 6,
    name: "Byron Charles McCluney Sr.",
    birth: "October 20, 1908",
    death: "1961",
    birthPlace: "Tampa, Florida",
    deathPlace: "",
    parents: [5],
    spouses: [12],
    children: [7],
    bio: "Great-grandfather — the origin of the recurring 'Byron' name (BYRON #1). Married Lillie Mae Martin in December 1928. Raised his household across the North Florida and Georgia border regions through the Great Depression.",
    photo: "https://picsum.photos/id/201/400/400",
    generation: 6
  },
  {
    id: 7,
    name: "Byron Charles McCluney Jr.",
    birth: "c. 1929",
    death: "1963",
    birthPlace: "Georgia / Florida border region",
    deathPlace: "",
    parents: [6],
    spouses: [13],
    children: [8],
    bio: "Grandfather (BYRON #2). Documented in the 1940 U.S. Census. Married Joan Taylor (daughter of George N. Taylor), anchoring the mid-century Georgia branch of the family.",
    photo: "https://picsum.photos/id/1009/400/400",
    generation: 7
  },
  {
    id: 8,
    name: "Stephen Michael McCluney",
    birth: "August 15, 1953",
    death: "January 3, 2004",
    birthPlace: "Georgia",
    deathPlace: "Florida",
    parents: [7],
    spouses: [20],
    children: [9],
    bio: "Father. Proud Vietnam War Veteran. Honored at the Florida National Cemetery in Bushnell. He purposefully paused the consecutive 'Byron' naming for his generation but actively revived it through his son.",
    photo: "https://picsum.photos/id/160/400/400",
    generation: 8
  },
  {
    id: 9,
    name: "Byron Patrick McCluney",
    birth: "1985",
    death: null,
    birthPlace: "",
    deathPlace: "",
    parents: [8],
    spouses: [16, 21],
    children: [17, 19],
    bio: "You — the 9th documented generation and BYRON #3 (b. ~1985, Living). Your first name preserves your grandfather and great-grandfather's identities. Your middle name Patrick calls directly back to your 1772 Celtic roots in County Antrim, Ireland. Creator of this living family tree project.",
    photo: "https://picsum.photos/id/1005/400/400",
    generation: 9
  },
  {
    id: 10,
    name: "Mary McLees",
    birth: "",
    death: "",
    birthPlace: "South Carolina",
    deathPlace: "",
    parents: [],
    spouses: [2],
    children: [3],
    bio: "Wife of John McCluney (5th great-grandfather). Part of the early South Carolina backcountry family that helped establish the McCluney agricultural holdings.",
    photo: "https://picsum.photos/id/251/400/400",
    generation: 2
  },
  {
    id: 11,
    name: "Viola Augustus Caddell",
    birth: "",
    death: "",
    birthPlace: "Etowah County, Alabama",
    deathPlace: "",
    parents: [],
    spouses: [5],
    children: [6],
    bio: "Wife of John Hill Calhoun McCluney (2nd great-grandfather). Married February 11, 1891 in Etowah County, Alabama. Key figure in the family's move southward to Tampa, Florida.",
    photo: "https://picsum.photos/id/40/400/400",
    generation: 5
  },
  {
    id: 12,
    name: "Lillie Mae Martin",
    birth: "",
    death: "",
    birthPlace: "North Florida / Georgia border",
    deathPlace: "",
    parents: [],
    spouses: [6],
    children: [7],
    bio: "Wife of Byron Charles McCluney Sr. (great-grandfather). Married December 1928. Helped raise the family through the Great Depression across the Florida-Georgia region.",
    photo: "https://picsum.photos/id/201/400/400",
    generation: 6
  },
  {
    id: 13,
    name: "Joan Taylor McCluney",
    birth: "",
    death: "2000",
    birthPlace: "Georgia",
    deathPlace: "",
    parents: [14],
    spouses: [7],
    children: [8],
    bio: "Paternal grandmother. Daughter of George N. Taylor. Married Byron Charles McCluney Jr., anchoring the mid-century Georgia branch of the McCluney family.",
    photo: "https://picsum.photos/id/251/400/400",
    generation: 7
  },
  {
    id: 14,
    name: "George N. Taylor",
    birth: "c. late 1880s – early 1910s",
    death: "",
    birthPlace: "Georgia / Carolina region",
    deathPlace: "",
    parents: [],
    spouses: [],
    children: [13],
    bio: "Maternal great-grandfather on the Taylor line. Father of Joan Taylor McCluney. Anchor for further research into the Anglo-Scottish Taylor family heritage (occupational name linked to skilled cloth cutters and tailors).",
    photo: "https://picsum.photos/id/1009/400/400",
    generation: 6
  },
  {
    id: 15,
    name: "Margaret Johnston",
    birth: "",
    death: "",
    birthPlace: "South Carolina",
    deathPlace: "Chester County, South Carolina",
    parents: [],
    spouses: [1],
    children: [2],
    bio: "Wife of William McCluney (6th great-grandfather). Lived on the original land grant in Chester County, SC. Mentioned in William's 1833 will.",
    photo: "https://picsum.photos/id/40/400/400",
    generation: 1,
    sources: ["https://www.wikitree.com/wiki/McCluney-89"]
  },
  {
    id: 16,
    name: "Lindsey Janelle Hakanson",
    birth: "",
    death: null,
    birthPlace: "",
    deathPlace: "",
    parents: [],
    spouses: [9],
    children: [17],
    bio: "Partner of Byron Patrick McCluney. Mother of Teagan M McCluney.",
    photo: "https://picsum.photos/id/201/400/400",
    generation: 9
  },
  {
    id: 17,
    name: "Teagan M McCluney",
    birth: "",
    death: null,
    birthPlace: "",
    deathPlace: "",
    parents: [9, 16],
    spouses: [],
    children: [],
    bio: "Child of Byron Patrick McCluney and Lindsey Janelle Hakanson.",
    photo: "https://picsum.photos/id/160/400/400",
    generation: 10
  },
  {
    id: 19,
    name: "Harlyn J McCluney",
    birth: "",
    death: null,
    birthPlace: "",
    deathPlace: "",
    parents: [9, 21],
    spouses: [],
    children: [],
    bio: "Child of Byron Patrick McCluney and Skyla.",
    photo: "https://picsum.photos/id/1006/400/400",
    generation: 10
  },
  {
    id: 20,
    name: "Michele P Whatley",
    birth: "1961",
    death: null,
    birthPlace: "",
    deathPlace: "",
    parents: [],
    spouses: [8],
    children: [9],
    bio: "Mother of Byron Patrick McCluney. Spouse of Stephen Michael McCluney.",
    photo: "https://picsum.photos/id/29/400/400",
    generation: 8
  },
  {
    id: 21,
    name: "Skyla",
    birth: "",
    death: null,
    birthPlace: "",
    deathPlace: "",
    parents: [],
    spouses: [9],
    children: [19],
    bio: "Partner of Byron Patrick McCluney. Mother of Harlyn J McCluney.",
    photo: "https://picsum.photos/id/251/400/400",
    generation: 9
  }
];

// Helper to get person by ID
window.getPersonById = function(id) {
  return familyData.find(p => p.id === parseInt(id));
};

// Expose data globally
window.familyData = familyData;