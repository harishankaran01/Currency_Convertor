fetch('https://www.frankfurter.app/currencies')
  .then(res => res.json()) 
  .then(data => {
    display(data); 
  })
  .catch(error => {
    console.error('Error:', error);
  });
let select=document.getElementsByClassName("currencies");

function display(data) {
  let list=Object.entries(data);
  for(let i=1;i<list.length;i++){
    let opt=` <option value=${list[i][0]}>${list[i][0]}</option>`;
    
    select[0].innerHTML+=opt;
    select[1].innerHTML+=opt;
  }
}
let ex=document.getElementsByClassName("icon");
ex[0].addEventListener('click',()=>{
  console.log("Hello");
   let s1=select[0].value;
  select[0].value=select[1].value;
  select[1].value=s1;
  

})
let button=document.getElementById("button");
button.addEventListener('click',()=>{
    let s1=select[0].value;
    let s2=select[1].value;
    let inp=document.getElementById('input').value;
    if(s1==s2){
        alert("Please Select different currencies");
    }
    else if(inp==null || inp==''){
      alert("Please Enter in Number. Eg(1,2,3....)");
    }
    else if(isNaN(inp)){
        alert("Please Enter in Number Format. Eg(1,2,3....)");
        document.getElementById('input').value=" ";
    }
    else
       exchageApi(s1,s2,inp);

});
function exchageApi(s1, s2, inp) {
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inp}&from=${s1}&to=${s2}`)
    .then(resp => resp.json())
    .then(res => {
      let result = document.getElementsByClassName("result");
      result[0].innerHTML = `${inp} ${s1} = ${res.rates[s2]} ${s2}`;
      console.log(res)
    });
}

