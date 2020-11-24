import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"







function Card(props) {

    return <div className="card-d">

        <img src={props.img} alt="test-img" />
        <h2>{props.name}</h2>
        <p>{props.phone}</p>
    </div>


}



ReactDOM.render(
    <div>

<App />
        


       






    </div>,

    document.getElementById("root")


)

