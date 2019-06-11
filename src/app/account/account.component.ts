import { Component, Input } from '@angular/core';
import { LoggingService } from '../loggin.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService] //usado para adicionar métodos e usa-lo neste component
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LoggingService,
  private accountsService: AccountsService){} //usado para instanciar o nossa classe com o método que preciso

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status)
    // this.logginService.logStatusChange(status)  //chama o método como se ele estivesse no nosso escopo
    this.accountsService.statusUpdated.emit(status);
  }
}
