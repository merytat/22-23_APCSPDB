//This is my JS4

function addingH3(){
    let newH3 = document.createElement("h3");
    newH3.innerHTML = "Here's a new message"
    document.body.appendChild(newH3)
}

//function that modifies and existing HTML element innerHTML
function changeRow(){
    document.getElementById("row1").innerHTML =
        "<td> new content1 </td>" +
        "<td> new content2</td>" +
        "<td> new content3</td>"
}

//function that adds more content to an existing HTML tag
function addRow(){
    document.getElementById("table1").innerHTML +=
        "<tr>" +
        "<td> new row Cl 1 </td>" +
        "<td> new row Col 2</td>" +
        "<td> new row col 3</td> </tr>"

}