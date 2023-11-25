class Rectangulo {
    // iniciar el ancho y el alto del rectángulo
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    // mostrar las propiedades del rectángulo
    mostrarPropiedades() {
      console.log(`Ancho: ${this.ancho}, Alto: ${this.alto}`);
    }
  
    // modificar las propiedades del rectángulo
    modificarPropiedades(nuevoAncho, nuevoAlto) {
      this.ancho = nuevoAncho;
      this.alto = nuevoAlto;
      console.log('Propiedades modificadas.');
    }
  
    // calcular el perímetro del rectángulo
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
  
    // calcular el área del rectángulo
    calcularArea() {
      return this.ancho * this.alto;
    }
  }
  
  // uso de la clase Rectangulo
  const miRectangulo = new Rectangulo(5, 8);
  
  miRectangulo.mostrarPropiedades();
  
  console.log('Perímetro:', miRectangulo.calcularPerimetro());
  console.log('Área:', miRectangulo.calcularArea());
  
  miRectangulo.modificarPropiedades(10, 15);
  
  miRectangulo.mostrarPropiedades();
  console.log('Perímetro:', miRectangulo.calcularPerimetro());
  console.log('Área:', miRectangulo.calcularArea());
  