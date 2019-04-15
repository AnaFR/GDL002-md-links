
exports.analyze = function() {
  console.log("Hola ana");
}
console.log("Hola ana");




 

// exports.findUrl = function(txt) {
//   var allLinks = txt.search(mdLinkRgEx);
//   console.log(allLinks);
// }

// function urlify(text) {
//     var urlRegex = /(https?:\/\/[^\s]+)/g;
//     return text.replace(urlRegex, function(url) {
//         return '<a href="' + url + '">' + url + '</a>';
//     })
//     // or alternatively
//     // return text.replace(urlRegex, '<a href="$1">$1</a>')
// }

var txt = require('README.md');



const mdLinkRgEx = /\[(.+?)\]\((.+?)\)/g;
const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;

let allLinks = txt.match(mdLinkRgEx);
// console.log(allLinks);
for (var x in allLinks) {
  var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
  // console.log(grpdDta);
  console.log("<a href=\"" + grpdDta[2] + "\">" + grpdDta[1] + "<a>");
   console.log("#####################");
}