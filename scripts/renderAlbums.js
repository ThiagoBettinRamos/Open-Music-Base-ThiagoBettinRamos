const ulAlbums = document.getElementById("albums-list")

function renderAlbums(array){
  ulAlbums.innerHTML = " "
    array.forEach(element => {
        let li        = document.createElement("li")
        let dimg      = document.createElement("div")
        let img       = document.createElement("img")
        let dalbum    = document.createElement("div")
        let dinfo     = document.createElement("div")
        let band      = document.createElement("span")
        let year      = document.createElement("span")
        let h         = document.createElement("h2")
        let dprice    = document.createElement("div")
        let price     = document.createElement("price")
        let buttonbuy = document.createElement("button")
        
        dimg.classList = "image"
        img.src        = element.img
        dimg.append(img)

        dalbum.classList = "album-info"
        h.innerText      = element.title
        h.classList      = "font-size-2_600 font-color_grey-1"
        dalbum.append(dinfo, h, dprice)

        dinfo.classList = "info font-size-4_500 font-color_grey-2"
        band.innerText  = element.band
        year.innerText  = element.year
        dinfo.append(band, year)

        dprice.classList    = "price-buy"
        price.innerText     = `R$ ${element.price.toFixed(2)}`
        buttonbuy.innerText = "Comprar"
        buttonbuy.classList = "buy font-size-3_500 font-color_grey-2 button-buy"
        price.classList     = "font-size-3_600 font-color_grey-1"
        dprice.append(price, buttonbuy)

        li.append(dimg, dalbum)
        ulAlbums.append(li)
    });
}
renderAlbums(products)
