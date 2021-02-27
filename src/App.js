import './App.css';
import Header from './componenets/header/Header';
import Mainbody from './componenets/mainbody/Mainbody';
import fakeData from './fakeData/fakeData.json';

function App() {
 
  let newfakeData = {fakeData}
  const myData = newfakeData.fakeData

  


  return (
    <div className="App">
     <Header></Header>
     <Mainbody data ={myData} > </Mainbody>
    </div>
  );
}

export default App;
