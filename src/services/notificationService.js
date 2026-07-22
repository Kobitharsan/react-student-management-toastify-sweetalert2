import { toast } from "react-toastify";

export const successToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
  });
};

export const warningToast = (message) => {
  toast.warning(message, {
    position: "top-right",
    autoClose: 3000,
  });
};