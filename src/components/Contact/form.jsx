import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendEmail = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { theme: "colored" });
          form.current.reset();
        },
        // (error) => {
        //   console.error("EmailJS error:", error);
        //   alert(JSON.stringify(error));
        // },

        (error) => {
          console.error("EmailJS error:", error.text || error);
          toast.error(
            `Failed to send message: ${error.text || "Please try again."}`,
            { theme: "colored" },
          );
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="3"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SendEmail;
