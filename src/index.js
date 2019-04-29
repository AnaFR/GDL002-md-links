module.exports = () => {
  // ...
};


// Importar modulo File System (fs)

const fs = require('fs');
const path = require ('path');
// const parse = require ('./parse');




// Modulo para leer archivos 
module.exports = (filePath, options) => {
 return new Promise((resolve, reject)=> {
   // Leer el archivo
   fs.readFile(filePath, function(err, data){
     if (err){
       return reject(err);
     }
     resolve(data.toString());
   });
 });
}; 








// module.exports = {



//   // Función para saber si la ruta existe o no 
//   pathWorking: function (pathFile) {
//     if (fs.existsSync(pathFile)) {
//       console.log("true");
//       return true
//     }
//     else {
//       console.log("false");
//       return false
//     }
//   },


//   //Función para verificar si la ruta es un directorio

//   pathDirectory: function (pathFile) {
//     if (fs.statSync(pathFile).isDirectory()) {
//       return true
//     } else {
//       return false
//     }
//   },












