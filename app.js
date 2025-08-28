
const myButton = document.getElementById("blackBtn");

myButton.addEventListener("click", function(){
  document.body.style.backgroundColor = "green";
});

const mySwitch = document.getElementById("blueBtn");

mySwitch.addEventListener("click", function(){
  document.body.style.color = "white";
});

const students = ["toluwani", "abimbola", "micheal", "emmanuel", "frederick"];

const studentList = document.getElementById("studentList");

students.forEach(function(student){
  const li = document.createElement("li");
  li.textContent = student;
  studentList.appendChild(li);
});
