(() => {
/* ---------- langues : franÃ§ais (source), anglais, chinois ---------- */
  const LANGS = ["fr", "en", "zh"];
  let LANG = (() => { try { const l = localStorage.getItem("afx-lang"); return LANGS.includes(l) ? l : "fr"; } catch { return "fr"; } })();
  const LOC = () => ({fr: "fr-FR", en: "en-GB", zh: "zh-CN"})[LANG];
  const D = [
    // en-tÃªte, onglets, barre
    ["Suivi Import", "Import Tracking", "è¿›å£è·Ÿè¸ª"],
    ["Afrilux Suivi Import", "Afrilux Import Tracking", "Afrilux è¿›å£è·Ÿè¸ª"],
    ["Maritime FCL Â· LCL Â· AÃ©rien â€” dossiers, conteneurs, documents et archives", "Sea FCL Â· LCL Â· Air â€” shipments, containers, documents and archives", "æµ·è¿æ•´ç®± Â· æ‹¼ç®± Â· ç©ºè¿ â€” æ¡£æ¡ˆã€é›†è£…ç®±ã€å•æ®ä¸Žå½’æ¡£"],
    ["Sauvegarder", "Back up", "å¤‡ä»½"], ["Restaurer", "Restore", "æ¢å¤"], ["Rapport", "Report", "æŠ¥è¡¨"],
    ["+ Nouveau dossier", "+ New shipment", "+ æ–°å»ºæ¡£æ¡ˆ"], ["Nouveau dossier", "New shipment", "æ–°å»ºæ¡£æ¡ˆ"],
    ["Langue", "Language", "è¯­è¨€"], ["SynthÃ¨se", "Summary", "æ±‡æ€»"],
    ["Dossiers en cours", "Active shipments", "è¿›è¡Œä¸­çš„æ¡£æ¡ˆ"], ["Conteneurs en cours", "Active containers", "è¿›è¡Œä¸­çš„é›†è£…ç®±"],
    ["Volume (EVP)", "Volume (TEU)", "ä½“ç§¯ (TEU)"], ["ArrivÃ©es â‰¤ 7 jours", "Arrivals â‰¤ 7 days", "7 å¤©å†…åˆ°æ¸¯"],
    ["En cours", "Active", "è¿›è¡Œä¸­"], ["Archives", "Archive", "å½’æ¡£"],
    ["Rechercher dossier, BL, nÂ° conteneurâ€¦", "Search shipment, B/L, container no.â€¦", "æœç´¢æ¡£æ¡ˆã€æå•ã€ç®±å·â€¦"], ["Rechercher", "Search", "æœç´¢"],
    ["Filtrer par statut", "Filter by status", "æŒ‰çŠ¶æ€ç­›é€‰"], ["Filtrer par transport", "Filter by transport", "æŒ‰è¿è¾“æ–¹å¼ç­›é€‰"],
    ["Tous les statuts", "All statuses", "å…¨éƒ¨çŠ¶æ€"], ["Tous transports", "All transport modes", "å…¨éƒ¨è¿è¾“æ–¹å¼"], ["Tous", "All", "å…¨éƒ¨"],
    ["Dossier Â· PR Â· PO", "Shipment Â· PR Â· PO", "æ¡£æ¡ˆ Â· PR Â· PO"], ["Fournisseur Â· Paiement", "Supplier Â· Payment", "ä¾›åº”å•† Â· ä»˜æ¬¾"],
    ["Navire / Vol Â· BL / LTA", "Vessel / Flight Â· B/L / AWB", "èˆ¹å/èˆªç­ Â· æå•/ç©ºè¿å•"], ["Conteneurs Â· Colis", "Containers Â· Packages", "é›†è£…ç®± Â· ä»¶æ•°"],
    ["Documents", "Documents", "å•æ®"], ["Statut", "Status", "çŠ¶æ€"],
    ["Les dossiers archivÃ©s restent consultables et peuvent Ãªtre restaurÃ©s Ã  tout moment.", "Archived shipments remain viewable and can be restored at any time.", "å·²å½’æ¡£çš„æ¡£æ¡ˆä»å¯æŸ¥çœ‹ï¼Œå¹¶å¯éšæ—¶æ¢å¤ã€‚"],
    ["ClassÃ©s par ETA. Archivez un dossier une fois livrÃ© pour garder la liste courte.", "Sorted by ETA. Archive a shipment once delivered to keep the list short.", "æŒ‰ ETA æŽ’åºã€‚æ¡£æ¡ˆäº¤ä»˜åŽè¯·å½’æ¡£ï¼Œä»¥ä¿æŒåˆ—è¡¨ç®€æ´ã€‚"],
    // formulaire
    ["Fermer", "Close", "å…³é—­"], ["NÂ° dossier *", "Shipment no. *", "æ¡£æ¡ˆç¼–å· *"], ["Mode de transport", "Transport mode", "è¿è¾“æ–¹å¼"],
    ["Achat", "Purchasing", "é‡‡è´­"], ["NÂ° PR (demande d'achat)", "PR no. (purchase requisition)", "PR ç¼–å·ï¼ˆé‡‡è´­ç”³è¯·ï¼‰"],
    ["NÂ° PO (bon de commande)", "PO no. (purchase order)", "PO ç¼–å·ï¼ˆé‡‡è´­è®¢å•ï¼‰"], ["Date du PO", "PO date", "PO æ—¥æœŸ"], ["DATE DU PO", "PO DATE", "PO æ—¥æœŸ"],
    ["Paiement fournisseur", "Supplier payment", "ä¾›åº”å•†ä»˜æ¬¾"], ["Fournisseur *", "Supplier *", "ä¾›åº”å•† *"], ["Nom du fournisseur", "Supplier name", "ä¾›åº”å•†åç§°"],
    ["Marchandise (rÃ©sumÃ©)", "Goods (summary)", "è´§ç‰©ï¼ˆæ‘˜è¦ï¼‰"], ["Engrais NPK, piÃ¨cesâ€¦", "NPK fertiliser, spare partsâ€¦", "NPK åŒ–è‚¥ã€é›¶é…ä»¶â€¦"],
    ["Devise du PO", "PO currency", "PO å¸ç§"], ["Produits", "Products", "äº§å“"], ["+ Ajouter un produit", "+ Add a product", "+ æ·»åŠ äº§å“"],
    ["produit(s) Â· Total", "product(s) Â· Total", "ä¸ªäº§å“ Â· åˆè®¡"], ["Coller des lignes depuis Excel", "Paste rows from Excel", "ä»Ž Excel ç²˜è´´è¡Œ"],
    ["Code article â‡¥ DÃ©signation â‡¥ Code SH â‡¥ QuantitÃ© â‡¥ UnitÃ© â‡¥ Prix unitaire (une ligne par produit)", "Item code â‡¥ Description â‡¥ HS code â‡¥ Quantity â‡¥ Unit â‡¥ Unit price (one row per product)", "ç‰©æ–™ç¼–ç  â‡¥ å“å â‡¥ HS ç¼–ç  â‡¥ æ•°é‡ â‡¥ å•ä½ â‡¥ å•ä»·ï¼ˆæ¯è¡Œä¸€ä¸ªäº§å“ï¼‰"],
    ["Ajouter les lignes", "Add rows", "æ·»åŠ è¡Œ"], ["#", "#", "#"], ["Code article", "Item code", "ç‰©æ–™ç¼–ç "], ["DÃ©signation", "Description", "å“å"], ["Code SH", "HS code", "HS ç¼–ç "],
    ["QuantitÃ©", "Quantity", "æ•°é‡"], ["UnitÃ©", "Unit", "å•ä½"], ["Prix unit.", "Unit price", "å•ä»·"], ["Prix unitaire", "Unit price", "å•ä»·"],
    ["Aucun produit. Ajoutez les lignes du PO : code article, dÃ©signation, quantitÃ© et prix.", "No products yet. Add the PO lines: item code, description, quantity and price.", "æš‚æ— äº§å“ã€‚è¯·æ·»åŠ  PO æ˜Žç»†ï¼šç‰©æ–™ç¼–ç ã€å“åã€æ•°é‡å’Œä»·æ ¼ã€‚"],
    ["pce", "pcs", "ä»¶"], ["carton", "carton", "çº¸ç®±"], ["sac", "bag", "è¢‹"], ["palette", "pallet", "æ‰˜ç›˜"], ["lot", "lot", "æ‰¹"],
    ["Valeur Â·", "Value Â·", "é‡‘é¢ Â·"], ["Total FOB", "Total FOB", "FOB æ€»é¢"], ["Fret (freight)", "Freight", "è¿è´¹"], ["Assurance", "Insurance", "ä¿é™©è´¹"],
    ["Vide = total des produits", "Empty = products total", "ç•™ç©º = äº§å“åˆè®¡"], ["Montant FOB", "FOB amount", "FOB é‡‘é¢"], ["Total CIF", "Total CIF", "CIF æ€»é¢"],
    ["Transport & dÃ©douanement", "Transport & customs clearance", "è¿è¾“ä¸Žæ¸…å…³"], ["Port de chargement", "Port of loading", "è£…è´§æ¸¯"],
    ["Anvers, Shanghaiâ€¦", "Antwerp, Shanghaiâ€¦", "å®‰ç‰¹å«æ™®ã€ä¸Šæµ·â€¦"], ["Navire / voyage", "Vessel / voyage", "èˆ¹å/èˆªæ¬¡"], ["NÂ° Bill of Lading", "Bill of Lading no.", "æå•å·"],
    ["ETA Douala", "ETA Douala", "é¢„è®¡åˆ°è¾¾æœé˜¿æ‹‰"], ["Transitaire", "Freight forwarder", "è´§ä»£"], ["NÂ° dossier transitaire", "Forwarder file no.", "è´§ä»£æ¡£æ¡ˆå·"],
    ["RÃ©f. chez le transitaire", "Forwarder reference", "è´§ä»£å‚è€ƒå·"], ["NÂ° DI", "DI no.", "DI ç¼–å·"], ["DÃ©claration d'importation", "Import declaration", "è¿›å£ç”³æŠ¥"],
    ["AÃ©roport de dÃ©part", "Departure airport", "å§‹å‘æœºåœº"], ["Compagnie / nÂ° de vol", "Airline / flight no.", "èˆªç©ºå…¬å¸/èˆªç­å·"], ["NÂ° LTA (AWB)", "AWB no.", "ç©ºè¿å•å· (AWB)"],
    ["NÂ° BL / HBL", "B/L / HBL no.", "æå•/åˆ†æå•å·"], ["ETA aÃ©roport", "ETA airport", "é¢„è®¡åˆ°è¾¾æœºåœº"], ["Paris CDG, DubaÃ¯â€¦", "Paris CDG, Dubaiâ€¦", "å·´é»Žæˆ´é«˜ä¹ã€è¿ªæ‹œâ€¦"],
    ["Colis (groupage)", "Packages (groupage)", "ä»¶æ•°ï¼ˆæ‹¼ç®±ï¼‰"], ["Colis (fret aÃ©rien)", "Packages (air freight)", "ä»¶æ•°ï¼ˆç©ºè¿ï¼‰"], ["Nombre de colis", "Number of packages", "ä»¶æ•°"],
    ["Poids brut (kg)", "Gross weight (kg)", "æ¯›é‡ (kg)"], ["Volume (mÂ³)", "Volume (mÂ³)", "ä½“ç§¯ (mÂ³)"], ["Poids taxable (kg)", "Chargeable weight (kg)", "è®¡è´¹é‡é‡ (kg)"],
    ["Conteneurs", "Containers", "é›†è£…ç®±"], ["NumÃ©ro de conteneur", "Container number", "é›†è£…ç®±å·"], ["Type", "Type", "ç®±åž‹"], ["Ajouter", "Add", "æ·»åŠ "],
    ["Coller une liste de numÃ©ros", "Paste a list of numbers", "ç²˜è´´ç®±å·åˆ—è¡¨"], ["Un numÃ©ro par ligne, ou sÃ©parÃ©s par des virgules", "One number per line, or comma-separated", "æ¯è¡Œä¸€ä¸ªç®±å·ï¼Œæˆ–ç”¨é€—å·åˆ†éš”"],
    ["Ajouter la liste", "Add list", "æ·»åŠ åˆ—è¡¨"], ["âœ“ = chiffre de contrÃ´le ISO 6346 valide", "âœ“ = valid ISO 6346 check digit", "âœ“ = ISO 6346 æ ¡éªŒä½æœ‰æ•ˆ"],
    ["Total", "Total", "åˆè®¡"], ["TOTAL", "TOTAL", "åˆè®¡"], ["Â· EVP", "Â· TEU", "Â· TEU"], ["Aucun conteneur ajoutÃ©.", "No containers added.", "å°šæœªæ·»åŠ é›†è£…ç®±ã€‚"],
    ["Chiffre de contrÃ´le valide", "Valid check digit", "æ ¡éªŒä½æœ‰æ•ˆ"], ["Chiffre de contrÃ´le Ã  vÃ©rifier", "Check digit to verify", "æ ¡éªŒä½éœ€æ ¸å®ž"],
    ["Documents du dossier", "Shipment documents", "æ¡£æ¡ˆå•æ®"], ["PDF ou scan (image), 20 Mo max par fichier", "PDF or scan (image), 20 MB max per file", "PDF æˆ–æ‰«æä»¶ï¼ˆå›¾ç‰‡ï¼‰ï¼Œæ¯ä¸ªæ–‡ä»¶æœ€å¤§ 20 MB"],
    ["/ 11 joints", "/ 11 attached", "/ 11 å·²é™„"], ["Notes", "Notes", "å¤‡æ³¨"], ["Remarques, documents manquantsâ€¦", "Remarks, missing documentsâ€¦", "å¤‡æ³¨ã€ç¼ºå¤±å•æ®â€¦"],
    ["Supprimer le dossier", "Delete shipment", "åˆ é™¤æ¡£æ¡ˆ"], ["Supprimer dÃ©finitivement ce dossier et ses documents ?", "Permanently delete this shipment and its documents?", "æ°¸ä¹…åˆ é™¤æ­¤æ¡£æ¡ˆåŠå…¶å•æ®ï¼Ÿ"],
    ["Oui, supprimer", "Yes, delete", "æ˜¯ï¼Œåˆ é™¤"], ["Annuler", "Cancel", "å–æ¶ˆ"], ["Enregistrer", "Save", "ä¿å­˜"],
    // statuts, paiements, modes, documents
    ["CommandÃ©", "Ordered", "å·²ä¸‹å•"], ["En mer", "At sea", "æµ·è¿é€”ä¸­"], ["ArrivÃ© Douala", "Arrived Douala", "å·²åˆ°æœé˜¿æ‹‰"], ["En dÃ©douanement", "In customs clearance", "æ¸…å…³ä¸­"], ["LivrÃ©", "Delivered", "å·²äº¤ä»˜"],
    ["Non payÃ©", "Unpaid", "æœªä»˜æ¬¾"], ["Acompte versÃ©", "Deposit paid", "å·²ä»˜å®šé‡‘"], ["SoldÃ©", "Paid in full", "å·²ç»“æ¸…"],
    ["Maritime FCL (20' / 40')", "Sea FCL (20' / 40')", "æµ·è¿æ•´ç®± (20' / 40')"], ["Maritime LCL (groupage)", "Sea LCL (groupage)", "æµ·è¿æ‹¼ç®±"], ["AÃ©rien", "Air", "ç©ºè¿"],
    ["Maritime", "Sea", "æµ·è¿"], ["Maritime FCL", "Sea FCL", "æµ·è¿æ•´ç®±"], ["LCL", "LCL", "æ‹¼ç®±"],
    ["Bon de commande (PO)", "Purchase order (PO)", "é‡‡è´­è®¢å• (PO)"], ["Facture proforma", "Proforma invoice", "å½¢å¼å‘ç¥¨"], ["DÃ©claration d'importation (DI)", "Import declaration (DI)", "è¿›å£ç”³æŠ¥ (DI)"],
    ["SWIFT (preuve de paiement)", "SWIFT (proof of payment)", "SWIFTï¼ˆä»˜æ¬¾å‡­è¯ï¼‰"], ["Facture finale", "Final invoice", "æœ€ç»ˆå‘ç¥¨"], ["Packing list", "Packing list", "è£…ç®±å•"],
    ["Bill of Lading", "Bill of Lading", "æå•"], ["Certificat ANOR", "ANOR certificate", "ANOR è¯ä¹¦"], ["Quittance", "Customs receipt", "ç¼´æ¬¾æ”¶æ®"],
    ["Non joint", "Not attached", "æœªé™„"], ["Ouvrir", "Open", "æ‰“å¼€"], ["Joindre", "Attach", "é™„åŠ "], ["Remplacer", "Replace", "æ›¿æ¢"], ["Envoi en coursâ€¦", "Uploadingâ€¦", "ä¸Šä¼ ä¸­â€¦"],
    // lignes du tableau
    ["Modifier", "Edit", "ç¼–è¾‘"], ["Archiver", "Archive", "å½’æ¡£"], ["Supprimer", "Delete", "åˆ é™¤"], ["Voir", "View", "æŸ¥çœ‹"],
    ["Supprimer le dossier et ses documents ?", "Delete the shipment and its documents?", "åˆ é™¤è¯¥æ¡£æ¡ˆåŠå…¶å•æ®ï¼Ÿ"], ["exemple", "example", "ç¤ºä¾‹"], ["Aujourd'hui", "Today", "ä»Šå¤©"], ["colis", "packages", "ä»¶"],
    ["Aucun dossier pour l'instant", "No shipments yet", "æš‚æ— æ¡£æ¡ˆ"], ["CrÃ©ez votre premier dossier d'import pour suivre ses conteneurs.", "Create your first import shipment to track its containers.", "åˆ›å»ºç¬¬ä¸€ä¸ªè¿›å£æ¡£æ¡ˆä»¥è·Ÿè¸ªé›†è£…ç®±ã€‚"],
    ["Modifiez la recherche ou le filtre de statut.", "Change the search or the status filter.", "è¯·ä¿®æ”¹æœç´¢æˆ–çŠ¶æ€ç­›é€‰ã€‚"],
    ["Aucun dossier archivÃ© ne correspond", "No archived shipment matches", "æ²¡æœ‰åŒ¹é…çš„å½’æ¡£æ¡£æ¡ˆ"], ["Aucun dossier ne correspond", "No shipment matches", "æ²¡æœ‰åŒ¹é…çš„æ¡£æ¡ˆ"],
    // rapport
    ["PÃ©rimÃ¨tre", "Scope", "èŒƒå›´"], ["Tous les dossiers", "All shipments", "å…¨éƒ¨æ¡£æ¡ˆ"], ["Transport", "Transport", "è¿è¾“æ–¹å¼"], ["Paiement", "Payment", "ä»˜æ¬¾"],
    ["PÃ©riodes selon", "Periods based on", "æœŸé—´ä¾æ®"], ["Date d'arrivÃ©e (ETA)", "Arrival date (ETA)", "åˆ°è¾¾æ—¥æœŸ (ETA)"], ["Graphique", "Chart", "å›¾è¡¨"],
    ["Par mois", "By month", "æŒ‰æœˆ"], ["Par semaine", "By week", "æŒ‰å‘¨"], ["ETA du", "ETA from", "ETA èµ·"], ["ETA au", "ETA to", "ETA æ­¢"], ["PO du", "PO from", "PO èµ·"], ["PO au", "PO to", "PO æ­¢"],
    ["du", "from", "ä»Ž"], ["au", "to", "è‡³"],
    ["Dossiers", "Shipments", "æ¡£æ¡ˆ"], ["EVP", "TEU", "TEU"], ["Devise", "Currency", "å¸ç§"], ["Fret", "Freight", "è¿è´¹"], ["Par transport", "By transport", "æŒ‰è¿è¾“æ–¹å¼"],
    ["Volume", "Volume", "ä½“ç§¯"], ["Par statut", "By status", "æŒ‰çŠ¶æ€"], ["Ctn", "Ctn", "ç®±æ•°"], ["Par type", "By type", "æŒ‰ç®±åž‹"], ["Documents manquants", "Missing documents", "ç¼ºå¤±å•æ®"],
    ["Le rapport Excel contient 12 onglets : SynthÃ¨se (avec logo), Rapport annuel PO, DÃ©tail des PO, Par mois, Par semaine, Graphiques, Suivi DI, Dossiers, Produits, Conteneurs, Groupage & aÃ©rien, Documents. Les tableaux ont des totaux, des filtres et des en-tÃªtes figÃ©s. La date et l'heure d'extraction figurent dans le nom du fichier et en tÃªte de chaque onglet.",
      "The Excel report has 12 tabs: Summary (with logo), Annual PO report, PO detail, By month, By week, Charts, DI tracking, Shipments, Products, Containers, LCL & air, Documents. Tables have totals, filters and frozen headers. The extraction date and time appear in the file name and at the top of every tab.",
      "Excel æŠ¥è¡¨åŒ…å« 12 ä¸ªå·¥ä½œè¡¨ï¼šæ±‡æ€»ï¼ˆå«æ ‡å¿—ï¼‰ã€PO å¹´åº¦æŠ¥è¡¨ã€PO æ˜Žç»†ã€æŒ‰æœˆã€æŒ‰å‘¨ã€å›¾è¡¨ã€DI è·Ÿè¸ªã€æ¡£æ¡ˆã€äº§å“ã€é›†è£…ç®±ã€æ‹¼ç®±ä¸Žç©ºè¿ã€å•æ®ã€‚è¡¨æ ¼å¸¦æœ‰åˆè®¡ã€ç­›é€‰å’Œå†»ç»“è¡¨å¤´ã€‚å¯¼å‡ºæ—¥æœŸå’Œæ—¶é—´æ˜¾ç¤ºåœ¨æ–‡ä»¶ååŠæ¯ä¸ªå·¥ä½œè¡¨é¡¶éƒ¨ã€‚"],
    ["Copier le rÃ©sumÃ©", "Copy summary", "å¤åˆ¶æ‘˜è¦"], ["Exporter le rapport Excel", "Export Excel report", "å¯¼å‡º Excel æŠ¥è¡¨"], ["PrÃ©parationâ€¦", "Preparingâ€¦", "æ­£åœ¨ç”Ÿæˆâ€¦"],
    ["Aucun dossier dans ce pÃ©rimÃ¨tre", "No shipments in this scope", "æ­¤èŒƒå›´å†…æ— æ¡£æ¡ˆ"], ["Aucun conteneur", "No containers", "æ— é›†è£…ç®±"], ["Aucun dossier", "No shipments", "æ— æ¡£æ¡ˆ"],
    ["Tous les documents sont joints", "All documents attached", "æ‰€æœ‰å•æ®å‡å·²é™„ä¸Š"], ["Aucune valeur saisie", "No values entered", "æœªå½•å…¥é‡‘é¢"],
    // bandeaux et messages
    ["Mode local : les dossiers sont enregistrÃ©s uniquement dans ce navigateur.", "Local mode: shipments are saved in this browser only.", "æœ¬åœ°æ¨¡å¼ï¼šæ¡£æ¡ˆä»…ä¿å­˜åœ¨æ­¤æµè§ˆå™¨ä¸­ã€‚"],
    ["Version autonome : vos dossiers et PDF sont enregistrÃ©s dans ce navigateur, sur cet ordinateur. Cliquez rÃ©guliÃ¨rement sur Â« Sauvegarder Â» pour garder une copie.", "Standalone version: your shipments and PDFs are saved in this browser, on this computer. Click â€œBack upâ€ regularly to keep a copy.", "ç‹¬ç«‹ç‰ˆæœ¬ï¼šæ‚¨çš„æ¡£æ¡ˆå’Œ PDF ä¿å­˜åœ¨æ­¤ç”µè„‘çš„æµè§ˆå™¨ä¸­ã€‚è¯·å®šæœŸç‚¹å‡»â€œå¤‡ä»½â€ä¿ç•™å‰¯æœ¬ã€‚"],
    ["Lecture seule : vous pouvez consulter et exporter, sans modifier.", "Read only: you can view and export, but not edit.", "åªè¯»ï¼šæ‚¨å¯ä»¥æŸ¥çœ‹å’Œå¯¼å‡ºï¼Œä½†ä¸èƒ½ä¿®æ”¹ã€‚"],
    ["Connexion lente : les dossiers ne sont pas encore chargÃ©s.", "Slow connection: shipments are not loaded yet.", "ç½‘ç»œè¾ƒæ…¢ï¼šæ¡£æ¡ˆå°šæœªåŠ è½½ã€‚"],
    ["Les dossiers ne peuvent pas Ãªtre chargÃ©s pour le moment.", "Shipments cannot be loaded right now.", "æš‚æ—¶æ— æ³•åŠ è½½æ¡£æ¡ˆã€‚"],
    ["L'ajout de fichiers n'est pas disponible dans cette vue (mode local ou accÃ¨s sans droit d'Ã©dition).", "Adding files is not available in this view (local mode or no edit access).", "æ­¤è§†å›¾æ— æ³•æ·»åŠ æ–‡ä»¶ï¼ˆæœ¬åœ°æ¨¡å¼æˆ–æ— ç¼–è¾‘æƒé™ï¼‰ã€‚"],
    ["Lecture seule : vous pouvez ouvrir les documents joints.", "Read only: you can open the attached documents.", "åªè¯»ï¼šæ‚¨å¯ä»¥æ‰“å¼€å·²é™„å•æ®ã€‚"],
    ["Renseignez le nÂ° de dossier et le fournisseur.", "Enter the shipment number and the supplier.", "è¯·å¡«å†™æ¡£æ¡ˆç¼–å·å’Œä¾›åº”å•†ã€‚"],
    ["Attendez la fin de l'envoi du document.", "Wait for the document upload to finish.", "è¯·ç­‰å¾…å•æ®ä¸Šä¼ å®Œæˆã€‚"],
    ["Enregistrement impossible. VÃ©rifiez votre connexion puis rÃ©essayez.", "Could not save. Check your connection and try again.", "ä¿å­˜å¤±è´¥ã€‚è¯·æ£€æŸ¥ç½‘ç»œåŽé‡è¯•ã€‚"],
    ["Espace plein : supprimez d'anciens dossiers archivÃ©s.", "Storage full: delete old archived shipments.", "å­˜å‚¨å·²æ»¡ï¼šè¯·åˆ é™¤æ—§çš„å½’æ¡£æ¡£æ¡ˆã€‚"],
    ["Dossier crÃ©Ã©", "Shipment created", "æ¡£æ¡ˆå·²åˆ›å»º"], ["Dossier mis Ã  jour", "Shipment updated", "æ¡£æ¡ˆå·²æ›´æ–°"], ["Action impossible, rÃ©essayez.", "Action failed, try again.", "æ“ä½œå¤±è´¥ï¼Œè¯·é‡è¯•ã€‚"],
    ["Suppression impossible, rÃ©essayez.", "Could not delete, try again.", "åˆ é™¤å¤±è´¥ï¼Œè¯·é‡è¯•ã€‚"], ["Fichier trop lourd : 20 Mo maximum", "File too large: 20 MB maximum", "æ–‡ä»¶è¿‡å¤§ï¼šæœ€å¤§ 20 MB"],
    ["Choisissez un PDF ou une image scannÃ©e", "Choose a PDF or a scanned image", "è¯·é€‰æ‹© PDF æˆ–æ‰«æå›¾ç‰‡"], ["Espace de stockage plein", "Storage full", "å­˜å‚¨ç©ºé—´å·²æ»¡"],
    ["Type de fichier refusÃ©", "File type not accepted", "ä¸æ”¯æŒçš„æ–‡ä»¶ç±»åž‹"], ["Envoi impossible, rÃ©essayez", "Upload failed, try again", "ä¸Šä¼ å¤±è´¥ï¼Œè¯·é‡è¯•"],
    ["Fichier introuvable dans ce navigateur", "File not found in this browser", "åœ¨æ­¤æµè§ˆå™¨ä¸­æ‰¾ä¸åˆ°æ–‡ä»¶"], ["Ouverture impossible", "Could not open", "æ— æ³•æ‰“å¼€"],
    ["Sauvegarde impossible", "Backup failed", "å¤‡ä»½å¤±è´¥"], ["Ce fichier n'est pas une sauvegarde Suivi Import", "This file is not an Import Tracking backup", "æ­¤æ–‡ä»¶ä¸æ˜¯è¿›å£è·Ÿè¸ªå¤‡ä»½"],
    ["Fichier de sauvegarde illisible", "Backup file unreadable", "å¤‡ä»½æ–‡ä»¶æ— æ³•è¯»å–"], ["Copie refusÃ©e par le navigateur", "Copy blocked by the browser", "æµè§ˆå™¨æ‹’ç»å¤åˆ¶"], ["RÃ©sumÃ© copiÃ©", "Summary copied", "æ‘˜è¦å·²å¤åˆ¶"],
    ["Le module Excel n'a pas pu se charger. VÃ©rifiez la connexion internet puis rechargez la page.", "The Excel module could not load. Check your internet connection and reload the page.", "Excel æ¨¡å—æ— æ³•åŠ è½½ã€‚è¯·æ£€æŸ¥ç½‘ç»œå¹¶åˆ·æ–°é¡µé¢ã€‚"],
    ["CrÃ©ation du rapport impossible", "Could not create the report", "æ— æ³•ç”ŸæˆæŠ¥è¡¨"], ["Le tÃ©lÃ©chargement n'est pas disponible dans cette vue.", "Download is not available in this view.", "æ­¤è§†å›¾ä¸æ”¯æŒä¸‹è½½ã€‚"],
    ["TÃ©lÃ©chargement annulÃ©", "Download cancelled", "ä¸‹è½½å·²å–æ¶ˆ"], ["TÃ©lÃ©chargement impossible, rÃ©essayez", "Download failed, try again", "ä¸‹è½½å¤±è´¥ï¼Œè¯·é‡è¯•"],
    // Excel et graphiques
    ["Extrait le", "Extracted on", "å¯¼å‡ºæ—¶é—´"], ["Ã ", "at", ""], ["Rapport de suivi des importations", "Import tracking report", "è¿›å£è·Ÿè¸ªæŠ¥è¡¨"],
    ["Indicateurs clÃ©s", "Key figures", "å…³é”®æŒ‡æ ‡"], ["Indicateur", "Indicator", "æŒ‡æ ‡"], ["Valeur", "Value", "æ•°å€¼"], ["Valeurs par devise", "Values by currency", "å„å¸ç§é‡‘é¢"],
    ["dont maritime FCL", "of which sea FCL", "å…¶ä¸­æµ·è¿æ•´ç®±"], ["dont LCL (groupage)", "of which LCL (groupage)", "å…¶ä¸­æ‹¼ç®±"], ["dont aÃ©rien", "of which air", "å…¶ä¸­ç©ºè¿"],
    ["Conteneurs 20'", "20' containers", "20' é›†è£…ç®±"], ["Conteneurs 40'", "40' containers", "40' é›†è£…ç®±"], ["Total EVP", "Total TEU", "TEU åˆè®¡"],
    ["Volume LCL (mÂ³)", "LCL volume (mÂ³)", "æ‹¼ç®±ä½“ç§¯ (mÂ³)"], ["Poids aÃ©rien (kg)", "Air weight (kg)", "ç©ºè¿é‡é‡ (kg)"], ["Dossiers livrÃ©s", "Delivered shipments", "å·²äº¤ä»˜æ¡£æ¡ˆ"],
    ["Document", "Document", "å•æ®"], ["Montant", "Amount", "é‡‘é¢"], ["Mois", "Month", "æœˆä»½"], ["Semaine", "Week", "å‘¨"], ["Du", "From", "èµ·"], ["Au", "To", "æ­¢"],
    ["LivrÃ©s", "Delivered", "å·²äº¤ä»˜"], ["Ctn 20'", "20' ctn", "20' ç®±"], ["Ctn 40'", "40' ctn", "40' ç®±"], ["Ctn / colis", "Ctn / packages", "ç®±æ•°/ä»¶æ•°"],
    ["NÂ° dossier", "Shipment no.", "æ¡£æ¡ˆç¼–å·"], ["Fournisseur", "Supplier", "ä¾›åº”å•†"], ["NÂ° PR", "PR no.", "PR ç¼–å·"], ["NÂ° PO", "PO no.", "PO ç¼–å·"], ["Date PO", "PO date", "PO æ—¥æœŸ"],
    ["Nb produits", "No. of products", "äº§å“æ•°"], ["Valeur produits", "Products value", "äº§å“é‡‘é¢"], ["Marchandise", "Goods", "è´§ç‰©"], ["Origine", "Origin", "èµ·è¿åœ°"],
    ["Navire / Vol", "Vessel / Flight", "èˆ¹å/èˆªç­"], ["NÂ° BL / LTA", "B/L / AWB no.", "æå•/ç©ºè¿å•å·"], ["Nb 20'", "No. 20'", "20' æ•°é‡"], ["Nb 40'", "No. 40'", "40' æ•°é‡"],
    ["Colis", "Packages", "ä»¶æ•°"], ["Poids (kg)", "Weight (kg)", "é‡é‡ (kg)"], ["NÂ° conteneurs", "Container nos.", "é›†è£…ç®±å·"], ["NÂ° conteneur", "Container no.", "é›†è£…ç®±å·"],
    ["Docs joints", "Docs attached", "å·²é™„å•æ®"], ["ArchivÃ©", "Archived", "å·²å½’æ¡£"], ["ArchivÃ© le", "Archived on", "å½’æ¡£æ—¥æœŸ"], ["Navire", "Vessel", "èˆ¹å"],
    ["ContrÃ´le ISO 6346", "ISO 6346 check", "ISO 6346 æ ¡éªŒ"], ["Ã€ vÃ©rifier", "To check", "å¾…æ ¸å®ž"], ["Oui", "Yes", "æ˜¯"], ["Non", "No", "å¦"], ["Sans date", "No date", "æ— æ—¥æœŸ"],
    ["DOSSIERS D'IMPORT", "IMPORT SHIPMENTS", "è¿›å£æ¡£æ¡ˆ"], ["PRODUITS", "PRODUCTS", "äº§å“"], ["CONTENEURS (MARITIME FCL)", "CONTAINERS (SEA FCL)", "é›†è£…ç®±ï¼ˆæµ·è¿æ•´ç®±ï¼‰"],
    ["GROUPAGE LCL & FRET AÃ‰RIEN", "LCL GROUPAGE & AIR FREIGHT", "æ‹¼ç®±ä¸Žç©ºè¿"], ["SUIVI DES DOCUMENTS", "DOCUMENT TRACKING", "å•æ®è·Ÿè¸ª"], ["GRAPHIQUES", "CHARTS", "å›¾è¡¨"],
    ["Graphiques", "Charts", "å›¾è¡¨"], ["Groupage & aÃ©rien", "LCL & air", "æ‹¼ç®±ä¸Žç©ºè¿"],
    ["Dossiers par statut", "Shipments by status", "å„çŠ¶æ€æ¡£æ¡ˆæ•°"], ["Aucune donnÃ©e sur la pÃ©riode", "No data for this period", "è¯¥æœŸé—´æ— æ•°æ®"],
    ["RAPPORT SUIVI IMPORT", "IMPORT TRACKING REPORT", "è¿›å£è·Ÿè¸ªæŠ¥è¡¨"]
  ];
  const MOIS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MOIS_FR = ["Janv.","FÃ©vr.","Mars","Avr.","Mai","Juin","Juil.","AoÃ»t","Sept.","Oct.","Nov.","DÃ©c."];
  const INCOTERMS = [
    ["EXW", "Ã€ l'usine", "Ex Works", "å·¥åŽ‚äº¤è´§", 0], ["FCA", "Franco transporteur", "Free Carrier", "è´§äº¤æ‰¿è¿äºº", 0],
    ["CPT", "Port payÃ© jusqu'Ã ", "Carriage Paid To", "è¿è´¹ä»˜è‡³", 0], ["CIP", "Port payÃ©, assurance comprise, jusqu'Ã ", "Carriage and Insurance Paid To", "è¿è´¹å’Œä¿é™©è´¹ä»˜è‡³", 0],
    ["DAP", "Rendu au lieu de destination", "Delivered at Place", "ç›®çš„åœ°äº¤è´§", 0], ["DPU", "Rendu au lieu de destination dÃ©chargÃ©", "Delivered at Place Unloaded", "å¸è´§åœ°äº¤è´§", 0],
    ["DDP", "Rendu droits acquittÃ©s", "Delivered Duty Paid", "å®Œç¨ŽåŽäº¤è´§", 0],
    ["FAS", "Franco le long du navire", "Free Alongside Ship", "èˆ¹è¾¹äº¤è´§", 1], ["FOB", "Franco Ã  bord", "Free On Board", "èˆ¹ä¸Šäº¤è´§", 1],
    ["CFR", "CoÃ»t et fret", "Cost and Freight", "æˆæœ¬åŠ è¿è´¹", 1], ["CIF", "CoÃ»t, assurance et fret", "Cost, Insurance and Freight", "æˆæœ¬ã€ä¿é™©è´¹åŠ è¿è´¹", 1]
  ];
  INCOTERMS.forEach(([c, fr, en, zh]) => { D.push([`${c} â€” ${fr}`, `${c} â€” ${en}`, `${c} â€” ${zh}`]); D.push([fr, en, zh]); });
  D.push(
    ["Incoterm", "Incoterm", "è´¸æ˜“æœ¯è¯­"], ["Lieu Incoterm", "Incoterm place", "è´¸æ˜“æœ¯è¯­åœ°ç‚¹"], ["Douala, Anvers, Shanghaiâ€¦", "Douala, Antwerp, Shanghaiâ€¦", "æœé˜¿æ‹‰ã€å®‰ç‰¹å«æ™®ã€ä¸Šæµ·â€¦"],
    ["Choisirâ€¦", "Chooseâ€¦", "è¯·é€‰æ‹©â€¦"], ["IncotermsÂ® 2020", "IncotermsÂ® 2020", "IncotermsÂ® 2020"],
    ["Tous modes de transport", "Any transport mode", "é€‚ç”¨äºŽæ‰€æœ‰è¿è¾“æ–¹å¼"], ["Maritime et fluvial uniquement", "Sea and inland waterway only", "ä»…é€‚ç”¨äºŽæµ·è¿å’Œå†…æ²³è¿è¾“"],
    ["Attention : cet Incoterm est rÃ©servÃ© au transport maritime.", "Warning: this Incoterm is for sea transport only.", "æ³¨æ„ï¼šè¯¥è´¸æ˜“æœ¯è¯­ä»…é€‚ç”¨äºŽæµ·è¿ã€‚"],
    ["Fret payÃ© par", "Freight paid by", "è¿è´¹æ‰¿æ‹…æ–¹"], ["Assurance payÃ©e par", "Insurance paid by", "ä¿é™©æ‰¿æ‹…æ–¹"], ["DÃ©douanement import", "Import clearance", "è¿›å£æ¸…å…³"],
    ["Vendeur", "Seller", "å–æ–¹"], ["Acheteur", "Buyer", "ä¹°æ–¹"], ["Par Incoterm", "By Incoterm", "æŒ‰è´¸æ˜“æœ¯è¯­"], ["Non renseignÃ©", "Not set", "æœªå¡«å†™"],
    ["AperÃ§u", "Overview", "æ¦‚è§ˆ"], ["AperÃ§u du dossier", "Shipment overview", "æ¡£æ¡ˆæ¦‚è§ˆ"], ["Imprimer", "Print", "æ‰“å°"],
    ["Valeur du dossier", "Shipment value", "æ¡£æ¡ˆé‡‘é¢"], ["CrÃ©Ã© le", "Created on", "åˆ›å»ºäºŽ"], ["Mis Ã  jour le", "Updated on", "æ›´æ–°äºŽ"],
    ["Aucune note", "No notes", "æ— å¤‡æ³¨"], ["Aucun produit", "No products", "æ— äº§å“"], ["Avancement", "Progress", "è¿›åº¦"], ["Chargement", "Loading", "è£…è¿"],
    ["Montant total", "Total amount", "æ€»é‡‘é¢"], ["Conteneurs 20' / 40'", "Containers 20' / 40'", "é›†è£…ç®± 20' / 40'"], ["Document joint", "Attached", "å·²é™„"], ["Manquant", "Missing", "ç¼ºå¤±"],
    ["Lot", "Cargo", "è´§ç‰©"], ["Date DI", "DI date", "DI æ—¥æœŸ"], ["Date d'expiration DI", "DI expiry date", "DI åˆ°æœŸæ—¥"], ["DI Ã  renouveler", "DI to renew", "å¾…ç»­æœŸ DI"],
    ["Ã‰tat DI", "DI status", "DI çŠ¶æ€"], ["Jours restants", "Days left", "å‰©ä½™å¤©æ•°"], ["ExpirÃ©e", "Expired", "å·²è¿‡æœŸ"], ["Valide", "Valid", "æœ‰æ•ˆ"], ["Sans DI", "No DI", "æ—  DI"],
    ["Suivi des DI", "DI tracking", "DI è·Ÿè¸ª"], ["ClÃ´turÃ©e (livrÃ©)", "Closed (delivered)", "å·²ç»“æ¡ˆï¼ˆå·²äº¤ä»˜ï¼‰"], ["Suivi DI", "DI tracking", "DI è·Ÿè¸ª"], ["SUIVI DES DÃ‰CLARATIONS D'IMPORTATION (DI)", "IMPORT DECLARATION (DI) TRACKING", "è¿›å£ç”³æŠ¥ (DI) è·Ÿè¸ª"],
    ["DI expire aujourd'hui", "DI expires today", "DI ä»Šæ—¥åˆ°æœŸ"], ["La date d'expiration doit Ãªtre aprÃ¨s la date de la DI.", "The expiry date must be after the DI date.", "åˆ°æœŸæ—¥å¿…é¡»æ™šäºŽ DI æ—¥æœŸã€‚"], ["Connectez-vous avec le compte crÃ©Ã© par votre administrateur.", "Sign in with the account your administrator created.", "è¯·ä½¿ç”¨ç®¡ç†å‘˜ä¸ºæ‚¨åˆ›å»ºçš„è´¦æˆ·ç™»å½•ã€‚"],
    ["E-mail", "Email", "ç”µå­é‚®ç®±"], ["Mot de passe", "Password", "å¯†ç "], ["Se connecter", "Sign in", "ç™»å½•"], ["Connexionâ€¦", "Signing inâ€¦", "æ­£åœ¨ç™»å½•â€¦"],
    ["E-mail ou mot de passe incorrect.", "Incorrect email or password.", "é‚®ç®±æˆ–å¯†ç é”™è¯¯ã€‚"], ["DÃ©connexion", "Sign out", "é€€å‡ºç™»å½•"],
    ["Connexion impossible. VÃ©rifiez votre connexion internet.", "Cannot connect. Check your internet connection.", "æ— æ³•è¿žæŽ¥ï¼Œè¯·æ£€æŸ¥ç½‘ç»œã€‚"],
    ["Envoyer en ligne", "Upload online", "ä¸Šä¼ åˆ°çº¿ä¸Š"], ["Renseignez l'e-mail et le mot de passe.", "Enter the email and password.", "è¯·å¡«å†™é‚®ç®±å’Œå¯†ç ã€‚"], ["Montant facture", "Invoice amount", "å‘ç¥¨é‡‘é¢"],
    ["Frais jusqu'Ã  bord (Ã  ajouter)", "Costs up to on board (to add)", "è£…èˆ¹å‰è´¹ç”¨ï¼ˆéœ€åŠ ä¸Šï¼‰"], ["Fret (Ã  ajouter)", "Freight (to add)", "è¿è´¹ï¼ˆéœ€åŠ ä¸Šï¼‰"],
    ["Fret (inclus dans la facture)", "Freight (included in invoice)", "è¿è´¹ï¼ˆå·²å«åœ¨å‘ç¥¨ä¸­ï¼‰"], ["Assurance (Ã  ajouter)", "Insurance (to add)", "ä¿é™©è´¹ï¼ˆéœ€åŠ ä¸Šï¼‰"],
    ["Assurance (incluse dans la facture)", "Insurance (included in invoice)", "ä¿é™©è´¹ï¼ˆå·²å«åœ¨å‘ç¥¨ä¸­ï¼‰"], ["Frais aprÃ¨s arrivÃ©e (inclus, Ã  dÃ©duire)", "Post-arrival costs (included, to deduct)", "åˆ°æ¸¯åŽè´¹ç”¨ï¼ˆå·²å«ï¼Œéœ€æ‰£é™¤ï¼‰"],
    ["VÃ©rifiez les montants : le FOB calculÃ© est nÃ©gatif.", "Check the amounts: the calculated FOB is negative.", "è¯·æ ¸å¯¹é‡‘é¢ï¼šè®¡ç®—å‡ºçš„ FOB ä¸ºè´Ÿæ•°ã€‚"],
    ["Choisissez l'Incoterm du PO pour adapter le calcul. Sans Incoterm, le montant saisi est traitÃ© comme un FOB.", "Choose the PO Incoterm to adapt the calculation. Without an Incoterm, the amount entered is treated as FOB.", "è¯·é€‰æ‹© PO çš„è´¸æ˜“æœ¯è¯­ä»¥è°ƒæ•´è®¡ç®—ã€‚æœªé€‰æ‹©æ—¶ï¼Œå½•å…¥é‡‘é¢æŒ‰ FOB å¤„ç†ã€‚"],
    ["La facture n'inclut ni le chargement Ã  bord, ni le fret, ni l'assurance : ajoutez-les pour obtenir le CIF.", "The invoice includes neither loading on board, freight nor insurance: add them to get the CIF.", "å‘ç¥¨ä¸å«è£…èˆ¹è´¹ã€è¿è´¹å’Œä¿é™©è´¹ï¼šè¯·åŠ ä¸Šä»¥å¾—å‡º CIFã€‚"],
    ["Marchandise livrÃ©e Ã  bord : ajoutez le fret et l'assurance pour obtenir le CIF.", "Goods delivered on board: add freight and insurance to get the CIF.", "è´§ç‰©å·²è£…èˆ¹äº¤ä»˜ï¼šåŠ ä¸Šè¿è´¹å’Œä¿é™©è´¹å³å¾— CIFã€‚"],
    ["Le fret est inclus dans la facture : indiquez son montant et ajoutez l'assurance.", "Freight is included in the invoice: enter its amount and add insurance.", "è¿è´¹å·²å«åœ¨å‘ç¥¨ä¸­ï¼šè¯·å¡«å†™è¿è´¹é‡‘é¢å¹¶åŠ ä¸Šä¿é™©è´¹ã€‚"],
    ["Fret et assurance inclus : le CIF est Ã©gal au montant de la facture. Indiquez-les pour calculer le FOB.", "Freight and insurance included: CIF equals the invoice amount. Enter them to calculate the FOB.", "è¿è´¹å’Œä¿é™©è´¹å·²å«ï¼šCIF ç­‰äºŽå‘ç¥¨é‡‘é¢ã€‚å¡«å†™äºŒè€…ä»¥è®¡ç®— FOBã€‚"],
    ["Livraison Ã  destination : dÃ©duisez les frais aprÃ¨s arrivÃ©e inclus dans la facture pour obtenir le CIF.", "Delivered at destination: deduct the post-arrival costs included in the invoice to get the CIF.", "ç›®çš„åœ°äº¤è´§ï¼šæ‰£é™¤å‘ç¥¨ä¸­æ‰€å«çš„åˆ°æ¸¯åŽè´¹ç”¨å³å¾— CIFã€‚"], ["Tous Incoterms", "All Incoterms", "å…¨éƒ¨è´¸æ˜“æœ¯è¯­"], ["Filtrer par Incoterm", "Filter by Incoterm", "æŒ‰è´¸æ˜“æœ¯è¯­ç­›é€‰"],
    ["+ Incoterm", "+ Incoterm", "+ è´¸æ˜“æœ¯è¯­"], ["Modifier l'Incoterm", "Change Incoterm", "ä¿®æ”¹è´¸æ˜“æœ¯è¯­"], ["Incoterm enregistrÃ©", "Incoterm saved", "è´¸æ˜“æœ¯è¯­å·²ä¿å­˜"],
    ["Lieu (ex. Anvers)", "Place (e.g. Antwerp)", "åœ°ç‚¹ï¼ˆå¦‚å®‰ç‰¹å«æ™®ï¼‰"], ["Ouvrir le PDF", "Open PDF", "æ‰“å¼€ PDF"],
    ["Rapport annuel des PO", "Annual PO report", "PO å¹´åº¦æŠ¥è¡¨"], ["RAPPORT ANNUEL DES PO", "ANNUAL PO REPORT", "PO å¹´åº¦æŠ¥è¡¨"], ["Rapport annuel PO", "Annual PO report", "PO å¹´åº¦æŠ¥è¡¨"],
    ["Exporter le rapport annuel PO", "Export annual PO report", "å¯¼å‡º PO å¹´åº¦æŠ¥è¡¨"], ["AnnÃ©e", "Year", "å¹´ä»½"],
    ["PO livrÃ©s", "Delivered POs", "å·²äº¤ä»˜ PO"], ["PO non livrÃ©s", "Undelivered POs", "æœªäº¤ä»˜ PO"], ["Total PO", "Total POs", "PO åˆè®¡"], ["% livrÃ©s", "% delivered", "äº¤ä»˜çŽ‡"],
    ["LivrÃ© ?", "Delivered?", "æ˜¯å¦äº¤ä»˜"], ["Montant PO", "PO amount", "PO é‡‘é¢"], ["DÃ©tail des PO", "PO detail", "PO æ˜Žç»†"], ["DÃ‰TAIL DES PO", "PO DETAIL", "PO æ˜Žç»†"],
    ["Montant livrÃ©", "Delivered amount", "å·²äº¤ä»˜é‡‘é¢"], ["Montant non livrÃ©", "Undelivered amount", "æœªäº¤ä»˜é‡‘é¢"],
    ["Tous les dossiers (en cours et archivÃ©s), regroupÃ©s par annÃ©e du PO. Un PO est Â« livrÃ© Â» quand son dossier a le statut LivrÃ©. Montant = valeur FOB du PO.",
      "All shipments (active and archived), grouped by PO year. A PO is â€œdeliveredâ€ when its shipment has the status Delivered. Amount = PO FOB value.",
      "å…¨éƒ¨æ¡£æ¡ˆï¼ˆè¿›è¡Œä¸­å’Œå·²å½’æ¡£ï¼‰ï¼ŒæŒ‰ PO å¹´ä»½åˆ†ç»„ã€‚æ¡£æ¡ˆçŠ¶æ€ä¸ºâ€œå·²äº¤ä»˜â€æ—¶ï¼ŒPO è®¡ä¸ºå·²äº¤ä»˜ã€‚é‡‘é¢ = PO çš„ FOB é‡‘é¢ã€‚"],
    ["Nombre de PO livrÃ©s / non livrÃ©s par annÃ©e", "Delivered / undelivered POs per year", "æ¯å¹´å·²äº¤ä»˜/æœªäº¤ä»˜ PO æ•°é‡"],
    ["LivrÃ©s", "Delivered", "å·²äº¤ä»˜"], ["Non livrÃ©s", "Not delivered", "æœªäº¤ä»˜"]
  );
  const DICT = new Map(D.map(r => [r[0], [r[1], r[2]]]));
  const REV = new Map(); D.forEach(r => { if (!DICT.has(r[1]) && r[1]) {REV.set(r[1], r[0]);} if (r[2]) {REV.set(r[2], r[0]);} });
  const T = (s) => LANG === "fr" ? s : (trCore(s) ?? s);
  const E = (en, zh) => LANG === "en" ? en : zh;
  const PATS = [
    [/^(\d\d\/\d\d\/\d{4}) Ã  (\d\d:\d\d)$/, m => E(`${m[1]} at ${m[2]}`, `${m[1]} ${m[2]}`)],
    [/^DI expirÃ©e depuis (\d+) j$/, m => E(`DI expired ${m[1]} d ago`, `DI å·²è¿‡æœŸ ${m[1]} å¤©`)],
    [/^DI expire dans (\d+) j$/, m => E(`DI expires in ${m[1]} d`, `DI ${m[1]} å¤©åŽåˆ°æœŸ`)],
    [/^exp\. (.+)$/, m => E(`exp. ${m[1]}`, `åˆ°æœŸ ${m[1]}`)],
    [/^Expire â‰¤ (\d+) j$/, m => E(`Expires â‰¤ ${m[1]} d`, `${m[1]} å¤©å†…åˆ°æœŸ`)],
    [/^(\d+) expirÃ©e\(s\) Â· (\d+) â‰¤ (\d+) j$/, m => E(`${m[1]} expired Â· ${m[2]} â‰¤ ${m[3]} d`, `å·²è¿‡æœŸ ${m[1]} Â· ${m[3]} å¤©å†… ${m[2]}`)],
    [/^Retard (\d+) j$/, m => E(`${m[1]} d late`, `å»¶è¯¯ ${m[1]} å¤©`)],
    [/^dans (\d+) j$/, m => E(`in ${m[1]} d`, `${m[1]} å¤©åŽ`)],
    [/^J-(\d+)$/, m => E(`D-${m[1]}`, `è¿˜å‰© ${m[1]} å¤©`)],
    [/^(\d+) en retard$/, m => E(`${m[1]} late`, `${m[1]} ä¸ªå»¶è¯¯`)],
    [/^(\d+) maritime Â· (\d+) LCL Â· (\d+) aÃ©rien$/, m => E(`${m[1]} sea Â· ${m[2]} LCL Â· ${m[3]} air`, `æµ·è¿ ${m[1]} Â· æ‹¼ç®± ${m[2]} Â· ç©ºè¿ ${m[3]}`)],
    [/^Manque : (.+)$/, m => E(`Missing: ${m[1]}`, `ç¼ºå¤±ï¼š${m[1]}`)],
    [/^(\d+) ctn Â· (\d+) EVP$/, m => E(`${m[1]} ctn Â· ${m[2]} TEU`, `${m[1]} ç®± Â· ${m[2]} TEU`)],
    [/^ctn Â· (\d+) EVP$/, m => E(`ctn Â· ${m[1]} TEU`, `ç®± Â· ${m[1]} TEU`)],
    [/^(\d+) ctn$/, m => E(`${m[1]} ctn`, `${m[1]} ç®±`)],
    [/^(\d+) produits? Â· FOB$/, m => E(`${m[1]} product${m[1] > 1 ? "s" : ""} Â· FOB`, `${m[1]} ä¸ªäº§å“ Â· FOB`)],
    [/^\(fret (.+) Â· ass\. (.+)\)$/, m => E(`(freight ${m[1]} Â· ins. ${m[2]})`, `ï¼ˆè¿è´¹ ${m[1]} Â· ä¿é™© ${m[2]}ï¼‰`)],
    [/^(.+) kg Â· taxable (.+) kg$/, m => E(`${m[1]} kg Â· chargeable ${m[2]} kg`, `${m[1]} kg Â· è®¡è´¹ ${m[2]} kg`)],
    [/^ArchivÃ© le (.+)$/, m => E(`Archived on ${m[1]}`, `å½’æ¡£äºŽ ${m[1]}`)],
    [/^(.+) Â· (\d+(?:[.,]\d+)?) (Ko|Mo)$/, m => `${m[1]} Â· ${m[2]} ${m[3] === "Ko" ? "KB" : "MB"}`],
    [/^Dossier (.+) supprimÃ©$/, m => E(`Shipment ${m[1]} deleted`, `æ¡£æ¡ˆ ${m[1]} å·²åˆ é™¤`)],
    [/^Documents du dossier (.+)$/, m => E(`Documents for shipment ${m[1]}`, `æ¡£æ¡ˆ ${m[1]} çš„å•æ®`)],
    [/^Dossier (.+)$/, m => E(`Shipment ${m[1]}`, `æ¡£æ¡ˆ ${m[1]}`)],
    [/^(.+) archivÃ©$/, m => E(`${m[1]} archived`, `${m[1]} å·²å½’æ¡£`)],
    [/^(.+) restaurÃ©$/, m => E(`${m[1]} restored`, `${m[1]} å·²æ¢å¤`)],
    [/^(\d+) conteneur\(s\) ajoutÃ©\(s\)$/, m => E(`${m[1]} container(s) added`, `å·²æ·»åŠ  ${m[1]} ä¸ªé›†è£…ç®±`)],
    [/^(\d+) produit\(s\) ajoutÃ©\(s\)$/, m => E(`${m[1]} product(s) added`, `å·²æ·»åŠ  ${m[1]} ä¸ªäº§å“`)],
    [/^(\d+) dossier\(s\) de ce navigateur ne sont pas encore en ligne\.$/, m => E(`${m[1]} shipment(s) in this browser are not online yet.`, `æ­¤æµè§ˆå™¨ä¸­æœ‰ ${m[1]} ä¸ªæ¡£æ¡ˆå°šæœªä¸Šä¼ åˆ°çº¿ä¸Šã€‚`)],
    [/^(\d+) dossier\(s\) restaurÃ©\(s\) Â· (\d+) PDF non importÃ©\(s\)$/, m => E(`${m[1]} shipment(s) restored Â· ${m[2]} PDF(s) not imported`, `å·²æ¢å¤ ${m[1]} ä¸ªæ¡£æ¡ˆ Â· ${m[2]} ä¸ª PDF æœªå¯¼å…¥`)],
    [/^(\d+) dossier\(s\) restaurÃ©\(s\)$/, m => E(`${m[1]} shipment(s) restored`, `å·²æ¢å¤ ${m[1]} ä¸ªæ¡£æ¡ˆ`)],
    [/^Sauvegarde crÃ©Ã©e : (\d+) dossier\(s\), (\d+) fichier\(s\)$/, m => E(`Backup created: ${m[1]} shipment(s), ${m[2]} file(s)`, `å¤‡ä»½å·²åˆ›å»ºï¼š${m[1]} ä¸ªæ¡£æ¡ˆï¼Œ${m[2]} ä¸ªæ–‡ä»¶`)],
    [/^(.+\.xlsx) prÃªt$/, m => E(`${m[1]} ready`, `${m[1]} å·²å°±ç»ª`)],
    [/^(.+\.(?:xlsx|json)) tÃ©lÃ©chargÃ©$/, m => E(`${m[1]} downloaded`, `${m[1]} å·²ä¸‹è½½`)],
    [/^(.+) joint$/, m => E(`${T(m[1])} attached`, `${T(m[1])} å·²é™„åŠ `)],
    [/^Le nÂ° (.+) existe dÃ©jÃ ( dans les archives)?\.$/, m => E(`No. ${m[1]} already exists${m[2] ? " in the archive" : ""}.`, `ç¼–å· ${m[1]} å·²å­˜åœ¨${m[2] ? "äºŽå½’æ¡£ä¸­" : ""}ã€‚`)],
    [/^(.+) : format attendu 4 lettres \+ 7 chiffres$/, m => E(`${m[1]}: expected format 4 letters + 7 digits`, `${m[1]}ï¼šæ ¼å¼åº”ä¸º 4 ä¸ªå­—æ¯ + 7 ä½æ•°å­—`)],
    [/^(.+) : dÃ©jÃ  dans ce dossier$/, m => E(`${m[1]}: already in this shipment`, `${m[1]}ï¼šå·²åœ¨æ­¤æ¡£æ¡ˆä¸­`)],
    [/^(.+) : aussi prÃ©sent dans le dossier (.+) \(ajoutÃ© quand mÃªme\)$/, m => E(`${m[1]}: also in shipment ${m[2]} (added anyway)`, `${m[1]}ï¼šä¹Ÿå­˜åœ¨äºŽæ¡£æ¡ˆ ${m[2]}ï¼ˆä»å·²æ·»åŠ ï¼‰`)],
    [/^Vide = total produits \((.+)\)$/, m => E(`Empty = products total (${m[1]})`, `ç•™ç©º = äº§å“åˆè®¡ï¼ˆ${m[1]}ï¼‰`)],
    [/^FOB (.+?)( \(total des produits\))? \+ fret (.+) \+ assurance (.+?)( Â· Ã©cart avec le total produits : (.+))?$/, m => E(
      `FOB ${m[1]}${m[2] ? " (products total)" : ""} + freight ${m[3]} + insurance ${m[4]}${m[5] ? ` Â· difference with products total: ${m[6]}` : ""}`,
      `FOB ${m[1]}${m[2] ? "ï¼ˆäº§å“åˆè®¡ï¼‰" : ""} + è¿è´¹ ${m[3]} + ä¿é™© ${m[4]}${m[5] ? ` Â· ä¸Žäº§å“åˆè®¡å·®é¢ï¼š${m[6]}` : ""}`)],
    [/^Retirer la ligne (\d+)$/, m => E(`Remove row ${m[1]}`, `åˆ é™¤ç¬¬ ${m[1]} è¡Œ`)],
    [/^Retirer (.+)$/, m => E(`Remove ${T(m[1])}`, `ç§»é™¤ ${T(m[1])}`)],
    [/^(.+) ligne (\d+)$/, m => E(`${T(m[1])} row ${m[2]}`, `ç¬¬ ${m[2]} è¡Œ${T(m[1])}`)],
    [/^(Janv\.|FÃ©vr\.|Mars|Avr\.|Mai|Juin|Juil\.|AoÃ»t|Sept\.|Oct\.|Nov\.|DÃ©c\.) (\d{4})$/, m => { const k = MOIS_FR.indexOf(m[1]); return E(`${MOIS_EN[k]} ${m[2]}`, `${m[2]}å¹´${k + 1}æœˆ`); }],
    [/^S(\d{2}) (\d{4})$/, m => E(`W${m[1]} ${m[2]}`, `${m[2]}å¹´ç¬¬${+m[1]}å‘¨`)],
    [/^(FOB|Fret|Assurance|CIF) ([A-Z]{3})$/, m => `${T(m[1])} ${m[2]}`],
    [/^Dossiers par mois \((.+)\) et par transport$/, m => E(`Shipments per month (${T(m[1])}) by transport`, `æ¯æœˆæ¡£æ¡ˆæ•°ï¼ˆ${T(m[1])}ï¼‰æŒ‰è¿è¾“æ–¹å¼`)],
    [/^Conteneurs par mois \((.+)\)$/, m => E(`Containers per month (${T(m[1])})`, `æ¯æœˆé›†è£…ç®±æ•°ï¼ˆ${T(m[1])}ï¼‰`)],
    [/^Dossiers par semaine \((.+?)\)( â€” 26 derniÃ¨res semaines)?$/, m => E(`Shipments per week (${T(m[1])})${m[2] ? " â€” last 26 weeks" : ""}`, `æ¯å‘¨æ¡£æ¡ˆæ•°ï¼ˆ${T(m[1])}ï¼‰${m[2] ? " â€” æœ€è¿‘ 26 å‘¨" : ""}`)],
    [/^EVP par semaine \((.+?)\)( â€” 26 derniÃ¨res semaines)?$/, m => E(`TEU per week (${T(m[1])})${m[2] ? " â€” last 26 weeks" : ""}`, `æ¯å‘¨ TEUï¼ˆ${T(m[1])}ï¼‰${m[2] ? " â€” æœ€è¿‘ 26 å‘¨" : ""}`)],
    [/^Valeur CIF par mois \((.+)\)$/, m => E(`CIF value per month (${m[1]})`, `æ¯æœˆ CIF é‡‘é¢ï¼ˆ${m[1]}ï¼‰`)],
    [/^(Montant livrÃ©|Montant non livrÃ©|Total|Montant PO) ([A-Z]{3})$/, m => `${T(m[1])} ${m[2]}`],
    [/^Montant PO par annÃ©e \(([A-Z]{3})\)$/, m => E(`PO amount per year (${m[1]})`, `æ¯å¹´ PO é‡‘é¢ï¼ˆ${m[1]}ï¼‰`)],
    [/^Montant facture \(([A-Z]{3})\)$/, m => E(`Invoice amount (${m[1]})`, `å‘ç¥¨é‡‘é¢ï¼ˆ${m[1]}ï¼‰`)],
    [/^ACTIVITÃ‰ PAR MOIS \((.+)\)$/, m => E(`ACTIVITY BY MONTH (${T(m[1])})`, `æŒ‰æœˆä¸šåŠ¡ï¼ˆ${T(m[1])}ï¼‰`)],
    [/^ACTIVITÃ‰ PAR SEMAINE ISO \((.+)\)$/, m => E(`ACTIVITY BY ISO WEEK (${T(m[1])})`, `æŒ‰ ISO å‘¨ä¸šåŠ¡ï¼ˆ${T(m[1])}ï¼‰`)],
    [/^DÃ©tail des dossiers par (mois|semaine) \((.+)\)$/, m => E(`Shipment detail by ${m[1] === "mois" ? "month" : "week"} (${T(m[2])})`, `æŒ‰${m[1] === "mois" ? "æœˆ" : "å‘¨"}çš„æ¡£æ¡ˆæ˜Žç»†ï¼ˆ${T(m[2])}ï¼‰`)],
  ];
  function trCore(c){
    const d = DICT.get(c); if (d) {return d[LANG === "en" ? 0 : 1];}
    for (const [re, fn] of PATS) { const m = c.match(re); if (m) {return fn(m);} }
    return null;
  }
  function tr(s){
    if (LANG === "fr" || typeof s !== "string") {return s;}
    const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/); if (!m[2]) {return s;}
    const o = trCore(m[2]); return o === null || o === undefined ? s : m[1] + o + m[3];
  }
  const toFr = s => { const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/); const f = REV.get(m[2]); return f ? m[1] + f + m[3] : s; };

  /* traduction automatique du DOM */
  const ORIG = new WeakMap(), DONE = new WeakMap(), AORIG = new WeakMap();
  const ATTRS = ["placeholder", "aria-label", "title", "label"];
  const skip = n => n.nodeType === 3 ? (!n.parentElement || n.parentElement.closest("script,style,textarea,[data-notr]")) : n.closest("script,style,[data-notr]");
  function txText(n, fresh){
    if (skip(n)) {return;}
    const v = n.nodeValue;
    if (fresh || !ORIG.has(n) || DONE.get(n) !== v) {ORIG.set(n, toFr(v));}
    const fr = ORIG.get(n);
    const p = n.parentElement;
    if (p && p.tagName === "OPTION" && !p.hasAttribute("value")) {p.setAttribute("value", fr.trim());}
    const out = tr(fr);
    if (out !== v) {n.nodeValue = out;}
    DONE.set(n, out);
  }
  function txAttrs(el){
    if (skip(el)) {return;}
    let o = AORIG.get(el); if (!o) { o = {}; AORIG.set(el, o); }
    ATTRS.forEach(a => {
      if (!el.hasAttribute(a)) {return;}
      const v = el.getAttribute(a);
      if (!o[a] || o[a].done !== v) {o[a] = {fr: toFr(v)};}
      const out = tr(o[a].fr); o[a].done = out;
      if (out !== v) {el.setAttribute(a, out);}
    });
  }
  function txTree(root){
    if (root.nodeType === 3) { txText(root); return; }
    if (root.nodeType !== 1) {return;}
    txAttrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n; while ((n = w.nextNode())) {n.nodeType === 3 ? txText(n) : txAttrs(n);}
  }
  const mo = new MutationObserver(list => {
    for (const r of list) {
      if (r.type === "characterData") {txText(r.target);}
      else if (r.type === "attributes") {txAttrs(r.target);}
      else {r.addedNodes.forEach(txTree);}
    }
  });
  mo.observe(document.body, {subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS});

  const STATUTS = ["CommandÃ©","En mer","ArrivÃ© Douala","En dÃ©douanement","LivrÃ©"];
  const PAIEMENTS = ["Non payÃ©","Acompte versÃ©","SoldÃ©"];
  const DEVISES = ["EUR","USD","XAF","CNY","GBP","AED"];
  const UNITES = ["pce","kg","t","L","m","mÂ²","mÂ³","carton","sac","palette","lot"];
  let draftProd = [];
  const lineAmt = p => num(p.qte) * num(p.pu);
  const prodTotal = it => (it.produits || []).reduce((a, p) => a + lineAmt(p), 0);
  const money = (v, dev) => `${num(v).toLocaleString(LOC(), {minimumFractionDigits: dev === "XAF" ? 0 : 2, maximumFractionDigits: dev === "XAF" ? 0 : 2})} ${dev || ""}`.trim();
  const fobOf = it => String(it.fob ?? "").trim() !== "" ? num(it.fob) : prodTotal(it);
  const cifOf = it => fobOf(it) + num(it.fret) + num(it.assurance);
  const MODES = {fcl: "Maritime FCL (20' / 40')", lcl: "Maritime LCL (groupage)", air: "AÃ©rien"};
  const MODE_SHORT = {fcl: "Maritime", lcl: "LCL", air: "AÃ©rien"};
  const modeOf = it => it.mode && MODES[it.mode] ? it.mode : "fcl";
  const num = v => { const n = parseFloat(String(v ?? "").replace(",", ".")); return isFinite(n) ? n : 0; };
  const nfmt = (v, d = 0) => num(v).toLocaleString(LOC(), {maximumFractionDigits: d});
  const DOCS = [
    ["po","PO","Bon de commande (PO)"],["proforma","PRO","Facture proforma"],["di","DI","DÃ©claration d'importation (DI)"],
    ["swift","SWF","SWIFT (preuve de paiement)"],["facture","FAC","Facture finale"],["packing","PKL","Packing list"],
    ["bl","BL","Bill of Lading"],["rvc","RVC","RVC"],["anor","ANR","Certificat ANOR"],["dau","DAU","DAU"],["quittance","QTC","Quittance"]
  ];
  let assets = null;
  const STANDALONE = !window.claude;
  const SB = (STANDALONE && window.AFX_SUPABASE_URL && window.AFX_SUPABASE_KEY && window.supabase) ? window.supabase.createClient(window.AFX_SUPABASE_URL, window.AFX_SUPABASE_KEY) : null;
  const BUCKET = "documents";
  const sbAssets = {
    async upload(blob){
      const t = blob.type || "application/pdf", ext = t.includes("pdf") ? "pdf" : (t.split("/")[1] || "bin").replace(/[^a-z0-9]/gi, "");
      const path = `${new Date().getFullYear()}/${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const {error} = await SB.storage.from(BUCKET).upload(path, blob, {contentType: t, upsert: false});
      if (error) {throw error;}
      return {id: "sb:" + path, url: "", sizeBytes: blob.size, contentType: t};
    },
    async delete(id){ if (String(id).startsWith("sb:")) { const {error} = await SB.storage.from(BUCKET).remove([id.slice(3)]); if (error) {throw error;} } }
  };
  let localFiles = false;
  /* ---------- fichiers locaux (version autonome) ---------- */
  const IDB = (() => {
    let p;
    const open = () => p || (p = new Promise((res, rej) => { const r = indexedDB.open("afrilux-suivi-import", 1); r.onupgradeneeded = () => r.result.createObjectStore("files"); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }));
    const run = async (mode, fn) => { const d = await open(); return new Promise((res, rej) => { const t = d.transaction("files", mode); const rq = fn(t.objectStore("files")); t.oncomplete = () => res(rq ? rq.result : undefined); t.onerror = () => rej(t.error); }); };
    return { put: (k, v) => run("readwrite", s => s.put(v, k)), get: k => run("readonly", s => s.get(k)), del: k => run("readwrite", s => s.delete(k)) };
  })();
  const localAssets = {
    async upload(blob){ const id = "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8); await IDB.put(id, blob); return {id, url: "", sizeBytes: blob.size, contentType: blob.type}; },
    async delete(id){ await IDB.del(id); }
  };
  function saveBlobLocal(filename, blob){
    const u = URL.createObjectURL(blob); const a = document.createElement("a");
    a.href = u; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 4000);
  }
  document.addEventListener("click", async e => {
    const a = e.target.closest("a[data-file]"); if (!a) {return;}
    if (SB && a.dataset.file.startsWith("sb:")) {
      e.preventDefault();
      const w = window.open("", "_blank");
      const {data, error} = await SB.storage.from(BUCKET).createSignedUrl(a.dataset.file.slice(3), 3600);
      if (error || !data) { if (w) {w.close();} toast("Ouverture impossible"); return; }
      if (w) {w.location.href = data.signedUrl;} else {location.href = data.signedUrl;}
      return;
    }
    if (!localFiles) {return;}
    e.preventDefault();
    try { const b = await IDB.get(a.dataset.file); if (!b) { toast("Fichier introuvable dans ce navigateur"); return; } const u = URL.createObjectURL(b); const w = window.open(u, "_blank"); if (!w) {saveBlobLocal(a.dataset.name || "document.pdf", b);} setTimeout(() => URL.revokeObjectURL(u), 60000); }
    catch { toast("Ouverture impossible"); }
  });
  let draftDocs = {};      // {key:{id,name,size,type,at}}
  let sessionUploads = []; // ids tÃ©lÃ©versÃ©s pendant l'ouverture du formulaire
  let uploadKey = null;
  const docCount = it => DOCS.filter(([k]) => it.docs && it.docs[k]).length;
  const fmtSize = b => b > 1048576 ? (b / 1048576).toFixed(1) + " Mo" : Math.max(1, Math.round(b / 1024)) + " Ko";
  const TEU = t => t.startsWith("20") ? 1 : 2;
  const $ = id => document.getElementById(id);
  let items = [];          // [{id, ...data}]
  let view = "actifs";
  let db = null, col = null, canWrite = true;
  let editing = null;      // id en cours d'Ã©dition ou null
  let draft = [];          // conteneurs du formulaire
  let pendingConfirm = null;
  let incoEdit = null, incoDraft = {c: "", l: ""};

  /* ---------- ISO 6346 ---------- */
  const LV = (() => { const m = {}; let v = 10; for (const c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") { if (v % 11 === 0) {v++;} m[c] = v++; } return m; })();
  function isoValid(n){
    if (!/^[A-Z]{3}[UJZR]\d{7}$/.test(n)) {return false;}
    let s = 0;
    for (let i = 0; i < 10; i++) { const c = n[i]; s += (i < 4 ? LV[c] : +c) * Math.pow(2, i); }
    return (s % 11) % 10 === +n[10];
  }
  const clean = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

  /* ---------- utilitaires ---------- */
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const today = () => { const d = new Date(); d.setHours(0,0,0,0); return d; };
  function daysTo(iso){ if (!iso) {return null;} const d = new Date(iso + "T00:00:00"); return Math.round((d - today()) / 864e5); }
  function fmtDate(iso){ if (!iso) {return "â€”";} const [y,m,d] = iso.split("-"); return `${d}/${m}/${y}`; }
  function toast(msg){ const t = $("toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => t.hidden = true, 2600); }
  const DI_ALERT = 30;
  function diState(it){
    if (!it.diExp) {return null;}
    const d = daysTo(it.diExp);
    if (it.statut === "LivrÃ©" || it.archive) {return {k: "done", d};}
    return d < 0 ? {k: "exp", d} : d <= DI_ALERT ? {k: "soon", d} : {k: "ok", d};
  }
  function diBadge(it){
    const s = diState(it); if (!s) {return "";}
    if (s.k === "exp") {return `<span class="d late">DI expirÃ©e depuis ${-s.d} j</span>`;}
    if (s.k === "soon") {return `<span class="d soon">${s.d === 0 ? "DI expire aujourd'hui" : `DI expire dans ${s.d} j`}</span>`;}
    return `<span class="d ok">exp. ${fmtDate(it.diExp)}</span>`;
  }
  const diLabel = it => { const s = diState(it); return !it.di && !it.diExp ? "Sans DI" : !s ? "Valide" : s.k === "done" ? "ClÃ´turÃ©e (livrÃ©)" : s.k === "exp" ? "ExpirÃ©e" : s.k === "soon" ? `Expire â‰¤ ${DI_ALERT} j` : "Valide"; };
  const ctnOf = it => modeOf(it) === "fcl" ? (it.conteneurs || []) : [];
  const teuOf = it => ctnOf(it).reduce((a, c) => a + TEU(c.t || "40'"), 0);

  /* ---------- stockage ---------- */
  const LS = "suivi-import-local";
  function lsLoad(){ try { return JSON.parse(localStorage.getItem(LS) || "[]"); } catch { return []; } }
  function lsSave(){ try { localStorage.setItem(LS, JSON.stringify(items)); } catch {} }
  function upsertLocal(id, data){ const i = items.findIndex(x => x.id === id); const row = {id, ...data}; if (i >= 0) {items[i] = row;} else {items.push(row);} }
  async function save(id, data){
    if (SB) { const {error} = await SB.from("dossiers").upsert({id, data, updated_at: new Date().toISOString()}); if (error) {throw error;} upsertLocal(id, data); render(); }
    else if (col) { await col.doc(id).set(data); }
    else { const i = items.findIndex(x => x.id === id); const row = {id, ...data}; if (i >= 0) {items[i] = row;} else {items.push(row);} lsSave(); render(); }
  }
  async function remove(id){
    if (SB) { const {error} = await SB.from("dossiers").delete().eq("id", id); if (error) {throw error;} items = items.filter(x => x.id !== id); render(); }
    else if (col) { await col.doc(id).delete(); }
    else { items = items.filter(x => x.id !== id); lsSave(); render(); }
  }
  const newId = () => "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  /* ---------- filtres ---------- */
  function fillStatSelect(sel, allLabel){
    sel.innerHTML = `<option value="">${allLabel}</option>` + STATUTS.map(s => `<option value="${s}">${s}</option>`).join("");
  }
  fillStatSelect($("fstat"), "Tous les statuts");
  fillStatSelect($("r-stat"), "Tous les statuts");
  $("f-statut").innerHTML = STATUTS.map(s => `<option value="${s}">${s}</option>`).join("");
  $("f-devise").innerHTML = DEVISES.map(d => `<option>${d}</option>`).join("");
  $("f-paiement").innerHTML = PAIEMENTS.map(s => `<option value="${s}">${s}</option>`).join("");
  $("f-mode").innerHTML = Object.entries(MODES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("");
  $("fmode").innerHTML = "<option value=\"\">Tous transports</option>" + Object.entries(MODES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("");
  $("r-mode").innerHTML = $("fmode").innerHTML;
  $("r-pay").innerHTML = "<option value=\"\">Tous</option>" + PAIEMENTS.map(s => `<option value="${s}">${s}</option>`).join("");

  function visible(){
    const q = clean($("q").value) ? $("q").value.trim().toLowerCase() : "";
    const qc = clean($("q").value);
    const st = $("fstat").value;
    return items.filter(it => (view === "archives") === !!it.archive)
      .filter(it => !st || it.statut === st)
      .filter(it => !$("fmode").value || modeOf(it) === $("fmode").value)
      .filter(it => { const f = $("finco").value; return !f || (f === "-" ? !it.incoterm : it.incoterm === f); })
      .filter(it => {
        if (!q) {return true;}
        const hay = [it.ref, it.pr, it.po, it.fournisseur, it.marchandise, it.navire, it.bl, it.origine, it.transitaire, it.transitaireRef, it.di, it.incoterm, it.incotermLieu, ...(it.produits || []).flatMap(p => [p.code, p.des, p.hs])].join(" ").toLowerCase();
        return hay.includes(q) || (it.conteneurs || []).some(c => c.n.includes(qc));
      })
      .sort((a, b) => view === "archives"
        ? String(b.archiveLe || "").localeCompare(String(a.archiveLe || ""))
        : String(a.eta || "9999").localeCompare(String(b.eta || "9999")));
  }

  /* ---------- rendu ---------- */
  function render(){
    const actifs = items.filter(i => !i.archive), arch = items.filter(i => i.archive);
    $("n-actifs").textContent = actifs.length; $("n-archives").textContent = arch.length;
    const ctn = actifs.reduce((a, i) => a + ctnOf(i).length, 0);
    $("k-dos").textContent = actifs.length;
    const byM = k => actifs.filter(i => modeOf(i) === k).length;
    $("k-dos-s").textContent = actifs.length ? `${byM("fcl")} maritime Â· ${byM("lcl")} LCL Â· ${byM("air")} aÃ©rien` : "Â ";
    $("k-ctn").textContent = ctn;
    const c20 = actifs.reduce((a, i) => a + ctnOf(i).filter(c => TEU(c.t) === 1).length, 0);
    $("k-ctn-s").textContent = ctn ? `${c20} Ã— 20' Â· ${ctn - c20} Ã— 40'` : "Â ";
    $("k-teu").textContent = actifs.reduce((a, i) => a + teuOf(i), 0);
    const soon = actifs.filter(i => { const d = daysTo(i.eta); return d !== null && d >= 0 && d <= 7 && STATUTS.indexOf(i.statut) < 2; });
    $("k-eta").textContent = soon.length;
    const late = actifs.filter(i => { const d = daysTo(i.eta); return d !== null && d < 0 && STATUTS.indexOf(i.statut) < 2; }).length;
    $("k-eta-s").textContent = late ? `${late} en retard` : "\u00a0";
    const diAct = actifs.filter(i => i.statut !== "LivrÃ©" && i.diExp);
    const diExpired = diAct.filter(i => daysTo(i.diExp) < 0).length, diSoon = diAct.filter(i => { const d = daysTo(i.diExp); return d >= 0 && d <= DI_ALERT; }).length;
    $("k-di").textContent = diExpired + diSoon; $("k-di").style.color = diExpired ? "var(--bad)" : diSoon ? "var(--warn)" : "";
    $("k-di-s").textContent = diExpired || diSoon ? `${diExpired} expirÃ©e(s) Â· ${diSoon} â‰¤ ${DI_ALERT} j` : "\u00a0";

    const rows = visible();
    const tb = $("rows");
    tb.innerHTML = rows.map(rowHtml).join("");
    const em = $("empty");
    if (!rows.length) {
      em.hidden = false;
      em.innerHTML = items.length === 0
        ? "<strong>Aucun dossier pour l'instant</strong><span>CrÃ©ez votre premier dossier d'import pour suivre ses conteneurs.</span><button type=\"button\" class=\"primary\" data-act=\"new\">+ Nouveau dossier</button>"
        : `<strong>${view === "archives" ? "Aucun dossier archivÃ©" : "Aucun dossier"} ne correspond</strong><span>Modifiez la recherche ou le filtre de statut.</span>`;
    } else {em.hidden = true;}
    if (viewId && !$("p-view").hidden) {renderView(viewId);}
    $("foot").textContent = view === "archives"
      ? "Les dossiers archivÃ©s restent consultables et peuvent Ãªtre restaurÃ©s Ã  tout moment."
      : "ClassÃ©s par ETA. Archivez un dossier une fois livrÃ© pour garder la liste courte.";
  }

  function rowHtml(it){
    const si = Math.max(0, STATUTS.indexOf(it.statut));
    const md = modeOf(it);
    const cs = ctnOf(it);
    const d = daysTo(it.eta);
    let dl = "";
    if (d !== null && !it.archive && si < 2) {
      if (d < 0) {dl = `<span class="d late">Retard ${-d} j</span>`;}
      else if (d === 0) {dl = "<span class=\"d soon\">Aujourd'hui</span>";}
      else if (d <= 7) {dl = `<span class="d soon">J-${d}</span>`;}
      else {dl = `<span class="d ok">dans ${d} j</span>`;}
    }
    const shown = cs.slice(0, 4).map(c => `<span class="chip">${esc(c.n)}<i>${esc(c.t)}</i></span>`).join("");
    const more = cs.length > 4 ? `<button type="button" class="chip more" data-act="edit" data-id="${it.id}">+${cs.length - 4}</button>` : "";
    const confirming = pendingConfirm === it.id;
    let act;
    if (!canWrite) {act = "";}
    else if (confirming) {act = `<div class="confirm">Supprimer le dossier et ses documents ?<button type="button" class="danger" data-act="del-yes" data-id="${it.id}">Supprimer</button><button type="button" class="ghost" data-act="del-no">Annuler</button></div>`;}
    else if (it.archive) {act = `<div class="rowact"><button type="button" class="ghost" data-act="view" data-id="${it.id}">AperÃ§u</button><button type="button" class="ghost" data-act="restore" data-id="${it.id}">Restaurer</button><button type="button" class="ghost danger" data-act="del" data-id="${it.id}">Supprimer</button></div>`;}
    else {act = `<div class="rowact"><button type="button" class="ghost" data-act="view" data-id="${it.id}">AperÃ§u</button><button type="button" class="ghost" data-act="edit" data-id="${it.id}">Modifier</button><button type="button" class="ghost" data-act="archive" data-id="${it.id}">Archiver</button><button type="button" class="ghost danger" data-act="del" data-id="${it.id}">Supprimer</button></div>`;}
    return `<tr>
    <td><span class="mode m-${md}">${MODE_SHORT[md]}</span><br><button type="button" class="refbtn" data-act="view" data-id="${it.id}" title="AperÃ§u">${esc(it.ref)}</button>${it.exemple ? '<span class="tag-ex">exemple</span>' : ""}
      <div class="sub mono">PR ${esc(it.pr || "â€”")}</div>
      <div class="sub mono">PO ${esc(it.po || "â€”")}${it.poDate ? " Â· " + fmtDate(it.poDate) : ""}</div>
      ${incoEdit === it.id && canWrite
    ? `<div class="incoed"><select id="ie-c" aria-label="Incoterm">${incoOptions(incoDraft.c)}</select><input id="ie-l" value="${esc(incoDraft.l)}" placeholder="Lieu (ex. Anvers)" aria-label="Lieu Incoterm"><div class="b"><button type="button" class="primary" data-act="inco-save" data-id="${it.id}">Enregistrer</button><button type="button" class="ghost" data-act="inco-cancel">Annuler</button></div></div>`
    : it.incoterm
      ? (canWrite ? `<button type="button" class="incobtn" data-act="inco" data-id="${it.id}" title="Modifier l'Incoterm"><span class="inco">${esc(it.incoterm)}</span>${esc(it.incotermLieu || "")} âœŽ</button>` : `<div class="sub"><span class="inco">${esc(it.incoterm)}</span>${esc(it.incotermLieu || "")}</div>`)
      : (canWrite && !it.archive ? `<button type="button" class="incobtn add" data-act="inco" data-id="${it.id}">+ Incoterm</button>` : "")}
      ${it.archive && it.archiveLe ? `<div class="sub">ArchivÃ© le ${fmtDate(it.archiveLe.slice(0,10))}</div>` : ""}</td>
    <td>${esc(it.fournisseur)}<div class="sub">${esc(it.marchandise || "â€”")}${it.origine ? " Â· " + esc(it.origine) : ""}</div><span class="pay p${Math.max(0, PAIEMENTS.indexOf(it.paiement || "Non payÃ©"))}">${esc(it.paiement || "Non payÃ©")}</span>${cifOf(it) ? `<div class="prod-line">${(it.produits || []).length ? `${it.produits.length} produit${it.produits.length > 1 ? "s" : ""} Â· ` : ""}FOB <b>${esc(money(fobOf(it), it.devise || "EUR"))}</b></div><div class="prod-line">CIF <b>${esc(money(cifOf(it), it.devise || "EUR"))}</b>${num(it.fret) || num(it.assurance) ? ` <span class="sub">(fret ${esc(money(it.fret, ""))} Â· ass. ${esc(money(it.assurance, ""))})</span>` : ""}</div>` : ""}</td>
    <td>${esc(it.navire || "â€”")}<div class="sub mono">${md === "air" ? "LTA" : md === "lcl" ? "HBL" : "BL"} ${esc(it.bl || "â€”")}</div>${it.transitaire || it.transitaireRef ? `<div class="sub">${esc(it.transitaire || "Transitaire")}${it.transitaireRef ? ` Â· <span class="mono">${esc(it.transitaireRef)}</span>` : ""}</div>` : ""}${it.di || it.diExp ? `<div class="sub mono">DI ${esc(it.di || "â€”")}${it.diDate ? " Â· " + fmtDate(it.diDate) : ""}</div><div class="sub">${diBadge(it)}</div>` : ""}</td>
    <td class="eta mono">${fmtDate(it.eta)}${dl}</td>
    <td>${md === "fcl"
    ? `<div class="cnt-head"><b>${cs.length}</b><span class="teu">ctn Â· ${teuOf(it)} EVP</span></div><div class="chips">${shown}${more}</div>`
    : `<div class="lot"><b>${nfmt(it.colis)}</b> colis<br>${nfmt(it.poids, 2)} kg${md === "lcl" ? ` Â· ${nfmt(it.volume, 3)} mÂ³` : it.taxable ? ` Â· taxable ${nfmt(it.taxable, 2)} kg` : ""}</div>`}</td>
    <td>${(() => { const n = docCount(it); const miss = DOCS.filter(([k]) => !(it.docs && it.docs[k])).map(d => d[1]);
    return `<button type="button" class="ghost" style="padding:0;min-height:0;text-align:left;display:block" data-act="edit" data-id="${it.id}" aria-label="Documents du dossier ${esc(it.ref)}"><div class="docmeter"><b>${n}<span> / ${DOCS.length}</span></b><div class="dbar${n === DOCS.length ? " full" : ""}"><i style="width:${Math.round(n / DOCS.length * 100)}%"></i></div></div></button>${miss.length && miss.length < DOCS.length ? `<div class="miss">Manque : ${miss.slice(0, 5).join(", ")}${miss.length > 5 ? "â€¦" : ""}</div>` : ""}`; })()}</td>
    <td><div class="status"><span class="pill s${si}">${esc(it.statut)}</span><div class="steps${si === 4 ? " done" : ""}">${STATUTS.map((_, k) => `<i class="${k <= si ? "on" : ""}"></i>`).join("")}</div></div></td>
    <td>${act}</td>
  </tr>`;
  }

  /* ---------- panneaux ---------- */
  function openPanel(id){ $("scrim").hidden = false; $(id).hidden = false; }
  function closePanels(){
    if (!$("p-form").hidden && sessionUploads.length) { const ids = sessionUploads; sessionUploads = []; ids.forEach(id => assets?.delete(id).catch(() => {})); }
    $("scrim").hidden = true; $("p-form").hidden = true; $("p-report").hidden = true; $("p-view").hidden = true; viewId = null;
  }
  document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", closePanels));
  $("scrim").addEventListener("click", closePanels);
  document.addEventListener("keydown", e => { if (e.key === "Escape") {closePanels();} });

  function applyMode(){
    const m = $("f-mode").value;
    $("set-ctn").hidden = m !== "fcl";
    $("set-lot").hidden = m === "fcl";
    $("w-volume").hidden = m !== "lcl";
    $("w-taxable").hidden = m !== "air";
    $("lot-legend").textContent = m === "air" ? "Colis (fret aÃ©rien)" : "Colis (groupage)";
    $("l-origine").textContent = m === "air" ? "AÃ©roport de dÃ©part" : "Port de chargement";
    $("l-navire").textContent = m === "air" ? "Compagnie / nÂ° de vol" : "Navire / voyage";
    $("l-bl").textContent = m === "air" ? "NÂ° LTA (AWB)" : m === "lcl" ? "NÂ° BL / HBL" : "NÂ° Bill of Lading";
    $("l-eta").textContent = m === "air" ? "ETA aÃ©roport" : "ETA Douala";
    $("f-origine").placeholder = m === "air" ? "Paris CDG, DubaÃ¯â€¦" : "Anvers, Shanghaiâ€¦";
    $("f-navire").placeholder = m === "air" ? "AF 0900" : "MSC ANNA / 245W";
    $("f-bl").placeholder = m === "air" ? "057-12345675" : "MEDU1234567";
  }
  $("f-mode").addEventListener("change", applyMode);
  const F = ["ref","statut","mode","colis","poids","volume","taxable","pr","po","poDate","paiement","devise","incoterm","incotermLieu","facture","fraisAvant","fraisApres","fret","assurance","fournisseur","marchandise","origine","navire","bl","eta","transitaire","transitaireRef","di","diDate","diExp","notes"];
  const DEFAULTS = {statut: "CommandÃ©", paiement: "Non payÃ©", mode: "fcl", devise: "EUR"};

  /* ---------- produits ---------- */
  function drawProd(){
    const ro = !canWrite;
    const dis = ro ? " disabled" : "";
    $("p-list").innerHTML = (draftProd.length ? "<div class=\"prow head\"><span>#</span><span>Code article</span><span>DÃ©signation</span><span>Code SH</span><span>QuantitÃ©</span><span>UnitÃ©</span><span>Prix unit.</span><span></span></div>" : "") +
    (draftProd.map((p, i) => `<div class="prow" data-pi="${i}">
      <span class="idx">${String(i + 1).padStart(2, "0")}</span>
      <input data-k="code" value="${esc(p.code)}" aria-label="Code article ligne ${i + 1}"${dis}>
      <input data-k="des" value="${esc(p.des)}" placeholder="DÃ©signation" aria-label="DÃ©signation ligne ${i + 1}"${dis}>
      <input data-k="hs" value="${esc(p.hs)}" class="pnum" aria-label="Code SH ligne ${i + 1}"${dis}>
      <input data-k="qte" value="${esc(p.qte)}" class="pnum" inputmode="decimal" aria-label="QuantitÃ© ligne ${i + 1}"${dis}>
      <select data-k="u" aria-label="UnitÃ© ligne ${i + 1}"${dis}>${UNITES.concat(UNITES.includes(p.u) || !p.u ? [] : [p.u]).map(u => `<option value="${esc(u)}"${u === (p.u || "pce") ? " selected" : ""}>${esc(u)}</option>`).join("")}</select>
      <input data-k="pu" value="${esc(p.pu)}" class="pnum" inputmode="decimal" aria-label="Prix unitaire ligne ${i + 1}"${dis}>
      ${ro ? "<span></span>" : `<button type="button" class="ghost" data-pr="${i}" aria-label="Retirer la ligne ${i + 1}">âœ•</button>`}
    </div>`).join("") || "<p class=\"note\" style=\"margin:4px 0\">Aucun produit. Ajoutez les lignes du PO : code article, dÃ©signation, quantitÃ© et prix.</p>");
    prodTotals();
  }
  const IGRP = c => ["EXW","FCA","FAS"].includes(c) ? "A" : (!c || c === "FOB") ? "F" : ["CFR","CPT"].includes(c) ? "C" : ["CIF","CIP"].includes(c) ? "CI" : "D";
  function valCalc(c, facture, pt, fA, fr, as, fD){
    const base = String(facture ?? "").trim() !== "" ? num(facture) : pt, g = IGRP(c);
    fA = num(fA); fr = num(fr); as = num(as); fD = num(fD);
    if (g === "A") {return {base, fob: base + fA, cif: base + fA + fr + as};}
    if (g === "F") {return {base, fob: base, cif: base + fr + as};}
    if (g === "C") {return {base, fob: base - fr, cif: base + as};}
    if (g === "CI") {return {base, fob: base - fr - as, cif: base};}
    return {base, fob: base - fD - fr - as, cif: base - fD};
  }
  // montant facture d'un dossier enregistrÃ© avant l'arrivÃ©e de ce champ
  function factureOf(it){
    if (it.facture !== undefined) {return it.facture;}
    if (String(it.fob ?? "").trim() === "") {return "";}
    const g = IGRP(it.incoterm), f = num(it.fob);
    const v = g === "C" ? f + num(it.fret) : (g === "CI" || g === "D") ? f + num(it.fret) + num(it.assurance) : f;
    return String(+v.toFixed(2));
  }
  const RULES = {A: "La facture n'inclut ni le chargement Ã  bord, ni le fret, ni l'assurance : ajoutez-les pour obtenir le CIF.",
    F: "Marchandise livrÃ©e Ã  bord : ajoutez le fret et l'assurance pour obtenir le CIF.", C: "Le fret est inclus dans la facture : indiquez son montant et ajoutez l'assurance.",
    CI: "Fret et assurance inclus : le CIF est Ã©gal au montant de la facture. Indiquez-les pour calculer le FOB.", D: "Livraison Ã  destination : dÃ©duisez les frais aprÃ¨s arrivÃ©e inclus dans la facture pour obtenir le CIF."};
  function diHint(){
    const a = $("f-diDate").value, b = $("f-diExp").value, el = $("di-hint");
    if (a && b && b < a) { el.textContent = "La date d'expiration doit Ãªtre aprÃ¨s la date de la DI."; el.className = "hint warn"; return; }
    if (b) { const d = daysTo(b); el.className = d < 0 ? "hint warn" : "hint";
      el.textContent = d < 0 ? `DI expirÃ©e depuis ${-d} j` : d === 0 ? "DI expire aujourd'hui" : `DI expire dans ${d} j`; return; }
    el.textContent = ""; el.className = "hint";
  }
  ["f-diDate","f-diExp"].forEach(id => $(id).addEventListener("input", diHint));
  function valTotals(){
    const dev = $("f-devise").value, c = $("f-incoterm").value, g = IGRP(c);
    const pt = draftProd.reduce((a, p) => a + lineAmt(p), 0);
    $("v-dev").textContent = dev;
    $("l-facture").textContent = c ? `Montant facture (${c})` : "Montant facture";
    $("f-facture").placeholder = pt ? `Vide = total produits (${money(pt, dev)})` : "0";
    $("w-fraisAvant").hidden = g !== "A"; $("w-fraisApres").hidden = g !== "D";
    $("l-fret").textContent = (g === "A" || g === "F") ? "Fret (Ã  ajouter)" : "Fret (inclus dans la facture)";
    $("l-ass").textContent = (g === "CI" || g === "D") ? "Assurance (incluse dans la facture)" : "Assurance (Ã  ajouter)";
    $("v-rule").textContent = c ? RULES[g] : "Choisissez l'Incoterm du PO pour adapter le calcul. Sans Incoterm, le montant saisi est traitÃ© comme un FOB.";
    const v = valCalc(c, $("f-facture").value, pt, $("f-fraisAvant").value, $("f-fret").value, $("f-assurance").value, $("f-fraisApres").value);
    $("v-cif").textContent = money(v.cif, dev);
    $("v-note").innerHTML = `<span>FOB</span> ${esc(money(v.fob, dev))} Â· <span>Fret</span> ${esc(money($("f-fret").value, dev))} Â· <span>Assurance</span> ${esc(money($("f-assurance").value, dev))}`;
    $("v-warn").hidden = v.fob >= -0.005;
  }
  ["f-facture","f-fraisAvant","f-fret","f-assurance","f-fraisApres"].forEach(id => $(id).addEventListener("input", valTotals));
  function prodTotals(){
    valTotals();
    const dev = $("f-devise").value;
    $("p-count").textContent = draftProd.length;
    $("p-total").textContent = money(draftProd.reduce((a, p) => a + lineAmt(p), 0), dev);
  }
  $("p-add").addEventListener("click", () => {
    draftProd.push({code: "", des: "", hs: "", qte: "", u: "pce", pu: ""}); drawProd();
    const rows = $("p-list").querySelectorAll(".prow:not(.head)"); rows[rows.length - 1]?.querySelector('[data-k="des"]')?.focus();
  });
  $("p-list").addEventListener("input", e => { const r = e.target.closest("[data-pi]"), k = e.target.dataset.k; if (r && k) { draftProd[+r.dataset.pi][k] = e.target.value; prodTotals(); } });
  $("p-list").addEventListener("change", e => { const r = e.target.closest("[data-pi]"), k = e.target.dataset.k; if (r && k) { draftProd[+r.dataset.pi][k] = e.target.value; prodTotals(); } });
  $("p-list").addEventListener("click", e => { const b = e.target.closest("[data-pr]"); if (b) { draftProd.splice(+b.dataset.pr, 1); drawProd(); } });
  $("f-devise").addEventListener("change", prodTotals);
  $("p-paste-add").addEventListener("click", () => {
    const lines = $("p-paste").value.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    let n = 0;
    lines.forEach(l => {
      const c = l.split(/\t|;/).map(x => x.trim());
      if (c.length === 1) {c.unshift("");}
      const [code = "", des = "", hs = "", qte = "", u = "pce", pu = ""] = c;
      if (!des && !code) {return;}
      draftProd.push({code, des, hs, qte: qte.replace(/\s/g, ""), u: u || "pce", pu: pu.replace(/\s/g, "")}); n++;
    });
    $("p-paste").value = ""; drawProd(); if (n) {toast(`${n} produit(s) ajoutÃ©(s)`);}
  });

  /* ---------- documents ---------- */
  function drawDocs(){
    const canUp = !!assets && canWrite;
    $("d-note").hidden = canUp;
    if (!canUp) {$("d-note").textContent = canWrite ? "L'ajout de fichiers n'est pas disponible dans cette vue (mode local ou accÃ¨s sans droit d'Ã©dition)." : "Lecture seule : vous pouvez ouvrir les documents joints.";}
    $("d-tot").textContent = DOCS.filter(([k]) => draftDocs[k]).length;
    $("d-list").innerHTML = DOCS.map(([k, code, label]) => {
      const d = draftDocs[k];
      const busy = uploadKey === k;
      const info = busy ? "Envoi en coursâ€¦" : d ? `${esc(d.name)} Â· ${fmtSize(d.size)}` : "Non joint";
      const acts = [];
      if (d && !busy) {acts.push(`<a href="/_blob/${esc(d.id)}" data-file="${esc(d.id)}" data-name="${esc(d.name)}" target="_blank" rel="noopener">Ouvrir</a>`);}
      if (canUp && !busy) {acts.push(`<button type="button" class="ghost" data-up="${k}">${d ? "Remplacer" : "Joindre"}</button>`);}
      if (d && canUp && !busy) {acts.push(`<button type="button" class="ghost danger" data-rm="${k}" aria-label="Retirer ${label}">âœ•</button>`);}
      return `<div class="drow${d ? " has" : ""}${busy ? " busy" : ""}"><span class="code">${code}</span><span class="nm"><strong>${label}</strong><small>${info}</small></span><span class="da">${acts.join("")}</span></div>`;
    }).join("");
  }
  $("d-list").addEventListener("click", e => {
    const up = e.target.closest("[data-up]"), rm = e.target.closest("[data-rm]");
    if (up) { uploadKey = null; $("d-file").dataset.key = up.dataset.up; $("d-file").value = ""; $("d-file").click(); }
    if (rm) { delete draftDocs[rm.dataset.rm]; drawDocs(); }
  });
  $("d-file").addEventListener("change", async () => {
    const f = $("d-file").files[0], k = $("d-file").dataset.key; if (!f || !k || !assets) {return;}
    if (f.size > 20 * 1048576) { toast("Fichier trop lourd : 20 Mo maximum"); return; }
    if (!/pdf|image\//.test(f.type) && !/\.pdf$/i.test(f.name)) { toast("Choisissez un PDF ou une image scannÃ©e"); return; }
    uploadKey = k; drawDocs();
    try {
      const blob = f.type ? f : new Blob([f], {type: "application/pdf"});
      const r = await assets.upload(blob);
      sessionUploads.push(r.id);
      draftDocs[k] = {id: r.id, name: f.name, size: r.sizeBytes || f.size, type: r.contentType || f.type, at: new Date().toISOString()};
      toast(`${DOCS.find(d => d[0] === k)[2]} joint`);
    } catch (err) {
      toast(err?.code === "quota_exceeded" ? "Espace de stockage plein" : err?.code === "unsupported_type" ? "Type de fichier refusÃ©" : "Envoi impossible, rÃ©essayez");
    } finally { uploadKey = null; drawDocs(); }
  });
  function openForm(id){
    editing = id || null;
    const it = id ? items.find(x => x.id === id) : null;
    $("form-title").textContent = it ? `Dossier ${it.ref}` : "Nouveau dossier";
    F.forEach(k => $("f-" + k).value = it ? (it[k] || DEFAULTS[k] || "") : (DEFAULTS[k] || ""));
    if (it) {$("f-facture").value = factureOf(it);}
    draft = it ? (it.conteneurs || []).map(c => ({...c})) : [];
    draftDocs = it && it.docs ? JSON.parse(JSON.stringify(it.docs)) : {};
    draftProd = it && it.produits ? it.produits.map(p => ({...p})) : [];
    sessionUploads = []; uploadKey = null;
    $("c-err").hidden = true; $("f-err").hidden = true; $("c-num").value = ""; $("c-paste").value = "";
    const ro = !canWrite;
    $("form").querySelectorAll("input,select,textarea,button").forEach(el => el.disabled = ro);
    $("f-save").hidden = ro;
    $("f-del-wrap").hidden = !it || ro; $("f-del").hidden = false; $("f-del-confirm").hidden = true;
    applyMode(); incoHint(); diHint(); drawDraft(); drawDocs(); drawProd(); openPanel("p-form");
    setTimeout(() => (it ? $("c-num") : $("f-ref")).focus(), 50);
  }
  function drawDraft(){
    $("c-list").innerHTML = draft.map((c, i) => `<div class="citem">
    <span class="idx">${String(i + 1).padStart(2, "0")}</span>
    <span class="num">${esc(c.n)}</span>
    <select data-ti="${i}" aria-label="Type">${["20'","40'"].concat(["20'","40'"].includes(c.t) ? [] : [c.t]).map(t => `<option${t === c.t ? " selected" : ""}>${t}</option>`).join("")}</select>
    <span class="chk ${isoValid(c.n) ? "v" : "x"}" title="${isoValid(c.n) ? "Chiffre de contrÃ´le valide" : "Chiffre de contrÃ´le Ã  vÃ©rifier"}">${isoValid(c.n) ? "âœ“" : "!"}</span>
    <button type="button" class="ghost" data-ri="${i}" aria-label="Retirer ${esc(c.n)}">âœ•</button>
  </div>`).join("") || "<p class=\"note\" style=\"margin:4px 0\">Aucun conteneur ajoutÃ©.</p>";
    $("c-tot").textContent = draft.length;
    $("c-teu").textContent = draft.reduce((a, c) => a + TEU(c.t), 0);
  }
  function addNums(list){
    const t = $("c-type").value; const errs = []; let added = 0;
    list.map(clean).filter(Boolean).forEach(n => {
      if (!/^[A-Z]{4}\d{7}$/.test(n)) { errs.push(`${n} : format attendu 4 lettres + 7 chiffres`); return; }
      if (draft.some(c => c.n === n)) { errs.push(`${n} : dÃ©jÃ  dans ce dossier`); return; }
      const other = items.find(it => it.id !== editing && !it.archive && ctnOf(it).some(c => c.n === n));
      if (other) {errs.push(`${n} : aussi prÃ©sent dans le dossier ${other.ref} (ajoutÃ© quand mÃªme)`);}
      draft.push({n, t}); added++;
    });
    $("c-err").hidden = !errs.length; $("c-err").innerHTML = errs.map(esc).join("<br>");
    drawDraft(); return added;
  }
  $("c-add").addEventListener("click", () => { if (addNums([$("c-num").value])) {$("c-num").value = "";} $("c-num").focus(); });
  $("c-num").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); $("c-add").click(); } });
  $("c-paste-add").addEventListener("click", () => { const n = addNums($("c-paste").value.split(/[\s,;]+/)); if (n) { $("c-paste").value = ""; toast(`${n} conteneur(s) ajoutÃ©(s)`); } });
  $("c-list").addEventListener("click", e => { const b = e.target.closest("[data-ri]"); if (b) { draft.splice(+b.dataset.ri, 1); drawDraft(); } });
  $("c-list").addEventListener("change", e => { const s = e.target.closest("[data-ti]"); if (s) { draft[+s.dataset.ti].t = s.value; drawDraft(); } });

  $("form").addEventListener("submit", async e => {
    e.preventDefault();
    const data = {}; F.forEach(k => data[k] = $("f-" + k).value.trim());
    if (!data.ref || !data.fournisseur) { $("f-err").hidden = false; $("f-err").textContent = "Renseignez le nÂ° de dossier et le fournisseur."; return; }
    if (data.diDate && data.diExp && data.diExp < data.diDate) { $("f-err").hidden = false; $("f-err").textContent = "La date d'expiration doit Ãªtre aprÃ¨s la date de la DI."; return; }
    const dup = items.find(x => x.id !== editing && x.ref.toLowerCase() === data.ref.toLowerCase());
    if (dup) { $("f-err").hidden = false; $("f-err").textContent = `Le nÂ° ${data.ref} existe dÃ©jÃ ${dup.archive ? " dans les archives" : ""}.`; return; }
    const old = editing ? items.find(x => x.id === editing) : null;
    if (uploadKey) { $("f-err").hidden = false; $("f-err").textContent = "Attendez la fin de l'envoi du document."; return; }
    { const g = IGRP(data.incoterm); if (g !== "A") {data.fraisAvant = "";} if (g !== "D") {data.fraisApres = "";}
      const pt = draftProd.reduce((a, p) => a + lineAmt(p), 0);
      const v = valCalc(data.incoterm, data.facture, pt, data.fraisAvant, data.fret, data.assurance, data.fraisApres);
      data.fob = (data.facture.trim() === "" && !pt) ? "" : String(+v.fob.toFixed(2)); }
    if (data.mode === "fcl") { data.colis = data.poids = data.volume = data.taxable = ""; }
    else if (data.mode === "air") {data.volume = "";}
    else {data.taxable = "";}
    const body = {...data, conteneurs: data.mode === "fcl" ? draft : [], docs: draftDocs, produits: draftProd.filter(p => (p.des || p.code || "").trim()).map(p => ({code: p.code.trim(), des: p.des.trim(), hs: p.hs.trim(), qte: p.qte, u: p.u || "pce", pu: p.pu})), archive: old ? !!old.archive : false, archiveLe: old?.archiveLe || "", creeLe: old?.creeLe || new Date().toISOString(), majLe: new Date().toISOString()};
    if (old?.exemple) {body.exemple = true;}
    $("f-save").disabled = true;
    try {
      await save(editing || newId(), body);
      const keep = new Set(Object.values(draftDocs).map(d => d.id));
      const dropped = [...Object.values(old?.docs || {}).map(d => d.id), ...sessionUploads].filter(id => !keep.has(id));
      sessionUploads = [];
      dropped.forEach(id => assets?.delete(id).catch(() => {}));
      closePanels(); toast(old ? "Dossier mis Ã  jour" : "Dossier crÃ©Ã©");
    }
    catch (err) { $("f-err").hidden = false; $("f-err").textContent = err?.code === "quota_exceeded" ? "Espace plein : supprimez d'anciens dossiers archivÃ©s." : "Enregistrement impossible. VÃ©rifiez votre connexion puis rÃ©essayez."; }
    finally { $("f-save").disabled = false; }
  });

  async function deleteDossier(id){
    const it = items.find(x => x.id === id); if (!it) {return;}
    const files = Object.values(it.docs || {}).map(d => d.id);
    await remove(id); files.forEach(f => assets?.delete(f).catch(() => {}));
    toast(`Dossier ${it.ref} supprimÃ©`);
  }
  $("f-del").addEventListener("click", () => { $("f-del").hidden = true; $("f-del-confirm").hidden = false; $("f-del-no").focus(); });
  $("f-del-no").addEventListener("click", () => { $("f-del").hidden = false; $("f-del-confirm").hidden = true; });
  $("f-del-yes").addEventListener("click", async () => {
    if (!editing) {return;}
    const id = editing; $("f-del-yes").disabled = true;
    try {
      const ids = sessionUploads; sessionUploads = []; ids.forEach(x => assets?.delete(x).catch(() => {}));
      await deleteDossier(id); editing = null; closePanels();
    } catch { toast("Suppression impossible, rÃ©essayez."); }
    finally { $("f-del-yes").disabled = false; }
  });
  /* ---------- Incoterms ---------- */
  const incoOf = c => INCOTERMS.find(x => x[0] === c);
  function incoOptions(sel){
    const o = x => `<option value="${x[0]}"${x[0] === sel ? " selected" : ""}>${x[0]} â€” ${x[1]}</option>`;
    return `<option value="">Choisirâ€¦</option><optgroup label="Tous modes de transport">${INCOTERMS.filter(x => !x[4]).map(o).join("")}</optgroup><optgroup label="Maritime et fluvial uniquement">${INCOTERMS.filter(x => x[4]).map(o).join("")}</optgroup>`;
  }
  $("finco").innerHTML = `<option value="">Tous Incoterms</option>${INCOTERMS.map(x => `<option value="${x[0]}">${x[0]} â€” ${x[1]}</option>`).join("")}<option value="-">Non renseignÃ©</option>`;
  document.addEventListener("input", e => { if (e.target.id === "ie-l") {incoDraft.l = e.target.value;} });
  document.addEventListener("change", e => { if (e.target.id === "ie-c") {incoDraft.c = e.target.value;} });
  document.addEventListener("keydown", e => {
    if (e.target.id === "ie-l" && e.key === "Enter") { e.preventDefault(); document.querySelector('[data-act="inco-save"]')?.click(); }
    if ((e.target.id === "ie-l" || e.target.id === "ie-c") && e.key === "Escape") { e.stopPropagation(); incoEdit = null; render(); }
  }, true);
  // Qui paie le transport principal, l'assurance et le dÃ©douanement import
  const INCO_RESP = {EXW: ["Acheteur","Acheteur","Acheteur"], FCA: ["Acheteur","Acheteur","Acheteur"], FAS: ["Acheteur","Acheteur","Acheteur"], FOB: ["Acheteur","Acheteur","Acheteur"],
    CPT: ["Vendeur","Acheteur","Acheteur"], CFR: ["Vendeur","Acheteur","Acheteur"], CIP: ["Vendeur","Vendeur","Acheteur"], CIF: ["Vendeur","Vendeur","Acheteur"],
    DAP: ["Vendeur","Vendeur","Acheteur"], DPU: ["Vendeur","Vendeur","Acheteur"], DDP: ["Vendeur","Vendeur","Vendeur"]};
  function incoHint(){
    const c = $("f-incoterm").value, x = incoOf(c), el = $("inco-hint");
    document.querySelectorAll(".ichip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.ic === c)));
    $("inco-desc").innerHTML = x ? `<b class="mono">${x[0]}</b> â€” <span>${x[1]}</span>` : "<span>Non renseignÃ©</span>";
    if (!x) { el.textContent = "IncotermsÂ® 2020"; el.className = "hint"; return; }
    if (x[4] && $("f-mode").value === "air") { el.textContent = "Attention : cet Incoterm est rÃ©servÃ© au transport maritime."; el.className = "hint warn"; return; }
    el.className = "hint"; el.textContent = x[4] ? "Maritime et fluvial uniquement" : "Tous modes de transport";
  }
  document.querySelectorAll(".ichip").forEach(b => b.addEventListener("click", () => { if (!canWrite) {return;} $("f-incoterm").value = b.dataset.ic; incoHint(); valTotals(); }));
  $("f-mode").addEventListener("change", incoHint);

  /* ---------- aperÃ§u du dossier ---------- */
  let viewId = null;
  const kv = rows => `<dl class="kv">${rows.filter(r => r).map(([k, v, mono]) => `<dt>${k}</dt><dd${mono ? ' class="mono"' : ""}>${v === "" || v === null || v === undefined ? "â€”" : v}</dd>`).join("")}</dl>`;
  function renderView(id){
    const it = items.find(x => x.id === id); if (!it) { closePanels(); return; }
    const md = modeOf(it), si = Math.max(0, STATUTS.indexOf(it.statut)), dev = it.devise || "EUR";
    const cs = ctnOf(it), d = daysTo(it.eta), x = incoOf(it.incoterm), resp = INCO_RESP[it.incoterm];
    let dl = "";
    if (d !== null && !it.archive && si < 2) {dl = d < 0 ? ` <span class="d late">Retard ${-d} j</span>` : d === 0 ? " <span class=\"d soon\">Aujourd'hui</span>" : d <= 7 ? ` <span class="d soon">J-${d}</span>` : ` <span class="d ok">dans ${d} j</span>`;}
    const fob = fobOf(it), fr = num(it.fret), as = num(it.assurance), cif = fob + fr + as;
    const pct = v => cif ? (v / cif * 100).toFixed(2) + "%" : "0";
    const pay = it.paiement || "Non payÃ©";
    const prods = it.produits || [];
    const html = `
  <div class="vhead">
    <div class="top"><span class="mode m-${md}">${MODE_SHORT[md]}</span><span class="pill s${si}">${esc(it.statut)}</span><span class="pay p${Math.max(0, PAIEMENTS.indexOf(pay))}" style="margin:0">${esc(pay)}</span>${it.incoterm ? `<span class="inco" style="font-size:12px;padding:2px 7px">${esc(it.incoterm)}${it.incotermLieu ? " " + esc(it.incotermLieu) : ""}</span>` : ""}${it.exemple ? '<span class="tag-ex">exemple</span>' : ""}${it.archive ? '<span class="tag-ex">ArchivÃ©</span>' : ""}</div>
    <h3>${esc(it.ref)}</h3>
    <div class="sup">${esc(it.fournisseur)}${it.marchandise ? ` <span>Â· ${esc(it.marchandise)}</span>` : ""}</div>
    <div class="stepper${si === 4 ? " done" : ""}" aria-label="Avancement">${STATUTS.map((s, k) => `<div class="${k <= si ? "on" : ""}"><i></i><span class="${k === si ? "cur" : ""}">${s}</span></div>`).join("")}</div>
  </div>
  <div class="vgrid">
    <section class="vsec"><h4><span>Achat</span></h4>${kv([
    ["NÂ° PR", esc(it.pr), 1], ["NÂ° PO", esc(it.po), 1], ["Date du PO", it.poDate ? fmtDate(it.poDate) : "", 1],
    ["Fournisseur", esc(it.fournisseur)], ["Paiement fournisseur", esc(pay)], ["Devise", dev, 1],
    ["Incoterm", x ? `<b class="mono">${x[0]}</b> â€” <span>${x[1]}</span>` : "<span>Non renseignÃ©</span>"], ["Lieu Incoterm", esc(it.incotermLieu)]])}</section>
    <section class="vsec"><h4><span>Transport</span></h4>${kv([
    ["Mode de transport", MODES[md]], [md === "air" ? "AÃ©roport de dÃ©part" : "Port de chargement", esc(it.origine)],
    [md === "air" ? "Compagnie / nÂ° de vol" : "Navire / voyage", esc(it.navire)], [md === "air" ? "NÂ° LTA (AWB)" : md === "lcl" ? "NÂ° BL / HBL" : "NÂ° Bill of Lading", esc(it.bl), 1],
    [md === "air" ? "ETA aÃ©roport" : "ETA Douala", (it.eta ? `<span class="mono">${fmtDate(it.eta)}</span>` : "") + dl],
    ["Transitaire", esc(it.transitaire)], ["NÂ° dossier transitaire", esc(it.transitaireRef), 1], ["NÂ° DI", esc(it.di), 1], ["Date DI", it.diDate ? fmtDate(it.diDate) : "", 1], ["Date d'expiration DI", it.diExp ? `<span class="mono">${fmtDate(it.diExp)}</span> ${diBadge(it)}` : ""]])}</section>
    <section class="vsec"><h4><span>Valeur du dossier</span><span>${dev}</span></h4>
      <div class="cifbig"><span>Total CIF</span><b>${esc(money(cif, dev))}</b></div>
      <div class="vbar" role="img" aria-label="FOB Â· Fret Â· Assurance"><i style="width:${pct(fob)};background:var(--steel)"></i><i style="width:${pct(fr)};background:var(--brand-blue)"></i><i style="width:${pct(as)};background:var(--brand-orange)"></i></div>
      <div class="vleg"><span style="--c:var(--steel)">FOB</span><span style="--c:var(--brand-blue)">Fret</span><span style="--c:var(--brand-orange)">Assurance</span></div>
      ${kv([[it.incoterm ? `Montant facture (${it.incoterm})` : "Montant facture", factureOf(it) === "" ? "" : esc(money(factureOf(it), dev)), 1], num(it.fraisAvant) ? ["Frais jusqu'Ã  bord (Ã  ajouter)", esc(money(it.fraisAvant, dev)), 1] : null, num(it.fraisApres) ? ["Frais aprÃ¨s arrivÃ©e (inclus, Ã  dÃ©duire)", esc(money(it.fraisApres, dev)), 1] : null, ["Total FOB", esc(money(fob, dev)), 1], ["Fret", esc(money(fr, dev)), 1], ["Assurance", esc(money(as, dev)), 1],
    resp ? ["Fret payÃ© par", resp[0]] : null, resp ? ["Assurance payÃ©e par", resp[1]] : null, resp ? ["DÃ©douanement import", resp[2]] : null])}</section>
    <section class="vsec"><h4><span>${md === "fcl" ? "Conteneurs" : "Lot"}</span>${md === "fcl" ? `<span>${cs.length} ctn Â· ${teuOf(it)} EVP</span>` : ""}</h4>
      ${md === "fcl"
    ? (cs.length ? `<div class="chips" style="max-width:none">${cs.map(c => `<span class="chip" title="${isoValid(c.n) ? "Chiffre de contrÃ´le valide" : "Chiffre de contrÃ´le Ã  vÃ©rifier"}">${esc(c.n)}<i>${esc(c.t)}</i> ${isoValid(c.n) ? "âœ“" : "!"}</span>`).join("")}</div>` + kv([["Conteneurs 20' / 40'", `${cs.filter(c => TEU(c.t) === 1).length} / ${cs.filter(c => TEU(c.t) === 2).length}`, 1], ["EVP", teuOf(it), 1]]) : "<p class=\"note\" style=\"margin:0\">Aucun conteneur</p>")
    : kv([["Nombre de colis", nfmt(it.colis), 1], ["Poids brut (kg)", nfmt(it.poids, 2), 1], md === "lcl" ? ["Volume (mÂ³)", nfmt(it.volume, 3), 1] : ["Poids taxable (kg)", nfmt(it.taxable, 2), 1]])}
    </section>
    <section class="vsec wide"><h4><span>Produits</span><span>${prods.length}</span></h4>
      ${prods.length ? `<div style="overflow-x:auto"><table class="vtbl"><thead><tr><th>Code article</th><th>DÃ©signation</th><th>Code SH</th><th class="r">QuantitÃ©</th><th>UnitÃ©</th><th class="r">Prix unitaire</th><th class="r">Montant</th></tr></thead>
        <tbody>${prods.map(q => `<tr><td class="mono">${esc(q.code)}</td><td>${esc(q.des)}</td><td class="mono">${esc(q.hs)}</td><td class="r">${nfmt(q.qte, 3)}</td><td>${esc(q.u)}</td><td class="r">${esc(money(q.pu, ""))}</td><td class="r">${esc(money(lineAmt(q), ""))}</td></tr>`).join("")}</tbody>
        <tfoot><tr><td colspan="6">Montant total</td><td class="r">${esc(money(prodTotal(it), dev))}</td></tr></tfoot></table></div>` : "<p class=\"note\" style=\"margin:0\">Aucun produit</p>"}
    </section>
    <section class="vsec wide"><h4><span>Documents du dossier</span><span>${docCount(it)} / ${DOCS.length}</span></h4>
      <div class="vdocs">${DOCS.map(([k, _code, label]) => { const f = it.docs && it.docs[k];
    return `<div class="vdoc${f ? " has" : ""}"><span class="ic">${f ? "âœ“" : "â€”"}</span><span class="lb">${label}</span>${f ? `<a href="/_blob/${esc(f.id)}" data-file="${esc(f.id)}" data-name="${esc(f.name)}" target="_blank" rel="noopener">Ouvrir</a>` : "<span></span>"}</div>`; }).join("")}</div>
    </section>
    <section class="vsec wide"><h4><span>Notes</span></h4>${it.notes ? `<p class="vnotes">${esc(it.notes)}</p>` : "<p class=\"note\" style=\"margin:0\">Aucune note</p>"}</section>
  </div>
  <div class="vmeta">${it.creeLe ? `<span><span>CrÃ©Ã© le</span> ${fmtDate(it.creeLe.slice(0, 10))}</span>` : ""}${it.majLe ? `<span><span>Mis Ã  jour le</span> ${fmtDate(it.majLe.slice(0, 10))}</span>` : ""}${it.archiveLe ? `<span><span>ArchivÃ© le</span> ${fmtDate(it.archiveLe.slice(0, 10))}</span>` : ""}</div>`;
    $("view-body").innerHTML = html;
    $("v-edit").hidden = !canWrite;
  }
  function openView(id){ viewId = id; renderView(id); $("v-print").hidden = !STANDALONE; openPanel("p-view"); $("view-body").scrollTop = 0; }
  $("v-edit").addEventListener("click", () => { const id = viewId; $("p-view").hidden = true; viewId = null; openForm(id); });
  $("v-print").addEventListener("click", () => { try { window.print(); } catch {} });

  /* ---------- actions de ligne ---------- */
  document.addEventListener("click", async e => {
    const b = e.target.closest("[data-act]"); if (!b) {return;}
    const id = b.dataset.id, it = items.find(x => x.id === id);
    const a = b.dataset.act;
    try {
      if (a === "new") {openForm();}
      else if (a === "view") {openView(id);}
      else if (a === "inco") { incoEdit = id; incoDraft = {c: it.incoterm || "", l: it.incotermLieu || ""}; render(); setTimeout(() => $("ie-c")?.focus(), 30); }
      else if (a === "inco-cancel") { incoEdit = null; render(); }
      else if (a === "inco-save") {
        const c = $("ie-c").value, l = $("ie-l").value.trim();
        b.disabled = true;
        await save(id, strip({...it, incoterm: c, incotermLieu: l, majLe: new Date().toISOString()}));
        incoEdit = null; render(); toast("Incoterm enregistrÃ©");
      }
      else if (a === "edit") { $("p-view").hidden = true; viewId = null; openForm(id); }
      else if (a === "archive") { await save(id, strip({...it, archive: true, archiveLe: new Date().toISOString(), majLe: new Date().toISOString()})); toast(`${it.ref} archivÃ©`); }
      else if (a === "restore") { await save(id, strip({...it, archive: false, archiveLe: "", majLe: new Date().toISOString()})); toast(`${it.ref} restaurÃ©`); }
      else if (a === "del") { pendingConfirm = id; render(); }
      else if (a === "del-no") { pendingConfirm = null; render(); }
      else if (a === "del-yes") {
        pendingConfirm = null; await deleteDossier(id);
      }
    } catch { toast("Action impossible, rÃ©essayez."); }
  });
  const strip = o => { const {_id, ...rest} = o; return rest; };

  $("btn-new").addEventListener("click", () => openForm());
  ["actifs","archives"].forEach(v => $("tab-" + v).addEventListener("click", () => {
    view = v; pendingConfirm = null;
    $("tab-actifs").setAttribute("aria-selected", v === "actifs"); $("tab-archives").setAttribute("aria-selected", v === "archives");
    render();
  }));
  $("q").addEventListener("input", render); $("fstat").addEventListener("change", render); $("finco").addEventListener("change", render);

  /* ---------- rapport ---------- */
  function repSet(){
    const sc = $("r-scope").value, st = $("r-stat").value, fr = $("r-from").value, to = $("r-to").value;
    return items.filter(i => sc === "tous" || (sc === "archives") === !!i.archive)
      .filter(i => !st || i.statut === st)
      .filter(i => !$("r-mode").value || modeOf(i) === $("r-mode").value)
      .filter(i => !$("r-pay").value || (i.paiement || "Non payÃ©") === $("r-pay").value)
      .filter(i => (!fr || (dateOf(i) && dateOf(i) >= fr)) && (!to || (dateOf(i) && dateOf(i) <= to)))
      .sort((a, b) => String(a.eta || "9999").localeCompare(String(b.eta || "9999")));
  }
  function drawReport(){
    const s = repSet(); const allC = s.flatMap(ctnOf);
    $("r-dos").textContent = s.length; $("r-ctn").textContent = allC.length;
    $("r-teu").textContent = allC.reduce((a, c) => a + TEU(c.t), 0);
    const vals = DEVISES.map(d => { const g = s.filter(i => (i.devise || "EUR") === d); const f = g.reduce((a, i) => a + fobOf(i), 0), fr = g.reduce((a, i) => a + num(i.fret), 0), as = g.reduce((a, i) => a + num(i.assurance), 0); return [d, f, fr, as, f + fr + as]; }).filter(r => r[4]);
    $("r-byval").innerHTML = vals.map(([d, f, fr, as, c]) => `<tr><td>${d}</td><td class="r">${nfmt(f, 2)}</td><td class="r">${nfmt(fr, 2)}</td><td class="r">${nfmt(as, 2)}</td><td class="r"><b>${nfmt(c, 2)}</b></td></tr>`).join("") || "<tr><td colspan=\"5\" class=\"note\">Aucune valeur saisie</td></tr>";
    $("r-bymode").innerHTML = Object.keys(MODES).map(k => { const g = s.filter(i => modeOf(i) === k); if (!g.length) {return "";}
      const v = k === "fcl" ? `${g.reduce((a, i) => a + ctnOf(i).length, 0)} ctn` : k === "lcl" ? `${nfmt(g.reduce((a, i) => a + num(i.volume), 0), 3)} mÂ³` : `${nfmt(g.reduce((a, i) => a + num(i.poids), 0), 2)} kg`;
      return `<tr><td>${MODES[k]}</td><td class="mono">${g.length}</td><td>${v}</td></tr>`; }).join("") || "<tr><td colspan=\"3\" class=\"note\">Aucun dossier dans ce pÃ©rimÃ¨tre</td></tr>";
    $("r-bystat").innerHTML = STATUTS.map(st => { const g = s.filter(i => i.statut === st); return g.length ? `<tr><td>${st}</td><td class="mono">${g.length}</td><td>${g.reduce((a, i) => a + ctnOf(i).length, 0)}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"3\" class=\"note\">Aucun dossier dans ce pÃ©rimÃ¨tre</td></tr>";
    const bt = {}; allC.forEach(c => bt[c.t] = (bt[c.t] || 0) + 1);
    $("r-bytype").innerHTML = Object.entries(bt).map(([t, n]) => `<tr><td>${esc(t)}</td><td>${n}</td></tr>`).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun conteneur</td></tr>";
    const an = annualData();
    $("r-annual").innerHTML = an.years.map(y => `<tr><td class="mono">${y.label}</td><td class="r">${y.liv.n}</td><td class="r">${y.non.n}</td><td class="r">${y.liv.n + y.non.n ? Math.round(y.liv.n / (y.liv.n + y.non.n) * 100) : 0} %</td></tr>`).join("") || "<tr><td colspan=\"4\" class=\"note\">Aucun dossier</td></tr>";
    $("r-bydi").innerHTML = ["ExpirÃ©e", `Expire â‰¤ ${DI_ALERT} j`, "Valide", "ClÃ´turÃ©e (livrÃ©)", "Sans DI"].map(l => { const n = s.filter(i => diLabel(i) === l).length; return n ? `<tr><td>${l}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun dossier</td></tr>";
    $("r-byinco").innerHTML = [...INCOTERMS.map(x => x[0]), ""].map(c => { const n = s.filter(i => (i.incoterm || "") === c).length; return n ? `<tr><td>${c ? `<span class="inco">${c}</span>${incoOf(c)[1]}` : "Non renseignÃ©"}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun dossier</td></tr>";
    $("r-bypay").innerHTML = PAIEMENTS.map(p => { const n = s.filter(i => (i.paiement || "Non payÃ©") === p).length; return n ? `<tr><td>${p}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun dossier</td></tr>";
    $("r-bydoc").innerHTML = DOCS.map(([k, , label]) => { const n = s.filter(i => !(i.docs && i.docs[k])).length; return n ? `<tr><td>${label}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Tous les documents sont joints</td></tr>";
    drawPreview();
  }
  $("r-base").addEventListener("change", () => { const t = $("r-base").value === "po" ? "PO" : "ETA"; $("l-from").textContent = `${t} du`; $("l-to").textContent = `${t} au`; });
  ["r-scope","r-stat","r-mode","r-pay","r-from","r-to","r-base","r-view"].forEach(id => $(id).addEventListener("input", drawReport));
  $("btn-report").addEventListener("click", () => { $("r-scope").value = view; drawReport(); openPanel("p-report"); });

  const pad = n => String(n).padStart(2, "0");
  const _stamp = () => new Date().toISOString().slice(0, 10);
  const nowParts = () => { const d = new Date(); return {d, txt: `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} Ã  ${pad(d.getHours())}:${pad(d.getMinutes())}`, file: `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}h${pad(d.getMinutes())}`}; };  const utc = d => d ? new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) : null;
  const xDate = iso => iso ? utc(new Date(iso.slice(0, 10) + "T00:00:00")) : null;
  const xNum = v => (v === "" || v === null || v === undefined) ? null : num(v);

  /* ---------- pÃ©riodes ---------- */
  const MOIS = ["Janv.","FÃ©vr.","Mars","Avr.","Mai","Juin","Juil.","AoÃ»t","Sept.","Oct.","Nov.","DÃ©c."];
  const baseLabel = () => $("r-base").value === "po" ? "Date du PO" : "ETA";
  const dateOf = i => $("r-base").value === "po" ? (i.poDate || "") : (i.eta || "");
  function isoWeek(dt){
    const d = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    const day = d.getUTCDay() || 7; d.setUTCDate(d.getUTCDate() + 4 - day);
    const y = d.getUTCFullYear(); const w = Math.ceil(((d - Date.UTC(y, 0, 1)) / 864e5 + 1) / 7);
    return {y, w};
  }
  const mondayOf = dt => { const d = new Date(dt); d.setHours(0,0,0,0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d; };
  function periods(s, kind){
    const dated = s.filter(i => dateOf(i));
    const undated = s.filter(i => !dateOf(i));
    const out = [];
    if (dated.length) {
      const ds = dated.map(i => new Date(dateOf(i) + "T00:00:00")).sort((a, b) => a - b);
      if (kind === "mois") {
        for (let d = new Date(ds[0].getFullYear(), ds[0].getMonth(), 1); d <= ds[ds.length - 1]; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
          const k = `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
          out.push({key: k, label: `${MOIS[d.getMonth()]} ${d.getFullYear()}`, start: new Date(d), end: new Date(d.getFullYear(), d.getMonth() + 1, 0), items: dated.filter(i => dateOf(i).startsWith(k))});
        }
      } else {
        for (let d = mondayOf(ds[0]); d <= ds[ds.length - 1]; d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7)) {
          const {y, w} = isoWeek(d); const end = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 6);
          const a = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`, b = `${end.getFullYear()}-${pad(end.getMonth()+1)}-${pad(end.getDate())}`;
          out.push({key: `${y}-S${pad(w)}`, label: `S${pad(w)} ${y}`, start: new Date(d), end, items: dated.filter(i => dateOf(i) >= a && dateOf(i) <= b)});
        }
      }
    }
    if (undated.length) {out.push({key: "zz", label: "Sans date", start: null, end: null, items: undated});}
    return out;
  }
  const devisesIn = s => DEVISES.filter(d => s.some(i => (i.devise || "EUR") === d && cifOf(i)));
  function metrics(g, devs){
    const c = g.flatMap(ctnOf);
    const m = {
      dos: g.length, fcl: g.filter(i => modeOf(i) === "fcl").length, lcl: g.filter(i => modeOf(i) === "lcl").length, air: g.filter(i => modeOf(i) === "air").length,
      c20: c.filter(x => TEU(x.t) === 1).length, c40: c.filter(x => TEU(x.t) === 2).length, evp: c.reduce((a, x) => a + TEU(x.t), 0),
      m3: g.filter(i => modeOf(i) === "lcl").reduce((a, i) => a + num(i.volume), 0),
      kg: g.filter(i => modeOf(i) === "air").reduce((a, i) => a + num(i.poids), 0),
      livres: g.filter(i => i.statut === "LivrÃ©").length, v: {}
    };
    devs.forEach(d => { const h = g.filter(i => (i.devise || "EUR") === d); const f = h.reduce((a, i) => a + fobOf(i), 0), fr = h.reduce((a, i) => a + num(i.fret), 0), as = h.reduce((a, i) => a + num(i.assurance), 0); m.v[d] = {fob: f, fret: fr, ass: as, cif: f + fr + as}; });
    return m;
  }

  /* ---------- graphiques (canvas) ---------- */
  const CH = {blue: "#0c9dd6", orange: "#eb4e1b", steel: "#0a6d98", amber: "#d39200", green: "#1f7a4d", grey: "#8a9aa3"};
  function niceMax(v){ if (v <= 0) {return 1;} const p = Math.pow(10, Math.floor(Math.log10(v))); const n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }
  const short = v => Math.abs(v) >= 1e6 ? (v / 1e6).toLocaleString(LOC(), {maximumFractionDigits: 1}) + " M" : Math.abs(v) >= 1e4 ? (v / 1e3).toLocaleString(LOC(), {maximumFractionDigits: 0}) + " k" : v.toLocaleString(LOC(), {maximumFractionDigits: 1});
  function chart(o){
  // o: {title, labels, series:[{name,color,values}], stacked, horizontal, w, h, pal}
    const W = o.w || 760, H = o.h || 380, S = 2;
    const pal = Object.assign({bg: "#ffffff", fg: "#16222a", muted: "#5b6b75", grid: "#e3e9ec"}, o.pal || {});
    const cv = document.createElement("canvas"); cv.width = W * S; cv.height = H * S;
    const x = cv.getContext("2d"); x.scale(S, S);
    x.fillStyle = pal.bg; x.fillRect(0, 0, W, H);
    const font = (w, sz) => `${w} ${sz}px "IBM Plex Sans", "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", Arial, sans-serif`;
    x.fillStyle = pal.fg; x.font = font(600, 15); x.textBaseline = "top"; x.fillText(tr(o.title), 16, 14);
    // lÃ©gende
    let lx = 16; const ly = 38;
    if (o.series.length > 1) {o.series.forEach(se => { x.fillStyle = se.color; x.fillRect(lx, ly + 2, 10, 10); x.fillStyle = pal.muted; x.font = font(400, 12); x.fillText(tr(se.name), lx + 14, ly); lx += 14 + x.measureText(tr(se.name)).width + 16; });}
    const n = o.labels.length;
    const totals = o.labels.map((_, k) => o.stacked ? o.series.reduce((a, se) => a + (se.values[k] || 0), 0) : Math.max(0, ...o.series.map(se => se.values[k] || 0)));
    const max = niceMax(Math.max(0, ...totals));
    if (!n || !totals.some(v => v > 0)) { x.fillStyle = pal.muted; x.font = font(400, 13); x.fillText(tr("Aucune donnÃ©e sur la pÃ©riode"), 16, H / 2); return cv; }
    x.font = font(400, 11);
    if (o.horizontal) {
      const labW = Math.min(220, Math.max(...o.labels.map(l => x.measureText(tr(l)).width)) + 12);
      const L = 16 + labW, R = W - 60, T = o.series.length > 1 ? 62 : 46, B = H - 26;
      const rowH = (B - T) / n, bh = Math.min(26, rowH * 0.62);
      for (let t = 0; t <= 4; t++) { const gx = L + (R - L) * t / 4; x.strokeStyle = pal.grid; x.lineWidth = 1; x.beginPath(); x.moveTo(gx, T); x.lineTo(gx, B); x.stroke(); x.fillStyle = pal.muted; x.textAlign = "center"; x.fillText(short(max * t / 4), gx, B + 6); }
      o.labels.forEach((lab, k) => {
        const cy = T + rowH * k + rowH / 2; x.fillStyle = pal.fg; x.textAlign = "right"; x.textBaseline = "middle"; x.fillText(tr(lab), L - 8, cy);
        let acc = 0; o.series.forEach(se => { const v = se.values[k] || 0; const w = (R - L) * v / max; x.fillStyle = se.color; x.fillRect(L + (R - L) * acc / max, cy - bh / 2, w, bh); acc += v; });
        x.fillStyle = pal.fg; x.textAlign = "left"; x.font = font(600, 11); x.fillText(short(totals[k]), L + (R - L) * totals[k] / max + 6, cy); x.font = font(400, 11);
      });
      x.textBaseline = "top"; x.textAlign = "left"; return cv;
    }
    const L = 54, R = W - 16, T = o.series.length > 1 ? 64 : 48;
    const rot = n > 8;
    const B = H - (rot ? 58 : 30);
    for (let t = 0; t <= 4; t++) { const gy = B - (B - T) * t / 4; x.strokeStyle = pal.grid; x.lineWidth = 1; x.beginPath(); x.moveTo(L, gy); x.lineTo(R, gy); x.stroke(); x.fillStyle = pal.muted; x.textAlign = "right"; x.textBaseline = "middle"; x.fillText(short(max * t / 4), L - 8, gy); }
    const slot = (R - L) / n, groups = o.stacked ? 1 : o.series.length;
    const bw = Math.min(46, slot * 0.7) / groups;
    const every = Math.max(1, Math.ceil(n / 26));
    o.labels.forEach((lab, k) => {
      const cx = L + slot * k + slot / 2; let acc = 0;
      o.series.forEach((se, j) => {
        const v = se.values[k] || 0, h = (B - T) * v / max;
        x.fillStyle = se.color;
        if (o.stacked) { x.fillRect(cx - bw / 2, B - (B - T) * acc / max - h, bw, h); acc += v; }
        else {x.fillRect(cx - bw * groups / 2 + bw * j, B - h, bw - 1, h);}
      });
      if (totals[k] > 0 && n <= 18) { x.fillStyle = pal.fg; x.font = font(600, 10.5); x.textAlign = "center"; x.textBaseline = "bottom"; x.fillText(short(totals[k]), cx, B - (B - T) * totals[k] / max - 3); x.font = font(400, 11); }
      if (k % every === 0) {
        x.fillStyle = pal.muted; x.textBaseline = "top";
        if (rot) { x.save(); x.translate(cx, B + 6); x.rotate(-Math.PI / 4); x.textAlign = "right"; x.fillText(tr(lab), 0, 0); x.restore(); }
        else { x.textAlign = "center"; x.fillText(tr(lab), cx, B + 7); }
      }
    });
    x.strokeStyle = pal.muted; x.beginPath(); x.moveTo(L, B + .5); x.lineTo(R, B + .5); x.stroke();
    x.textAlign = "left"; x.textBaseline = "top"; return cv;
  }
  function chartSet(s){
    const devs = devisesIn(s);
    const pm = periods(s, "mois").filter(p => p.key !== "zz"), pw = periods(s, "sem").filter(p => p.key !== "zz");
    const mm = pm.map(p => metrics(p.items, devs)), mw = pw.map(p => metrics(p.items, devs));
    const wk = pw.slice(-26), wkm = mw.slice(-26);
    const main = devs.slice().sort((a, b) => metrics(s, devs).v[b].cif - metrics(s, devs).v[a].cif)[0];
    const B = baseLabel();
    const list = [
      {title: `Dossiers par mois (${B}) et par transport`, labels: pm.map(p => p.label), stacked: true, series: [
        {name: "Maritime FCL", color: CH.steel, values: mm.map(m => m.fcl)}, {name: "LCL", color: CH.amber, values: mm.map(m => m.lcl)}, {name: "AÃ©rien", color: CH.orange, values: mm.map(m => m.air)}]},
      {title: `Conteneurs par mois (${B})`, labels: pm.map(p => p.label), stacked: true, series: [
        {name: "20'", color: CH.blue, values: mm.map(m => m.c20)}, {name: "40'", color: CH.steel, values: mm.map(m => m.c40)}]},
      {title: `Dossiers par semaine (${B})${pw.length > 26 ? " â€” 26 derniÃ¨res semaines" : ""}`, labels: wk.map(p => p.label), stacked: true, series: [
        {name: "Maritime FCL", color: CH.steel, values: wkm.map(m => m.fcl)}, {name: "LCL", color: CH.amber, values: wkm.map(m => m.lcl)}, {name: "AÃ©rien", color: CH.orange, values: wkm.map(m => m.air)}]},
      {title: `EVP par semaine (${B})${pw.length > 26 ? " â€” 26 derniÃ¨res semaines" : ""}`, labels: wk.map(p => p.label), series: [{name: "EVP", color: CH.blue, values: wkm.map(m => m.evp)}]},
    ];
    if (main) {list.push({title: `Valeur CIF par mois (${main})`, labels: pm.map(p => p.label), stacked: true, series: [
      {name: "FOB", color: CH.steel, values: mm.map(m => m.v[main].fob)}, {name: "Fret", color: CH.blue, values: mm.map(m => m.v[main].fret)}, {name: "Assurance", color: CH.orange, values: mm.map(m => m.v[main].ass)}]});}
    list.push({title: "Dossiers par statut", labels: STATUTS, horizontal: true, series: [{name: "Dossiers", color: CH.steel, values: STATUTS.map(st => s.filter(i => i.statut === st).length)}]});
    list.push({title: "Paiement fournisseur", labels: PAIEMENTS, horizontal: true, series: [{name: "Dossiers", color: CH.orange, values: PAIEMENTS.map(p => s.filter(i => (i.paiement || "Non payÃ©") === p).length)}]});
    return list;
  }

  /* ---------- classeur Excel (ExcelJS) ---------- */
  const XC = {head: "FF0A6D98", headTxt: "FFFFFFFF", band: "FFEAF4F9", tot: "FFFDE5DA", line: "FFD3DEE4", title: "FF0A6D98", orange: "FFEB4E1B", muted: "FF5B6B75"};
  const F_INT = "#,##0", F_DEC = "#,##0.00", F_DATE = "dd/mm/yyyy", F_M3 = "#,##0.000";
  function titleBlock(ws, title, meta, ncol){
    ws.mergeCells(1, 1, 1, Math.max(2, ncol));
    const c = ws.getCell(1, 1); c.value = `AFRILUX SMART â€” ${tr(title)}`; c.font = {bold: true, size: 14, color: {argb: XC.title}};
    ws.getRow(1).height = 24;
    ws.getCell(2, 1).value = `${tr("Extrait le")} ${tr(meta.txt)}`; ws.getCell(2, 1).font = {color: {argb: XC.orange}, bold: true};
    ws.getCell(3, 1).value = meta.filtres; ws.getCell(3, 1).font = {color: {argb: XC.muted}, size: 9};
  }
  function table(ws, r0, cols, rows, opt = {}){
    const hr = ws.getRow(r0);
    cols.forEach((c, j) => {
      const cell = hr.getCell(j + 1); cell.value = tr(c.h);
      cell.font = {bold: true, color: {argb: XC.headTxt}}; cell.fill = {type: "pattern", pattern: "solid", fgColor: {argb: XC.head}};
      cell.alignment = {vertical: "middle", wrapText: true, horizontal: c.f ? "right" : "left"};
      cell.border = {bottom: {style: "thin", color: {argb: XC.head}}};
      if (!opt.keepWidths && c.w) {ws.getColumn(j + 1).width = Math.max(ws.getColumn(j + 1).width || 0, c.w);}
    });
    hr.height = 30;
    rows.forEach((row, i) => {
      const r = ws.getRow(r0 + 1 + i);
      row.forEach((v, j) => {
        const cell = r.getCell(j + 1); cell.value = v === "" ? null : typeof v === "string" ? tr(v) : v;
        const f = cols[j] && cols[j].f; if (f) {cell.numFmt = f;}
        cell.border = {bottom: {style: "hair", color: {argb: XC.line}}};
        if (i % 2) {cell.fill = {type: "pattern", pattern: "solid", fgColor: {argb: XC.band}};}
      });
    });
    let end = r0 + rows.length;
    if (opt.totals && rows.length) {
      end++;
      const r = ws.getRow(end);
      cols.forEach((c, j) => {
        const cell = r.getCell(j + 1);
        if (j === 0) {cell.value = tr("TOTAL");}
        else if (opt.totals.includes(j)) { const L = ws.getColumn(j + 1).letter; cell.value = {formula: `SUBTOTAL(9,${L}${r0 + 1}:${L}${r0 + rows.length})`}; cell.numFmt = c.f || F_INT; }
        cell.font = {bold: true}; cell.fill = {type: "pattern", pattern: "solid", fgColor: {argb: XC.tot}};
        cell.border = {top: {style: "thin", color: {argb: XC.head}}};
      });
    }
    if (opt.filter !== false && rows.length) {ws.autoFilter = {from: {row: r0, column: 1}, to: {row: r0 + rows.length, column: cols.length}};}
    return end;
  }
  function sheetWithTable(wb, name, title, meta, cols, rows, opt){
    const ws = wb.addWorksheet(tr(name), {views: [{state: "frozen", ySplit: 5, xSplit: opt && opt.xSplit || 0}], pageSetup: {orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
    titleBlock(ws, title, meta, Math.min(cols.length, 8));
    table(ws, 5, cols, rows, opt);
    return ws;
  }
  function periodSheet(wb, name, title, meta, s, kind){
    const devs = devisesIn(s);
    const ps = periods(s, kind);
    const cols = [
      {h: kind === "mois" ? "Mois" : "Semaine", w: 13}, {h: "Du", w: 11, f: F_DATE}, {h: "Au", w: 11, f: F_DATE},
      {h: "Dossiers", w: 9, f: F_INT}, {h: "Maritime FCL", w: 10, f: F_INT}, {h: "LCL", w: 7, f: F_INT}, {h: "AÃ©rien", w: 8, f: F_INT},
      {h: "Ctn 20'", w: 8, f: F_INT}, {h: "Ctn 40'", w: 8, f: F_INT}, {h: "EVP", w: 7, f: F_INT},
      {h: "Volume LCL (mÂ³)", w: 11, f: F_M3}, {h: "Poids aÃ©rien (kg)", w: 12, f: F_DEC}, {h: "LivrÃ©s", w: 8, f: F_INT},
      ...devs.flatMap(d => [{h: `FOB ${d}`, w: 14, f: F_DEC}, {h: `Fret ${d}`, w: 12, f: F_DEC}, {h: `Assurance ${d}`, w: 12, f: F_DEC}, {h: `CIF ${d}`, w: 14, f: F_DEC}])
    ];
    const rows = ps.map(p => { const m = metrics(p.items, devs); return [p.label, utc(p.start), utc(p.end), m.dos, m.fcl, m.lcl, m.air, m.c20, m.c40, m.evp, +m.m3.toFixed(3), +m.kg.toFixed(2), m.livres,
      ...devs.flatMap(d => [+m.v[d].fob.toFixed(2), +m.v[d].fret.toFixed(2), +m.v[d].ass.toFixed(2), +m.v[d].cif.toFixed(2)])]; });
    const ws = wb.addWorksheet(tr(name), {views: [{state: "frozen", ySplit: 5, xSplit: 1}], pageSetup: {orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
    titleBlock(ws, title, meta, 10);
    table(ws, 5, cols, rows, {totals: cols.map((_, j) => j).filter(j => j >= 3)});
    // dÃ©tail : dossiers par pÃ©riode
    let r = 5 + rows.length + 3;
    ws.getCell(r, 1).value = tr(`DÃ©tail des dossiers par ${kind === "mois" ? "mois" : "semaine"} (${baseLabel()})`); ws.getCell(r, 1).font = {bold: true, size: 12, color: {argb: XC.title}};
    r += 1;
    const dcols = [{h: kind === "mois" ? "Mois" : "Semaine"}, {h: baseLabel(), f: F_DATE}, {h: "NÂ° dossier"}, {h: "Transport"}, {h: "Fournisseur"}, {h: "NÂ° PO"}, {h: "Statut"}, {h: "Paiement"}, {h: "Ctn / colis", f: F_INT}, {h: "Devise"}, {h: "CIF", f: F_DEC}];
    const drows = ps.flatMap(p => p.items.slice().sort((a, b) => String(dateOf(a)).localeCompare(String(dateOf(b)))).map(i => [p.label, xDate(dateOf(i)), i.ref, MODE_SHORT[modeOf(i)], i.fournisseur, i.po || "", i.statut, i.paiement || "Non payÃ©", modeOf(i) === "fcl" ? ctnOf(i).length : xNum(i.colis), i.devise || "EUR", +cifOf(i).toFixed(2)]));
    table(ws, r, dcols, drows, {filter: false, keepWidths: true});
    [5, 6, 7, 8].forEach(c => { if ((ws.getColumn(c).width || 0) < 14) {ws.getColumn(c).width = 14;} });
    return ws;
  }
  async function buildWorkbook(){
    const s = repSet(), np = nowParts();
    const fr = $("r-from").value, to = $("r-to").value;
    const sep = LANG === "zh" ? "ï¼š" : LANG === "en" ? ": " : " : ";
    const filtres = [[T("PÃ©rimÃ¨tre"), $("r-scope").selectedOptions[0].text], [T("Transport"), $("r-mode").selectedOptions[0].text], [T("Statut"), $("r-stat").selectedOptions[0].text], [T("Paiement"), $("r-pay").selectedOptions[0].text], [T("PÃ©riodes selon"), T(baseLabel())]]
      .map(([a, b]) => a + sep + b).join(" Â· ") + (fr || to ? ` Â· ${T("du")} ${fr ? fmtDate(fr) : "â€¦"} ${T("au")} ${to ? fmtDate(to) : "â€¦"}` : "");
    const meta = {txt: np.txt, filtres};
    const wb = new ExcelJS.Workbook();
    wb.creator = "Afrilux Smart â€” Suivi Import"; wb.company = "Afrilux Smart"; wb.created = np.d; wb.title = "Rapport Suivi Import";
    const devs = devisesIn(s);
    const all = metrics(s, devs);

    // 1. SynthÃ¨se
    const ws = wb.addWorksheet(tr("SynthÃ¨se"), {views: [{showGridLines: false}], pageSetup: {orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
    ws.getColumn(1).width = 34; [2, 3, 4, 5].forEach(c => ws.getColumn(c).width = 17);
    const logo = document.querySelector(".plate img")?.src || "";
    ws.getRow(1).height = 22; ws.getRow(2).height = 22;
    if (logo.startsWith("data:image/png")) {ws.addImage(wb.addImage({base64: logo, extension: "png"}), {tl: {col: 0, row: 0}, ext: {width: 106, height: 82}});}
    const t = ws.getCell("B1"); t.value = "AFRILUX SMART"; t.font = {bold: true, size: 11, color: {argb: XC.orange}};
    ws.getCell("B2").value = tr("Rapport de suivi des importations"); ws.getCell("B2").font = {bold: true, size: 16, color: {argb: XC.title}};
    ws.getCell("B3").value = `${tr("Extrait le")} ${tr(np.txt)}`; ws.getCell("B3").font = {color: {argb: XC.muted}};
    ws.mergeCells("A6:E6"); ws.getCell("A6").value = filtres; ws.getCell("A6").font = {size: 9, color: {argb: XC.muted}}; ws.getCell("A6").alignment = {wrapText: true}; ws.getRow(6).height = 30;
    let r = 8;
    const block = (title, cols, rows) => { ws.getCell(r, 1).value = tr(title); ws.getCell(r, 1).font = {bold: true, size: 12, color: {argb: XC.title}}; r = table(ws, r + 1, cols, rows, {filter: false, keepWidths: true}) + 2; };
    block("Indicateurs clÃ©s", [{h: "Indicateur"}, {h: "Valeur", f: F_INT}], [
      ["Dossiers", all.dos], ["dont maritime FCL", all.fcl], ["dont LCL (groupage)", all.lcl], ["dont aÃ©rien", all.air],
      ["Conteneurs 20'", all.c20], ["Conteneurs 40'", all.c40], ["Total EVP", all.evp],
      ["Volume LCL (mÂ³)", +all.m3.toFixed(3)], ["Poids aÃ©rien (kg)", +all.kg.toFixed(2)], ["Dossiers livrÃ©s", all.livres]]);
    ws.getCell(r - 4, 2).numFmt = F_M3; ws.getCell(r - 3, 2).numFmt = F_DEC;
    if (devs.length) {block("Valeurs par devise", [{h: "Devise"}, {h: "FOB", f: F_DEC}, {h: "Fret", f: F_DEC}, {h: "Assurance", f: F_DEC}, {h: "Total CIF", f: F_DEC}],
      devs.map(d => [d, +all.v[d].fob.toFixed(2), +all.v[d].fret.toFixed(2), +all.v[d].ass.toFixed(2), +all.v[d].cif.toFixed(2)]));}
    block("Par statut", [{h: "Statut"}, {h: "Dossiers", f: F_INT}, {h: "Conteneurs", f: F_INT}], STATUTS.map(st => { const g = s.filter(i => i.statut === st); return [st, g.length, g.reduce((a, i) => a + ctnOf(i).length, 0)]; }));
    block("Par Incoterm", [{h: "Incoterm"}, {h: "Dossiers", f: F_INT}], [...INCOTERMS.map(x => [`${x[0]} â€” ${x[1]}`, s.filter(i => i.incoterm === x[0]).length]).filter(r => r[1]), ["Non renseignÃ©", s.filter(i => !i.incoterm).length]].filter(r => r[1]));
    block("Paiement fournisseur", [{h: "Statut"}, {h: "Dossiers", f: F_INT}], PAIEMENTS.map(p => [p, s.filter(i => (i.paiement || "Non payÃ©") === p).length]));
    block("Documents manquants", [{h: "Document"}, {h: "Dossiers", f: F_INT}], DOCS.map(([k, , l]) => [l, s.filter(i => !(i.docs && i.docs[k])).length]));

    // Rapport annuel des PO
    annualSheets(wb, meta);
    // 2-3. Par mois / par semaine
    periodSheet(wb, "Par mois", `ACTIVITÃ‰ PAR MOIS (${baseLabel().toUpperCase()})`, meta, s, "mois");
    periodSheet(wb, "Par semaine", `ACTIVITÃ‰ PAR SEMAINE ISO (${baseLabel().toUpperCase()})`, meta, s, "sem");

    // 4. Graphiques
    const wg = wb.addWorksheet(tr("Graphiques"), {views: [{showGridLines: false}], pageSetup: {orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
    titleBlock(wg, "GRAPHIQUES", meta, 12);
    for (let c = 1; c <= 22; c++) {wg.getColumn(c).width = 9.5;}
    chartSet(s).forEach((o, k) => {
      const cv = chart(Object.assign({w: 760, h: 380}, o));
      const id = wb.addImage({base64: cv.toDataURL("image/png"), extension: "png"});
      wg.addImage(id, {tl: {col: (k % 2) * 11, row: 5 + Math.floor(k / 2) * 21}, ext: {width: 700, height: 350}});
    });

    // Suivi des DI
    sheetWithTable(wb, "Suivi DI", "SUIVI DES DÃ‰CLARATIONS D'IMPORTATION (DI)", meta, [
      {h: "NÂ° dossier", w: 15}, {h: "NÂ° DI", w: 18}, {h: "Date DI", w: 11, f: F_DATE}, {h: "Date d'expiration DI", w: 13, f: F_DATE}, {h: "Jours restants", w: 10, f: F_INT},
      {h: "Ã‰tat DI", w: 14}, {h: "Statut", w: 18}, {h: "Fournisseur", w: 26}, {h: "NÂ° PO", w: 16}, {h: "Transport", w: 22}, {h: "ETA", w: 11, f: F_DATE}, {h: "Transitaire", w: 20}],
    s.filter(i => i.di || i.diExp || i.diDate).slice().sort((a, b) => String(a.diExp || "9999").localeCompare(String(b.diExp || "9999"))).map(i => [
      i.ref, i.di || "", xDate(i.diDate), xDate(i.diExp), i.diExp ? daysTo(i.diExp) : null, diLabel(i), i.statut, i.fournisseur, i.po || "", MODES[modeOf(i)], xDate(i.eta), i.transitaire || ""]),
    {xSplit: 1});
    // 5. Dossiers
    sheetWithTable(wb, "Dossiers", "DOSSIERS D'IMPORT", meta, [
      {h: "NÂ° dossier", w: 15}, {h: "Transport", w: 22}, {h: "Statut", w: 16}, {h: "Mois", w: 11}, {h: "Semaine", w: 11}, {h: "NÂ° PR", w: 14}, {h: "NÂ° PO", w: 16}, {h: "Date PO", w: 11, f: F_DATE},
      {h: "Fournisseur", w: 26}, {h: "Paiement fournisseur", w: 15}, {h: "Devise", w: 8}, {h: "Incoterm", w: 9}, {h: "Lieu Incoterm", w: 16}, {h: "Montant facture", w: 15, f: F_DEC}, {h: "Nb produits", w: 9, f: F_INT}, {h: "Valeur produits", w: 14, f: F_DEC},
      {h: "Total FOB", w: 14, f: F_DEC}, {h: "Fret", w: 12, f: F_DEC}, {h: "Assurance", w: 12, f: F_DEC}, {h: "Total CIF", w: 14, f: F_DEC},
      {h: "Marchandise", w: 22}, {h: "Origine", w: 16}, {h: "Navire / Vol", w: 22}, {h: "NÂ° BL / LTA", w: 18}, {h: "ETA", w: 11, f: F_DATE},
      {h: "Transitaire", w: 20}, {h: "NÂ° dossier transitaire", w: 16}, {h: "NÂ° DI", w: 16}, {h: "Date DI", w: 11, f: F_DATE}, {h: "Date d'expiration DI", w: 13, f: F_DATE}, {h: "Ã‰tat DI", w: 14}, {h: "Nb 20'", w: 7, f: F_INT}, {h: "Nb 40'", w: 7, f: F_INT}, {h: "EVP", w: 6, f: F_INT},
      {h: "Colis", w: 8, f: F_INT}, {h: "Poids (kg)", w: 11, f: F_DEC}, {h: "Volume (mÂ³)", w: 11, f: F_M3}, {h: "Poids taxable (kg)", w: 12, f: F_DEC},
      {h: "NÂ° conteneurs", w: 40}, {h: "Docs joints", w: 9}, {h: "ArchivÃ©", w: 8}, {h: "ArchivÃ© le", w: 11, f: F_DATE}, {h: "Notes", w: 30}],
    s.map(i => { const c = ctnOf(i), fcl = modeOf(i) === "fcl", d = dateOf(i), dt = d ? new Date(d + "T00:00:00") : null, w = dt ? isoWeek(dt) : null;
      return [i.ref, MODES[modeOf(i)], i.statut, dt ? `${MOIS[dt.getMonth()]} ${dt.getFullYear()}` : "", w ? `S${pad(w.w)} ${w.y}` : "", i.pr || "", i.po || "", xDate(i.poDate),
        i.fournisseur, i.paiement || "Non payÃ©", i.devise || "EUR", i.incoterm || "", i.incotermLieu || "", factureOf(i) === "" ? null : +num(factureOf(i)).toFixed(2), (i.produits || []).length, +prodTotal(i).toFixed(2),
        +fobOf(i).toFixed(2), +num(i.fret).toFixed(2), +num(i.assurance).toFixed(2), +cifOf(i).toFixed(2),
        i.marchandise || "", i.origine || "", i.navire || "", i.bl || "", xDate(i.eta), i.transitaire || "", i.transitaireRef || "", i.di || "", xDate(i.diDate), xDate(i.diExp), diLabel(i),
        fcl ? c.filter(x => TEU(x.t) === 1).length : null, fcl ? c.filter(x => TEU(x.t) === 2).length : null, fcl ? teuOf(i) : null,
        xNum(i.colis), xNum(i.poids), xNum(i.volume), xNum(i.taxable), c.map(x => x.n).join(", "), `${docCount(i)}/${DOCS.length}`, i.archive ? "Oui" : "Non", i.archiveLe ? xDate(i.archiveLe.slice(0, 10)) : null, i.notes || ""]; }),
    {xSplit: 1, totals: [14, 31, 32, 33, 34, 35, 36, 37]});
    // 6. Produits
    sheetWithTable(wb, "Produits", "PRODUITS", meta, [
      {h: "NÂ° dossier", w: 15}, {h: "NÂ° PO", w: 16}, {h: "Fournisseur", w: 26}, {h: "Transport", w: 10}, {h: "Code article", w: 14}, {h: "DÃ©signation", w: 36}, {h: "Code SH", w: 12},
      {h: "QuantitÃ©", w: 10, f: F_DEC}, {h: "UnitÃ©", w: 8}, {h: "Prix unitaire", w: 13, f: F_DEC}, {h: "Montant", w: 14, f: F_DEC}, {h: "Devise", w: 8}, {h: "ETA", w: 11, f: F_DATE}, {h: "Statut", w: 16}, {h: "ArchivÃ©", w: 8}],
    s.flatMap(i => (i.produits || []).map(p => [i.ref, i.po || "", i.fournisseur, MODE_SHORT[modeOf(i)], p.code || "", p.des || "", p.hs || "", xNum(p.qte), p.u || "", xNum(p.pu), +lineAmt(p).toFixed(2), i.devise || "EUR", xDate(i.eta), i.statut, i.archive ? "Oui" : "Non"])),
    {xSplit: 1});
    // 7. Conteneurs
    sheetWithTable(wb, "Conteneurs", "CONTENEURS (MARITIME FCL)", meta, [
      {h: "NÂ° conteneur", w: 15}, {h: "Type", w: 7}, {h: "EVP", w: 6, f: F_INT}, {h: "ContrÃ´le ISO 6346", w: 14}, {h: "NÂ° dossier", w: 15}, {h: "NÂ° PO", w: 16}, {h: "Fournisseur", w: 26},
      {h: "Navire", w: 22}, {h: "NÂ° Bill of Lading", w: 18}, {h: "NÂ° dossier transitaire", w: 16}, {h: "ETA", w: 11, f: F_DATE}, {h: "Statut", w: 16}, {h: "ArchivÃ©", w: 8}],
    s.flatMap(i => ctnOf(i).map(c => [c.n, c.t, TEU(c.t), isoValid(c.n) ? "OK" : "Ã€ vÃ©rifier", i.ref, i.po || "", i.fournisseur, i.navire || "", i.bl || "", i.transitaireRef || "", xDate(i.eta), i.statut, i.archive ? "Oui" : "Non"])),
    {xSplit: 1, totals: [2]});
    // 8. LCL & aÃ©rien
    sheetWithTable(wb, "Groupage & aÃ©rien", "GROUPAGE LCL & FRET AÃ‰RIEN", meta, [
      {h: "NÂ° dossier", w: 15}, {h: "Transport", w: 22}, {h: "NÂ° BL / LTA", w: 18}, {h: "Navire / Vol", w: 22}, {h: "Origine", w: 16}, {h: "Colis", w: 8, f: F_INT},
      {h: "Poids (kg)", w: 11, f: F_DEC}, {h: "Volume (mÂ³)", w: 11, f: F_M3}, {h: "Poids taxable (kg)", w: 13, f: F_DEC}, {h: "Fournisseur", w: 26}, {h: "ETA", w: 11, f: F_DATE}, {h: "Statut", w: 16}, {h: "ArchivÃ©", w: 8}],
    s.filter(i => modeOf(i) !== "fcl").map(i => [i.ref, MODES[modeOf(i)], i.bl || "", i.navire || "", i.origine || "", xNum(i.colis), xNum(i.poids), xNum(i.volume), xNum(i.taxable), i.fournisseur, xDate(i.eta), i.statut, i.archive ? "Oui" : "Non"]),
    {xSplit: 1, totals: [5, 6, 7, 8]});
    // 9. Documents
    sheetWithTable(wb, "Documents", "SUIVI DES DOCUMENTS", meta,
      [{h: "NÂ° dossier", w: 15}, {h: "Transport", w: 10}, {h: "Fournisseur", w: 26}, ...DOCS.map(d => ({h: d[2], w: 13})), {h: "Total", w: 8}],
      s.map(i => [i.ref, MODE_SHORT[modeOf(i)], i.fournisseur, ...DOCS.map(([k]) => i.docs && i.docs[k] ? "Oui" : "â€”"), `${docCount(i)}/${DOCS.length}`]),
      {xSplit: 1});
    return {wb, file: `afrilux_rapport-import_${np.file}.xlsx`};
  }
  /* ---------- rapport annuel des PO ---------- */
  const poYear = i => (i.poDate || i.eta || "").slice(0, 4);
  function annualData(){
    const all = items.filter(i => !$("r-mode").value || modeOf(i) === $("r-mode").value);
    const devs = DEVISES.filter(d => all.some(i => (i.devise || "EUR") === d));
    const map = new Map();
    all.forEach(i => {
      const y = poYear(i) || "zz";
      if (!map.has(y)) {map.set(y, {key: y, label: y === "zz" ? "Sans date" : y, items: [], liv: {pos: new Set(), v: {}}, non: {pos: new Set(), v: {}}});}
      const g = map.get(y), k = i.statut === "LivrÃ©" ? g.liv : g.non, dev = i.devise || "EUR";
      g.items.push(i); k.pos.add((i.po || "").trim() || "#" + i.ref); k.v[dev] = (k.v[dev] || 0) + fobOf(i);
    });
    const years = [...map.values()].sort((a, b) => a.key.localeCompare(b.key));
    years.forEach(g => { g.liv.n = g.liv.pos.size; g.non.n = g.non.pos.size; });
    return {years, devs, all};
  }
  function annualSheets(wb, meta){
    const {years, devs, all} = annualData();
    const ws = wb.addWorksheet(tr("Rapport annuel PO"), {views: [{state: "frozen", ySplit: 6, xSplit: 1}], pageSetup: {orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
    titleBlock(ws, "RAPPORT ANNUEL DES PO", meta, 10);
    ws.mergeCells(4, 1, 4, 10); const n = ws.getCell(4, 1);
    n.value = tr("Tous les dossiers (en cours et archivÃ©s), regroupÃ©s par annÃ©e du PO. Un PO est Â« livrÃ© Â» quand son dossier a le statut LivrÃ©. Montant = valeur FOB du PO.");
    n.font = {italic: true, size: 9, color: {argb: XC.muted}}; n.alignment = {wrapText: true}; ws.getRow(4).height = 26;
    const cols = [{h: "AnnÃ©e", w: 11}, {h: "PO livrÃ©s", w: 11, f: F_INT}, {h: "PO non livrÃ©s", w: 13, f: F_INT}, {h: "Total PO", w: 10, f: F_INT}, {h: "% livrÃ©s", w: 10, f: "0%"},
      ...devs.flatMap(d => [{h: `Montant livrÃ© ${d}`, w: 17, f: F_DEC}, {h: `Montant non livrÃ© ${d}`, w: 19, f: F_DEC}, {h: `Total ${d}`, w: 17, f: F_DEC}])];
    const rows = years.map(y => { const t = y.liv.n + y.non.n; return [y.label, y.liv.n, y.non.n, t, t ? y.liv.n / t : 0,
      ...devs.flatMap(d => { const a = y.liv.v[d] || 0, b = y.non.v[d] || 0; return [+a.toFixed(2), +b.toFixed(2), +(a + b).toFixed(2)]; })]; });
    const end = table(ws, 6, cols, rows, {totals: cols.map((_, j) => j).filter(j => j >= 1 && j !== 4)});
    if (rows.length) { const c = ws.getCell(end, 5); c.value = {formula: `IF(D${end}=0,0,B${end}/D${end})`}; c.numFmt = "0%"; }
    // graphiques
    const real = years.filter(y => y.key !== "zz");
    const main = devs.slice().sort((a, b) => years.reduce((s, y) => s + (y.liv.v[b] || 0) + (y.non.v[b] || 0), 0) - years.reduce((s, y) => s + (y.liv.v[a] || 0) + (y.non.v[a] || 0), 0))[0];
    const charts = [{title: "Nombre de PO livrÃ©s / non livrÃ©s par annÃ©e", labels: real.map(y => y.label), series: [
      {name: "LivrÃ©s", color: CH.green, values: real.map(y => y.liv.n)}, {name: "Non livrÃ©s", color: CH.orange, values: real.map(y => y.non.n)}]}];
    if (main) {charts.push({title: `Montant PO par annÃ©e (${main})`, labels: real.map(y => y.label), series: [
      {name: "LivrÃ©s", color: CH.green, values: real.map(y => y.liv.v[main] || 0)}, {name: "Non livrÃ©s", color: CH.orange, values: real.map(y => y.non.v[main] || 0)}]});}
    const top = end + 2;
    charts.forEach((o, k) => {
      const cv = chart(Object.assign({w: 760, h: 380}, o));
      ws.addImage(wb.addImage({base64: cv.toDataURL("image/png"), extension: "png"}), {tl: {col: k * 7, row: top}, ext: {width: 620, height: 310}});
    });
    // dÃ©tail
    sheetWithTable(wb, "DÃ©tail des PO", "DÃ‰TAIL DES PO", meta, [
      {h: "AnnÃ©e", w: 9}, {h: "NÂ° PO", w: 16}, {h: "Date PO", w: 11, f: F_DATE}, {h: "NÂ° PR", w: 14}, {h: "Fournisseur", w: 26}, {h: "NÂ° dossier", w: 15},
      {h: "Transport", w: 22}, {h: "Incoterm", w: 9}, {h: "Statut", w: 18}, {h: "LivrÃ© ?", w: 9}, {h: "Paiement fournisseur", w: 16}, {h: "Devise", w: 8}, {h: "Montant PO", w: 15, f: F_DEC}, {h: "ETA", w: 11, f: F_DATE}, {h: "ArchivÃ©", w: 8}],
    all.slice().sort((a, b) => (poYear(a) || "9999").localeCompare(poYear(b) || "9999") || String(a.po || "").localeCompare(String(b.po || ""))).map(i => [
      poYear(i) || "Sans date", i.po || "", xDate(i.poDate), i.pr || "", i.fournisseur, i.ref, MODES[modeOf(i)], i.incoterm || "", i.statut, i.statut === "LivrÃ©" ? "Oui" : "Non",
      i.paiement || "Non payÃ©", i.devise || "EUR", +fobOf(i).toFixed(2), xDate(i.eta), i.archive ? "Oui" : "Non"]),
    {xSplit: 2, totals: [12]});
  }
  async function deliver(wb, file, btn){
    const lbl = btn.textContent; btn.disabled = true; btn.textContent = tr("PrÃ©parationâ€¦");
    try {
      const buf = await wb.xlsx.writeBuffer();
      const blob = new Blob([buf], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      let dl = null; try { dl = await window.claude?.use?.("downloads"); } catch {}
      if (!dl) { if (STANDALONE) { saveBlobLocal(file, blob); toast(`${file} tÃ©lÃ©chargÃ©`); } else {toast("Le tÃ©lÃ©chargement n'est pas disponible dans cette vue.");} return; }
      try { await dl.save({filename: file, data: blob}); toast(`${file} prÃªt`); }
      catch (e) { toast(e?.code === "dismissed" || e?.code === "declined" ? "TÃ©lÃ©chargement annulÃ©" : "TÃ©lÃ©chargement impossible, rÃ©essayez"); }
    } catch (e) { console.error(e); toast("CrÃ©ation du rapport impossible"); }
    finally { btn.disabled = false; btn.textContent = lbl; }
  }
  $("r-annual-xlsx").addEventListener("click", async () => {
    if (!window.ExcelJS) { toast("Le module Excel n'a pas pu se charger. VÃ©rifiez la connexion internet puis rechargez la page."); return; }
    try {
      const np = nowParts();
      const sep = LANG === "zh" ? "ï¼š" : LANG === "en" ? ": " : " : ";
      const meta = {txt: np.txt, filtres: `${T("PÃ©rimÃ¨tre")}${sep}${T("Tous les dossiers")} Â· ${T("Transport")}${sep}${$("r-mode").selectedOptions[0].text}`};
      const wb = new ExcelJS.Workbook(); wb.creator = "Afrilux Smart â€” Suivi Import"; wb.created = np.d;
      annualSheets(wb, meta);
      await deliver(wb, `afrilux_rapport-annuel-PO_${np.file}.xlsx`, $("r-annual-xlsx"));
    } catch (e) { console.error(e); toast("CrÃ©ation du rapport impossible"); }
  });
  $("r-xlsx").addEventListener("click", async () => {
    if (!window.ExcelJS) { toast("Le module Excel n'a pas pu se charger. VÃ©rifiez la connexion internet puis rechargez la page."); return; }
    const btn = $("r-xlsx"); btn.disabled = true; const lbl = btn.textContent; btn.textContent = "PrÃ©parationâ€¦";
    try {
      const {wb, file} = await buildWorkbook();
      const buf = await wb.xlsx.writeBuffer();
      const blob = new Blob([buf], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      let dl = null; try { dl = await window.claude?.use?.("downloads"); } catch {}
      if (!dl) { if (STANDALONE) { saveBlobLocal(file, blob); toast(`${file} tÃ©lÃ©chargÃ©`); } else {toast("Le tÃ©lÃ©chargement n'est pas disponible dans cette vue.");} return; }
      try { await dl.save({filename: file, data: blob}); toast(`${file} prÃªt`); }
      catch (e) { toast(e?.code === "dismissed" || e?.code === "declined" ? "TÃ©lÃ©chargement annulÃ©" : "TÃ©lÃ©chargement impossible, rÃ©essayez"); }
    } catch (e) { console.error(e); toast("CrÃ©ation du rapport impossible"); }
    finally { btn.disabled = false; btn.textContent = lbl; }
  });
  function drawPreview(){
    const box = $("r-chart"); if (!box) {return;}
    const cs = getComputedStyle(document.documentElement);
    const pal = {bg: cs.getPropertyValue("--surface").trim(), fg: cs.getPropertyValue("--fg").trim(), muted: cs.getPropertyValue("--muted").trim(), grid: cs.getPropertyValue("--line").trim()};
    const o = chartSet(repSet())[$("r-view").value === "sem" ? 2 : 0];
    const cv = chart(Object.assign({}, o, {w: 520, h: 280, pal}));
    cv.style.width = "100%"; cv.style.height = "auto"; cv.setAttribute("role", "img"); cv.setAttribute("aria-label", o.title);
    box.replaceChildren(cv);
  }
  $("r-copy").addEventListener("click", async () => {
    const s = repSet(); const allC = s.flatMap(ctnOf); const np = nowParts();
    const sep = LANG === "zh" ? "ï¼š" : LANG === "en" ? ": " : " : ";
    const lines = [`AFRILUX SMART â€” ${T("RAPPORT SUIVI IMPORT")} â€” ${T(np.txt)}`, `${T("PÃ©rimÃ¨tre")}${sep}${$("r-scope").selectedOptions[0].text}${$("r-mode").value ? " Â· " + T(MODES[$("r-mode").value]) : ""}${$("r-stat").value ? " Â· " + T($("r-stat").value) : ""}`,
      `${T("Dossiers")}${sep}${s.length} Â· ${T("Conteneurs")}${sep}${allC.length} Â· ${T("EVP")}${sep}${allC.reduce((a,c)=>a+TEU(c.t),0)}`, "",
      ...s.map(i => { const md = modeOf(i); const vol = md === "fcl" ? `${T(ctnOf(i).length + " ctn")}${sep}${ctnOf(i).map(c=>c.n+" ("+c.t+")").join(", ")}` : `${nfmt(i.colis)} ${T("colis")}, ${nfmt(i.poids,2)} kg${md === "lcl" ? ", " + nfmt(i.volume,3) + " mÂ³" : ""}`;
        return `${i.ref} | ${T(MODE_SHORT[md])} | PO ${i.po || "â€”"} | ${i.fournisseur} (${T(i.paiement || "Non payÃ©")}) | FOB ${money(fobOf(i), i.devise || "EUR")} Â· CIF ${money(cifOf(i), i.devise || "EUR")} | ${md === "air" ? "LTA" : "BL"} ${i.bl || "â€”"} | ETA ${fmtDate(i.eta)} | ${T(i.statut)} | Docs ${docCount(i)}/${DOCS.length} | ${vol}`; })];
    try { await navigator.clipboard.writeText(lines.join("\n")); toast("RÃ©sumÃ© copiÃ©"); }
    catch { toast("Copie refusÃ©e par le navigateur"); }
  });

  /* ---------- sauvegarde / restauration (version autonome) ---------- */
  const b64 = blob => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(",")[1] || ""); r.onerror = () => rej(r.error); r.readAsDataURL(blob); });
  $("btn-backup").addEventListener("click", async () => {
    try {
      const files = {};
      for (const it of items) {for (const d of Object.values(it.docs || {})) {
        if (files[d.id]) {continue;}
        let b = null;
        try { b = (SB && d.id.startsWith("sb:")) ? (await SB.storage.from(BUCKET).download(d.id.slice(3))).data : localFiles ? await IDB.get(d.id) : await fetch("/_blob/" + d.id).then(r => r.ok ? r.blob() : null); } catch {}
        if (b) {files[d.id] = {type: b.type || d.type || "application/pdf", data: await b64(b)};}
      }}
      const np = nowParts();
      const data = JSON.stringify({app: "afrilux-suivi-import", version: 1, exportedAt: new Date().toISOString(), dossiers: items, files});
      const file = `afrilux_sauvegarde_${np.file}.json`, blob = new Blob([data], {type: "application/json"});
      if (STANDALONE) {saveBlobLocal(file, blob);}
      else {
        const dl = await window.claude?.use?.("downloads").catch(() => null);
        if (!dl) { toast("Le tÃ©lÃ©chargement n'est pas disponible dans cette vue."); return; }
        try { await dl.save({filename: file, data: blob}); } catch (e) { toast(e?.code === "dismissed" || e?.code === "declined" ? "TÃ©lÃ©chargement annulÃ©" : "Sauvegarde impossible"); return; }
      }
      toast(`Sauvegarde crÃ©Ã©e : ${items.length} dossier(s), ${Object.keys(files).length} fichier(s)`);
    } catch { toast("Sauvegarde impossible"); }
  });
  $("btn-restore").addEventListener("click", () => { $("restore-file").value = ""; $("restore-file").click(); });
  // envoie des dossiers (et leurs fichiers) vers la base en ligne ; getBlob(id) rend le fichier ou null
  async function importDossiers(list, getBlob, btn){
    if (!canWrite) { toast("Lecture seule : vous pouvez consulter et exporter, sans modifier."); return false; }
    const lbl = btn.textContent; btn.disabled = true;
    let n = 0, lost = 0;
    try {
      for (const d of list) {
        btn.textContent = `${++n} / ${list.length}`;
        const docs = {};
        for (const [k, f] of Object.entries(d.docs || {})) {
          if (items.some(x => Object.values(x.docs || {}).some(z => z.id === f.id))) { docs[k] = f; continue; }
          const blob = await getBlob(f.id).catch(() => null);
          if (blob && assets) { try { const r = await assets.upload(blob); docs[k] = {...f, id: r.id, size: r.sizeBytes || f.size}; continue; } catch {} }
          lost++;
        }
        const {id, ...rest} = d;
        await save(id, {...rest, docs});
      }
      toast(lost ? `${list.length} dossier(s) restaurÃ©(s) Â· ${lost} PDF non importÃ©(s)` : `${list.length} dossier(s) restaurÃ©(s)`);
      return true;
    } catch (e) { toast(e?.code === "quota_exceeded" ? "Espace de stockage plein" : "Enregistrement impossible. VÃ©rifiez votre connexion puis rÃ©essayez."); return false; }
    finally { btn.disabled = false; btn.textContent = lbl; }
  }
  $("restore-file").addEventListener("change", async () => {
    const f = $("restore-file").files[0]; if (!f) {return;}
    try {
      const j = JSON.parse(await f.text());
      if (j.app !== "afrilux-suivi-import" || !Array.isArray(j.dossiers)) { toast("Ce fichier n'est pas une sauvegarde Suivi Import"); return; }
      const toBlob = v => { const bin = atob(v.data); const u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) {u8[i] = bin.charCodeAt(i);} return new Blob([u8], {type: v.type}); };
      if (col || SB) { await importDossiers(j.dossiers, async id => j.files && j.files[id] ? toBlob(j.files[id]) : null, $("btn-restore")); return; }
      for (const [id, v] of Object.entries(j.files || {})) {await IDB.put(id, toBlob(v));}
      const byId = new Map(items.map(x => [x.id, x])); j.dossiers.forEach(d => byId.set(d.id, d));
      items = [...byId.values()]; lsSave(); render();
      toast(`${j.dossiers.length} dossier(s) restaurÃ©(s)`);
    } catch { toast("Fichier de sauvegarde illisible"); }
  });

  /* ---------- base en ligne Supabase ---------- */
  async function sbLoadAll(){
    const out = [];
    for (let from = 0; ; from += 1000) {
      const {data, error} = await SB.from("dossiers").select("id,data").order("id").range(from, from + 999);
      if (error) {throw error;}
      out.push(...data.map(r => ({id: r.id, ...(r.data || {})})));
      if (data.length < 1000) {break;}
    }
    return out;
  }
  async function sbAfterLogin(user){
    $("login").hidden = true;
    $("who").hidden = false; $("who-mail").textContent = user?.email || "";
    assets = sbAssets; canWrite = true; localFiles = false;
    $("btn-backup").hidden = false; $("btn-restore").hidden = false; $("btn-new").hidden = false;
    $("banner").hidden = true;
    try { items = await sbLoadAll(); render(); }
    catch { $("banner").hidden = false; $("banner").textContent = "Les dossiers ne peuvent pas Ãªtre chargÃ©s pour le moment."; return; }
    SB.channel("dossiers-live").on("postgres_changes", {event: "*", schema: "public", table: "dossiers"}, p => {
      if (p.eventType === "DELETE") {items = items.filter(x => x.id !== (p.old && p.old.id));}
      else if (p.new) {upsertLocal(p.new.id, p.new.data || {});}
      render();
    }).subscribe();
    // dossiers restÃ©s dans ce navigateur (ancienne version Netlify)
    let local = []; try { local = lsLoad(); } catch {}
    let done = false; try { done = localStorage.getItem("afx-migrated") === "1"; } catch {}
    const pending = local.filter(d => !items.some(x => x.id === d.id));
    if (pending.length && !done) {
      $("banner").hidden = false;
      $("banner").innerHTML = `<span>${pending.length} dossier(s) de ce navigateur ne sont pas encore en ligne.</span><button type="button" id="btn-migrate">Envoyer en ligne</button>`;
      $("btn-migrate").addEventListener("click", async () => {
        const ok = await importDossiers(pending, id => IDB.get(id), $("btn-migrate"));
        if (ok) { try { localStorage.setItem("afx-migrated", "1"); } catch {} $("banner").hidden = true; }
      });
    }
  }
  async function sbStart(){
    $("login-logo").src = document.querySelector(".plate img")?.src || "";
    $("btn-new").hidden = true;
    $("login-form").addEventListener("submit", async e => {
      e.preventDefault();
      const email = $("lg-email").value.trim(), password = $("lg-pass").value;
      const err = $("lg-err");
      if (!email || !password) { err.hidden = false; err.textContent = "Renseignez l'e-mail et le mot de passe."; return; }
      $("lg-btn").disabled = true; $("lg-btn").textContent = "Connexionâ€¦"; err.hidden = true;
      try {
        const {data, error} = await SB.auth.signInWithPassword({email, password});
        if (error) { err.hidden = false; err.textContent = /fetch|network/i.test(error.message || "") ? "Connexion impossible. VÃ©rifiez votre connexion internet." : "E-mail ou mot de passe incorrect."; return; }
        $("lg-pass").value = ""; await sbAfterLogin(data.user);
      } catch { err.hidden = false; err.textContent = "Connexion impossible. VÃ©rifiez votre connexion internet."; }
      finally { $("lg-btn").disabled = false; $("lg-btn").textContent = "Se connecter"; }
    });
    $("btn-logout").addEventListener("click", async () => { try { await SB.auth.signOut(); } catch {} location.reload(); });
    let session = null;
    try { session = (await SB.auth.getSession()).data.session; } catch {}
    if (session) {await sbAfterLogin(session.user);}
    else { $("login").hidden = false; setTimeout(() => $("lg-email").focus(), 50); }
  }

  /* ---------- dÃ©marrage ---------- */
  function setLang(l){
    LANG = LANGS.includes(l) ? l : "fr";
    try { localStorage.setItem("afx-lang", LANG); } catch {}
    document.documentElement.lang = LANG === "zh" ? "zh-CN" : LANG;
    document.querySelectorAll(".lang [data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
    document.title = T("Afrilux Suivi Import");
    render();
    if (!$("p-form").hidden) { applyMode(); drawDraft(); drawDocs(); drawProd(); }
    if (!$("p-report").hidden) {drawReport();}
    if (!$("p-form").hidden) {incoHint();}
    txTree(document.body);
  }
  document.querySelectorAll(".lang [data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  render();
  setLang(LANG);
  (async () => {
    if (SB) { render(); await sbStart(); return; }
    if (STANDALONE && window.AFX_SUPABASE_URL && !window.supabase) { render(); $("btn-new").hidden = true; $("banner").hidden = false; $("banner").textContent = "Connexion impossible. VÃ©rifiez votre connexion internet."; return; }
    let ns = null;
    try { ns = await window.claude?.use?.("db"); } catch {}
    if (!ns) {
      items = lsLoad();
      if (STANDALONE && window.indexedDB) { assets = localAssets; localFiles = true; $("btn-backup").hidden = false; $("btn-restore").hidden = false; }
      render();
      $("banner").hidden = false;
      $("banner").textContent = STANDALONE
        ? "Version autonome : vos dossiers et PDF sont enregistrÃ©s dans ce navigateur, sur cet ordinateur. Cliquez rÃ©guliÃ¨rement sur Â« Sauvegarder Â» pour garder une copie."
        : "Mode local : les dossiers sont enregistrÃ©s uniquement dans ce navigateur.";
      return;
    }
    db = ns; col = db.collection("dossiers");
    try { assets = await window.claude.use("assets"); } catch { assets = null; }
    try { const u = await window.claude.use("user"); const w = await u?.can?.("data.write"); if (w === false) {canWrite = false;} } catch {}
    $("btn-backup").hidden = false; $("btn-restore").hidden = !canWrite;
    if (!canWrite) { $("btn-new").hidden = true; $("banner").hidden = false; $("banner").textContent = "Lecture seule : vous pouvez consulter et exporter, sans modifier."; }
    const timer = setTimeout(() => { $("banner").hidden = false; $("banner").textContent = "Connexion lente : les dossiers ne sont pas encore chargÃ©s."; }, 10000);
    col.onSnapshot(snap => {
      items = snap.docs.map(d => ({id: d.id, ...d.data()}));
      if (!snap.metadata.fromCache) { clearTimeout(timer); if (canWrite) {$("banner").hidden = true;} }
      render();
    }, () => { clearTimeout(timer); $("banner").hidden = false; $("banner").textContent = "Les dossiers ne peuvent pas Ãªtre chargÃ©s pour le moment."; });
  })();
})();


