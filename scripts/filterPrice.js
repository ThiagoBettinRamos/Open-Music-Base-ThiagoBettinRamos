const showPrice  = document.getElementById("show-price")
const inputPrice = document.getElementById("define-price")
const allPrices  = products.map((element) => element.price)
const maxPrice   = Math.max(...allPrices)
const minPrice   = Math.min(...allPrices)

inputPrice.setAttribute("max", maxPrice)
inputPrice.setAttribute("min", minPrice)


inputPrice.addEventListener("change", (e) =>{
    let filteredPrice = filteredProducts.filter((element) => Number(e.target.value) >= element.price)
    renderAlbums(filteredPrice)
    showPrice.innerText = `Até R$ ${inputPrice.value}`
    console.log(filteredPrice)
})