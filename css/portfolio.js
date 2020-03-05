const wd = document.getElementById("webBox");
const pg = document.getElementById("photogBox");
const ps = document.getElementById("photosBox");

const b1 = document.getElementById("wdb");
const b2 = document.getElementById("phg");
const b3 = document.getElementById("phs");

b1.addEventListener("click", function() {
    pg.classList.remove("active");
    ps.classList.remove("active");

    wd.classList.toggle("active");
});

b2.addEventListener("click", function() {
    wd.classList.remove("active");
    ps.classList.remove("active");

    pg.classList.toggle("active");
});

b3.addEventListener("click", function() {
    wd.classList.remove("active");
    pg.classList.remove("active");

    ps.classList.toggle("active");
});
