let state = false;
function toggle() {
    if(state) {
        document.getElementById('password').setAttribute('type', 'password');
        document.getElementById('show-alt').style.color='gray';
        state = false;
    }
    else {
        document.getElementById('password').setAttribute('type', 'text');
        document.getElementById('show-alt').style.color='blue';
        state = true;
    }
}