import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ClientesService } from '../_services/clientes.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    clientes = [];

    listarTipo = [
        { codigo: 0, descricao: '' },
        { codigo: 1, descricao: 'Pessoa Jurídica' },
      ];

    constructor(private clienteService: ClientesService) {}

    ngOnInit() {
        this.clienteService.getAll()
            .pipe(first())
            .subscribe(clientes => {
                this.clientes = clientes;
            });
    }

    // deleteUser(id: number) {
    //     const user = this.users.find(x => x.id === id);
    //     // user.isDeleting = true;
    //     this.accountService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.users = this.users.filter(x => x.id !== id));
            
    //     this.accountService.getAll();
    //     this.load()
    // }

    load() {
        location.reload()
      }

      
  retornarTipoCli(tipo: number): string {
    let nome = '';
    switch (tipo) {
      case 0:
        nome = 'Pessoa Física';
        break;
      case 1:
        nome = 'Pessoa Jurídica';
        break;
    }
    return nome;
  }
}