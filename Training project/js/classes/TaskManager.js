export default class TaskManager {

    constructor() {
        this.tasks = [];
    }

    // Add a Task
    addTask(task) {
        this.tasks.push(task);
    }

    // Delete Task
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    // Find Task by ID
    getTaskById(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    // Toggle Complete
    toggleTask(taskId) {

        const task = this.getTaskById(taskId);

        if (task) {
            task.toggleComplete();
        }

    }

    // Get All Tasks
    getAllTasks() {
        return this.tasks;
    }

    // Get Completed Tasks
    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    // Get Pending Tasks
    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }

    // Search Tasks
    searchTasks(keyword) {

        keyword = keyword.toLowerCase();

        return this.tasks.filter(task =>
            task.title.toLowerCase().includes(keyword) ||
            task.description.toLowerCase().includes(keyword)
        );

    }

    // Filter by Priority
    filterByPriority(priority) {

        if (priority === "All") {
            return this.tasks;
        }

        return this.tasks.filter(task => task.priority === priority);

    }

    // Duplicate Task (Deep Copy)
    duplicateTask(taskId) {

        const task = this.getTaskById(taskId);

        if (!task) return null;

        const copy = structuredClone(task);

        copy.id = Date.now();

        this.tasks.push(copy);

        return copy;

    }

    // Statistics
    getStatistics() {

        return {

            total: this.tasks.length,

            completed: this.getCompletedTasks().length,

            pending: this.getPendingTasks().length

        };

    }

    // Session 7 - Custom Iterator
    *[Symbol.iterator]() {

        for (const task of this.tasks) {

            yield task;

        }

    }

}