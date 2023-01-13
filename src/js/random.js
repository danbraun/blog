const myPix = new Array("DSC00939-1.png", "tooclose.png", "hand.png", "BWSleepy.png");

export function random() {
    const randomNum = Math.floor(Math.random() * myPix.length);
    const baseURL = "https://res.cloudinary.com/brauntrutta/image/upload/s--L43KBrpc--/t_200_circle/blog/";
    document.getElementById("headerImg").src = `${baseURL}${myPix[randomNum]}`;
}