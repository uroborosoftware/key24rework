import { serviceFaq } from "@/data/faq";
import { pricing } from "@/lib/pricing";

export type ServiceSlug =
  | "wohnungstuer-zugefallen"
  | "tuer-abgeschlossen"
  | "schluessel-steckt-innen"
  | "schloss-defekt"
  | "schluessel-verloren"
  | "schluessel-abgebrochen"
  | "schluessel-nachmachen"
  | "autooeffnung"
  | "autoschluessel"
  | "schlosswechsel"
  | "mehrfachverriegelung"
  | "schliessanlagen"
  | "einbruchschutz"
  | "sicherheitstechnik";

export type Service = {
  slug: ServiceSlug;
  /** Full name: page title, list rows, schema serviceType. */
  name: string;
  /** Lowercase fragment for headings: "Türöffnung bei zugefallener Tür". */
  shortName: string;
  /**
   * German declines after prepositions, so a single fragment cannot be spliced into
   * generated sentences: "bei defektes Schloss" is wrong, "bei einem defekten Schloss"
   * is right. Templates pick the case the preposition governs.
   */
  caseAkk: string;
  caseDat: string;
  /** Hero headline. Soft hyphens (­) let long German compounds break inside the display face. */
  heroHeadline: string;
  heroSub: string;
  detail: string;
  /**
   * The zugefallen/abgeschlossen distinction. Competitor research (docs/seo-research.md)
   * shows Ludwig and Adler both rank on exactly this split — it is the single highest-value
   * piece of copy on a service page, and the question every caller is actually asking.
   */
  conditionNote: string;
  /** Heading above conditionNote. "Zugefallen oder abgeschlossen?" is wrong for shop services. */
  conditionHeading: string;
  /** False for counter services: no callout timeline, no door-state framing. */
  isCallout: boolean;
  /** Non-door services use their own preparation and enquiry copy. */
  category?: "vehicle" | "security";
  /** null renders as "Preis auf Anfrage" and emits no Offer schema. See lib/pricing.ts. */
  priceFrom: number | null;
  whatWeDo: string[];
  includesCylinderSection: boolean;
  heroImage: string;
  heroImageAlt: string;
};

