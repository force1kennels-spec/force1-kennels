import Reveal from "@/components/Reveal";

export default function ContactMap() {
  return (
    <section className="map-section">
      <div className="container">
        <Reveal className="map-frame bracket-frame">
          <iframe
            src="https://maps.google.com/maps?q=Derabassi%2C%20SAS%20Nagar%2C%20Punjab%20140207%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Force 1 Kennels campus location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />
        </Reveal>
      </div>
    </section>
  );
}
