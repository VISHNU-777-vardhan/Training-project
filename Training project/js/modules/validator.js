// Validate Task Details
export function validateTask(title, description, dueDate) {

    // Title Validation
    if (!title || title.trim() === "") {
        throw new Error("Task title is required.");
    }

    // Description Validation
    if (!description || description.trim() === "") {
        throw new Error("Task description is required.");
    }

    // Due Date Validation
    if (!dueDate) {
        throw new Error("Please select a due date.");
    }

    return true;
}

// Validate JSON File
export function validateJSON(data) {

    if (!data.tasks || !Array.isArray(data.tasks)) {
        throw new Error("Invalid JSON structure.");
    }

    return true;
}