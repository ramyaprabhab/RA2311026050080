import { useEffect} from "react";
import {Container} from "@mui/materials";
function App(){

  useEffect(()=>{
    fetch("http://20.244.56.144/evaluation-service/notifications")
    
  }
  )
  return (
    <div>
      AfforMed
    </div>
  )

}
export default App