let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let message = document.querySelector("#some_text").value;

  let token = "6859718463:AAFiDmIJANlNEe5TApbpKK6RnEyO1Rfx4eQ";
  let chat_id = "-1002088165327";
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  alert("Messege successfully sended!");
});
