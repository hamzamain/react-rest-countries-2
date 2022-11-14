import "./App.css";
import Article from "./components/Article/Article";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Article></Article>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

/* 
const LoadCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 style={{ color: "lightslategrey" }}>
        Visiting Every Country of the World !!!
      </h1>
      <h2>{countries.length}</h2>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          capital={country.capital}
          flag={country.flags.png}
        ></Country>
      ))}
    </div>
  );
};

function Country(props) {
  return (
    <div className="country">
      <h3>Name: {props.name}</h3>
      <p>Capital: {props.capital}</p>
      <img src={props.flag} alt="" />
    </div>
  );
}
 */
export default App;
