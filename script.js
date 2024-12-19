//Menu
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeIcon = document.getElementById('closeIcon');
const body = document.body;

function showMenu() {
    sidebar.classList.add('open');
    body.classList.add('sidebar-open');
    closeIcon.style.display = 'block';
}

function hideMenu() {
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
    closeIcon.style.display = 'none';
}

hamburger.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.has-submenu').forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = menuItem.nextElementSibling;
            submenu.classList.toggle('show');
        });
    });
});

function toggleMenu() {
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
    closeIcon.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}

// Profile icon
var profile_icon = document.querySelector(".profile-icon")
var profile_icon_option = document.querySelector(".profile-icon-option")
var display = 0

profile_icon.addEventListener("click", () => {
    if (display == 1) {
        profile_icon_option.style.display = "block"
        display = 0;
    }
    else {
        profile_icon_option.style.display = "none"
        display = 1;
    }
})

//select add project details
var add_project = document.querySelector(".add-project")
var add_projects_box = document.querySelector(".add-projects-box")
var close_projects = document.querySelector(".projects-close")

add_project.addEventListener("click", () => {
    add_projects_box.style.display = "block"
})

close_projects.addEventListener("click", () => {
    add_projects_box.style.display = "none"
})

