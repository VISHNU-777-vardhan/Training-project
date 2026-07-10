import Task from "./Task.js";

export default class OfficeTask extends Task {

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
            "Office"
        );

        this.type = "Office";

    }

    getTaskType() {
        return "💼 Office Task";
    }

}