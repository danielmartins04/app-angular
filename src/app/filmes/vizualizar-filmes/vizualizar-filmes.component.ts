import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-vizualizar-filmes',
  templateUrl: './vizualizar-filmes.component.html',
  styleUrls: ['./vizualizar-filmes.component.scss']
})
export class VizualizarFilmesComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  filme: Filme;

  constructor(private activatedRoute: ActivatedRoute,
              private filmesService: FilmesService) { }

  ngOnInit() {
    this.vizualizar(this.activatedRoute.snapshot.params['id']);
  }

  private vizualizar(id: number): void {
    this.filmesService.vizualizar(id).subscribe((filme: Filme) =>  this.filme = filme);
  }

}
