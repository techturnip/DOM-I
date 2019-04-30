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

/* CTA Section */

// Query Selectors
let ctaHeading = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');

// Set innerText
ctaHeading.innerText = siteContent.cta.h1;
ctaBtn.innerText = siteContent.cta.button;

// Set src attribute
ctaImg.setAttribute('src', siteContent.cta['img-src']);

/* Main Content Section */

// Query Selectors
let mainContent = siteContent['main-content'];
let mainContentHeadings = document.querySelectorAll('.text-content h4');
let mainContentText = document.querySelectorAll('.text-content p');
let mainContentImg = document.querySelector('#middle-img');

// Store Object Values in Array for looping
let mainContentHeadingArr = [
  mainContent['features-h4'],
  mainContent['about-h4'],
  mainContent['services-h4'],
  mainContent['product-h4'],
  mainContent['vision-h4']
];
let mainContentTextArr = [
  mainContent['features-content'],
  mainContent['about-content'],
  mainContent['services-content'],
  mainContent['product-content'],
  mainContent['vision-content']
];

// Loop and apply innerText to elements from array
for (
  let i = 0;
  i < mainContentHeadings.length && i < mainContentText.length;
  i++
) {
  mainContentHeadings[i].innerText = mainContentHeadingArr[i];
  mainContentText[i].innerText = mainContentTextArr[i];
}

// Set src attribute for middle-img
mainContentImg.setAttribute(
  'src',
  siteContent['main-content']['middle-img-src']
);

/* Contact Section */
let contactHeading = document.querySelector('.contact h4');
let contactParagraphs = document.querySelectorAll('.contact p');
let contact = siteContent.contact;

let contactArr = [contact.address, contact.phone, contact.email];

contactHeading.innerText = siteContent.contact['contact-h4'];

for (let i = 0; i < contactParagraphs.length; i++) {
  contactParagraphs[i].innerText = contactArr[i];
}
