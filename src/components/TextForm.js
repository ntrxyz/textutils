import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        // console.log("Lowercase was clicked"+text);
        let newText=text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick=()=>{
        // console.log("Clearcase was clicked"+text);
        let newText="";

        setText(newText)
        props.showAlert("Cleared text","success");
    }
    // const handleCopy=()=>{
    //     console.log("I am copy");
    //     var text=document.getElementById("myBox");
    //     text.select();
        
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("Copied to clipboard","success");
    // }
  
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
    
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text="new text" =>wrong way to update text
    //setText("newtext"); => correct way

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
        
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
    {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button> */}
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.08*text.split(" ").length } mintutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
 // we use onschange because we are using state variables to make changes when event occurs in the variable