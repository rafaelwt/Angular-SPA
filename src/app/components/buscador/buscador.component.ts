import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  constructor(private activaredRoute: ActivatedRoute, private _heroesService: HeroesService,
  private router: Router ) { }
  heroes: any = [] ;
  termino: string ;
  ngOnInit() {
    this.activaredRoute.params.subscribe(params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes =  this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

  verHeroe( idx: number ) {
    this.router.navigate(['/heroe', idx]);
   }

}