export const services: Service[] = [
  {
    slug: "autooeffnung",
    category: "vehicle",
    name: "Autoöffnung",
    shortName: "Autoöffnung",
    caseAkk: "eine verschlossene Fahrzeugtür",
    caseDat: "einer verschlossenen Fahrzeugtür",
    heroHeadline: "Schlüssel im Auto?",
    heroSub: "Das Fahrzeug ist verschlossen und der Schlüssel liegt darin. Nennen Sie Marke, Modell, Baujahr und Standort, damit wir Vorgehen, Verfügbarkeit und Kosten vor dem Auftrag klären können.",
    detail: `Eine Autoöffnung bieten wir ab ${pricing.carFrom} € an. Fahrzeugmodell, Schließsystem, Zugangssituation, Anfahrt und Einsatzzeit bestimmen den Gesamtpreis. Wir besprechen den Aufwand vor Arbeitsbeginn. Eine Schlüsselanfertigung, Programmierung oder Reparatur ist darin nicht enthalten.`,
    conditionNote: "Halten Sie einen Ausweis und einen Nachweis Ihrer Berechtigung am Fahrzeug bereit. Liegen die Fahrzeugpapiere im verschlossenen Auto, teilen Sie das bereits am Telefon mit. Die Legitimation wird vor der Öffnung geklärt.",
    conditionHeading: "Fahrzeug und Berechtigung klären",
    isCallout: true,
    priceFrom: pricing.carFrom,
    whatWeDo: [
      "Marke, Modell, Baujahr und genauen Fahrzeugstandort aufnehmen",
      "Schließsystem und Zugangssituation prüfen und das Vorgehen abstimmen",
      "Anfahrt und Gesamtpreis vor dem Auftrag besprechen",
      "Berechtigung prüfen und die Fahrzeugtür mit dem Ziel einer schonenden Öffnung öffnen",
    ],
    includesCylinderSection: false,
    heroImage: "/demir/auto-tueroeffnung.webp",
    heroImageAlt: "Arbeit an einer Fahrzeugtür bei einer Autoöffnung",
  },
  {
    slug: "wohnungstuer-zugefallen",
    name: "Wohnungstür zugefallen",
    shortName: "zugefallene Tür",
    caseAkk: "eine zugefallene Tür",
    caseDat: "einer zugefallenen Tür",
    heroHeadline: "Tür zugefallen? Wir öffnen sie.",
    heroSub:
      "Die Tür ist ins Schloss gefallen und der Schlüssel liegt innen. Die Falle hält die Tür zu, abgeschlossen wurde sie nicht – das ist der häufigste Grund für eine Türöffnung und in der Regel der geringste Aufwand.",
    detail:
      "Bei einer zugefallenen Tür hält nur die Schlossfalle das Türblatt im Rahmen. Der Riegel ist nicht ausgefahren, weil nicht mit dem Schlüssel abgeschlossen wurde. Für die Einschätzung am Telefon ist genau diese Unterscheidung wichtig: Beschreiben Sie, ob Sie die Tür lediglich hinter sich zugezogen haben oder ob zusätzlich abgeschlossen wurde.",
    conditionNote:
      "Zugefallen heißt: Sie haben die Tür hinter sich zugezogen, ohne den Schlüssel zu drehen. Abgeschlossen heißt: Der Riegel wurde mit dem Schlüssel ausgefahren. Beide Fälle erfordern ein anderes Vorgehen und einen anderen Aufwand. Wenn Sie unsicher sind, schildern Sie uns, ob und wie der Schlüssel zuletzt gedreht wurde.",
    conditionHeading: "Zugefallen oder abgeschlossen?",
    isCallout: true,
    priceFrom: pricing.entryFrom,
    whatWeDo: [
      "Türzustand am Telefon klären: zugefallen, abgeschlossen oder Schlüssel steckt innen",
      "Öffnungsversuch mit dem Ziel, Tür, Zarge und Schloss unbeschädigt zu lassen",
      "Rückmeldung vor Arbeitsbeginn, falls sich der Aufwand anders darstellt als beschrieben",
      "Legitimation: Bitte halten Sie einen Ausweis und einen Nachweis zur Wohnung bereit",
    ],
    includesCylinderSection: false,
    heroImage: "/photos/services/tueroeffnung.webp",
    heroImageAlt: "Hand mit Schlüssel an einem Türschloss",
  },
  {
    slug: "tuer-abgeschlossen",
    name: "Tür abgeschlossen",
    shortName: "abgeschlossene Tür",
    caseAkk: "eine abgeschlossene Tür",
    caseDat: "einer abgeschlossenen Tür",
    heroHeadline: "Tür abge­schlossen?",
    heroSub:
      "Wurde die Tür mit dem Schlüssel abgeschlossen, ist der Riegel ausgefahren. Das ist ein anderer Fall als eine nur zugefallene Tür und erfordert eine eigene Einschätzung von Türzustand und Aufwand.",
    detail:
      "Eine abgeschlossene Tür ist mechanisch fester verschlossen als eine zugefallene: Der Riegel greift vollständig in das Schließblech. Wie aufwendig die Öffnung wird, hängt vom Schloss, vom Zylinder und vom Zustand der Tür ab. Deshalb werden Aufwand und Gesamtpreis vor dem Auftrag besprochen und nicht pauschal zugesagt.",
    conditionNote:
      "Überlegen Sie vor dem Anruf, ob die Tür zuletzt nur zugezogen oder mit dem Schlüssel abgeschlossen wurde. Die Bewegung der Klinke allein zeigt den Verriegelungszustand nicht zuverlässig an. Beschreiben Sie Ihre Beobachtungen am Telefon.",
    conditionHeading: "Zugefallen oder abgeschlossen?",
    isCallout: true,
    priceFrom: pricing.lockedFrom,
    whatWeDo: [
      "Türzustand, Schlossart und Zylinder am Telefon so genau wie möglich erfassen",
      "Einschätzung von Aufwand und Gesamtpreis vor der Beauftragung",
      "Öffnung mit dem Ziel, vorhandene Technik weiter nutzbar zu halten",
      "Falls ein Austausch nötig wird, wird er vorher besprochen und nicht stillschweigend ausgeführt",
    ],
    includesCylinderSection: true,
    heroImage: "/photos/zylinder/zylinderschloss-frontal.webp",
    heroImageAlt: "Profilzylinder von vorne als Beispiel für ein Türschloss",
  },
  {
    slug: "schluessel-steckt-innen",
    name: "Schlüssel steckt innen",
    shortName: "innen steckender Schlüssel",
    caseAkk: "einen innen steckenden Schlüssel",
    caseDat: "einem innen steckenden Schlüssel",
    heroHeadline: "Schlüssel steckt von innen.",
    heroSub:
      "Ein innen steckender Schlüssel kann die Bedienung des Zylinders von außen blockieren. Ob ein Zweitschlüssel funktioniert, hängt vom Zylinder und seiner Ausstattung ab.",
    detail:
      "Bei einem Zylinder ohne entsprechende Not- und Gefahrenfunktion kann ein innen steckender Schlüssel die Bedienung von außen verhindern. Ob der Schlüssel dabei gedreht wurde und ob zusätzlich abgeschlossen ist, verändert den Aufwand. Geben Sie am Telefon bitte an, ob der Schlüssel gerade steht oder gedreht wurde, und ob die Tür zusätzlich abgeschlossen ist.",
    conditionNote:
      "Wichtig für die Einschätzung: Nennen Sie, ob der Schlüssel innen gerade steht oder gedreht wurde und ob die Tür zuletzt abgeschlossen wurde. Die Schlüsselstellung allein reicht nicht für eine sichere Beurteilung aus. Bitte nennen Sie außerdem, ob es sich um einen Doppelzylinder mit Not- und Gefahrenfunktion handelt, falls Ihnen das bekannt ist.",
    conditionHeading: "Gedreht oder gerade?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Klären, ob der innen steckende Schlüssel gedreht wurde oder gerade steht",
      "Prüfen, ob der Zylinder eine Not- und Gefahrenfunktion hat",
      "Öffnung mit dem Ziel, den vorhandenen Zylinder nach Möglichkeit zu erhalten",
      "Besprechen, ob nach der Öffnung ein Zylindertausch sinnvoll ist",
    ],
    includesCylinderSection: true,
    heroImage: "/photos/services/schluessel-steckt-innen.webp",
    heroImageAlt: "Schließzylinder mit Schlüssel als Beispiel für die Bauform",
  },
  {
    slug: "schloss-defekt",
    name: "Schloss defekt",
    shortName: "defektes Schloss",
    caseAkk: "ein defektes Schloss",
    caseDat: "einem defekten Schloss",
    heroHeadline: "Schloss defekt? Erst prüfen.",
    heroSub:
      "Lässt sich der Schlüssel nicht mehr drehen, hakt der Zylinder oder ist der Schlüssel abgebrochen, liegt häufig ein Defekt an Zylinder oder Schloss vor. Dann geht es nicht nur ums Öffnen, sondern auch um den Ersatz.",
    detail:
      "Bei einem defekten Schloss ist nach der Öffnung meist ein Austausch von Zylinder oder Schloss nötig. Welches Bauteil ersetzt werden muss, zeigt sich erst bei der Prüfung vor Ort. Für den Ersatz sind die Zylinderlänge, die Bauform und die gewünschte Schließfunktion entscheidend – diese Punkte werden vor dem Einbau besprochen.",
    conditionNote:
      "Ein defektes Schloss ist nicht dasselbe wie eine verschlossene Tür. Beschreiben Sie bitte, ob sich der Schlüssel noch bewegen lässt, ob er abgebrochen ist und ob das Problem schon länger besteht. Daraus ergibt sich, ob ein Austausch wahrscheinlich ist und mit welchem Materialaufwand zu rechnen ist.",
    conditionHeading: "Defekt oder nur schwergängig?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Fehlerbild aufnehmen: hakender Zylinder, abgebrochener Schlüssel oder blockiertes Schloss",
      "Prüfen, ob Zylinder, Schloss oder beides betroffen ist",
      "Zylinderlänge und Bauform bestimmen, bevor über einen Ersatz entschieden wird",
      "Materialkosten und Austausch vor der Ausführung besprechen",
    ],
    includesCylinderSection: true,
    heroImage: "/demir/zylinder-aufbohren.webp",
    heroImageAlt: "Defekter Schließzylinder einer Haustür wird fachgerecht aufgebohrt",
  },
  {
    slug: "schluessel-verloren",
    name: "Schlüssel verloren",
    shortName: "verlorener Schlüssel",
    caseAkk: "einen verlorenen Schlüssel",
    caseDat: "einem verlorenen Schlüssel",
    heroHeadline: "Schlüssel verloren?",
    heroSub:
      "Ist der Schlüssel verloren gegangen, geht es um zwei Fragen: Wie kommen Sie wieder in die Wohnung, und was passiert anschließend mit dem Schließzylinder?",
    detail:
      "Nach einem Schlüsselverlust stellt sich neben der Öffnung die Frage nach der Absicherung. Solange der verlorene Schlüssel im Umlauf ist, passt er weiterhin in den vorhandenen Zylinder. Ob ein Austausch sinnvoll oder – etwa bei einer Mietwohnung oder einer Schließanlage – vertraglich erforderlich ist, sollte mit Vermieter oder Verwaltung geklärt werden.",
    conditionNote:
      "Ein verlorener Schlüssel ist ein anderer Fall als eine zugefallene Tür: Hier kommt zur Öffnung die Frage des Zylindertauschs hinzu. Gehört der Schlüssel zu einer Schließanlage, betrifft ein Austausch unter Umständen mehrere Zylinder. Klären Sie das vor der Beauftragung mit Vermieter oder Hausverwaltung.",
    conditionHeading: "Öffnen – und dann absichern?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Öffnung der Wohnung, damit Sie zunächst wieder hineinkommen",
      "Besprechen, ob der vorhandene Zylinder bestehen bleiben kann",
      "Hinweis auf Schließanlagen: Ein Austausch kann mehrere Zylinder betreffen",
      "Legitimation vor der Öffnung: Ausweis und Nachweis zur Wohnung bereithalten",
    ],
    includesCylinderSection: true,
    heroImage: "/demir/gallery-door.webp",
    heroImageAlt: "Arbeit an einer verschlossenen Tür",
  },
  {
    slug: "schluessel-abgebrochen",
    name: "Schlüssel abgebrochen",
    shortName: "abgebrochener Schlüssel",
    caseAkk: "einen abgebrochenen Schlüssel",
    caseDat: "einem abgebrochenen Schlüssel",
    heroHeadline: "Schlüssel abge­brochen?",
    heroSub:
      "Ein Teil des Schlüssels steckt noch im Zylinder, der Rest ist in der Hand geblieben. Ziehen Sie nicht weiter daran – jeder Versuch kann das Bruchstück tiefer schieben.",
    detail:
      "Schlüssel brechen selten ohne Vorwarnung. Meist hakt das Schloss schon länger, der Schlüssel ist verschlissen oder die Tür hat sich gesetzt. Entscheidend für den Aufwand ist, wie tief das Bruchstück im Zylinder sitzt, ob es sich noch drehen lässt und ob die Tür zusätzlich abgeschlossen wurde. Lässt sich das Reststück schonend ziehen, kann der Zylinder oft erhalten bleiben.",
    conditionNote:
      "Ein abgebrochener Schlüssel ist etwas anderes als ein verlorener: Hier ist das Schloss selbst blockiert. Sagen Sie am Telefon, ob ein Teil des Schlüssels noch heraussteht, ob sich der Zylinder bewegen lässt und ob die Tür nur zugefallen oder abgeschlossen ist.",
    conditionHeading: "Abgebrochen oder verloren?",
    isCallout: true,
    priceFrom: null,
    whatWeDo: [
      "Lage des Bruchstücks beurteilen, bevor am Zylinder gearbeitet wird",
      "Reststück nach Möglichkeit ziehen, statt den Zylinder sofort zu ersetzen",
      "Prüfen, ob der Zylinder nach der Entfernung weiter verwendbar ist",
      "Falls ein Austausch nötig wird: Länge, Bauform und Kosten vorher besprechen",
    ],
    includesCylinderSection: true,
    heroImage: "/photos/services/schluessel-abgebrochen.jpg",
    heroImageAlt: "Abgebrochener Schlüssel an einem Schlüsselbund",
  },
  {
    slug: "schluessel-nachmachen",
    name: "Schlüssel nachmachen",
    shortName: "Schlüssel zum Nachmachen",
    caseAkk: "einen nachzumachenden Schlüssel",
    caseDat: "einem nachzumachenden Schlüssel",
    heroHeadline: "Schlüssel nach­machen lassen.",
    heroSub:
      "Wohnungs-, Haus- und Briefkastenschlüssel werden im Ladengeschäft in Sindelfingen direkt angefertigt – mit eigener Fräsmaschine und einem großen Rohlingsbestand.",
    detail:
      "Ein Zweitschlüssel ist deutlich günstiger als eine Türöffnung. Für die Anfertigung bringen Sie den Originalschlüssel mit; vom Rohling hängt ab, ob sofort gefräst werden kann. Bei Schlüsseln mit Sicherungskarte – etwa aus einer Schließanlage – ist die Karte erforderlich, denn der Hersteller gibt solche Schlüssel nur gegen Legitimation frei.",
    conditionNote:
      "Nicht jeder Schlüssel darf ohne Weiteres kopiert werden. Steht eine Nummer auf dem Schlüssel oder gehört er zu einer Schließanlage, ist meist eine Sicherungskarte nötig. Bringen Sie diese mit, sonst ist eine Anfertigung nicht möglich.",
    conditionHeading: "Darf Ihr Schlüssel kopiert werden?",
    isCallout: false,
    priceFrom: pricing.keyCopyFrom,
    whatWeDo: [
      "Einfacher Standard-Hausschlüssel inklusive Rohling und Fräsen im Ladengeschäft; Sonderprofile nach Angebot",
      "Prüfen, ob für Ihr Profil ein passender Rohling vorrätig ist",
      "Bei Sicherungskarten-Systemen: Legitimation vor der Anfertigung klären",
      "Neuen Schlüssel vor Ort am Schloss testen, bevor Sie gehen",
    ],
    includesCylinderSection: false,
    heroImage: "/demir/schluessel-fraesen-detail.webp",
    heroImageAlt: "Schlüssel wird auf der Fräsmaschine angefertigt",
  },
  {
    slug: "autoschluessel", name: "Autoschlüssel nachmachen", shortName: "Autoschlüssel-Service",
    caseAkk: "einen Autoschlüssel", caseDat: "einem Autoschlüssel",
    heroHeadline: "Autoschlüssel nachmachen und programmieren.",
    heroSub: "Ersatzschlüssel, Funkschlüssel oder Transponder: Wir prüfen Nachfertigung und Programmierung für Ihr Fahrzeug. Marke, Modell, Baujahr und vorhandene Schlüssel helfen bei der Vorbereitung.",
    detail: `Mechanische Autoschlüssel ab ${pricing.carKeyFrom} €, Funk- und Transponderschlüssel ab ${pricing.remoteKeyFrom} €. Fahrzeug und System bestimmen den vereinbarten Umfang. Mechanischer Schlüsselbart, Funkfernbedienung und Wegfahrsperre erfüllen unterschiedliche Aufgaben. Wir prüfen das Fahrzeug und den Schlüsseltyp, bevor Rohling, Fräsung und erforderliche Codierung abgestimmt werden. Bei vollständigem Schlüsselverlust gelten andere Voraussetzungen als bei einem Zweitschlüssel. Nicht jedes System oder fremd beschaffte Schlüsselteil ist kompatibel; Umfang und Gesamtpreis werden vor Beginn vereinbart.`,
    conditionHeading: "Fahrzeug, Schlüsseltyp und Berechtigung",
    conditionNote: "Bringen Sie vorhandene Schlüssel, Ihren Ausweis und einen Nachweis Ihrer Berechtigung am Fahrzeug mit. Ob das Fahrzeug für die Programmierung vor Ort sein muss und welche Unterlagen benötigt werden, klären wir vor dem Termin.",
    category: "vehicle", isCallout: true, priceFrom: pricing.carKeyFrom,
    whatWeDo: [`Mechanischer Fahrzeugschlüssel inklusive Rohling und Fräsen; Funk und Transponder ab ${pricing.remoteKeyFrom} €, Keyless nach Angebot`, "Mechanischen Schlüssel, Funk und Transponder getrennt beurteilen", "Passenden Rohling und erforderliche Programmierung abstimmen", "Funktion am Fahrzeug prüfen und Kosten vor Beginn bestätigen"],
    includesCylinderSection: false, heroImage: "/demir/schlossarbeit.jpg", heroImageAlt: "Arbeit an der Elektronik eines Fahrzeugschlüssels",
  },
  {
    slug: "schlosswechsel", name: "Schlosswechsel & Zylindertausch", shortName: "Schlosswechsel",
    caseAkk: "einen Schlosswechsel", caseDat: "einem Schlosswechsel",
    heroHeadline: "Schloss wechseln. Zugang neu absichern.",
    heroSub: "Nach einem Umzug, Schlüsselverlust oder Defekt prüfen wir, ob ein Zylindertausch genügt oder das Schloss ersetzt werden muss. Maße, Bauform und gewünschte Funktion bestimmen die passende Lösung.",
    detail: `Der Austausch eines Standardzylinders inklusive Standard-Sicherheitszylinder und üblicher Montage beginnt ab ${pricing.cylinderSwapFrom} €. Sondermaße, Schutzbeschläge und weitere Teile werden gesondert angeboten. Ein kompletter Schlosswechsel ist ein anderer Leistungsumfang als der reine Zylindertausch. Bei Schließanlagen wird vor der Bestellung geprüft, welche Türen und Berechtigungen betroffen sind.`,
    conditionHeading: "Zylinder oder ganzes Schloss?",
    conditionNote: "Der Zylinder ist das Bauteil, in das der Schlüssel gesteckt wird. Das Einsteckschloss bewegt Falle und Riegel. Welche Komponente betroffen ist, wird vor dem Austausch geprüft. Bei Mietobjekten stimmen Sie Änderungen an gemeinschaftlichen Schließsystemen mit der zuständigen Verwaltung ab.",
    category: "security", isCallout: true, priceFrom: pricing.cylinderSwapFrom,
    whatWeDo: ["Standard-Sicherheitszylinder und übliche Montage; Sondermaße und weitere Teile nach Angebot", "Zylinderlänge, Bauform und Schließfunktion bestimmen", "Prüfen, ob Zylinder, Einsteckschloss oder Beschlag betroffen ist", "Neue Schlüssel und Schließfunktion nach dem Einbau testen"],
    includesCylinderSection: true, heroImage: "/demir/schluessel-vermessen.webp", heroImageAlt: "Vermessen eines Schließzylinders vor dem Austausch",
  },
  {
    slug: "mehrfachverriegelung", name: "Mehrfachverriegelung reparieren", shortName: "Mehrfachverriegelung",
    caseAkk: "eine Mehrfachverriegelung", caseDat: "einer Mehrfachverriegelung",
    heroHeadline: "Mehrfachverriegelung klemmt?",
    heroSub: "Die Haustür verriegelt an mehreren Punkten, der Schlüssel dreht schwer oder die Tür bleibt blockiert? Wir prüfen Schließleiste, Getriebe und Türstellung, bevor über Reparatur oder Austausch entschieden wird.",
    detail: `Reparatur oder Austausch einer Mehrfachverriegelung ab ${pricing.multipointFrom} € im Standardumfang. Ersatzteil, Türmodell und Montageaufwand bestimmen den Endpreis. Eine Mehrfachverriegelung verbindet mehrere Schließpunkte über eine gemeinsame Mechanik. Eine schwergängige Bedienung kann an der Ausrichtung der Tür, am Beschlag oder an einem Bauteil der Verriegelung liegen. Hersteller, Maße und Ausführung bestimmen, ob ein Ersatzteil verfügbar ist. Die Öffnung einer blockierten Tür und der anschließende Austausch werden vorab als getrennte Arbeitsschritte besprochen.`,
    conditionHeading: "Fehlerbild statt Kraftaufwand",
    conditionNote: "Drehen Sie den Schlüssel und betätigen Sie den Griff nicht mit Gewalt. Beschreiben Sie, ob die Tür offen oder geschlossen ist und seit wann sie klemmt. Herstellerangaben oder Fotos einer zugänglichen Schließleiste erleichtern die Vorbereitung.",
    category: "security", isCallout: true, priceFrom: pricing.multipointFrom,
    whatWeDo: [`Reparatur oder Austausch im Standardumfang; Ersatzteil, Türmodell und Montageaufwand bestimmen den Endpreis`, "Hersteller und Bauform der Schließleiste erfassen", "Reparaturmöglichkeit und Ersatzteilverfügbarkeit klären", "Montageumfang und Gesamtpreis vor dem Auftrag besprechen"],
    includesCylinderSection: false, heroImage: "/photos/services/mehrfachverriegelung.jpg", heroImageAlt: "Mehrpunkt-Schloss als Beispiel für eine Mehrfachverriegelung",
  },
  {
    slug: "schliessanlagen", name: "Schließanlagen planen & montieren", shortName: "Schließanlagen",
    caseAkk: "eine Schließanlage", caseDat: "einer Schließanlage",
    heroHeadline: "Schließanlagen mit klaren Berechtigungen.",
    heroSub: "Für Mehrfamilienhäuser, Gewerbe und Verwaltungen planen wir Schließanlagen passend zu Türen, Nutzern und Zugangsrechten. Wer welche Tür öffnen soll, wird vor der Auswahl des Systems festgelegt.",
    detail: `Planung und Standard-Schließanlage ab ${pricing.lockingSystemFrom} €. Türanzahl, Schlüssel und Zylinderausführungen bestimmen den Endpreis. Eine Schließanlage verbindet mehrere Zylinder mit einem festgelegten Berechtigungskonzept. Ein Schlüssel kann ausgewählte Türen öffnen, während andere Bereiche getrennt bleiben. Für ein Angebot benötigen wir Türanzahl, Zylindermaße, Schlüsselanzahl und den gewünschten Schließplan. Erweiterbarkeit, Nachbestellungen und die Dokumentation der Berechtigungen gehören zur Abstimmung.`,
    conditionHeading: "Schließplan und Verwaltung abstimmen",
    conditionNote: "Legen Sie fest, wer Zugang zu welchen Bereichen benötigt und wer Nachbestellungen freigeben darf. Bei bestehenden Anlagen helfen Hersteller, Systembezeichnung und eine vorhandene Sicherungskarte. Kartencodes gehören nicht in öffentlich zugängliche Nachrichten.",
    category: "security", isCallout: true, priceFrom: pricing.lockingSystemFrom,
    whatWeDo: [`Planung und Standard-Schließanlage; Türen, Schlüssel und Zylinderausführungen bestimmen den Endpreis`, "Schließplan, Zylindermaße und Schlüsselanzahl abstimmen", "Passendes System und spätere Erweiterungen besprechen", "Montage, Funktion und Schlüsselübergabe dokumentieren"],
    includesCylinderSection: true, heroImage: "/demir/werkstatt-schluesselwand.webp", heroImageAlt: "Schlüssel und Rohlinge in der Werkstatt als Beispiel für den Schlüsselservice",
  },
  {
    slug: "einbruchschutz", name: "Einbruchschutz für Türen & Fenster", shortName: "Einbruchschutz",
    caseAkk: "einen Einbruchschutz", caseDat: "einem Einbruchschutz",
    heroHeadline: "Einbruchschutz: Schwachstellen erkennen.",
    heroSub: "Wir prüfen Türen, Fenster, Zylinder und Beschläge und besprechen geeignete mechanische Nachrüstungen. Die vorhandene Bausubstanz und die tägliche Nutzung bestimmen, welche Maßnahmen sinnvoll sind.",
    detail: `Montage für Einbruchschutz ab ${pricing.burglaryProtectionFrom} € zuzüglich ausgewähltem Material. Der Gesamtpreis wird nach Prüfung vor Arbeitsbeginn bestätigt. Einbruchschutz entsteht durch aufeinander abgestimmte Bauteile. Ein neuer Zylinder allein beseitigt keine Schwachstelle am Beschlag, Rahmen oder Fenster. Nach der Prüfung werden geeignete Zusatzsicherungen, Schutzbeschläge und gegebenenfalls weitere Maßnahmen mit Material- und Montageumfang angeboten. Es gibt keine pauschale Zusage, dass jede Nachrüstung zu jeder Tür passt.`,
    conditionHeading: "Vorhandene Bauteile zuerst prüfen",
    conditionNote: "Nennen Sie, welche Zugänge Sie absichern möchten und ob es bereits Schäden gibt. Bei gemieteten Objekten klären Sie erforderliche Freigaben vor baulichen Änderungen. Flucht- und Rettungswege müssen bei der Auswahl der Sicherungen berücksichtigt werden.",
    category: "security", isCallout: true, priceFrom: pricing.burglaryProtectionFrom,
    whatWeDo: [`Montage für Einbruchschutz zuzüglich ausgewähltem Material; Umfang vorab abstimmen`, "Geeignete mechanische Nachrüstungen erläutern", "Material, Montage und erforderliche Freigaben vorab abstimmen", "Bedienung und Schließfunktion nach der Montage prüfen"],
    includesCylinderSection: false, heroImage: "/photos/zylinder/profilzylinder.webp", heroImageAlt: "Profilzylinder mit Befestigungsschraube als Beispiel für mechanische Schließtechnik",
  },
  {
    slug: "sicherheitstechnik", name: "Sicherheitstechnik & Zutrittskontrolle", shortName: "Sicherheitstechnik",
    caseAkk: "eine Zutrittskontrolle", caseDat: "einer Zutrittskontrolle",
    heroHeadline: "Sicherheitstechnik für Ihr Gebäude.",
    heroSub: "Elektronische Zutrittskontrolle und abgestimmte Sicherheitstechnik für private und gewerbliche Gebäude. Wir beginnen mit Ihrem Schutzziel, den vorhandenen Türen und den benötigten Zugangsrechten.",
    detail: "Karte, Transponder oder Code können mechanische Schließsysteme ergänzen oder ersetzen. Bei der Planung zählen Stromversorgung, bestehende Verkabelung, Nutzerverwaltung und das Verhalten bei einem Stromausfall. Welche Systeme sich integrieren lassen, wird am Objekt geprüft. Komponenten, Einrichtung, Einweisung und spätere Pflege werden im Angebot getrennt beschrieben.",
    conditionHeading: "Nutzung und technische Voraussetzungen",
    conditionNote: "Beschreiben Sie Nutzeranzahl, vorhandene Anlagen und gewünschte Zutrittszeiten. Vor einer Installation werden Kompatibilität und notwendige Freigaben geprüft. Zugangscodes und Sicherheitsunterlagen übermitteln Sie nur nach persönlicher Abstimmung.",
    category: "security", isCallout: true, priceFrom: null,
    whatWeDo: ["Schutzziel, Nutzergruppen und Zugangsrechte erfassen", "Vorhandene Technik und Einbaumöglichkeiten prüfen", "Elektronische Zutrittslösung und Verwaltungsaufwand abstimmen", "Installation, Funktionsprüfung und Einweisung vereinbaren"],
    includesCylinderSection: false, heroImage: "/photos/services/sicherheitstechnik.jpg", heroImageAlt: "Zutrittsleser mit Zahlentastatur als Beispiel für elektronische Zutrittskontrolle",
  },

];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Detailed door-opening pages already have local content; specialist services link to their main page.
export const cityServices = services.filter((s) => s.isCallout && (!s.category || s.slug === "autooeffnung"));

/** Per-service FAQ lives in data/faq.ts so city pages can rotate it without duplicating answers. */
export const serviceFaqFor = (slug: ServiceSlug) => serviceFaq[slug];
