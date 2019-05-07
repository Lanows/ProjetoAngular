import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class SerieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getTrending() {
    return this._httpClient.get(`${this.URL}/tv/`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}tv/findbyid?id=${id}`)
  }

  getSixTrending() {
    return this._httpClient.get(`${this.URL}/tv/6trending`);
  }
}