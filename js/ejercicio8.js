class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. ¡Mucho gusto!`);
    }
  
    despedirse() {
      console.log(`Adiós, ¡Hasta luego!`);
    }
  }
  
  // Crear dos objetos de la clase Persona
  const persona1 = new Persona("Felipe", 19, "Granjero");
  const persona2 = new Persona("Nuria", 35, "Ingeniera");
  
  // Llamar a los métodos saludar y despedirse para cada objeto
  console.log("Saludo de Persona 1:");
  persona1.saludar();
  persona1.despedirse();
  
  console.log("\nSaludo de Persona 2:");
  persona2.saludar();
  persona2.despedirse();
  