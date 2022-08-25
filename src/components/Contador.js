import { useState } from "react"


const Contador = () => {
    const [count, setCount] = useState(0)
    const [info, setInfo] = useState(
        {
            name:"Enano",
            age: 29
        }  
    )

    const [loading, setLoading] = useState(false)
    const stringLoading = loading.toString()

    const [animals, setAnimals] = useState(["Raccoon"])

    const zoo = ["Dog", "Monkey", "Owl", "Kangaroo", "Panda"]

    const loadingChanger = () =>{
        setLoading(!loading)
        console.log(loading);
    }
    const increase = () => {
        console.log("Adding a Tuki");
        setCount(count + 1);
    };

    const decrease = () => {
        console.log("Deccounting a Tuki");
        setCount(count - 1);
    }


    console.log(info);
    const infoChanger = () =>{
        setInfo({...info, name: "Enzo", lastName: "Marchesi"})
        console.log(info);
    }

    const animalsHandler = () =>{
        setAnimals([...animals.concat(zoo)])
        
        
    }
    console.log(animals);
    return(
        <div>
            <h1> Tuki´s Counter</h1>
            <p>Tuki´s : {count}</p>

            <button onClick={increase}> Add a Tuki =)</button>
            <button onClick={decrease}> Remove a Tuki =(</button>

            <h2>Info</h2>
            <h3>Name: {info.name}</h3>
            <h3>Age: {info.age}</h3>
            <button onClick={infoChanger}> Change Info</button>

            <h2>Loader</h2>
            <p>{stringLoading}</p>
            <button onClick={loadingChanger}> Change Loading</button>

            <h2>Animals</h2>
            <button onClick={animalsHandler} > Add Animals</button>
            <ul>
                {animals.map(animal =>{
                    return <li>{animal}</li>
                })}
            </ul>
        </div>
    );
}

export default Contador