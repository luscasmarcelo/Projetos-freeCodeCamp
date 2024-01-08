//um validador simples de numero de telefone dos eua, onde o sistema verifica se a string fornecida está
//de acordo com o esquema de numeros padrão: xxx-xxx-xxxx

// function telephoneCheck(str) {
//     let requisitoNumero = /^(\+1)?[ -]?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/;
  
//     return requisitoNumero.test(str)
//   }
  
//   console.log(telephoneCheck("555-555-5555"));

function telephoneCheck(str) {
    let requisitoNumero = /^(\+1)?[ -]?\(?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/;
  
    return requisitoNumero.test(str)
  }
  
  console.log(telephoneCheck("1 555-555-5555"));