import { Component, OnInit, Input  } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Observable, of, Subject, Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

	cartelera:any;
	populares:any;

 constructor(private _ps:PeliculasService){
 		
 		this._ps.getPopulares()
  		.subscribe( data=>this.cartelera = data);

  		
  			
  }

  ngOnInit(){
  	
  }


  frase: any = {
		mensaje: 'Un gran poder requiere una gran responsabilidad',
		autor: 'Ben Parker'
	}


}
