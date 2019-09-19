import { Component , OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  @ViewChild(DataTableDirective,)
  datatableElement: DataTableDirective;
  title = 'final-app';
  dtOptions: DataTables.Settings = {};
  
  selectedKey = "First"
  selectedSearch = ""
  tablekeys = [
    {
      title: 'ID',
      data: 'ID'
    },
    {
      title: 'First',
      data: 'First'
    },
    {
      title: 'Middle',
      data: 'Middle'
    },
    {
      title: 'Last',
      data: 'Last'
    },
    {
      title: 'Sex',
      data: 'Sex'
    },
    {
      title: 'Age',
      data: 'Age'
    },
    {
      title: 'Hair Colour',
      data: 'Hair Colour'
    }
  ]

  data  = [
    {
      "ID": 1,
      "First": "Tom",
      "Middle": "aa",
      "Last": "Smith",
      "Sex": "Male",
      "Age": 20,
      "Hair Colour": "Red"
    },
    {
      "ID": 2,
      "First": "Andrew",
      "Middle": "bb",
      "Last": "Jones",
      "Sex": "Male",
      "Age": 25,
      "Hair Colour": "Red"
    },
    {
      "ID": 3,
      "First": "John",
      "Middle": "cc",
      "Last": "Smith",
      "Sex": "Male",
      "Age": 30,
      "Hair Colour": "Black"
    },
    {
      "ID": 4,
      "First": "Sarah",
      "Middle": "dd",
      "Last": "Jones",
      "Sex": "Woman",
      "Age": 35,
      "Hair Colour": "Black"
    },
    {
      "ID": 5,
      "First": "Eve",
      "Middle": "ee",
      "Last": "Smith",
      "Sex": "Woman",
      "Age": 40,
      "Hair Colour": "Brown"
    },
    {
      "ID": 6,
      "First": "Alice",
      "Middle": "ff",
      "Last": "Jones",
      "Sex": "Woman",
      "Age": 45,
      "Hair Colour": "Brown"
    }
  ]
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      paging: false,
      searching: false,
    };
   
   
  }

  onSearch(e) {
    const { selectedSearch, selectedKey } = this;
    console.log("")
    const self = this
    this.data = this.data.filter((data) => {
      return new RegExp(data[selectedKey].toLowerCase()).test(selectedSearch.toLowerCase())
    })
    console.log("this.data", this.data)
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      console.log("dtInstance", dtInstance)
      
    });
  }

  
}
