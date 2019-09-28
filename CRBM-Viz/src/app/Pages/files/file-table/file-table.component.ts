import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CrbmConfig } from 'src/app/crbm-config';
import { SocialUser } from 'angularx-social-login';
import { CrbmAuthService } from 'src/app/Services/crbm-auth.service';


@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.sass']
})
export class FileTableComponent implements OnInit {

  serverUrl = CrbmConfig.CRBMAPI_URL;
  displayedColumns: string[] = ['fileId', 'filename', 'createdBy', 'accessType'];
  dataSource: MatTableDataSource<object>;
  currentUser: SocialUser = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private http: HttpClient, private crbmAuthService: CrbmAuthService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.getFileData()
    .subscribe(
      success => {
        console.log('File fetch was successful', success);
        this.dataSource = new MatTableDataSource(success['data']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log('Error file fetching file info');
      }
    );

    this.currentUser = this.crbmAuthService.user;
  }

  getFileData() {
    return this.http.get(`${this.serverUrl}/file`);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


