/**
* Template Name: PhotoFolio - v1.2.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


let json_data_arr=[];
let gun_category={};
let auto_keys=[];

function go_to_detail( index){
  // console.log( '=====') ;
  // console.log( json_data_arr[index])
  // console.log( '=====') ;


  let str = JSON.stringify(json_data_arr[index]);
  localStorage.setItem('gallery-single-item', str);
}

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
      json_data_arr = json_content.data ;


      // build gun category
      auto_keys=[]
      for( let i=0 ; i<json_data_arr.length ; i++){
        let item = json_data_arr[i] ;
        if( item.displayName.toLowerCase().indexOf('random')<0){
          auto_keys.push( item.displayName);
        }
        let tokens = item.assetPath.split('/') ;
        let main_cat = tokens[3] ;        
        let item_type ;
        
        if( main_cat=='Melee'){
          item_type = 'Melee' ;
        }else{
          item_type = main_cat+"-"+tokens[4] ;
        }        
        if( gun_category[item_type]==undefined){
          gun_category[item_type] = 1 ;
        }else{
          gun_category[item_type]++ ;
        }
      }
      

      for ( let cat in gun_category ){
        if( cat.startsWith('Guns-')){
          let groot = document.getElementById('gun_cat') ;
          groot.innerHTML = groot.innerHTML+'<li><a href="index.html?wp='+cat+'">'+cat.substring(5)+'<span class="badge">'+gun_category[cat]+'</span></a>'+'</li>' ;
        }else if(cat.startsWith('Melee')){
          document.getElementById('melee_count').innerText = gun_category[cat];
        }
      
        // console.log( cat ) ;
      }

      // autocomplete ===========================
      const autoCompleteJS = new autoComplete({
        placeHolder: "Search for Skins...",
        data: {
            src: auto_keys,
            cache: true,
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
      });
      autoCompleteJS.input.addEventListener("selection", function (event) {
        const feedback = event.detail;
        autoCompleteJS.input.blur();
        // Prepare User's Selected Value
        const selection = feedback.selection.value[feedback.selection.key];
        // Render selected choice to selection div
        // document.querySelector(".selection").innerHTML = selection;
        // // Replace Input value with the selected value
        // autoCompleteJS.input.value = selection;
        // // Console log autoComplete data feedback
        console.log(feedback);
      
        console.log( feedback.selection.value ) ;

        window.location.assign("index.html?sp="+feedback.selection.value);
      });
      // autocomplete ===========================

     


      let panel = document.getElementById('skin_panel');
      let startTag="<div></div>"
      panel.innerHTML=startTag;
    
      let my_list = [] ;

      // console.log(gun_category) ;
      let paraIdx = window.location.href.indexOf('?wp=') ;
      let para = '' ;
      if(paraIdx>=0){
        para = window.location.href.substring( paraIdx+4) ;
      }
      console.log('para ==>'+para) ;    
      
      let paraIdx2 = window.location.href.indexOf('?sp=') ;
      let para2 = '' ;
      if(paraIdx2>=0){
        para2 = window.location.href.substring( paraIdx2+4) ;
        para2 = decodeURI(para2);
      }
      
      console.log('para2 ==>'+para2) ;    

   
      if(para!=null && para!=''){
        for( let i=0 ; i<json_data_arr.length ; i++){
          let item = json_data_arr[i] ;
          let tokens = item.assetPath.split('/') ;
          let main_cat = tokens[3] ;        
          let item_type = main_cat+"-"+tokens[4] ;         
          if( para == main_cat || para == item_type ){
              my_list.push( i ) ;
          }
        }
      }else if(para2!=null && para2!=''){
        for( let i=0 ; i<json_data_arr.length ; i++){
       
          if( json_data_arr[i].displayName ==para2 ){
              my_list.push( i ) ;
          }
        }
      }else{
        for( let i=0;i<32;i++){
          let r =Math.floor( Math.random()*json_data_arr.length );
          while( my_list.indexOf(r) > -1 ){
            r =Math.floor( Math.random()*json_data_arr.length );
          }
          my_list.push(r) ;
        }
      }


      for( let i = 0 ; i<my_list.length ; i++){

        let r =my_list[i];
        let img = json_data_arr[r].displayIcon;
        let title = json_data_arr[r].displayName ;

        // console.log('---------------'); 
        // console.log(json_data_arr[r]);
        // console.log('---------------');
        
        // console.log(i+" ------- ") ;
        // console.log(title);
        if( img == null){
          //console.log( "    >> null ")
          //i--;
          continue;
        }
        // console.log(img);
        if( title.indexOf('Standard')>-1){
          //console.log( "    >> Standard one ...")
          //i--;
          continue;
        }

        let html_content = `<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gallery-item h-100">
          <img src="${img}" class="img-fluid" alt="">
          <div class="gallery-links d-flex align-items-center justify-content-center"><span class="glightbox preview-link">${title}</span>
          <a href="${img}" target="_blank" title="preview" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" class="details-link" onclick="go_to_detail(${r});" ><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>`;

      // console.log('====>'+r);
      panel.innerHTML = panel.innerHTML+ html_content;
      }
      
    });

});

