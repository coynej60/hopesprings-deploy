import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseComponent } from '../_components/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseComponent implements OnInit, OnDestroy {
  name: string = '';
  email: string = '';
  findus: string = '';
  message: string = '';
  sub: Subscription = new Subscription();

  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
  }

  submitContact(): void {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 
                                     'api-key': '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', 
                                     'Accept': 'application/json'});
    const options = { headers: headers };
    let emailBody = {
      sender: {
        name: this.name,
        email: this.email
      },
      to: [
        {
          email: 'jake_coyne@yahoo.com',
          name: 'Jake Coyne'
        }
      ],
      subject: 'Contact Us form from Hope Springs Website',
      htmlContent: `<html><head></head><body><p>Hello,</p><p>${this.message}</p><p>Found Us: ${this.findus}</p></body></html>`
    };
    let body = JSON.stringify(emailBody);
    this.sub = this.httpClient.post('http://localhost:3001/email', body, options).subscribe(res => {
      console.log(res);
      alert('Message Sent');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.findus = '';
    this.message = '';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
