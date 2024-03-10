import { Component, OnInit } from '@angular/core';
import { SnippetService } from 'src/app/services/snippet.service';
import { SnippetDTO } from 'src/app/domain/snippet-response';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  snippets: SnippetDTO[] = [];
  selectedSnippetCode: string;
  emptySnippetView: boolean = false;

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
          this.snippets = value.filter(item => item.type === 'snippet');
          this.selectedSnippetCode = this.snippets[0].code;
          this.emptySnippetView = false;
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