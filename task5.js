function Unhappy(){
    if(document.getElementById('Unhappy').textContent=='Unhappy'){
        document.getElementById('image').src='http://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png';
        document.getElementById("Unhappy").textContent='Happy'
    }
    else{
        document.getElementById('image').src='https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093';
        document.getElementById('Unhappy').textContent='Unhappy';
    }
}
Unhappy();

