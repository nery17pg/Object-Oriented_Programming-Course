//Se recomienda que todas las variables en js se definan y se les asigne un valor 

//Se creó la variable y se le asignó un valor
let a;

function mensaje() {
    //Estas variables asignan de valor lo que se introduce en las cajas en el HTML y después se extrae gracias a ".value".
    let o1 = document.getElementById("o1").value;
    let o2 = document.getElementById("o2").value;
    //Restar los valores anteriores y verifica si es menor a cero, si es T devuelve Negativo y si es F es Positivo.
    alert(o1 - o2 < 0 ? "Negativo" : "Positivo");
}

function asignar() {
    let a;
    a = "Bien vivo";
    for (let a = 0; a < 3; a++)
        a += a;
}