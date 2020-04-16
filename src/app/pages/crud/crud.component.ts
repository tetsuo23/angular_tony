import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/data/crud.service'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(public crud: CrudService) { }
  // le constructeur appelle les fonctions de crud service
  ngOnInit(): void {

  }
  onClickCreate() {
    console.log('Create Clicked');
    this.crud.create();
    // "this.crud" stipule le document crud, auquel on applique la fonction "create()" du service
  }
  onClickRead() {
    console.log('Read Clicked');
    this.crud.read();
  }
  onClickUpdate() {
    console.log('Update Clicked');
    this.crud.update();
  }
  onClickDelete() {
    console.log('Delete Clicked');
    this.crud.delete();
  }

}
