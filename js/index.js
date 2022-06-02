// Initialise the JSX content you want to render and pass it to the render() method
const rootContent = (
  <div>
    <img src="img/React_(web_framework)-Logo.wine.png" alt="React logo" width="100"/>
    <h1>Fun facts about React</h1>
      <ul className="react-facts">
        <li className="react-fact">Was first released in 2013</li>
        <li className="react-fact">Was originally created by Jordan Walke</li>
        <li className="react-fact">Has well over 100K stars on Github</li>
        <li className="react-fact">Is maintained by Facebook</li>
        <li className="react-fact">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </div>
);

//Initiliase where you want to render the JSX
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(rootContent);