// Define the array with initial data
let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// Function to print developers
function printDeveloper() {
  const developers = data.filter(person => person.profession === "developer");
  console.log(developers);
}

// Function to add data
function addData() {
  const newData = { name: "Akash", age: 23, profession: "Musician" };
  data.push(newData);
}

// Function to remove admins
function removeAdmin() {
  data = data.filter(person => person.profession !== "admin");
}

// Function to concatenate array
function concatenateArray() {
  const newData = [
    { name: "Stuti", age: 29, profession: "Painter" },
    { name: "Sherlock", age: 27, profession: "detective" }
  ];
  data = data.concat(newData);
}

// ... (Define other functions for the remaining tasks)

// Function to update John's profession
function updateJohnsProfession() {
  const john = data.find(person => person.name.toLowerCase() === "john");
  if (john) {
    john.profession = "architect";
  }
}

// Function to check if at least one person is older than 25
function checkAgeAbove25() {
  const peopleAbove25 = data.filter(person => person.age > 25);
  if (peopleAbove25.length > 0) {
    console.log(peopleAbove25);
  } 
}


function sortByAge() {
  const sortedByAge = data.slice().sort((a, b) => a.age - b.age);
  console.log(sortedByAge);
}

// Function to calculate the average age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log("Average age:", average.toFixed(1)); 
  return average;
}



// Function to count occurrences of unique professions
function uniqueProfessions() {
  const uniqueProfessionsSet = new Set(data.map(person => person.profession));
  const uniqueProfessionsArray = Array.from(uniqueProfessionsSet);
  console.log(uniqueProfessionsArray);
}



// Function to get total professions
function getTotalProfessions() {
  const professionCount = data.reduce((acc, person) => {
    acc[person.profession] = (acc[person.profession] || 0) + 1;
    return acc;
  }, {});
  console.log(professionCount);
}

// Attach event listeners to buttonss
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button[data-task='printDevelopers']").addEventListener("click", printDeveloper);
  document.querySelector("button[data-task='addData']").addEventListener("click", addData);
  document.querySelector("button[data-task='removeAdmin']").addEventListener("click", removeAdmin);
  document.querySelector("button[data-task='concatenateArray']").addEventListener("click", concatenateArray);
  document.querySelector("button[data-task='averageAge']").addEventListener("click", averageAge);
  document.querySelector("button[data-task='checkAgeAbove25']").addEventListener("click", checkAgeAbove25);
  document.querySelector("button[data-task='uniqueProfessions']").addEventListener("click", uniqueProfessions);
  document.querySelector("button[data-task='sortByAge']").addEventListener("click", sortByAge);
  document.querySelector("button[data-task='updateJohnsProfession']").addEventListener("click", updateJohnsProfession);
  document.querySelector("button[data-task='getTotalProfessions']").addEventListener("click", getTotalProfessions);
});

