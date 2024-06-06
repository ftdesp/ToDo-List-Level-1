import { ToDoList } from '../src/todo';

describe('ToDo List', () => {
    it('add a task to the list', () => {
        const todoList = new ToDoList();
        todoList.addTask('Aprender TypeScript');        
        expect(todoList.getTask()).toEqual([{ task: 'Aprender TypeScript', completed: false }]);
    });

    it('mark task as done', () => {
        const todoList = new ToDoList();
        todoList.addTask('Aprender TS & jest');
        todoList.doneTask('Aprender TS & jest');
        expect(todoList.getTask()).toEqual([{ task: 'Aprender TS & jest', completed: true }]);
    })

    test('delete task', () => {
        const todoList = new ToDoList();
        todoList.addTask('aprender TS');
        todoList.deleteTask('aprender TS');
        expect((todoList.getTask())===([]));
    });
    it('Show task list', () => {
        const todoList = new ToDoList();
        todoList.addTask('aprender TypeScript');
        todoList.addTask('aprender Jest');
        expect(todoList.getTask()).toEqual([
            { task: 'aprender TypeScript', completed: false },
            { task: 'aprender Jest', completed: false }
        ]);
    });    
})