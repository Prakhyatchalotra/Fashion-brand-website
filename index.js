document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href=".man"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".man").scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href=".women"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".women").scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href=".kid"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".kid").scrollIntoView({
            behavior: 'smooth'
        });
    });
});