import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Button from './components/Button';
import data from './data/data.json'

function App() {
  const companyData = [...data];
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <Header />
      <div className='container'>
      <Card />
      <Button>
        Load More
      </Button>
      </div>
    </div>
  );
}

export default App;
