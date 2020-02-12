// const create = (tag)=>{
//     const ele = document.createElement(tag);
//     document.body.append(ele);
//     return ele;
// }
// create('div');
// const para = ()=>{
//     create('p').innerText = 'Here we are!';
// }
// const eleInner =  create('div').textContent = para() ;

const divEle = document.createElement('div');
const divPara = document.createElement('p');
      divPara.textContent = 'Here we are!';
    divEle.append(divPara);
document.body.append(divEle);

const imgSource = './images/man.png';
const image = document.createElement('img');
      image.append(imgSource);
document.body.append(image);

