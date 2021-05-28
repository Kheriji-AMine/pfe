import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Publication } from '../shared/classes/publication';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public baseUrl = 'http://127.0.0.1:8000/api/records/publication';
  public publications = 'http://localhost:8000/api/publications';

  constructor(private http: HttpClient) { }

  

  getPublications (): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.baseUrl).pipe(
      tap(_ => console.log('fetched Publications')),
      catchError(this.handleError<Publication[]>('getPublications', []))
    );
  }
  createPublication(publication: Publication): Observable<any> {
    return this.http.post<Publication>('http://localhost:8000/api/records/publication', publication, httpOptions).pipe(
      tap((newPublication: Publication) => console.log(`added hero w/ id=${newPublication.id}`)),
      catchError(this.handleError<Publication>('create'))
    );
  }
  getPublication(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /*
 updatePublication(id: number, publication: Publication): Observable<any> {
  return this.http.put<Publication>(`http://localhost:8000/api/publication/${id}`, publication, httpOptions).pipe(
    tap((newPublication: Publication) => console.log(`added hero w/ id=${newPublication.id}`)),
    catchError(this.handleError<Publication>('create'))
  );
}
*/
  updatePublication(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  

  deletePublication(publication: Publication | number): Observable<Publication> {
    const id = typeof publication === 'number' ? publication : publication.id;
    const url = `${'http://127.0.0.1:8000/api/records/publication'}/${id}`;
    console.log(id);

    return this.http.delete<Publication>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Publication id=${id}`)),
      catchError(this.handleError<Publication>('delete'))
    );
  }

  
  getPublicationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}