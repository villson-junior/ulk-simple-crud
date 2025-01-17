import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  optionList = ["New", "Used", "Refurbished", "Others"];
  productForm !: FormGroup;
  actionButton: string = "SAVE";

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      date: [new Date(), Validators.required],
      option: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
    });

    if (this.editData) {
      this.actionButton = "UPDATE";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['option'].setValue(this.editData.option);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
    }
  }

  save() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProd(this.productForm.value).subscribe({
          next: (res) => {
            alert("PRODUCT ADDED SUCCESSFULLY");
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            alert("ERROR WHILE ADDING PRODUCT");
          }
        });
      }
    } else {
      this.update();
    }
  }

  update() {
    this.api.putProd(this.productForm.value, this.editData.id).subscribe({
      next:(res) => {
        alert("PRODUCT UPDATED SUCCESSFULLY");
        this.productForm.reset();
        this.dialogRef.close('update');
      }, error:(err) => {
        alert("ERROR WHILE UPDATING THE RECORD")
      }
    });
  }

}
