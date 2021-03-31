function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  
  

  var dataHora = new Date();
  var hora = dataHora.getHours();

  var dataMinuto = new Date() ;
  var minuto = dataMinuto.getMinutes();

  //var hora = 22;
  //var minuto = 44;

  if (hora >= 0 && hora < 12) {
    //bom dia
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Bom dia! São ${hora} hora(s) e ${minuto} minutos! </strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Produtos/produtos.jpg";
    
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Boa tarde! São ${hora} hora(s) e ${minuto} minutos!</strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Produtos/caneca2.jpg";
    
  } else {
    //boa noite
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Boa noite! São ${hora} hora(s) e ${minuto} minutos!</strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Produtos/agenda.jpg";
    
  }
}


function tela(){
  var cb = window.document.getElementById("cabeca");
  var event = window.document.getElementById("eventos");
  var parag = window.document.getElementById("paragraph");
  var clic = window.document.getElementById("clica");
  var card = window.document.getElementById("cartao");
  var mail = window.document.getElementById("sendMail");

  var dataHora = new Date();
  var hora = dataHora.getHours();

  if (hora >= 6 && hora < 18){
    cb.innerHTML = `<h3 class="text-center text-white font-weight-bolder" style="background-color: rgb(255, 0, 212);">
                        Eventos Para Mulheres
                    </h3>`;
  }else{
    cb.innerHTML = `<h3 class="text-center text-white font-weight-bolder" style="background-color: rgba(128, 8, 226, 0.979);">
                        Eventos Para Mulheres
                   </h3>`;
  }

  if (hora >= 6 && hora < 18){
    parag.innerHTML = `<h3 class="font-weight-bold" style="color: rgb(255, 0, 212);">
                          Próximo Evento Para Mulheres
                       </h3>`
  }
  else{
    parag.innerHTML = `<h3 class="font-weight-bold" style="color: rgba(128, 8, 226, 0.979);">
                          Próximo Evento Para Mulheres
                       </h3>`
  }

  if (hora >= 6 && hora < 18){
    clic.innerHTML = `<p style="color:rgb(255, 0, 212);">
                          Clique aqui e agende sua trilha com a gente!
                      </p>`
  }
  else{
    clic.innerHTML = `<p style="color:rgba(128, 8, 226, 0.979);">
                          Clique aqui e agende sua trilha com a gente!
                      </p>`
  }

  if(hora >= 6 && hora < 18){
    event.innerHTML = `<a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                          style="background-color: rgb(255, 0, 212); font-weight: bold; color: white" >
                          Eventos
                      </a>`
  }else{
    event.innerHTML = `<a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                          style="background-color: rgba(128, 8, 226, 0.979); font-weight: bold; color: white" >
                          Eventos
                      </a>`
  }

  if (hora >= 6 && hora < 18){
    card.innerHTML = `<div class=" card border w3-animate-bottom" style="background-color: rgb(255, 0, 212); color: white">
                        <a href="picoTijuca3ParaElas.html">
                            <img src="Imagens/Aventuras/tijuca2.jpg" alt="Pico da Tijuca" class="card-img-top"></a>
                        <div class="card-body">
                            <h5 class="card-title text-center font-weight-bolder">Dezembro <br> Pico da Tijuca</h5>
                            <p class="ttt card-text text-md-center font-weight-bold">Valor: R$80,00</p>
                            <p class="ttt card-footer text-center font-weight-bold">
                                <a class="text-white" href="picoTijuca3ParaElas.html">Veja Aqui o Evento</a>
                            </p>
                        </div>
                    </div>`
  }
  else{
    card.innerHTML =  `<div class=" card border w3-animate-bottom" style="background-color: rgba(128, 8, 226, 0.979); color: white">
                          <a href="picoTijuca3ParaElas.html">
                              <img src="Imagens/Aventuras/tijuca2.jpg" alt="Pico da Tijuca" class="card-img-top"></a>
                          <div class="card-body">
                              <h5 class="card-title text-center font-weight-bolder">Dezembro <br> Pico da Tijuca</h5>
                              <p class="ttt card-text text-md-center font-weight-bold">Valor: R$80,00</p>
                              <p class="ttt card-footer text-center font-weight-bold">
                                  <a class="text-white" href="picoTijuca3ParaElas.html">Veja Aqui o Evento</a>
                              </p>
                          </div>
                      </div>`
  }

  if(hora >= 6 && hora < 18){
    mail.innerHTML = `<a class="btn btn-group-toggle" href="mailto:trilhandoteresopolis@gmail.com" target="_blank" style="background-color: rgb(255, 0, 212); color: white; font-weight: bold;">Clique Aqui</a>`
  }else{
    mail.innerHTML = `<a class="btn btn-group-toggle" href="mailto:trilhandoteresopolis@gmail.com" target="_blank" style="background-color: rgba(128, 8, 226, 0.979); color: white; font-weight: bold;">Clique Aqui</a>`
  }
}
