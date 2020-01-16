import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TESTPage } from './test.page';

describe('TESTPage', () => {
  let component: TESTPage;
  let fixture: ComponentFixture<TESTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TESTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TESTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
