//CLASE 2
let a;

function mensaje() {
    let o1 = document.getElementById("o1").value;
    let o2 = document.getElementById("o2").value;
    let area = (o1 * o2) / 2
    alert(area)

}

function asignar() {
    var a;
    var a;
    a = "bien vivo";
    for (let a = 0; a < 3; a++)
        a += a;
}

//CLASE 3
function areaTriangulo() {
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;
    let a = b * h / 2;
    document.getElementById("area").value = a;
}

//RECUERDA SIEMPRE PONER EL PARSEINT O PARSEFLOAT
function areaTrapecio() {
    let b1 = parseFloat(document.getElementById("basemayor").value);
    let b2 = parseFloat(document.getElementById("basemenor").value);
    let h = parseFloat(document.getElementById("alturaT").value);
    let a = ((b1 + b2) * h) / 2;
    document.getElementById("areaT").value = a;
}