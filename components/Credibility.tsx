import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { credibilityStats } from "@/lib/data";

export default function Credibility() {
  return (
    <section className="credibility" id="credibility">
      <div className="credibility-bg">
        <Image
          src="/images/aerial-drone-view-of-green-campus-fields.jpg"
          alt="Aerial drone view of green campus fields"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div className="container credibility-inner">
        <Reveal className="cred-top">
          <div className="eyebrow">Credibility</div>
          <h2>Trusted by standards. Proven through experience.</h2>
          <div className="bold-line">
            Built on decades of expertise, recognised standards, and proven results, Force 1
            Kennels delivers dogs trusted by professionals and families worldwide.
          </div>
        </Reveal>

        <div className="cred-grid stagger">
          {credibilityStats.map((stat) => (
            <Reveal className="cred-item" key={stat.title}>
              <div className="cred-num">
                {stat.numberValue !== undefined ? (
                  <>
                    <Counter target={stat.numberValue} />
                    <span className="accent">{stat.accentSuffix}</span>
                  </>
                ) : (
                  <span className="accent">{stat.numberText}</span>
                )}
              </div>
              <div className="cred-title">{stat.title}</div>
              <div className="cred-desc">{stat.description}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
