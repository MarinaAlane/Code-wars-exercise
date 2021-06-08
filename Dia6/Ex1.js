// Escreva uma função que, quando fornecida a um URL como string, analisa apenas o
// nome do domínio e o retorna como string

function domainName(url){
  //your code here
return url.replace(/https?:\/\/(www.\.)?|www\./, "").split(".")[0];

// www. => www + qualquer caracter
// www\. => Somente o www. Scape caracter 
}