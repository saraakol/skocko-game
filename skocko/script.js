let nizKombinacija = [
    {
        kombinacijaA : "",
        kombinacijaB : "",
        
    }
]
let sme=1;
let napotezuA=1;
let napotezuB=0;
let igraj=0;
let moranovaigra=0;
let isteklovreme=0;
function inic(){ 
   //alert(window.innerWidth);
    if (window.innerWidth<765){
        let niz=document.getElementsByClassName("novired");
        
            for (i = 0; i < niz.length; ++i) {
            niz[i].style.display = "inline";
        }
    }
    let kombinacije=localStorage.getItem("kombinacije");
    if(kombinacije==null){
        localStorage.setItem("kombinacije",JSON.stringify(nizKombinacija));
    }
    else{
        nizKombinacija=JSON.parse(kombinacije);
    }
}
function uputstvo(){
    let a=document.getElementById("potvrdaa").checked;
    let b=document.getElementById("potvrdab").checked;
    if(a && b)window.location.href="skocko-podesavanja.html";
    else if(!a)alert("Igrac A nije potvrdio ");
    else if(!b)alert("Igrac B nije potvrdio ");
    
}
function novaigra(){
    resetujsve();
    
    window.location.href="skocko-podesavanja.html";
}
function velicina(){
    if (window.innerWidth<765){
       let niz=document.getElementsByClassName("novired");
        
            for (i = 0; i < niz.length; ++i) {
            niz[i].style.display = "inline";
        }

   }else{
       let niz=document.getElementsByClassName("novired");
        
       for (i = 0; i < niz.length; ++i) {
      niz[i].style.display = "none";
    }
  }
}







let stopericaHandle = null;
let stopericaHandle2 = null;
let vremeA = 60;
let vremeB = 60;
function zapocni() {
    stopericaHandle = setInterval(stoperica, 1000);
    igraj=1;
    
}


function stoperica() {
    if(napotezuA==1){
        vremeA--;
        document.getElementById("vremeeA").innerHTML = vremeA;
        if(vremeA==0){
            alert("Igrac B pobedio");
            isteklovreme=1;
            resetujsve();
        }
    }
   else if(napotezuB==1){
        vremeB--;
        document.getElementById("vremeeB").innerHTML = vremeB;
        if(vremeB==0){
            alert("Igrac A pobedio");
            isteklovreme=1;
            resetujsve();
        }
    }
    
}

function zaustavi() {
    clearInterval(stopericaHandle);
    
}


function resetujsve(){
    zaustavi();
    for(let i=1;i<3;i++){
        for(let j=1;j<9;j++){
            for(let k=1;k<5;k++){
                document.getElementById(""+i+j+k).src="skocko-dodatno/51UW1849rJL._AC_SY355_.jpg";
            }
        }
    }
    for(let i=1;i<3;i++){
        for(let j=1;j<8;j++){
            for(let k=1;k<5;k++){
                document.getElementById("kockica"+i+j+k).style.backgroundColor="gray";
            }
        }
    }
    document.getElementById("vremeeA").innerHTML = "60";
    document.getElementById("vremeeB").innerHTML = "60";
    document.getElementById("pocni").disabled = false;
   sme=1;
    napotezuA=1;
    napotezuB=0;
    igraj=0;
    ktaaj=0;

    
    $("#igracB").hide();
    $("#igracA").show();
}

