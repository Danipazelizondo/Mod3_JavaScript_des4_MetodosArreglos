const listaDeTareas = document.querySelector("#listaTareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const totalTareas = document.querySelector("#total");
const tareasRealizadas = document.querySelector("#realizadas");

let tareas = [
    {
        id: Date.now(),
        descripcion: "Hacer el mercado",
        realizada: true
    },
    {
        id: Date.now() + 1,
        descripcion: "Estudiar para la prueba",
        realizada: false
    },
    {
        id: Date.now() + 2,
        descripcion: "Sacar a pasear a Tobby",
        realizada: false
    }
];

function renderTareas() {
    let html = "";
    for (let tarea of tareas) {
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>
                <td>
                    <input type="checkbox" onchange="marcarRealizada(${tarea.id})" ${tarea.realizada ? "checked" : ""}>
                </td>
                <td>${tarea.realizada ? "realizado" : ""}</td>
                <td>
                    <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                </td>
            </tr>
        `;
    }
listaDeTareas.innerHTML = html;
actualizarContador();
}

btnAgregar.addEventListener("click", () => {
    const textoTarea = tareaInput.value.trim();

    if (textoTarea !== "") {
        
        const nuevaTarea = {
        id: Date.now(),
        descripcion: textoTarea,
        realizada: false
        };

        tareas.push(nuevaTarea);
        tareaInput.value = "";
        renderTareas();
    }
});

function eliminarTarea(id) { 
    const index = tareas.findIndex(tarea => tarea.id === id);
    tareas.splice(index, 1);
    renderTareas();
}

function marcarRealizada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.realizada = !tarea.realizada;
        renderTareas();
    }
}

function actualizarContador() {
    const total = tareas.length;
    const realizadas = tareas.filter(t => t.realizada).length;

    totalTareas.textContent = total;
    tareasRealizadas.textContent = realizadas;
}

renderTareas();