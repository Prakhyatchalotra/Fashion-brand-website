document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href=".man"]').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".man").scrollIntoView({
            behavior: 'smooth'
        });
    });
});