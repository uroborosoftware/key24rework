import type { ServiceSlug } from "@/data/lockout";
import type { Location } from "@/data/locations";
import { pricing } from "@/lib/pricing";

export type FaqItem = { q: string; a: string };

export const generalFaq: FaqItem[] = [
  {
    q: "Was sollte ich am Telefon angeben?",
    a: "Nennen Sie Ihre genaue Adresse, ob die Haus- oder Wohnungstür betroffen ist und ob die Tür nur zugefallen oder zusätzlich abgeschlossen wurde. Diese drei Angaben verändern die Einschätzung am stärksten.",
  },
  {
    q: "Wird vorab ein Preis genannt?",
    a: "Der Gesamtpreis hängt von Türzustand, Anfahrt, Einsatzzeit und Material ab. Fragen Sie vor der Beauftragung nach einem Angebot einschließlich Anfahrt und möglicher Zuschläge, damit vor Arbeitsbeginn Klarheit besteht.",
  },
  {
    q: "Muss ich nachweisen, dass ich dort wohne?",
    a: "Ja. Vor einer Türöffnung ist zu klären, dass Sie berechtigt sind, die Wohnung zu betreten. Halten Sie dafür einen Ausweis und nach Möglichkeit einen Nachweis zur Wohnung bereit, etwa einen Mietvertrag oder eine Meldebescheinigung.",
  },
];

/**
 * Five answers per service. The city×service pages rotate three of these with a
 * city-dependent offset and prepend a city-specific question, so no two generated
 * pages ship the same FAQ set — and no FAQPage payload is duplicated across the site.
 */
