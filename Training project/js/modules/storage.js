import { CONFIG } from "../config.js";

const STORAGE_KEY = CONFIG.STORAGE_KEY;

// Save Tasks
export function saveTasks(tasks) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );

    }
    catch (error) {

        console.error("Error Saving Tasks:", error);

    }

}

// Load Tasks
export function loadTasks() {

    try {

        const data = localStorage.getItem(STORAGE_KEY);

        return data ? JSON.parse(data) : [];

    }
    catch (error) {

        console.error("Error Loading Tasks:", error);

        return [];

    }

}

// Remove All Tasks
export function clearTasks() {

    localStorage.removeItem(STORAGE_KEY);

}

// Export Tasks as JSON
export function exportTasks(tasks) {

    const jsonData = JSON.stringify(tasks, null, 2);

    const blob = new Blob(
        [jsonData],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "tasks.json";

    a.click();

    URL.revokeObjectURL(url);

}

// Import JSON
export function importTasks(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.onload = (event) => {

            try {

                const data = JSON.parse(event.target.result);

                resolve(data);

            }
            catch {

                reject(
                    new Error("Invalid JSON File")
                );

            }

        };

        reader.readAsText(file);

    });

}