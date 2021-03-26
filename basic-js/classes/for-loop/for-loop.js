var students = ['John', 'Rose', 'Maria', 'Ruben'];

function greetStudents(student) {
  console.log(`Hello, ${student}`);
}

// For loop
console.log('Using for');
for(var i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}

// For of
console.log('Using for of');
for(var student of students) {
  greetStudents(student);
}