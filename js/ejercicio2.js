// Definir el objeto cuenta
const cuenta = {
    titular: 'Alex',
    saldo: 0,
  
    // Método para ingresar dinero a la cuenta
    ingresar: function(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log('Se ha ingresado $' + cantidad + ' a la cuenta.');
      } else {
        console.log('Error: La cantidad a ingresar debe ser mayor que 0.');
      }
    },
  
    // Método para extraer dinero de la cuenta
    extraer: function(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log('Se ha extraído $' + cantidad + ' de la cuenta.');
      } else {
        console.log('Error: La cantidad a extraer debe ser mayor que 0 y no puede superar el saldo disponible.');
      }
    },
  
    // Método para informar el estado de la cuenta
    informar: function() {
      console.log('Titular: ' + this.titular);
      console.log('Saldo actual: $' + this.saldo);
    }
  };
  
  // Mostrar información inicial de la cuenta
  console.log('Descripción inicial de la cuenta:');
  cuenta.informar();
  
  // Ingresar dinero a la cuenta
  cuenta.ingresar(100);
  
  // Mostrar información después de ingresar dinero
  console.log('\nDescripción después de ingresar dinero:');
  cuenta.informar();
  
  // Extraer dinero de la cuenta
  cuenta.extraer(50);
  
  // Mostrar información después de extraer dinero
  console.log('\nDescripción después de extraer dinero:');
  cuenta.informar();
  