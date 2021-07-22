function pageSetup() {
    const element = document.querySelector('div#content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = "Contact Us";
    p.textContent = "+123456789";
 
  
    element.appendChild(h1);
    element.appendChild(p);
    
  }

  export default pageSetup;
  