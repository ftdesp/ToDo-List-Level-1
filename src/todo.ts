interface Task {
    task: string;
    completed: boolean;
}

export class ToDoList {
    private tasks: Task[] = [];

    addTask(task: string): void {
        this.tasks.push({ task, completed: false });
    }

    getTask(): Task[] {
        return this.tasks;
    }

    doneTask(task: string): void{
        const taskToComplete = this.tasks.find((tsk) => tsk.task === task);
        if (taskToComplete) {
            taskToComplete.completed = true;
        }
    }        
    deleteTask(task: string): void{
        this.tasks.push({ task, completed: false });
    }

    getTasks(): Task[]{
        return this.tasks;
    }
}