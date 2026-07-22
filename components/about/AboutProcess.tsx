import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/data";

export default function AboutProcess() {
  return (
    <section className="process-section">
      <div className="container">
        <Reveal className="process-head">
          <div className="eyebrow">How We Work</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", marginTop: 16 }}>
            From bloodline to deployment.
          </h2>
        </Reveal>

        <div className="process-grid stagger">
          {processSteps.map((step) => (
            <Reveal className="process-card" key={step.num}>
              <div className="process-num-badge">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
