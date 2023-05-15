import { React, useState } from "react";
import { Link } from "react-router-dom";
import NewColorForm from "./NewColorForm";

function ColorList() {
    const INITIAL_STATE = [
        { name: "red", value: "#ff0000" },
        { name: "orange", value: "#ffa500" },
        { name: "yellow", value: "#FFFF00" },
        { name: "green", value: "#008000" },
        { name: "blue", value: "#0000ff" },
        { name: "indigo", value: "#4b0082" },
        { name: "violet", value: "#ee82ee" },
    ];
    let currentState;
    if (!localStorage.getItem("colors")) {
        currentState = INITIAL_STATE;
    } else {
        currentState = JSON.parse(localStorage.getItem("colors"));
    }
    const [colors, setColors] = useState(currentState);

    const addColor = (newColor) => {
        if (!localStorage.getItem("colors")) {
            colors.push({ name: newColor.name, value: newColor.value });
            localStorage.setItem("colors", JSON.stringify(colors));
            let newColors = JSON.parse(localStorage.getItem("colors"));
            setColors(newColors);
        } else {
            let storedColors = JSON.parse(localStorage.getItem("colors"));
            storedColors.push({ name: newColor.name, value: newColor.value });
            localStorage.setItem("colors", JSON.stringify(storedColors));
            let newColors = JSON.parse(localStorage.getItem("colors"));
            setColors(newColors);
        }
    };

    document.body.style.color = null;
    document.body.style.backgroundColor = null;
    return (
        <div>
            <h4>Welcome to the color factory!</h4>
            <h1>Add a color</h1>
            <NewColorForm addColor={addColor} />
            {colors.map((color) => (
                <li key={color.name}>
                    <Link to={`/colors/${color.name}`} state={{ colors }}>
                        {color.name}
                    </Link>
                </li>
            ))}
        </div>
    );
}

export default ColorList;
