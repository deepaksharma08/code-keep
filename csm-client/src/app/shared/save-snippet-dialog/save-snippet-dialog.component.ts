import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnippetDTO } from 'src/app/domain/snippet-response';

@Component({
  selector: 'save-snippet-dialog',
  templateUrl: './save-snippet-dialog.component.html',
  styleUrls: ['./save-snippet-dialog.component.css']
})
export class SaveSnippetDialogComponent implements OnInit {
  display: boolean = false;
  snippetForm: FormGroup;

  @Output()
  snippetData: EventEmitter<SnippetDTO> = new EventEmitter();

  constructor() {
    this.snippetForm = new FormGroup(
      {
        snippetText: new FormControl('', Validators.required),
        snippetType: new FormControl('snippet', Validators.required)
      }
    )

  }

  get f() {
    return this.snippetForm.controls;
  }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
    this.snippetForm.patchValue({
      snippetText: '',
      snippetType: 'snippet'
    })
  }

  public saveSnippet() {
    if (!this.f['snippetText']) {
      return;
    }

    let snippetData: SnippetDTO = {
      code: this.f['snippetText'].value,
      type: this.f['snippetType'].value,
      userId: sessionStorage.getItem("USER")
    }
    this.closeDialog();
    this.snippetData.emit(snippetData);
  }

}
