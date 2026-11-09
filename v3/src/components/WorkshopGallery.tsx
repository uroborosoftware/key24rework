import Image from "next/image";
const photos = [
    { src: "/demir/storefront.webp", de: "Unser Ladengeschäft in Sindelfingen", tr: "Sindelfingen’deki dükkânımız" },
    { src: "/demir/schluesselfraese.webp", de: "Schlüsselfertigung in der Werkstatt", tr: "Atölyede anahtar üretimi" },
    { src: "/demir/auto-oeffnung-werkzeug.webp", de: "Werkzeug für die Arbeit am Fahrzeug", tr: "Araç üzerinde çalışmak için kullanılan aletler" },
];
export function WorkshopGallery() {
    return (<section className="border-t border-line px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-eyebrow text-signal-orange">{"Einblicke"}</p>
        <h2 className="text-heading-2 text-frost mt-2">{"Laden, Werkstatt und Arbeitsalltag."}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {photos.map((photo) => (<figure key={photo.src} className="overflow-hidden border border-line bg-navy-surface">
              <Image src={photo.src} alt={photo.de} width={720} height={540} sizes="(max-width: 640px) 100vw, 330px" className="aspect-[4/3] w-full object-cover"/>
              <figcaption className="p-4 text-body-small text-mist">{photo.de}</figcaption>
            </figure>))}
        </div>
      </div>
    </section>);
}
