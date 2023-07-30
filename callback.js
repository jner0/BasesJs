// setTimeout(function () {
//   console.log("Hola Mundo");
// }, 1000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Fernando",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});
