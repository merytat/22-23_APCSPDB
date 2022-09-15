let name = "Bianca"
var age = 17
let height = 1.64
let isStudent = true

function writeOnConsole(){
    console.log("Name: " + name); //concatenating
    console.log("Age: " + age);
    console.log("Height: "+ height);
    console.log("It is "+ isStudent + " that " + name + " is a student")
}

function writeOnAlert(){
    alert("Name: " + name + "\nAge: " + age + "\nHeight: " + height)
}

function writeOnHtml(){
    let table = document.createElement("table");
    table.innerHTML = "<tr><td>" + name + "</td>" +
        "<td>" + age + "</td> <td>" + height + " </td></tr>"
    table.style.borderStyle = "solid";
    table.style.border = "1";
    document.body.appendChild(table);
}
