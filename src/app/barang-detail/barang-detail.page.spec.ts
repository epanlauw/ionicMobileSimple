import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarangDetailPage } from './barang-detail.page';

describe('BarangDetailPage', () => {
  let component: BarangDetailPage;
  let fixture: ComponentFixture<BarangDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarangDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
