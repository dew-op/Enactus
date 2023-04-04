const torch = document.getElementById('torch');

document.body.onmousemove = e => {
    const { clientX, clientY } = e;
    torch.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 0, fill: "forwards" })
}


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});