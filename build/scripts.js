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
    updateCartQty();
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


const updateCartQty = () => {
    const ele1 = document.getElementById("cart-qty");
    const ele2 = document.getElementById("mobile-cart-qty");
    ele1.innerText = `${selected_qty}`;
    ele2.innerText = `${selected_qty}`;

    if (selected_qty === 0) {
        ele1.style.display = "none";
        ele2.style.display = "none";
    } else {
        ele1.style.display = "block";
        ele2.style.display = "block";
    }
}

const changethumbnail = (a) => {
    const idd = `thumbnail${a}`;

    const ele1 = document.getElementById("thumbnail1");
    const ele2 = document.getElementById("thumbnail2");
    const ele3 = document.getElementById("thumbnail3");
    const ele4 = document.getElementById("thumbnail4");

    const b1 = document.getElementById("thumbnail1-border");
    const b2 = document.getElementById("thumbnail2-border");
    const b3 = document.getElementById("thumbnail3-border");
    const b4 = document.getElementById("thumbnail4-border");

    const display_img = document.getElementById("display-img");

    if (a == 1) {
        ele1.style.opacity = "0.5";
        ele2.style.opacity = "1";
        ele3.style.opacity = "1";
        ele4.style.opacity = "1";
        b1.style.borderColor = "rgb(251 146 60)";
        b2.style.borderColor = "rgb(255 255 255)";
        b3.style.borderColor = "rgb(255 255 255)";
        b4.style.borderColor = "rgb(255 255 255)";
        display_img.src = '../images/image-product-1.jpg'
    } else if (a == 2) {
        ele1.style.opacity = "1";
        ele2.style.opacity = "0.5";
        ele3.style.opacity = "1";
        ele4.style.opacity = "1";
        b1.style.borderColor = "rgb(255 255 255)";
        b2.style.borderColor = "rgb(251 146 60)";
        b3.style.borderColor = "rgb(255 255 255)";
        b4.style.borderColor = "rgb(255 255 255)";
        display_img.src = '../images/image-product-2.jpg'
    } else if (a == 3) {
        ele1.style.opacity = "1";
        ele2.style.opacity = "1";
        ele3.style.opacity = "0.5";
        ele4.style.opacity = "1";
        b1.style.borderColor = "rgb(255 255 255)";
        b2.style.borderColor = "rgb(255 255 255)";
        b3.style.borderColor = "rgb(251 146 60)";
        b4.style.borderColor = "rgb(255 255 255)";
        display_img.src = '../images/image-product-3.jpg'
    } else {
        ele1.style.opacity = "1";
        ele2.style.opacity = "1";
        ele3.style.opacity = "1";
        ele4.style.opacity = "0.5";
        b1.style.borderColor = "rgb(255 255 255)";
        b2.style.borderColor = "rgb(255 255 255)";
        b3.style.borderColor = "rgb(255 255 255)";
        b4.style.borderColor = "rgb(251 146 60)";
        display_img.src = '../images/image-product-4.jpg'
    }
}


const nextImg = () => {
    const ele = document.getElementById("display-img");
    let num = parseInt(ele.src.split('-')[2].split('.')[0]);

    if (num === 4) {
        num = 0;
    }
    ele.src = `../images/image-product-${num + 1}.jpg`
}

const prevImg = () => {
    const ele = document.getElementById("display-img");
    let num = parseInt(ele.src.split('-')[2].split('.')[0]);
    if (num === 1) {
        num = 5;
    }
    ele.src = `../images/image-product-${num - 1}.jpg`
}



const achangethumbnail = (a) => {
    const ele1 = document.getElementById("a-thumbnail1");
    const ele2 = document.getElementById("a-thumbnail2");
    const ele3 = document.getElementById("a-thumbnail3");
    const ele4 = document.getElementById("a-thumbnail4");

    const b1 = document.getElementById("a-thumbnail1-border");
    const b2 = document.getElementById("a-thumbnail2-border");
    const b3 = document.getElementById("a-thumbnail3-border");
    const b4 = document.getElementById("a-thumbnail4-border");

    const display_img = document.getElementById("a-display-img");

    if (a == 1) {
        ele1.style.opacity = "0.5";
        ele2.style.opacity = "1";
        ele3.style.opacity = "1";
        ele4.style.opacity = "1";
        b1.style.borderColor = "rgb(251 146 60)";
        b2.style.borderColor = "transparent";
        b3.style.borderColor = "transparent";
        b4.style.borderColor = "transparent";
        display_img.src = '../images/image-product-1.jpg'
    } else if (a == 2) {
        ele1.style.opacity = "1";
        ele2.style.opacity = "0.5";
        ele3.style.opacity = "1";
        ele4.style.opacity = "1";
        b1.style.borderColor = "transparent";
        b2.style.borderColor = "rgb(251 146 60)";
        b3.style.borderColor = "transparent";
        b4.style.borderColor = "transparent";
        display_img.src = '../images/image-product-2.jpg'
    } else if (a == 3) {
        ele1.style.opacity = "1";
        ele2.style.opacity = "1";
        ele3.style.opacity = "0.5";
        ele4.style.opacity = "1";
        b1.style.borderColor = "transparent";
        b2.style.borderColor = "transparent";
        b3.style.borderColor = "rgb(251 146 60)";
        b4.style.borderColor = "transparent";
        display_img.src = '../images/image-product-3.jpg'
    } else {
        ele1.style.opacity = "1";
        ele2.style.opacity = "1";
        ele3.style.opacity = "1";
        ele4.style.opacity = "0.5";
        b1.style.borderColor = "transparent";
        b2.style.borderColor = "transparent";
        b3.style.borderColor = "transparent";
        b4.style.borderColor = "rgb(251 146 60)";
        display_img.src = '../images/image-product-4.jpg'
    }
}


const anextImg = () => {
    const ele = document.getElementById("a-display-img");
    let num = parseInt(ele.src.split('-')[2].split('.')[0]);

    if (num === 4) {
        num = 0;
    }
    ele.src = `../images/image-product-${num + 1}.jpg`;
    achangethumbnail(num + 1);
}

const aprevImg = () => {
    const ele = document.getElementById("a-display-img");
    let num = parseInt(ele.src.split('-')[2].split('.')[0]);
    if (num === 1) {
        num = 5;
    }
    ele.src = `../images/image-product-${num - 1}.jpg`;
    achangethumbnail(num - 1);
}

const closenopenimg = () => {
    if (window.innerWidth < 1024) {
        return;
    }
    const ele = document.getElementById("img-display");

    if (ele.style.display == "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}
