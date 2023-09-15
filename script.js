//object literals
// const blogs=[
    

// ];
// console.log(blogs);


// let user={
//     name: 'merve',
//     age: 30,
//     email: 'merves@gmail.com',
//     location: 'adana',
//     blogs: [
//         {
//             title: 'why mac & cheese rules', likes: 30
//         },
//         {
//             title: '10 thins to make with marmite',likes: 50
//         }
//     ],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//        console.log('this suer has written the following blogs:');
//        this.blogs.forEach(blog=>{
//         console.log(blog.title,blog.likes);
//        })
//     }

// };

// console.log(user);
// console.log(user.name); //console.log(user['name']);
// user['name']='melike';
// console.log(user.name);
// console.log(user.blogs[0]);

// const key='location';
// console.log(user[key]);

// user.age=35;
// console.log(user);
// console.log(user.age);

// console.log(typeof user);

// user.login();
// user.logout();
// user.logBlogs();


//math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=7.924;
console.log(Math.round(area)); //en yakın sayıya yuvarlar

console.log(Math.floor(area)); //bir altına yuvarlar
console.log(Math.ceil(area)); //bir üste yuvarlar

console.log(Math.trunc(area));

//random numbers
const random=Math.random();
console.log(random);  //0 ile 1 arasında değişen sayılar verir
console.log(Math.round(random*100)); //1 ile 100 arasında değişen rastgele sayı üretir

//primitive and reference types

//primitive:
//numbers
//strings
//booleans
//null
//undefined
//symbols

//reference types:
//objects
//arrays
//functions
//dates
