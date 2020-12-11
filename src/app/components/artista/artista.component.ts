import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent implements OnInit {
  artista: any[] = [];
  topTracks: any[] = [];
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtista(id: string) {
    this.spotify.getArtistaId(id).subscribe((artista: any) => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify
      .getTopTracks(id)
      .subscribe((tracks) => {this.topTracks = tracks; console.log(tracks)});
  }
}
