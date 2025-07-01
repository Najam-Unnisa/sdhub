const h1elem1 = document.createElement('h1')
const h1elem2 = document.createElement('h1')
h1elem1.textContent="<h2>hello world</h2>"
h1elem2.innerHTML="<h2>hello world</h2>"
document.body.append(h1elem1)
document.body.append(h1elem2)


// const para = document.getElementsByClassName('para1')
// para.textContent= "hi i am najam"

// const pwd = document.querySelector('#password')



const ul= document.createElement('ul')

const fruits = ['apple','mango','banana','chickoo','litchi']

fruits.forEach(fruit =>
{
    const li = document.createElement('li')
    li.textContent=fruit
ul.appendChild(li)
}
)

document.body.appendChild(ul);





const Ol= document.createElement('ol')

const colors = ['red','blue','yellow','purple','green']

colors.forEach(color =>
{
    const ele = document.createElement('li')
    ele.textContent=color
Ol.appendChild(ele)
}
)

document.body.appendChild(Ol);

const style = document.querySelector('ul')
ul.style.color="red";

const p= document.querySelector('#para')
para.classList.add('text-violet-900','text-6xl','font-bold','italic')



