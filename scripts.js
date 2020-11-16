function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");

  var dataHora = new Date();
  var hora = dataHora.getHours();

  var dataMinuto = new Date() ;
  var minuto = dataMinuto.getMinutes()

  //var hora = 22;
  //var minuto = 44;

  if (hora >= 0 && hora < 12) {
    //bom dia
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Bom dia! São ${hora} hora(s) e ${minuto} minutos! </strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Produtos/produtos2.jpg";
    
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Boa tarde! São ${hora} hora(s) e ${minuto} minutos!</strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Produtos/caneca.jpg";
    
  } else {
    //boa noite
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Boa noite! São ${hora} hora(s) e ${minuto} minutos!</strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Produtos/agenda.jpg";
    
  }
}
