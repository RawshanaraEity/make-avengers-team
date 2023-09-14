/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';



const Home = () => {
    // to keep fetch data in a state
    const [allActors, setAllActors] = useState([])
    // to keep onclick handler data in a array in a state
    const [selectedActors, setSelectedActors] = useState([])
    // to keep total cost in s state
    const [totalCost, setTotalCost] = useState(0)
    // to keep remainnig cost
    const [remainnig, setRemainning] = useState(0)


    useEffect(() =>{
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[])
// console.log(allActors)

const handleSelectActor = (actor) => {
    const isExist = selectedActors.find(item => item.id === actor.id);

    let count = actor.salary;
    if(isExist){
       return alert(`${isExist.name} Already Booked`)
    }
    else{
        selectedActors.forEach(item => {
            count = count + item.salary
        })
        const totalRemaining = 20000 - count;
        setTotalCost(count);
        if(count > 20000){
          return alert('You have not enough amount')
        }
        setRemainning(totalRemaining)
        const newSelectedActors = [...selectedActors, actor];
        setSelectedActors(newSelectedActors)
    }
//    console.log(count)
    
    // console.log(selectedActors)
    
}


    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                {
                    allActors.map((actor) => (
                        <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repellendus!</small></p>
                    <div className="info">
                        <p>Salary: $ {actor.salary}</p>
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                </div>
                    ) )
                }
                </div>
                <div className="cart">
                    <Cart 
                    selectedActors = {selectedActors}
                    totalCost={totalCost}
                    remainning={remainnig}
                     ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;