import { observable } from "mobx";
import { render, cleanup, map } from "mobx-jsx";
import State from "./state";

function App() {
  const state = observable({ counter: 0 }),
    timer = setInterval(() => {
      State.list = [...State.list, (state.counter++)]
      // State.list.unshift(state.counter);

    }, 1000);
  cleanup(() => clearInterval(timer));

  return <div><span>{state.counter}</span>
    <ul>{map(State.list, (d) => <li>{Math.random() + "" + d}</li>)}</ul>
  </div>;
}

render(App, document.getElementById("app"));
