import { BaseService } from '../BaseService';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface ITodoService {
  getTodoList: () => Promise<Todo[]>;
  getTodoById: (todoId: string) => Promise<Todo>;
  createTodo: (newTodo: Todo) => Promise<Todo>;
}

export class TodoService extends BaseService implements ITodoService {
  private readonly TODO_URL_PATH = 'todos';

  private readonly TODO_SERVICE_URL;

  constructor() {
    super('https://jsonplaceholder.typicode.com');
    this.TODO_SERVICE_URL = `${this.getUrl()}/${this.TODO_URL_PATH}`;
  }

  public async getTodoList(): Promise<Todo[]> {
    return this.requestService.get<Todo[]>(this.TODO_SERVICE_URL);
  }

  public async getTodoById(todoId: string): Promise<Todo> {
    return this.requestService.get<Todo>(`${this.TODO_SERVICE_URL}/${todoId}`);
  }

  public async createTodo(todo: Todo): Promise<Todo> {
    return this.requestService.post<Todo>(this.TODO_SERVICE_URL, JSON.stringify(todo));
  }
}
