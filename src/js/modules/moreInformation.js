function moreInformation(){
    const link = document.querySelectorAll('.main__list');
    const modal = document.querySelector('.modal');
    const modalCompany = modal.querySelector('.modal__company__name');
    const modalPhone = modal.querySelector('.modal__phone__name');
    const modalMail = modal.querySelector('.modal__email__name');
    const modalCountry = modal.querySelector('.modal__country__name');
    const modalClose = modal.querySelector('.modal__close');
    const menuContent = document.querySelector('.main');
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            closeModal();
        }
    });
    
    link.forEach((item) => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                const company = item.querySelector('.company').textContent;
                const phone = item.querySelector('.phone').textContent;
                const mail = item.querySelector('.mail').textContent;
                const country = item.querySelector('.country').textContent;

                modalCompany.textContent = company;
                modalPhone.textContent = phone;
                modalMail.textContent = mail;
                modalCountry.textContent = country;

                modal.style.display = 'block';

                menuContent.style.filter = 'blur(5px)';
                menuContent.style.transition = '1s all';

                modal.classList.add('animate__animated');
                modal.classList.add('animate__fadeIn');
                modal.classList.remove('animate__fadeOut');
            }
        });
    });
    
    modalClose.addEventListener('click', () => {
        closeModal();
    });
    
    function closeModal() {
        modal.classList.remove('animate__fadeIn');
        modal.classList.add('animate__fadeOut');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('animate__animated');
            menuContent.style.filter = 'blur(0px)';
        }, 1000);
    }
}
export default moreInformation;