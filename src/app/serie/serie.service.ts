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

  updateProgram(id, serieAtualizado){
    return this._httpClient.put(`${this.URL}/tv/${id}`, serieAtualizado);
  }

  deleteProgram(id: number){
    return this._httpClient.delete(`${this.URL}/tv/${id}`);
  }

  getTvSerieByTitle(title){
    return this._httpClient.get(`${this.URL}/tv/title?title=${title}`);
  }

  getTvSerieByLanguage(language) {
    return this._httpClient.get(`${this.URL}/tv/language?language=${language}`);
  }

  getTvSerieByReleaseDate(date) {
    return this._httpClient.get(`${this.URL}/tv/releasedate?date=${date}`);
  }
}