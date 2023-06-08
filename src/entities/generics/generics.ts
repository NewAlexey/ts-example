function nonGenericFunctionString(arg: string): void {
  console.log(arg);
}

function nonGenericFunctionNumber(arg: number): void {
  console.log(arg);
}

function nonGenericFunctionBoolean(arg: boolean): void {
  console.log(arg);
}

function genericFunction<G>(arg: G): G {
  console.log(arg);

  return arg;
}

genericFunction<string>('15');
genericFunction('some string');
genericFunction(false);
genericFunction({});

const inputElement = document.querySelector<HTMLInputElement>('#inputId');

if (inputElement) {
  const value = inputElement.value;
}
