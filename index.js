const hotelEl = document.getElementById("hotel-render")
const hotelsList = [
    {
        name: "Pimplad Nasik India",
        price: 15000,
        fullPrice: 30000,
        image: '/images/hotel1.webp',
        offer: 50
    },
    {
        name: "Assagao India",
        price: 14999,
        fullPrice: 49999,
        image: '/images/hotel2.webp',
        offer: 70
    },
    {
        name: "Lonavla India",
        price: 4999,
        fullPrice: 49999,
        image: '/images/hotel3.webp',
        offer: 90
    }
]

function render() {
    let hotels = ""
    for (let i = 0; i < hotelsList.length; i++) {
        hotels += `<section class="hotels">
        <img class="hotel-img" src="${hotelsList[i].image}" alt="image of hotels">
    <div class="img-banner">
        New Deals ${hotelsList[i].offer}% off
    </div>
    <div class="caption">
        <p>${hotelsList[i].name}.</p>
        <p class="price">₹ ${hotelsList[i].price} /night</p> 
        <p class="price-off">₹ ${hotelsList[i].fullPrice}</p>
        <button class="btn">Book Now</button>
    </div>
</section> `
    }
    hotelEl.innerHTML = hotels
}
render()