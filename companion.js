(() => {
    let mouse = []
    let [x, y] = [window.innerWidth/2, window.innerHeight/2]
    const companionEl = document.querySelector("#companion")
    
    const animate = () => {
        requestAnimationFrame(animate)

        console.log(x, y)

        if(mouse.length) {
            x += (mouse[0] - x) * .0325
            y += (mouse[1] - y) * .0325

            companionEl.style.left = `${x - companionEl.offsetWidth/2}px`
            companionEl.style.top = `${y - companionEl.offsetHeight/2}px`
        }
    }

    document.addEventListener("resize", e => [x, y] = [window.innerWidth/2, window.innerHeight/2])
    document.addEventListener("mousemove", e => mouse = [e.clientX, e.clientY])
    document.addEventListener("DOMContentLoaded", () => animate())
})()