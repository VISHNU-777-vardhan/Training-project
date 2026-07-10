// ==========================================
// UI Module
// ==========================================

// Render All Tasks
export function renderTasks(tasks, container) {

    container.innerHTML = "";

    if (tasks.length === 0) {

        container.innerHTML = `
            <div class="task-card">
                <h2>No Tasks Found</h2>
                <p>Add a task to get started.</p>
            </div>
        `;

        return;
    }

    tasks.forEach(task => {

        container.appendChild(createTaskCard(task));

    });

}

// Create Task Card
function createTaskCard(task) {

    const card = document.createElement("div");

    card.classList.add("task-card");

    card.dataset.id = task.id;

    card.innerHTML = `

        <h3>${task.title}</h3>

        <p>${task.description}</p>

        <p>
            <strong>Priority:</strong>
            ${task.priority}
        </p>

        <p>
            <strong>Category:</strong>
            ${task.category}
        </p>

        <p>
            <strong>Due:</strong>
            ${task.dueDate}
        </p>

        <p class="status">
            ${task.completed ? "✅ Completed" : "⌛ Pending"}
        </p>

        <div class="task-buttons">

            <button class="complete-btn">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>

        </div>

    `;

    return card;

}
// ==========================================
// Attach Button Events
// ==========================================

export function attachTaskEvents(onComplete, onEdit, onDelete) {

    // Complete Button
    document.querySelectorAll(".complete-btn").forEach(button => {

        button.addEventListener("click", (event) => {

            const id = Number(
                event.target
                    .closest(".task-card")
                    .dataset.id
            );

            onComplete(id);

        });

    });

    // Edit Button
    document.querySelectorAll(".edit-btn").forEach(button => {

        button.addEventListener("click", (event) => {

            const id = Number(
                event.target
                    .closest(".task-card")
                    .dataset.id
            );

            onEdit(id);

        });

    });

    // Delete Button
    document.querySelectorAll(".delete-btn").forEach(button => {

        button.addEventListener("click", (event) => {

            const id = Number(
                event.target
                    .closest(".task-card")
                    .dataset.id
            );

            onDelete(id);

        });

    });

}
// ==========================================
// Update Statistics
// ==========================================

export function updateStatistics(tasks) {

    document.getElementById("totalTasks").textContent =
        tasks.length;

    document.getElementById("completedTasks").textContent =
        tasks.filter(task => task.completed).length;

    document.getElementById("pendingTasks").textContent =
        tasks.filter(task => !task.completed).length;

}
// ==========================================
// Loading Indicator
// ==========================================

export function showLoading() {

    document.getElementById("loading").style.display = "block";

}

export function hideLoading() {

    document.getElementById("loading").style.display = "none";

}