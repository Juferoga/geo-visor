import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUtilGisComponent } from './shared-util-gis.component';

describe('SharedUtilGisComponent', () => {
  let component: SharedUtilGisComponent;
  let fixture: ComponentFixture<SharedUtilGisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUtilGisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUtilGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
