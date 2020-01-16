import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Arrayz2Page } from './arrayz2.page';

describe('Arrayz2Page', () => {
  let component: Arrayz2Page;
  let fixture: ComponentFixture<Arrayz2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arrayz2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Arrayz2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
