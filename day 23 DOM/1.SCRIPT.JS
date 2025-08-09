// document.children
// HTMLCollection [html]
// document.children[0]
// <html lang=​"en">​scroll<head>​…​</head>​<body style=​"font-family:​ sans-serif">​…​</body>​</html>​
// typeof document.children[0]
// 'object'
// console.dir(document.children[0])

// undefined
// document.children[0].children
// HTMLCollection(2) [head, body]
// document
// #document (http://127.0.0.1:5500/day%2023%20DOM/1.INDEX.HTML)
// console.dir(document)

// undefined
// document.children[0].children[1]
// <body style=​"font-family:​ sans-serif">​…​</body>​
// document.body
// <body style=​"font-family:​ sans-serif">​…​</body>​

// document.body.children
// HTMLCollection(7) [h1, hr, p, img#my-first-image-id.css-image, ul, p, script, my-first-image-id: img#my-first-image-id.css-image]
// document.body.children[0]
// <h1>​Frondend Development​</h1>​
// console.dir(doccument.body.children)
// VM2060:1 Uncaught ReferenceError: doccument is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM2060:1
// console.dir(doccument.body.children[0])
// VM2069:1 Uncaught ReferenceError: doccument is not defined
//     at <anonymous>:1:13
// (anonymous) @ VM2069:1
// console.dir(document.body.children[0])
// VM2074:1 h1
// undefined
// document.body.children[0].innerHTML = 'ankit'
// 'ankit'
//document.body.children[0].innerHTML = '<i>ankit<i>'
//'<i>ankit<i>'
//document.body.children[0].innerHTML = '<i>ankit<i>'


// document.body.children[0].innerText = '<i>ankit</i>'
// document.body.children[1].innerHTML = '<i>ankit</i>'

//===========================================================================//

// document.body.children[3].src ='image address'
// document.getElementsByTagName('img')
// document.getElementsByTagName('p')
// document.getElementById("my-first-image-id") //value would be null if the id name is wrong.
// document.getElementsByClassName("css-image")
// document.getElementById("my-first-image-id")
// document.querySelector('h1')
// document.querySelector('[type ="a"]')
// document.querySelector('ul>li')

// const allimages = document.querySelectorAll("img");
// const urls = [
   //=================================================================//
//    document.querySelectorAll('[username]')
//document.querySelectorAll("[username='ankit']")

//document.querySelector('[username= "ankit"]')
//document.querySelector('[username= "ankit"]').attributes
//document.querySelector('[username= "ankit"]').attributes.username
//username=​"ankit"
// document.querySelector("#my-first-image-id")
// document.querySelector("#my-first-image-id").getAttributeNames
// document.querySelector("#my-first-image-id").id
// document.querySelector("#my-first-image-id").className
//document.querySelector("#my-first-image-id").title