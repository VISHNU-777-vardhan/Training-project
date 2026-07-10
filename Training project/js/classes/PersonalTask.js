import Task from "./Task.js";

export default class PersonalTask extends Task {

    constructor(
        id,
        title,
        description,
        priority,
        dueDate
    ) {

        super(
            id,
            title,
            description,
            priority,
            dueDate,
            "Personal"
        );

        this.type = "Personal";

    }

    getTaskType() {
        return "🏠 Personal Task";
    }

}