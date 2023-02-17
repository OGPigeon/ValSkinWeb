/**
* Template Name: PhotoFolio - v1.2.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */

  let json_data=`{
    "uuid": "97af88e4-4176-9fa3-4a26-57919443dab7",
    "displayName": "Glitchpop Odin",
    "themeUuid": "5b014f36-414b-4703-9c65-1876c630feaa",
    "contentTierUuid": "e046854e-406c-37f4-6607-19a9ba8426fc",
    "displayIcon": "https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png",
    "wallpaper": null,
    "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_PrimaryAsset",
    "chromas": [
      {
        "uuid": "9667983e-4c8c-e5b2-68d7-be84f9b3d46c",
        "displayName": "Glitchpop Odin",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/swatch.png",
        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Standard/HeavyMachineGun_Cyberpunk_Standard_PrimaryAsset"
      },
      {
        "uuid": "0b30b3e8-4696-7b7c-fed2-50b34234965a",
        "displayName": "Glitchpop Odin Level 4 (Variant 1 Blue)",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/0b30b3e8-4696-7b7c-fed2-50b34234965a/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/0b30b3e8-4696-7b7c-fed2-50b34234965a/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/0b30b3e8-4696-7b7c-fed2-50b34234965a/swatch.png",
        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Blue/HeavyMachineGun_Cyberpunk_Blue_PrimaryAsset"
      },
      {
        "uuid": "54caeb7f-4fc4-6adb-45a6-cfb6202d9c24",
        "displayName": "Glitchpop Odin Level 4 (Variant 2 Red)",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/54caeb7f-4fc4-6adb-45a6-cfb6202d9c24/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/54caeb7f-4fc4-6adb-45a6-cfb6202d9c24/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/54caeb7f-4fc4-6adb-45a6-cfb6202d9c24/swatch.png",
        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Red/HeavyMachineGun_Cyberpunk_Red_PrimaryAsset"
      },
      {
        "uuid": "bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e",
        "displayName": "Glitchpop Odin Level 4 (Variant 3 Gold)",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e/swatch.png",
        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Gold/HeavyMachineGun_Cyberpunk_Gold_PrimaryAsset"
      }
    ],
    "levels": [
      {
        "uuid": "549b06bb-4704-25ce-19d5-c9b70b10de19",
        "displayName": "Glitchpop Odin",
        "levelItem": null,
        "displayIcon": "https://media.valorant-api.com/weaponskinlevels/549b06bb-4704-25ce-19d5-c9b70b10de19/displayicon.png",
        "streamedVideo": "https://valorant.dyn.riotcdn.net/x/videos/release-05.12/72c8af91-f9f9-4044-801c-3e73ee2f2aa1_default_universal.mp4",
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv1_PrimaryAsset"
      },
      {
        "uuid": "3e7d08f9-4067-1abe-8159-87b8e31fc463",
        "displayName": "Glitchpop Odin Level 2",
        "levelItem": "EEquippableSkinLevelItem::VFX",
        "displayIcon": "https://media.valorant-api.com/weaponskinlevels/3e7d08f9-4067-1abe-8159-87b8e31fc463/displayicon.png",
        "streamedVideo": "https://valorant.dyn.riotcdn.net/x/videos/release-05.12/92c68b11-5e4c-48a7-acdd-32cd8dca7f01_default_universal.mp4",
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv2_PrimaryAsset"
      },
      {
        "uuid": "ca91d540-4d2d-4946-70bd-97aae8117306",
        "displayName": "Glitchpop Odin Level 3",
        "levelItem": "EEquippableSkinLevelItem::VFX",
        "displayIcon": "https://media.valorant-api.com/weaponskinlevels/ca91d540-4d2d-4946-70bd-97aae8117306/displayicon.png",
        "streamedVideo": "https://valorant.dyn.riotcdn.net/x/videos/release-05.12/18da6f4b-bb95-4158-9e8e-b785e4ba25d0_default_universal.mp4",
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv3_PrimaryAsset"
      },
      {
        "uuid": "8c95559d-44fb-544d-00d7-8192ed38b17a",
        "displayName": "Glitchpop Odin Level 4",
        "levelItem": "EEquippableSkinLevelItem::Finisher",
        "displayIcon": "https://media.valorant-api.com/weaponskinlevels/8c95559d-44fb-544d-00d7-8192ed38b17a/displayicon.png",
        "streamedVideo": "https://valorant.dyn.riotcdn.net/x/videos/release-05.12/1f8a6fe7-06a4-4cf4-8d1a-e4db58a0f700_default_universal.mp4",
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv4_PrimaryAsset"
      }
    ]
  }`;


// slide content


// console.log( json_data) ;
let  dataObj = JSON.parse(json_data) ;

let level_root = document.getElementById('slides_content') ;

let tmp = ` <div class="swiper-slide"><video controls autoplay muted><source src="https://valorant.dyn.riotcdn.net/x/videos/release-05.12/72c8af91-f9f9-4044-801c-3e73ee2f2aa1_default_universal.mp4" type="video/mp4">
</video>
</div>`;

var menu_level = [] ;
var menu_name = [] ;
var idx = 1 ;
level_root.innerHTML = '';
for( let lvl of dataObj['levels']){
    console.log(lvl);
    let dpName = lvl['displayName'];
    let dpIcon = lvl['displayIcon'];
    let vd = lvl['streamedVideo'];

    let s = dpName.indexOf('Level');
    dpName = dpName.substring(0,s) ;
    document.getElementById('slide_title').innerText = dpName;
    document.getElementById('slide_img').src = dpIcon;

    level_root.innerHTML = level_root.innerHTML + 
    `<div class="swiper-slide">

    <div class="row" >
    <video controls autoplay muted><source src="`+vd+`" type="video/mp4"></video>
    </div>
    </div>`;


    menu_level.push('level '+idx) ;
    idx++ ;
    menu_name.push(dpName) ;
}  
  //var menu = ['level 1', 'level 2', 'level 3','t2','t3','t4','t5','t6','t7','t8','t9','t10']
  new Swiper('.slides-1', {
    speed: 600,
    loop: false,
    autoplay:false,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> Level '+index+ '</span>';
        },
        horizontalClass:'swiper-pagination-vertical'
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */

  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay:false,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * load json data
   */
  fetch('./result.json')
    .then((response) => response.json())
    .then(function(json_content){

      console.log(json_content);
      let arr = json_content.data ;

      let panel = document.getElementById('skin_panel');
      let startTag="<div></div>"
      panel.innerHTML=startTag;
      let visited = [] ;
      for( let i = 0 ; i<32 ; i++){

        let r =Math.floor( Math.random()*arr.length );
        let img = arr[r].displayIcon;
        let title = arr[r].displayName ;
        // img = ""
        console.log(visited) ;
        while( visited.indexOf(r) > -1 ){
          r = Math.random()*arr.length ;
        }
        visited.push(r) ;
        
        // console.log(i+" ------- ") ;
        // console.log(title);
        if( img == null){
          //console.log( "    >> null ")
          i--;
          continue;
        }
        // console.log(img);
        if( title.indexOf('Standard')>-1){
          //console.log( "    >> Standard one ...")
          i--;
          continue;
        }

        let html_content = `<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
          <img src="${img}" class="img-fluid" alt="">
          <div class="gallery-links d-flex align-items-center justify-content-center"><span class="glightbox preview-link">${title}</span>
          <a href="${img}" target="_blank" title="preview" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>`;

      console.log('====>'+r);
      panel.innerHTML = panel.innerHTML+ html_content;
      }
      
    });

});