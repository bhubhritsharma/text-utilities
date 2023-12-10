import React, {useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');
    
    const uppercase = (e) => {
        e.preventDefault()
        var newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to UpperCase!', 'success');
    }

    const lowercase = (e) => {
        e.preventDefault()
        var newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to LowerCase!', 'success');
    }

    const capitalize = (e) => {
        e.preventDefault()
        var newtext = text[0].toUpperCase() + text.slice(1).toLowerCase();
        setText(newtext);
        props.showAlert('Capitalized!', 'success');
    }

    const copyOnClick = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(text);
        props.showAlert('Copied!', 'success');
    }
    
    const clearOnClick = (e) => {
        e.preventDefault()
        setText("");
        props.showAlert('Textbox is empty!', 'success');
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <form>
                <h4 style={props.myStyle}>{props.heading}</h4>
                <textarea type="email" value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="10" style={props.myStyle} />
                <button className='btn mx-1 mt-3' onClick={uppercase} style={props.myStyle}>Uppercase</button>
                <button className='btn mx-1 mt-3' onClick={lowercase} style={props.myStyle}>Lowercase</button>
                <button className='btn mx-1 mt-3' onClick={capitalize} style={props.myStyle}>Capitalise</button>
                <button className='btn mx-1 mt-3' onClick={copyOnClick} style={props.myStyle}>Copy</button>
                <button className='btn mx-1 mt-3' onClick={clearOnClick} style={props.myStyle}>Clear</button>
            </form>
            <h4 className='mt-5' style={props.myStyle}>Text Summary</h4>
            <p style={props.myStyle}>The above text contains <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters.</p>
            <div className='view-text' style={props.myStyle}>
                <p style={props.myStyle}>{text.length>0 ? text : 'Enter something in the textbox above to preview it here...'}</p>
            </div>
        </>
    )
}
