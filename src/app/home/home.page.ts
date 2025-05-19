import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  offset = 0;
  limit = 20;
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPokemons();
  }

  async loadPokemons() {
    this.loading = true;

    const res = await this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .toPromise();

    const requests = res.results.map((pokemon: any) =>
      this.http.get(pokemon.url).toPromise()
    );

    const details = await Promise.all(requests);
    this.pokemons = details;
    this.loading = false;
  }
}
