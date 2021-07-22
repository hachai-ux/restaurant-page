function home() {
    const element = document.querySelector('div#content');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    img.setAttribute('src', "../src/spicedhoneyroastduckasiangreenswhiterice-0006.jpeg");
    h1.textContent = "Casa Restaurant";
    p.textContent = "World renowned restaurant in the city of Sofia.";
 
  
    element.appendChild(img);
    element.appendChild(h1);
    element.appendChild(p);


}
  export default home;
  