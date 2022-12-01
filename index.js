const containerEI = document.querySelector(".container");

window.addEventListener("mousemove", (e)=> {
    containerEI.innerHTML = `
        <div class="mouse-x">
            <h4>Mouse X Prostion(px)</h4>
            <div class="number">
                <p>${e.clientX}</p>
            </div>
        </div>
        <div class="mouse-y">
            <h4>Mouse Y Prostion(px)</h4>
            <div class="number">
                <p>${e.clientY}</p>
            </div>
        </div>
    `
})