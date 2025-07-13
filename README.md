# frontend-javascript
# 0x04-TypeScript

This project contains multiple tasks to help practice and demonstrate proficiency in TypeScript, including setup, interfaces, classes, ambient declarations, namespaces, and branded types.

## 📁 Directory Structure

```
0x04-TypeScript/
├── task_0/
├── task_1/
├── task_2/
├── task_3/
├── task_4/
├── task_5/
└── README.md
```

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/alx-frontend-javascript.git
cd alx-frontend-javascript/0x04-TypeScript
cd task_X    # Replace X with task number
npm install
npx webpack  # or npm run build if configured
```

---

## 🔹 task_0 – Initial Setup

- Webpack and TypeScript setup with tsconfig and webpack.config.
- Main entry file: `main.ts` compiled into `dist/bundle.js`.

---

## 🔹 task_1 – Interfaces

- `Teacher` interface includes readonly, optional, and index signature.
- `Directors` interface extends `Teacher` with `numberOfReports`.

---

## 🔹 task_2 – Classes and Functions

- `StudentClass` implements constructor and methods.
- `TeacherInterface` and `DirectorInterface` with implementation.
- Factory function `createEmployee()` returns based on salary.
- `executeWork()` and `isDirector()` type predicate.
- String literal union type `Subjects` and function `teachClass()`.

---

## 🔹 task_3 – Ambient Declarations

- Types `RowID`, `RowElement`.
- Ambient file `crud.d.ts` for JS module `crud.js`.
- Usage of `insertRow`, `updateRow`, `deleteRow` in `main.ts`.

---

## 🔹 task_4 – Namespaces

- Namespace `Subjects` containing:
  - `Teacher` interface (with merged types)
  - Base class `Subject`
  - Subclasses: `Cpp`, `Java`, `React`
- Each subclass implements `getRequirements()` and `getAvailableTeacher()`.

---

## 🔹 task_5 – Branded Types

- Interfaces `MajorCredits` and `MinorCredits` with branding.
- Functions:
  - `sumMajorCredits()`
  - `sumMinorCredits()`
- Prevents mixing major/minor types.

---

## 👨‍💻 Author

**Alidu Gershon Elorm**  
GitHub: [Ghost-610](https://github.com/Ghost-610/frontend-javascript)

## 📝 License

MIT License.