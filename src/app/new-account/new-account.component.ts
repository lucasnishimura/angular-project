import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../loggin.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService] //usado para adicionar métodos e usa-lo neste component
})

export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logginService: LoggingService){} //usado para instanciar o nossa classe com o método que preciso

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.logginService.logStatusChange(accountStatus)  //chama o método como se ele estivesse no nosso escopo
  }
}
