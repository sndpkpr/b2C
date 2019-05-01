import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
// import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { ApiParams } from '../api-service/view-models/api-params';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient,
    // private errorhandler: ErrorHandlerService
  ) { }

  /** GET: get the hero from the server */
  getData(url: string, reqAPIParams: ApiParams[] | null): any {

    let newHTTPParams = new HttpParams();
    return this.http.get(this.getUrl(url), { params: newHTTPParams, observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  /** POST: post the hero on the server */
  postData<T>(url: string, data: {}, reqAPIParams: ApiParams[]) {
    let newHTTPParams = new HttpParams();
    return this.http.post<T>(this.getUrl(url), data, { params: newHTTPParams, observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  /** PUT: put the hero on the server */
  putData<T>(url: string, data: {}, reqAPIParams: ApiParams[]) {
    let newHTTPParams = new HttpParams();
    return this.http.put<T>(this.getUrl(url), data, { params: newHTTPParams, observe: 'response' })
      .pipe(
      catchError(this.handleError)
      );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(url: string, id: number, reqAPIParams: ApiParams[]): Observable<{}> {
    let newHTTPParams = new HttpParams();
    return this.http.delete(this.getUrl(url) + '/' + id, { params: newHTTPParams, observe: 'response' })
      .pipe(
      catchError(this.handleError)
      );
  }

  /** Common error handling method */
  public handleError = (error: Response) => {
    // Do messaging and error handling here
    // this.errorhandler.handleError(error.status);
    return Observable.throw(error);
  }

  /** attach base url */
  private getUrl(url: string): string {
    return environment.baseUrl + url;
  }
}

