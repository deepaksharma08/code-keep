import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSnippetDialogComponent } from './save-snippet-dialog.component';

describe('SaveSnippetDialogComponent', () => {
  let component: SaveSnippetDialogComponent;
  let fixture: ComponentFixture<SaveSnippetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveSnippetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveSnippetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
