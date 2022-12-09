import React, { useState } from "react";
import Formulario from "./Formulario.jsx"

//include images into your bundle

const ListaTarea = (props) => {
	return <div>
		{props.tareas.map((tarea) => {
            console.log({ tarea })
            return <div>
                {tarea.texto}
                <button onClick={() => props.removerTarea(tarea.id)}>x</button>
            </div>
        })}
	</div>
}

//create your first component
const Home = () => {
    const [contador, actualizarContador] = useState(1)
    const [tarea, actualizarTarea] = useState("")
    const [tareas, actualizarTareas] = useState([])

    const onClick = () => {
        const auxTareas = [...tareas]
        auxTareas.push({
            id: contador,
            texto: tarea,
        })
        actualizarTareas(auxTareas)
        actualizarContador(contador + 1)
        actualizarTarea("")
    }

    const removerTarea = (id) => {
        const resultado = tareas.filter((tarea) => tarea.id !== id)
        actualizarTareas(resultado)
    }

    return <div>
        <Formulario
            value={tarea}
            actualizarTarea={actualizarTarea}
            placeholder="Ingrese texto"
            text="Oprimir"
            onClick={onClick}
        />
        <ListaTarea tareas={tareas} removerTarea={removerTarea} />
    </div>
}

export default Home;
