export class Model {
    user;
    items;

    constructor() {
        this.user = "Aga";
        this.items = [
                        new TodoItem("Spor", true),
                        new TodoItem("Sinema", false),
                        new TodoItem("Ders", false),
                        new TodoItem("Kino", false),
                        new TodoItem("Kahvalti", false),
                     ];
    }
}

export class TodoItem {
    description: string;
    action: boolean;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}