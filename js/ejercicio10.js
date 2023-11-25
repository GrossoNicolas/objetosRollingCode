class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`Pasajero ${pasajero} abordado en el avión ${this.nombre}.`);
      } else {
        console.log(`El avión ${this.nombre} está lleno. No se puede abordar a más pasajeros.`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      console.log(`Avión ${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}.`);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
  
      if (avionEncontrado) {
        console.log(`Información del avión ${nombreAvion}:`);
        console.log(`- Destino: ${avionEncontrado.destino}`);
        console.log(`- Capacidad: ${avionEncontrado.capacidad}`);
        console.log(`- Pasajeros a bordo: ${avionEncontrado.listaPasajeros.join(', ')}`);
      } else {
        console.log(`No se encontró el avión ${nombreAvion} en el aeropuerto ${this.nombreAeropuerto}.`);
      }
    }
  }
  
  // objeto de tipo Aeropuerto
  const aeropuertoInternacional = new Aeropuerto('Aeropuerto Internacional');
  
  // 3 objetos de tipo Avion
  const avion1 = new Avion('Avion1', 150, 'Nueva York');
  const avion2 = new Avion('Avion2', 200, 'Londres');
  const avion3 = new Avion('Avion3', 100, 'Tokio');
  
  // Agregar los 3 aviones al aeropuerto
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  // Buscar un avión y usar el método abordar
  aeropuertoInternacional.buscarAvion('Avion2');
  avion2.abordar('Pasajero1');
  avion2.abordar('Pasajero2');
  
  // información del avión después de abordar
  aeropuertoInternacional.buscarAvion('Avion2');
  