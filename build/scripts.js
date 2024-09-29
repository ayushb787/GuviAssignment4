const toggleMobileNav = () => {
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}
