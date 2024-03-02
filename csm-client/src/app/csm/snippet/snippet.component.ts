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

  snippetForm: FormGroup;
  snippetTitle: string = "title";
  snippetDesc: string = "description";
  snippets: SnippetResponse[] = [];
  selectedSnippet: SnippetResponse = {} as SnippetResponse;

  constructor(protected snippetService: SnippetService) {
    this.snippetForm = new FormGroup(
      {
        snippetText: new FormControl('', Validators.required),
      }
    )

    this.snippets = this.generateFakeSnippets();
  }

  ngOnInit(): void {

  }

  public saveSnippet() {

    this.snippetService.getCodeSnippet(this.snippetForm.controls['snippetText'].value).subscribe(
      {
        next: (value: SnippetResponse) => {
          this.snippetTitle = value.title;
          this.snippetDesc = value.description;
        }, error(error: Error) {
          console.error(error.message);
        }
      }
    )
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
         
        System.out.println("Yesterday's date = "+ yesterdayDate);  `
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
      }
    ]
    return response;
  }

  public rowClick(snippet: SnippetResponse) {
    this.selectedSnippet = snippet;
  }

}

