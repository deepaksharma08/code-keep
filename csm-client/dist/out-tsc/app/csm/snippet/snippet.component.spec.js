import { TestBed } from '@angular/core/testing';
import { SnippetComponent } from './snippet.component';
describe('SnippetComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SnippetComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SnippetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=snippet.component.spec.js.map