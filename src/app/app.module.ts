import { IssueReportComponent } from './core/issue-report/issue-report.component';
import { IssueListComponent } from './core/issue-list/issue-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from './helper/confirm-dialog/confirm-dialog.component';
import { HeaderComponent } from './core/header/header.component'

@NgModule({
  declarations: [
    AppComponent, IssueListComponent, IssueReportComponent, ConfirmDialogComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
