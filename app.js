// Ejercicio 1
function ejercicio1() {
    var nombre;
    nombre = "Miguelo";
    var edad;
    edad = 30;
    var personaje = {
        nombre: nombre,
        edad: edad
    };
    console.log(personaje);
}
ejercicio1();
// Ejercicio 2
function ejercicio2() {
    var spiderman = {
        nombre: "Peter parket",
        poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
    };
    console.log(spiderman);
}
ejercicio2();
// Ejercicio 3
var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.calcularArea = function () {
        return this.diagonalVertical * this.diagonalHorizontal;
    };
    return Rombo;
}());
var area = new Rombo(2, 3);
console.log(area.calcularArea());
// Ejercicio 4
var suma = function (a, b) {
    return a + b;
};
console.log(suma(2, 3));
