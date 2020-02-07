import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Computer } from '../shared/model/computer.model';
import { ComputerService } from '../shared/service/computer.service';
import { SelectionModel } from '@angular/cdk/collections';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})

export class ComputerListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'introduction date', 'discontinued date', 'company'];
  dataSource: MatTableDataSource<Computer>;
  selection = new SelectionModel<Computer>(true, []);
  selectionMode: boolean;
  computers: Computer[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      private readonly computerService: ComputerService,
      private readonly spinnerService: NgxSpinnerService
  ) {
      this.allComputers();
      this.selectionMode = false;
  }

  ngOnInit() {
    this.spinnerService.show();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  allComputers() {
    this.computerService.getComputers().subscribe(
      (result: Computer[]) => {
        this.computers = result;
        this.dataSource = new MatTableDataSource(this.computers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinnerService.hide();
        }, 500);
      },
      (error) => {
        // traiter l'error
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = (this.dataSource !== undefined) ? this.dataSource.data.length : 0;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Computer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  deleteComputer() {
    this.spinnerService.show();
    this.selection.selected.forEach(computer => this.computerService.deleteComputer(computer.id)
        .subscribe(() => {
          this.allComputers();
        }
      )
    );
  }
}
