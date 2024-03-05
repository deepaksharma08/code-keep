import { TestBed } from '@angular/core/testing';
import { SaveSnippetDialogComponent } from './save-snippet-dialog.component';
describe('SaveSnippetDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SaveSnippetDialogComponent]
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
//# sourceMappingURL=save-snippet-dialog.component.spec.js.map