import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
ConsultaService

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private service: ConsultaService){}

  ngOnInit(): void {
    
  }
}
