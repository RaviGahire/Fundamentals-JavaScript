const students = [
  {
    id: 1,
    name: "John Doe",
    age: 18,
    grade: "A",
    subjects: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 19,
    grade: "B",
    subjects: ["English", "Biology", "Geography"],
  },
  {
    id: 3,
    name: "Alex Johnson",
    age: 17,
    grade: "A",
    subjects: ["Physics", "Chemistry", "Math"],
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 18,
    grade: "C",
    subjects: ["Art", "History", "Economics"],
  },
];


// chaining
let agefilter = students
  .filter((stud, index) => {
    // return student grade
    return stud.grade == "A";
  })
  .map((stud) => {
    return stud.name;
  });
console.log(agefilter);
