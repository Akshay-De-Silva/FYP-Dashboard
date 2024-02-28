import "./App.css";
import { Metric } from "./components/Metric";

function App() {
  const imageMap: { [key: string]: string } = {
    BATI: "images/BATI.jpg",
    BRMSETI: "images/BRMSETI.jpg",
    RAF1_CPU: "images/RAF1_CPU.jpg",
    RAF1_GPU: "images/RAF1_GPU.jpg",
    RAF1_RAM: "images/RAF1_RAM.jpg",
    RARS_CPU: "images/RARS_CPU.jpg",
    RARS_GPU: "images/RARS_GPU.jpg",
    RARS_RAM: "images/RARS_RAM.jpg",
    F1CI: "images/F1CI.jpg",
    RMSPECI: "images/RMSPECI.jpg",
  };

  return (
    <div className="App">
      <Metric
        name="Balanced Accuracy-Time Index"
        formulaImage={imageMap["BATI"]}
        result={0.8}
      />
      <Metric
        name="Balanced RMSE-Time Index"
        formulaImage={imageMap["BRMSETI"]}
        result={0.9}
      />
    </div>
  );
}

export default App;
