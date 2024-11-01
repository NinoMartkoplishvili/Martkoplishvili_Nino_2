import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MN2';

  Users =[

    {
      FirstName: 'Nino',
      LastName: 'Martkoplishvili',
      Age: 89,
      
       
    },
    {
      FirstName: 'Barbare',
      LastName: 'Martkoplishvili',
      Age: 15,
      
    },
    {
      FirstName: 'Nino',
      LastName: "Mchedlishvili",
      Age: 45,
     }, ] 
}
