import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoDetail } from './prodotto-detail';

describe('ProdottoDetail', () => {
  let component: ProdottoDetail;
  let fixture: ComponentFixture<ProdottoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdottoDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
