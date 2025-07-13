// 🔹 1. Teacher Interface with optional/readonly/dynamic properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
}

const teacher1: Teacher = {
  firstName: "Elorm",
  lastName: "Gershon",
  fullTimeEmployee: true,
  location: "Accra",
  contract: false,
};
console.log(teacher1);

// 🔹 2. Directors Interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 🔹 3. StudentClass with constructor/interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Elorm", "Gershon");
console.log(student.displayName()); // Elorm
console.log(student.workOnHomework()); // Currently working

// 🔹 4. Director & Teacher Interfaces and Classes
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 🔹 5. createEmployee Function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));  // Teacher {}
console.log(createEmployee(1000)); // Director {}
console.log(createEmployee('$500')); // Director {}

// 🔹 6. isDirector type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// 🔹 7. executeWork Function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// 🔹 8. String Literal Types for Subjects
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
