import { TestBed } from '@angular/core/testing';
import { CommandsComponent } from './commands.component';
describe('CommandsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommandsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CommandsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=commands.component.spec.js.map