import "./smart-gread-layer.scss";

const columns = 12;   // number of grid columns
export default function () {

  let wiew_columns = "";
  for (let i = 1; i <= columns; i++) {
    wiew_columns += "<div></div>";
  }
  let grid = "<div class=\"degub-grid\"><div><div>" + wiew_columns + "</div></div></div><div id=\"gridToggle\">Toggle</div>";

  document.querySelector("body").insertAdjacentHTML("beforebegin", grid);


  const gridEnable = document.querySelector("#gridToggle");
  const gridTable = document.querySelector(".degub-grid");
  let trigger = true;
  gridEnable.addEventListener("click", () => {
    if (trigger) {
      gridTable.style.display = "block";
      trigger = false;
    } else {
      gridTable.style.display = "none";
      trigger = true;
    }
  });

  window.onresize = function () {
    resize_info();
  };

  function resize_info() {
    let sizeName = " XS ";
    let sizeNow = document.documentElement.clientWidth;
    if (sizeNow >= 576 && sizeNow < 768) sizeName = " SM ";
    if (sizeNow >= 768 && sizeNow < 992) sizeName = " MD ";
    if (sizeNow >= 992 && sizeNow < 1200) sizeName = " LG ";
    if (sizeNow >= 1200) sizeName = " XL ";
    gridEnable.textContent = sizeName;
  }
}
