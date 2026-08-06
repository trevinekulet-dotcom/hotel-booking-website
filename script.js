const openChat=document.getElementById("openChat");
const closeChat=document.getElementById("closeChat");
const chatBox=document.getElementById("chatBox");

openChat.onclick=()=>{
chatBox.style.display="flex";
}

closeChat.onclick=()=>{
chatBox.style.display="none";
}

const sendBtn=document.getElementById("sendBtn");
const input=document.getElementById("userInput");
const messages=document.getElementById("messages");

sendBtn.onclick=sendMessage;
input.addEventListener("keypress",(e)=>{
if(e.key==="Enter") sendMessage();
});

function sendMessage(){

const text=input.value.trim();

if(text==="") return;

messages.innerHTML+=`
<div class="user">${text}</div>
`;

input.value="";

setTimeout(()=>{

messages.innerHTML+=`
<div class="bot">${aiReply(text)}</div>
`;

messages.scrollTop=messages.scrollHeight;

},600);

}

function aiReply(msg){

msg=msg.toLowerCase();

if(msg.includes("check in"))
return "Check-in starts at 2:00 PM.";

if(msg.includes("check out"))
return "Check-out is until 12:00 PM.";

if(msg.includes("wifi"))
return "Yes! Free high-speed WiFi is available.";

if(msg.includes("price"))
return "Rooms start from $120 per night.";

if(msg.includes("pool"))
return "Yes, we have an infinity swimming pool.";

if(msg.includes("breakfast"))
return "Breakfast is included in selected room packages.";

if(msg.includes("book"))
return "Click the Book Now button to reserve your room.";

return "I'm here to help with room booking, hotel services, pricing, and availability.";
}
