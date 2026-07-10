// Base Task Class
export default class Task {

    constructor(
        id,
        title,
        description,
        priority,
        dueDate,
        category
    ) {
        // Unique Task ID
        this.id = id;

        // Task Details
        this.title = title;
        this.description = description;

        // Priority: High / Medium / Low
        this.priority = priority;

        // Due Date
        this.dueDate = dueDate;

        // Category: Personal / Office
        this.category = category;

        // Task Status
        this.completed = false;

        // Creation Time
        this.createdAt = new Date();
    }

    // Mark Task Complete / Undo
    toggleComplete() {
        this.completed = !this.completed;
    }

    // Update Task Details
    updateTask(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    // Return Task Information
    getTaskInfo() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            dueDate: this.dueDate,
            category: this.category,
            completed: this.completed,
            createdAt: this.createdAt
        };
    }
}