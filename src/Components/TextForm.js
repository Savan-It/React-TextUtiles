import React, { useState } from 'react'

export default function TextForm(props) {
    const UpperCase = () => {
        let selectedText = getSelection().toString();

        if(selectedText && selectedText.toString){
            setText((prevText) => prevText.replace(selectedText, selectedText.toUpperCase()));
        }
        else{
            let newText = text.toUpperCase()
            setText(newText);
        }

        props.showAlert('success', 'Your text converted into UpperCase');

    }

    const LowerCase = () => {
        let selectedText = getSelection().toString();
        
        if(selectedText && selectedText.toString){
            setText((prevText) => prevText.replace(selectedText, selectedText.toLowerCase()));
        }
        else{
        let newText = text.toLowerCase();
        setText(newText)
        }
        props.showAlert('success', 'Your text converted into LowerCase');

    }
    const RemoveSpace = () => {
        let selectedText = getSelection().toString();

        if(selectedText && selectedText.toString){
            setText((prevText) => prevText.replace(selectedText, selectedText.replace(/\s\s+/g, ' ')));
        }
        else{
        let newText = text.replace(/\s\s+/g, ' ');
        setText(newText)
        }
        props.showAlert('success', 'Remove Extra spaces from your text');

    }
    const ClearText = () => {
        let selectedText = getSelection().toString();

        if(selectedText && selectedText.toString){
            setText((prevText) => prevText.replace(selectedText, selectedText=''));
        }
        else{
        let newText = '';
        setText(newText)
        }
        props.showAlert('success', 'clear all text');

    }
    const CopyText = () => {
    
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Copy your text');

    }

    const handleOnchage = (event) => {
        setText(event.target.value)
    }

    const preview = () => {
        document.getElementById('card').classList.toggle('d-none')
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-9">
                        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h3>
                        <div className="my-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnchage} rows="5"
                                style={{ backgroundColor: props.mode === 'dark' ? "#1f2937" : 'white', color: props.mode === 'dark' ? "white" : 'black', border: 'none' }}></textarea>
                        </div>
                        <div className="row ">
                            <div className="col-auto">
                                <button disabled={text.length === 0} className="btn btn-primary btn-sm" onClick={UpperCase}>UpperCase</button>
                            </div>
                            <div className="col-auto">
                                <button disabled={text.length === 0} className="btn btn-primary btn-sm" onClick={LowerCase}>LowerCase</button>
                            </div>
                            <div className="col-auto">
                                <button disabled={text.length === 0} className="btn btn-primary btn-sm" onClick={RemoveSpace}>Remove Extra Spaces</button>
                            </div>
                            <div className="col-auto">
                                <button disabled={text.length === 0} className="btn btn-primary btn-sm" onClick={CopyText}>Copy Text</button>
                            </div>
                            <div className="col-auto">
                                <button disabled={text.length === 0} className="btn btn-primary btn-sm" onClick={ClearText}>Clear</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h3 className='text-center'> Text Summary</h3>
                        <div className="row justify-content-center">
                            <div className="col-auto text-center">
                                <div className="row mt-3">
                                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} : <b>Word</b></p>
                                </div>
                                <div className="row">
                                    <p>{text.length} : <b>Character</b></p>
                                </div>
                                <div className="row">
                                    <p>{(0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)).toFixed(3)} : <b>Minutes to read</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <hr style={{ color: props.mode === 'dark' ? "white" : 'black' }} />
                <div className="row ">
                    <div className="col-auto">
                        <button className="btn btn-primary btn-sm" onClick={preview}>Preview</button>
                    </div>
                    <div className="row mt-3">
                        <div className="card d-none" id="card"
                            style={{ backgroundColor: props.mode === 'dark' ? "#1f2937" : 'white', color: props.mode === 'dark' ? "white" : 'black' }}>
                            <div className="card-body">
                                <p className="card-text">{text === '' ? 'Nothing to Preview' : text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
