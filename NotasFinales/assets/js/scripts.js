/*entrada*/
/*Defino otras variables para almacenar valores numericos*/


var nota1ramo1 = prompt('Digite la nota 1 Ramo HTML');
nota1ramo1 = parseInt(nota1ramo1);
console.log('la nota 1 es: '+nota1ramo1+'y su tipo es:'+typeof(nota1ramo1));

var nota2ramo1 = prompt('Digite la nota 2 Ramo HTML');
nota2ramo1 = parseFloat(nota2ramo1);
console.log(nota2ramo1);

var nota3ramo1 = prompt('Digite la nota 3 Ramo HTML');
nota3ramo1 = parseFloat(nota3ramo1);
console.log(nota3ramo1);

/*proceso operamos o transformamos los datos de entrada para producir salidas*/

var resultadoresultadopromedioramo1 = (nota1ramo1 + nota2ramo1+nota3ramo1)/3
resultadoresultadopromedioramo1 =parseFloat(resultadoresultadopromedioramo1)
console.log ('el promedio de las tres notas es:'+resultadoresultadopromedioramo1);

/*salida*/
/*defino variables que hacen referencia a las celdas html*/


var celdanota1ramo1 =document.getElementById   ('nota1ramo1');
var celdanota2ramo1 =document.getElementById  ('nota2ramo1');
var celdanota3ramo1 =document.getElementById ('nota3ramo1');
var celdapromedioramo1 =document.getElementById ('promedioramo1');

/*trasnpasamos lo valores que tiene java*/
celdanota1ramo1.innerHTML = nota1ramo1;
celdanota2ramo1.innerHTML = nota2ramo1;
celdanota3ramo1.innerHTML = nota3ramo1;
celdapromedioramo1.innerHTML = resultadoresultadopromedioramo1;

/*entrada CSS 2*/
/*Defino otras variables para almacenar valores numericos*/


var nota1css = prompt('Digite la nota 1 Ramo CSS');
nota1css = parseInt(nota1ramo1);
console.log('la nota 1 es: '+nota1css+'y su tipo es:'+typeof(nota1css));

var nota2css = prompt('Digite la nota 2 Ramo CSS');
nota2css = parseFloat(nota2css);
console.log(nota2css);

var nota3css = prompt('Digite la nota 3 Ramo CSS');
nota3css = parseFloat(nota3css);
console.log(nota3css);

/*proceso operamos o transformamos los datos de entrada para producir salidas*/

var resultadoresultadopromediocss = (nota1css + nota2css+nota3css)/3
resultadoresultadopromediocss =parseFloat(resultadoresultadopromediocss)
console.log ('el promedio de las tres notas es:'+resultadoresultadopromediocss);

/*salida*/
/*defino variables que hacen referencia a las celdas html*/


var celdanota1css =document.getElementById   ('nota1css');
var celdanota2css=document.getElementById  ('nota2css');
var celdanota3css =document.getElementById ('nota3css');
var celdapromediocss =document.getElementById ('promediocss');

/*trasnpasamos lo valores que tiene java*/
celdanota1css.innerHTML = nota1css;
celdanota2css.innerHTML = nota2css;
celdanota3css.innerHTML = nota3css;
celdapromediocss.innerHTML = resultadoresultadopromediocss;

/*entrada javascript 3*/
/*Defino otras variables para almacenar valores numericos*/


var nota1java = prompt('Digite la nota 1 Ramo Java');
nota1java = parseInt(nota1java);
console.log('la nota 1 es: '+nota1java+'y su tipo es:'+typeof(nota1java));

var nota2java = prompt('Digite la nota 2 Ramo Java');
nota2java = parseFloat(nota2java);
console.log(nota2java);

var nota3java = prompt('Digite la nota 3 Ramo Java');
nota3java = parseFloat(nota3java);
console.log(nota3java);

/*proceso operamos o transformamos los datos de entrada para producir salidas*/

var resultadoresultadopromediojava = (nota1java + nota2java+nota3java)/3
resultadoresultadopromediojava =parseFloat(resultadoresultadopromediojava)
console.log ('el promedio de las tres notas es:'+resultadoresultadopromediojava);

/*salida*/
/*defino variables que hacen referencia a las celdas html*/


var celdanota1java =document.getElementById   ('nota1java');
var celdanota2java=document.getElementById  ('nota2java');
var celdanota3java =document.getElementById ('nota3java');
var celdapromediojava =document.getElementById ('promediojava');

/*trasnpasamos lo valores que tiene java*/
celdanota1java.innerHTML = nota1java;
celdanota2java.innerHTML = nota2java;
celdanota3java.innerHTML = nota3java;
celdapromediojava.innerHTML = resultadoresultadopromediojava;





