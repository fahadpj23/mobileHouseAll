import { toast } from "react-toastify";

const toastMessage = (type: string, message: string) => {
  if (type === "success") {
    toast.success(message, {
      autoClose: 3000,
    });
  } else if (type === "warning") {
    toast.warning(message, {
      autoClose: 3000,
    });
  } else {
    toast.error(message, {
      autoClose: 3000,
    });
  }
};

export default toastMessage;
