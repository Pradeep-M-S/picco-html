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

let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
let dropdownIsOpen = false;

// Handle dropdown menues
if (dropdowns.length) {
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      let target = document.querySelector("#" + event.target.dataset.dropdown);

      if (target) {
        if (target.classList.contains("show")) {
          target.classList.remove("show");
          dropdownIsOpen = false;
        } else {
          target.classList.add("show");
          dropdownIsOpen = true;
        }
      }
    });
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener("mouseup", (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(
        "#" + dropdownButton.dataset.dropdown
      );
      let targetIsDropdown = dropdown == event.target;

      if (dropdownButton == event.target) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    });
  }
});

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    let navbarMenu = document.querySelector(".navbar-menu");

    if (navbarMenu.style.display === "flex") {
      navbarMenu.style.display = "none";
      return;
    }

    navbarMenu.style.display = "flex";
  });
}

handleSmallScreens();
var carousel = document.querySelector(".carousel");
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll(".carousel-cell img");
// get transform property
var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});
