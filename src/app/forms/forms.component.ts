import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
ConsultaService

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

    cep: any
    logradouro: any
    localidade: any
    bairro: any
    uf: any
    ddd: any

  constructor(private service: ConsultaService){}

  ngOnInit(): void { }
  buscaCep(){
    this.service.getCep(this.cep).subscribe((data) => {
      this.cep = data.cep
      this.logradouro = data.logradouro
      this.localidade = data.localidade
      this.bairro = data.bairro
      this.uf = data.uf
      this.ddd = data.ddd
      console.log(data)
    })
  }
  blur(event: any){
    this.buscaCep()
    console.log(this.buscaCep)
  }
}
