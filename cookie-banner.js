if(document.cookie.indexOf('cookie-law=aktiv') != -1){

	document.getElementById("cookie--banner").style.display = "none";

}	else{

  document.body.prepend(document.getElementById("cookie--banner"));
  document.getElementById("close--banner").style.display = "block";
  
}

/**
 * Cookie - Function
 */

function setCookie(cookieName, cookieValue, expiredDays) {

  var d = new Date();

  d.setTime(d.getTime() + (expiredDays*24*60*60*1000));

  var expires = "expires="+ d.toUTCString();

  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";

}

document.getElementById("close--banner").addEventListener("click", function(){
  
  setCookie("cookie-law", "aktiv", 1);
  document.getElementById('cookie--banner').style.display = 'none';

});