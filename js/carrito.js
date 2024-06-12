const contenedorBurger = document.getElementById('container-burger')
const unidadesElement = document.getElementById('unidades')
const precioElement = document.getElementById('precio')
const carritoVacio = document.getElementById('carrito-vacio')
const totalesElement = document.getElementById('totales')
const reiniciarCarrito = document.getElementById('reiniciar')

function crearTarjeta() {
    contenedorBurger.innerHTML = ''
    const productos = JSON.parse(localStorage.getItem('burger'))
    if (productos && productos.length > 0) {

        productos.forEach(producto => {
            const nuevaBurger = document.createElement('div')
            nuevaBurger.classList = 'tarjeta-burger'
            nuevaBurger.innerHTML = `
            <img src=${producto.img}>
            <h3>${producto.name}</h3>
            <p>$${producto.price},00</p>
            <button>-</button>
            <span class="cantidad">${producto.cantidad}</span>
            <button>+</button>`
            contenedorBurger.appendChild(nuevaBurger)
            nuevaBurger
                .getElementsByTagName('button')[1]
                .addEventListener('click', (e) => {
                    const cuentaElement = e.target.parentElement.getElementsByTagName('span')[0];
                    cuentaElement.innerText = agregarAlCarrito(producto)
                    actualizarTotales()
                })
            nuevaBurger
                .getElementsByTagName('button')[0]
                .addEventListener('click', (e) => {
                    restarAlCarrito(producto)
                    crearTarjeta()
                    actualizarTotales()
                })
        });
    }
}
crearTarjeta()
actualizarTotales()

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem('burger'))
    let unidades = 0
    let precio = 0

    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad
            precio += producto.price * producto.cantidad
        })
        unidadesElement.innerText = unidades
        precioElement.innerText = precio
    }
    
    revisarMensajeVacio()
}

function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem('burger'))
    console.log(productos, productos == true)
    carritoVacio.classList.toggle('oculto', productos && productos.length > 0) 
    totalesElement.classList.toggle('oculto', !(productos && productos.length > 0))
}

revisarMensajeVacio()

reiniciarCarrito.addEventListener('click', () =>  {reiniciarCarrito
    localStorage.removeItem('burger')
    actualizarTotales()
    crearTarjeta()
    location.reload();
})