import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Computer } from '../shared/model/computer.model';
import { ComputerService } from '../shared/service/computer.service';


@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})

export class ComputerListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'introduction date', 'discontinued date', 'company'];
  dataSource: MatTableDataSource<Computer>;

  computers: Computer[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private readonly computerService: ComputerService) {
    this.allComputers();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      },
      (error) => {
        // traiter l'error
      }
    );
  }
}
