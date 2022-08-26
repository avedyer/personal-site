import Navigator from "./navigator";
import Header from "./header";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

import './styles.css'

import { useState, useEffect } from "react";

function App() {

  const [frame, setFrame] = useState(0)

  useEffect(() => {
    window.scrollTo(0, document.body.offsetHeight * frame)
    console.log(document.body.offsetHeight)
  }, [frame])  

  return (
    <div id='App'>
      <Navigator frame={frame} passFrame={setFrame}/>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App;
