import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CommonModule } from '@angular/common';
import { ProdottoDetail } from "../prodotto-detail/prodotto-detail";

@Component({
  selector: 'app-prodotti-list',
  imports: [CommonModule, ProdottoDetail],
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

  ngForPanelVisible = false;

  toggleNgForPanel() {
    this.ngForPanelVisible = !this.ngForPanelVisible;
  }
}
