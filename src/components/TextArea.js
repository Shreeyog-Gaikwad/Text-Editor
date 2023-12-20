import React, {useState} from 'react'

export default function TextArea(props) {

    const [text, setText] = useState("Write your Text here....");

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to Uppercase.", "primary");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase.", "primary");
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied successfully.", "success");
    }

    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces has been removed.", "primary");
    }

    const handleClearClick = () =>{
        setText("");
        props.showAlert("Text has been cleared.", "danger");
    }

    const handleOnChange =(e) =>{
        setText(e.target.value)
    }

    const wordcount = () =>{
        let words = text;
        let wordsTrim = words.replace(/\s+/g, " ").trim();
        let splitwords = wordsTrim.split(" ");

        let noOfWords = splitwords.length;
        if(splitwords[0] === "")
        {
            noOfWords = 0;
        }

        return noOfWords;
    }
    

    return (
    <>
    <div className='container' style={{color : props.mode==='light'?'white':'black'}}>
        <h1>Enter the Text Below </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="10" style={{backgroundColor : props.mode==='dark'?'white':'#1e1e1e',color : props.mode==='light'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Change to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Change to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-5' style={{color : props.mode==='light'?'white':'black'}}>
            <h2>Your Text Summary...</h2>
            <p>{wordcount()} words and {text.length} characters</p>
            <p>{0.008 * wordcount()} Minutes to read.</p>
        </div>
    </>
  )
}
