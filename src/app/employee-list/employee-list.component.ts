import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
    // this.employees = [{
    //   "id": 1,
    //   "fullname": "shakthi",
    //   "leavedate": "11/11/21",
    //   "leavetype": "Personal Leave",
    //   "reason": "Heavy Rain"
    // },
    // {
    //   "id": 2,
    //   "fullname": "Bharathi",
    //   "leavedate": "21/11/21",
    //   "leavetype": "Floating Leave",
    //   "reason": "Diwali"
    // },
    // {
    //   "id": 3,
    //   "fullname": "Gogul",
    //   "leavedate": "23/11/21",
    //   "leavetype": "Combo Off Leave",
    //   "reason": "New Year"
    // }
    // ];
  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

}
