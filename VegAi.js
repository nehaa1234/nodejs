import './style.css';
import Chat from './Chat' 
function VegAi() 
{
  return (
 <>
     <main>
     <Chat/>
    <div class="chatbot-container">
        <div id="header1">
            <h1>ChatWithUs</h1>
        </div>
        <div id="chatbot">
            <div id="conversation">
                <div class="chatbot-message">
                    <p class="chatbot-text">Hi! 👋 it's great to see you!</p>
                </div>
            </div>
            <form id="input-form">
                <message-container>
                    <input id="input-field" type="text" placeholder="Type your message here"/>
                    <button id="submit-button" type="submit">
                        <img class="send-icon" src="send-message.png" alt=""/>
                    </button>
                </message-container>

            </form>
        </div>
    </div>
    <script src="Chat.js"></script>
</main>
 </>
 
  );
}

export default VegAi;
