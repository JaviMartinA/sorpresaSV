function mostrarImagen(){
    var hueco=document.getElementById("hueco");
    hueco.innerHTML='<img src="images/imagen1.jpg" alt="Rosa y bombon" class="img-responsive" id="foto1"></img>';
    hueco.innerHTML+='<br>'
    hueco.innerHTML+='<p>O a lo mejor prefieres este regalito...</p>';
    hueco.innerHTML+='<input type="button" value="Mostrar regalo" onclick="mostrarImagen2()" class="btn btn-success"></input>';
 }
 function mostrarImagen2(){
    var titulo=document.getElementById("h1");
    var titulo2=document.getElementById("h2");
    titulo.innerHTML="";
    titulo2.innerHTML="UUUPS...";
    var hueco=document.getElementById("hueco");
    hueco.innerHTML="";
    hueco.innerHTML='<img src="images/imagen2.jpg" alt="Mary Jane" class="img-responsive" id="foto2"></img>';
    hueco.innerHTML+='<br>'
    hueco.innerHTML+='<p>Espero que te haya gustado esta sorpresita y te haya sacado una sonrisa como la de esta foto</p>';
    hueco.innerHTML+='<br>'
    hueco.innerHTML+='<img src="images/imagen3.jpg" alt="sonrisa" class="img-responsive" id="foto3"></img>';
 } 
 