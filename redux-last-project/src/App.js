import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Fragment} from "react";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import {Provider} from "react-redux";
import store from "./store/store";
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
import FoodFind from "./components/food/FoodFind";
import SeoulList from "./components/seoul/SeoulList";
import NewsList from "./components/news/NewsList";
import BoardList from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardDelete from "./components/board/BoardDelete";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path={"/food/list"} element={<FoodList/>}/>
                    <Route path={"/food/detail/:fno"} element={<FoodDetail/>}/>
                    <Route path={"/food/find"} element={<FoodFind/>}/>
                    <Route path={"/seoul/location"} element={<SeoulList/>}/>
                    <Route path={"/news/list"} element={<NewsList/>}/>
                    <Route path={"/board/list"} element={<BoardList/>}/>
                    <Route path={"/board/insert"} element={<BoardInsert/>}/>
                    <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                    <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
