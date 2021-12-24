(function() {
        document.querySelector("html").style.filter = "invert(0) brightness(50%)";
        let media = document.querySelectorAll("img,picture,video");
        media.forEach((mediaItem)=>{
            mediaItem.style.filter="invert(0) brightness(50%)";
        })
})();
