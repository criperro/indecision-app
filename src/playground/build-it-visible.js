const appRoot = document.getElementById('app');

const buttonMessageOptions = [ 'Show Details', 'Hide Details'];

const onToggleText = () => {
 let message = document.getElementById('textMessage');
 let buttonMessage = document.getElementById('buttonToggle');

 message.style.display = message.style.display === '' ? 'none' : '';
 buttonMessage.innerText = message.style.display === '' ? buttonMessageOptions[1] : buttonMessageOptions[0] ;

};

const template = (
  <div>
      <h1>Visibility Toggle</h1>
      <button id='buttonToggle' onClick={onToggleText}>{buttonMessageOptions[0]}</button>
      <p id='textMessage' style={{display : 'none'}} >Hey. These are some details you can now see</p>
  </div>
)

ReactDOM.render(template, appRoot);