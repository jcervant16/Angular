import { Component, OnInit, ViewChild } from '@angular/core';
import { FuncionesService } from '../../../services/funciones.service';
import { ActivatedRoute } from '@angular/router';
import { DataApiWebService } from '../../../services/data-api-web.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isOpenDate = false;
  bsDateCurrent = new Date();
  bsRangeValue: Date[];
  bsConfig: Partial<BsDatepickerConfig>;
  @ViewChild('modalSchedule', { static: false }) modalSchedule: ModalDirective;
  constructor(private funciones: FuncionesService,
    private api: DataApiWebService,
    private localeService: BsLocaleService
  ) {

  }

  ngOnInit() {
    console.log('home')
  }

  onChangeFilterDate(date: any): void {

    //Valido que tenga datos
    if (date != null) {
      const date1 = this.funciones.dateFormat(date[0]);
      const date2 = this.funciones.dateFormat(date[1]);
    }
  }

  onOpenModalSchedule(): void {

    this.modalSchedule.config = {
      backdrop: 'static'
    }

    this.modalSchedule.show();
    let onShown: boolean = true;
    this.modalSchedule.onShown.subscribe(() => {
      if (onShown) {
        //Llamar un servicio para mostrar cuando se abra el modal
        onShown = false;
      }
    });
  }
}