// import {
//   createNewForm,
// } from "./services/apiService.js";


const swiper = new Swiper('.first-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const twoSwiper = new Swiper('.second-slider', {
  direction: 'horizontal',
  loop: true,


  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

});

const threeSwiper = new Swiper('.third-slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 360,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});


const fourthSlider = new Swiper('.fourth-slider', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

});

const BASE_URL = "https://6581bb4d3dfdd1b11c441092.mockapi.io";
const ENDPOINT = "Contact";

function createNewForm(formObj) {
  console.log("POST: \n\tvalue:", formObj);
  return axios.post(`${BASE_URL}/${ENDPOINT}`, formObj);
}

const refs = {
  form: document.getElementById("form"),
  markFilter: document.getElementById("markFilter"),
};

refs.form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    name: refs.form.elements.name.value,
    email: refs.form.elements.email.value,
    msg: refs.form.elements.msg.value,
  };

  console.log(formData);

  try {
    await createNewForm(formData);
    console.log("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
  finally {
    refs.form.reset();
  }
}
