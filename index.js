//template_p3io1ga
//service_ka386sl
//xSSG4mKNPS7AGUiDA      UMoRBjsiN_M9CU_7m


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
    ).then(() => {
    loading.classList.remove('modal__overlay--visible');
    success.classList += ' modal__overlay--visible'
    }).catch(() => {
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


function toggleModal() {
    //toggle modal
    document.body.classList += " modal--open";
}