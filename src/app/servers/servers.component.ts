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
  serverCreationStatus =  'No Server';
  isServerCreated = false;
  servers = ['Vika', 'Roman'];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.allowNewserver = true, 2000);
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
