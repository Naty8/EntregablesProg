abstract class Vehiculo {
    private marca: string;
    private modelo: string;
    private año: number;
  
    constructor(marca: string, modelo: string, año: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    public getMarca(): string {
      return this.marca;
    }
  
    public setMarca(value: string): void {
      this.marca = value;
    }
  
    public getModelo(): string {
      return this.modelo;
    }
  
    public setModelo(value: string): void {
      this.modelo = value;
    }
  
    public getAño(): number {
      return this.año;
    }
  
    public setAño(value: number): void {
      this.año = value;
    }
  
    public abstract descripcion(): string;
  }