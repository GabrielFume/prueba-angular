import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import 'rxjs/Rx'; // Map


@Injectable({	
	providedIn: 'root'

})
export class PeliculasService {

  private apikey:string = "fc86457e7a78603901929f89400fe81d";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http: HttpClient ) { }

  // getCartelera(){
  // 	let desde = new Date();
  // 	let hasta = new Date();

  // 	hasta.setDate( hasta.getDate() + 7 );

  // 	let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() } `;
  // 	let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() } `;

  // 	let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

  //   return this.http.jsonp(url, 'callback=JSONP_CALLBACK').subscribe(data => console.log(data))
  // }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&sort_by=popularity.desc&$language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK')
              .pipe(map( res => res.results));
  }

  // getPopulares2() {
  //   let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&sort_by=popularity.desc&$language=es`;
  //   return this.http.jsonp(url, 'callback=JSONP_CALLBACK').subscribe(data => console.log(data))
  // }

  // buscarPelicula( texto:string ){

  //   let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

  //   return this.http.jsonp( url );
  // }



}
