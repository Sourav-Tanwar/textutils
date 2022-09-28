import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpClick=()=>{
        let newState = text.toUpperCase();
        setText(newState)
        props.showAlert('Convertd to Uppercase','success')
    }

    const handleLoClick=()=>{
        let newState = text.toLocaleLowerCase();
        setText(newState)
        props.showAlert('Convertd to Lowercase','success')
    }

    const handleOnchange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("")
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode==='dark'?'grey':'white', 
                       color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and  {text.length}  Character </p>
            <p>{0.008* text.length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}
