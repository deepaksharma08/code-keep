import { Component, OnDestroy, OnInit } from '@angular/core';
import { SnippetService } from 'src/app/services/snippet.service';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { InstructionService } from 'src/app/services/instruction.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit, OnDestroy {
  snippets: SnippetDTO[] = [];
  selectedSnippetCode: string;
  emptySnippetView: boolean = false;
  subscription: Subscription[] = [];

  constructor(private snippetService: SnippetService,
    private toast: ToastrService,
    private instructionService: InstructionService) { }

  ngOnInit(): void {
    this.subscription.push(this.instructionService.getInstruction().subscribe(
      {
        next: (instruction: string) => {
          this.handleInstruction(instruction);
        }, error: (err: Error) => {
          console.error("There was an error handling instruction[command component] " + err.message)
        }
      }
    ))

    this.getAllCodeSnippet();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(item => {
      item.unsubscribe;
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
          this.snippets = value.filter(item => item.type === 'command');
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
    if (instruction === 'command') {
      this.getAllCodeSnippet();
    }
  }



}