const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Nemecio",
  },
  {
    id: 3,
    nombre: "Domenica",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;

    salario
      ? resolve(salario)
      : reject(`No existe salario para el empleado con id ${id}`);
  });
};

const getInfoUsuario = async () => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado ${empleado} es de: ${salario}`;
  } catch (error) {
    return error;
  }
};
const id = 3;

getInfoUsuario()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
