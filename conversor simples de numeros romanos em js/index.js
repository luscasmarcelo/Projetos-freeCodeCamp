function converterParaRomano(num) {
    let procurar = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
   
    let romano = '', i
    for (i in procurar) {
      while (num >= procurar[i]) {
        romano += i
        num -= procurar[i]
      }
    }
   
    return romano
   }
   
   console.log(converterParaRomano(4));