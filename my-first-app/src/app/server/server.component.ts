import { Component} from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
})
export class ServerComponent{
	serverId: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus;
	}

}
// Angular uses components to build web pages and uses modules
// to basically bundle different pieces(ie:components of your app into packages)
