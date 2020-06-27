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
  successCounterup(title, msg): void {
    let timerInterval;
    Swal.fire({
      title: title,
      html: msg,
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft().toString();
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
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
