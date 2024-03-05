import { TestBed } from '@angular/core/testing';
import { SnippetService } from './snippet.service';
describe('SnippetService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SnippetService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=snippet.service.spec.js.map