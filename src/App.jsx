/* import logo from "./logo.svg"; */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";

/* POSSO IMPORTARE I SINGOLI ELEMENTI O TUTTI INSIEME -- SONO EQUIVALENTI  */

function App() {
    return (
        <div className="App">
            <TopBar
                title="Pizza Restaurant"
                subtitle="Non si servono coccinelle "
                link="https://www.tripadvisor.it/Restaurant_Review-g187791-d2088104-Reviews-La_Fontanina_da_Nicola-Rome_Lazio.html"
                location="#"
                Number="#"
                home="index.html"
            />
            <Home className="mt-5" fontsize_h2="fs-1" textSize="fs-5" />
        </div>
    );
}

export default App;
