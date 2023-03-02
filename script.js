let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
    });

});

//med
let innnertab = document.querySelectorAll(".innertab li");
let innertabArray = Array.from(innnertab);
let innerdiv = document.querySelectorAll(".innercontent > div");
let innerdivArray = Array.from(innerdiv);


innertabArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        innertabArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        innerdivArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.conto).style.display = "flex";
    })
})

//med

//prog
let progtabs = document.querySelectorAll(".progtabs li");
let progtabsArray = Array.from(progtabs);
let innerprogdiv = document.querySelectorAll(".inprogtabs > div");
let innerprogdivArray = Array.from(innerprogdiv);

progtabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        progtabsArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        innerprogdivArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.conte).style.display = "flex";
    })
})
//prog

//apps
let tabse = document.querySelectorAll(".tabse li");
let tabseArray = Array.from(tabse);
let contentooediv = document.querySelectorAll(".contentooe > div");
let contentooeArray = Array.from(contentooediv);

tabseArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabseArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentooeArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.contm).style.display = "flex";
    })
})
//apps
//n
let tabso = document.querySelectorAll(".tabso li");
let tabsoArray = Array.from(tabso);
let contentooodiv = document.querySelectorAll(".contentooo > div");
let contentoooArray = Array.from(contentooodiv);

tabsoArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabsoArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentoooArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.contn).style.display = "flex";
    })
})
//n

//study
let tabsaa = document.querySelectorAll(".tabsaa li");
let tabsaaArray = Array.from(tabsaa);
let contentaadiv = document.querySelectorAll(".contentaa > div");
let contentaaArray = Array.from(contentaadiv)

tabsaaArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabsaaArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentaaArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.contaa).style.display = "flex";
    })
})
//estudy
//language
let tabsbb = document.querySelectorAll(".tabsbb li");
let tabsbbArray = Array.from(tabsbb);
let contentbbdiv = document.querySelectorAll(".contentbb > div");
let contentbbArray = Array.from(contentbbdiv)

tabsbbArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabsbbArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentbbArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.contbb).style.display = "flex";
    })
})
//elang
////////////----->
let tabstu = document.querySelectorAll(".tabstu li");
let tabstuArray = Array.from(tabstu);
let contentstudiv = document.querySelectorAll(".contentstu > div");
let contentstuArray = Array.from(contentstudiv)

tabstuArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabstuArray.forEach((ele) => {
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        contentstuArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.contstu).style.display = "flex";
    })
})








////////////////////////==>>







// استخدم fetch لجلب بيانات JSON
fetch('https://leartutor.github.io/jsontest/Courses.json')
    .then(response => response.json())
    .then(courses => {
        var coursesNumber = document.getElementById("courses-number");
        coursesNumber.textContent = courses.length - 1;
    });
