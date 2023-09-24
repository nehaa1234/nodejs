// Get chatbot elements
import './style.css';
function Chat(){
    window.onload=function(){
      
// const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});  
}

// Generate chatbot response function
function generateResponse(input) {
    input = input.toLowerCase(); // Convert user input to lowercase for easier matching

    // Responses based on user input
    if (input.includes('hello') || input.includes('hi')) {
        return "Hello! Welcome to the online vegetable market. How can I assist you today?";
    } else if (input.includes('vegetables') || input.includes('veggies')) {
        return "We have a wide variety of fresh vegetables available. Please let me know which ones you're interested in.";
    } else if (input.includes('price')) {
        return "please visit our home page or cart for price";
    } else if (input.includes('order') || input.includes('buy')) {
        return "Great! To place an order, please visit to our cat option.";
    } else if (input.includes('delivery')) {
        return "We offer home delivery within our service area. Please provide your location so we can confirm if we deliver to your area.";
    } else if (input.includes('payment')) {
        return "We accept various payment methods, including credit/debit cards and online wallets and UPI. Payment details will be provided during the checkout process.";
    } else if (input.includes('thank you') || input.includes('thanks')) {
        return "You're welcome! If you have any more questions, feel free to ask.";
    }else if(input.includes('contact')||input.includes('connect')) {
        return "yes you can contact us on email seekersmart@gmail.com  OR contact us on 98XX-85XX-23"
    }
    else {
        return "I'm sorry, I didn't understand that. Could you please rephrase or ask a different question?";
    }
}
return( 
    <span></span>
);
}
export default Chat
    

 
 
  