export const serviceFaq: Record<ServiceSlug, FaqItem[]> = {
  "autoschluessel": [
    { q: "Kann jeder Autoschlüssel nachgemacht werden?", a: "Die Machbarkeit hängt von Marke, Modell, Baujahr und Schlüsselsystem ab. Wir prüfen, ob Rohling und Programmierung für Ihr Fahrzeug unterstützt werden, bevor Sie den Auftrag erteilen." },
    { q: "Muss das Fahrzeug zur Programmierung mitkommen?", a: "Das hängt vom System ab. Nennen Sie Fahrzeugdaten und vorhandene Schlüssel bei der Terminvereinbarung; wir klären dann Fahrzeugstandort und benötigte Unterlagen." },
    { q: "Was gilt bei vollständigem Schlüsselverlust?", a: "Ein vollständiger Verlust erfordert eine andere Vorbereitung als ein Zweitschlüssel. Die Berechtigung am Fahrzeug, das Schließsystem und mögliche Arbeitsschritte werden vorab geprüft." },
    { q: "Ist ein mechanischer Schlüssel schon ein vollständiger Ersatz?", a: "Nicht immer. Bei Fahrzeugen mit Wegfahrsperre oder Funk können zusätzlich Codierung und Programmierung erforderlich sein. Der vereinbarte Umfang wird vor Beginn erklärt." },
  ],
  "schlosswechsel": [
    { q: "Was ist der Unterschied zwischen Schloss und Zylinder?", a: "Der Zylinder nimmt den Schlüssel auf. Das Einsteckschloss bewegt Falle und Riegel. Ein Zylindertausch ist deshalb nicht dasselbe wie der Austausch des gesamten Schlosses." },
    { q: "Was umfasst der Standard-Zylindertausch?", a: `Der Einstiegspreis von ${pricing.cylinderSwapFrom} € umfasst einen Standard-Sicherheitszylinder und die übliche Montage. Sondermaße, Schutzbeschläge und weitere Teile werden gesondert angeboten; Anfahrt und Termin werden vorab abgestimmt.` },
    { q: "Welche Maße werden benötigt?", a: "Wichtig sind die Zylinderlänge von der Schraubenmitte nach innen und außen, die Bauform und die gewünschte Schließfunktion. Wir prüfen diese Angaben vor dem Einbau." },
    { q: "Ist nach Schlüsselverlust immer ein Austausch nötig?", a: "Das wird anhand des Sicherheitsrisikos und des vorhandenen Systems entschieden. Bei gemeinschaftlichen Schließanlagen wird die Verwaltung vor einer Änderung einbezogen." },
  ],
  "mehrfachverriegelung": [
    { q: "Woran erkenne ich eine Mehrfachverriegelung?", a: "Mehrere Schließpunkte greifen entlang der Tür in den Rahmen. Bei geöffneter Tür ist häufig eine längere Schließleiste erkennbar; Herstellerangaben helfen bei der Zuordnung." },
    { q: "Muss eine klemmende Verriegelung komplett ersetzt werden?", a: "Nicht zwingend. Zuerst werden Türstellung, Griff, Getriebe und Schließpunkte geprüft. Reparatur und Ersatz hängen vom Fehlerbild und der Teileverfügbarkeit ab." },
    { q: "Was sollte ich bei einer blockierten Tür tun?", a: "Vermeiden Sie Gewalt an Schlüssel und Griff. Nennen Sie beim Anruf, ob die Tür offen oder geschlossen ist und seit wann die Störung besteht." },
    { q: "Sind alle Ersatzteile sofort verfügbar?", a: "Das kann erst nach Identifikation von Hersteller und Bauform geklärt werden. Verfügbarkeit, mögliche Alternativen und Kosten werden vor einer Bestellung besprochen." },
  ],
  "schliessanlagen": [
    { q: "Was wird für die Planung einer Schließanlage benötigt?", a: "Türanzahl, Zylindermaße, Schlüsselanzahl und die gewünschten Zugangsrechte. Daraus entsteht ein Schließplan als Grundlage für das Angebot." },
    { q: "Kann ein Schlüssel mehrere Türen öffnen?", a: "Ja, eine Anlage kann ausgewählte Türen einem Schlüssel zuordnen und andere Bereiche trennen. Welche Kombination sinnvoll ist, wird im Schließplan festgelegt." },
    { q: "Kann eine bestehende Anlage erweitert werden?", a: "Das hängt vom Hersteller, System und vorhandenen Schließplan ab. Systembezeichnung und gegebenenfalls Sicherungskarte werden vor einer Nachbestellung geprüft." },
    { q: "Wie werden Nachbestellungen geregelt?", a: "Zuständige Personen und erforderliche Nachweise werden bei der Planung festgelegt. Bei geschützten Systemen gelten die Freigabeverfahren des jeweiligen Herstellers." },
  ],
  "einbruchschutz": [
    { q: "Reicht ein neuer Zylinder als Einbruchschutz?", a: "Nicht immer. Rahmen, Beschlag, Türblatt und Fenster können weitere Schwachstellen haben. Sinnvoll ist die gemeinsame Prüfung der vorhandenen Bauteile." },
    { q: "Können Türen und Fenster nachgerüstet werden?", a: "Die Eignung hängt von Bauart, Zustand und Nutzung ab. Geeignete Zusatzsicherungen und der Montageaufwand werden vor einem Angebot geprüft." },
    { q: "Was ist bei einer Mietwohnung zu beachten?", a: "Klären Sie erforderliche Freigaben für bauliche Änderungen mit Eigentümer oder Verwaltung, bevor Sicherungen montiert werden." },
    { q: "Wie entsteht der Preis für eine Nachrüstung?", a: "Vorhandene Bauteile, ausgewählte Produkte und Montageumfang bestimmen den Preis. Material und Arbeitsleistung werden vor Beginn abgestimmt." },
  ],
  "sicherheitstechnik": [
    { q: "Welche elektronische Zutrittslösung passt zu meinem Gebäude?", a: "Das hängt von Türtechnik, Nutzerzahl, Stromversorgung und gewünschten Zugangsrechten ab. Die Voraussetzungen werden vor einer Systemauswahl geprüft." },
    { q: "Kann eine bestehende Anlage weiterverwendet werden?", a: "Kompatibilität und Zustand werden am vorhandenen System geprüft. Eine Integration kann erst nach Kenntnis der Komponenten und Schnittstellen zugesagt werden." },
    { q: "Was passiert bei Stromausfall?", a: "Das Verhalten hängt vom gewählten System und der Installation ab. Stromversorgung, Notzugang und sichere Nutzung werden bei der Planung ausdrücklich abgestimmt." },
    { q: "Gehört die Einweisung zum Auftrag?", a: "Einrichtung, Funktionsprüfung, Bedienung und die Zuständigkeit für spätere Änderungen werden im konkreten Leistungsumfang vereinbart." },
  ],
  "autooeffnung": [
    { q: "Welche Angaben benötigen Sie zur Autoöffnung?", a: "Nennen Sie Marke, Modell, Baujahr und den genauen Standort. Teilen Sie mit, wo der Schlüssel liegt und ob ein Defekt am Schloss bekannt ist." },
    { q: "Was kostet eine Autoöffnung?", a: `Die Autoöffnung beginnt ab ${pricing.carFrom} €. Fahrzeug, Schließsystem, Zugangssituation, Anfahrt und Einsatzzeit bestimmen den Gesamtpreis, der vor dem Auftrag besprochen wird.` },
    { q: "Welche Nachweise brauche ich?", a: "Halten Sie einen Ausweis und einen Nachweis Ihrer Berechtigung am Fahrzeug bereit. Sind die Fahrzeugpapiere eingeschlossen, klären Sie das bereits am Telefon." },
    { q: "Bleibt das Fahrzeug unbeschädigt?", a: "Ziel ist eine schonende Öffnung. Welche Methode möglich ist, hängt vom Fahrzeug und Schließsystem ab. Das Vorgehen wird vor Arbeitsbeginn besprochen." },
    { q: "Ist ein neuer Autoschlüssel enthalten?", a: "Nein. Die Autoöffnung betrifft den Zugang zum Fahrzeug. Schlüsselanfertigung, Programmierung und Reparaturen sind separate Leistungen und nicht im Öffnungspreis enthalten." },
  ],
  "wohnungstuer-zugefallen": [
    {
      q: "Woran erkenne ich, ob die Tür nur zugefallen ist?",
      a: "Wurde die Tür nur zugezogen und der Schlüssel nicht gedreht, ist sie in der Regel zugefallen. Die Bewegung der Klinke allein zeigt nicht zuverlässig, ob zusätzlich abgeschlossen wurde.",
    },
    {
      q: "Nimmt die Tür bei der Öffnung Schaden?",
      a: "Ziel ist eine Öffnung, bei der Tür, Zarge und Schloss unbeschädigt bleiben. Ob das gelingt, hängt vom Türzustand und vom verbauten Schloss ab. Lässt sich ein Eingriff am Zylinder nicht vermeiden, wird das vorher besprochen.",
    },
    {
      q: "Muss der Zylinder nach dem Aussperren getauscht werden?",
      a: "Allein durch das Zufallen der Tür entsteht kein Grund für einen Austausch. Nötig wird er erst, wenn der Zylinder beschädigt ist oder ein Schlüssel fehlt.",
    },
    {
      q: "Was mache ich, bis jemand da ist?",
      a: "Lassen Sie die Tür unverändert und versuchen Sie keine eigenen Öffnungsversuche mit Karten oder Werkzeug. Beschädigungen an Falle oder Zylinder erhöhen den Aufwand meist deutlich.",
    },
    {
      q: "Spielt es eine Rolle, ob es eine Haus- oder Wohnungstür ist?",
      a: "Ja. Haustüren haben häufig andere Schlösser und Mehrfachverriegelungen als Wohnungstüren. Geben Sie deshalb an, um welche Tür es geht.",
    },
  ],
  "tuer-abgeschlossen": [
    {
      q: "Warum ist eine abgeschlossene Tür aufwendiger?",
      a: "Beim Abschließen fährt der Riegel vollständig in das Schließblech. Die Tür ist damit mechanisch fester verschlossen als eine nur zugefallene Tür, was ein anderes Vorgehen erfordert.",
    },
    {
      q: "Woher weiß ich, wie oft abgeschlossen wurde?",
      a: "Bei vielen Schlössern lässt sich der Schlüssel mehrfach drehen. Wenn Sie wissen, wie oft gedreht wurde, nennen Sie es – es hilft bei der Einschätzung des Aufwands.",
    },
    {
      q: "Kann die Tür geöffnet werden, wenn innen kein Schlüssel steckt?",
      a: "Ob eine Öffnung möglich ist, hängt vom Schloss, vom Zylinder und vom Türzustand ab. Das wird vor Ort geprüft; eine pauschale Zusage ist vorab nicht möglich.",
    },
    {
      q: "Was ist bei einer Mehrfachverriegelung zu beachten?",
      a: "Mehrfachverriegelungen greifen an mehreren Punkten in die Zarge und verhalten sich anders als ein einfaches Einsteckschloss. Wenn Ihre Tür eine hat, geben Sie das bitte an.",
    },
    {
      q: "Kann ich den Preis vorab erfahren?",
      a: "Eine Einschätzung ist am Telefon möglich, sobald Türzustand und Schlossart beschrieben sind. Der verbindliche Gesamtpreis wird vor dem Auftrag besprochen.",
    },
  ],
  "schluessel-steckt-innen": [
    {
      q: "Warum lässt sich die Tür mit dem Zweitschlüssel nicht öffnen?",
      a: "Bei manchen Doppelzylindern kann ein innen steckender Schlüssel die Bedienung von außen blockieren. Ob ein Zweitschlüssel funktioniert, hängt von der Ausführung und der Not- und Gefahrenfunktion ab.",
    },
    {
      q: "Was ist eine Not- und Gefahrenfunktion?",
      a: "Zylinder mit dieser Funktion lassen sich von außen auch dann bedienen, wenn innen ein Schlüssel steckt. Ob Ihr Zylinder sie hat, ist von außen nicht immer erkennbar und wird vor Ort geprüft.",
    },
    {
      q: "Ist die Tür zusätzlich abgeschlossen?",
      a: "Entscheidend ist, ob die Tür zuletzt mit dem Schlüssel abgeschlossen wurde. Nennen Sie die Stellung des innen steckenden Schlüssels und Ihre Beobachtungen; die Stellung allein erlaubt keine sichere Beurteilung.",
    },
    {
      q: "Bleibt der Zylinder erhalten?",
      a: "Ziel ist, den vorhandenen Zylinder zu erhalten. Ob das möglich ist, zeigt sich bei der Prüfung vor Ort. Ein Austausch wird vorher besprochen.",
    },
    {
      q: "Kann ich den Schlüssel von innen selbst herausbekommen?",
      a: "In der Regel nicht, solange die Tür verschlossen ist. Eigene Versuche mit Werkzeug können den Zylinder beschädigen und den Aufwand erhöhen.",
    },
  ],
  "schloss-defekt": [
    {
      q: "Mein Schlüssel ist abgebrochen – was nun?",
      a: "Versuchen Sie nicht, das Bruchstück selbst zu entfernen. Je nachdem, wie tief es im Zylinder sitzt und ob es sich noch drehen lässt, unterscheidet sich das weitere Vorgehen.",
    },
    {
      q: "Muss immer der ganze Zylinder getauscht werden?",
      a: "Nicht zwingend. Manchmal ist nur der Zylinder betroffen, manchmal das Einsteckschloss. Welches Bauteil ersetzt werden muss, zeigt die Prüfung vor Ort.",
    },
    {
      q: "Welche Angaben braucht es für einen Ersatzzylinder?",
      a: "Entscheidend sind die Zylinderlänge, gemessen ab der Mitte der Stulpschraube nach innen und außen, sowie die Bauform und die gewünschte Schließfunktion.",
    },
    {
      q: "Der Schlüssel hakt seit Wochen. Ist das ein Defekt?",
      a: "Ein hakender Schlüssel ist oft ein Anzeichen für Verschleiß am Zylinder oder für eine Tür, die sich gesetzt hat. Beschreiben Sie, seit wann es auftritt – das hilft bei der Einordnung.",
    },
    {
      q: "Was kostet ein neuer Zylinder?",
      a: "Die Materialkosten hängen von Länge, Bauform und Ausführung des Zylinders ab. Sie werden vor dem Einbau gesondert besprochen und nicht pauschal zugesagt.",
    },
  ],
  "schluessel-verloren": [
    {
      q: "Muss ich den Zylinder nach einem Schlüsselverlust tauschen?",
      a: "Technisch zwingend ist es nicht, sicherheitsrelevant aber oft schon: Der verlorene Schlüssel passt weiterhin. Bei Mietwohnungen kann ein Austausch zudem vertraglich gefordert sein.",
    },
    {
      q: "Was gilt bei einer Schließanlage?",
      a: "Gehört der Schlüssel zu einer Schließanlage, kann ein Austausch mehrere Zylinder betreffen. Klären Sie das vor der Beauftragung mit Vermieter oder Hausverwaltung.",
    },
    {
      q: "Zahlt meine Versicherung den Austausch?",
      a: "Das richtet sich nach Ihrem Vertrag. Hausrat- oder Haftpflichtversicherungen behandeln Schlüsselverlust unterschiedlich; fragen Sie dort nach, bevor Sie einen Austausch beauftragen.",
    },
    {
      q: "Was braucht es für die Öffnung?",
      a: "Vor der Öffnung ist zu klären, dass Sie berechtigt sind, die Wohnung zu betreten. Halten Sie einen Ausweis und nach Möglichkeit einen Nachweis zur Wohnung bereit.",
    },
    {
      q: "Soll ich den Verlust melden?",
      a: "Bei einem Schlüssel mit Adressbezug oder einem Anlagenschlüssel ist eine Meldung an Vermieter oder Verwaltung sinnvoll. Bei Diebstahl kommt zusätzlich eine Anzeige in Betracht.",
    },
  ],
  "schluessel-abgebrochen": [
    {
      q: "Kann ich das abgebrochene Stück selbst herausziehen?",
      a: "Besser nicht. Mit Pinzette oder Draht wird das Bruchstück meist tiefer geschoben, und beschädigte Zylinderstifte machen aus einer Entfernung einen Austausch.",
    },
    {
      q: "Muss der Zylinder nach einem Schlüsselbruch immer getauscht werden?",
      a: "Nein. Lässt sich das Reststück schonend ziehen und ist der Zylinder unbeschädigt, kann er oft weiter verwendet werden. Das zeigt sich erst nach der Entfernung.",
    },
    {
      q: "Warum ist der Schlüssel überhaupt abgebrochen?",
      a: "Meist Verschleiß: Ein oft benutzter Schlüssel wird dünner, das Schloss läuft schwergängig, und irgendwann gibt das Material nach. Wenn ein Schlüssel hakt, ist das ein Vorzeichen.",
    },
    {
      q: "Ich habe noch einen zweiten Schlüssel – hilft das?",
      a: "Erst, wenn das Bruchstück aus dem Zylinder heraus ist. Solange es steckt, blockiert es den Zylinder auch für den Zweitschlüssel.",
    },
    {
      q: "Kann aus dem Bruchstück ein neuer Schlüssel gemacht werden?",
      a: "Wenn beide Teile vorhanden und nicht verformt sind, ist eine Anfertigung oft möglich. Gehört der Schlüssel zu einer Schließanlage, ist zusätzlich die Sicherungskarte nötig.",
    },
  ],
  "schluessel-nachmachen": [
    {
      q: "Was muss ich zum Nachmachen mitbringen?",
      a: "Den Originalschlüssel. Bei Schlüsseln mit Sicherungskarte – häufig bei Schließanlagen – zusätzlich diese Karte und einen Ausweis. Die erforderlichen Nachweise klären wir vor der Anfertigung.",
    },
    {
      q: "Kann jeder Schlüssel kopiert werden?",
      a: "Nein. Einfache Wohnungs- und Briefkastenschlüssel in der Regel ja. Geschützte Profile mit Sicherungskarte gibt nur der Hersteller gegen Legitimation frei.",
    },
    {
      q: "Wie lange dauert das?",
      a: "Ist ein passender Rohling vorrätig, meist wenige Minuten direkt im Laden. Bei selteneren Profilen muss der Rohling bestellt werden.",
    },
    {
      q: "Was kostet ein nachgemachter Schlüssel?",
      a: "Das hängt vom Profil und vom Rohling ab. Ein einfacher Wohnungsschlüssel liegt deutlich unter den Kosten einer Türöffnung – fragen Sie mit dem Schlüssel in der Hand nach einem konkreten Preis.",
    },
    {
      q: "Lohnt sich ein Zweitschlüssel überhaupt?",
      a: "In aller Regel ja. Ein Ersatzschlüssel bei Nachbarn oder Verwandten kostet einen Bruchteil dessen, was eine Türöffnung nach dem Aussperren verursacht.",
    },
  ],
};

/**
 * One city-specific question plus three service answers chosen at a city-dependent
 * offset. Fixes the Dutch original, which renders the identical three-item FAQ — and
 * therefore the identical FAQPage payload — on every one of its 88 city×service pages.
 */
export function cityServiceFaq(location: Location, slug: ServiceSlug, cityItem: FaqItem): FaqItem[] {
  const pool = serviceFaq[slug];
  const offset = (location.slug.length + slug.length) % pool.length;
  return [
    cityItem,
    pool[offset],
    pool[(offset + 1) % pool.length],
    pool[(offset + 2) % pool.length],
  ];
}

/** Every answer on the site, for the /faq/ page. */
export const allFaq: FaqItem[] = [...generalFaq, ...Object.values(serviceFaq).flat()];
