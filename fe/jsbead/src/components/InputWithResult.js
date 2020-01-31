import React, {useContext, useState, useRef, useEffect} from 'react';
import { DataContext } from './DataProvider'

export default function InputWithResult({func,id}){
    const { encode, decode, stringNormal, stringBase64 } = useContext(DataContext);
    const [inputString, setInputString] = useState('');
    const input = useRef();

    useEffect(() => {
        if(func === 'encode'){
            encode(inputString);
         }else{
            decode(inputString);
         } 
    })

    function handleSend(){
        setInputString(input.current.value);   
    }

    return (
        <div>
            <input type="text" id={id} ref={input} />
            <button onClick={() => {handleSend()}}>{func === 'encode' ? 'Kódol' : 'Dekódol'}</button>
            {
            func === 'encode' ? 
            <p><b>Kódolt string: </b>{stringBase64}</p> : 
            <p><b>Dekódolt string: </b>{stringNormal}</p>
            }
        </div>
    )
}