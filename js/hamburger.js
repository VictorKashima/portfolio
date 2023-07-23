document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".main-header").classList.toggle("show-menu")
);

function addClassOnWidthChange() {
  const addWrappers = document.querySelectorAll('.portfolio-content');
  if (window.innerWidth <= 768) {
    addWrappers.forEach((addWrapper) => {
      addWrapper.classList.add('wrapper');
    });
  } else {
    addWrappers.forEach((addWrapper) => {
      addWrapper.classList.remove('wrapper');
    });
  }
}

addClassOnWidthChange();

window.addEventListener('resize', addClassOnWidthChange);