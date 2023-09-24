document.addEventListener('DOMContentLoaded', (event) => {
    let passwordAttr = document.querySelector('#edit-pass');
    let checkboxAttr = document.querySelector('#edit-password-view');
    checkboxAttr.addEventListener('click', (e) => {
        const checkedAttr = e.target.checked;
        if (checkedAttr) {
            return passwordAttr.setAttribute('type', 'text'); 
        }
        passwordAttr.setAttribute('type', 'password'); 
    });
});
