const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 21 },
  { name: 'Jane', age: 20 },
];

function createTableTh(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function createTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector('table');
let data = Object.keys(students[0]);
createTableTh(table, data);
createTable(table, students);

const calcAvgAge = (students) => {
  const total = students.reduce((acc, student) => acc + student.age, 0);
  return total / students.length;
};

// callback function when button clicked
const handleClick = () => {
  const avg = calcAvgAge(students);
  document.getElementById('avg').innerHTML = avg;
};

// add onclick listener
document.getElementById('calcButton').addEventListener('click', handleClick);
