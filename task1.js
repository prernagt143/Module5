function task1(){
    let newdiv=document.createElement('div');
    newdiv.classList.add('class');
    newdiv.style.height='750px';
    newdiv.style.width='400px';
    newdiv.style.backgroundImage='url("https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1380&t=st=1705589139~exp=1705589739~hmac=bf9e192e8095ceb6b0a426d7b81a0d08eae620dade1c54099a7304bc0510370a")';
    newdiv.style.margin='auto';
    document.body.appendChild(newdiv);

    let heading=document.createElement('h1');
    heading.textContent='TodoList';
    heading.style.textAlign='center';
    heading.style.color='white';
    heading.style.fontSize='50px';
    newdiv.appendChild(heading);

    let para=document.createElement('p');
    para.textContent='Each day I will accomplish one thing on my todo list.';
    para.style.textAlign='center';
    para.style.color='white';
    para.style.fontSize='20px';
    newdiv.appendChild(para);

    let heading2=document.createElement('h4');
    heading2.textContent='Read Book';
    heading2.style.color='white';
    heading2.style.fontSize='20px';
    newdiv.appendChild(heading2);

    let para2=document.createElement('p');
    para2.textContent='I do not think that the human race will survuve the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I am an optimist...';
    para2.style.color='white';
    para2.style.fontSize='20px';
    newdiv.appendChild(para2);

    let b_div=document.createElement('div');
    b_div.style.textAlign='center';
    newdiv.appendChild(b_div);
    let button=document.createElement('b');
    button.textContent='Start';
    button.style.color='white';
    button.style.backgroundColor='orange';
    button.style.fontSize='19px';
    b_div.appendChild(button);

    let para3=document.createElement('p');
    para3.textContent='Do not skip introduction';
    para3.style.textDecoration='underline';
    para3.style.color='white';
    para3.style.textAlign='centre';
    b_div.appendChild(para3);
}
task1();
