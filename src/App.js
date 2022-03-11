import './App.css';

import GuestManager from './Compoenents/GuestManager';
import Header from './Compoenents/GlobalAttributes/Header';
import Footer from './Compoenents/GlobalAttributes/Footer';
import EventSearch from './Compoenents/EventSearch';

function App() {
  return (
    <div className="App">

      <Header />
      
      <EventSearch />
    <hr/>
      <GuestManager/>

      <Footer />


    </div>
  );
}

export default App;
