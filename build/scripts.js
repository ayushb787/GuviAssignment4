let qty = 0;
let selected_qty = 0;
let actual_price = 250.00;
let price_after_discount = 125.00;
let total = 0.00;

document.getElementById("price-after-discount").innerText = `$${price_after_discount.toFixed(2)}`;

document.getElementById("actual-price").innerText = `$${actual_price.toFixed(2)}`;

const toggleMobileNav = () => {
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}

const openCheckoutWindow = () => {
    const ele = document.getElementById("checkout-window");
    if (ele.style.display === "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}

const addQty = () => {
    qty++;
    selected_qty++;
    total = selected_qty * price_after_discount;
    updateQty();
}

const subQty = () => {
    if (qty == 0) {
        return;
    }
    qty--;
    selected_qty--;
    total = selected_qty * price_after_discount;
    updateQty();
}

const updateQty = () => {
    document.getElementById("qty").innerText = `${qty}`;
}

const addToCart = () => {
    qty = 0;
    updateQty();
    document.getElementById("price-and-qty").innerText = `$${price_after_discount.toFixed(2)} x ${selected_qty}`;

    document.getElementById("total").innerText = `$${total.toFixed(2)}`;

    document.getElementById("checkout-window").style.display = "block";

    toggleCart();
}

const deleteItems = () => {
    selected_qty = 0;
    total = 0;
    addToCart();
    toggleCart();
}


const toggleCart = () => {
    const ele1 = document.getElementById("checkout-window-product");
    const ele2 = document.getElementById("checkout-window-product-empty");

    if (selected_qty != 0) {
        ele1.style.display = "flex";
        ele2.style.display = "none";
    } else {
        ele2.style.display = "flex";
        ele1.style.display = "none";
    }
}