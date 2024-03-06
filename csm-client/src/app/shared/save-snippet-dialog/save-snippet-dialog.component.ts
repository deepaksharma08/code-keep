import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnippetResponse } from 'src/app/domain/snippet-response';
import { SnippetService } from 'src/app/services/snippet.service';

@Component({
  selector: 'save-snippet-dialog',
  templateUrl: './save-snippet-dialog.component.html',
  styleUrls: ['./save-snippet-dialog.component.css']
})
export class SaveSnippetDialogComponent implements OnInit {
  display: boolean = false;
  snippetForm: FormGroup;
  constructor(private snippetService: SnippetService) {
    this.snippetForm = new FormGroup(
      {
        snippetText: new FormControl('', Validators.required),
      }
    )

  }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }

  public saveSnippet() {

    // this.snippetService.saveCodeSnippet(this.snippetForm.controls['snippetText'].value).subscribe(
    //   {
    //     next: (value: SnippetResponse) => {
    //     }, error(error: Error) {
    //       console.error(error.message);
    //     }
    //   }
    // )
  }

}
