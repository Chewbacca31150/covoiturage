import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-dialog-overview',
    templateUrl: './dialog-overview.component.html',
})
export class DialogOverviewComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewComponent>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
