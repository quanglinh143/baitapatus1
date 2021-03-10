$(document).ready(function(){
    $('.isearchm').click(function(){
      $('.searching').toggleClass('activeee');
    })
  })
  $(document).ready(function(){
    $('.isearchh').click(function(){
      $('.searchingg').toggleClass('activee');
    })
  })


   // code thuần slide
  // document.addEventListener("DOMContentLoaded",function(){
  //   document.querySelector(".next").onclick=next;
  // })

 
  // var couter=1;

  // function next(){
  //   document.querySelector('#radio-'+couter).checked= true;
  //   couter++;
  //   if(couter>7){
  //     couter=1;
  // }
  // }

  const previcon='<img src="pic1/prev.png" style="width:50px; margin-top:-400px;margin-left:-1500px; ">';
  const nexticon='<img src="pic1/next.png" style="width:50px; margin-top:-400px;margin-right:-1360px;">';
  
  

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
      previcon,
      nexticon,
    ],
    
    

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1270:{
            items:4
        }
    }
})


 



