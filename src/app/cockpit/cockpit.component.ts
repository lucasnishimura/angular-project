import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //o outoput serve para indicar que os dados daqui processarão em outro lugar, indica a variável que vai enviar eo tipo dela
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
     serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
     //  serverContent: this.newServerContent
    })
  }
  
  onAddServerBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
      })
  }

  constructor() { }

  ngOnInit() {
  }

}
