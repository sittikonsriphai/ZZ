import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrayzPage } from './arrayz.page';

describe('ArrayzPage', () => {
  let component: ArrayzPage;
  let fixture: ComponentFixture<ArrayzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
