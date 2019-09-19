import { Component , OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  
  selectedKey
  selectedSearch
  tablekeys = []
  defaultColSelection
  data = []
  
  ngOnInit(): void {
   
    this.getDefaults()
  }

  onKeydownEvent(e) {
    console.log("key do")
    if (!e.target.value.length) {
      this.getDefaults()
      
    }
  }

  getDefaults() {
    this.selectedSearch = ""
    this.selectedKey = "First"
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      paging: false,
      searching: false,
    };
   

    this.tablekeys = [
      {
        title: 'ID',
        data: 'ID',
        show : true
      },
      {
        title: 'First',
        data: 'First',
        show : true
      },
      {
        title: 'Middle',
        data: 'Middle',
        show : true
      },
      {
        title: 'Last',
        data: 'Last',
        show : true
      },
      {
        title: 'Sex',
        data: 'Sex',
        show : true
      },
      {
        title: 'Age',
        data: 'Age',
        show : true
      },
      {
        title: 'Hair Colour',
        data: 'Hair Colour',
        show : true
      }
    ]
  
    this.data  = [
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
  }

  onSearch(e) {
    const { selectedSearch, selectedKey } = this;
    console.log("selectedSearch", selectedSearch)
    const self = this
    this.data = this.data.filter((data) => {
      console.log("data[selectedKey]", data[selectedKey])
      return new RegExp(`${data[selectedKey]}`.toLowerCase()).test(selectedSearch.toLowerCase())
    })
    
  }

  reset() {
    this.getDefaults()
  }

  
}
