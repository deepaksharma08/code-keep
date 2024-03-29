import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSnippetDialogComponent } from './edit-snippet-dialog.component';

describe('EditSnippetDialogComponent', () => {
  let component: EditSnippetDialogComponent;
  let fixture: ComponentFixture<EditSnippetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSnippetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSnippetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
