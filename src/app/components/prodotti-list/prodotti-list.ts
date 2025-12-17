import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodotti-list',
  imports: [CommonModule],
  templateUrl: './prodotti-list.html',
  styleUrl: './prodotti-list.css',
})
export class ProdottiList {
  prodotti: Prodotto[] = [
    {
      titolo: "Ciabatte",
      descrizione: "Infradito",
      prezzo: 9.99
    },
    {
      titolo: "Pallone",
      descrizione: "Da beach volley",
      prezzo: 19.99
    },
    {
      titolo: "Chitarra",
      descrizione: "Acustica",
      prezzo: 1999.99
    }
  ];
}
