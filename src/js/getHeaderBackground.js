export function getHeaderBackground() {
   const firstImage = document.querySelector('figure img')

   if (!firstImage) return
   
   const imageForBG = firstImage.getAttribute('src')
   const CSSStr = `header:after{background-image: url(${imageForBG})}`
   const styleTag = document.createElement("style");
   styleTag.innerHTML = CSSStr;
   document.head.insertAdjacentElement('beforeend', styleTag);
}