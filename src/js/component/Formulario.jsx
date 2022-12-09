import React from "react"

const Formulario = (props) => {
    return <div>
        <input
            type="text"
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.actualizarTarea(e.target.value)}
        />
        <button onClick={props.onClick}>{props.text}</button>
    </div>
}

export default Formulario