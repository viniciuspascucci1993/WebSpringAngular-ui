import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { Cliente } from './services/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-angular';
  private cliente: Cliente = new Cliente();
  private clientes: Cliente[] = new Array();

  constructor( private clienteService: ClienteService) { }



  ngOnInit() { 
    return this.findAll();
  }

  findAll(): void {
    this.clienteService.findAll()
                        .subscribe(res => {
                          console.log(res);
                          this.clientes = res;
                        })
   }


  insert(): void {

    this.clienteService.insert( this.cliente )
                        .subscribe( response => {
                          return this.findAll();
                        } )
  }


  }

