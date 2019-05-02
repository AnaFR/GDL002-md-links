const fs = require('fs');// modulo que nos permite acceder al sistema de archivos para poder leer sus contenidos y crear otros archivos o carpetas.
const path = require ('path'); // Incluir modulo de path (ubicación exacta de un archivo.)
const filePath = process.argv[2];//It´s like get an element by Id in JS.//process.argv es un arreglo que contiene los argumentos de linea de comando.// posición para obtener el archvivo con extensión .md
const options = process.argv[3];// contiene argunmentos en este caso stats y validate, //contiene la funcion de readFile
const fetch = require('node-fetch');// modulo fetch requiere instalación


//Function to verificated that it´s an .md file
const validateFileMd = filePath => {
  console.log(filePath);
  if (filePath === undefined) {
    return console.log('Enter a file');
  } else {
    const fileExtencion = path.extname(filePath);
    console.log(fileExtencion);
    if (fileExtencion != '.md') {
      console.log('It´s not an .md file');
      return false;
    } else {
      console.log('It´s an .md file');
      return true;
    }
  }
};
validateFileMd(filePath);


// Function to know if it is file or directory
const directoryOrFile = filePath => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        if (err.code === 'ENOENT') {
          resolve(false);
        } else {
          reject(err);
        }
      }
      if (stats.isDirectory()) {
        console.log('it is a directory');
        return true;
      }
      if (stats.isFile()) {
        console.log('it is a file');
        resolve(stats.isFile());
      }
    });
  });
};

directoryOrFile(filePath);





//function to verificated that path is absolute
const pathIsAbsolute = (filePath) => {
  if(path.isAbsolute(filePath)){
    console.log('path is absolute');
    return true;
  }
  else{
    console.log('path is not absolute');
    return false
  }
};
pathIsAbsolute (filePath);


//function that extracts the links 
const getLinks = (filePath, data) => {
  const rExText = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
  const rExLink = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
  const toString = data.toString();
  const text = toString.match(rExText); //  text
  const links = toString.match(rExLink); // url
  var myReturnData = [];
  for (let i = 0; i < links.length; i++) {
    var myLinkData = {
      text: text [i],
      link: links[i],
      file: filePath,
    };
    myReturnData.push(myLinkData);
    
  }
  return myReturnData;
  
};

var myProcData; 


//function to read file .md and print the links and fetch response status
function readCompletePath (filePath) {
  let badLinks=0;
  let goodLinks=0;
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data.toString());
      console.log("Found links:");
      myProcData = getLinks(filePath,data);
      console.log(myProcData);
      fetch(myProcData[0].link)
  .then(response => {
    if (response.status == 200) {
      goodLinks++;
      console.log(`Total Functional Links: ${goodLinks}\n`);
      console.log(`Response code: ${response.status}\nResponse: ${response.statusText}\n`)
    } else if (response.status == 404||response.status == 400) {
      badLinks++;
      console.log(`Response code: ${response.status}\nResponse: ${response.statusText}\n`)
      console.log(`Total Broken links: ${badLinks}\n`);
    }
})
      
    });
    
  });




  
};

readCompletePath(filePath);




// function readCompletePath(filePath){
//   fs.readFile(filePath, 'utf-8', (err,data)=>{
//     if(err){
//       return console.log(err);
//     }
//     {
//       console.log('READCOMPLETEPATH');
      
//       const toString =data.toString();
//       const regExp= /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
//       // extrae todo lo que hace match regexp con los url
//       let url= toString.match(regExp);
//       let uniqueUrl;
      
//       console.log(`File name: ${filePath}`);
//       console.log('Total links: '+ ' ' + url.length);
//       uniqueUrl= url.filter((currentItem, itemIndex, currentArray) => currentArray.indexOf(currentItem)===itemIndex); // indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array
//       console.log('Total unique Links: ' + " " + uniqueUrl.length + '\n');
      
//         //console.log(needValidation + ' su valor');
//          validateStats(uniqueUrl, filePath);

//     }
   
//   });
 
// }








 

// function validateStats(uniqueUrl, filePath){
//   let badLinks=0;
//   let goodLinks=0;
//   console.log('VALIDATESTATS');
//   // console.log(uniqueUrl + ' valor de uniqueURL');
  
//   for(let i=0; i<uniqueUrl.lenght; i++){
//     fetch(uniqueUrl[i])
//         .then(response => {
//           console.log(uniqueUrl.lenght + ' valor lenght');
          
//           if (response.status == 404||response.status == 400) {
//             badLinks++;
//           }else if (response.status == 200|201) {
//             goodLinks++;
//           }
//           if (goodLinks+badLinks === uniqueUrl.length) {
//             console.log(`File: ${filePath} has:`);
//             console.log(`Total Functional Links: ${goodLinks}\nTotal Broken links: ${badLinks}\n`);
//           }
//         }
//       );
//     }
// }





module.exports = {
  validateFileMd,
 pathIsAbsolute,
   getLinks,
  // validateStats,
  readCompletePath
 
  
}


