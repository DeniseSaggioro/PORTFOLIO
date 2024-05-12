const handleSubmit = (e) => {
  e.preventDefault();
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
