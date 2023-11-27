window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("scroller", window.scrollY > 0);
})
