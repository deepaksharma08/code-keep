import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { InstructionService } from 'src/app/services/instruction.service';
import { SnippetService } from 'src/app/services/snippet.service';
import { EditSnippetDialogComponent } from 'src/app/shared/edit-snippet-dialog/edit-snippet-dialog.component';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit, OnDestroy {
  snippets: SnippetDTO[] = [];
  selectedSnippetCode: string;
  emptySnippetView: boolean = true;
  subscriptions: Subscription[] = [];

  @ViewChild('editDialog')
  editDialogComponent: EditSnippetDialogComponent;

  constructor(private snippetService: SnippetService,
    private toast: ToastrService,
    private instructionService: InstructionService,
    private activateRoute: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => {
      item.unsubscribe();
    })
  }

  ngOnInit(): void {
    this.getCodeSnippetByType('snippet');
    this.subscriptions.push(this.instructionService.getInstruction().subscribe({
      next: (instruction: string) => {
        this.handleInstruction(instruction);
      }, error: (err: Error) => {
        console.error("There was an error handling instruction[snippet component] " + err.message)
      }
    }))
    this.subscribeToActivatedRoute();
  }

  private subscribeToActivatedRoute() {
    this.activateRoute.queryParams.subscribe({
      next: (value) => {
        let type: string = value['type'];
        if (type) {
          this.getCodeSnippetByType(type);
        }
      }, error: (err: Error) => {
        this.toast.error("Failed to subscribe to activated routes");
        console.error("Snippet Component activate route : " + err.message);

      }
    })
  }

  public rowClick(snippet: SnippetDTO) {
    this.selectedSnippetCode = snippet.code;
  }

  // private getAllCodeSnippet() {
  //   let userId = sessionStorage.getItem("USER");
  //   this.snippetService.getAllCodeSnippet(userId).subscribe({
  //     next: (value: SnippetDTO[]) => {
  //       if (value.length > 0) {
  //         this.snippets = value.filter(item => item.type === 'snippet');
  //         if (this.snippets.length > 0) {
  //           this.emptySnippetView = false;
  //           this.selectedSnippetCode = this.snippets[0].code;
  //         } else {
  //           this.emptySnippetView = true;
  //         }
  //       } else {
  //         this.emptySnippetView = true;
  //       }
  //     }
  //     , error: (err: Error) => {
  //       console.warn(err);

  //       alert("No saved Snippet Found");
  //       this.emptySnippetView = true;
  //     }
  //   })
  // }

  private getCodeSnippetByType(type: string) {
    let userId = sessionStorage.getItem("USER");
    this.snippetService.getSnippetsByType(type, userId).subscribe({
      next: (value: SnippetDTO[]) => {
        if (value.length > 0) {
          this.emptySnippetView = false;
          this.snippets = value;
          this.selectedSnippetCode = this.snippets[0].code;
        } else {
          this.emptySnippetView = true;
          this.snippets = [];
        }
      },
      error: (err: Error) => {
        this.emptySnippetView = true;
        console.error('getCodeSnippetByType' + err.message);
        this.toast.error("There was a issue fetching snippets")
      }
    })
  }

  public copySnippetToClipBoard() {
    navigator.clipboard.writeText(this.selectedSnippetCode);
    this.toast.success("Copied To Clipboard!!")
  }

  private handleInstruction(instruction: string) {
    this.getCodeSnippetByType(instruction);
  }

  public deleteSnippet(item: SnippetDTO) {
    this.snippetService.deleteSnippetById(item.id).subscribe(
      {
        next: (status: string) => {
          if (status === "SUCCESS") {
            this.toast.success("Snippet deleted successfully!")
            this.snippets = this.snippets.filter(snippet => snippet.id !== item.id);
            if (this.snippets.length == 0) {
              this.emptySnippetView = true;
            }
          } else {
            this.toast.error("There was a problem deleting this snippet");
          }
        }, error: (err: Error) => {
          console.error(err);
          this.toast.error("There was a problem deleting this snippet");
        }
      }
    );
  }

  public editSnippet(item: SnippetDTO) {
    this.editDialogComponent.open(item);
  }

  public editedSnippetReceived(item: SnippetDTO) {
    this.snippetService.saveEdittedSnippet(item).subscribe({
      next: () => {
        this.getCodeSnippetByType(item.type);
      }, error: (err: Error) => {
        this.toast.error("Failed to edit snippet");
        console.error("Save editted snippet" + err.message);
      }
    })
  }
}

