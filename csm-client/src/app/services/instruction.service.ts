import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class InstructionService {
    private instruction = new Subject<string>;
    public sendInstruction(instruction: string) {
        this.instruction.next(instruction);
    }

    public getInstruction(): Observable<string> {
        return this.instruction.asObservable();
    }
}