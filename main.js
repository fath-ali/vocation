let bar = document.querySelector('.bar');
let close1= document.querySelector('.close');
let nav_container = document.querySelector(".nav_container");
bar.addEventListener('click',function(){
    nav_container.classList.toggle('active');
    bar.classList.toggle('active');
    close1.classList.toggle('active1')
})
close1.addEventListener('click',function(){
    nav_container.classList.remove("active");
    close1.classList.toggle('active1')
    bar.classList.remove("active");
    close1.classList.remove('active1')
})

// -------------------sapnn--------------
let spinner = document.querySelector('#spanner');
let nav_containerUl   = document.querySelectorAll('ul li a');
nav_containerUl.forEach(function(nav){
    nav.addEventListener('click',function(e){
        spinner.classList.toggle('show');
        e.preventDefault()
        setTimeout(() => {
          spinner.classList.remove('show')
        }, 1000);
    
        
    });
});


// --------------------------------------Navbar Show-----------------------------------------------
let box = window.addEventListener("scroll",()=>{
    // document.querySelector("nav").classList.toggle("active",scrollY>300);
    let nav = document.querySelectorAll("nav");
    nav.forEach(function(nav1){
        nav1.classList.toggle('active',scrollY>300)
    })
   })
// -------------------------------------------Services------------------------------------------------
let product  =[
 {
    id:0,
    icon:'  <i class="fa fa-3x fa-globe"></i>',
    heading:'Hotel Reservation',
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
 },
 {
    id:1,
    icon:'<i class="fa fa-3x fa-hotel"></i>',
    heading:"Hotel Reservation",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
 },
 {
    id:2,
    icon:'      <i class="fa fa-3x fa-user "></i>',
    heading:"Travel Guides",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    
 },
 {
    id:3,
    icon:'<i class="fa fa-3x fa-globe"></i>',
    heading:"Travel Guides",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    
 },

 {
    id:4,
    icon:'   <i class="fa fa-3x fa-cog"></i>',
    heading:"Event Management",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    
 },
 {
    id:5,
    icon:'<i class="fa fa-3x fa-globe"></i>',
    heading:"Travel Guides",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    
 },
 {
    id:6,
    icon:'<i class="fa fa-3x fa-globe"></i>',
    heading:"Travel Guides",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    
 },
 {
    id:7,
    icon:'<i class="fa fa-3x fa-globe"></i>',
    heading:"Travel Guides",
    text:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    
 },
 
];
let container = document.querySelector('.containerservive');
let box1 = document.querySelector('.box1');
window.addEventListener('DOMContentLoaded',function(){
    let display = product.map(function(item,index){                    
        return `
         <div class="box1" data-index${index}>
                <div class="iconservice">
                    <i class=${item.icon}${item.icon}</i>
                </div>
                <h5>${item.heading}</h5>
                <p>${item.text}</p>
            </div>
        `        
    });    
    display = display.join('');    
    container.innerHTML = display;
    let box = document.querySelectorAll('.box1');
    box.forEach(function(box1,index){
     if(index ==0){
      box1.style.backgroundColor ='black';
      box1.style.color ='white';
      box1.addEventListener('mouseover',function(){
        box1.style.backgroundColor ='greenyellow';

    });
    box1.addEventListener('mouseout',function(){
        box1.style.backgroundColor ='black';
    })
     }else if(index ==7){
      box1.style.backgroundColor = 'blue';
      box1.style.color = 'white';   
      box1.addEventListener('mouseover',function(){
      box1.style.transform = 'rotate(190deg)'
      })
      box1.addEventListener('mouseout',function(){
          box1.style.transform = 'rotate(0deg)'
      })
     }
      
    })
    

});

// ------------------------------Finish Here---------------------------------------

let cont = document.querySelector('.section-content');
let h1 =document.querySelector('.section-content h1')
let p =document.querySelector('.section-content p');

console.log(p);


function callback1(entries,option2){
    entries.forEach(function(entry){
        if(entry.isIntersecting ===true){
            h1.classList.toggle("active");
            p.classList.toggle("active")
        }else{
        h1.classList.remove("active");
        p.classList.remove("active")
        }
    })
}
Option1 = {
    root:null,
    treshold:0.2,
}


let observe1 = new IntersectionObserver(callback1,Option1);
observe1.observe(cont);


let about =document.querySelector('.about_container');
let imageabout = document.querySelector('.about-image');
let aboutcontent = document.querySelector('.aboutContent');
function call(entries,option){
  entries.forEach(function(item){
   if(item.isIntersecting  ==true){
    imageabout.classList.toggle('active');
    aboutcontent.classList.toggle('active')

   }else{
    imageabout.classList.remove('active');
    aboutcontent.classList.remove('active')
   }
})
}
 const ali ={
    root:null,
    treshold:0.12,
}

