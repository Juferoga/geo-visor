import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiCommonComponent } from './shared-ui-common.component';

describe('SharedUiCommonComponent', () => {
  let component: SharedUiCommonComponent;
  let fixture: ComponentFixture<SharedUiCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
