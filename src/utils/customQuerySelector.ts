export function customQuerySelector(selector: string, root?: Document | Element): Element {
  if (root) {
    const element = root.querySelector(selector);

    if (!element) {
      throw Error('some Error');
    }

    return element;
  }

  const element = document.querySelector(selector);

  if (!element) {
    throw Error('some Error');
  }

  return element;
}
