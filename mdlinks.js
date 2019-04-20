const mdLinks = require('./index');

const filePath = process.argv[2];

//Validar que sea un archivo '.md'
function validateMd(newPath) {
  if (newPath === undefined) {
    return console.log('Introduce un directorio');
  } else {
    const pathExtencion = path.extname(newPath);
    if (pathExtencion != '.md') {
      console.log('No es un archivo .md');
      return false;
    } else {
      console.log('Si es un archivo markdown');
      return true;
    }
  }
}

//  una ruta absoluta
function absolutesPath(newsPath) {
  const absolutePath = path.resolve(newsPath);
  return absolutePath;
}

function readCompletePath(newPath) {
  return new Promise((resolve, reject) => {
    fs.readFile('prueba2.md', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        // return console.log(err);
      } else {
        resolve(data);
        // console.log(data);
      }
    });
  });
}




 const resultReadFile = mdLinks(filePath, null);

resultReadFile.then(
   (data)=> { // On Success
    console.log("resultado =");
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
      var linkified = "<a href=\"" + grpdDta[2] + "\">" + grpdDta[1] + "<a>";
      htmlLinks.push(linkified);   
    }
    return htmlLinks;
  };
  









