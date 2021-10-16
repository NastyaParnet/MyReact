import "./styles/App.css"
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";


function App() {
  return (
    <div className="App">
      <ClassCounter />
      <PostItem value={{id:1, name:"New file", comments:"No comments"}}/>
    </div>
  );
}

export default App;