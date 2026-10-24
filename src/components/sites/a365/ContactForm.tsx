"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { consultationAreas, contact } from "./data";
import { contactSchema, type ContactData, type ContactInput } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "done";

/** 견적 문의 폼. zod로 검증하고 /api/contact 로 보내면 서버가 메일로 전달한다. */
export function ContactForm() {
  const f = contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput, unknown, ContactData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", phone: "", area: undefined, message: "", website: "" },
  });

  const onSubmit = async (data: ContactData) => {
    setServerError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setServerError(json.error ?? f.sendError);
        setStatus("idle");
        return;
      }
      setStatus("done");
    } catch {
      setServerError(f.sendError);
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <div className="a365-form">
        <div className="a365-form-success" role="status">
          <div className="a365-standard">{f.success}</div>
        </div>
      </div>
    );
  }

  const err = (msg?: string, id?: string) =>
    msg ? (
      <div className="a365-field-error" id={id} role="alert">
        {msg}
      </div>
    ) : null;

  return (
    <div className="a365-form">
      <form id="contact-form" name="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="a365-form-label" htmlFor="contact-name">
          {f.name}
        </label>
        <input
          className={["a365-field", errors.name ? "is-invalid" : ""].join(" ")}
          id="contact-name"
          type="text"
          maxLength={20}
          autoComplete="name"
          placeholder={f.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
          {...register("name")}
        />
        {err(errors.name?.message, "err-name")}

        <label className="a365-form-label" htmlFor="contact-phone">
          {f.phone}
        </label>
        <input
          className={["a365-field", errors.phone ? "is-invalid" : ""].join(" ")}
          id="contact-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder={f.phonePlaceholder}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "err-phone" : undefined}
          {...register("phone")}
        />
        {err(errors.phone?.message, "err-phone")}

        <label className="a365-form-label" htmlFor="contact-area">
          {f.area}
        </label>
        <select
          className={["a365-field", "a365-select", errors.area ? "is-invalid" : ""].join(" ")}
          id="contact-area"
          defaultValue=""
          aria-invalid={!!errors.area}
          aria-describedby={errors.area ? "err-area" : undefined}
          {...register("area")}
        >
          <option value="" disabled>
            {f.areaPlaceholder}
          </option>
          {consultationAreas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        {err(errors.area?.message, "err-area")}

        <label className="a365-form-label" htmlFor="contact-message">
          {f.message}
        </label>
        <textarea
          className={["a365-textarea", errors.message ? "is-invalid" : ""].join(" ")}
          id="contact-message"
          maxLength={1000}
          placeholder={f.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          {...register("message")}
        />
        {err(errors.message?.message, "err-message")}

        {/* 허니팟: 사람에게는 보이지 않는다 */}
        <div className="a365-hp" aria-hidden="true">
          <label htmlFor="contact-website">웹사이트</label>
          <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <label className="a365-check">
          <input type="checkbox" aria-invalid={!!errors.privacy} {...register("privacy")} />
          <span className="a365-standard a365-standard-white">{f.privacy}</span>
        </label>
        {err(errors.privacy?.message, "err-privacy")}

        <button type="submit" className="a365-submit" disabled={isSubmitting || status === "sending"}>
          {status === "sending" ? f.wait : f.submit}
        </button>
      </form>
      {serverError && (
        <div className="a365-form-error" role="alert">
          <div className="a365-standard a365-standard-white">{serverError}</div>
        </div>
      )}
    </div>
  );
}
