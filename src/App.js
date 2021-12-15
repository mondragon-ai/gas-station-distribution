import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import * as Screens from './Screens/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact="/" element={<Screens.Home />} />
        <Route path="signin" element={<Screens.SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
