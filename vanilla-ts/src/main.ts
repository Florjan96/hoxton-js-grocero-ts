import './style.css'
import './reset.css'

/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
let state = {
  storeItems: [
    {
      id: 1,
      name: 'beetroot',
      price: 0.45,
      stock: 10,
      inCart: 0,
      image:"assets/icons/001-beetroot.svg",
    
    },
    {
      id: 2,
      name: 'carrot',
      price: 0.15,
      stock: 2,
      inCart: 5,
      image: "assets/icons/002-carrot.svg",
    },
    {
      id: 3,
      name: 'apple',
      price: 0.25,
      stock: 1,
      inCart: 0,
      image:"assets/icons/003-apple.svg",
    },
    {
      id: 4,
      name: 'apricot',
      price: 0.55,
      stock: 1,
      inCart: 0,
      image:"assets/icons/004-apricot.svg",
    },
    {
      id: 5,
      name: 'avocado',
      price: 0.55,
      stock: 1,
      inCart: 0,
      image:"assets/icons/005-avocado.svg",
    },
  ],
}


function renderStoreList(){
let storeList=document.querySelector(".item-list.store--item-list")


/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */
for(let item of state.storeItems){
let li=document.createElement('li')

let storeDiv=document.createElement("div")
storeDiv.className="store--item-icon"

let storeImg=document.createElement('img')
storeImg.src=item.image

let button=document.createElement('button')
button.textContent="Add to cart"

storeDiv.append(storeImg,button)

li.append(storeDiv)

storeList.append(li)
}

}

renderStoreList()




function cardItems(){

/* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */







}