import { Component, OnInit } from '@angular/core';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { SnippetService } from 'src/app/services/snippet.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  snippets: SnippetDTO[] = [];
  selectedSnippetCode: string;
  emptySnippetView: boolean = true;

  constructor(private snippetService: SnippetService) { }

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

}
