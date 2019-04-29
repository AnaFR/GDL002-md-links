const mdLinks = require ('./index');
const filePath = process.argv[2];
const path = require ('path');
const resultReadFile = mdLinks(filePath, null);
let htmlLinks = [];


// resultado de leer archivo
resultReadFile.then(
   (data)=> { // On Success
    console.log("Links encontrados:");
    urlify(data).forEach(link => console.log(link +" " + filePath));  
   },
   (err)=> { // On Error
       console.error(err);
   }
);







//Función que extre los links
function urlify(data) {
    const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
    const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
    let allLinks = data.match(mdLinkRgEx);
    // var htmlLinks = [];
    for (var x in allLinks) {
      var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
      var grupoData = {
        href: grpdDta[2],
        text: grpdDta[1],
        file: filePath
      }; 
      htmlLinks.push(grupoData);   
    }
    console.log(htmlLinks);
  };
 
  
//función para sumar los linksjk
  function sumatotal(htmlLinks){
  const total = 0;
  for ( i = 0; i < htmlLinks.length; i++ ) {
    total += htmlLinks[ i ];
  };
  console.log( "El total de los elementos del arreglo es", total );
  return (total);
};

sumatotal(htmlLinks);
// function sumaLinks() {
  
// for(var i = 0 ; i < htmlLinks.length; i++);{
//   console.log (htmlLinks[i]);

// }
// };
// sumaLinks();





//Validar que sea un archivo '.md'
function validateMd(filePath) {
  console.log(filePath)
  if (filePath === undefined) {
    return console.log('Introduce un directorio');
  } else {
    const pathExtencion = path.extname(filePath);
    console.log (pathExtencion);
    if (pathExtencion != '.md') {
      console.log('Incorrecto, no es  archivo .md');
      return false;
    } else {
      console.log('Es un archivo md');
      return true;
    }
  }
}

validateMd(filePath);


 //function to verificated that path is absolute
 function pathIsAbsolute (filePath){
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





module.exports = {
  validateMd,
  pathIsAbsolute,
  
}