function start(){
    if(sme==0)return;
    sme=0;
    if(localStorage.getItem("kombinacije")==null || nizKombinacija[nizKombinacija.length-1].kombinacijaB==""){
        alert("Morate izabrati kombinacije igracima. Kliknite Nova igra.");
        return;
    }
    if(localStorage.getItem("moranova")!=null && localStorage.getItem("moranova")==1){
        alert("Morate izabrati nove kombinacije igracima. Kliknite Nova igra.");
        return;
    }
    document.getElementById("pocni").disabled = true;
    zapocni();
     vremeA = 60;
     vremeB = 60;

}
$(document).ready(function(){

inicijalizuj();
function inicijalizuj(){
    $("#igracB").hide();
    setInterval(function(){ 
       if(isteklovreme==1){
            
                        brojpotezaA=0;
                        brojpotezaB=0;
                        probnakombinacijaA="";
                        probnakombinacijaB="";
                        brojizabranih =0;
                        natacnommestu=0;
                        napogresnommestu=0;
                        isteklovreme=0;
                        napotezuA=1;
                        napotezuB=0;
                        igraj=0;
                        ktaaj=0;
                        $("#igracB").hide();
                        $("#igracA").show();
                        sme=1;
       }
    }, 1000);
    
}

    let brojizabranihznakova=0;
let kombinacijaAA="";
let kombinacijaBB="";
let drugimoze=0;
    $(".slikazabiranje").click(function(){
        if(brojizabranihznakova<4 && drugimoze==0){
            brojizabranihznakova++;
            kombinacijaAA+=$(this).attr("name");
            
            let kombinacijaprikaz=$("#komb");
            kombinacijaprikaz.append($("<img></img>").attr("src",$(this).attr("src")).attr("class","img-thumbnail").css({ "width" : "45px",
            "height" : "45px"}));
        }
        else if(brojizabranihznakova<4 && drugimoze==1){
            brojizabranihznakova++;
            kombinacijaBB+=$(this).attr("name");
            
            let kombinacijaprikaz=$("#komb");
            kombinacijaprikaz.append($("<img></img>").attr("src",$(this).attr("src")).attr("class","img-thumbnail").css({ "width" : "45px",
            "height" : "45px"}));
        }
        else{
            alert("Izabrali ste kombinaciju kliknite dugme Potvrdi");

        }
        
        
    });
    $("#autor").click(function(){
        alert("Sara Kolarevic 0388/18 \nHope you enjoyed! :)");
    });
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    $("#dugmekomb").click(function(){
        if(brojizabranihznakova==4){
            if(drugimoze==1){
                nizKombinacija.push(
                    {
                        kombinacijaA : kombinacijaAA,
                        kombinacijaB : kombinacijaBB
                        
                    });
                    localStorage.setItem("kombinacije", JSON.stringify(nizKombinacija));
                    document.getElementById("komb").innerHTML="";
                    kombinacijaAA="";
                    kombinacijaBB="";
                    brojizabranihznakova=0;
                    drugimoze=0;
                    document.getElementById("naslovpodesavanja").innerHTML="Zadajte kombinaciju igracu B";
                    moranovaigra=0;
                    localStorage.setItem("moranova",0);
                    window.location.href="skocko-igra.html";
            }
            else {
                brojizabranihznakova=0;
                document.getElementById("naslovpodesavanja").innerHTML="Zadajte kombinaciju igracu A";
                document.getElementById("komb").innerHTML="";
                drugimoze=1;
            }
        }
        else alert("Morate izabrati 4 slike");
    });
    let ktaaj=0;
    let brojpotezaA=0;
    let brojpotezaB=0;
    let probnakombinacijaA="";
    let probnakombinacijaB="";
    let brojizabranih =0;
    let pozicija;
    let pomeraj;
    let natacnommestu=0;
    let napogresnommestu=0;
    $(".ponudjen").click(function(){
        if(igraj){
            
            if(brojpotezaB>=7){
                alert("Igra je neresena!");
                
                brojpotezaA=0;
                brojpotezaB=0;
                probnakombinacijaA="";
                probnakombinacijaB="";
                brojizabranih =0;
                
                natacnommestu=0;
                napogresnommestu=0;
                resetujsve();
            }
            if(napotezuA==1 &&  $("#igracA").is(":hidden")){
                
                return;
            }
            if(napotezuB==1 &&  $("#igracB").is(":hidden")){
                
                return;
            }
            if(napotezuA){
                
                    
                    brojizabranih++;
                    probnakombinacijaA+=$(this).attr("name");
                    pomeraj=(brojpotezaA+1)*10+brojizabranih;
                    pozicija="#1"+pomeraj;
                    $(pozicija).attr("src", $(this).attr("src"));

                if(brojizabranih==4){
                    let rec=nizKombinacija[nizKombinacija.length-1].kombinacijaB;
                    for(let i=0;i<4;i++){
                         

                        if(rec.charAt(i)==probnakombinacijaA.charAt(i)){
                            natacnommestu++;
                            
                            continue;
                        }
                        for(let j=0;j<4;j++){
                            if(rec.charAt(j)==probnakombinacijaA.charAt(i) && !(rec.charAt(j)==probnakombinacijaA.charAt(j))){
                                napogresnommestu++;
                                rec=rec.replaceAt(j,"9");
                                break;
                            }
        
                        }

                    }
                     
                    let granica=0;
                    let granica2=0;
                    
                    for(granica;granica<natacnommestu;granica++){
                        pomeraj=(brojpotezaA+1)*10+granica+1;
                        
                        $("#kockica1"+pomeraj).css({"background-color":"red"});
                        
                    }
                     
                    for(granica2;granica2<napogresnommestu;granica2++){
                        //alert(napogresnommestu);
                        pomeraj=(brojpotezaA+1)*10+granica2+1+natacnommestu;
                        $("#kockica1"+pomeraj).css({"background-color":"yellow"});
                        //alert("#kockica1"+pomeraj);
                    }

                    if(probnakombinacijaA==nizKombinacija[nizKombinacija.length-1].kombinacijaB){
                         
                        brojpotezaA=0;
                        brojpotezaB=0;
                        probnakombinacijaA="";
                        probnakombinacijaB="";
                        brojizabranih =0;
                        
                        natacnommestu=0;
                        napogresnommestu=0;
                        sme=1;
                        for(let k=1;k<5;k++){
                            let slikica=nizKombinacija[nizKombinacija.length-1].kombinacijaB.charAt(k-1);
                            slikica=parseInt(slikica);
                            switch(slikica) {
                                case 1:
                                    document.getElementById("18"+k).src="skocko-dodatno/20084.png";
                                  break;
                                case 2:
                                    document.getElementById("18"+k).src="skocko-dodatno/220px-Playing_card_diamond_A.svg.png";
                                  break;
                                  case 3:
                                    document.getElementById("18"+k).src="skocko-dodatno/as_herc.jpg";
                                  break;
                                  case 4:
                                    document.getElementById("18"+k).src="skocko-dodatno/1200px-Playing_card_club_A.svg.png";
                                  break;
                                  case 5:
                                    document.getElementById("18"+k).src="skocko-dodatno/99735571c6bb42bb8fd8f91b5db8956d.jpg";
                                  break;
                                  case 6:
                                    document.getElementById("18"+k).src="skocko-dodatno/pik.png";
                                  break;
                                
                              }
                            
                        }
                        localStorage.setItem("moranova",1);
                        moranovaigra=1;
                        alert("Igrac A je pobedio!");
                        setTimeout(function(){
                        resetujsve();
                        return;   }, 5000) ;
                        zaustavi();
                       ktaaj=1;
                    }
                    if(ktaaj==0){
                    natacnommestu=0;
                    napogresnommestu=0;
                    brojpotezaA++;
                    brojizabranih=0;
                    probnakombinacijaA="";
                    napotezuB=1;
                    napotezuA=0;
                    setTimeout(function(){
                        $("#igracB").show();
                        $("#igracA").hide();}, 1000) ;
                    
                    }
                }
                
                
            }
            else if(napotezuB){
                
                    brojizabranih++;
                    probnakombinacijaB+=$(this).attr("name");
                    pomeraj=(brojpotezaB+1)*10+brojizabranih;
                    pozicija="#2"+pomeraj;
                    $(pozicija).attr("src", $(this).attr("src"));
                if(brojizabranih==4){
                    let rec=nizKombinacija[nizKombinacija.length-1].kombinacijaA;
                    for(let i=0;i<4;i++){
                        if(rec.charAt(i)==probnakombinacijaB.charAt(i)){
                            natacnommestu++;
                            
                            continue;
                        }
                        for(let j=0;j<4;j++){
                            if(rec.charAt(j)==probnakombinacijaB.charAt(i) && !(rec.charAt(j)==probnakombinacijaB.charAt(j))){
                                napogresnommestu++;
                                rec=rec.replaceAt(j,"9");
                                //alert(rec);
                                break;
                            }
        
                        }

                    }
                    
                    /**/
                     granica=0;
                     granica2=0;
                    
                    for(granica;granica<natacnommestu;granica++){
                        pomeraj=(brojpotezaB+1)*10+granica+1;
                        
                        $("#kockica2"+pomeraj).css({"background-color":"red"});
                        
                    }
                     
                    for(granica2;granica2<napogresnommestu;granica2++){
                        //alert(napogresnommestu);
                        pomeraj=(brojpotezaB+1)*10+granica2+1+natacnommestu;
                        $("#kockica2"+pomeraj).css({"background-color":"yellow"});
                        //alert("#kockica1"+pomeraj);
                    }
                    

                    if(probnakombinacijaB==nizKombinacija[nizKombinacija.length-1].kombinacijaA){
                       
                        brojpotezaA=0;
                        brojpotezaB=0;
                        probnakombinacijaA="";
                        probnakombinacijaB="";
                        brojizabranih =0;
                        sme=1;
                        natacnommestu=0;
                        napogresnommestu=0;
                        for(let k=1;k<5;k++){
                            let slikica=nizKombinacija[nizKombinacija.length-1].kombinacijaA.charAt(k-1);
                            slikica=parseInt(slikica);
                            switch(slikica) {
                                case 1:
                                    document.getElementById("28"+k).src="skocko-dodatno/20084.png";
                                  break;
                                case 2:
                                    document.getElementById("28"+k).src="skocko-dodatno/220px-Playing_card_diamond_A.svg.png";
                                  break;
                                  case 3:
                                    document.getElementById("28"+k).src="skocko-dodatno/as_herc.jpg";
                                  break;
                                  case 4:
                                    document.getElementById("28"+k).src="skocko-dodatno/1200px-Playing_card_club_A.svg.png";
                                  break;
                                  case 5:
                                    document.getElementById("28"+k).src="skocko-dodatno/99735571c6bb42bb8fd8f91b5db8956d.jpg";
                                  break;
                                  case 6:
                                    document.getElementById("28"+k).src="skocko-dodatno/pik.png";
                                  break;
                                
                              }
                            
                        }
                        localStorage.setItem("moranova",1);
                        moranovaigra=1;
                        alert("Igrac B je pobedio");
                        setTimeout(function(){
                        resetujsve();
                        return;   }, 5000) ;
                        zaustavi();
                       ktaaj=1;
                    }

                    if(ktaaj==0){
                    natacnommestu=0;
                    napogresnommestu=0;
                    probnakombinacijaB="";
                    brojpotezaB++;
                    brojizabranih=0;
                    napotezuB=0;
                    napotezuA=1;
                    if(brojpotezaB==7){
                        alert("Igra je neresena!");
                        sme=1;
                        brojpotezaA=0;
                        brojpotezaB=0;
                        probnakombinacijaA="";
                        probnakombinacijaB="";
                        brojizabranih =0;
                        
                        natacnommestu=0;
                        napogresnommestu=0;
                        resetujsve();
                    }
                    setTimeout(function(){
                        $("#igracB").hide();
                        $("#igracA").show(); }, 1000) ;
                    }
                }
            }
        }
        else{
            alert("Kliknite Start")
        }
    });
    
});
