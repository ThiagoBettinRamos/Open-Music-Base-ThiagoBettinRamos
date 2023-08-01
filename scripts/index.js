const categories = ["Todos"];
var filteredProducts = [...products]

products.forEach((item) => {
    if(!categories.includes(item.category)){
    categories.push(item.category)
    }
})
function renderGenres(){
    let ul = document.getElementById("genre-list")
    categories.forEach((genre) => {
        let li = document.createElement("li")

        li.classList = "genre font-size-3_500 font-color_grey-2"

        li.innerText = genre
        
        li.addEventListener("click", (e) => {
            if(e.target.innerText !== "Todos") filteredProducts = products.filter((item) => item.category === e.target.innerText) 
            if(e.target.innerText === "Todos") filteredProducts = products
            renderAlbums(filteredProducts)

        })

        ul.append(li)
        })
    
}

renderGenres()