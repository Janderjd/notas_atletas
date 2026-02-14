function calcularMediaAtletas(objAtletas) {

  for (let i = 0; i < objAtletas.length; i++) {

    let atleta = objAtletas[i];

    // 1️⃣ Ordena as notas (ordem crescente)
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b);

    // 2️⃣ Remove a menor e a maior nota
    let notasValidas = notasOrdenadas.slice(1, 4);

    // 3️⃣ Soma as notas válidas
    let soma = 0;
    notasValidas.forEach(nota => {
      soma += nota;
    });

    // 4️⃣ Calcula a média
    let media = soma / notasValidas.length;

    // 5️⃣ Exibe o resultado
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas}`);
    console.log(`Média Válida: ${media}`);
    console.log("\n");
  }
}


// =======================
// ENTRADA FORNECIDA
// =======================

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calcularMediaAtletas(atletas);
