import {Route, Routes} from "react-router"
import Home from "./pages/Home/Home.jsx";
import MonthStatisctics from "./pages/MonthStatisctics/MonthStatisctics.jsx";
import Header from "./UI/Header/Header.jsx";

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/month-statistics" exact element={<MonthStatisctics/>}/>
      </Routes>
    </div>
  );
}

export default App;
