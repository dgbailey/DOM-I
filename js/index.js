const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Fill nav elements
const a_tags = window.document.querySelectorAll('a');
console.log(a_tags.length);
function fillNavItems(arr){
  for (let i=0;i< 6;i++){
    a_tags[i].textContent = arr['nav']['nav-item-'+[i +1]];
 
  }
}
fillNavItems(siteContent);

//Fill headline
const headline = document.querySelector('h1');
headline.textContent = siteContent['cta']['h1'];

//Fill cta-image
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src',siteContent['cta']['img-src']);

//cta button
const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

//features h4 p
function modify_text(selector,contentSection,contentItem,elementNum){
  const myElement = document.querySelectorAll(selector);
  console.log(myElement);
  myElement[elementNum].textContent = siteContent[contentSection][contentItem];
  
}
modify_text(".top-content .text-content h4","main-content","features-h4",0);
modify_text(".top-content .text-content p","main-content","features-content",0);

//about h4 p
modify_text(".top-content .text-content p","main-content","about-content",1);
modify_text(".top-content .text-content h4","main-content","about-h4",1);

//middle img
const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src',siteContent['main-content']['middle-img-src']);

//bottom-content
modify_text(".bottom-content .text-content p","main-content","services-content",0);
modify_text(".bottom-content .text-content h4","main-content","services-h4",0);

modify_text(".bottom-content .text-content p","main-content","services-content",1);
modify_text(".bottom-content .text-content h4","main-content","services-h4",1);

modify_text(".bottom-content .text-content p","main-content","services-content",2);
modify_text(".bottom-content .text-content h4","main-content","services-h4",2);

//contact

modify_text(".contact h4","contact","contact-h4",0);
modify_text(".contact p","contact","address",0);
modify_text(".contact p","contact","phone",1);
modify_text(".contact p","contact","email",2);

//footer
modify_text("footer p","footer","copyright",0);

//new nav items
const help = document.createElement('a');
const random = document.createElement('a');

help.textContent = "Help";
random.textContent = 'Random';

const children = [help,random];
const navigation = document.querySelector('nav');
navigation.append(...children);


//nav item color

const myElementColor = document.querySelectorAll("nav a");
myElementColor.forEach(currentValue => currentValue.style.color = 'green');


//EventListener
function nV(){
  let doc = document.querySelector('body');


  doc.style.backgroundColor = 'black';
  doc.style.color = 'green';
  
}

function rV(){
  let doc = document.querySelector('body');

  doc.style.backgroundColor = 'white';
  doc.style.color = 'black';
  
}

function toggleV(){
  let doc = document.querySelector('body');
  if(doc.style.backgroundColor === 'black'){
    rV();}
  else{
    nV();
  }
}
const nightVision = document.querySelector('button');
nightVision.addEventListener('click',toggleV);
