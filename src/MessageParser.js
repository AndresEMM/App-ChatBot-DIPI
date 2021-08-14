
// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }

    if (lowerCaseMessage.includes("hola")) {
      this.actionProvider.saludo()
    }

    if (lowerCaseMessage.includes("quien eres?")) {
      this.actionProvider.quieneres()
    }

    if (lowerCaseMessage.includes("tienes emociones?")) {
      this.actionProvider.emociones()
    }

    if (lowerCaseMessage.includes("que comida te gusta?")) {
      this.actionProvider.comida()
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}
  
export default MessageParser;