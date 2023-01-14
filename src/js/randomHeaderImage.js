

export function randomHeaderImage(images) {
    const randomNum = Math.floor(Math.random() * images.length);
    const baseURL = "https://res.cloudinary.com/brauntrutta/image/upload/s--L43KBrpc--/t_200_circle/blog/";
    document.getElementById("headerImg").src = `${baseURL}${myPix[randomNum]}`;
}