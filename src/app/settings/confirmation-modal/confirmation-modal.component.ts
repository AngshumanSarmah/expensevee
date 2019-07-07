

import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from 'src/app/services/expenses.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'model-open',
  templateUrl: './confirmation-modal.component.html'
})
export class NgbdModalContent {
  @Input() selectedIndex:string;
  @Input() status:string;

  constructor(private activeModal: NgbActiveModal,
              private categoryService: CategoriesService) {}
  delete(){
    this.activeModal.close('Ok click');
    this.status = this.status == "1" ? "0" : "1";
    this.categoryService.deleteCategory(+this.selectedIndex,this.status);
  }
}

@Component({
  selector: 'confirm-component',
  template: `<span><i class="fa fa-trash" aria-hidden="true" style="cursor:pointer;font-size:24px;color:red" (click)="open()"></i></span>`
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal,
              private categoryService:CategoriesService) {}
  @Input() selectedIndex:string;
  @Input() status:string;
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.selectedIndex = this.selectedIndex;
    modalRef.componentInstance.status = this.status;
  }
}