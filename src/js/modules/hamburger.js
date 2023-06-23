function hamburger(openSelector,closeSelector,menuSelector){

    window.addEventListener('resize', () => {
        showMenu();
    });
    showMenu();

    function showMenu(){
        if (window.innerWidth <= 992){
            const   openBtn = document.querySelector(openSelector),
                    closeBtn = document.querySelector(closeSelector),
                    menu = document.querySelector(menuSelector),
                    menuContent = document.querySelector('.main');

            close();

            function open(){
                menu.style.cssText = `
                    display: flex; 
                    flex-direction: column; 
                    border-radius: 20px; 
                    background: #5932EA; 
                    align-items: center; 
                    position: absolute; 
                    padding: 20px; 
                    top: 150px; 
                    left: 50%; 
                    width: 300px;
                    transform: translateX(-50%); 
                    z-index: 4;
                `;
                openBtn.style.cssText =`
                    display: none;
                `
                closeBtn.style.cssText =`
                    display: flex;
                    transition: 1s all;
                `

                menuContent.style.filter = 'blur(5px)';
                menuContent.style.transition = '1s all';
                

            }
            function close(){
                menu.style.display = 'none';
                menu.style.opacity = '0';
                closeBtn.style.display = 'none';
                openBtn.style.display = 'flex';
                menuContent.style.filter = 'blur(0px)';
                
            }
        
            openBtn.addEventListener('click', () =>{
                open();
                menu.classList.add('animate__animated');
                menu.classList.add('animate__fadeIn');
                menu.classList.remove('animate__fadeOut');
            })
            
            closeBtn.addEventListener('click', ()=> {
                menu.classList.remove('animate__fadeIn');
                menu.classList.add('animate__fadeOut');
                setTimeout(() => {
                    close();
                    menu.classList.remove('animate__animated');
                },1000)
            })

        }
        if (window.innerWidth >= 993){
            const   openBtn = document.querySelector(openSelector),
                closeBtn = document.querySelector(closeSelector),
                menu = document.querySelector(menuSelector);

            menu.style.cssText = `
                    border-radius: 0px; 
                    background: none; 
                    align-items: center; 
                    position: '; 
                    padding: 0px; 
                    max-width: 600px;
                `;
            openBtn.style.display = 'none';
            closeBtn.style.display = 'none';
        }
        
    }
}
export default hamburger;