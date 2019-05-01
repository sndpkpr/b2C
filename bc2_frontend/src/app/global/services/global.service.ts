import { Injectable } from '@angular/core';
import { ApiService } from '../../library/shared/services/api-service/api.service';
import { map } from 'rxjs/operators';
import { urlAPIs } from '../constants/apiURLs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private apiService: ApiService) { }

  public fetchJson(): Observable<{ body: { data: [{}] } }> {
    return this.apiService.getData(urlAPIs.fetchJson, null)
  }
}
