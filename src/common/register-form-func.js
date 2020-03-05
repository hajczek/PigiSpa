import $ from "jquery";
import { checkRegisterPass, sendRegisterForm } from "./index";

export const activateRegisterForm = () => {
  $("#email").change(checkRegisterPass);
  $("#pass").change(checkRegisterPass);
  $("#register-btn").on("click", sendRegisterForm);
};
