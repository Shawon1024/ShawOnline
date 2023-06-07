// CONTACT SUCCESS MESSAGE SCRIPT

function message(e) {
    e.preventDefault();
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('message');

    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (name.value === '' || phone.value === '' || email.value === '' || subject.value === '' || message.value === '') {
        danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            name.value = '';
            phone.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}
