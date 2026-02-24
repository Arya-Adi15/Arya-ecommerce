// ============================
// CART SYSTEM
// ============================

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Ensure qty exists
cart = cart.map(item => {
    if (!item.qty) item.qty = 1;
    return item;
});

// Update cart icon count
function updateCartCount() {
    let count = cart.reduce((sum, item) => sum + item.qty, 0);
    if (document.querySelector(".cartCount"))
        document.querySelector(".cartCount").innerText = count;
}
updateCartCount();

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function go(p) {
    location.href = p;
}

// ============================
// FILTER PRODUCTS
// ============================

function filter(type) {

    let box = document.getElementById("products");
    if (!box) return;

    box.innerHTML = "";

    let filtered = (type === "all")
        ? products
        : products.filter(p => p.type == type || p.cat == type);

    filtered.forEach(p => {
        box.innerHTML += `
        <div class="card">
            <span class="deal">Hot Deal</span>
            <img src="${p.img}">
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>
            <button onclick="add(${p.id})">Add to Cart</button>
        </div>
        `;
    });
}

// ============================
// ADD TO CART
// ============================

function add(id) {

    let item = products.find(p => p.id == id);
    let exist = cart.find(p => p.id == id);

    if (exist) {
        exist.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    saveCart();
    alert("🛒 Added to cart");
}

// ============================
// CART PAGE RENDER
// ============================

function renderCart() {

    let box = document.getElementById("cart");
    if (!box) return;

    if (cart.length === 0) {
        box.innerHTML = "<h3>Your cart is empty 😢</h3>";
        if (document.getElementById("total"))
            document.getElementById("total").innerText = 0;
        return;
    }

    let total = 0;

    box.innerHTML = cart.map((item, index) => {
        total += item.price * item.qty;

        return `
        <div class="cart-item">
            <img src="${item.img}">
            <div class="cart-info">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
            </div>

            <div class="qty-box">
                <button onclick="decrease(${index})">-</button>
                <span>${item.qty}</span>
                <button onclick="increase(${index})">+</button>
            </div>

            <button class="remove" onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    }).join("");

    if (document.getElementById("total"))
        document.getElementById("total").innerText = total;
}

function increase(i) {
    cart[i].qty++;
    saveCart();
}

function decrease(i) {
    if (cart[i].qty > 1) {
        cart[i].qty--;
        saveCart();
    }
}

function removeItem(i) {
    cart.splice(i, 1);
    saveCart();
}

function buyNow() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("🎉 Order Placed Successfully!");
    cart = [];
    saveCart();
}

renderCart();

// ============================
// TIMER
// ============================

let t = 3600;

if (document.getElementById("timer")) {
    setInterval(() => {
        if (t <= 0) return;

        let h = Math.floor(t / 3600);
        let m = Math.floor((t % 3600) / 60);
        let s = t % 60;

        document.getElementById("timer").innerText =
            `${h}h ${m}m ${s}s`;

        t--;
    }, 1000);
}

// ============================
// TYPEWRITER SLIDER
// ============================

const texts = [
    "WELCOME TO A4 MART",
    "BEST DEALS EVERY DAY",
    "SHOP SMART – SAVE MORE",
    "FAST DELIVERY",
    "THANK YOU FOR VISITING"
];

let i = 0, j = 0, isDeleting = false;
const slider = document.querySelector(".slider");

if (slider) {

    function type() {
        let current = texts[i];
        slider.textContent = current.substring(0, j);

        if (!isDeleting && j++ === current.length + 10) {
            isDeleting = true;
        }
        else if (isDeleting && j-- === 0) {
            isDeleting = false;
            i = (i + 1) % texts.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();

    // PARTICLES
    for (let k = 0; k < 25; k++) {
        let p = document.createElement("span");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        p.style.animationDelay = Math.random() * 5 + "s";
        slider.appendChild(p);
    }

}