type PersonType = { name: string; birthDate: number };

interface IPerson {
  name: string;
  birthDate: number;
}

type PositionType = 'frontend' | 'backend';

type Something = {
  field1: string;
  field2: string;
  field3: boolean;
};

export interface IEmployee extends IPerson {
  startWorkingDate: string;
  position?: PositionType;
  something: Something;
}

const person: IPerson = {
  name: 'Alexey',
  birthDate: 1992,
};

// const person2: IEmployee = {
//   name: 'Kirill',
//   birthDate: 1993,
//   startWorkingDate: '2019',
// };

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },

export type TodoType = {
  userId: number;
  id: number | null;
  title: string;
  completed: boolean;
};

export type NullableTodoType = Partial<TodoType>;

const partialTodo: NullableTodoType = {};

type TodoId = Pick<TodoType, 'id'>;

const todoId: Readonly<TodoId> = {
  id: 15,
};

type TodoWithoutCompletedType = Omit<TodoType, 'completed'>;

const todoWithoutCompleted: TodoWithoutCompletedType = {
  id: 15,
  userId: 15,
  title: '15',
};
