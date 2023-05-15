import "./App.css";
// import Nav from "./Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";
import whiskey from "./whiskey.jpg";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/dogs" element={<DogList dogs={props} />} />
                    {/* <Route path="/dogs/:name">
                        <DogDetails /> // what props will this need?
                    </Route> */}
                    <Route
                        path="/dogs/:dog"
                        element={<DogDetails dogs={props} />}
                    />
                    <Route path="*" element={<Navigate to="/dogs" replace />} />
                </Routes>
            </Router>
        </div>
    );
}

App.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!",
            ],
        },
        {
            name: "Duke",
            age: 3,
            src: duke,
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs.",
            ],
        },
        {
            name: "Perry",
            age: 4,
            src: perry,
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain.",
            ],
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore.",
            ],
        },
    ],
};

export default App;
