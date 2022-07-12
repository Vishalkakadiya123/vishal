import logo from './logo.svg';
import './App.css';
import Card from './componets/Card';
import { useEffect, useState } from 'react';
const axios = require('axios');


function App() {

const [char,setchar] = useState([])

useEffect (()=>{
  axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    // handle success
    setchar(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[])


  return (
    <>
        {
          char.map((item,i)=>{
            
            return(
              <div className="container" key={i}>
                <div className="row">
                    <div className="col-6 main_card g-1">
                        <div className="card_1 d-flex">
                            <div className="image_1">
                                <img src={item.image}></img>
                            </div>
                            <div className="info_card">
                                <div className="first">
                                    <a href=""><h2>{item.name}</h2></a>
                                    <p>{item.status}-{item.species}</p>
                                </div>
                                <div className="second">
                                    <a href="">Last Known Location</a>
                                    <p>{[item.name]}</p>
                                </div>
                                <div className="third">
                                    <a href="">First seen in:</a>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            )

          })
        }
    </>
  );
}

export default App;
