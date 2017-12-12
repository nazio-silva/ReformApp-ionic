import { Response } from '@angular/http';
import { Observable } from 'rxjs';

const extractError = (error: Response | any): string => {
  
  let errMsg: string;

  if(error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} = ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message: error.toString();
  }
  console.log(errMsg = "Seu e-mail ou senha está incorreto, por favor verifique!!");

  return errMsg;
}

export abstract class BaseService {
  protected handlePromiseError(error: Response | any): Promise<any> {
    return Promise.reject(extractError(error));
  }

  protected handlerObservableError(error: Response | any): Observable<any> {
    return Observable.throw(extractError(error));
  }
}