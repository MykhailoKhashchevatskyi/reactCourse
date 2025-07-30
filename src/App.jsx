import Examples from './components/Examples/Examples';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
