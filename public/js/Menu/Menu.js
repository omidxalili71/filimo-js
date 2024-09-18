async function Menu() {
  let menu = "";
  let data = await fetch("http://localhost:3000/menu");
  let res = await data.json();

  menu = res.map((item) => {
    return `<div class="menu__item">
              <a href="#" id="menu__link">
                <img src=${item.svgLink} alt=${item.alt}>
              ${item.name}</a>
            </div>`;
  });

  document
    .querySelector(".menu__nav")
    .insertAdjacentHTML("beforeend", menu.join(""));
}
export default Menu;
