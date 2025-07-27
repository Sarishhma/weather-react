import Todo from "./MyComponent/Todo";
import './App.css';
import Add from "./MyComponent/Add";

function App() {
  let todo = [
    {
      sno:1,
      Title:"bath",
      desc:"have to go take a bath",
    },
   {
      sno:2,
      Title:"eat",
      desc:"have to go eat",
   },
   {
      sno:3,
      Title:"sleep",
      desc:"have to go sleep",
   }
  ]
  return (
   <>
   <Todo todo={todo}/>
   <Add add={add}/>
   </>
  );
}

export default App;
