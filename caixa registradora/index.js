function checkCashRegister(price, cash, cid) {
    let moedaCorrente = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .1,
      "QUARTER": .25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }
    let trocoDevido = cash - price
    let totalDinheiroEmCaixa = Number(cid.reduce((sum, element) => sum + element[1],0).toFixed(2))
  
    if (totalDinheiroEmCaixa < trocoDevido) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (totalDinheiroEmCaixa == trocoDevido) {
      return {status: "CLOSED", change: cid}
    } else {
      let mudarArr = []
  
      for (let i = cid.length - 1; i >= 0; i--) {
        let nomeMoedaCorrente = cid[i][0]
        let moedaCorrenteValorTotal = cid [i][1]
        let valorMoedaCorrente = moedaCorrente[nomeMoedaCorrente]
        let quantiaMoedaCorrente = Number((moedaCorrenteValorTotal / valorMoedaCorrente).toFixed(0))
        let moedaCorrenteParaRetorno = 0
  
        while (trocoDevido >= valorMoedaCorrente && quantiaMoedaCorrente > 0) {
          trocoDevido -= valorMoedaCorrente
          trocoDevido = Number(trocoDevido.toFixed(2))
          quantiaMoedaCorrente --
          moedaCorrenteParaRetorno ++
        }
  
        if (moedaCorrenteParaRetorno > 0) {
          mudarArr.push([nomeMoedaCorrente, moedaCorrenteParaRetorno * valorMoedaCorrente])
        }
      }
  
      if (trocoDevido > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      return {status: "OPEN", change: mudarArr}
    }
  } 
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));