import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  success(message: String){
    $(function() {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000

      })
      Toast.fire({
        icon: 'success',
        tittle: message
      })

    })
  }

  fail(message: string) {
    $(function () {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      })
      Toast.fire({
        icon: 'error',
        title: message
      })

    })
  }
}
