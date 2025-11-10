//template_p3io1ga
//service_ka386sl
//xSSG4mKNPS7AGUiDA      UMoRBjsiN_M9CU_7m

let contrastToggle = false

const scaleFactor = 1;
const shapes = document.querySelectorAll(".shape");

// Helper to get center of viewport
function getViewportCenter() {
  return {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };
}

function moveBackground(event) {
  const center = getViewportCenter();
  // Calculate offset from center, not top left
  const offsetX = (event.clientX - center.x) * scaleFactor;
  const offsetY = (event.clientY - center.y) * scaleFactor;

  shapes.forEach((shape, i) => {
    const direction = (i % 2 === 0) ? 1 : -1;
    shape.style.transform = `translate(${offsetX * direction}px, ${offsetY * direction}px) rotate(${(offsetX + offsetY) * 10 * direction}deg)`;
  });
}

window.addEventListener('mousemove', moveBackground);
/* 
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
       // shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`

        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${(x + y) * 10 * boolInt}deg)`
    }
}
 */



function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else (
        document.body.classList.remove("dark-theme")
    )
}


function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' modal__overlay--visible'
    //the space is veryimportant . 

    emailjs
    .sendForm(
        'service_ka386sl',
        'template_p3io1ga',
        event.target,
        'UMoRBjsiN_M9CU_7m'
    )
    .then(() => {
    loading.classList.remove('modal__overlay--visible');
    success.classList += ' modal__overlay--visible'
    })
    .catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
        "The email service is temporarily unavailable, Please contact me directly manijustworkhere@gmail.com"
        );
    })
}
   /*
   setTimeout(() => {
    loading.classList.remove('modal__overlay--visible');
    success.classList += ' modal__overlay--visible'
    console.log("it worked")
   }, 1500)
*/


let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    //toggle modal
    isModalOpen = true;
    document.body.classList += " modal--open";
}