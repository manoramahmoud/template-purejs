let mainColor = window.localStorage.getItem('color-box');
console.log(mainColor);
if (mainColor !== null) {
  console.log('local storage is not null');
  console.log(window.localStorage.getItem('color-box'));
  document.documentElement.style.setProperty(
    '--main--color',
    window.localStorage.getItem('color-box')
  );
  document.querySelectorAll('.color-box li').forEach((ele) => {
    ele.classList.remove('active');
    if (ele.dataset.color === mainColor) {
      ele.classList.add('active');
    }
  });
}
let landingPage = document.querySelector('.landing-page');
console.log(landingPage);
let arrayOfImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
// landingPage.style.backgroundImage =  "url('images/01.jpg')"
// console.log(Math.ceil(Math.random()*arrayOfImages.length))

// function tonrandomize imgs
let backgroundOption = true;
let intervalBackground;
// check if ther is local storage random background Item
let backgroundLocalItem = localStorage.getItem('background_option');

if (backgroundLocalItem !== null) {
  console.log('localStorage is not empty');
  if (backgroundLocalItem === 'true') {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  document.querySelectorAll('.random-background span').forEach((element) => {
    element.classList.remove('active');
  });
  if (backgroundLocalItem === 'true') {
    document.querySelector('.random-background .yes').classList.add('active');
  } else {
    document.querySelector('.random-background .no').classList.add('active');
  }
}
function randomizeImg() {
  if (backgroundOption === true) {
    intervalBackground = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * arrayOfImages.length);

      // landingPage.style.backgroundImage ='url("images/'+ arrayOfImages[randomNumber]+'")'
      landingPage.style.backgroundImage = `url('images/${arrayOfImages[randomNumber]}')`;
    }, 1000);
  }
}
// function clearRandomize(){

//   clearInterval(intervalBackground)
// }

// randomizeImg();

// toogle spin class in icon
let setting_box = document.querySelector('.setting-box');
// let iconFont = document.querySelector(".icon-font") ;
console.log(setting_box);
// console.log(iconFont);
document.querySelector('.icon-font').onclick = function () {
  // iconFont.classList.toggle("fa-spin")
  document.querySelector('.fa-address-card').classList.toggle('fa-spin');
  setting_box.classList.toggle('open');
};
const color_li = document.querySelectorAll('.color-box li');
color_li.forEach((li) => {
  // console.log(li);
  // color_li.forEach((ele)=>{
  //   ele.classList.remove("active")
  // })

  li.addEventListener('click', (e) => {
    console.log(e.target.dataset.color);
    //  set color on root

    document.documentElement.style.setProperty(
      '--main--color',
      `${e.target.dataset.color}`
    );
    // set color on localStorage
    window.localStorage.setItem('color-box', e.target.dataset.color);
    // remove active class from all children
    // e.target.parentElement.querySelectorAll('.active').forEach((ele) => {
    //   ele.classList.remove('active');
    // });
    // e.target.classList.add('active');
    handleActive(e)
    console.log(e.target.parentElement.querySelectorAll('.active'));
  });
});
// span
const randomBackEl = document.querySelectorAll('.random-background span');
randomBackEl.forEach((span) => {
  // console.log(li);
  // color_li.forEach((ele)=>{
  //   ele.classList.remove("active")
  // })

  span.addEventListener('click', (e) => {
    // e.target.parentElement.querySelectorAll('.active').forEach((ele) => {
    //   ele.classList.remove('active');
    // });
    // e.target.classList.add('active');
    handleActive(e)
    console.log(e.target.parentElement.querySelectorAll('.active'));
    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomizeImg();
      localStorage.setItem('background_option', true);
      console.log(backgroundOption);
    } else {
      backgroundOption = false;
      clearInterval(intervalBackground);
      localStorage.setItem('background_option', false);
      console.log(backgroundOption);
    }
  });
});

// select skills selectors

let ourSkills = document.querySelector('.skills');
console.log(ourSkills);

