import { Component } from '@angular/core';
import { LoggingService } from '../loggin.service';
import { AccountsService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] //usado para adicionar métodos e usa-lo neste component
})

export class NewAccountComponent {
  constructor(private logginService: LoggingService,
  private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('new staus: '+status)
    )
  } //usado para instanciar o nossa classe com o método que preciso

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.logginService.logStatusChange(accountStatus)  //chama o método como se ele estivesse no nosso escopo
  }
}
