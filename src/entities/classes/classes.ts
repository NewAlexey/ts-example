interface IPersonConstructor {
  name: string;
  lastName: string;
  birthDate: number;
}

interface IPerson {
  getName: () => string;
  getFullName: () => string;
  getAge: () => Promise<number>;
}

//public, private, static, protected

// использование Classes and private, public +10

export class Person implements IPerson {
  private readonly name: string;

  protected readonly lastName: string;

  private readonly birthDate: number;

  private countOfCallGetNameMethod = 0;

  constructor({ name, lastName, birthDate }: IPersonConstructor) {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  /**
   * Метод возвращает имя класса Person.
   *
   * @example - Alexey
   */
  public getName(): string {
    this.countOfCallGetNameMethod = this.countOfCallGetNameMethod + 1;

    return this.name;
  }

  public getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  public async getAge(): Promise<number> {
    const todayYear = await this.getTodayYearFromBackend();

    return todayYear - this.birthDate;
  }

  private async getTodayYearFromBackend(): Promise<number> {
    return fetch('someBackendUrl')
      .then((response) => response.json())
      .then((data: number) => data);
  }

  protected getProtectedField() {
    return 'someString';
  }
}

interface IEmployeeConstructorProps extends IPersonConstructor {
  startDate: number;
}

interface IEmployee {
  getStartDate: () => number;
}

export class Employee extends Person implements IEmployee {
  private readonly startDate: number;

  constructor(props: IEmployeeConstructorProps) {
    super(props);
    this.startDate = props.startDate;
  }

  public getStartDate(): number {
    return this.startDate;
  }
}

// const AlexeyEmployee = new Employee({ name: 'Alexey', lastName: 'lastName', birthDate: 1992, startDate: 2015 });
