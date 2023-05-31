const vacancy = [
    "Database Developer",
    "PHP Developer",
    "Javascript Developer",
    "Technical Writer",
    "System Analyst",
];
const position = ["Bandung", "Jakarta"];

var select = document.getElementById("Vacancy");

for (let i = 0; i < vacancy.length; i++) {
    const element = vacancy[i];

    var option = document.createElement("option");
    option.text = element;
    option.value = element;

    select.appendChild(option);
}


var select = document.getElementById("Position");

for (let i = 0; i < position.length; i++) {
    const element = position[i];

    var option = document.createElement("option");
    option.text = element;
    option.value = element;

    select.appendChild(option);
}