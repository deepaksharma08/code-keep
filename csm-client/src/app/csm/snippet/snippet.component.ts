import { Component, OnInit } from '@angular/core';
import { SnippetResponse } from 'src/app/domain/snippet-response';
import { SnippetService } from 'src/app/services/snippet.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {
  snippets: SnippetResponse[] = [];
  selectedSnippet: SnippetResponse = {} as SnippetResponse;

  constructor(private snippetService: SnippetService) {
  }

  ngOnInit(): void {

  }

  // private getAllSnippets() {
  //   this.snippetService.getCodeSnippet()
  // }

  public rowClick(snippet: SnippetResponse) {
    this.selectedSnippet = snippet;
  }

}

