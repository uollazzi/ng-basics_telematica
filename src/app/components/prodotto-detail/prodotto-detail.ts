import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotto-detail',
  imports: [],
  templateUrl: './prodotto-detail.html',
  styleUrl: './prodotto-detail.css',
})
export class ProdottoDetail {
  @Input()
  prodotto?: Prodotto;
}
