
//funcion para crear los imputs de la matriz 1
function crearInput1() {
    let filas = document.getElementById("filas1").value;
    let columnas = document.getElementById("columnas1").value;
    let div = document.getElementById("matriz1");
    div.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("id", "matriz1" + i + j);
            div.appendChild(input);
        }
        let br = document.createElement("br");
        div.appendChild(br);
    }
}


function crearInput2() {
    let filas = document.getElementById("filas2").value;
    let columnas = document.getElementById("columnas2").value;
    let div = document.getElementById("matriz2");
    div.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("id", "matriz2" + i + j);
            div.appendChild(input);
        }
        let br = document.createElement("br");
        div.appendChild(br);
    }
}


function crearMatrices() {
    crearInput1();
    crearInput2();
}


