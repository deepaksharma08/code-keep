import { TestBed } from '@angular/core/testing';
import { CsmComponent } from './csm.component';
describe('CsmComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CsmComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CsmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=csm.component.spec.js.map