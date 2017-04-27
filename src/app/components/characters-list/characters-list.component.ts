import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character';
import { CharacterService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {
  
  characters: Character[];
  
  consructor(private characterService: CharacterService) {}
  
  getCharacters(): void {
     this.characterService.getCharacters().then(character => this.character = character);
  }

  constructor() { }

  ngOnInit() {
    this.getCharacters();
  }

}
