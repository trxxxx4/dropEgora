const january = `lkjhfs`;
console.log(january);



let defaultButton =  document.querySelector('.second__block__section__figure');

let rotateButton = document.querySelector('.second__block__section__figure__rotated');

if (rotateButton){
    rotateButton.addEventListener('click',function(){
        rotateButton.className = 'second__block__section__figure';
        console.log(131)
    })
}

if (defaultButton){
    defaultButton.addEventListener('click', function(){
        //defaultButton.className ='second__block__section__figure__rotated';
        //document.querySelector('.second__block').className = '.second__block__active';
        //document.querySelector('.second__block__section').className = '.second__block__section__active';
        console.log(345)
    })
}
