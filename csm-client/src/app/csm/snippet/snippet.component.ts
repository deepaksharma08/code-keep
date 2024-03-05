import { Component, OnInit } from '@angular/core';
import { SnippetService } from '../../services/snippet.service';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { SnippetResponse } from 'src/app/domain/snippet-response';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {
  snippets: SnippetResponse[] = [];
  selectedSnippet: SnippetResponse = {} as SnippetResponse;

  constructor(protected snippetService: SnippetService) {
    this.snippets = this.generateFakeSnippets();
  }

  ngOnInit(): void {

  }

  private generateFakeSnippets(): SnippetResponse[] {
    let response: SnippetResponse[] = [
      {
        title: "Snippet1Snippet1Snippet1",
        description: "Description for snippet1.Description for snippet1.Description for snippet1.Description for snippet1.Description for snippet1.Description for snippet1",
        code: `//variable to store date in string format
        String yesterdayDate=null; \n
         
        //to get calendar instance 
        Calendar cal = Calendar.getInstance();
         
        //subtract 1 from calendar current date 
        cal.add(Calendar.DATE, -1);
         
        //format date
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy");
         
        //get formatted date
        yesterdayDate=dateFormat.format(cal.getTime());
         
        System.out.println("Yesterday's date = "+ yesterdayDate); 
        /variable to store date in string format
        String yesterdayDate=null; \n
         
        //to get calendar instance 
        Calendar cal = Calendar.getInstance();
         
        //subtract 1 from calendar current date 
        cal.add(Calendar.DATE, -1);
         
        //format date
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy");
         
        //get formatted date
        yesterdayDate=dateFormat.format(cal.getTime());
         
        System.out.println("Yesterday's date = "+ yesterdayDate)
        /variable to store date in string format
        String yesterdayDate=null; \n
         
        //to get calendar instance 
        Calendar cal = Calendar.getInstance();
         
        //subtract 1 from calendar current date 
        cal.add(Calendar.DATE, -1);
         
        //format date
        DateFormat dateFormat = new SimpleDateFormat("dd MMM yyyy");
         
        //get formatted date
        yesterdayDate=dateFormat.format(cal.getTime());
         
        System.out.println("Yesterday's date = "+ yesterdayDate)
         `
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
      {
        title: "Snippet1",
        description: "Description for snippet1"
      },
    ]
    this.selectedSnippet = response[0];
    return response;
  }

  public rowClick(snippet: SnippetResponse) {
    this.selectedSnippet = snippet;
  }

}

