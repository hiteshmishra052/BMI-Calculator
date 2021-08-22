function bmi() {
    // get weight and height 
    let weight=document.querySelector(".wt").value;
    let feet=document.querySelector(".feet").value;
    let inch=document.querySelector(".inch").value;

    let metre=feet+"."+inch;
    let height=metre/3.2808;
    let bmi=weight/Math.pow(height,2);
    if(bmi<18.5)
    {
    document.querySelector("p").innerHTML="Your Body Mass Index(BMI) is:-"+(Math.round(bmi*100).toFixed(2))+"<br>"+"Index value is Under Weight";
    }
    else if((bmi>18.5) && (bmi<29.5))
    {
    document.querySelector("p").innerHTML="Your Body Mass Index(BMI) is:-"+(Math.round(bmi*100).toFixed(2))+"<br>"+"Index value is Over Weight";
    }
}
document.querySelector(".bttn").addEventListener("click",bmi);
// console.log('Hi i am hitesh');