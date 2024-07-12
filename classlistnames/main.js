first.className="class text"
// first.classList.add("color")
// first.classList.remove("color")
first.classList.toggle("color")
console.log(first.classList.contains("text"))

first.addEventListener("click", function (e) {
    alert("This is alert");
  });