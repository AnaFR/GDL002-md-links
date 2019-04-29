const mdLinks = require ('./index');
const filePath = process.argv[2];
const path = require ('path');
const resultReadFile = mdLinks(filePath, null);
//  let htmlLinks = [];
//  let prueba = urlify(data);
// const fetch = require('node-fetch');

///function to verificated that it´s an .md file
function validateMd(filePath) {
  console.log(filePath)
  if (filePath === undefined) {
    return console.log('Enter a directory');
  } else {
    const pathExtencion = path.extname(filePath);
    console.log (pathExtencion);
    if (pathExtencion != '.md') {
      console.log('It´s not an .md file');
      return false;
    } else {
      console.log('It´s an .md file');
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




// result of reading file
resultReadFile.then(
   (data)=> { // On Success
    console.log("Found links:");
    urlify(data);
   },
   (err)=> { // On Error
       console.error(err);
   }
  
);

//Función que extre los links y los imprime en arreglo de objetos
function urlify(data) {
    const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
    const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
    let allLinks = data.match(mdLinkRgEx);
    let htmlLinks = [];
    for (var x in allLinks) {
      var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
      var grupoData = {
        href: grpdDta[2],
        text: grpdDta[1],
        file: filePath
      }; 
      htmlLinks.push(grupoData);   
    }
    console.log(htmlLinks.length);
    console.log(htmlLinks);
    return (htmlLinks);
   
  };
 



 




  




  
// // //function to add the links
//   function sumatotal(prueba){
//   const total = (prueba.length);
//   console.log( " Total found links", total );
//   return (total);
// };

// sumatotal();





module.exports = {
  validateMd,
  pathIsAbsolute,
  // sumatotal,
  
}


// function extractLinks(newPath) {
//   let returnUrl;
//   returnUrl = fs.readFile(newPath, 'utf-8', (err, data) => {
//          if (err) {
//            reject(err);
//          }
//          {
//         const toString= data.toString();
//         const mdLinkRgEx = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
//         const mdLinkRgEx2 = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
  
//         const allLinks = toString.match(mdLinkRgEx);
//         const urlArray = toString.match(mdLinkRgEx2);
  
//         for (let i=0; i< urlArray.length; i++) {
//           fetch(urlArray[i])
//           .then(response => {
//             if (response.status == 200) {
//               console.log(`Text: ${allLinks[i]}\nLink: ${urlArray[i]}\nFile: ${newPath}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`)
//             } else if (response.status == 404||response.status == 400) {
//               console.log(`ERROR.\nText: ${allLink[i]}\nLink: ${urlArray[i]}\nFile: ${newPath}\nResponse code: ${response.status}\nResponse: ${response.statusText}\n`)
//             }
//           })
//         }
//       }
//    })
//      return returnUrl;
// };