import './App.css';
import FormContent from './Components/FormContent';
import Navbar from './Components/Navbar';
import { Inputs } from './Components/inputs/Inputs';

function App() {
  return (
    <>
      <Navbar />
      <FormContent />
      <section className='section'>
        <Inputs />
        
      </section>
    </>
  );
}

export default App;
