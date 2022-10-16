import PlayerProfile from "../../components/PlayerProfile";
import { useRouter } from "next/router";

function App() {
  const router = useRouter()
  if(!router.query.name){
    return
  }
  return (
    <div className="App">
      <PlayerProfile name={router.query.name}/>
    </div>
  );
}

export default App;