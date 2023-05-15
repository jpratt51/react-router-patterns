import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/colors" element={<ColorList />} />
                    <Route path="/colors/:color" element={<ColorDetails />} />
                    <Route
                        path="*"
                        element={<Navigate to="/colors" replace />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
