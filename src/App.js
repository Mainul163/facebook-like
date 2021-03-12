
import './App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

function App() {
  const redColor={
    color:'red'
  }

  const blueColor={
    color:'blue'
  }
  const [change,setChange]=useState(redColor)

  const handleLike= ()=>{
   let finalColor= change.color===redColor.color? blueColor: redColor
   setChange(finalColor)

  }
  
  const[likecolor,setColor]=useState("")
  const addlike= ()=>{
    const color=likecolor ? "" : "primary"
    setColor(color)
  }


  return (
    <div className="App">
      <ThumbUpIcon onClick={handleLike}  style={change}></ThumbUpIcon>
      <br/>
      <ThumbUpIcon onClick={ addlike} color={likecolor}></ThumbUpIcon>



     </div>
  );
}

export default App;
