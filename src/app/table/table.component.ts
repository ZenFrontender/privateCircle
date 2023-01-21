import { Component, OnInit } from '@angular/core';
import { DetailService } from '../service/detail.service';
import { ShareSearchService } from '../service/share-search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  searchText: any;


  constructor(private share: ShareSearchService, private detail: DetailService) {
  }

  ngDoCheck() {
    this.searchText = this.share.getString();
  }

  ngOnInit(): void {
  }

  tableData = [
    { date: "", listName: "Competitive Intelligence", numberOfEntities: 0 },
    { date: "", listName: "My Vendors", numberOfEntities: 0 },
    { date: "", listName: "My Customers", numberOfEntities: 0 },
    { date: "Jul 23", listName: "Test_30_results", numberOfEntities: 28 },
    { date: "Jun 28", listName: "To_index", numberOfEntities: 100 },
    { date: "Apr 10", listName: "KPMG Requested Companies-Listed Set_Prasada Kumar", numberOfEntities: 34 },
    { date: "Mar 12", listName: "Error Case-LTV To EBITDA Blank_Prasda Kumar", numberOfEntities: 24 },
    { date: "Dec 14", listName: "Two Companies", numberOfEntities: 2 },
    { date: "Nov 01", listName: "Custom", numberOfEntities: 30 },
    { date: "Oct 29", listName: "Mumbai", numberOfEntities: 3 },
    { date: "Nov 23", listName: "Delhi", numberOfEntities: 3 }
  ]

  val(event: any) {
    this.detail.setNoOfEntities(event);
  }
}
