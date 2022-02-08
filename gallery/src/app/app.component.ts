import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gallery';

  ngOnInit(): void {
    this.putText();
  }

  async putText() {
    const result = await Storage.put('test.txt', new Date().toLocaleString());
    console.log(result);
  }
}
