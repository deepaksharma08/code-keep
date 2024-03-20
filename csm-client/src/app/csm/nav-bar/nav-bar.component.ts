import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SnippetDTO } from 'src/app/domain/snippet-response';
import { InstructionService } from 'src/app/services/instruction.service';
import { SnippetService } from 'src/app/services/snippet.service';
import { SaveSnippetDialogComponent } from 'src/app/shared/save-snippet-dialog/save-snippet-dialog.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('saveDialog')
  private saveSnippetDialog: SaveSnippetDialogComponent;

  constructor(private router: Router,
    private snippetService: SnippetService,
    private instructionService: InstructionService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigateByUrl('csm/snippet')
    document.getElementById('snippet').classList.add('active');
  }

  public openSaveSnippetDialog() {
    this.saveSnippetDialog.showDialog();
  }

  public changeActiveTab(id: string) {
    switch (id) {
      case 'snippet':
        this.router.navigateByUrl('csm/snippet')
        document.getElementById('snippet').classList.add('active');
        document.getElementById('commands').classList.remove('active');
        document.getElementById('process').classList.remove('active');
        break;
      case 'commands':
        this.router.navigateByUrl('csm/command')
        document.getElementById('commands').classList.add('active');
        document.getElementById('snippet').classList.remove('active');
        document.getElementById('process').classList.remove('active');
        break;
      case 'process':
        this.router.navigateByUrl('csm/process')
        document.getElementById('process').classList.add('active');
        document.getElementById('commands').classList.remove('active');
        document.getElementById('snippet').classList.remove('active');
        break;
      default:
        console.warn("Navigation link not recognized");
        break;
    }
  }

  public snippetDataFromUserReceived(snippetData: SnippetDTO) {
    this.snippetService.saveCodeSnippet(snippetData).subscribe({
      next: (value: SnippetDTO) => {
        this.router.navigateByUrl('csm/'.concat(value.type));
        this.instructionService.sendInstruction(value.type);
      }, error: (err: Error) => {
        this.toast.error("There was an error saving your snippet");
        console.error(err);
      }
    })
  }
}
