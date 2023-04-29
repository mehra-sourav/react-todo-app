import AppStyle from "./styles/App.module.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className={AppStyle.App}>
      <Todo />
    </div>
  );
}

export default App;
