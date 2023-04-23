const taskEle = document.getElementById("task");
const taskType = document.getElementById("t-type");
const taskDate = document.getElementById("t-date");
const taskPrio = document.getElementById("t-prio");
const btn = document.getElementById("btn");
const formEle = document.getElementById("form-ele");
const dataContainer = document.getElementById("data-container");

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
        taskEle.value == "" ||
        taskType.value == "" ||
        taskDate.value == "" ||
        taskPrio.value == ""
    ) {
        alert("All fields Mendatory!");
    } else {
        dataContainer.firstElementChild.innerHTML += `
        <tr class="text-center my-2 border-2">
                        <td class="py-1 text-sm sm:text-lg">${taskEle.value}</td>
                        <td class="py-1 text-sm sm:text-lg">${taskType.value}</td>
                        <td class="py-1 text-sm sm:text-lg">${taskDate.value}</td>
                        <td class="py-1 text-sm sm:text-lg">${taskPrio.value}</td>
                    </tr>
        `;
    }
});
