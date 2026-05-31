import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked"+text);
        setText(text.toUpperCase());
        props.show("Coverted to UpperCase","Success");
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleLoClick = () =>{
        setText(text.toLowerCase());
         props.show("Coverted to LowerCase","Success");
    }
    const handleClearClick = () =>{
        setText("");
        props.show("Text Cleared","Success");
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.show("Copy to Clipboard","Success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.show("Extra Spaces Removed","Success");
    }
    const [text, setText] = useState("Enter text here");
return (
    <>
    <div className="container" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" style ={{backgroundColor: props.mode === 'dark' ? ' rgb(4, 39, 67)' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}rows="8"></textarea>
    </div>
    <div>
        <button className="btn btn-outline-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-outline-primary mx-3" onClick={handleLoClick}>Convert to LowerCase </button>
         <button className="btn btn-outline-primary mx-3" onClick={handleClearClick}>Clear Text </button>
         <button className="btn btn-outline-primary mx-3" onClick={handleCopy}>Copy Text </button>
          <button className="btn btn-outline-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
    </div>
  
    <div className="container my-3" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
    </div>
    </div>
    </>
);
}
