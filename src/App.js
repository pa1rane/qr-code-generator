import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

const App = () => {

  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  console.log(input)
  console.log(qrCode)

  return (
    <div style={{}}>
      <h2>Qr Code Generator</h2>
      <form action="submit">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <br />
        <input type='submit' onClick={() => setQrCode(input)}/>
      </form>
      <br />
      <QRCodeSVG value={qrCode}/>
    </div>
  )
}

export default App

