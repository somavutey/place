import emailjs from "@emailjs/browser";
export default function emailService(e, form, user) {
  emailjs.sendForm("service_milkdlj", "template_3m9pqwp", form, user).then(
    (result) => {
      console.log(result.text);
      e.target.reset();
    },
    (error) => {
      console.log(error.text);
    }
  );
}
