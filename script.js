const menuBtn = document.getElementById("menuBtn");
const menuContent = document.getElementById("menuContent");

menuBtn.addEventListener("click", function () {

    if (getComputedStyle(menuContent).display === "none") {

        menuContent.style.display = "block";
        menuBtn.textContent = "✖ Tutup";

    } else {

        menuContent.style.display = "none";
        menuBtn.textContent = "☰ Lihat Selengkapnya";

    }

});