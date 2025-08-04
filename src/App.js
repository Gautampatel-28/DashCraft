import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          {/* <div className="others">other pages</div> */}
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
