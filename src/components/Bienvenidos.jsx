import { useState } from 'react'
import data from '../../auto_setting.js'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>LOGIN</h1>
      <ul>
        <li>
          <a href={`http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}/Bienvenidos/google`}>Google</a>
        </li>
        <li>
          <a href={`http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}/Bienvenidosfacebook`}>Facebook</a>
        </li>
        <li>
          <a href={`http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}/Bienvenidos/twitter`}>Twitter</a>
        </li>
        <li>
          <a href={`http://${data.SERVER_BACK.host}:${data.SERVER_BACK.port}/login`}>Discord</a>
        </li>
      </ul>
    </>
  )
};

export default App
