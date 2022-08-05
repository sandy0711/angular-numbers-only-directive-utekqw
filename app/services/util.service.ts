import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  constructor() {}

  public removeDuplicate(results: Array<any>) {
    return results.filter(
      (value, index, array) =>
        !array.filter(
          (v, i) => JSON.stringify(value) === JSON.stringify(v) && i < index
        ).length
    );
  }
}
