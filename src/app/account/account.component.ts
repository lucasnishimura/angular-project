import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService] //usado para adicionar métodos e usa-lo neste component
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logginService: LoggingService){} //usado para instanciar o nossa classe com o método que preciso

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.logginService.logStatusChange(status)  //chama o método como se ele estivesse no nosso escopo
  }
}
