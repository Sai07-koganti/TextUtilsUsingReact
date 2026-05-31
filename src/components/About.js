import React,{useState} from 'react'



export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [myBtn,setMyBtn] = useState("Enable Dark Mode");
    const toggleStyle = () =>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setMyBtn("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })
            setMyBtn("Enable Dark Mode");
        }
    }
  return (
    <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>
        <p>This is a text utility app which can be used to analyze your text in various ways. You can convert your text to uppercase, lowercase and also clear the text.</p>
      <div className="container my-3">  
     <button className="btn btn-outline-primary" onClick={toggleStyle}>{myBtn}</button>
     </div>
    </div>
  )
}
