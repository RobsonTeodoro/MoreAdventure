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
    img.src = "Imagens/Capas/elas.jpg";
    
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Boa tarde! São ${hora} hora(s) e ${minuto} minutos!</strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Capas/elas.jpg";
    
  } else {
    //boa noite
    msg.innerHTML = `<rtrs style="color: green;"> <strong>Boa noite! São ${hora} hora(s) e ${minuto} minutos!</strong></rtrs> <br> Clique <a href="#enviar">aqui</a> e venha trilhar com a gente!`
    img.src = "Imagens/Capas/elas.jpg";
    
  }
}

/*PARA ELAS*/
function tela(){
  var cb = window.document.getElementById("cabeca");
  var event = window.document.getElementById("eventos");
  var parag = window.document.getElementById("paragraph");
  var email = window.document.getElementById("email");
  var clic = window.document.getElementById("clica");
  var card = window.document.getElementById("cartao");
  var mail = window.document.getElementById("sendMail");
  var guide = window.document.getElementById("guia");
  var copy = window.document.getElementById("copyright");

  var dataHora = new Date();
  var hora = dataHora.getHours();

  if (hora >= 6 && hora < 18){
    cb.innerHTML = `<h3 class="text-center text-white font-weight-bolder" style="background-color: rgba(204, 7, 116, 0.89);">
                        Eventos Para Mulheres
                    </h3>`;
  }else{
    cb.innerHTML = `<h3 class="text-center text-white font-weight-bolder" style="background-color: rgba(128, 8, 226, 0.979);">
                        Eventos Para Mulheres
                   </h3>`;
  }

  if (hora >= 6 && hora < 18){
    parag.innerHTML = `<h3 class="font-weight-bold" style="color: rgba(204, 7, 116, 0.89);">
                          Próximo Evento Para Mulheres
                       </h3>`
  }
  else{
    parag.innerHTML = `<h3 class="font-weight-bold" style="color: rgba(128, 8, 226, 0.979);">
                          Próximo Evento Para Mulheres
                       </h3>`
  }

  if (hora >= 6 && hora < 18){
    email.innerHTML = `<rtr>
                          nos envie um <a href="#enviar" style="color: rgba(204, 7, 116, 0.89);">email</a> e agende sua aventura!
                       </rtr>`
  }
  else{
    email.innerHTML = `<rtr>
                          nos envie um <a href="#enviar" style="color: rgba(128, 8, 226, 0.979);">email</a> e agende sua aventura!
                       </rtr>`
  }

  if (hora >= 6 && hora < 18){
    clic.innerHTML = `<p style="color:rgba(204, 7, 116, 0.89);">
                          Clique aqui e agende sua trilha com a gente!
                      </p>`
  }
  else{
    clic.innerHTML = `<p style="color:rgba(128, 8, 226, 0.979);">
                          Clique aqui e agende sua trilha com a gente!
                      </p>`
  }

  if(hora >= 6 && hora < 18){
    event.innerHTML = `<p>    
                          <div class="dropdown">
                              <button onclick="myFunction()" class="dropbtn" style="background-color: rgba(204, 7, 116, 0.89);">Eventos</button>
                              <div id="myDropdown" class="dropdown-content">
                                  <a class="font-weight-bold text-success" href="eventos.html">Todos os Eventos</a>
                                  <a class="font-weight-bold text-success" href="bateVolta.html">Bate e Volta</a>
                                  <a class="font-weight-bold text-success" href="feriados.html">Feriados</a>
                                  <a class="font-weight-bold text-success" href="fds.html">Finais de Semana</a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold text-success" href="bateVoltaPNE.html">Bate e Volta PNE <i class="fa fa-wheelchair"></i> </a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold w3-text-pink" href="paraElas.html" >Para Elas</a>
                              </div>
                          </div>
                      </p>`
  }else{
    event.innerHTML = `<p>    
                          <div class="dropdown">
                              <button onclick="myFunction()" class="dropbtn" style="background-color: rgba(128, 8, 226, 0.979);">Eventos</button>
                              <div id="myDropdown" class="dropdown-content">
                                  <a class="font-weight-bold text-success" href="eventos.html">Todos os Eventos</a>
                                  <a class="font-weight-bold text-success" href="bateVolta.html">Bate e Volta</a>
                                  <a class="font-weight-bold text-success" href="feriados.html">Feriados</a>
                                  <a class="font-weight-bold text-success" href="fds.html">Finais de Semana</a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold text-success" href="bateVoltaPNE.html">Bate e Volta PNE <i class="fa fa-wheelchair"></i> </a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold w3-text-pink" href="paraElas.html" >Para Elas</a>
                              </div>
                          </div>
                      </p>`
  }

  if (hora >= 6 && hora < 18){
    card.innerHTML = `<div class=" card border w3-animate-bottom" style="background-color: rgba(204, 7, 116, 0.89); color: white">
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
    mail.innerHTML = `<a class="btn btn-group-toggle" href="mailto:trilhandoteresopolis@gmail.com" target="_blank" style="background-color: rgba(204, 7, 116, 0.89); color: white; font-weight: bold;">Clique Aqui</a>`
  }else{
    mail.innerHTML = `<a class="btn btn-group-toggle" href="mailto:trilhandoteresopolis@gmail.com" target="_blank" style="background-color: rgba(128, 8, 226, 0.979); color: white; font-weight: bold;">Clique Aqui</a>`
  }

  if(hora >= 6 && hora < 18){
    guide.innerHTML = `<a class="font-weight-bolder" href="guias.html" style="color:rgba(204, 7, 116, 0.89);"> Carine Ribeiro </a>`
  }else{
    guide.innerHTML = `<a class="font-weight-bolder" href="guias.html" style="color:rgba(128, 8, 226, 0.979);"> Carine Ribeiro </a>`
  }

  if(hora >= 6 && hora < 18){
    copy.innerHTML = `<div id="copyright" class="copyright" style="background-color:rgba(204, 7, 116, 0.89);">
                <h6 class="text-center direito">Todos os direitos reservados <span  class="font-weight-bolder">&copyTrilhandoTeresopolis - CNPJ: 02.331.195/0001-88</span></h6>
            </div>`
  }else{
    copy.innerHTML = `<div id="copyright" class="copyright" style="background-color:rgba(128, 8, 226, 0.979)">
                <h6 class="text-center direito">Todos os direitos reservados <span  class="font-weight-bolder">&copyTrilhandoTeresopolis - CNPJ: 02.331.195/0001-88</span></h6>
            </div>`
  }
}


/*picoTijuca3ParaElas*/
function pico(){
  var cba = window.document.getElementById("cabeca");
  var event = window.document.getElementById("eventos");
  var parag = window.document.getElementById("paragraph");
  var top = window.document.getElementById("topo");
  var email = window.document.getElementById("email");
  var inc = window.document.getElementById("incluso");
  var clic = window.document.getElementById("clica");
  var mail = window.document.getElementById("sendMail");
  var copy = window.document.getElementById("copyright");
  

  var dataHora = new Date();
  var hora = dataHora.getHours();

  if (hora >= 6 && hora < 18){
    cba.innerHTML = `<h3 class="text-center text-white font-weight-bolder" style="background-color: rgba(204, 7, 116, 0.89);">
                        Pico da Tijuca
                    </h3>`;
  }else{
    cba.innerHTML = `<h3 class="text-center text-white font-weight-bolder" style="background-color: rgba(128, 8, 226, 0.979);">
                        Pico da Tijuca
                   </h3>`;
  }

  if (hora >= 6 && hora < 18){
    parag.innerHTML = `<h3 class="font-weight-bold" style="color: rgba(204, 7, 116, 0.89);">
                          Trilha do Pico da Tijuca – Floresta da Tijuca – RJ
                       </h3>`
  }
  else{
    parag.innerHTML = `<h3 class="font-weight-bold" style="color: rgba(128, 8, 226, 0.979);">
                          Trilha do Pico da Tijuca – Floresta da Tijuca – RJ
                       </h3>`
  }

  if (hora >= 6 && hora < 18){
    email.innerHTML = `<rtr>
                          Nos envie um <a href="#enviar" style="color: rgba(204, 7, 116, 0.89);">email</a> e agende sua aventura!
                       </rtr>`
  }
  else{
    email.innerHTML = `<rtr>
                          Nos envie um <a href="#enviar" style="color: rgba(128, 8, 226, 0.979);">email</a> e agende sua aventura!
                       </rtr>`
  }
  

  if (hora >= 6 && hora < 18){
    clic.innerHTML = `<p style="color:rgba(204, 7, 116, 0.89);">
                          Clique aqui e agende sua trilha com a gente!
                      </p>`
  }
  else{
    clic.innerHTML = `<p style="color:rgba(128, 8, 226, 0.979);">
                          Clique aqui e agende sua trilha com a gente!
                      </p>`
  }

  if(hora >= 6 && hora < 18){
    event.innerHTML = `<p>    
                          <div class="dropdown">
                              <button onclick="myFunction()" class="dropbtn" style="background-color: rgba(204, 7, 116, 0.89);">Eventos</button>
                              <div id="myDropdown" class="dropdown-content">
                                  <a class="font-weight-bold text-success" href="eventos.html">Todos os Eventos</a>
                                  <a class="font-weight-bold text-success" href="bateVolta.html">Bate e Volta</a>
                                  <a class="font-weight-bold text-success" href="feriados.html">Feriados</a>
                                  <a class="font-weight-bold text-success" href="fds.html">Finais de Semana</a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold text-success" href="bateVoltaPNE.html">Bate e Volta PNE <i class="fa fa-wheelchair"></i> </a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold w3-text-pink" href="paraElas.html" >Para Elas</a>
                              </div>
                          </div>
                      </p>`
  }else{
    event.innerHTML = `<p>    
                          <div class="dropdown">
                              <button onclick="myFunction()" class="dropbtn" style="background-color: rgba(128, 8, 226, 0.979);">Eventos</button>
                              <div id="myDropdown" class="dropdown-content">
                                  <a class="font-weight-bold text-success" href="eventos.html">Todos os Eventos</a>
                                  <a class="font-weight-bold text-success" href="bateVolta.html">Bate e Volta</a>
                                  <a class="font-weight-bold text-success" href="feriados.html">Feriados</a>
                                  <a class="font-weight-bold text-success" href="fds.html">Finais de Semana</a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold text-success" href="bateVoltaPNE.html">Bate e Volta PNE <i class="fa fa-wheelchair"></i> </a>
                                  <h6 class="dropdown-divider"></h6>
                                  <a class="font-weight-bold w3-text-pink" href="paraElas.html" >Para Elas</a>
                              </div>
                          </div>
                      </p>`
  }

 

  if(hora >= 6 && hora < 18){
    top.innerHTML = `<h6 class="font-weight-bold text-center" style="color:rgba(204, 7, 116, 0.89);">
                        Topo do Pico da Tijuca
                    </h6>`
  }else{
    top.innerHTML = `<h6 class="font-weight-bold text-center" style="color:rgba(128, 8, 226, 0.979);">
                        Topo do Pico da Tijuca
                    </h6>`
  }

  if(hora >= 6 && hora < 18){
    inc.innerHTML = `<strong style="color:rgba(204, 7, 116, 0.89); font-size: 25px">
                        Serviços Inclusos
                      </strong>`
  }else{
    inc.innerHTML = `<strong style="color:rgba(128, 8, 226, 0.979); font-size: 25px">
                        Serviços Inclusos
                      </strong>`
  }

  if(hora >= 6 && hora < 18){
    mail.innerHTML = `<a class="btn btn-group-toggle" href="mailto:trilhandoteresopolis@gmail.com" target="_blank" style="background-color: rgba(204, 7, 116, 0.89); color: white; font-weight: bold;">Clique Aqui</a>`
  }else{
    mail.innerHTML = `<a class="btn btn-group-toggle" href="mailto:trilhandoteresopolis@gmail.com" target="_blank" style="background-color: rgba(128, 8, 226, 0.979); color: white; font-weight: bold;">Clique Aqui</a>`
  }

  if(hora >= 6 && hora < 18){
    copy.innerHTML = `<div id="copyright" class="copyright" style="background-color:rgba(204, 7, 116, 0.89);color: white">
                <h6 class="text-center direito">Todos os direitos reservados <span  class="font-weight-bolder">&copyTrilhandoTeresopolis - CNPJ: 02.331.195/0001-88</span></h6>
            </div>`
  }else{
    copy.innerHTML = `<div id="copyright" class="copyright" style="background-color:rgba(128, 8, 226, 0.979); color: white">
                <h6 class="text-center direito">Todos os direitos reservados <span  class="font-weight-bolder">&copyTrilhandoTeresopolis - CNPJ: 02.331.195/0001-88</span></h6>
            </div>`
  }
  
}


