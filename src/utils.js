export const LV = (() => {
  const m = {};
  let v = 10;
  for (const c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    if (v % 11 === 0) {
      v++;
    }
    m[c] = v++;
  }
  return m;
})();

export function isoValid(n) {
  if (!/^[A-Z]{3}[UJZR]\d{7}$/.test(n)) {
    return false;
  }
  let s = 0;
  for (let i = 0; i < 10; i++) {
    const c = n[i];
    s += (i < 4 ? LV[c] : +c) * Math.pow(2, i);
  }
  return (s % 11) % 10 === +n[10];
}

export const TEU = (t) => (t.startsWith("20") ? 1 : 2);

export const num = (v) => {
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return isFinite(n) ? n : 0;
};

export const clean = (s) =>
  String(s || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

export const IGRP = (c) =>
  ["EXW", "FCA", "FAS"].includes(c)
    ? "A"
    : !c || c === "FOB"
      ? "F"
      : ["CFR", "CPT"].includes(c)
        ? "C"
        : ["CIF", "CIP"].includes(c)
          ? "CI"
          : "D";

export const lineAmt = (p) => num(p.qte) * num(p.pu);

export const prodTotal = (it) => (it.produits || []).reduce((a, p) => a + lineAmt(p), 0);

export const fobOf = (it) => (String(it.fob ?? "").trim() !== "" ? num(it.fob) : prodTotal(it));

export const cifOf = (it) => fobOf(it) + num(it.fret) + num(it.assurance);

export const valCalc = (c, facture, pt, fA, fr, as, fD) => {
  const base = String(facture ?? "").trim() !== "" ? num(facture) : pt;
  const g = IGRP(c);
  fA = num(fA);
  fr = num(fr);
  as = num(as);
  fD = num(fD);
  if (g === "A") {
    return { base, fob: base + fA, cif: base + fA + fr + as };
  }
  if (g === "F") {
    return { base, fob: base, cif: base + fr + as };
  }
  if (g === "C") {
    return { base, fob: base - fr, cif: base + as };
  }
  if (g === "CI") {
    return { base, fob: base - fr - as, cif: base };
  }
  return { base, fob: base - fD - fr - as, cif: base - fD };
};

export const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export const daysTo = (iso) => {
  if (!iso) {
    return null;
  }
  const d = new Date(iso + "T00:00:00");
  return Math.round((d - today()) / 864e5);
};

export const fmtDate = (iso) => {
  if (!iso) {
    return "—";
  }
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
