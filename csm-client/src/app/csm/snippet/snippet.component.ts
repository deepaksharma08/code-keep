import { Component, OnInit } from '@angular/core';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { SnippetService } from 'src/app/services/snippet.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {
  snippets: SnippetDTO[] = [];
  selectedSnippet: SnippetDTO = {} as SnippetDTO;

  constructor(private snippetService: SnippetService) {
  }

  ngOnInit(): void {

  }

  public rowClick(snippet: SnippetDTO) {
    this.selectedSnippet = snippet;
  }

}

