"use client";

import { useRef, useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { contactFormIntro, serviceOptions, countryOptions } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validateField = (field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const valid = field.checkValidity();
    setErrors((prev) => ({ ...prev, [field.name]: !valid }));
    return valid;
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    validateField(e.target);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (errors[e.target.name]) validateField(e.target);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input[required], select[required], textarea[required]"
    );
    let allValid = true;
    let firstInvalid: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null = null;
    for (const f of Array.from(fields)) {
      const valid = validateField(f);
      if (!valid) {
        allValid = false;
        if (!firstInvalid) firstInvalid = f;
      }
    }

    if (!allValid) {
      firstInvalid?.focus();
      return;
    }

    setStatus("sending");
    try {
      const formData = new FormData(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          organization: formData.get("organization"),
          country: formData.get("country"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal className="form-card" id="contactFormCard">
      <div className="eyebrow">{contactFormIntro.eyebrow}</div>
      <h3 style={{ marginTop: 16 }}>{contactFormIntro.heading}</h3>
      <p>{contactFormIntro.description}</p>

      <form ref={formRef} id="contactForm" noValidate onSubmit={handleSubmit}>
        <div className="field-grid">
          <div className={`field${errors.name ? " has-error" : ""}`}>
            <label htmlFor="fld-name">Full name</label>
            <input
              type="text"
              id="fld-name"
              name="name"
              placeholder="Your full name"
              autoComplete="name"
              required
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <span className="field-error">Please enter your name.</span>
          </div>
          <div className={`field${errors.email ? " has-error" : ""}`}>
            <label htmlFor="fld-email">Email address</label>
            <input
              type="email"
              id="fld-email"
              name="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <span className="field-error">Please enter a valid email.</span>
          </div>
          <div className={`field${errors.phone ? " has-error" : ""}`}>
            <label htmlFor="fld-phone">Phone number</label>
            <input
              type="tel"
              id="fld-phone"
              name="phone"
              placeholder="+91 00000 00000"
              autoComplete="tel"
              required
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <span className="field-error">Please enter a phone number.</span>
          </div>
          <div className="field">
            <label htmlFor="fld-org">
              Organization <span className="opt">(optional)</span>
            </label>
            <input
              type="text"
              id="fld-org"
              name="organization"
              placeholder="Company, agency or unit"
              autoComplete="organization"
            />
          </div>
          <div className={`field${errors.country ? " has-error" : ""}`}>
            <label htmlFor="fld-country">Country</label>
            <select
              id="fld-country"
              name="country"
              required
              defaultValue=""
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your country
              </option>
              <optgroup label="All Countries">
                {countryOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </optgroup>
            </select>
            <span className="field-error">Please select your country.</span>
          </div>
          <div className={`field${errors.service ? " has-error" : ""}`}>
            <label htmlFor="fld-service">Service interested in</label>
            <select
              id="fld-service"
              name="service"
              required
              defaultValue=""
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              {serviceOptions.map((opt) =>
                opt.group ? (
                  <optgroup label={opt.group} key={opt.group}>
                    {opt.options.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </optgroup>
                ) : (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                )
              )}
            </select>
            <span className="field-error">Please select a service.</span>
          </div>
          <div className="field full">
            <label htmlFor="fld-message">
              Message <span className="opt">(optional)</span>
            </label>
            <textarea
              id="fld-message"
              name="message"
              placeholder="Tell us about your requirement, timeline and any specific breed you have in mind."
            />
          </div>
        </div>

        <div className="consent-row">
          <input type="checkbox" id="fld-consent" name="consent" required />
          <label htmlFor="fld-consent">
            I agree to be contacted by Force 1 Kennels regarding my enquiry.
          </label>
        </div>

        <div className="form-footer">
          <span className="form-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Your details are kept confidential.
          </span>
          <button type="submit" className="btn btn-primary" id="submitBtn" disabled={status === "sending"}>
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </>
            )}
          </button>
        </div>

        {status === "success" && (
          <div className="form-status success show" id="formStatus">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="m8.5 12.5 2.5 2.5 5-5" />
            </svg>
            <span>
              Thank you. Your enquiry has been received, and a Force 1 Kennels team member will
              contact you within one business day.
            </span>
          </div>
        )}
        {status === "error" && (
          <div className="form-status error show" id="formStatus">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h.01" />
            </svg>
            <span>Something went wrong. Please email us directly at info@force1kennels.in.</span>
          </div>
        )}
      </form>
    </Reveal>
  );
}
