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
  {
    id: 3,
    salario: 2000,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    callback(null, empleado); 
  } else {
    callback(`El empleado con ID ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`El empleado con id ${id} no existe`);
  }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("Error!!!");
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("El empleado:", empleado, "tiene un salario de:", salario);
    }
  });
});
