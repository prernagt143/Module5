function switchoff(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switch Off";
    document.getElementById("onswitch").style.backgroundColor="green";
    document.getElementById("offswitch").style.backgroundColor="lightgrey";

}
function switchon(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("offswitch").style.backgroundColor="red";
    document.getElementById("onswitch").style.backgroundColor="lightgrey";
    document.getElementById("switchstatus").textContent="Switch On";
}
