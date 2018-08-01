import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  name = 'vika';
  msg = 'Server isn`t create';
  serverName = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.allowNewserver = true, 2000);
  }

  onCreateServer() {
    this.msg = 'Server was created';
  }

  onUpdateServerName(event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
