import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(null)
    const [formData, setFormData] = useState({ first: "", name: "", email: "", phone: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editId) {
            const newTodos = todos.map((todo) => todo.id === editId ? { ...todo, ...formData } : todo)
            setTodos(newTodos)
            setFormData({ first: "", name: "", email: "", phone: "" })
            setEditId(null)

        } else {
            const formdata = {
                id: Date.now(),
                first: formData.first,
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            }

            const newTodo = [...todos, formdata]

            setTodos(newTodo)

            setFormData({ first: "", name: "", email: "", phone: "" })

        }


    }


    const handleEdit = (id, todo) => {
        setEditId(id)
        setFormData(todo)
    }
    return (
        <div>
            <h1>Todo</h1>
            <form className='flex  flex-col gap-4' onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='first' value={formData.first} />
                <input onChange={handleChange} type="text" name='name' value={formData.name} />
                <input onChange={handleChange} type="text" name='email' value={formData.email} />
                <input onChange={handleChange} type="text" name='phone' value={formData.phone} />
                <button >{editId ? "Update Todo" : "Add Todo"}</button>
            </form>

            <div>
                {
                    todos?.map((todo) => {
                        return <div key={todo.id} className='flex justify-between items-center'>
                            <p>{todo.first}</p>
                            <p>{todo.name}</p>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button onClick={() => handleEdit(todo.id, todo)}>Edit</button>
                        </div>
                    })
                }
            </div>

        </div>
    )

}
export default Todo
