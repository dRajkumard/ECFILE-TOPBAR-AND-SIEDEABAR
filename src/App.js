import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topcontainer/Topbar';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  return (
    <div className="App">
     <Topbar/>
     <Sidebar/>
    </div>
  );
}

export default App;
