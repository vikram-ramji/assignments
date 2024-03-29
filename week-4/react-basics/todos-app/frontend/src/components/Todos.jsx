
export function Todos({ todos }) {
    return <div>
        {todos.map((todo, index) => {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {
                    fetch("http://localhost:3000/completed", {
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        .then(async (res) => {
                            const json = await res.json();
                            alert("Todo completed")
                        })
                }}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}