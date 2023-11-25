class Producto {
    // Constructor para inicializar las propiedades del producto
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para imprimir los datos del producto
    imprimeDatos() {
      document.write(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
    }
  }
  
  // Crear instancias de la clase Producto
  const producto1 = new Producto(1, 'Producto 1', 10.99);
  const producto2 = new Producto(2, 'Producto 2', 20.49);
  const producto3 = new Producto(3, 'Producto 3', 15.75);
  
  // Almacenar las instancias en un array
  const arrayDeProductos = [producto1, producto2, producto3];
  
  // Utilizar el método imprimeDatos para mostrar los valores de los objetos
  document.write('Datos de los productos:');
  for (const producto of arrayDeProductos) {
    producto.imprimeDatos();
  }
  