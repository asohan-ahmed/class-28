//    var sohan= new Studant(name,age,cgpa,lang);

// var sohan = {
//     name: "sohan ahmed",
//     age: 20,
//     cgpa: 3.35,
//     lang: ["bangla", "hindi", "pakistani", "english"]
// }
// console.log(sohan.name);
// console.log(" " + sohan.name + sohan.age + sohan.cgpa + sohan.lang)
// document.write(" " + sohan.name + sohan.age + sohan.cgpa + sohan.lang)
function sohan (name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
    this.hate=function (){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var studant1= new sohan("sohan ahmed",20,3.36,["bangla","hindi","english","urdu"]);
var studant2= new sohan("niharika enroz nuha",20,5.00,["bangla","urdu","hindi"])
studant1.hate();
studant2.hate();

document.write(" Please check console right now");

