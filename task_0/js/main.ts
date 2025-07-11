// Step 1: Create the blueprint for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
// Step 2: Create two students using the blueprint
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "Boston",
};
const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "New York",
};

// Step 3: Create an array to hold the students
const studentsList: Student[] = [student1, student2];


// Step 4: Create a table and show the students
const table = document.createElement("table");

// Add each student as a row in the table
studentsList.forEach((student) => {
    const row = document.createElement("tr");
 //add first name 
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
// add last name
    const lastNameCell = document.createElement("td"); //this is optional

// add location
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    
// Append the row to the table
    table.appendChild(row);

});