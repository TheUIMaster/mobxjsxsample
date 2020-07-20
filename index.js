import { observable } from "mobx";
import { render, cleanup, map } from "mobx-jsx";
import State from "./state";
import Test from "./Test";

function App() {
  const state = observable({ counter: 0 }),
    timer = setInterval(() => {
      State.list.push(state.counter++);
      // State.list.unshift(state.counter);
    }, 1000);
  cleanup(() => clearInterval(timer));

  return (
    <div>
      {State.list.map((d) => (
        <div>{d < 5 && <Test count={d}></Test>}</div>
      ))}
      {/* <div>{State.list.length}</div> */}
    </div>
  );
}

render(App, document.getElementById("app"));
