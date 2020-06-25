import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
@Injectable({providedIn: 'root'})


export class AlertService {
  success(mgs) {
    return Swal.fire(
      'Success!',
      mgs,
      'success'
    );
  }

  error(mgs) {
    return Swal.fire({
      icon: 'error',
      title: 'Something Went Wrong !!!',
      text: mgs,
      customClass: {
        confirmButton: 'button'
      },
    });
  }

  actionSuccess(msg) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    });
  }

  actionConfirm(msg) {
    return Swal.fire({
      title: msg,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }
}
