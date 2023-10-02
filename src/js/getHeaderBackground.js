function writeDOM(firstImage) {
  imageForBG = firstImage.getAttribute("src")
  const CSSStr = `header:after{background-image: url(${imageForBG})}`
  const styleTag = document.createElement("style")
  styleTag.innerHTML = CSSStr
  document.head.insertAdjacentElement("beforeend", styleTag)
}
export function getHeaderBackground() {
  let firstImage = document.querySelector("figure img")

  if (!firstImage) {
    const latestPostEl = document.querySelector("ul li h3 a")
    if (!latestPostEl) return

    const latestPost = latestPostEl.getAttribute("href")
    const page = location.origin + latestPost
    fetch(page)
      .then(function (response) {
        // The API call was successful!
        return response.text()
      })
      .then(function (html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, "text/html")
        firstImage = doc.querySelector("figure img")
        if (!firstImage) return
        writeDOM(firstImage)
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err)
      })
  } else {
    writeDOM(firstImage)
  }
}
