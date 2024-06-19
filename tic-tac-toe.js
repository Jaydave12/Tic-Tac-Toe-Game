let boxes = document.querySelectorAll("#but");
let turno = true;
 let nw=document.querySelector("#neww");
 const winpatten = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((but) => {
    but.addEventListener("click", () => {
        if (turno) {
            but.innerHTML = "o";
            turno = false;
            but.style.background = "grey";
            but.style.color="white"
            but.disabled = true;

        }
        else {
            but.innerHTML = "x";
            turno = true;
            but.style.color = "green";
            but.style.background = "orange";
            but.disabled = true;

        }

        checkwinnerpatten();


    });


});

 nw.addEventListener("click",()=>{
    enable();
 });
 const enable = () => {
    for (box of boxes) {
   box.disabled =false;
   box.innerHTML ="";   
   box.style.background = "gold";
   
    }
};




const showwinner = (winner) => {
    disable();
    alert(`win ${winner}`);


};

const disable = () => {
    for (box of boxes) {
        box.disabled = true;
        box.style.color = "white";
        
    }
};
const checkwinnerpatten = () => {
    for (let patten of winpatten) {
        let poss1 = boxes[patten[0]].innerHTML;
        let poss2 = boxes[patten[1]].innerHTML;
        let poss3 = boxes[patten[2]].innerHTML;
        if (poss1 != "" && poss2 != "" && poss3 != "") {
            if (poss1 == poss2 && poss2 == poss3) {
                
                showwinner(poss1);
                console.log(patten)
            }
            
        }
       
    }
};














