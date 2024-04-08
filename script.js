const link = document.querySelector('.links')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const links = document.querySelectorAll('.link')

open.addEventListener('click',()=>{
    // alert("hello")
    // close.classList.toggle('active')
    link.classList.toggle('active')
    links.forEach(link=>{
        link.classList.toggle('active')
    })
})
// close.addEventListener('click',()=>{
//     open.classList.toggle('active')
//     link.classList.toggle('active')
//     links.forEach(link=>{
//         link.classList.toggle('active')
//     })
// })
// import img1 from "./images/card/product-accessory1-400x400.jpg"
// import img2 from "./images/card/product-accessory2-400x400.jpg"
// import img3 from 
// import img4 from 
// import img5 from 
// import img6 from 
// import img7 from 
// import img8 from 
// import img9 from "./images/card/product-bag3-400x400.jpg"
// import img10 from "./images/card/product-w-jeans2-400x400.jpg"

// const products=[
//     {
//         id:1,
//         name: "Boho Bangle Bracelet",
//         category: "Accessories",
//         img:"./images/card/product-accessory1-400x400.jpg",
//     },
//     {
//         id:2,
//         name: "Anchor Bracelet",
//         category: "Accessories",
//         img:"./images/card/product-accessory2-400x400.jpg",
//     },
//     {
//         id:3,
//         name: "Light Brown Purse",
//         category: "Accessories",
//         img:"./images/card/product-bag1-400x400.jpg",
//     },
//     {
//         id:4,
//         name: "Dark Brown Jeans",
//         category: "Men",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
//     {
//         id:5,
//         name: "Blue Denim Shorts",
//         category: "Women",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
//     {
//         id:6,
//         name: "DNK Blue Shoes",
//         category: "Men",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
//     {
//         id:7,
//         name: "Basic Gray Jeans",
//         category: "Women",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
//     {
//         id:8,
//         name: "DNK Yellow Shoes",
//         category: "Accessories",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
//     {
//         id:9,
//         name: "Bright Red Bag",
//         category: "Accessories",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
//     {
//         id:10,
//         name: "Blue Denim Jeans",
//         category: "Women",
//         img:"./images/card/product-m-jeans1-400x400.jpg",
//     },
// ]
function AddtoCart(id){
    location.reload();
    let ItemsInCart =JSON.parse(localStorage.getItem("items"))
    if(ItemsInCart){
         ItemsInCart.push(id)
         localStorage.setItem("items",JSON.stringify(ItemsInCart))
    }
    else
    {
        let items = [id]
        localStorage.setItem("items",JSON.stringify(items))
    }
}