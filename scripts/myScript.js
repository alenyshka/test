function replaceInfoUser(profile){
  document.getElementById("userInfo").innerHTML = profile.getName();
  document.getElementById("userImage").src = profile.getImageUrl();
}

//var access_token = "ya29.Glw7BP3S6kte-UXYoM5OjchzjwQ7LiyDcVOt3lZpbcM2Jfi-Z7EMRqALu1SjC7D5xNCYKESFagJE8sKuMJ4RxBy_RGv4iqwuRgvn42E5qEqHdvi8XMWION_esqmw7A";

function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms){}
}

function getProfileFile(profile, access_token){
  var xhr = new XMLHttpRequest();
  console.log(profile.getId());
  var id = profile.getId();
  xhr.open('GET', "https://www.googleapis.com/gmail/v1/users/me/drafts/id"  + "?access_token=" + access_token);
  //xhr.setRequestHeader("Authorization","Bearer " + access_token);
  xhr.send();
  if (xhr.status != 200) {
    // обработать ошибку
    console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    console.log( xhr.responseText ); // responseText -- текст ответа.
  }
}
