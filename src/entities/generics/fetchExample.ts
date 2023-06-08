export class Fetch {
  public get<Data>(url: string): Promise<Data> {
    return fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data: Data) => data);
  }

  public post<Data>(url: string, body: BodyInit, options?: Omit<RequestInit, 'body' | 'method'>): Promise<Data> {
    return fetch(url, {
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      ...options,
    })
      .then((response) => response.json())
      .then((data: Data) => data);
  }
}