let ob = new IntersectionObserver(call,ali);
ob.observe(about)
// ----------------------------------------------------------------
let poluar = document.querySelector('.popular-container img');
let left = document.querySelectorAll('.leftimage1 img');
let right = document.querySelector('.right-popular img');
function ob4call(entries,option){
  entries.forEach(function(entry){
    right.classList.toggle('active')
    poluar.classList.toggle('active')
    if(entry.isIntersecting ===true){
     left.forEach(function(lef){
        lef.classList.add("active")
     })
    }else{
        right.classList.remove('active')
        poluar.classList.remove("active")
        left.forEach(function(lef){
            lef.classList.remove("active")
         })
    }
  })
}
const ob4option = {
    root:null,
    treshold:0.12,
}
let ob4 =new IntersectionObserver(ob4call,ob4option)
ob4.observe(poluar);
// --------------------------------------packing boxing-----------------------------
let packages = document.querySelector('.packcontainer');
let packatesbox = document.querySelectorAll('.packbox');

function packcall(entries, option){
    entries.forEach(function(entry){
        if(entry.isIntersecting ===true){
            packatesbox.forEach(function(pack1,index){                
                setTimeout(() => {
                    if(index ==0){
                       pack1.classList.add('active')
                    } 
                }, 300);
                setTimeout(() => {
                    if(index ==1){
                       pack1.classList.add("active")
                    } 
                }, 800);
                
                setTimeout(() => {
                    if(index ==2){
                        pack1.classList.add('active');
                    }   
                }, 1500);
            })
        }
    })
}
const packoption = {
    root:null,
    treshold:0.12,
}


let pack = new IntersectionObserver(packcall,packoption);
pack.observe(packages)
// --------------------------------------------Finish-------------------------------------
//  -----------------------------------------------booking--------------------------------
const booking = document.querySelector('.bookcontainer');
function bookcall(entries,option){
    entries.forEach(function(enty){
    if(enty.isIntersecting ===true){
        booking.classList.add('active')
    }
    })
}
const bookoption = {
    root:null,
    treshold:0.12,
}

let book = new IntersectionObserver(bookcall,bookoption);
book.observe(booking)
// ----------------------------Finish here----------------------------------------
//------------------------------Step Here-----------------------------------------
const step = document.querySelector('.step-container');
const stepbox = document.querySelectorAll('.stepbox');
function stepcall (entries,option){
     entries.forEach(function(entry){
        if(entry.isIntersecting ===true){
            stepbox.forEach(function(step,index){
                setTimeout(() => {
                    if(index ==0){
                        step.classList.add("active");
                    } 
                }, 400);
                setTimeout(() => {
                     if(index ==1){
                        step.classList.toggle("active");
                     }
                }, 800);
                setTimeout(() => {
                     if(index ==2){
                        step.classList.toggle('active')
                     }
                }, 1200);
            })
        }
     })
}
const stepoption = {
    root:null,
    treshold:0.12,
}


let st = new IntersectionObserver(stepcall,stepoption);
st.observe(step)
// ------------------------------Finish Here--------------------------------------
let team = document.querySelector('.team-container');
let teambox = document.querySelectorAll('.teambox');
function teamcall(entries,option){
     entries.forEach(function(entry){
        if(entry.isIntersecting ===true){
            teambox.forEach(function(box,index){
              setTimeout(() => {
                 if(index ==0){
                    box.classList.add('active')
                 }
              }, 300);
              setTimeout(() => {
                 if(index ===1){
                    box.classList.add('active');
                 }
              }, 600);
              setTimeout(() => {
                 if(index ===2){
                    box.classList.toggle('active')
                 }
              }, 900);
              setTimeout(() => {
                 if(index ===3){
                    box.classList.toggle('active');
                 }
              }, 1200);
            })
        }
     })
}
const teamoption = {
    root:null,
    treshold:0.12,
}

let team1 = new IntersectionObserver(teamcall,teamoption);
team1.observe(team)
// -----------------------------Slide SHOW--------------------------------------

const wrapper = document.querySelectorAll('.button span');
const carousel =document.querySelector('.carousel');
const card =document.querySelector('.card').offsetWidth;
wrapper.forEach(function(btn){
    btn.addEventListener('click',function(){
        carousel.scrollLeft +=btn.id =='left'? -card:card;
    })
})


