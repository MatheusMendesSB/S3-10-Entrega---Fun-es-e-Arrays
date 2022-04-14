function positions(firstPlace, secondPlace, lastPlace) {
    var podio = [firstPlace, secondPlace, lastPlace];

    if (podio.includes('Daniel', 2)) {
        podio.splice(0, 3, firstPlace, lastPlace, secondPlace);
        return '1º - Colocado: ' + podio[0] + ' 2º - Colocado: ' + podio[1] + ' 3º - Colocado: ' + podio[2];

    } 
    
    else if (podio.includes('Daniel', 1)) {
        podio.splice(0, 3, secondPlace, firstPlace, lastPlace);
        return '1º - Colocado: ' + podio[0] + ' 2º - Colocado: ' + podio[1] + ' 3º - Colocado: ' + podio[2];

      } else {
          return '1º - Colocado: ' + podio[0] + ' 2º - Colocado: ' + podio[1] + ' 3º - Colocado: ' + podio[2];

      }
   
}

console.log(positions('Rafael', 'Daniel', 'Manoel'));
console.log(positions('Rafael', 'Manoel', 'Daniel'));
console.log(positions('Daniel', 'Rafael', 'Manoel'));


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


