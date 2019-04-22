
const mdLinks = require('./index');

const filePath = process.argv[2];
const path = require ('path');


 const resultReadFile = mdLinks(filePath, null);

resultReadFile.then(
   (data)=> { // On Success
    console.log("Links encontrados =");
    urlify(data).forEach(link => console.log(link));
       
   },
   (err)=> { // On Error
       console.error(err);
   }
);

//Función que extre los links
function urlify(data) {
    // console.log(txt);
    const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
    const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
  
    let allLinks = data.match(mdLinkRgEx);
    var htmlLinks = [];
    for (var x in allLinks) {
      var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    var linkified = "<a href=\"" + grpdDta[2] + "\">" +"text=\"" + grpdDta[1] + "<a>";
      htmlLinks.push(linkified);   
    }
    console.log(htmlLinks);
    return htmlLinks;
  };
  




//Validar que sea un archivo '.md'
function validateMd(filePath) {
  if (filePath === undefined) {
    return console.log('Introduce un directorio');
  } else {
    const pathExtencion = path.extname(filePath);
    if (pathExtencion != '.md') {
      console.log('No es un archivo .md');
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


// //función para contar los links 
// export const totalLinks = (array) => {
//   const total = array.length;
//   return total;
// };

// export const uniqueLinks = (array) => {
//   const unique = [...new Set(array.map((link) => link.href))];
//   return unique.length;
// };

// export const brokenLinks = (array) => {
//   const broken = array.filter(link => link.status === '' || link.statusText === 'Fail');
//   return broken.length;
// };



module.exports = {
  validateMd,
  pathIsAbsolute,
  
}


