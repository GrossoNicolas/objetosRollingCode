// Definir el objeto auto
const auto = {
    color: 'Rosa',
    marca: 'Cooper',
    modelo: 'Mini',
    estaEncendido: false,
  
    // Método para encender el auto
    encender: function() {
      if (!this.estaEncendido) {
        this.estaEncendido = true;
        console.log('El auto está encendido.');
      } else {
        console.log('El auto ya está encendido.');
      }
    },
  
    // Método para apagar el auto
    apagar: function() {
      if (this.estaEncendido) {
        this.estaEncendido = false;
        console.log('El auto está apagado.');
      } else {
        console.log('El auto ya está apagado.');
      }
    }
  };
  
  // Ejemplo de uso
  console.log('Color del auto:', auto.color);
  console.log('Marca del auto:', auto.marca);
  console.log('Modelo del auto:', auto.modelo);
  
  auto.encender(); // Intentar encender el auto
  auto.apagar();   // Intentar apagar el auto
  auto.encender(); // Intentar encender el auto nuevamente
  