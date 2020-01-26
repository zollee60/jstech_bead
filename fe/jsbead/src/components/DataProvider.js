import React, { useState } from 'react';

export const DataContext = React.createContext(null);

export default function DataProvider({children}) {
    const [stringNormal, setSN] = useState("");
    const [stringBase64, setSB] = useState("");

    async function encode(string) {
        const data = {stringToEncode: string};
        await fetch('http://localhost:3000/encode', {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(data => setSB(data));
        
    }

    async function decode(string) {
        const data = {stringToDecode: string}
        await fetch('http://localhost:3000/decode', {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(data => setSN(data));
    }
    
    const context = {
        stringNormal,
        stringBase64,
        encode,
        decode
    };

    return (
        <DataContext.Provider value={context}>
            { children }
        </DataContext.Provider>
    )
    
}
