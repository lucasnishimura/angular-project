import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //o outoput serve para indicar que os dados daqui processarão em outro lugar, indica a variável que vai enviar eo tipo dela
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(){
    this.serverCreated.emit({
     serverName: this.newServerName,
     serverContent: this.newServerContent
    })
  }

  onAddServerBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
     })
  }

  constructor() { }

  ngOnInit() {
  }

}
