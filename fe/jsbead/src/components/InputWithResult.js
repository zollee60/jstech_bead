import React, {useContext} from 'react';
import { DataContext } from './DataProvider'

export default function InputWithResult({func,id}){
    const { encode } = useContext(DataContext);
    const { decode } = useContext(DataContext);
    const { stringNormal } = useContext(DataContext);
    const { stringBase64 } = useContext(DataContext);

    async function handleSend(){
        let string = document.getElementById(id).value;
        if(func === 'encode'){
           await encode(string);
        }else{
           await decode(string);
        }

    }

    return (
        <div>
            <input type="text" id={id}/>
            <button onClick={() => {handleSend()}}>{func === 'encode' ? 'Kódol' : 'Dekódol'}</button>
            {
            func === 'encode' ? 
            <p><b>Kódolt string: </b>{stringBase64}</p> : 
            <p><b>Dekódolt string: </b>{stringNormal}</p>
            }
        </div>
    )
}