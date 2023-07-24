import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

interface EventsByRound {
  [key: string]: any[];
}

@Injectable({
  providedIn: 'root'
})
export class F1Service {
  private apiUrl = 'https://www.thesportsdb.com/api/v1/json/3';
  private driver = [
    'Lewis Hamilton',
    'George Russel',
    'Max Verstappen',
    'Sergio Perez',
    'Charles Leclerc',
    'Carlos Sainz Jr',
    'Lando Norris',
    'Oscar Piastri',
    'Esteban Ocon',
    'Pierre Gasly',
    'Lance Stroll',
    'Fernando Alonso',
    'Valtteri Bottas',
    'Guanyu Zhou',
    'Alexander Albon',
    'logan sargeant',
    'Yuki Tsunoda',
    'Nyck de Vries',
    'Nico Hulkenberg',
    'Kevin Magnussen',
  ];
  constructor(private http: HttpClient) { }

  getF1Teams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search_all_teams.php?l=Formula%201`)
  }
  getF1Events() {
    const requests = Array.from({ length: 25 }, (_, i) => i + 1).map(round => {
      return this.http.get(`${this.apiUrl}/eventsround.php?id=4370&r=${round}&s=2023`).pipe(
        map((response: any) => response.events)
      );
    });
    return forkJoin(requests).pipe(
      map((events: any[]) => events.reduce((acc, val, index) => {
        if (val) {
          acc.push({ round: index + 1, events: val });
        }
        return acc;
      }, [])),
      map((rounds: any[]) => {
        rounds.forEach(round => {
          round.events.sort((a:any, b:any) => {
            const dateA = new Date(a.strTimestamp);
            const dateB = new Date(b.strTimestamp);
            return dateA.getTime() - dateB.getTime();
          });
        });
        return rounds;
      })
    );
  }
  getF1Driver(): Observable<any> {
    const requests = this.driver.map((driver) => {
      return this.http.get(`${this.apiUrl}/searchplayers.php?p=${driver}`);
    });
    return forkJoin(requests);
  }
  getF1DriverDetails(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchplayers.php?p=${name}`);
  }
  getF1EventDetails(event: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/eventresults.php?id=${event}`)
  }
}
