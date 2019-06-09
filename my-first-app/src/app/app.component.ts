import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,FormsModule}  from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',

styleUrls: ['./app.component.css'],

})
export class AppComponent {


userForm: FormGroup;
http: HttpClient;
username: string;
password: string;

public show:boolean = false;
  public buttonName:any = 'Show';


public showCustomers:boolean = false;
public customersButtonName:any = 'clicktoShow';


Employee = 'Employee-Details';
Customer = 'Customer-Details';
onSubmit(value:any){
console.log(value)




}



   postLogin() {
   this.http.post('/api',
         JSON.stringify({

         })).subscribe(
         data => {
           alert('ok');
         },
         error => {
           console.log(JSON.stringify(error.json()));
         }
         )
   }

   login() : void {

     }


      myresponse: any;
      customerResponse:any;
       // Url to fetch the employee records from the spring application.
       readonly APP_URL = 'http://localhost:8080/Springmvcangular';

       constructor(private _http: HttpClient) { }

       // Method to fetch all employees from the database table.
       getAllEmployees() {
       this.show = !this.show;
       if(this.show)  {
             this.buttonName = "Hide";
         this._http.get(this.APP_URL + '/getemployees').subscribe(
           data => {
             this.myresponse = data;
             console.log(this.myresponse);
             console.log(data);
           },
           error => {
             console.log('Error occured', error);
           }
         );
         }else{
                this.buttonName = "Show";
                }
       }

getAllCustomers() {
       this.showCustomers = !this.showCustomers;
       if(this.showCustomers)  {
             this.customersButtonName = "clicktohide";
         this._http.get(this.APP_URL + '/getcustomers').subscribe(
           data => {
             this.customerResponse = data;
             console.log(this.customerResponse);
             console.log(data);
           },
           error => {
             console.log('Error occured', error);
           }
         );
         }else{
                this.customersButtonName = "clicktoShow";
                }
       }




}
