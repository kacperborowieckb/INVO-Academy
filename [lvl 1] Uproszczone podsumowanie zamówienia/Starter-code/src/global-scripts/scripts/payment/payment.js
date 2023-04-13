export function payment(element) {
  element.addEventListener("click", () => {
    element.innerText = "In process";
    const loading = document.createElement("img");
    loading.setAttribute("src", "/images/loading.png");
    loading.classList.add("buttons__loading-img");
    element.appendChild(loading);
  });
}
