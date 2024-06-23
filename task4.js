let newdiv=document.createElement('div');
newdiv.classList.add('class');
newdiv.style.height='90vh';
newdiv.style.width='500px'
newdiv.style.margin='auto';
newdiv.style.position='relative';
newdiv.style.backgroundImage='url("https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad")';
document.body.appendChild(newdiv);

let b_div=document.createElement('div');
b_div.style.position='absolute';
b_div.style.backgroundColor='#f6c56e';
b_div.style.height='250px';
b_div.style.width='460px';
b_div.style.borderTopLeftRadius='10px';
b_div.style.borderTopRightRadius='10px';
b_div.style.color='#323f4b';
b_div.style.padding='20px';
b_div.style.bottom='0';
newdiv.appendChild(b_div);


let heading=document.createElement('h1');
heading.textContent='Happy Meals';
heading.style.fontFamily='Bree Serif';
heading.style.fontSize='50px'
heading.style.fontWeight='lighter';
heading.style.margin='0px';
b_div.appendChild(heading);

let para=document.createElement('p');
para.textContent='Discover the best foods over the 1,000 resturants.';
para.style.fontFamily='Roboto';
para.style.fontWeight='bold';
para.style.fontSize='25px';
    
para.style.margin='0px';
para.style.paddingTop='10px';
b_div.appendChild(para);

let c_div=document.createElement('div');
c_div.style.position='relative';
c_div.style.margin='0px';
c_div.style.padding='10px';
b_div.appendChild(c_div);

let button=document.createElement('button');
button.textContent='Book Now';
button.style.height='50px';
button.style.width='100px'
button.style.borderRadius='10px'
button.style.fontFamily='Roboto';
button.style.backgroundColor='#f6c56e';
button.style.color='#323f4b';
button.style.backgroundColor='#ffffff';
button.style.fontSize='15px';
button.style.borderColor='white';
b_div.appendChild(button);

