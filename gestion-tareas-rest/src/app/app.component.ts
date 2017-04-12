import { Component } from '@angular/core';
import { Elem } from './Elem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public elem: Elem ;
  title = 'A Checklist';
  lista: Elem[] = [];
  auxElem = '';
  active = false;
  check = false;

  setAdd() {
    this.elem = new Elem(this.auxElem, false);
    this.lista.push(this.elem);
    this.auxElem = '';
    this.active = true ;
    console.log('-------------------');
    this.lista.forEach(element => {
      console.log(element.value + '-' + element.check);
    });
    }
  elemDelete(elem) {
    let index = this.lista.indexOf(elem, 0); // Busca desde el elemento 0 si coincide con el string q viene
    if (index > -1){
      this.lista.splice(index, 1 ); // Borra de la lista desde el indice una posicion
    }
    if (this.lista.length === 0) {
      this.active = false;
    }
    console.log('-------------------');
    this.lista.forEach(element => {
      console.log(element.value + '-' + element.check);
    });
  }
  checking(elem: Elem) {
    elem.check = !elem.check;
  }
}
