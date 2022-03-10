import './App.css';

import GuestManager from './Compoenents/GuestManager';
import Header from './Compoenents/GlobalAttributes/Header';
import Footer from './Compoenents/GlobalAttributes/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <GuestManager/>

      <Footer />
    </div>
  );
}

export default App;
