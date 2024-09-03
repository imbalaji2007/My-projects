var input = document.getElementById("input");
var content = document.getElementById('content');
var div = document.getElementById('div');
var nav = document.getElementById('nav');
var top = document.getElementById('top');

async function sent() {
  nav.innerHTML = '';
  var newdiv = document.createElement('div');
  newdiv.setAttribute('id', 'newdiv');
  var chat = document.createElement('h2');
  chat.setAttribute('id', 'chat');

  var newh3 = document.createElement('h3');
  newh3.setAttribute('id', 'newh3');

  var you = document.createElement('h2');
  you.setAttribute('id', 'you');

  var you_inp = document.createElement('h3');
  you_inp.setAttribute('id', 'you_inp');


  chat.textContent = 'ChatGPT:';
  you.textContent = 'You:';
  you_inp.textContent = input.value;

  if (input.value === '') {
    newh3.textContent = 'Please Enter Something!';
    you.textContent = '';
    newdiv.appendChild(chat);
    newdiv.appendChild(newh3);
    content.appendChild(newdiv);
  } else if (input.value.toLowerCase() === 'hello' || input.value.toLowerCase()==='hi') {
    newh3.textContent = 'Hello! How can I assist you today?';
  } 
  else if (input.value.toLowerCase() === 'developer') {
    newh3.textContent = "A school student in India, Tamil Nadu developed me. For more information, tap 'ChatGPT V.Student' which is on top left. ";
  } 

  else if(input.value.toLowerCase()==='test'){
    newh3.textContent='This is a test message. Fell free to ask me anything! I will help you!'
  }

  else{
    const url = 'https://chatgpt146.p.rapidapi.com/q';
    const apiKey = 'fb8328a7e5mshb35c49e466c4718p174ae0jsn5593cd7a26b0'
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'chatgpt146.p.rapidapi.com'
        },
        body: JSON.stringify({
            prompt: input.value
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        newh3.textContent=result
    } catch (error) {
        console.error(error);
    }

  }

  newdiv.appendChild(you);
  newdiv.appendChild(you_inp);
  newdiv.appendChild(chat);
  newdiv.appendChild(newh3);
  content.appendChild(newdiv);
  input.value = '';
}

function newChat() {
  location.reload();
}

function toggleMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
