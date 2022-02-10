const start = document.getElementById("start");
const result = document.getElementById("result");

let Kujis = [
  "大吉",
  "吉",
  "吉",
  "中吉",
  "中吉",
  "小吉",
  "小吉",
  "末吉",
  "末吉",
  "凶",
  "凶",
  "大凶",
];
start.addEventListener("click", function () {
  let Kuji = Math.floor(Math.random() * Kujis.length)

  document.write(
    '<p class="Unsei-txt">あなたの今年の運勢は、</p>' +
    Kujis[Kuji] +
    '<p class="Unsei-txt">です</p>'
  )
});
