AOS.init({
  
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const checbox_input = document.querySelector('#checbox_input');

function peregvig() {

  if(checbox_input.checked){

    document.querySelector('#nada').textContent = 'English'
    document.querySelector('.abaut_two').textContent = 'I am a Frontend developer';
    document.querySelector('.bt_btn_onen').textContent = 'View my works'
    document.querySelector('#glavna').textContent = 'Main'
    document.querySelector('#potfoliao').textContent = 'Portfolio'
    document.querySelector('#obo_mne').textContent = 'About me'
    document.querySelector('#contakti').textContent = 'Contacts'
    document.querySelector('.text_two').textContent = 'About me'
    document.querySelector('.h1').textContent = 'Who is it?'
    document.querySelector('#biograf').textContent = 'My name is Matvey, I love writing code, so I want to develop in this'
    document.querySelector('#biograf_two').textContent = `all my life. I'm 17 years old, I'm in the 11th grade (it won't hurt to work),`
    document.querySelector('#biograf_three').textContent = `I'm going to enter Moscow For a year I worked as a freelancer, below will be`
    document.querySelector('#biograf_four').textContent = `projects are presented. I am a young, promising guy, ready`
    document.querySelector('#biograf_five').textContent = `to understand all the complex, assigned tasks.`
    document.querySelector('.text_four').textContent = 'What can I do now?';
    document.querySelector('#chto_ya_ixy').textContent = 'What am I studying now?';
    document.querySelector('#port').textContent = 'Portfolio';
    document.querySelector('.btn_two').textContent = 'More detailed';
    document.querySelector('#shasmati').textContent = 'Chess School';
    document.querySelector('#game_pc').textContent = 'Playing against the computer';
    document.querySelector('#sorh_film').textContent = 'Movie Search';
    document.querySelector('#relacs').textContent = 'Take a break from problems';
    document.querySelector('#test_for_book').textContent = 'Book Test';
    document.querySelector('#pogoda').textContent = 'Weather app';
    document.querySelector('#novi_god').textContent = 'The New Year is in a hurry';
    document.querySelector('#bygalteria').textContent = 'Accounting';
    document.querySelector('#contetiki').textContent = 'Contacts';
    document.querySelector('.tetx').textContent = 'Do you have any questions?';
    document.querySelector('.btn_three').textContent = 'Send';
    document.querySelector('.avtor').textContent = 'Rogozyanov Matvey:';
    document.querySelector('.btn_two_three').textContent = 'More detailed';
    document.querySelector('.btn_two_four').textContent = 'More detailed';
    document.querySelector('.btn_two_five').textContent = 'More detailed';
    document.querySelector('.btn_two_six').textContent = 'More detailed';
    document.querySelector('.btn_seven').textContent = 'More detailed';
    document.querySelector('.btn_two_each').textContent = 'More detailed';
    document.querySelector('.btn_two_ten').textContent = 'More detailed';

    gsap.from('#nada', {
      opacity: 0,
      duration: 2,
      delay: .1,
      y:70
    })

    gsap.from('.btn', {
      opacity: 0,
      duration: 2,
      delay: .1,
      y:70
    })

    gsap.from('.abaut_two', {
      opacity: 0,
      duration: 2,
      delay: .1,
      y:70
    })
  }

  else {
    document.querySelector('#nada').textContent = 'Russian'
    document.querySelector('.abaut_two').textContent = 'Я Frontend разработчик';
    document.querySelector('.bt_btn_onen').textContent = 'Посмотреть мои работы'
    document.querySelector('#glavna').textContent = 'Главная'
    document.querySelector('#potfoliao').textContent = 'Портфолио'
    document.querySelector('#obo_mne').textContent = 'Обо мне'
    document.querySelector('#contakti').textContent = 'Контакты'
    document.querySelector('.text_two').textContent = 'Обо мне'
    document.querySelector('.h1').textContent = 'Кто это?'
    document.querySelector('#biograf').textContent = 'Меня зовут Матвей, я люблю прогать, поэтому хочу развиваться в этом'
    document.querySelector('#biograf_two').textContent = `всю жизнь. Мне 17 лет, учусь в 11 классе (в работе это не помешает),`
    document.querySelector('#biograf_three').textContent = `cобираюсь поступать в Москву. Год работал на фрилансе, ниже будут`
    document.querySelector('#biograf_four').textContent = `представленны проекты. Я молодой, перспективный парень, готовый`
    document.querySelector('#biograf_five').textContent = `разбираться во всех сложный, поставленных задачах.`
    document.querySelector('.text_four').textContent = 'Что я умею сейчас?';
    document.querySelector('#chto_ya_ixy').textContent = 'Что я изучаю сейчас?';
    document.querySelector('#port').textContent = 'Портфолио';
    document.querySelector('.btn_two').textContent = 'Подробнее';
    document.querySelector('#shasmati').textContent = 'Шахматная школа';
    document.querySelector('#game_pc').textContent = 'Игра против компьютера';
    document.querySelector('#sorh_film').textContent = 'Поиск фильмов';
    document.querySelector('#relacs').textContent = 'Отдохни от проблем';
    document.querySelector('#test_for_book').textContent = 'Тест по книге';
    document.querySelector('#pogoda').textContent = 'Приложение о погоде';
    document.querySelector('#novi_god').textContent = 'Новый год спешит';
    document.querySelector('#bygalteria').textContent = 'Бугалтерия';
    document.querySelector('#contetiki').textContent = 'Контакты';
    document.querySelector('.tetx').textContent = 'У вас появились вопросы?';
    document.querySelector('.btn_three').textContent = 'Отправить';
    document.querySelector('.avtor').textContent = 'Рогозянов Матвей:';
    document.querySelector('.btn_two_three').textContent = 'Подробнее';
    document.querySelector('.btn_two_four').textContent = 'Подробнее';
    document.querySelector('.btn_two_five').textContent = 'Подробнее';
    document.querySelector('.btn_two_six').textContent = 'Подробнее';
    document.querySelector('.btn_seven').textContent = 'Подробнее';
    document.querySelector('.btn_two_each').textContent = 'Подробнее';
    document.querySelector('.btn_two_ten').textContent = 'Подробнее';

    gsap.from('#nada', {
      opacity: 0,
      duration: 2,
      delay: .4,
      y:70
    })

    gsap.from('.btn', {
      opacity: 0,
      duration: 2,
      delay: .4,
      y:70
    })

    gsap.from('.abaut_two', {
      opacity: 0,
      duration: 2,
      delay: .4,
      y:70
    })
  }

}


gsap.to('.abaut', {
  text: "Привет, меня зовут Матвей...",
  delay: 0.5,
  duration: 3.7,
  yoyo: true,
  repeat: 1
})

gsap.to('.abaut_two', {
 text: "Я Frontend разработчик",
  delay: 8,
  duration: 3,
  ease: 'power1.in'
})

gsap.from('.conteiner', {
  opacity: 0,
  delay: 12,
  y: 50,
  duration: 2
})

gsap.from('.btn', {
  delay: 12,
  opacity: 0,
  y: 70,
  duration: 2
})

gsap.registerPlugin(ScrollTrigger);

gsap.from('.box_three', {
  duration: 2,
  opacity: 0,
  y: 50,
  scrollTrigger: {
      trigger: '.box_three'
  } 
})

gsap.from('#par', {
  duration: 2,
  opacity: 0,
  y: -100,
  scrollTrigger: '#par' ,
  ease: 'bounce'
})


gsap.from('.text_four', {
  duration: 2,
  opacity: 0,
  y: -100,
  scrollTrigger: '.text_four',
  ease: 'bounce'
})


document.addEventListener('DOMContentLoaded', () => {
  const menu_scroll = document.querySelector('#menu_scroll');
  const heiht_bloka = document.querySelector('.heiht_bloka');

  window.addEventListener('scroll', () => {
    let heiht_conteiner = heiht_bloka.offsetHeight - 120;
    let scrollTop = window.scrollY;
    if(scrollTop >= heiht_conteiner) {
      menu_scroll.classList.add('fixed')
    }

    else {
      menu_scroll.classList.remove('fixed')
    }
  })
})


gsap.from('#port', {
  duration: 2,
  opacity: 0,
  y: -100,
  scrollTrigger: '#port' ,
 ease: 'bounce'
})

gsap.from('#contetiki', {
  duration: 2,
  opacity: 0,
  y: -100,
  scrollTrigger: '#contetiki' ,
 ease: 'bounce'
})



particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);






