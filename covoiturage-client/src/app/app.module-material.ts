import { NgModule } from '@angular/core';

import { MatButtonModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatSliderModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatTabsModule, MatSliderModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule, MatSelectModule],
  exports: [MatButtonModule, MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatTabsModule, MatSliderModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatTableModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule, MatSelectModule],
})
export class AppModuleMaterial { }