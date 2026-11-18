-- ============================================================================
-- Données de test — Afrilux Suivi Import
-- ============================================================================

-- Dossiers d'exemple
INSERT INTO dossiers (ref, statut, mode, fournisseur, marchandise, devise, incoterm, incoterm_lieu,
                      facture, fret, assurance, fob, origine, navire, bl, eta, transitaire, paiement,
                      po, po_date, di, di_date, di_exp, notes, archive, cree_le, maj_le)
VALUES
  ('IMP-2026-001', 'En mer', 'fcl', 'Fertilizer Co. Ltd', 'Engrais NPK 20-10-10', 'EUR', 'FOB', 'Shanghai',
   45000.00, 3200.00, 800.00, 45000.00, 'Shanghai', 'MSC ANNA / 245W', 'MEDU1234567', '2026-12-15',
   'Transitaire Express', 'Acompte versé', 'PO-2026-0458', '2026-10-01', 'DI-2026-001', '2026-10-05', '2027-04-05',
   'Premier dossier test', FALSE, NOW(), NOW()),

  ('IMP-2026-002', 'Livré', 'fcl', 'Steel Fabricators SA', 'Tôles d acier galvanisé', 'USD', 'CIF', 'Anvers',
   82000.00, 0.00, 0.00, 78500.00, 'Anvers', 'MAERSK SEALAND / 112E', 'MAEU9876543', '2026-11-10',
   'Euro Cargo', 'Soldé', 'PO-2026-0459', '2026-09-15', 'DI-2026-002', '2026-09-20', '2027-03-20',
   'Dossier livré et clôturé', TRUE, NOW() - INTERVAL '30 days', NOW() - INTERVAL '5 days'),

  ('IMP-2026-003', 'Commandé', 'air', 'Electronics Shenzhen', 'Composants électroniques', 'USD', 'EXW', 'Shenzhen',
   12500.00, 1500.00, 400.00, 12500.00, 'Shenzhen', 'AF 0900', '057-12345675', '2026-11-25',
   'Air Fast Logistics', 'Non payé', 'PO-2026-0460', '2026-10-20', NULL, NULL, NULL,
   'Fret aérien urgent', FALSE, NOW(), NOW());

-- Produits du dossier 1
INSERT INTO produits (dossier_id, code, des, hs, qte, u, pu)
SELECT id, 'ENG-NPK-2010', 'Engrais NPK 20-10-10 sac 50kg', '3105.20', 900, 'sac', 50.00 FROM dossiers WHERE ref = 'IMP-2026-001';

INSERT INTO produits (dossier_id, code, des, hs, qte, u, pu)
SELECT id, 'ENG-NPK-2010-BAG', 'Engrais NPK 20-10-10 sac 25kg', '3105.20', 450, 'sac', 28.00 FROM dossiers WHERE ref = 'IMP-2026-001';

-- Produits du dossier 2
INSERT INTO produits (dossier_id, code, des, hs, qte, u, pu)
SELECT id, 'STEEL-GALV-2MM', 'Tôle acier galvanisé 2mm', '7210.49', 45, 'tonne', 850.00 FROM dossiers WHERE ref = 'IMP-2026-002';

-- Conteneurs du dossier 1 (FCL)
INSERT INTO conteneurs (dossier_id, numero, type)
SELECT id, 'MSCU1234566', '40''' FROM dossiers WHERE ref = 'IMP-2026-001';

INSERT INTO conteneurs (dossier_id, numero, type)
SELECT id, 'MSCU1234567', '40''' FROM dossiers WHERE ref = 'IMP-2026-001';

-- Conteneurs du dossier 2 (FCL)
INSERT INTO conteneurs (dossier_id, numero, type)
SELECT id, 'MAEU9876543', '40''' FROM dossiers WHERE ref = 'IMP-2026-002';

-- Documents du dossier 1
INSERT INTO documents (dossier_id, type, nom, taille_octets, type_mime, chemin_stockage)
SELECT id, 'po', 'PO-2026-0458.pdf', 245760, 'application/pdf', 'dossiers/IMP-2026-001/po.pdf' FROM dossiers WHERE ref = 'IMP-2026-001';

INSERT INTO documents (dossier_id, type, nom, taille_octets, type_mime, chemin_stockage)
SELECT id, 'di', 'DI-2026-001.pdf', 312890, 'application/pdf', 'dossiers/IMP-2026-001/di.pdf' FROM dossiers WHERE ref = 'IMP-2026-001';

-- Documents du dossier 2
INSERT INTO documents (dossier_id, type, nom, taille_octets, type_mime, chemin_stockage)
SELECT id, 'bl', 'MAEU9876543_BL.pdf', 187450, 'application/pdf', 'dossiers/IMP-2026-002/bl.pdf' FROM dossiers WHERE ref = 'IMP-2026-002';

INSERT INTO documents (dossier_id, type, nom, taille_octets, type_mime, chemin_stockage)
SELECT id, 'facture', 'FACTURE-2026-002.pdf', 425100, 'application/pdf', 'dossiers/IMP-2026-002/facture.pdf' FROM dossiers WHERE ref = 'IMP-2026-002';
