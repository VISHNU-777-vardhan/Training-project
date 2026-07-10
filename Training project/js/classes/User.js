export default class User {

    constructor(name, email) {

        this.name = name;
        this.email = email;
        this.tasks = [];

    }

    addTask(task) {

        this.tasks.push(task);

    }

    removeTask(taskId) {

        this.tasks = this.tasks.filter(task => task.id !== taskId);

    }

    getTasks() {

        return this.tasks;

    }

    getCompletedTasks() {

        return this.tasks.filter(task => task.completed);

    }

    getPendingTasks() {

        return this.tasks.filter(task => !task.completed);

    }

}