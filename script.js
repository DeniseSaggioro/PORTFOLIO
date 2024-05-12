(function () {
  emailjs.init({
    publicKey: "V0EXCnXFo77Yp0lXs",
  });
})();

const handleSubmit = (e) => {
  e.preventDefault();
  const nomeUtenteValue = document.getElementById("nomeUtenteInput").value;
  const emailValue = document.getElementById("emailInput").value;
  const testoValue = document.getElementById("testoInput").value;
  let isValid = true;
  const templateParams = {
    from_email: emailValue,
    from_name: nomeUtenteValue,
    to_name: "Denise",
    message: testoValue,
  };
  if (nomeUtenteValue === "") {
    isValid = false;
    document.getElementById("nameError").style.display = "block";
    document.getElementById("nameError").innerText = "Inserisci il tuo nome.";
    document.getElementById("nomeUtenteInput").classList.remove("mb-2");
  } else {
    document.getElementById("nameError").style.display = "none";
    document.getElementById("nomeUtenteInput").classList.add("mb-2");
  }
  if (testoValue === "") {
    isValid = false;
    document.getElementById("textError").style.display = "block";
    document.getElementById("textError").innerText = "Scrivimi un messaggio.";
    document.getElementById("testoInput").classList.remove("mb-4");
  } else {
    document.getElementById("textError").style.display = "none";
    document.getElementById("testoInput").classList.add("mb-4");
  }
  if (emailValue !== "") {
    if (/^[\w-]+(?:.[\w-]+)*@(?:[\w-]+.)+[a-zA-Z]{2,7}$/.test(emailValue)) {
      document.getElementById("emailError").style.display = "none";
      document.getElementById("emailInput").classList.add("mb-2");
    } else {
      isValid = false;
      document.getElementById("emailError").style.display = "block";
      document.getElementById("emailInput").classList.remove("mb-2");
    }
  } else {
    isValid = false;
    document.getElementById("emailError").style.display = "block";
    document.getElementById("emailInput").classList.remove("mb-2");
  }
  if (isValid) {
    emailjs.send("service_y6yx6p6", "template_5ov6wmf", templateParams, "V0EXCnXFo77Yp0lXs").then(
      (response) => {
        alert("Email inviata con successo!");
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("nomeUtenteInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("testoInput").value = "";
      },
      (error) => {
        console.error("Errore durante l'invio dell'email:", error);
        alert("Si è verificato un errore durante l'invio dell'email.");
        document.getElementById("nomeUtenteInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("testoInput").value = "";
      }
    );
  }
};

// const randomNavigationItemsLightUp = () => {
//   let navItems = document.querySelectorAll(".nav-item-init-anim");

//   const rndmNum = [];
//   for (let i = 0; i < 5; i++) {
//     let rndm = Math.floor(Math.random() * 4);
//     if (rndmNum[rndmNum.length - 1] !== rndm) {
//       rndmNum.push(rndm);
//     }
//     console.log(rndmNum);
//   }
//   const illuminateNavItems = (index) => {
//     return new Promise((resolve) => {
//       if (index < rndmNum.length) {
//         setTimeout(() => {
//           console.log("Ho selezionato questo item: " + rndmNum[index]);

//           navItems[rndmNum[index]].classList.add("nav-item-selected");

//           setTimeout(() => {
//             navItems[rndmNum[index]].classList.remove("nav-item-selected");
//             illuminateNavItems(index + 1).then(resolve);
//           }, 120 + 120 * index);
//         }, 120 + 120 * index);
//       } else {
//         resolve();
//       }
//     });
//   };

//   // Esegui l'animazione e, una volta completata, esegui homepageLocation
//   illuminateNavItems(0).then(() => {
//     homepageLocation();
//   });
//   window.addEventListener("scroll", () => {
//     homepageLocation();
//   });
// };
const homepageLocation = () => {
  let navItems = document.querySelectorAll(".nav-item-init-anim");
  const homePage = document.getElementById("homepage");
  const progetti = document.getElementById("progetti");
  const competenze = document.getElementById("competenze");
  const contatti = document.getElementById("contatti");

  const isElementVisible = (element) => {
    const boundingBox = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calcoliamo l'altezza visibile minima come l'80% dell'altezza dell'elemento
    const minVisibleHeight = boundingBox.height;

    return (
      boundingBox.top >= 0 &&
      boundingBox.top <= minVisibleHeight &&
      boundingBox.bottom >= 0 &&
      boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  if (isElementVisible(homePage)) {
    navItems[0].classList.add("nav-item-selected");
  } else {
    navItems[0].classList.remove("nav-item-selected");
  }

  if (isElementVisible(progetti)) {
    navItems[1].classList.add("nav-item-selected");
  } else {
    navItems[1].classList.remove("nav-item-selected");
  }

  if (isElementVisible(competenze)) {
    navItems[2].classList.add("nav-item-selected");
  } else {
    navItems[2].classList.remove("nav-item-selected");
  }

  if (isElementVisible(contatti)) {
    navItems[3].classList.add("nav-item-selected");
  } else {
    navItems[3].classList.remove("nav-item-selected");
  }
};

window.addEventListener("scroll", () => {
  homepageLocation();
});
homepageLocation();
// questo commento serve per committare
// questo commento serve per committare
