let newdiv=document.createElement('div');
newdiv.classList.add('class');
newdiv.style.height='100vh';
newdiv.style.padding='30px';
newdiv.style.borderColor='#663399';
newdiv.style.borderWidth='10px';
newdiv.style.border='solid';
newdiv.style.backgroundImage='url("https://as1.ftcdn.net/v2/jpg/08/41/94/14/1000_F_841941493_oJmuUz7oZ45SnmG7zJI2wRfvft7zzP5n.jpg")';
newdiv.style.margin='auto';
newdiv.style.backgroundSize = 'cover';
document.body.appendChild(newdiv);

let heading=document.createElement('h');
heading.classList.add('class');
heading.textContent='Code is more than some bytes in a file';
heading.style.fontFamily='Bree Serif';
heading.style.backgroundColor='#FFDAB9';
heading.style.padding='15px';
heading.style.fontSize='30px';
newdiv.appendChild(heading);
