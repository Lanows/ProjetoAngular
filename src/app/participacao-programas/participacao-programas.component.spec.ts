import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoProgramasComponent } from './participacao-programas.component';

describe('ParticipacaoProgramasComponent', () => {
  let component: ParticipacaoProgramasComponent;
  let fixture: ComponentFixture<ParticipacaoProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipacaoProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
