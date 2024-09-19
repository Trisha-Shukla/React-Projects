function customRender(createElement,element){
const createdEle=document.createElement(createElement.tag);
for(let prop in createElement.props){
    createdEle.setAttribute(prop,createElement.props[prop])   ;
}
createdEle.innerHTML=createElement.children;
element.appendChild(createdEle);
}
const createElement={
    tag:"a",
    props:{
        href:"https://www.google.com/",
        target:"_blank",
    },
    children:"click here"
}
customRender(createElement,document.getElementById("root"));