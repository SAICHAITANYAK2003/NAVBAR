let personNameEl=document.getElementById('personName');
let personEmailEl=document.getElementById('personEmail');
let personPassword=document.getElementById('personPassword');
let loginButtonEl=document.getElementById('loginButton');
let errorMsgnameEl=document.getElementById('errorMsgName');

personNameEl.addEventListener('change',function(event){
    if(event.target.value===""){
        errorMsgnameEl.textContent="Required*";
    }else{
        errorMsgnameEl.textContent="";
    }
})