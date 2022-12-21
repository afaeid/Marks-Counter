var bn1, bn2, en1, en2, mth, bgs, sci, isl, ict, agri, numShower, allSubj;
bn1 = document.querySelector('.row:nth-child(2) .col-2 input');
bn2 = document.querySelector('.row:nth-child(3) .col-2 input');
en1 = document.querySelector('.row:nth-child(4) .col-2 input');
en2 = document.querySelector('.row:nth-child(5) .col-2 input');
mth = document.querySelector('.row:nth-child(6) .col-2 input');
bgs = document.querySelector('.row:nth-child(7) .col-2 input');
sci = document.querySelector('.row:nth-child(8) .col-2 input');
isl = document.querySelector('.row:nth-child(9) .col-2 input');
ict = document.querySelector('.row:nth-child(10) .col-2 input');
agri = document.querySelector('.row:nth-child(11) .col-2 input');
numShower = document.querySelector('.total-mark');

allSubj = document.querySelectorAll('.row .col-2 input');
allSubj.forEach((subjects)=>{
  subjects.addEventListener('input', ()=>{
    count();
  })
})
function count(){
var totalMark = Number(bn1.value) + Number(bn2.value) + Number(en1.value) + Number(en2.value) + Number(mth.value) + Number(bgs.value) + Number(sci.value) + Number(isl.value) + Number(ict.value) + Number(agri.value);
numShower.value = totalMark
}