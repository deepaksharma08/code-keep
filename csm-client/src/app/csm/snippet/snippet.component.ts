import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { SnippetService } from 'src/app/services/snippet.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {
  snippets: SnippetDTO[] = [];
  selectedSnippetCode: string;
  emptySnippetView: boolean = true;

  constructor(private snippetService: SnippetService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllCodeSnippet();
  }

  public rowClick(snippet: SnippetDTO) {
    this.selectedSnippetCode = snippet.code;
  }

  private getAllCodeSnippet() {
    let userId = sessionStorage.getItem("USER");
    this.snippetService.getAllCodeSnippet(userId).subscribe({
      next: (value: SnippetDTO[]) => {
        if (value.length > 0) {
          this.snippets = value.filter(item => item.type === 'snippet');
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

  copySnippetToClipBoard() {
    navigator.clipboard.writeText(this.selectedSnippetCode);
    this.toast.success("Copied To Clipboard!!")
  }

}

