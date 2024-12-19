class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    getMarca() {
      return this.marca;
    }
  
    setMarca(value) {
      this.marca = value;
    }
  
    getModelo() {
      return this.modelo;
    }
  
    setModelo(value) {
      this.modelo = value;
    }
  
    getAño() {
      return this.año;
    }
  
    setAño(value) {
      this.año = value;
    }
  
    // Método abstracto
    descripcion() {
      throw new Error("El método 'descripcion()' debe ser implementado.");
    }
  }
  
  module.exports = { Vehiculo };
  