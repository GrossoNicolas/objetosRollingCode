class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log('El animal emite un sonido genérico.');
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad, raza) {
      super(nombre, edad);
      this.raza = raza;
    }
  
    emitirSonido() {
      console.log(`${this.nombre} (Perro) ladra: ¡Guau! ¡Guau!`);
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad, color) {
      super(nombre, edad);
      this.color = color;
    }
  
    emitirSonido() {
      console.log(`${this.nombre} (Gato) maulla: ¡Miau! ¡Miau!`);
    }
  }
  
  // Crear instancias de las clases Perro y Gato
  const perro1 = new Perro('Tilin', 2, 'Salchicha');
  const gato1 = new Gato('Wish', 1, 'Persa');
  
  // Llamar al método emitirSonido para cada instancia
  console.log('Sonido del Perro:');
  perro1.emitirSonido();
  
  console.log('\nSonido del Gato:');
  gato1.emitirSonido();
  