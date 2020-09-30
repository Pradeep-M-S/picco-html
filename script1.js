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
  let name = document.getElementById("name").value;
  let from = document.getElementById("from").value;
  let package = document.getElementById("packageselector").value;
  let number = document.getElementById("number").value;
  console.log(name, from, number, package);

  sendEmail(name, from, number, package);
}

function sendEmail(name, from, number, package) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pradeepmsblogspot@gmail.com",
    Password: "ibxdnieqkadegcua",
    From: "pradeepmsblogspot@gmail.com",
    To: "pradeepmsblogspot@gmail.com",
    Subject: `${name} Sent you a message`,
    Body: `Name : ${name} <br/>  From : ${from}  <br/>  Way : ${way} <br/>  Phone Number : ${number} <br/>  Package : ${package} `,
  }).then(() => alert("Booked Successfully"));
}
