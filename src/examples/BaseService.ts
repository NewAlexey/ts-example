import { Fetch } from '../entities/generics/fetchExample';

export class BaseService {
  protected requestService = new Fetch();

  protected URL: string;

  constructor(serviceUrl: string) {
    this.URL = serviceUrl;
  }

  protected getUrl() {
    return this.URL;
  }
}
