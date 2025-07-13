interface teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [key: string]: any; // allows adding extra properties like contract
}
const teacher1: teacher = {
  firstName: "Elorm",
  lastName: "Gershon",
  fullTimeEmployee: true,
  location: "Accra",
  contract: false, // extra property not defined in the interface
};
console.log(teacher1);

