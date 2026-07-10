import { CONFIG } from "../config.js";

// Fetch Sample Tasks
export async function fetchTasks() {

    try {

        const response = await fetch(CONFIG.JSON_FILE);

        if (!response.ok) {
            throw new Error("Unable to fetch sample tasks.");
        }

        const data = await response.json();

        return data;

    }
    catch (error) {

        console.error("Fetch Error:", error);

        return { tasks: [] };

    }

}

// Generic Fetch Function
export async function fetchData(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network Error");
        }

        return await response.json();

    }
    catch (error) {

        console.error(error);

        return null;

    }

}