const darkModeToggle = document.querySelector("#toggle-class");

darkModeToggle?.addEventListener('click',() => {
    document.body.classList.toggle("dark")
} )

export default darkModeToggle;
