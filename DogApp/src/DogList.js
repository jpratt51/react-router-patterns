import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div>
            <h1>This is the doglist page.</h1>
            <h4>Welcome to the site!</h4>
            <p>
                Click on links below to view more information about a given dog.
            </p>
            {dogs.dogs.map((dog) => (
                <li key={dog.name}>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </li>
            ))}
        </div>
    );
}

export default DogList;
