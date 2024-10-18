import { toast } from "react-toastify";

const toastMessage = (message: any) => {
  toast.success(message, {
    autoClose: 3000,
  });
};

export default toastMessage;
