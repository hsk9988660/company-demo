// import logo from './logo.svg';
import './App.css';
import Customer from './components/customer';
import Appointments from './components/appointments';
import Calender from './components/calender';
import Graphharts from './components/graphChart';
import Header from './components/header';
import RevenuesCards from './components/revenueCards';
import TopProducts from './components/topProducts';

function App() {
  return (
    <div className="App ml-16 mr-16">
      <Header/>
      <Customer/>
      <RevenuesCards/>
      <Graphharts/>
      <Calender/>
      <TopProducts/>
      <Appointments/>
    </div>
  );
}

export default App;
