// Script untuk dropdown (jika diperlukan)
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function () {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    // Menutup dropdown saat klik di luar
    window.addEventListener('click', function (e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});