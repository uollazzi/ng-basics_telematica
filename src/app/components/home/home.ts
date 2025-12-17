import { Component } from '@angular/core';
import { ProdottiList } from '../prodotti-list/prodotti-list';


@Component({
  selector: 'app-home',
  imports: [ProdottiList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titolo: string = "Componente Home";
}
