import { HttpHeaders } from '@angular/common/http';

// ********** RxJs **********
import { of } from 'rxjs';

// ********** HTTP REQUEST **********
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

// ********** LOGS **********
export const handleError = (error: Error, errorValue: any) => {
  console.error(error);
  return of(errorValue);
};

export const log = (resValue: any, res: any) => {
  console.log('${resValue} =>', res);
};
