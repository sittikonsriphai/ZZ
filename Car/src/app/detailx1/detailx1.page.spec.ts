import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Detailx1Page } from './detailx1.page';

describe('Detailx1Page', () => {
  let component: Detailx1Page;
  let fixture: ComponentFixture<Detailx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detailx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Detailx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
