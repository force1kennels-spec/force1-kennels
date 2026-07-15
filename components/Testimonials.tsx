"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials, trustItems, type TrustItem } from "@/lib/data";

const trustIcons: Record<TrustItem["icon"], React.ReactNode> = {
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L12 3Z" />
    </svg>
  ),
  health: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2s7 3 7 9c0 5-3 8-7 11-4-3-7-6-7-11 0-6 7-9 7-9Z" />
    </svg>
  ),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <Reveal className="testi-head">
          <div className="eyebrow light">Client Stories</div>
          <h2>Hear from the Force 1 Kennels family</h2>
          <div className="bold-line">
            Our greatest endorsement comes from the people who have welcomed a Force 1 Kennels dog
            into their lives.
          </div>
        </Reveal>

        <div className="testi-inner">
          <div className="quote-mark">&#8220;</div>

          {testimonials.map((t, i) => (
            <div key={t.name} className={`testi-slide${i === current ? " active" : ""}`}>
              <div className="testi-stars" aria-hidden="true">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="testi-text">&quot;{t.text}&quot;</p>
              <div className="testi-person">
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          ))}

          <div className="testi-dots" id="testiDots">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={i === current ? "active" : ""}
                aria-label={`Testimonial ${i + 1}`}
                aria-current={i === current}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>

        <div className="trust-strip">
          <div className="trust-grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.label}>
                <div className="trust-icon">{trustIcons[item.icon]}</div>
                <div className="trust-text">
                  {item.num && <span className="trust-num">{item.num}</span>}
                  <span className={`trust-label${item.num ? "" : " solo"}`}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
