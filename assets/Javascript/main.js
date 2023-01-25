//hide / block to__top button
const toTop = document.querySelector(".to__top");
window.onscroll = ()=>{
    toTop.style.display = "none";
    if(document.documentElement.scrollTop > 0){
        toTop.style.display = "block";
    }
};

//set button price
const BtnPrice = document.querySelectorAll(".btn__pricing-option");
let testList = document.querySelectorAll(".test");
let priceYears = document.querySelectorAll(".priceYear");


BtnPrice.forEach((value)=>{
    value.addEventListener("click", ()=>{
        BtnPrice.forEach((element)=>{
            element.classList.remove("active");
        });
        value.classList.add("active");
        if(value.classList.contains("year")){
            testList.forEach((x)=>{
                x.style.display = "none";
            })
            priceYears.forEach((y)=>{
                y.style.display = "block";
            })
        }else{
            testList.forEach((x)=>{
                x.style.display = "block";
            })
            priceYears.forEach((y)=>{
                y.style.display = "none";
            })
        }
    });
});