window.onscroll = function () {
  // skills offest top
  let skillOffestTop = ourSkills.offsetTop;
  // console.log(skillOffestTop);
  //skills offest height
  let skillsOffestHeight = ourSkills.offsetHeight;
  let skillsOffestWidth = ourSkills.offsetWidth;
  // console.log(skillsOffestHeight);
  // console.log(skillsOffestWidth);
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);
  let windowScrollTop = this.pageYOffset;
  // console.log(windowScrollTop);
  if (windowScrollTop >= skillOffestTop + skillsOffestHeight - windowHeight) {
    console.log('reached');
    let allSkills = document.querySelectorAll(
      '.skills-box .skill-progress span'
    );
    //  console.log(allSkills);
    allSkills.forEach((skills) => {
      skills.style.width = skills.dataset.progress;
    });
  }
};

// create popUp with images
let ourGallery = document.querySelectorAll('.gallery .img-boxes img');

ourGallery.forEach((img) => {
  img.addEventListener('click', (e) => {
    // create overlay;
    let overLay = document.createElement('div');
    overLay.className = 'popup-overLay';
    document.body.appendChild(overLay);
    // craete the popup box
    let popupbox = document.createElement('div');
    // add class to popup box
    popupbox.className = 'popup-box';
    // create heading
    if (img.alt !== null) {
      // create heading text of image
      let imgHeading = document.createElement('h3');

      // create text of heading
      let imgText = document.createTextNode(img.alt);
      // appen text in heading
      imgHeading.appendChild(imgText);
      // append heading to popupbox
      popupbox.appendChild(imgHeading);

      //  create close span
      let closeButton = document.createElement('span');
      let textButton = document.createTextNode('x');
      // append text to close button
      closeButton.appendChild(textButton);
      closeButton.className = 'close-button';
      popupbox.appendChild(closeButton);
    }
    //  crate img
    let popupImg = document.createElement('img');
    //  set img src
    popupImg.src = img.src;
    // add img to popupbox;
    popupbox.appendChild(popupImg);
    // add popupbox to body
    document.body.appendChild(popupbox);
  });
});
// close popup
document.addEventListener('click', (e) => {
  if (e.target.className === 'close-button') {
    e.target.parentElement.remove();
      // // remove over-lay
  document.querySelector(".popup-overLay").remove()
  }


});
// nav bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets")
// console.log(allBullets);
// allBullets.forEach(bullet =>{
//   bullet.addEventListener("click", (e)=>{
//    document.querySelector(e.target.dataset.section).scrollIntoView({
//     behavior: "smooth"
//    })
//   })
// })
const links = document.querySelectorAll(".links a")
// console.log(allBullets);
// links.forEach(list =>{
//   list.addEventListener("click", (e)=>{
//     e.preventDefault()
//    document.querySelector(e.target.dataset.section).scrollIntoView({
//     behavior: "smooth"
//    })
//   })
// })

function scrollToSomeWhere(elements){
  elements.forEach(list =>{
    list.addEventListener("click", (e)=>{
      e.preventDefault()
     document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth"
     })
    })
  })
}
scrollToSomeWhere(links)
scrollToSomeWhere(allBullets)

// handle active function
function handleActive(ev){
  ev.target.parentElement.querySelectorAll('.active').forEach((ele) => {
    ele.classList.remove('active');
  });
  ev.target.classList.add('active');
}

let bulletSpan = document.querySelectorAll(".bullets-option span");
let bulletContainer = document.querySelector(".nav-bullets");
let bulleLocalStorage = window.localStorage.getItem("bullets_option");
if(bulleLocalStorage !== null){
  bulletSpan.forEach((span)=>{
    span.classList.remove("active")
  })
  if(bulleLocalStorage ==="block"){
    bulletContainer.style.display = "block"
    document.querySelector(".bullets-option .yes").classList.add("active")
  }else{
    bulletContainer.style.display = "none"
    document.querySelector(".bullets-option .no").classList.remove("active")
  }
}

bulletSpan.forEach((span)=>{
  span.addEventListener("click", (e)=>{
    if(span.dataset.display ==="show"){
      bulletContainer.style.display = "block"
      window.localStorage.setItem("bullets_option", "block")
    }else{
      bulletContainer.style.display = "none";
      window.localStorage.setItem("bullets_option", "none")
    }
    handleActive(e)
  })
})
document.querySelector(".reset-option").onclick = function(){
  // localStorage.clear();
  localStorage.removeItem("bullets_option")
  localStorage.removeItem("color-box")
  localStorage.removeItem("background_option")
  window.location.reload()
}
