const header = getElementById('header');
const sticky = header.offsetTop;

function styckyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky");
    }
}
window.onscroll = function() {
    stickyHeader();
};