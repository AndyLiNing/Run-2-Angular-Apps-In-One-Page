import { Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MyLibComponent } from '../../projects/my-lib/src/lib/my-lib.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    if (customElements.get('my-element')) {
      return;
    }
    const el = createCustomElement(MyLibComponent, { injector: this.injector });
    customElements.define('my-element', el);
  }
}
