import { describe, test, expect } from "vitest";
import {
  num,
  TEU,
  isoValid,
  clean,
  IGRP,
  valCalc,
  lineAmt,
  prodTotal,
  fobOf,
  cifOf,
  daysTo,
  fmtDate,
} from "./utils.js";

describe("num", () => {
  test("convertit une chaîne numérique", () => {
    expect(num("123.45")).toBe(123.45);
  });
  test("gère la virgule décimale", () => {
    expect(num("123,45")).toBe(123.45);
  });
  test("retourne 0 pour une valeur invalide", () => {
    expect(num("abc")).toBe(0);
    expect(num(null)).toBe(0);
    expect(num(undefined)).toBe(0);
    expect(num("")).toBe(0);
  });
});

describe("TEU", () => {
  test("retourne 1 pour 20'", () => {
    expect(TEU("20'")).toBe(1);
    expect(TEU('20"')).toBe(1);
  });
  test("retourne 2 pour 40'", () => {
    expect(TEU("40'")).toBe(2);
    expect(TEU('40"')).toBe(2);
  });
});

describe("isoValid", () => {
  test("valide un numéro ISO 6346 correct", () => {
    expect(isoValid("MSCU1234566")).toBe(true);
  });
  test("rejette un format invalide", () => {
    expect(isoValid("ABC1234567")).toBe(false);
    expect(isoValid("MSCU1234565")).toBe(false);
    expect(isoValid("")).toBe(false);
  });
});

describe("clean", () => {
  test("nettoie une chaîne", () => {
    expect(clean("MSCU 123-456")).toBe("MSCU123456");
    expect(clean(null)).toBe("");
  });
});

describe("IGRP", () => {
  test("classe EXW/FCA/FAS en A", () => {
    expect(IGRP("EXW")).toBe("A");
    expect(IGRP("FCA")).toBe("A");
    expect(IGRP("FAS")).toBe("A");
  });
  test("classe FOB/vide en F", () => {
    expect(IGRP("FOB")).toBe("F");
    expect(IGRP("")).toBe("F");
    expect(IGRP(undefined)).toBe("F");
  });
  test("classe CFR/CPT en C", () => {
    expect(IGRP("CFR")).toBe("C");
    expect(IGRP("CPT")).toBe("C");
  });
  test("classe CIF/CIP en CI", () => {
    expect(IGRP("CIF")).toBe("CI");
    expect(IGRP("CIP")).toBe("CI");
  });
  test("classe DAP/DPU/DDP en D", () => {
    expect(IGRP("DAP")).toBe("D");
    expect(IGRP("DPU")).toBe("D");
    expect(IGRP("DDP")).toBe("D");
  });
});

describe("valCalc", () => {
  test("groupe A (EXW): FOB = base + fraisAvant, CIF = + fret + assurance", () => {
    const r = valCalc("EXW", "1000", 0, 50, 200, 100, 0);
    expect(r.fob).toBe(1050);
    expect(r.cif).toBe(1350);
  });
  test("groupe F (FOB): FOB = base, CIF = base + fret + assurance", () => {
    const r = valCalc("FOB", "1000", 0, 0, 200, 100, 0);
    expect(r.fob).toBe(1000);
    expect(r.cif).toBe(1300);
  });
  test("groupe C (CFR): FOB = base - fret, CIF = base + assurance", () => {
    const r = valCalc("CFR", "1000", 0, 0, 200, 100, 0);
    expect(r.fob).toBe(800);
    expect(r.cif).toBe(1100);
  });
  test("groupe CI (CIF): FOB = base - fret - assurance, CIF = base", () => {
    const r = valCalc("CIF", "1000", 0, 0, 0, 0, 0);
    expect(r.fob).toBe(1000);
    expect(r.cif).toBe(1000);
  });
  test("groupe D (DDP): FOB = base - fraisApres - fret - assurance", () => {
    const r = valCalc("DDP", "1000", 0, 0, 0, 0, 50);
    expect(r.fob).toBe(950);
    expect(r.cif).toBe(950);
  });
});

describe("lineAmt", () => {
  test("calcule quantité × prix unitaire", () => {
    expect(lineAmt({ qte: "10", pu: "25.5" })).toBe(255);
  });
});

describe("prodTotal", () => {
  test("somme des lignes de produits", () => {
    expect(
      prodTotal({
        produits: [
          { qte: "2", pu: "10" },
          { qte: "3", pu: "20" },
        ],
      })
    ).toBe(80);
  });
});

describe("fobOf", () => {
  test("retourne fob si défini", () => {
    expect(fobOf({ fob: "500", produits: [] })).toBe(500);
  });
  test("retourne le total des produits si fob vide", () => {
    expect(fobOf({ fob: "", produits: [{ qte: "2", pu: "100" }] })).toBe(200);
  });
});

describe("cifOf", () => {
  test("calcule FOB + fret + assurance", () => {
    expect(cifOf({ fob: "1000", fret: "200", assurance: "100", produits: [] })).toBe(1300);
  });
});

describe("daysTo", () => {
  test("retourne le nombre de jours jusqu'à une date", () => {
    const d = daysTo("2026-12-31");
    expect(typeof d).toBe("number");
  });
  test("retourne null pour une date vide", () => {
    expect(daysTo("")).toBeNull();
    expect(daysTo(null)).toBeNull();
  });
});

describe("fmtDate", () => {
  test("formate YYYY-MM-DD en JJ/MM/YYYY", () => {
    expect(fmtDate("2026-11-18")).toBe("18/11/2026");
  });
  test("retourne — pour une date vide", () => {
    expect(fmtDate("")).toBe("—");
    expect(fmtDate(null)).toBe("—");
  });
});
