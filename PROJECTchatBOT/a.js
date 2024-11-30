let box = document.getElementsByClassName("box")[0];
let userText = document.getElementsByClassName("input")[0];
let subBtn = document.getElementsByClassName("btn")[0];


function sendMessage(){
    if(userText.value !== ''){
        let d1 = document.createElement("div")
    d1.className = "msgBox"; 

    let userMessage = document.createElement("p");
    userMessage.className = "pmsg";
    userMessage.innerText = userText.value;
    

    d1.appendChild(userMessage);
    box.appendChild(d1);

    let response = getBotResponse();
    const botMessage = document.createElement("div");
    botMessage.className = "botMsg"
    botMessage.innerText = response;
    box.appendChild(botMessage)

    userText.value = '';

    box.scrollTop = box.scrollHeight
    } 
}





function getBotResponse() {
  
    if(userText.value.toLowerCase() === "hello"){
        return "Hi ! How can I help you?"
    }
    if(userText.value.toLowerCase() === "hi"){
        return "Hi ! How can I help you?"
    }
    if(userText.value.toLowerCase() === "hii"){
        return "Hi ! How can I help you?"
    }

    if(userText.value.toLowerCase() === "what is your name"){
        return "I'm ACRO BOT! I don't have a personal name, but you can think of me as your helpful assistant. How can I assist you today?"
    } 
    if(userText.value.toLowerCase() === "what is your name?"){
        return "I'm ACRO BOT! I don't have a personal name, but you can think of me as your helpful assistant. How can I assist you today?"
    } 
    if(userText.value.toLowerCase() === "your name?"){
        return "I'm ACRO BOT! I don't have a personal name, but you can think of me as your helpful assistant. How can I assist you today?"
    } 
    if(userText.value.toLowerCase() === "your name"){
        return "I'm ACRO BOT! I don't have a personal name, but you can think of me as your helpful assistant. How can I assist you today?"
    } 

    if(userText.value.toLowerCase() === "what is your hobby"){
        return "My hobby is to solve queries of peoples"
    } 
    if(userText.value.toLowerCase() === "who is jiya"){
        return "She is a student in Acropolis College."
    } 
    if(userText.value.toLowerCase() === "who is jiya?"){
        return "She is a student in Acropolis College."
    } 
    if(userText.value.toLowerCase() === "who is khushi joshi?"){
        return "She was a duffer student in Acropolis College until she met Anish."
    } 
    else{
        return "This Information is not stored"
    }
}



subBtn.addEventListener("click" , sendMessage)
