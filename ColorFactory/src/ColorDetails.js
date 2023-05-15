import React from "react";
import { useParams, useLocation, Navigate, Link } from "react-router-dom";

function ColorDetails() {
    const { color } = useParams();
    const location = useLocation();
    let colors, userColor;
    try {
        colors = location.state.colors;
        userColor = colors.filter((c) => c.name === color);
        if (userColor[0].value === "") {
            document.body.style.color = "white";
            userColor[0].value = "#000000";
        }
        document.body.style.backgroundColor = userColor[0].value;
        return (
            <div>
                <h1>WOW! {userColor[0].name}</h1>
                <Link to="/colors" state={{ colors }}>
                    Go Back
                </Link>
            </div>
        );
    } catch {
        return <Navigate to="/colors" replace />;
    }
}

export default ColorDetails;
