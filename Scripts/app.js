// Variables globales
let productos = [
    { nombre: 'Puma Ultra Play Fg/Ag', precio: 150, img: './assets/images/puma1.png' },
    { nombre: 'Guayo Puma Future', precio: 50, img: './assets/images/puma2.png' },
    { nombre: 'GUAYOS PUMA FUTURE 7 MATCH FG/AG', precio: 100, img: './assets/images/puma3.png' },
    { nombre: 'Guayo Puma Future Blanco Rojo', precio: 79, img: './assets/images/puma4.png' },
    { nombre: 'Guayos Puma Ultra 1.3 FG / AG', precio: 200, img: './assets/images/puma5.png' },
    { nombre: 'Guayos Future Ultimate Blanco/verde', precio: 300, img: './assets/images/puma6.png' },
    { nombre: 'Guayos Puma Future Ultimate Fg/ag Hombre', precio: 250, img: './assets/images/puma7.png' },

    { nombre: 'Nike Zoom Vapor 15 Academy Fg/Mg', precio: 150, img: './assets/images/nike1.png' },
    { nombre: 'Nike Mercurial Superfly 10 Elite ', precio: 100, img: './assets/images/nike2.png' },
    { nombre: 'Guayos Nike Superfly 9', precio: 50, img: './assets/images/nike3.png' },
    { nombre: 'Nike Mercurial Superfly 10', precio: 80, img: './assets/images/nike4.png' },
    { nombre: 'Guayos Nike Mercurial Vapor 15', precio: 89, img: './assets/images/nike5.png' },
    { nombre: 'Nike Phantom Luna 2 Academy', precio: 200, img: './assets/images/nike6.png' },
    { nombre: 'Nike Phantom Luna 2 Elite', precio: 329, img: './assets/images/nike7.png' },

    { nombre: 'Adidas Guayos F50', precio: 199, img: './assets/images/adidas1.png' },
    { nombre: 'Guayos Adidas Crazyfast  ', precio: 209, img: './assets/images/adidas2.png' },
    { nombre: 'Guayo Adidas Predator Azul Naranja', precio: 59, img: './assets/images/adidas3.png' },
    { nombre: 'Liga Adidas Guayos X Crazyfast', precio: 69, img: './assets/images/adidas4.png' },
    { nombre: 'Adidas Guayos X Crazyfast Club', precio: 299, img: './assets/images/adidas5.png' },
    { nombre: 'Adidas Guayos Predator Accuracy.3 Sin Cordones', precio: 29, img: './assets/images/adidas6.png' },
    { nombre: 'Adidas Guayos X Crazyfast Club Multiterreno', precio: 69, img: './assets/images/adidas7.png' },

];
let carrito = [];
let total = 0;

// Función para agregar al carrito
function comprar(index) {
    const producto = productos[index];

    // Verifica si el producto ya está en el carrito
    const encontrado = carrito.find(item => item.nombre === producto.nombre);
    if (encontrado) {
        encontrado.cantidad += 1; 
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    total += producto.precio; // Suma el precio al total
    visualizarProductos(); // Actualiza la visualización del carrito
}

// Función para visualizar los productos en el carrito
function visualizarProductos() {
    const productosDiv = document.getElementById('products');
    productosDiv.innerHTML = ''; // Limpia el contenido actual

    carrito.forEach((item, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <div class="images">
                <img src="${item.img}" alt="${item.nombre}">
                <span>${item.nombre} (x${item.cantidad}) - $${(item.precio * item.cantidad).toFixed(2)}</span>
                <button onclick="eliminarProducto(${index})" class="eliminar">Eliminar</button>
            </div>
        `;
        productosDiv.appendChild(productoDiv);
    });

    const totalDiv = document.getElementById('total');
    totalDiv.querySelector('span').innerText = `$${total.toFixed(2)}`; // Muestra el total
}

// Función para eliminar productos del carrito
function eliminarProducto(index) {
    const productoEliminado = carrito[index];
    total -= productoEliminado.precio * productoEliminado.cantidad; // Resta el total del producto
    carrito.splice(index, 1); // Elimina el producto del carrito
    visualizarProductos(); // Actualiza la visualización
}

// Función para cerrar el carrito
const x = document.getElementById('x');
x.addEventListener('click', function() {
    const cartContainer = document.getElementById('cart-contenetor');
    cartContainer.classList.remove('show');
});

// Evento para abrir el carrito
const cartIcon = document.getElementById('cart');
cartIcon.addEventListener('click', function() {
    const cartContainer = document.getElementById('cart-contenetor');
    cartContainer.classList.toggle('show');
});
