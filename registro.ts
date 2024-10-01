class Vehiculo {  
    private marca: string;  
    private modelo: string;  
    private año: number;  
    private patente: string;  

    constructor(marca: string, modelo: string, año: number, patente: string) {  
        this.marca = marca;  
        this.modelo = modelo;  
        this.año = año;  
        this.patente = patente;  
    }  

    // Métodos get y set  
    public getMarca(): string {  
        return this.marca;  
    }  

    public setMarca(marca: string): void {  
        this.marca = marca;  
    }  

    public getModelo(): string {  
        return this.modelo;  
    }  

    public setModelo(modelo: string): void {  
        this.modelo = modelo;  
    }  

    public getAño(): number {  
        return this.año;  
    }  

    public setAño(año: number): void {  
        this.año = año;  
    }  

    public getPatente(): string {  
        return this.patente;  
    }  

    public setPatente(patente: string): void {  
        this.patente = patente;  
    }  

    public toString(): string {  
        return `${this.marca} ${this.modelo} (${this.año}) - patente: ${this.patente}`;  
    }  
}  

class Auto extends Vehiculo {}  
class Moto extends Vehiculo {}  
class Camion extends Vehiculo {}  

class RegistroAutomotor {  
    private vehiculos: Vehiculo[] = [];  

    public agregarVehiculo(vehiculo: Vehiculo): void {  
        this.vehiculos.push(vehiculo);  
    }  

    public modificarVehiculo(patente: string, datos: { marca?: string; modelo?: string; año?: number }): boolean {  
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);  
        if (vehiculo) {  
            if (datos.marca) {  
                vehiculo.setMarca(datos.marca);  
            }  
            if (datos.modelo) {  
                vehiculo.setModelo(datos.modelo);  
            }  
            if (datos.año) {  
                vehiculo.setAño(datos.año);  
            }  
            return true;  
        }  
        return false;  
    }  

    public darDeBaja(patente: string): boolean {  
        const index = this.vehiculos.findIndex(v => v.getPatente() === patente);  
        if (index !== -1) {  
            this.vehiculos.splice(index, 1);  
            return true;  
        }  
        return false;  
    }  

    public obtenerVehiculo(patente: string): Vehiculo | null {  
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);  
        return vehiculo || null;  
    }  

    public mostrarVehiculos(): void {  
        this.vehiculos.forEach(vehiculo => console.log(vehiculo.toString()));  
    }  
}  

// Ejemplo de uso:  

const registro = new RegistroAutomotor();  

const auto1 = new Auto("Toyota", "Corolla", 2020, "ABC123");  
const moto1 = new Moto("Yamaha", "YZF-R3", 2019, "XYZ456");  
const camion1 = new Camion("Mercedes-Benz", "Actros", 2022, "LMN789");  

registro.agregarVehiculo(auto1);  
registro.agregarVehiculo(moto1);  
registro.agregarVehiculo(camion1);  

// Mostrar todos los vehículos registrados  
console.log("Vehículos en el registro:");  
registro.mostrarVehiculos();  

// Modificar un vehículo  
registro.modificarVehiculo("ABC123", { modelo: "Corolla Altis", año: 2021 });  

// Dar de baja un vehículo  
registro.darDeBaja("XYZ456");  

console.log("\nDespués de las modificaciones:");  
registro.mostrarVehiculos();