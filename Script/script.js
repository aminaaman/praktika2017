function add() {
    var a = document.getElementById("fam").value;
    var b = document.getElementById("im").value;
    var c = document.getElementById("ot").value;
    var d = document.getElementById("task").value;
    document.getElementById("table").innerHTML += "<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td></tr>";
}	