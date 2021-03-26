var students = ['John', 'Rose', 'Maria', 'Ruben'];

function greetStudents(student) {
  console.log(`Hello, ${student}`);
}

while(students.length > 0) {
  console.log(students);
  var student = students.shift();
  greetStudents(student);
}