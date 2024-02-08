

let numeroSecreto;


let listaNumerosSorteados = [];

let numeroMaximo = 3;



let button = document.querySelector('reiniciar')

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}


function verificarIntento() {
    console.log(numeroSecreto); 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeIntento < 100){
        if (numeroDeUsuario == numeroSecreto) {
            asignarTextoElemento('p', `acertaste el numero secreto en ${numeroDeIntento} ${(numeroDeIntento == 1) ? 'vez' : 'veces' }`);
            
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled', 'true')
        }
        else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', `Fallaste, el numero secreto es menor al que ingresaste. Te quedan ${numeroDeIntento} ${(numeroDeIntento == 1) ? 'vez' : 'veces' }`);
            } else {
                asignarTextoElemento('p', `Fallaste, el numero secreto es mayor al que ingresaste. Te quedan ${numeroDeIntento} ${(numeroDeIntento == 1) ? 'vez' : 'veces' }`);
            }
        }

        numeroDeIntento++;
        console.log(numeroDeIntento);
        limpiarInputUsuario()
    } else {
        asignarTextoElemento('p', 'juego terminado');
    }
    return;
};
function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo + 1);

    if (listaNumerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p', 'todos los numeros ya fueron asignados');

       // condicionesIniciales();

    }
    else {
        if (listaNumerosSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroSecreto);
            console.log(listaNumerosSorteados);
            return numeroSecreto;
        }
    }
}

function limpiarInputUsuario(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';

    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {

    asignarTextoElemento('h1', "Juego del numero top secret");
    asignarTextoElemento('p', `Elige un numero del 1 al ${numeroMaximo}`);

    document.getElementById('intentar').removeAttribute('disabled');

    numeroSecreto = generarNumeroSecreto();
    numeroDeIntento = 1;
    console.log(numeroSecreto);
}


function iniciarNuevoJuego() {

    limpiarInputUsuario();
    condicionesIniciales();

    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}



condicionesIniciales();