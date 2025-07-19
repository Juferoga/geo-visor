import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastreDomainComponent } from './cadastre-domain.component';

describe('CadastreDomainComponent', () => {
  let component: CadastreDomainComponent;
  let fixture: ComponentFixture<CadastreDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastreDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastreDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
