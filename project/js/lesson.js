// PHONE CHECKER
//
// DOM - document object model

const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color='green'
    }else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color='red'
    }

}

//TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (index=0) => {
        tabContent[index].style.display = 'block'
        tabs[index].classList.add('tab_content_item_active')
    }
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((item, i) =>{
            if(item === event.target){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

  const slideItems = document.querySelectorAll('.tab_content_block');
  const tabContentItems = document.querySelectorAll('.tab_content_item');

  let currentSlideIndex = 0;

  function showSlide(index) {
    slideItems.forEach(item => item.style.display = 'none');
    tabContentItems.forEach(item => item.classList.remove('tab_content_item_active'));
    slideItems[index].style.display = 'block';
    tabContentItems[index].classList.add('tab_content_item_active');
  }

  function nextSlide() {
    currentSlideIndex++
    showSlide(currentSlideIndex);
    if(currentSlideIndex===4){
        currentSlideIndex=-1
    }
  }
  setInterval(nextSlide, 3000);
const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const converter = (element, target,target2, isTrue,checkerEur) => {
    element.oninput = () => {
    const request = new XMLHttpRequest()
    request.open("GET","../data/converter.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()

    request.onload= ()=> {
        const response = (JSON.parse(request.response))
        if(checkerEur===1){
            target.value = (element.value*response.eur).toFixed(2)
            target2.value=( 1.0797*element.value).toFixed(2)
        }else
        if(isTrue){
            target.value = (element.value/response.usd).toFixed(2)
            target2.value=(element.value/response.eur).toFixed(2)
        }else{
            target.value = (element.value*response.usd).toFixed(2)
            target2.value=(element.value*response.usdToEur).toFixed(2)
        }
        element.value === '' && (target.value = '')
        target.value === '' && (target2.value = '')
    }
    }
}
converter(som,usd,eur, true)
converter(usd,som,eur, false)
converter(eur,som,usd, false,1)
//
// som.addEventListener('input', (event) =>{
//     // console.log(event.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET","../data/converter.json")
//     request.setRequestHeader("Content-type","application/json")
//     request.send()
//
//     request.addEventListener('load', () =>{
//         const response = JSON.parse(request.response)
//         usd.value = (som.value /response.usd).toFixed(2)
//     })
// })