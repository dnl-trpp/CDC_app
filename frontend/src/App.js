import "./App.css";
import Messages from "./components/Messages";
import TextField from "./components/TextField";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_SERVICE_URL}/products`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        setMessages(responseData);
      });
  }, []);


  return (
    <div className="App">
      {messages.length !== 0 ? (
        <div>
        <p>{messages[0].name}</p>
        <p>{messages[1].name}</p>
        <p>{messages[2].name}</p>
        <p>{messages[3].name}</p>
        <p>{messages[4].name}</p>
        <p>{messages[5].name}</p>
        </div>
      ) : (
        <p>No Messages</p>
      )}
    </div>
  );
}

export default App;
