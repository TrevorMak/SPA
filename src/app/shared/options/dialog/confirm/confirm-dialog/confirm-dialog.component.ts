import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenuOption } from 'src/app/customers/customers/entities/menu-option';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  @Output()
  public cancelClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public confirmClick: EventEmitter<any> = new EventEmitter<any>();

  public constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { confirmButtonText: string, textBody: string, title: string })
    { }

    public cancelClicked(option: MenuOption) : void
    {
      this.cancelClick.emit(option);
      this.dialogRef.close();
    }

    public confirmClicked(option: MenuOption) : void
    {
      this.confirmClick.emit(option);
      this.dialogRef.close();
    }
}
