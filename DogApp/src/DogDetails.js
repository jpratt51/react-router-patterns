import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function DogDetails(dogs) {
    const { dog } = useParams();
    const allDogs = dogs.dogs.dogs;
    const navigate = useNavigate();
    let selectDog;
    allDogs.map((doggy) => {
        if (doggy.name.indexOf(dog) !== -1) {
            selectDog = doggy;
        }
    });
    if (!selectDog) {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Dog details.</h1>
            <p>Name: {selectDog.name}</p>
            <img src={selectDog.src} alt={selectDog.name} />
            <p>Facts:</p>
            <ul>
                {selectDog.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogDetails;
