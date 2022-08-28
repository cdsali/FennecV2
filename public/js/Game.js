let value1 = document.querySelector("#value1 img");
let value2 = document.querySelector("#value2 img");
let value3 = document.querySelector("#value3 img");

let running = false;

let values = [
    "/img/GAME/1.webp","/img/GAME/2.webp","/img/GAME/3.webp","/img/GAME/4.webp","/img/GAME/5.webp"
];



let inp_spd = document.getElementById("spd");

function getRandomValue() {
    return values[parseInt(Math.random()*values.length)];
}




let animation_id;
function updateAnimation(new_time) {
    if(animation_id) clearInterval(animation_id);

    animation_id = setInterval(() => {
        value1.src = getRandomValue();
        value2.src = getRandomValue();
        value3.src = getRandomValue();
    }, new_time*1000);
}

inp_spd.onchange = function(e) {
    console.log("value changed", e.target.value);

    // document.documentElement => root of CSS
    document.documentElement.style.setProperty('--speed', e.target.value);
    // if(running){
    //     let new_time = (6-e.target.value)*0.1;
    //     updateAnimation(new_time);
    // }
}

let start_btn = document.getElementById("start-btn");
start_btn.onclick = function(e) {

    running = true;
    document.documentElement.style.setProperty('--speed', inp_spd.value);
    let new_time = (6-inp_spd.value)*0.1;
    updateAnimation(new_time);
    value1.classList.add("down");
    value2.classList.add("up");
    value3.classList.add("down");

    inp_spd.setAttribute("disabled", "disabled");
    inp_spd.style.backgroundColor = "grey";
    start_btn.setAttribute("disabled", "disabled");
    start_btn.style.backgroundColor = "grey";

    let cur_time = (6-inp_spd.value)*1000;
    let cur_val = inp_spd.value;
    let step_val = cur_time/5;
    step_val = step_val/1000;
    console.log(step_val);
    let init_time = (parseInt(Math.random()*5) + 1)*1000;
    let inter = 500;
    
    // make provision to also change timing in set interval, to update value1,2,3 accordingly
    function abc(){
        setTimeout(() => {
            document.documentElement.style.setProperty('--speed', parseInt(cur_val-step_val));
            setTimeout(() => {
                document.documentElement.style.setProperty('--speed', parseInt(cur_val-(2*step_val)));
                setTimeout(() => {
                    document.documentElement.style.setProperty('--speed', parseInt(cur_val-(3*step_val)));
                    setTimeout(() => {
                        document.documentElement.style.setProperty('--speed', parseInt(cur_val-(4*step_val)));
                        setTimeout(() => {
                            document.documentElement.style.setProperty('--speed', 6);
                            value1.classList.remove("down");
                            value2.classList.remove("up");
                            value3.classList.remove("down");

                            clearInterval(animation_id);
                            // alert("hello mr dj");    
                        
                            setTimeout(() => {
                                inp_spd.removeAttribute("disabled");
                                inp_spd.style.backgroundColor = "rgb(150, 202, 204)";
                                start_btn.removeAttribute("disabled");
                                start_btn.style.backgroundColor = "rgb(150, 202, 204)";
                                running = false;
                                console.log(value1.innerText);
                                if(value1.src==value2.src && value2.src==value3.src){
                                    alert("win");
                                }
                                else{
                                   // document.getElementById('colll').innerHTML+='<input class="colll" type="text" name="name" value="" placeholder="wallet adress" />';
                                   alert("lose");

                                }
                            }, 100);
                        }, inter);
                    }, inter);
                }, inter);
            }, inter);
        }, init_time);
    }
    
    abc();
    // stop after apt time 
        
    // re enable start button & speed slider
}


document.getElementById('wallet-btn').addEventListener('click', event => {
    let account;
    let button = event.target;

    
    ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        account = accounts[0];
        console.log(account);
        button.textContent = account;

        ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
            console.log(result);
            let wei = parseInt(result, 16);
            let balance = wei / (10 ** 18);
            console.log(balance + " ETH");
        });
    });
});
