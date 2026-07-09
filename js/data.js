/*
  McCluney Family Tree - Sample Data
  
  INSTRUCTIONS:
  - Replace this entire array with your real family data.
  - Keep id unique and sequential.
  - Maintain parent/child/spouse relationships consistently.
  - Use real photo paths once you add images/ folder.
  - birth/death can be full dates or just years.
*/

const familyData = [
  {
    id: 1,
    name: "Alexander McCluney",
    birth: "1820",
    death: "1890",
    birthPlace: "Argyll, Scotland",
    deathPlace: "Waynesville, North Carolina",
    parents: [],
    spouses: [2],
    children: [3, 4, 5],
    bio: "Alexander emigrated from Scotland in 1845 seeking opportunity in the young United States. He settled in the Blue Ridge Mountains of North Carolina, where he built a homestead and raised a large family. A skilled carpenter and farmer, he was known throughout the community for his integrity and quiet strength.",
    photo: "https://picsum.photos/id/1005/400/400",
    generation: 1
  },
  {
    id: 2,
    name: "Mary Campbell McCluney",
    birth: "1825",
    death: "1895",
    birthPlace: "County Antrim, Ireland",
    deathPlace: "Waynesville, North Carolina",
    parents: [],
    spouses: [1],
    children: [3, 4, 5],
    bio: "Mary brought warmth, faith, and resilience to the family. She managed the household and farm while raising five children. Her Irish storytelling tradition became a beloved part of McCluney family gatherings for generations.",
    photo: "https://picsum.photos/id/1011/400/400",
    generation: 1
  },
  {
    id: 3,
    name: "James McCluney",
    birth: "1848",
    death: "1912",
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "Asheville, North Carolina",
    parents: [1, 2],
    spouses: [6],
    children: [9],
    bio: "The eldest son. James worked as a blacksmith and later operated a successful livery stable. He was active in the local Presbyterian church and helped build the community school.",
    photo: "https://picsum.photos/id/160/400/400",
    generation: 2
  },
  {
    id: 4,
    name: "Margaret McCluney Thompson",
    birth: "1852",
    death: "1928",
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "Knoxville, Tennessee",
    parents: [1, 2],
    spouses: [7],
    children: [10, 11],
    bio: "Margaret married a railroad man and moved to Tennessee. She remained close to her siblings and often hosted family reunions at her home in the hills outside Knoxville.",
    photo: "https://picsum.photos/id/201/400/400",
    generation: 2
  },
  {
    id: 5,
    name: "Thomas McCluney",
    birth: "1855",
    death: "1931",
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [1, 2],
    spouses: [8],
    children: [12],
    bio: "Thomas stayed on the family land and expanded the farm. He was a respected deacon and a talented fiddler whose music filled the valley on summer evenings.",
    photo: "https://picsum.photos/id/29/400/400",
    generation: 2
  },
  {
    id: 6,
    name: "Elizabeth "Lizzie" Harper McCluney",
    birth: "1853",
    death: "1918",
    birthPlace: "Haywood County, North Carolina",
    deathPlace: "Asheville, North Carolina",
    parents: [],
    spouses: [3],
    children: [9],
    bio: "Lizzie was a schoolteacher before marriage. She instilled a love of learning in her children and kept meticulous family records that have proven invaluable to later generations.",
    photo: "https://picsum.photos/id/251/400/400",
    generation: 2
  },
  {
    id: 7,
    name: "Samuel Thompson",
    birth: "1849",
    death: "1920",
    birthPlace: "Knoxville, Tennessee",
    deathPlace: "Knoxville, Tennessee",
    parents: [],
    spouses: [4],
    children: [10, 11],
    bio: "A conductor on the Southern Railway. Samuel and Margaret built a comfortable life and raised two daughters who carried on the McCluney spirit of hospitality.",
    photo: "https://picsum.photos/id/1009/400/400",
    generation: 2
  },
  {
    id: 8,
    name: "Sarah Jane "Sallie" Rogers McCluney",
    birth: "1860",
    death: "1942",
    birthPlace: "Haywood County, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [],
    spouses: [5],
    children: [12],
    bio: "Sallie was known for her beautiful quilts and her generous spirit. She outlived her husband by more than a decade and remained the heart of the family until her passing.",
    photo: "https://picsum.photos/id/40/400/400",
    generation: 2
  },
  {
    id: 9,
    name: "Robert McCluney",
    birth: "1875",
    death: "1945",
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [3, 6],
    spouses: [13],
    children: [],
    bio: "Robert continued the family tradition of farming and carpentry. He served in World War I and returned home determined to modernize the homestead. A man of few words but deep principle.",
    photo: "https://picsum.photos/id/1006/400/400",
    generation: 3
  },
  {
    id: 10,
    name: "Anna Thompson Whitaker",
    birth: "1878",
    death: "1963",
    birthPlace: "Knoxville, Tennessee",
    deathPlace: "Knoxville, Tennessee",
    parents: [4, 7],
    spouses: [],
    children: [],
    bio: "Anna became a nurse and later a nursing instructor. She never married but devoted her life to caring for others and stayed connected to her North Carolina cousins through frequent letters.",
    photo: "https://picsum.photos/id/201/400/400",
    generation: 3
  },
  {
    id: 11,
    name: "Grace Thompson",
    birth: "1882",
    death: "1971",
    birthPlace: "Knoxville, Tennessee",
    deathPlace: "Asheville, North Carolina",
    parents: [4, 7],
    spouses: [],
    children: [],
    bio: "Grace returned to the mountains and taught music. She was a beloved aunt to the next generation and keeper of many family stories.",
    photo: "https://picsum.photos/id/251/400/400",
    generation: 3
  },
  {
    id: 12,
    name: "William "Will" McCluney",
    birth: "1885",
    death: "1968",
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [5, 8],
    spouses: [15],
    children: [16],
    bio: "Will expanded the family farm and was active in local politics and the Grange. He loved the land and passed that deep connection to nature to his children.",
    photo: "https://picsum.photos/id/29/400/400",
    generation: 3
  },
  {
    id: 13,
    name: "Martha "Mattie" Davis McCluney",
    birth: "1879",
    death: "1958",
    birthPlace: "Haywood County, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [],
    spouses: [9],
    children: [],
    bio: "Mattie was a force of nature — a talented cook, gardener, and midwife who delivered many babies in the valley. Her faith and humor held the family together through difficult times.",
    photo: "https://picsum.photos/id/160/400/400",
    generation: 3
  },
  {
    id: 14,
    name: "Byron McCluney",
    birth: "1978",
    death: null,
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "",
    parents: [16, 17],
    spouses: [],
    children: [],
    bio: "Creator of this digital family tree project. Byron has spent years researching McCluney roots, digitizing old photos, and interviewing elders. He hopes this site will help McCluneys everywhere discover their shared heritage and connect with one another.",
    photo: "https://picsum.photos/id/1005/400/400",
    generation: 4
  },
  {
    id: 15,
    name: "Ethel "Etta" Price McCluney",
    birth: "1890",
    death: "1975",
    birthPlace: "Haywood County, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [],
    spouses: [12],
    children: [16],
    bio: "Etta was a schoolteacher and postmistress. She kept the family history alive through her detailed journals and was the first to suggest creating a written family record.",
    photo: "https://picsum.photos/id/40/400/400",
    generation: 3
  },
  {
    id: 16,
    name: "Harold McCluney",
    birth: "1912",
    death: "1998",
    birthPlace: "Waynesville, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [12, 15],
    spouses: [17],
    children: [14],
    bio: "Harold served in World War II and returned to run the family farm. He was a quiet patriarch who loved woodworking, bluegrass music, and Sunday dinners with the whole family.",
    photo: "https://picsum.photos/id/1006/400/400",
    generation: 4
  },
  {
    id: 17,
    name: "Ruth "Ruthie" Jenkins McCluney",
    birth: "1918",
    death: "2009",
    birthPlace: "Buncombe County, North Carolina",
    deathPlace: "Waynesville, North Carolina",
    parents: [],
    spouses: [16],
    children: [14],
    bio: "Ruthie was Byron's grandmother. A wonderful cook and storyteller, she kept the family close and made sure the next generation knew where they came from.",
    photo: "https://picsum.photos/id/201/400/400",
    generation: 4
  }
];

// Helper to get person by ID
window.getPersonById = function(id) {
  return familyData.find(p => p.id === parseInt(id));
};

// Expose data globally
window.familyData = familyData;