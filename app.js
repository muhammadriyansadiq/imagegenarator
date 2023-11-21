let accesskey = "_69LpPLH49QZyxFZFalNE1Yl0PCWC6PCjwAWbUrmM9w"
let a = document.querySelector(".form")
let b = document.querySelector(".search")
let c =document.querySelector(".searchresult")
let d =document.querySelector(".showmorebtn")
let e = document.querySelector(".searchbtn")
let f = document.querySelector(".form")
let keyword = ""
let page =1
async function searchimg(){
    // c.innerHTML = "";
    keyword = b.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=24`
    let response = await fetch(url);
    let data = await response.json()


    if(page === 1){
c.innerHTML = ""
    }
    let result = data.results
    // console.log(result);
    result.map((results)=>{
let image = document.createElement("img");
image.src = results.urls.small
let imagelink = document.createElement("a")
imagelink.href = results.links.html
imagelink.target = "_blank"
imagelink.appendChild(image);
c.appendChild(imagelink)
// console.log(image);
    })
    d.style.display = "block";
    // d.style.textalign = "center";

}

f.addEventListener("submit",(e)=>{
    e.preventDefault();
    page =1;
    searchimg()
})

d.addEventListener("click",()=>{
    page++;
    searchimg();
})

// searchimg()