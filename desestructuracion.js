const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const { nombre, apellido, poder} = deadpool;
// console.log(nombre, apellido, poder);

function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
//   const { nombre, apellido, poder } = deadpool;
  console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);