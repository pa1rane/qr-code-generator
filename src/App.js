import React, { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

const App = () => {

  const [input, setInput] = useState("")

  return (
    <div style={{}}>
      <h2>Qr Code Generator</h2>
      <form action="submit">
        <input type="text" />
        <br />
        <input type='submit' />
      </form>
      <br />
      <QRCodeSVG value="pavan"/>
    </div>
  )
}

export default App

