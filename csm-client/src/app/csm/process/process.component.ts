import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscriber, Subscription } from 'rxjs';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { InstructionService } from 'src/app/services/instruction.service';
import { SnippetService } from 'src/app/services/snippet.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit, OnDestroy {
  snippets: SnippetDTO[] = [];
  selectedSnippetCode: string;
  emptySnippetView: boolean = true;
  subscriptions: Subscription[] = []

  constructor(private snippetService: SnippetService,
    private toast: ToastrService,
    private instructionService: InstructionService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.instructionService.getInstruction().subscribe({
      next: (instruction: string) => {
        this.handleInstruction(instruction);
      }, error: (err: Error) => {
        console.error("There was an error handling instruction[process component] " + err.message)
      }
    }))

    this.getAllCodeSnippet();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => {
      item.unsubscribe();
    })
  }

  public rowClick(snippet: SnippetDTO) {
    this.selectedSnippetCode = snippet.code;
  }

  private getAllCodeSnippet() {
    let userId = sessionStorage.getItem("USER");
    this.snippetService.getAllCodeSnippet(userId).subscribe({
      next: (value: SnippetDTO[]) => {
        if (value.length > 0) {
          this.snippets = value.filter(item => item.type === 'process');
          if (this.snippets.length > 0) {
            this.emptySnippetView = false;
            this.selectedSnippetCode = this.snippets[0].code;
          } else {
            this.emptySnippetView = true;
          }
        } else {
          this.emptySnippetView = true;
        }
      }
      , error: (err: Error) => {
        console.warn(err);
        alert("No saved Snippet Found");
        this.emptySnippetView = true;
      }
    })
  }

  public copySnippetToClipBoard() {
    navigator.clipboard.writeText(this.selectedSnippetCode);
    this.toast.success("Copied To Clipboard!!")
  }

  private handleInstruction(instruction: string) {
    if (instruction === 'process') {
      this.getAllCodeSnippet();
    }
  }


}
