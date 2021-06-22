// Você deve extrair uma parte do nome do arquivo da seguinte maneira: Suponha que
// começará com a data representada como um número longo Seguido por um sublinhado Você
// terá então um nome de arquivo com uma extensão sempre terá uma extensão extra no final

class FileNameExtractor {
  static extractFileName (string) {
     let start = (string.indexOf("_") + 1);
     let end = (string.lastIndexOf("."));
     return (string.slice(start, end))
   }
 }

 // slice - retorna uma cópiade um array a partir de um subarray cRiado entre as posições
 // start e end
 // O array original não é alterado. 