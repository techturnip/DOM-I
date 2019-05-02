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

/* Navigation */
let newItem = document.createElement('a');
let newItem2 = document.createElement('a');
let navItem = document.querySelectorAll('nav a');
let nav = document.querySelector('nav');

newItem.textContent = 'Blog';
newItem2.textContent = 'Home';

navItem.forEach(
  (item, i) =>
    (item.textContent = siteContent.nav['nav-item-' + (i + 1)]) &&
    (item.style.color = 'green')
);

nav.appendChild(newItem);
nav.prepend(newItem2);

newItem.style.color = 'green';
newItem2.style.color = 'green';

/* CTA Section */

// Query Selectors
let ctaHeading = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');
let ctaHeadingArr = siteContent.cta.h1.split(' ');

// Set textContent of cta elements
ctaHeading.innerHTML = ctaHeadingArr.join('<br>');
ctaBtn.textContent = siteContent.cta.button;

// Set src attribute for cta image
ctaImg.src = siteContent.cta['img-src'];

/* Main Content Section */

// Store main-content object to create an array
let mainContent = siteContent['main-content'];

// Query Selectors
let mainContentHeadings = document.querySelectorAll('.text-content h4');
let mainContentText = document.querySelectorAll('.text-content p');
let mainContentImg = document.querySelector('#middle-img');

// Store Object Values in Array for looping
let mainContentArr = Object.entries(mainContent);
let mainContentHeadingArr = [];
let mainContentTextArr = [];

// Use forEach and .includes to create heading and content arrays
mainContentArr.forEach(item => {
  if (item[0].includes('h4')) {
    mainContentHeadingArr.push(item[1]);
  } else if (item[0].includes('content')) {
    mainContentTextArr.push(item[1]);
  }
});

// Loop through nodelist and set textContent to their respective array values
for (let i = 0; i < mainContentHeadings.length; i++) {
  mainContentHeadings[i].textContent = mainContentHeadingArr[i];
  mainContentText[i].textContent = mainContentTextArr[i];
}

// Set src attribute for middle-img
mainContentImg.setAttribute(
  'src',
  siteContent['main-content']['middle-img-src']
);

/* Contact Section */

// Query Selectors
let contactHeading = document.querySelector('.contact h4');
let contactParagraphs = document.querySelectorAll('.contact p');
let contact = siteContent.contact;

// Contact Array for looping through paragraphs
let contactArr = [contact.address, contact.phone, contact.email];

// Set h4 to contact-h4
contactHeading.textContent = siteContent.contact['contact-h4'];

// Set p tags to contact address, phone and email
for (let i = 0; i < contactParagraphs.length; i++) {
  contactParagraphs[i].textContent = contactArr[i];
}

/* Footer */
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;
