import { useState } from "react";
import Header from "./components/Header.jsx";
import Contacts from "./components/Contacts.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Contacts />
    </>
  );
}

export default App;
