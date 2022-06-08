// Js is only used for the toggle switch (to change between light and dark mode theme)

document.addEventListener('DOMContentLoaded', function(){
    let themeSwitch = document.querySelector('.cb');
    themeSwitch.addEventListener('click', function(){
        // alert('cliked');
        let mainHeading = document.querySelector('.main-heading');
        let body = document.querySelector('body');
        let secondHeading = document.querySelector('.second-heading');
        let ovSecondaryContainers = document.querySelectorAll('.overview-secondary-container');
        let commonContainers = document.querySelectorAll('.common-container-light');
        let numHeadings = document.querySelectorAll('.num');
        let usernameSpans = document.querySelectorAll('.username');
        let themeSpan = document.querySelector('.theme-span');
        let attributionSection = document.querySelector('.attribution');

        if (themeSwitch.checked === false) {

            mainHeading.classList.remove('main-heading-dark');
            mainHeading.classList.add('main-heading-light');

            body.classList.remove('body-dark');

            secondHeading.classList.remove('second-heading-dark');
            secondHeading.classList.add('second-heading-light');

            ovSecondaryContainers.forEach(container => {
                container.classList.remove('overview-secondary-container-dark');
                container.classList.add('overview-secondary-container-light');
            })

            commonContainers.forEach(container => {
                container.classList.remove('common-container-dark');
                container.classList.add('.common-container-light');
            })

            numHeadings.forEach(num => {
                num.classList.remove('num-dark');
                num.classList.add('num-light');
            })

            usernameSpans.forEach(username => {
                username.classList.remove('username-dark');
                username.classList.add('username-light');
            })

            themeSpan.style.color = 'black';

            attributionSection.classList.add('num-light');
            attributionSection.classList.remove('num-dark');

        } else {
            mainHeading.classList.add('main-heading-dark')
            mainHeading.classList.remove('main-heading-light')

            body.classList.add('body-dark')

            secondHeading.classList.add('second-heading-dark')
            secondHeading.classList.remove('second-heading-light')

            ovSecondaryContainers.forEach(container => {
                container.classList.add('overview-secondary-container-dark')
                container.classList.remove('overview-secondary-container-light')
            })

            commonContainers.forEach(container => {
                container.classList.add('common-container-dark');
                container.classList.remove('.common-container-light');
            })

            numHeadings.forEach(num => {
                num.classList.add('num-dark');
                num.classList.remove('num-light');
            })

            usernameSpans.forEach(username => {
                username.classList.add('username-dark');
                username.classList.remove('username-light');
            })

            themeSpan.style.color = 'white';

            attributionSection.classList.remove('num-light');
            attributionSection.classList.add('num-dark');

        }

    })


})