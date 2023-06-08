import { IEmployee } from '../objects/objects';
import { customQuerySelector } from '../../utils/customQuerySelector';

function someFunction(): Array<IEmployee> {
  return [];
}

type ThreeFuncArgType = {
  firstName: string;
  lastName: number;
  patronymic: boolean;
};

function loggingFunction({ firstName, lastName, patronymic }: ThreeFuncArgType): void {
  console.log('arg~~', firstName);
  console.log('arg~~', lastName);
  console.log('arg~~', patronymic);
}

loggingFunction({ firstName: '', lastName: 15, patronymic: false });

function someFunc() {
  const newsContainer = customQuerySelector('newsContainer');

  const element = customQuerySelector('selector2', newsContainer);

  element.appendChild(new Node());
}
