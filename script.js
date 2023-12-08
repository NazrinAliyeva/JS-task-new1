// //task1
let numOne=parseInt(prompt("Ededi daxil edin"));
let numTwo=parseInt(prompt("Ededi daxil edin"));
let product= numOne*numTwo;
console.log(`${numOne} vurulsun ${numTwo} beraberdir:${product}`)

// //task2
let shoppingBasket=[]
shoppingBasket.push("milk")
shoppingBasket.push("bread")
shoppingBasket.push("meat")
console.log(shoppingBasket);

// //task3
let a=parseInt(prompt("ededi daxil edin"))
if(a%2==0){
    alert("True")
}
else{
    alert("False")
}

//task4
let sebet=["alma","armud","heyva","portagal","banan"]
let secim=prompt("Bunlardan birini sec alma,armud,heyva,portagal")
console.log(secim)

// //task5
let ad=prompt("Adinizi daxil edin")
let soyad=prompt("Soyadinizi daxil edin")
let yas=prompt("Yasnizi daxil edin")
let seher=prompt("Yasayis yerinizi daxil edin")
let istifadeci={
    name:ad,
    surname:soyad,
    age:yas,
    city:seher
}
Object.keys(istifadeci).forEach(function(key) {

    console.log(key, istifadeci[key]);
  
  });

// //task6
let menyu=[
[
        'yumurta','makaron','toyuq'
],
[
    'pendir','pizza','toyuq'

],
[
    'qaymaq','makaron','et'

],
[
    'pendir','pizza','et'

],
[
    'pendir','pizza','toyuq'

]
]
let yemekSecimi=prompt('Gunu qeyd edin bazar ertesi , cersenbe axsami , cersenbe, cume axsami , cume')
switch(yemekSecimi){
    case "bazar ertesi":
        console.log(menyu[0])
        break;
        case "cersenbe axsami":
            console.log(menyu[1])
            break;
            case "cersenbe":
                console.log(menyu[2])
                break;
                case "cume axsami":
                    console.log(menyu[3])
                    break;
                    case "cume":
                        console.log(menyu[4])
                        break;
}

//task8
let arr=[]
let num=Math.trunc(Math.random()*(25-0)+0)
let timer=setInterval(()=>arr.push(num),1000)
console.log(arr);


task9
let z=12;
let texmin1=prompt("1-25 araliginda olan ededi texmin edin 3 sansiniz var")
if(texmin1==z){
    alert("Dogru tapdiniz")
}
else if(texmin1!==z){
    if(z>texmin1){
        alert("texmin etdiyiniz eded 1-25 araligindaki ededden kicikdir")
    }
   else{
        alert("texmin etdiyiniz eded 1-25 araligindaki ededden boyukdur")
    }
}
let texmin2=prompt("  2ci sansinizdir 1-25 araliginda olan ededi texmin edin")
if(texmin2==z){
    alert("Dogru tapdiniz")
}
else if(texmin2!==z){
    if(z>texmin2){
        alert("texmin etdiyiniz eded 1-25 araligindaki ededden kicikdir")
    }
   else{
        alert("texmin etdiyiniz eded 1-25 araligindaki ededden boyukdur")
    }
}

let texmin3=prompt(" son sansinizdir sansiniz qalir 1-25 araliginda olan ededi texmin edin")
if(texmin3==z){
    alert("Dogru tapdiniz")
}
else if(texmin3!==z){
alert(`Tapa bilmediniz dogru cavab ${z} idi`)
}
//task10
let arr1=[[1,2,3],[4,5,6]]
console.log(arr[0])
console.log(arr[1])