import { Issue } from './../../model/issue';
import { IssuesService } from 'src/app/service/issues.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {

  issueForm : FormGroup | undefined;

  @Output() formClose = new EventEmitter();

  suggestions: Issue[]= [];


  constructor(private builder: FormBuilder, private issuesService : IssuesService) { }

  ngOnInit(): void {

    this.issueForm = this.builder.group( {
      title : ['', Validators.required],
      description : [''],
      priority : ['', Validators.required],
      type : ['', Validators.required],
    });

    this.issueForm.get('title')?.valueChanges.subscribe((t: string) => {
      this.suggestions = this.issuesService.getSuggestions(t);
    });

  }

  addIssue(){
    
    if(this.issueForm && this.issueForm.invalid){
      this.issueForm.markAllAsTouched;
      return;
    }

    this.issuesService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

  

}
