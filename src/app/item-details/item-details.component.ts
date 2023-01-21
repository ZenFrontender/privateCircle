import { Component, OnInit } from '@angular/core';
import { DetailService } from '../service/detail.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  numOfEnt = 0;

  constructor(private detail: DetailService) {

  }

  ngDoCheck() {
    this.numOfEnt = this.detail.getNoOfEntities();
  }

  ngOnInit(): void {
  }


  companyList = ['Godrej Consumer Products Limited', 'Infosys Limited', 'Wipro Limited', 'Tata Chemicals Limited', 'ITC Limited', 'Jubilant Life Sciences Limited', 'Grasim Industries Limited', 'Vedanta Limited', 'Tata Power Company Limited', 'JSW Steel Limited', 'UPL Ltd.', 'Mahindra & Mahindra Ltd', 'Dr. Reddy’s Laboratories', 'Tech Mahindra', 'Hindustan Unilever (HUL)', 'Ambuja Cement Ltd', 'Toyota Kirloskar Motor India', 'Larsen & Toubro (L&T)', 'NTPC Ltd.', 'Hindustan Zinc Ltd. (HZL)', 'UltraTech Cement', 'Bharat Petroleum Corporation Ltd. (BPCL)', 'Adani Ports & Special Economic Zone (APSEZ)', 'Apollo Tyres', 'Hero MotoCorp', 'Voltas', 'Glenmark Pharmaceuticals', 'Tata Consultancy Services', 'Mahindra & Mahindra Financial Services', 'Adani Power', 'Aditya Birla Fashion and Retail Ltd. (ABFRL)', 'Tata Steel', 'Hindalco Industries', 'Cipla', 'Godrej Industries Ltd.', 'Cisco Systems India Pvt.', 'Marico', 'Shree Cement', 'Adani Transmission', 'Reliance Industries Ltd.', 'Indian Oil Corporation', 'HDFC Bank', 'IndusInd Bank', 'Steel Authority f India (SAIL)', 'Tata Motors Ltd.', 'GAIL (India)', 'ACC Ltd.', 'Maruti Suzuki India Ltd.', 'HCL Technologies', 'Tata Communications', 'Tata Consumer Products', 'Dalmia Bharat Group', 'JSW Energy', 'Power Grid Corporation of India', 'Welspun India', 'Nestle India', 'Hindustan Petroleum Corporation', 'Oil India', 'Axis Bank', 'Larsen and Toubro Infotech', 'Mindtree', 'Cummins India', 'Havells India.', 'Eicher Motors', 'Exide Industries', 'Bharat Forge', 'Siemens', 'Bajaj Auto', 'Dabur India', 'Coca-Cola India Private Limited', 'Jain Irrigation Systems', 'il and Natural Gas Corporation', 'Asian Paints', 'United Spirits', 'Piramal Enterprises', 'Housing Development Finance Corporation', 'JK Tyre & Industries', 'Aurobindo Pharma', 'NMDC', 'Bosch', 'State Bank of India', 'YES Bank', 'Bharti Airtel', 'ABB India', 'Rural Electrification Corporation', 'National Aluminium Company (NALCO)', 'harat Electronics', 'Mahindra CIE Automotive', 'Jindal Steel and Power Limited', 'Torrent Power', 'Bharat Heavy Electricals (BHEL)', 'Ashok Leyland', 'RB Bank', 'Jindal Stainless', 'NLC India', 'CESC', 'GMR Infrastructure', 'pollo Hospitals Enterprise', 'Vodafone Idea'];


}
