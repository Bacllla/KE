// ------------------------> Anchors.
function slowScroll(id){
    var offset = 0;
    $('html, body').animate({
        scrollTop:$(id).offset().top - offset},700);
return false;
}
function go() {
    var sub_sidebar = document.getElementById('t_s_s');
    sub_sidebar.classList.toggle("show_me");
    var header = document.getElementById('header');
    header.classList.toggle("slide_toggle");
}
var event;
function active(event) {
    var active = document.getElementsByClassName('tab-body');
    var dataTab = event.target.getAttribute('data-tab');
    var menu_list = document.getElementsByClassName('menu-list');
    for (var i = 0; i < active.length; i++) {
        if (dataTab == i) {
            active[i].classList.add('active');
            menu_list[i].style.display = 'block';
        } else {
            active[i].classList.remove('active');
            menu_list[i].style.display = 'none';
        }
    }
}
function bigPoint(value) {
    var outCircle = document.getElementsByClassName('out-circle');
    switch (value) {
        case 0:
            outCircle[1].classList.add('mg-left');
            break;
        case 1:
            outCircle[3].classList.add('mg-left');
            break;
        case 2:
            outCircle[0].classList.add('mg-right');
            break;
        case 3:
            outCircle[2].classList.add('mg-right');
            break;
    }
}
function bigPoint2(value) {
    var outCircle = document.getElementsByClassName('out-circle');
    switch (value) {
        case 0:
            outCircle[1].classList.remove('mg-left');
            break;
        case 1:
            outCircle[3].classList.remove('mg-left');
            break;
        case 2:
            outCircle[0].classList.remove('mg-right');
            break;
        case 3:
            outCircle[2].classList.remove('mg-right');
            break;
    }
}
document.querySelector('.ul-list').addEventListener('click', active);
