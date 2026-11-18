-- ============================================================================
-- Schéma de base de données — Afrilux Suivi Import
-- Base de données PostgreSQL (Supabase)
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------
-- Table principale : dossiers d'importation
-- ------------------------------------------------------------
CREATE TABLE dossiers (
  id             TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
  ref            TEXT UNIQUE NOT NULL,
  statut         TEXT NOT NULL DEFAULT 'Commandé'
                 CHECK (statut IN ('Commandé','En mer','Arrivé Douala','En dédouanement','Livré')),
  mode           TEXT NOT NULL DEFAULT 'fcl'
                 CHECK (mode IN ('fcl','lcl','air')),
  colis          INTEGER DEFAULT 0,
  poids          DECIMAL(10,2) DEFAULT 0,
  volume         DECIMAL(10,3) DEFAULT 0,
  taxable        DECIMAL(10,2) DEFAULT 0,
  pr             TEXT,
  po             TEXT,
  po_date        DATE,
  paiement       TEXT NOT NULL DEFAULT 'Non payé'
                 CHECK (paiement IN ('Non payé','Acompte versé','Soldé')),
  devise         TEXT NOT NULL DEFAULT 'EUR'
                 CHECK (devise IN ('EUR','USD','XAF','CNY','GBP','AED')),
  incoterm       TEXT,
  incoterm_lieu  TEXT,
  facture        DECIMAL(15,2),
  frais_avant    DECIMAL(15,2) DEFAULT 0,
  frais_apres    DECIMAL(15,2) DEFAULT 0,
  fret           DECIMAL(15,2) DEFAULT 0,
  assurance      DECIMAL(15,2) DEFAULT 0,
  fob            DECIMAL(15,2),
  fournisseur    TEXT NOT NULL,
  marchandise    TEXT,
  origine        TEXT,
  navire         TEXT,
  bl             TEXT,
  eta            DATE,
  transitaire    TEXT,
  transitaire_ref TEXT,
  di             TEXT,
  di_date        DATE,
  di_exp         DATE,
  notes          TEXT,
  archive        BOOLEAN DEFAULT FALSE,
  archive_le     TIMESTAMPTZ,
  exemple        BOOLEAN DEFAULT FALSE,
  cree_le        TIMESTAMPTZ DEFAULT NOW(),
  maj_le         TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- Produits par dossier (lignes du PO)
-- ------------------------------------------------------------
CREATE TABLE produits (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dossier_id  TEXT NOT NULL REFERENCES dossiers(id) ON DELETE CASCADE,
  code        TEXT,
  des         TEXT NOT NULL,
  hs          TEXT,
  qte         DECIMAL(10,3) NOT NULL DEFAULT 0,
  u           TEXT NOT NULL DEFAULT 'pce',
  pu          DECIMAL(15,2) NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- Conteneurs par dossier (Maritime FCL uniquement)
-- ------------------------------------------------------------
CREATE TABLE conteneurs (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dossier_id  TEXT NOT NULL REFERENCES dossiers(id) ON DELETE CASCADE,
  numero      TEXT NOT NULL,
  type        TEXT NOT NULL DEFAULT '40'''
              CHECK (type IN ('20''','40''')),
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- Documents joints par dossier
-- ------------------------------------------------------------
CREATE TABLE documents (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dossier_id    TEXT NOT NULL REFERENCES dossiers(id) ON DELETE CASCADE,
  type          TEXT NOT NULL
                CHECK (type IN ('po','proforma','di','swift','facture','packing','bl','rvc','anor','dau','quittance')),
  nom           TEXT NOT NULL,
  taille_octets INTEGER NOT NULL,
  type_mime     TEXT NOT NULL,
  chemin_stockage TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------
-- Index
-- ------------------------------------------------------------
CREATE INDEX idx_dossiers_ref       ON dossiers(ref);
CREATE INDEX idx_dossiers_statut    ON dossiers(statut);
CREATE INDEX idx_dossiers_mode      ON dossiers(mode);
CREATE INDEX idx_dossiers_eta       ON dossiers(eta);
CREATE INDEX idx_dossiers_archive   ON dossiers(archive);
CREATE INDEX idx_dossiers_fournisseur ON dossiers(fournisseur);
CREATE INDEX idx_produits_dossier   ON produits(dossier_id);
CREATE INDEX idx_conteneurs_dossier ON conteneurs(dossier_id);
CREATE INDEX idx_documents_dossier  ON documents(dossier_id);

-- ------------------------------------------------------------
-- Row Level Security (RLS)
-- ------------------------------------------------------------
ALTER TABLE dossiers   ENABLE ROW LEVEL SECURITY;
ALTER TABLE produits   ENABLE ROW LEVEL SECURITY;
ALTER TABLE conteneurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents  ENABLE ROW LEVEL SECURITY;

CREATE POLICY policy_dossiers_auth ON dossiers   FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY policy_produits_auth ON produits   FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY policy_conteneurs_auth ON conteneurs FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY policy_documents_auth ON documents  FOR ALL USING (auth.uid() IS NOT NULL);

-- ------------------------------------------------------------
-- Trigger : maj_le mis à jour automatiquement
-- ------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_maj_le()
RETURNS TRIGGER AS $$
BEGIN
  NEW.maj_le = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_dossiers_maj_le
  BEFORE UPDATE ON dossiers
  FOR EACH ROW
  EXECUTE FUNCTION update_maj_le();

-- ------------------------------------------------------------
-- Commentaires
-- ------------------------------------------------------------
COMMENT ON TABLE dossiers   IS 'Dossiers d importation (shipments)';
COMMENT ON TABLE produits   IS 'Lignes de produits par dossier';
COMMENT ON TABLE conteneurs IS 'Conteneurs maritimes par dossier';
COMMENT ON TABLE documents  IS 'Documents joints par dossier';
