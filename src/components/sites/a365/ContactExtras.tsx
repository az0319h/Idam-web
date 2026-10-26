"use client";

import { useState } from "react";
import { contact } from "./data";
import { Reveal } from "./Reveal";

function FaqItem({ question, answer, number }: { question: string; answer: string; number: string }) {
  const [open, setOpen] = useState(false);
  const id = `a365-faq-${number}`;
  return (
    <Reveal>
      <div className={["a365-dropdown-item", open ? "is-open" : ""].join(" ")}>
        <button type="button" className="a365-dropdown-header" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          <div className="a365-grid">
            <div className="a365-mobile-hidden">
              <div className="a365-medium">{number}</div>
            </div>
            <div className="a365-medium a365-dd-title">{question}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sites/a365/icons/plus-icon.svg" alt="열기" width={32} height={32} className="a365-dropdown-icon a365-dd-icon" />
          </div>
        </button>
        <div id={id} className="a365-dropdown-content">
          <div className="a365-faq-answer">
            <div className="a365-grid">
              <div className="a365-standard a365-dd-title">{answer}</div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** 자주 묻는 질문 (서비스 아코디언과 같은 열림/닫힘 UI). */
export function ContactFaq() {
  const { faq } = contact;
  return (
    <section>
      <div className="a365-container">
        <div className="a365-vflex a365-gap-1">
          <h2 className="a365-big-heading a365-big-heading-long">{faq.heading}</h2>
          <div className="a365-dropdown-list">
            {faq.items.map((q, i) => (
              <FaqItem key={q.question} number={String(i + 1).padStart(2, "0")} question={q.question} answer={q.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
