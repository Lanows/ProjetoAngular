import { BaseService } from '../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getTrending(page) {
    return this._httpClient.get(`${this.URL}/movie/?size=12&page=${page}`)
  }

  getById(id: string) {
    return this._httpClient.get(`${this.URL}movie/findbyid?id=${id}`)
  }

  getSixTrending() {
    return this._httpClient.get(`${this.URL}/movie/6trending`);
  }

  updateProgram(id, filmeAtualizado) {
    return this._httpClient.put(`${this.URL}/movie/${id}`, filmeAtualizado);
  }

  deleteProgram(id: number) {
    return this._httpClient.delete(`${this.URL}/movie/${id}`);
  }

  getMovieByTitle(title) {
    return this._httpClient.get(`${this.URL}/movie/title?title=${title}`);
  }

  getMovieByLanguage(language) {
    return this._httpClient.get(`${this.URL}/movie/language?language=${language}`);
  }

  getMovieByReleaseDate(date) {
    return this._httpClient.get(`${this.URL}/movie/releasedate?date=${date}`);
  }

  getParticipation(id) {
    return this._httpClient.get(`${this.URL}/movie/participation?id=${id}`);
  }
}
