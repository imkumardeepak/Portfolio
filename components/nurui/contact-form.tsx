import BackgroundShineButton from "@/components/nurui/background-shine-button";
import ShinyInput from "@/components/nurui/shiny-input";
import ShinyTextArea from "@/components/nurui/shiny-text-area";

const ContactForm = () => {
  return (
    <form className="w-full grid lg:grid-cols-2 gap-6">
      <fieldset className="space-y-2">
        <label className="capitalize font-semibold">First name</label>
        <ShinyInput
          placeholder="Your first name"
          type="text"
          name="first_name"
          required
        />
      </fieldset>
      <fieldset className="space-y-2">
        <label className="capitalize font-semibold">Last name</label>
        <ShinyInput
          placeholder="Your last name"
          type="text"
          name="last_name"
          required
        />
      </fieldset>
      <fieldset className="space-y-2 col-span-full">
        <label className="capitalize font-semibold">Company name</label>
        <ShinyInput
          placeholder="Your organization (optional)"
          type="text"
          name="company_name"
        />
      </fieldset>
      <fieldset className="space-y-2 col-span-full">
        <label className="capitalize font-semibold">Email</label>
        <ShinyInput
          placeholder="Your email address"
          type="email"
          name="email"
          required
        />
      </fieldset>
      <fieldset className="space-y-2 col-span-full">
        <label className="capitalize font-semibold">Phone</label>
        <ShinyInput
          placeholder="Your phone number (optional)"
          type="tel"
          name="phone_number"
        />
      </fieldset>
      <fieldset className="space-y-2 col-span-full">
        <label className="capitalize font-semibold">Message</label>
        <ShinyTextArea
          placeholder="Tell us what you need or suggest!"
          name="message"
          rows={5}
          required
        />
      </fieldset>
      <BackgroundShineButton className="col-span-full" title={"send message"} />
    </form>
  );
};

export default ContactForm;
