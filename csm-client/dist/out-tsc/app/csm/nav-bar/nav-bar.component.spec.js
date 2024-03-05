import { TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';
describe('NavBarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavBarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nav-bar.component.spec.js.map