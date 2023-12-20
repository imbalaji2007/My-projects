var input = document.getElementById("input");
var content = document.getElementById('content');
var div = document.getElementById('div');

async function sent() {
  div.innerHTML = '';
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

  chat.textContent = '...';
  newdiv.appendChild(chat);

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

  newdiv.appendChild(you);
  newdiv.appendChild(you_inp);
  newdiv.appendChild(chat);
  newdiv.appendChild(newh3);
  content.appendChild(newdiv);
  input.value = '';
}

function newChat() {
  content.innerHTML = '';
  div.textContent = '';
  var h1 = document.createElement('h1');
  h1.textContent = 'How can I help you today?';
  div.appendChild(h1);
}