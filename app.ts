function ejercicio1() {
  let nombre: string;
  nombre = "Miguelo";
  let edad: number;
  edad = 30;

  let personaje = {
    nombre: nombre,
    edad: edad
  };

  console.log(personaje);
}
ejercicio1();

function ejercicio2() {
  interface Superheroe {
    nombre: string;
    poderes: string[];
  }

  let spiderman: Superheroe = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
  };

  console.log(spiderman);
}
ejercicio2();


class Rombo {
  private diagonalVertical: number;
  private diagonalHorizontal: number;

  constructor(diagonalVertical: number, diagonalHorizontal: number) {
    this.diagonalVertical = diagonalVertical;
    this.diagonalHorizontal = diagonalHorizontal;
  }

  public calcularArea():number {
    return this.diagonalVertical*this.diagonalHorizontal;
  }

}

const area = new Rombo(2,3);
console.log(area.calcularArea());

function ejercicio4() {
  
}