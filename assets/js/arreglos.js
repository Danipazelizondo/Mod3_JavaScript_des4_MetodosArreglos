const listaDeTareas = document.querySelector("#listaTareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");

const tareas = [];

btnAgregar.addEventListener("click", () => {
    const textoTarea = tareaInput.value.trim(); // Capturamos el texto

    if (textoTarea !== "") {
        
        const nuevaTarea = {
        id: Date.now(),
        descripcion: textoTarea,
        realizada: false
        };

        tareas.push(nuevaTarea);
        tareaInput.value = "";

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
                <button onclick="eliminarTarea(${tarea.id})">❌</button>
            </td>
            </tr>
        `;
        }

    listaDeTareas.innerHTML = html;
    }
});









// const total = document.getElementById('total');
// const realizadas = document.getElementById('realizadas');