//now we use event listener 
var cur = document.querySelector("#cursor");
var cur_blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    cur_blur.style.left = dets.x -200+ "px"
    cur_blur.style.top = dets.y -200+ "px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end : "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start:"top -25%",
        end: "top -70%",
        scrub: 2
    }
})