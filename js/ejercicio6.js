class Libro {
  // Constructor para inicializar las propiedades del libro
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  // Métodos get y set para ISBN
  get ISBN() {
    return this._ISBN;
  }

  set ISBN(nuevoISBN) {
    this._ISBN = nuevoISBN;
  }

  // Métodos get y set para Título
  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  // Métodos get y set para Autor
  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  // Métodos get y set para Número de Páginas
  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(nuevoNumPaginas) {
    this._numPaginas = nuevoNumPaginas;
  }

  // Método para mostrar la información del libro
  mostrarLibro() {
    console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
  }
}

// Crear instancias de la clase Libro
const libro1 = new Libro('123456789', 'JavaScript para Principiantes', 'John Doe', 200);
const libro2 = new Libro('987654321', 'Programación en JavaScript', 'Jane Smith', 300);

// Utilizar el método mostrarLibro para mostrar la información de cada libro
console.log('Información del Libro 1:');
libro1.mostrarLibro();

console.log('\nInformación del Libro 2:');
libro2.mostrarLibro();

// Determinar cuál de los dos libros tiene más páginas
if (libro1.numPaginas > libro2.numPaginas) {
  console.log('\nLibro 1 tiene más páginas.');
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log('\nLibro 2 tiene más páginas.');
} else {
  console.log('\nAmbos libros tienen la misma cantidad de páginas.');
}
