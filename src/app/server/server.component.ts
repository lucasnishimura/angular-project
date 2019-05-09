import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'online';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getServerStatusBool(){
        if( this.serverStatus === 'online'){
            return true;
        }else{
            return false;
        }
    }

    alterarStatus(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red' 
    }
}