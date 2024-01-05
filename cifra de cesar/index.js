function rot13(str) {
    let alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
  
    let alfabeto13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"]
  
    let resultadoStr = []
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alfabeto.length; j++) {
        if (str[i] === alfabeto[j]) {
          resultadoStr.push(alfabeto13[j])
        }
      }
    }
    return resultadoStr.join("")
  }
  
  console.log(rot13("SERR PBQR PNZC"));