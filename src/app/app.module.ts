import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { DataApiWebService } from './services/data-api-web.service';
import { FuncionesService } from './services/funciones.service';
import { CurrencyPipe } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';


registerLocaleData(localeEs, 'es-AR');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar: true,
      preventDuplicates: true,
    }),
  ],
  providers: [
    FormBuilder,
    DataApiWebService,
    FuncionesService,
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
