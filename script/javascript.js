function validarChamado(idTitulo, idSolicitante, idData, idDescricao) {
  let titulo = document.getElementById(idTitulo).value;
  let solicitante = document.getElementById(idSolicitante).value;
  let data = document.getElementById(idData).value;
  let descricao = document.getElementById(idDescricao).value;

  if (titulo == "")
    alert("O título do chamado não pode estar em branco. Favor preenchê-lo!");
  else if (solicitante == "")
    alert(
      "O solicitante do chamado não pode estar em branco. Favor preenchê-lo!"
    );
  else if (data == "")
    alert("A data do chamado não pode estar em branco. Favor preenchê-la!");
  else if (descricao == "")
    alert(
      "A descrição do chamado não pode estar em branco. Favor preenchê-la!"
    );
  else adicionarChamado(titulo, solicitante, data, descricao);
}

//------------------------------------------------------------------------------------------------//

function adicionarChamado(
  titulo_chamado,
  nome_solicitante,
  data_chamado,
  descricao_chamado
) {
  let novoChamado = {
    titulo: titulo_chamado,
    solicitante: nome_solicitante,
    data: data_chamado,
    descricao: descricao_chamado,
  };

  if (typeof Storage !== "undefined") {
    let chamados = localStorage.getItem("chamados");
    if (chamados == null) chamados = []; // Nenhum chamado ainda foi adicionado
    else chamados = JSON.parse(chamados);
    chamados.push(novoChamado); // Adiciona um novo CHAMADO
    localStorage.setItem("chamados", JSON.stringify(chamados));
    alert("Seu chamado foi adicionado com sucesso");
  } else
    alert(
      "A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação"
    );
}

//------------------------------------------------------------------------------------------------//

function consultarChamados() {
  if (typeof Storage !== "undefined") {
    let chamados = localStorage.getItem("chamados");
    document.write("<h1>Chamados:</h1>");
    if (chamados == null)
      document.write("<h3>Ainda não há nenhum chamado adicionado</h3>");
    else {
      chamados = JSON.parse(chamados);
      chamados.forEach((chamado) => {
        document.write("<ul>");
        document.write("<li>Título: " + chamado.titulo + "</li>");
        document.write("<li>Solicitante: " + chamado.solicitante + "</li>");
        document.write("<li>Descricao: " + chamado.descricao + "</li>");
        document.write("</ul>");
      });
    }
  } else
    alert(
      "A versão do seu navegador é muito antiga. Por isso, não será possível visualizar os chamados!"
    );
}
