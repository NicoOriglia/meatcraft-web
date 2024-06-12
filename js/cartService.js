function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem('burger'));
    console.log(memoria);
    let cuenta = 0
    if (!memoria) {
        const nuevaBurger = getNuevoProductoParaMemoria(producto);
        localStorage.setItem('burger', JSON.stringify([nuevaBurger]));
        cuenta = 1
    } else {
        const indiceProducto = memoria.findIndex(burger => burger.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        cuenta = 1
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
            cuenta = 1
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad
        }
        localStorage.setItem('burger', JSON.stringify(nuevaMemoria));
    }
    agregarNumero()
    return cuenta
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem('burger'));
    const indiceProducto = memoria.findIndex(burger => burger.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1)
    } else {
        memoria[indiceProducto].cantidad--
    }
    localStorage.setItem('burger', JSON.stringify(memoria))
    agregarNumero();
}   

function getNuevoProductoParaMemoria(producto){
    const nuevaBurger = producto;
    nuevaBurger.cantidad = 1;
    return nuevaBurger;
}

const cuentaCarrito = document.getElementById('cuenta-carrito');

function agregarNumero(){
    const memoria = JSON.parse(localStorage.getItem('burger'));
    if(memoria && memoria.length > 0){
    cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    cuentaCarrito.innerText = cuenta;
    }else {
        cuentaCarrito.innerText = 0;
    }
}

agregarNumero();

