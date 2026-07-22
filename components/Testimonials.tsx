"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials, trustItems } from "@/lib/data";

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
            Our greatest endorsement comes from the people who have welcomed a Force 1 Kennels dog into their
            lives.
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
                <span aria-hidden="true">{item.icon}</span>
                {item.num && <span className="trust-num">{item.num}</span>}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
