document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  function radioValue() {
    var ele = document.getElementsByName("way");

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        var selectedWay = ele[i].value;
        return selectedWay;
      }
    }
  }
  //   Get input Values
  let way = radioValue();
  let name = document.getElementById("name").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;
  let number = document.getElementById("number").value;
  console.log(name, from, to, date, number, way);

  sendEmail(name, from, to, date, number, way);
}

function sendEmail(name, from, to, date, number, way) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pradeepmsblogspot@gmail.com",
    Password: "ibxdnieqkadegcua",
    From: "pradeepmsblogspot@gmail.com",
    To: "pradeepmsblogspot@gmail.com",
    Subject: `${name} Sent you a message`,
    Body: `Name : ${name} <br/>  From : ${from}  <br/>  To : ${to} <br/>  Date : ${date} <br/>  Way : ${way} `,
  }).then(() => alert("Booked Successfully"));
}
