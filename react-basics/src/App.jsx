import Profilecard from "./components/Profilecard";
import girlImage from './assets/girl.jpg';

function App() {
  return (
    <div>
      <Profilecard 
      name = "Aarya Sharma"
      image={girlImage}
      bio = "Aarya is a creative and curious girl who loves coding, sketching, and exploring new places. "/>
    </div>
  );
}

export default App;
