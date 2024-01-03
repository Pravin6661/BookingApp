import { Component } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent {
  employeedetails:any;
  salary:boolean=true;
  hidebtn:boolean=true;
    constructor(){
      this.employeedetails =[
        {
          empID:"62",
          name:"Muthuvel",
          designation:"ASE",
          location:"5/6/2016",
          address:"Hyderadbad, hitechcity",
          salary:"75000"
        },
        {
          empID:"81",
          name:"Sandeep",
          designation:"TL",
          location:"5/7/2018",
          address:"Bangalore, Whitefeild",
          salary:"900000"
        },
        {
          empID:"87",
          name:"Saran",
          designation:"SE",
          location:"7/12/2016",
          address:"Chennai, tambaram",
          salary:"65546"
        },
        {
          empID:"120",
          name:"Vijay",
          designation:"SE",
          location:"9/10/2016",
          address:"Hyderadbad, hitechcity",
          salary:"65400"
        },
        {
          empID:"88",
          name:"Samantha",
          designation:"AM",
          location:"4/6/2016",
          address:"Bangalore, Whitefeild",
          salary:"34555"
        },
        {
          empID:"542",
          name:"Samrish",
          designation:"ASE",
          location:"3/6/2016",
          address:"Chennai, tambaram",
          salary:"34534"
        },
        {
          empID:"741",
          name:"Andrew",
          designation:"ASE",
          location:"5/6/2016",
          address:"Hyderadbad, hitechcity",
          salary:"345345"
        },
        {
          empID:"451",
          name:"Devi",
          designation:"TL",
          location:"3/6/2016",
          address:"Bangalore, Whitefeild",
          salary:"4534534"
        },
        {
          empID:"546",
          name:"Rajini",
          designation:"M",
          location:"3/6/2016",
          address:"Hyderadbad, hitechcity",
          salary:"453454"
        },
        {
          empID:"152",
          name:"Harini",
          designation:"SE",
          location:"3/6/2016",
          address:"Chennai, tambaram",
          salary:"364535"
        }
      ];
    }

    hideSalary(){
      this.salary=false;
      this.hidebtn=false;
    }

    showbtn(){
      this.salary=true;
      this.hidebtn=true;
    }
}
