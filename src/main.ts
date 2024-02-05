import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/app.route';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE),
    provideHttpClient(),
  ]
})