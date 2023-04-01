import './App.css';
import {useState} from 'react';
import AnimaShow from './AnimalShow';
function getRanAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random()* animals.length)]
}


function App (){
    const [animals, setAnimals] = useState([]);

    const handleClick = () =>{
     setAnimals([...animals, getRanAnimal()])
    };

    const renderedAnimals = animals.map((animal, index)=> {
        return <AnimaShow type={animal} key={index}/>
    }) 
    return(
        <div className='app'>
        <button onClick={handleClick}>Add Animal</button>
        <div className='animal-list'>{renderedAnimals}</div>
    </div>
) 
}

export default App;