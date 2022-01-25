import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

data={
  to:"",
  subject:"",
  message:""
}

flag=false;

  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log("data: ",this.data);

    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){

      this.snak.open("fields cannot be empty","OK");
      return;
    }

    
this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag=false;
        this.snak.open("Sent Successfully","OK")

        

      },
      error=>{
        console.error();
        this.flag=false;
        this.snak.open("Something went wrong","OK")
        

      }
      
    )
  }

}
