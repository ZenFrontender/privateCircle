import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ShareSearchService } from '../service/share-search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: any;
  constructor(private share: ShareSearchService, private router: Router) { }

  ngOnInit(): void {
    this.share.setString(this.searchText);
  }
  onInput(val: string) {
    this.share.setString(val);

  }
}
