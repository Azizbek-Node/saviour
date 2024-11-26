import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  let hover = "hover:bg-green-700:text-white";
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
