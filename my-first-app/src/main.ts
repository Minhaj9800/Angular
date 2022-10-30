import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// this line -> bootstrap start our angular application by passing an app module
// to this method (AppModule refers app module.ts)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
