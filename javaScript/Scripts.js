//function fechacorrect(){
    //var v1 = (document.getElementById('f1').value);
    
    //alert (v1);
    //recorrer texto 
//}


function cookieSesion(){
    //let v1 = document.getElementById("iniciarSesion1")
    //let v2 = document.getElementById("contrasena1")
    alert("No hay sesión iniciada")

    CookiIni = localStorage.getItem("cookieIni");
    if (CookiIni == "null" || CookiIni == null){
        alert("No hay sesión iniciada")
        localStorage.setItem("cookieIni", document.getElementById("iniciarSesion1"));
    }else{

        alert(CookiIni + "Ya habia estado por aqui");
    }

}