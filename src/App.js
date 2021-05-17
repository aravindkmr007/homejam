import './App.css';
import Row from './Compoents/Row';
import './App.css'
import Banner from './Compoents/Banner';
import Nav from './Compoents/Nav';
import ProgressBar from './Compoents/ProgressBar';
import RowForReviews from './Compoents/RowForReviews';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner  />
      <div className="banner_Progress ">
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>
      
       <Row /> 
     <RowForReviews /> 
    </div>
  );
}

export default App;
