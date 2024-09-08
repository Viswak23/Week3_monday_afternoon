import TourList from "./TourList";
import { tour } from "./toursData";
import "./App.css";

function App() {
  return (
    <main>
      <TourList tours={tour} />
    </main>
  );
}

export default App;
