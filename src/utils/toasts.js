import Swal from "sweetalert2"

export const showSuccessToast = (message) => {
  Swal.fire({
    toast: true,
    timer: 2000,
    icon: 'success',
    title: 'Success',
    position: 'top-end',
    text: message,
    timerProgressBar: false,
    showConfirmButton: false,
  });
};

export const showErrorToast = (message) => {
  Swal.fire({
    toast: true,
    timer: 2000,
    icon: 'error',
    title: 'Error',
    position: 'top-end',
    html: message,
    timerProgressBar: false,
    showConfirmButton: false,
  });
};
