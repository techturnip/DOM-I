const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Navigation
let navItem = document.querySelectorAll('nav a');

for (let i = 0; i < navItem.length; i++) {
  navItem[i].innerText = siteContent.nav['nav-item-' + (i + 1)];
}

// CTA Section
let ctaHeading = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');

ctaHeading.innerText = siteContent.cta.h1;
ctaBtn.innerText = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// Main Content Section
let mainContentHeadings = document.querySelectorAll('.text-content h4');
let mainContentText = document.querySelectorAll('.text-content p');
let mainContentImg = document.querySelector('#middle-img');

let mainContentHeadingArr = [
  siteContent['main-content']['features-h4'],
  siteContent['main-content']['about-h4'],
  siteContent['main-content']['services-h4'],
  siteContent['main-content']['product-h4'],
  siteContent['main-content']['vision-h4']
];
let mainContentTextArr = [
  siteContent['main-content']['features-content'],
  siteContent['main-content']['about-content'],
  siteContent['main-content']['services-content'],
  siteContent['main-content']['product-content'],
  siteContent['main-content']['vision-content']
];

for (
  let i = 0;
  i < mainContentHeadings.length && i < mainContentText.length;
  i++
) {
  mainContentHeadings[i].innerText = mainContentHeadingArr[i];
  mainContentText[i].innerText = mainContentTextArr[i];
}

mainContentImg.setAttribute(
  'src',
  siteContent['main-content']['middle-img-src']
);
