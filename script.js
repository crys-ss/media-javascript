function calculoMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);

  var mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaFixada = mediaNotas.toFixed(1);

  var resultado = (document.getElementById("resultado").innerText =
    "Sua média final é:" + " " + notaFixada);

  if (notaFixada >= 6) {
    document.getElementById("aprovacao").innerText =
      "Parabéns! Você foi aprovado(a).";
  } else {
    document.getElementById("aprovacao").innerText =
      "Lamento, você foi reprovado(a).";
  }
}

function resetNotas() {
    (document.getElementById("nota1").value = ""),
    (document.getElementById("nota2").value = ""),
    (document.getElementById("nota3").value = ""),
    (document.getElementById("nota4").value = ""),
    (document.getElementById("resultado").innerHTML = ""),
    (document.getElementById("aprovacao").innerHTML = "");
}
