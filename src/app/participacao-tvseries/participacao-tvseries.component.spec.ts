import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipacaoTvseriesComponent } from './participacao-tvseries.component';

describe('ParticipacaoTvseriesComponent', () => {
  let component: ParticipacaoTvseriesComponent;
  let fixture: ComponentFixture<ParticipacaoTvseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipacaoTvseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipacaoTvseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
