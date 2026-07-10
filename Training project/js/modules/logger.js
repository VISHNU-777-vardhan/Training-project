// Logger Module

export function log(message) {

    const time = new Date().toLocaleTimeString();

    console.log(`[${time}] ${message}`);

}

export function logError(error) {

    const time = new Date().toLocaleTimeString();

    console.error(`[${time}] ERROR: ${error}`);

}

export function logTask(task, action) {

    console.log(
        `[TASK ${action}]`,
        task
    );

}