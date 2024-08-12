const cpf = "123.259.549.00";
var userName ="Gessica Gomes de Melo";

 function getSurName(name){
    let surName = name.split(" ");
    return surName.length >1 ? surName.slice(1).join(" ") : "";       
 };


 console.log(`Nome completo: ${userName}\nSobrenome: ${getSurName(userName)}\nCPF: ${cpf}`);
 