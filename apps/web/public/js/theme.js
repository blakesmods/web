let theme = localStorage.getItem("vueuse-color-scheme");

if (!theme) {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    } else {
      theme = "light";
    }
  } else {
    theme = "dark";
  }
}

document.querySelector("html").classList.add(theme);
