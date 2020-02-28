import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  private msg: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any) {
    this.msg = this.data.msg;
  }

  ngOnInit() {
  }

}
