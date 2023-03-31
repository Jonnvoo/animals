import {useState} from 'react';
function getRanAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random()* animals.length)]
}

function App (){
    const [count, setCount] = useState(0);
    const handleClick = () =>{
       setCount (count +4 );
    };
    return <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>Number of animals: {count}</div>
    </div>
}

export default App;