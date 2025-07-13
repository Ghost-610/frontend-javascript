// Branded interface for Major Credits
interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

// Branded interface for Minor Credits
interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits"
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits"
  };
}

// Example usage and testing
const majorSubject1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 4, __brand: "MajorCredits" };

const minorSubject1: MinorCredits = { credits: 1, __brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 2, __brand: "MinorCredits" };

// Sum major credits
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Total Major Credits:", totalMajorCredits.credits); // Output: 7

// Sum minor credits
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Total Minor Credits:", totalMinorCredits.credits); // Output: 3

// This would cause a TypeScript error (uncomment to test):
// const invalidSum = sumMajorCredits(majorSubject1, minorSubject1); // Error!

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };