function palindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let stringReversa = str.split('').reverse().join('')
  
    return str == stringReversa
  }
  
  console.log(palindrome("eye"));