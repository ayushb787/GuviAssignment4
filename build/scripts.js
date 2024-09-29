const toggleMobileNav = () => {
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}



const openCheckoutWindow = () =>{
    const ele = document.getElementById("checkout-window");

    if(ele.style.display === "none"){
        ele.style.display = "block";
    }else{
        ele.style.display = "none";
    }
}
