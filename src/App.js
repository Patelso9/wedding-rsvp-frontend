import './App.css';
import Events from './EventPage/Events';
import EventCard from './EventPage/EventCard';
import Footer from './GlobalAttributes/Footer';
import Header from './GlobalAttributes/Header';

function App() {
  return (
    <div className="App">

      <Header />
      
      <Events />

      <EventCard />
      <EventCard />
      <EventCard />

      <Footer />

    </div>
  );
}

export default App;
