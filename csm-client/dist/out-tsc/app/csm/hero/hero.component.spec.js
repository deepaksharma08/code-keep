import { TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
describe('HeroComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeroComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hero.component.spec.js.map