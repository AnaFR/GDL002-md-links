
// Importar modulo File System (fs)

const fs = require('fs');
// const path = require ('./path');
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

//  //Verificar si hay un path
//   isThereApath: function (filePath) {
//     if (filePath == undefined) {
//       console.log("Insert a path");
//       return false
//     }
//     else
//       return true
//     }
//   },

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

//   // function to verificated that path is absolute
//   // pathIsAbsolute : function (pathfile){
//   //   if(path.isAbsolute(pathfile)){
//   //     return true;
//   //   }
//   //   else{
//   //     return false
//   //   }
//   // },

//   //Función para verificar si la ruta es un directorio

//   pathDirectory: function (pathFile) {
//     if (fs.statSync(pathFile).isDirectory()) {
//       return true
//     } else {
//       return false
//     }
//   },



//   //Funcion que checa si es un .md
//   pathMd: function (pathFile) {
//     if (path.extname(pathFile) === ".md") {
//       return true
//     }
//     else {
//       return false
//     }
//   },


//   //Funcion para verificar si el campo está vacío o lleno
//   pathInserted: function (pathFile) {
//     if (pathFile == undefined) {
//       console.log("false");
//       return false
//     }
//     else {
//       return true
//     }
//   },

//   // Función para saber si la ruta existe o no 

//   pathWorking: function (pathFile) {
//     if (fs.existsSync(pathFile)) {
//       console.log("true");
//       return true
//     } else {
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

//   //Funcion que checa si es un .md
//   pathMd: function (pathFile) {
//     if (path.extname(pathFile) === ".md") {
//       return true
//     } else {
//       return false
//     }
//   },

//   readingFile: function (pathFile) {
//     let archivo = fs.readFileSync(pathFile, 'utf-8');
//     console.log(archivo);
//     return true;
//   },

// };

