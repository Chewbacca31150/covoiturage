import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule, MatSelectModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule, MatSelectModule],
  exports: [MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule, MatSelectModule],
})
export class AppModuleMaterial { }