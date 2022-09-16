//Parametros por defectos
//antes de ecmascript funciones
function newfuncion(name,age,country){
var name = name || 'oscar'
var age = age || 32;
var country = country || 'EC';
console.log(name,age,country);
}
newfuncion();
//Con ecmaScript16
function newfuncion2(name = 'oscar', age=32, country='EC'){
console.log(name,age,country)
}

newfuncion2();
newfuncion2('Saul', 22, 'EC');

//templates litereales
//antes
let hola = 'hola';
let world = 'world';
let epicPhrase = hola + ' ' + world;
console.log(epicPhrase);
//despues
console.log(`${hola} ${world}`);

//multilinea
//antes
let lorem = 'nomenus eminama \n'
+ "otra grace epica de prueba"
console.log(lorem);
//despues
let lorem2 = `otra frase epica que necesitamos 
y que se muestra muy bien`;
 console.log(lorem2);

 //destructuracion de elementos
let person ={
    'name2': 'oscar',
    'age': 32,
    'country':'EC'
}
 //antes 
 console.log(person.name2,person.age, person.country);
 //despues
 let {name2,age,country} = person;
 console.log(name2,age,country);

 //operador de propagacion
let equipo = ['Emilio','Susana','Miguel'];
let equipo2 = ['Camila','Ernesta','CMamo']
 //antes
 let educatio1= ['David','Emilio','Susana','Miguel','Camila','Ernesta','CMamo'];
 console.log(educatio1);
 //despues
let educacion = ['David', ...equipo, ...equipo2];
console.log(educacion);

//tipo de varaible let 
//antes 
//uso de var
{var global = "global var"};
console.log(global);
//despues 
//uso de let
{
    let global2 = 'global let'
    console.log(global2);
};

//const 
//antes 
var c = 'c';
c = 'z';
console.log(c);
//despues
const a = 'b';
//a = 'a';
console.log(a)

//propiedad de objeto mejorada
let name = 'saul';
let edad = 22;
//antes
obj={name: name, edad:edad};
console.log(obj);
//despues
objeto2 = {name,edad};
console.log(objeto2);

//arrow function
const names = [{
    name: 'Saul',
    edad : 32
},
{
    name: 'Juan',
    edad: 36
}];
//antes
let listanombres= names.map(function (item){
    console.log(item.name);
})
//despues
let listanombres2 = names.map(item => console.log(item.name));
const listanombre3= (name,age,country)=>{

}
const listanombre4 = name =>{

}

const square = num => num * num;
console.log(square(5));

//promesas 
//resuelve el Callback hell
//algo va a pasar

const helloPromise = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve('Hey')
        }
        else {
            reject('ups!!')
        }
    })
};

helloPromise()
.then(response => console.log(response))
.then(()=> console.log('hola'))
.catch(error => console.log(error));