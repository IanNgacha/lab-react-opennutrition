import React, { useState, useEffect } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row } from 'antd';
import 'antd/dist/reset.css'; 
import './App.css';

function App() {
  const [foodList, setFoodList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFoodList(foods);
  }, []);

  const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addFood = (newFood) => {
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
  };

  const deleteFood = (foodName) => {
    setFoodList((prevFoodList) => prevFoodList.filter((food) => food.name !== foodName));
  };


  return (
    <div className="App">
      <h1>Food List</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddFoodForm addFood={addFood} />
      <Row gutter={[16, 16]}>
        {filteredFoods.map((food) => (
          <FoodBox key={food.name} food={food} deleteFood={deleteFood}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
