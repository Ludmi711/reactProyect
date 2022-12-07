import { useState, useEffect } from "react"

const notes = [
    {
        id: '1',
        titulo: 'Producto',
    },
    {
        id: '2',
        titulo: 'Producto',
    },
]

const getNotes = () => {
    return notes
}

const notesContainer = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
            .then(response => {
                setNotes(reponse)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])


    return (
        <div>
            <h1>Tienda online</h1>
            {notes.map(note => (
                <div key={note.id}>
                    <h2 > {note.titulo}</h2>
                </div>))}
        </div>
    )
}


export default notesContainer