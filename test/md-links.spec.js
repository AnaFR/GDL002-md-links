const mdLinks = require('../index');







describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});



const {validatePath, absolutePath, readingFile} = require('../src/mdLinks.js/index.js.js.js.js');

test('should be a markdown file', () =>{
  expect(validatePath("README.md")).toBe(true);
});

test('should be an absolute route', ()=>{
  expect(absolutePath("README.md")).toBe("C:\Users\ana_1\LABORATORIA\GDL002-md-links\README.md");
});






test('should read the file', ()=>{
  readingFile("./test/prueba.md").then((result) =>{
    expect(result).tobe('hola');
  })
});










const { validateMd, absolutesPath, readCompletePath } = require('../src/mdLinks.js');

test('Should return false, the user dont have path', () => {
  expect(validateMd()).toBe();
});

test('Should by a file markdown', () => {
  expect(validateMd('README.md')).toBe(true);
});

test('Should by a file markdown', () => {
  expect(validateMd('index.js')).toBe(false);
});

test('Obtein an absoulte path', () => {
  expect(absolutesPath('README.md')).toBe(
    'C:\Users\ana_1\LABORATORIA\GDL002-md-links\README.md',
  );
});

test('Should read the complete path', () => {
  readCompletePath('./test/prueba.md').then(result => {
    expect(result).toBe('HOLA');
  });
});