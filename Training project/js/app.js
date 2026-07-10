// ===============================
// IMPORT CLASSES
// ===============================

import TaskManager from "./classes/TaskManager.js";
import PersonalTask from "./classes/PersonalTask.js";
import OfficeTask from "./classes/OfficeTask.js";

// ===============================
// IMPORT MODULES
// ===============================

import { renderTasks } from "./modules/ui.js";
import { saveTasks, loadTasks } from "./modules/storage.js";
import { fetchTasks } from "./modules/api.js";
import { validateTask } from "./modules/validator.js";
import { log } from "./modules/logger.js";
import { debounce } from "./modules/debounce.js";
import { throttle } from "./modules/throttle.js";
import { CONFIG } from "./config.js";

// ===============================
// TASK MANAGER
// ===============================

const manager = new TaskManager();

// ===============================
// SESSION 2 - CLOSURE
// Private ID Generator
// ===============================

function createTaskIdGenerator() {

    let currentId = 1;

    return function () {

        return currentId++;

    };

}

const generateTaskId = createTaskIdGenerator();

// ===============================
// DOM ELEMENTS
// ===============================

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const taskDueDate = document.getElementById("taskDueDate");
const taskCategory = document.getElementById("taskCategory");

const addTaskBtn = document.getElementById("addTaskBtn");

const taskContainer = document.getElementById("taskContainer");

const searchBox = document.getElementById("searchBox");

const filterPriority = document.getElementById("filterPriority");

const darkModeBtn = document.getElementById("darkModeBtn");

const loadJsonBtn = document.getElementById("loadJsonBtn");

const exportBtn = document.getElementById("exportBtn");

const importBtn = document.getElementById("importBtn");

const importFile = document.getElementById("importFile");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");

const pendingTasks = document.getElementById("pendingTasks");

const loading = document.getElementById("loading");

// ===============================
// INITIALIZE APP
// ===============================

function initializeApp() {

    log("Task Manager Started");

    const savedTasks = loadTasks();

    if (savedTasks.length > 0) {

        manager.tasks = savedTasks;

    }

    renderTasks(manager.tasks, taskContainer);

    updateStatistics();

}

initializeApp();

// ===============================
// LOAD SAMPLE JSON
// ===============================

async function loadSampleTasks() {

    loading.style.display = "block";

    try {

        const data = await fetchTasks();

        manager.tasks = data.tasks;

        saveTasks(manager.tasks);

        renderTasks(manager.tasks, taskContainer);

        updateStatistics();

        log("Sample Tasks Loaded");

    }

    catch (error) {

        alert(error.message);

    }

    finally {

        loading.style.display = "none";

    }

}