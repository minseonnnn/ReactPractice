import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import {Fragment} from "react";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import FoodFind from "./components/food/FoodFind";
import FoodDetail from "./components/food/FoodDetail";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/food/find"} element={<FoodFind/>}/>
          <Route path={"/food/detail/:fno"} element={<FoodDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
