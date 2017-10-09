import { Injectable } from '@angular/core';

@Injectable()
export class CodeService {
  code: string;

  constructor() { }


  getCode(): void {
    
  }

  decode(): string {
    return this.code;
  }
}
