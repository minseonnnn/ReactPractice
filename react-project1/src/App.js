import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [foodList, setFoodList] = useState([]);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    const config = {
      params: {
        page: curPage
      }
    };

    axios.get('http://localhost:8080/web/food/list_vue.do', config)
        .then(res => {
          setFoodList(res.data.list);
        })
        .catch(err => {
          console.log(err);
        });
  }, [curPage]);

  const handleNextPage = () => {
    setCurPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (curPage > 1) {
      setCurPage(prevPage => prevPage - 1);
    }
  };

  const html = foodList.map((food) => (
      <div className="col-md-4" key={food.id}>
        <div className="thumbnail">
          <a href="#">
            <img src={'http://menupan.com' + food.poster} alt="Lights" style={{ width: '100%' }} />
            <div className="caption">
              <p>{food.name}</p>
            </div>
          </a>
        </div>
      </div>
  ));

  return (
      <div className="container">
        <div className="row">
          {html}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={curPage === 1}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
  );
}

export default App;
