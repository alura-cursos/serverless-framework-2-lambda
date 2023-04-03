const { parse } = require("fast-csv");

function converteDadosCsv(dados) {
  const stream = parse({ headers: ["nome", "email"], renameHeaders: true })
    .on("data", (aluno) => console.log(aluno))
    .on("error", (erro) => console.log(erro))
    .on("end", () => console.log("O arquivo CSV foi processado."));

  stream.write(dados);
  stream.end();
}

module.exports = { converteDadosCsv };