import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Detail320dPage } from './detail320d.page';

describe('Detail320dPage', () => {
  let component: Detail320dPage;
  let fixture: ComponentFixture<Detail320dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail320dPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Detail320dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
