//get modal element
let modal = document.getElementById('simpleModal');
// get open modal button
let modalBtn = document.getElementById('modalBtn');
// get close button 
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', outsideClick)

//function to open modal
function openModal(){
    modal.style.display = 'block';
}
//function to close modal
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}



document.querySelector('#redirect-classroom')
    .addEventListener('click',() => {
        window.location.href = 'online-classroom.html';
    })

document.querySelector('#redirect-study-tips')
    .addEventListener('click',() => {
        window.location.href = 'study-tips.html';
    })

document.querySelector('#redirect-test-prep')
    .addEventListener('click',() => {
        window.location.href = 'test-prep.html';
    })
document.querySelector('#redirect-class-prep')
    .addEventListener('click',() => {
        window.location.href = 'class-prep.html';
    })
document.querySelector('#redirect-time-management')
    .addEventListener('click',() => {
        window.location.href = 'time-management.html';
    })




//function openWindow(){
   // myWindow = window.open("","myWindow","width=200,height=100");
//}

//function locationURL() {
  //  location.href = './online-classroom.html'
//}

(function (window, document) {

    // we fetch the elements each time because docusaurus removes the previous
    // element references on page navigation
    function getElements() {
        return {
            layout: document.getElementById('layout'),
            menu: document.getElementById('menu'),
            menuLink: document.getElementById('menuLink')
        };
    }

    function toggleClass(element, className) {
        let classes = element.className.split(/\s+/);
        let length = classes.length;
        let i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll() {
        let active = 'active';
        let elements = getElements();

        toggleClass(elements.layout, active);
        toggleClass(elements.menu, active);
        toggleClass(elements.menuLink, active);
    }
    
    function handleEvent(e) {
        let elements = getElements();
        
        if (e.target.id === elements.menuLink.id) {
            toggleAll();
            e.preventDefault();
        } else if (elements.menu.className.indexOf('active') !== -1) {
            toggleAll();
        }
    }
    
    document.addEventListener('click', handleEvent);

}(this, this.document));