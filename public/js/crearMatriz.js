
//funcion para crear los imputs de la matriz 1
function crearInput(n) {
    let filas = document.getElementById(`filas${n}`).value;
    let columnas = document.getElementById(`columnas${n}`).value;
    let div = document.getElementById(`matriz${n}`);
    div.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class", "matriz");
            input.setAttribute("id", `${n},${i},${j}`);
            div.appendChild(input);
        }
        let br = document.createElement("br");
        div.appendChild(br);
    }
}

function crearMatrices() {
    crearInput(1);
    crearInput(2);
}


async function sumarMatriz(){
    const matrices = document.querySelectorAll('.matriz');

    const matriz1 = [];
    const matriz2 = [];

    matrices.forEach(m => {
        let value = m.value;
        let position = m.id.split(',')
        const matriz = parseInt(position[0])
        let fila = parseInt(position[1])
        let columna = parseInt(position[2])

        if(typeof parseInt(value) !== 'number') return alert('Ingresar un valor numerico');

        if(matriz === 1){
            if (!matriz1[fila]) matriz1.push([]);

            matriz1[fila][columna] = value

        } else {

            if (!matriz2[fila]) matriz2.push([]);
    
                matriz2[fila][columna] = value
        }
    })

    if((matriz1.length !== matriz2.length) && (matriz1[0].length !== matriz2.length)) return alert('No se puede sumar matrices de dimensiones distintas');

    const peticion = await fetch('http://localhost:2000/sumar', {
        method: 'POST',
        body: JSON.stringify({
            matriz1, matriz2
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })

    const res = await peticion.json();

    pintarResultado(res)
}

function pintarResultado(result){
    console.log(result)
    const filas = result.length
    const columnas = result[0].length

    console.log(filas, columnas)

    let div = document.getElementById(`resultado`);
    div.innerHTML = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class", "matriz");
            input.setAttribute("value", result[i][j])
            div.appendChild(input);
        }
        let br = document.createElement("br");
        div.appendChild(br);
    }
}

