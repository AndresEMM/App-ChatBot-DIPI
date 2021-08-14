// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }

  saludo() {
    const greetingMessage = this.createChatBotMessage("Hola, bro.")
    this.updateChatbotState(greetingMessage)
  }

  quieneres(){
    const greetingMessage = this.createChatBotMessage("Soy DITI, un bot creado por AEMM (Iniciales del humano que me creo), hasta donde se soy un pasatiempo, pero a lo mejor y me siguen optimizando :´D")
    this.updateChatbotState(greetingMessage)
  }

  emociones(){
    const greetingMessage = this.createChatBotMessage("No realmente, solo unos y ceros '01101010 01100001 01101010 01100001 01101010 01100001 00100000 01110100 01100101 00100000 01101000 01101001 01100011 01100101 00100000 01100010 01110101 01110011 01100011 01100001 01110010 00100000 00111010 01010000' (Si es texto en binario :0).")
    this.updateChatbotState(greetingMessage)
  }

  comida(){
    const greetingMessage = this.createChatBotMessage("No puedo 'comer' algo como tal, mi alimento serían los DATOS, me gusta el sabor del conocimiento.")
    this.updateChatbotState(greetingMessage)
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo un poco de información al respecto de Javascript:",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };

  handleDitiInfo = () => {
    const message = this.createChatBotMessage(
      "Soy DITI, un bot creado por AEMM (Iniciales del humano que me creo), hasta donde se soy un pasatiempo, pero a lo mejor y me siguen optimizando :´D"
    );

    this.updateChatbotState(message);
  };

  handleDitiFeels = () => {
    const message = this.createChatBotMessage(
      "No realmente, solo unos y ceros '01101010 01100001 01101010 01100001 01101010 01100001 00100000 01110100 01100101 00100000 01101000 01101001 01100011 01100101 00100000 01100010 01110101 01110011 01100011 01100001 01110010 00100000 00111010 01010000' (Si es texto en binario :0)."
    );

    this.updateChatbotState(message);
  };

  handleDitiFood = () => {
    const message = this.createChatBotMessage(
      "No puedo 'comer' algo como tal, mi alimento serían los DATOS, me gusta el sabor del conocimiento."
    );

    this.updateChatbotState(message);
  };
  
  updateChatbotState(message) {
 
// NOTE: This function is set in the constructor, and is passed in      
// from the top level Chatbot component. The setState function here     
// actually manipulates the top level state of the Chatbot, so it's     
// important that we make sure that we preserve the previous state.
 
    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}
 
export default ActionProvider;