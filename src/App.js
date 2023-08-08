import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  // Increment btn click
  const increBtn = () => {
    setCount((nxt) => nxt + 1);
    setIsActive2(!isActive2);
  };

  // Decrement btn click
  const decreBtn = () => {
    setCount((prev) => prev - 1);
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <main>
        <Main count={count} />
      </main>

      <footer>
        <Button
          incre="+"
          decre="-"
          isActive={isActive}
          plusBtn={increBtn}
          minusBtn={decreBtn}
          isActive2={isActive2}
        />
      </footer>
    </div>
  );
}

export default App;
