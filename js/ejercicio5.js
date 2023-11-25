class Persona {
    // Constructor para inicializar las propiedades de la persona
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
    }
  
    // calcular la generación y mostrar el rasgo característico
    mostrarGeneracion() {
      let generacion = '';
      let rasgoCaracteristico = '';
  
      if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
        generacion = 'Baby Boomer';
        rasgoCaracteristico = 'Crecieron en la posguerra y la reconstrucción económica.';
      } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
        generacion = 'Generación X';
        rasgoCaracteristico = 'Experimentaron el auge de la tecnología y el cambio cultural.';
      } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1996) {
        generacion = 'Generación Y (Millennials)';
        rasgoCaracteristico = 'Crecieron con el auge de internet y las redes sociales.';
      } else if (this.añoNacimiento >= 1997 && this.añoNacimiento <= 2012) {
        generacion = 'Generación Z';
        rasgoCaracteristico = 'Nativos digitales, crecieron con la tecnología móvil y las redes sociales.';
      } else {
        generacion = 'Generación Desconocida';
        rasgoCaracteristico = 'Sin información sobre la generación.';
      }
  
      console.log(`Generación: ${generacion}`);
      console.log(`Rasgo Característico: ${rasgoCaracteristico}`);
    }
  }
  
  // Ejemplo de uso de la clase Persona
  const persona1 = new Persona('Juan', 30, '123456789', 'H', 70, 1.75, 1992);
  const persona2 = new Persona('María', 45, '987654321', 'M', 65, 1.60, 1978);
  
  // Mostrar generación y rasgo característico para cada persona
  console.log('Persona 1:');
  persona1.mostrarGeneracion();
  
  console.log('\nPersona 2:');
  persona2.mostrarGeneracion();
  