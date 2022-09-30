export function slide() {

  let slideValue = document.getElementById("case__input").value;
  console.log(slideValue);

  document.getElementById("my-img").style.clippath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";

  console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}