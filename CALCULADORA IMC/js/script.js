document.querySelector("#registrar").onclick=registrarIMC;

let n=0;

function registrarIMC(){
    let nome=document.querySelector("#nome").value;
    let altura=document.querySelector("#altura").value;
    altura=altura.replace(",",".")
    altura=parseFloat(altura)
    let peso=document.querySelector("#peso").value;
    peso=peso.replace(",",".")
    peso=parseFloat(peso)
    let IMC= peso/(altura*altura)
    IMC=IMC.toFixed(2)

    n=n+1

    let classificaçãoIMC
    if (IMC <18.5){
        classificaçãoIMC=document.createTextNode("Abaixo do peso normal")
    }else if(IMC >18.5 && IMC <24.9){
        classificaçãoIMC=document.createTextNode("Peso normal")
    }else if(IMC >25.0 && IMC <29.9){
        classificaçãoIMC=document.createTextNode("Excesso de peso")
    }else if(IMC >30.0 && IMC <34.9){
        classificaçãoIMC=document.createTextNode("Obesidade grau I")
    }else if(IMC >35.0 && IMC <39.9){
        classificaçãoIMC=document.createTextNode("Obesidade grau II")
    }else if (IMC >= 40){
        classificaçãoIMC=document.createTextNode("Obesidade grau III")
    }

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    let table = document.querySelector("table")

    td1.append(n)
    td2.append(nome)
    td3.append(altura)
    td4.append(peso)
    td5.append(IMC)
    td6.append(classificaçãoIMC)
    
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    

    table.append(tr)
}

