const mdLinks = require('./index');

const filePath = process.argv[2];

const resultReadFile = mdLinks(filePath, null);

resultReadFile.then(
   (data)=> { // On Success
       console.log(data);
   },
   (err)=> { // On Error
       console.error(err);
   }
);


