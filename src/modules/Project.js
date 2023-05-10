import { v4 as uuidv4 } from 'uuid';
import {Todo} from './Todo';


export class Project {
    constructor(title){
        this.title = title;
        this.id = uuidv4();
        this.todos = [new Todo("test todo", "asap", "high")];
    }
}