
(() => {
/* ---------- langues : français (source), anglais, chinois ---------- */
  const LANGS = ["fr", "en", "zh"];
  let LANG = (() => { try { const l = localStorage.getItem("afx-lang"); return LANGS.includes(l) ? l : "fr"; } catch { return "fr"; } })();
  const LOC = () => ({fr: "fr-FR", en: "en-GB", zh: "zh-CN"})[LANG];
  const D = [
    // en-tête, onglets, barre
    ["Suivi Import", "Import Tracking", "进口跟踪"],
    ["Afrilux Suivi Import", "Afrilux Import Tracking", "Afrilux 进口跟踪"],
    ["Maritime FCL · LCL · Aérien — dossiers, conteneurs, documents et archives", "Sea FCL · LCL · Air — shipments, containers, documents and archives", "海运整箱 · 拼箱 · 空运 — 档案、集装箱、单据与归档"],
    ["Sauvegarder", "Back up", "备份"], ["Restaurer", "Restore", "恢复"], ["Rapport", "Report", "报表"],
    ["+ Nouveau dossier", "+ New shipment", "+ 新建档案"], ["Nouveau dossier", "New shipment", "新建档案"],
    ["Langue", "Language", "语言"], ["Synthèse", "Summary", "汇总"],
    ["Dossiers en cours", "Active shipments", "进行中的档案"], ["Conteneurs en cours", "Active containers", "进行中的集装箱"],
    ["Volume (EVP)", "Volume (TEU)", "体积 (TEU)"], ["Arrivées ≤ 7 jours", "Arrivals ≤ 7 days", "7 天内到港"],
    ["En cours", "Active", "进行中"], ["Archives", "Archive", "归档"],
    ["Rechercher dossier, BL, n° conteneur…", "Search shipment, B/L, container no.…", "搜索档案、提单、箱号…"], ["Rechercher", "Search", "搜索"],
    ["Filtrer par statut", "Filter by status", "按状态筛选"], ["Filtrer par transport", "Filter by transport", "按运输方式筛选"],
    ["Tous les statuts", "All statuses", "全部状态"], ["Tous transports", "All transport modes", "全部运输方式"], ["Tous", "All", "全部"],
    ["Dossier · PR · PO", "Shipment · PR · PO", "档案 · PR · PO"], ["Fournisseur · Paiement", "Supplier · Payment", "供应商 · 付款"],
    ["Navire / Vol · BL / LTA", "Vessel / Flight · B/L / AWB", "船名/航班 · 提单/空运单"], ["Conteneurs · Colis", "Containers · Packages", "集装箱 · 件数"],
    ["Documents", "Documents", "单据"], ["Statut", "Status", "状态"],
    ["Les dossiers archivés restent consultables et peuvent être restaurés à tout moment.", "Archived shipments remain viewable and can be restored at any time.", "已归档的档案仍可查看，并可随时恢复。"],
    ["Classés par ETA. Archivez un dossier une fois livré pour garder la liste courte.", "Sorted by ETA. Archive a shipment once delivered to keep the list short.", "按 ETA 排序。档案交付后请归档，以保持列表简洁。"],
    // formulaire
    ["Fermer", "Close", "关闭"], ["N° dossier *", "Shipment no. *", "档案编号 *"], ["Mode de transport", "Transport mode", "运输方式"],
    ["Achat", "Purchasing", "采购"], ["N° PR (demande d'achat)", "PR no. (purchase requisition)", "PR 编号（采购申请）"],
    ["N° PO (bon de commande)", "PO no. (purchase order)", "PO 编号（采购订单）"], ["Date du PO", "PO date", "PO 日期"], ["DATE DU PO", "PO DATE", "PO 日期"],
    ["Paiement fournisseur", "Supplier payment", "供应商付款"], ["Fournisseur *", "Supplier *", "供应商 *"], ["Nom du fournisseur", "Supplier name", "供应商名称"],
    ["Marchandise (résumé)", "Goods (summary)", "货物（摘要）"], ["Engrais NPK, pièces…", "NPK fertiliser, spare parts…", "NPK 化肥、零配件…"],
    ["Devise du PO", "PO currency", "PO 币种"], ["Produits", "Products", "产品"], ["+ Ajouter un produit", "+ Add a product", "+ 添加产品"],
    ["produit(s) · Total", "product(s) · Total", "个产品 · 合计"], ["Coller des lignes depuis Excel", "Paste rows from Excel", "从 Excel 粘贴行"],
    ["Code article ⇥ Désignation ⇥ Code SH ⇥ Quantité ⇥ Unité ⇥ Prix unitaire (une ligne par produit)", "Item code ⇥ Description ⇥ HS code ⇥ Quantity ⇥ Unit ⇥ Unit price (one row per product)", "物料编码 ⇥ 品名 ⇥ HS 编码 ⇥ 数量 ⇥ 单位 ⇥ 单价（每行一个产品）"],
    ["Ajouter les lignes", "Add rows", "添加行"], ["#", "#", "#"], ["Code article", "Item code", "物料编码"], ["Désignation", "Description", "品名"], ["Code SH", "HS code", "HS 编码"],
    ["Quantité", "Quantity", "数量"], ["Unité", "Unit", "单位"], ["Prix unit.", "Unit price", "单价"], ["Prix unitaire", "Unit price", "单价"],
    ["Aucun produit. Ajoutez les lignes du PO : code article, désignation, quantité et prix.", "No products yet. Add the PO lines: item code, description, quantity and price.", "暂无产品。请添加 PO 明细：物料编码、品名、数量和价格。"],
    ["pce", "pcs", "件"], ["carton", "carton", "纸箱"], ["sac", "bag", "袋"], ["palette", "pallet", "托盘"], ["lot", "lot", "批"],
    ["Valeur ·", "Value ·", "金额 ·"], ["Total FOB", "Total FOB", "FOB 总额"], ["Fret (freight)", "Freight", "运费"], ["Assurance", "Insurance", "保险费"],
    ["Vide = total des produits", "Empty = products total", "留空 = 产品合计"], ["Montant FOB", "FOB amount", "FOB 金额"], ["Total CIF", "Total CIF", "CIF 总额"],
    ["Transport & dédouanement", "Transport & customs clearance", "运输与清关"], ["Port de chargement", "Port of loading", "装货港"],
    ["Anvers, Shanghai…", "Antwerp, Shanghai…", "安特卫普、上海…"], ["Navire / voyage", "Vessel / voyage", "船名/航次"], ["N° Bill of Lading", "Bill of Lading no.", "提单号"],
    ["ETA Douala", "ETA Douala", "预计到达杜阿拉"], ["Transitaire", "Freight forwarder", "货代"], ["N° dossier transitaire", "Forwarder file no.", "货代档案号"],
    ["Réf. chez le transitaire", "Forwarder reference", "货代参考号"], ["N° DI", "DI no.", "DI 编号"], ["Déclaration d'importation", "Import declaration", "进口申报"],
    ["Aéroport de départ", "Departure airport", "始发机场"], ["Compagnie / n° de vol", "Airline / flight no.", "航空公司/航班号"], ["N° LTA (AWB)", "AWB no.", "空运单号 (AWB)"],
    ["N° BL / HBL", "B/L / HBL no.", "提单/分提单号"], ["ETA aéroport", "ETA airport", "预计到达机场"], ["Paris CDG, Dubaï…", "Paris CDG, Dubai…", "巴黎戴高乐、迪拜…"],
    ["Colis (groupage)", "Packages (groupage)", "件数（拼箱）"], ["Colis (fret aérien)", "Packages (air freight)", "件数（空运）"], ["Nombre de colis", "Number of packages", "件数"],
    ["Poids brut (kg)", "Gross weight (kg)", "毛重 (kg)"], ["Volume (m³)", "Volume (m³)", "体积 (m³)"], ["Poids taxable (kg)", "Chargeable weight (kg)", "计费重量 (kg)"],
    ["Conteneurs", "Containers", "集装箱"], ["Numéro de conteneur", "Container number", "集装箱号"], ["Type", "Type", "箱型"], ["Ajouter", "Add", "添加"],
    ["Coller une liste de numéros", "Paste a list of numbers", "粘贴箱号列表"], ["Un numéro par ligne, ou séparés par des virgules", "One number per line, or comma-separated", "每行一个箱号，或用逗号分隔"],
    ["Ajouter la liste", "Add list", "添加列表"], ["✓ = chiffre de contrôle ISO 6346 valide", "✓ = valid ISO 6346 check digit", "✓ = ISO 6346 校验位有效"],
    ["Total", "Total", "合计"], ["TOTAL", "TOTAL", "合计"], ["· EVP", "· TEU", "· TEU"], ["Aucun conteneur ajouté.", "No containers added.", "尚未添加集装箱。"],
    ["Chiffre de contrôle valide", "Valid check digit", "校验位有效"], ["Chiffre de contrôle à vérifier", "Check digit to verify", "校验位需核实"],
    ["Documents du dossier", "Shipment documents", "档案单据"], ["PDF ou scan (image), 20 Mo max par fichier", "PDF or scan (image), 20 MB max per file", "PDF 或扫描件（图片），每个文件最大 20 MB"],
    ["/ 11 joints", "/ 11 attached", "/ 11 已附"], ["Notes", "Notes", "备注"], ["Remarques, documents manquants…", "Remarks, missing documents…", "备注、缺失单据…"],
    ["Supprimer le dossier", "Delete shipment", "删除档案"], ["Supprimer définitivement ce dossier et ses documents ?", "Permanently delete this shipment and its documents?", "永久删除此档案及其单据？"],
    ["Oui, supprimer", "Yes, delete", "是，删除"], ["Annuler", "Cancel", "取消"], ["Enregistrer", "Save", "保存"],
    // statuts, paiements, modes, documents
    ["Commandé", "Ordered", "已下单"], ["En mer", "At sea", "海运途中"], ["Arrivé Douala", "Arrived Douala", "已到杜阿拉"], ["En dédouanement", "In customs clearance", "清关中"], ["Livré", "Delivered", "已交付"],
    ["Non payé", "Unpaid", "未付款"], ["Acompte versé", "Deposit paid", "已付定金"], ["Soldé", "Paid in full", "已结清"],
    ["Maritime FCL (20' / 40')", "Sea FCL (20' / 40')", "海运整箱 (20' / 40')"], ["Maritime LCL (groupage)", "Sea LCL (groupage)", "海运拼箱"], ["Aérien", "Air", "空运"],
    ["Maritime", "Sea", "海运"], ["Maritime FCL", "Sea FCL", "海运整箱"], ["LCL", "LCL", "拼箱"],
    ["Bon de commande (PO)", "Purchase order (PO)", "采购订单 (PO)"], ["Facture proforma", "Proforma invoice", "形式发票"], ["Déclaration d'importation (DI)", "Import declaration (DI)", "进口申报 (DI)"],
    ["SWIFT (preuve de paiement)", "SWIFT (proof of payment)", "SWIFT（付款凭证）"], ["Facture finale", "Final invoice", "最终发票"], ["Packing list", "Packing list", "装箱单"],
    ["Bill of Lading", "Bill of Lading", "提单"], ["Certificat ANOR", "ANOR certificate", "ANOR 证书"], ["Quittance", "Customs receipt", "缴款收据"],
    ["Non joint", "Not attached", "未附"], ["Ouvrir", "Open", "打开"], ["Joindre", "Attach", "附加"], ["Remplacer", "Replace", "替换"], ["Envoi en cours…", "Uploading…", "上传中…"],
    // lignes du tableau
    ["Modifier", "Edit", "编辑"], ["Archiver", "Archive", "归档"], ["Supprimer", "Delete", "删除"], ["Voir", "View", "查看"],
    ["Supprimer le dossier et ses documents ?", "Delete the shipment and its documents?", "删除该档案及其单据？"], ["exemple", "example", "示例"], ["Aujourd'hui", "Today", "今天"], ["colis", "packages", "件"],
    ["Aucun dossier pour l'instant", "No shipments yet", "暂无档案"], ["Créez votre premier dossier d'import pour suivre ses conteneurs.", "Create your first import shipment to track its containers.", "创建第一个进口档案以跟踪集装箱。"],
    ["Modifiez la recherche ou le filtre de statut.", "Change the search or the status filter.", "请修改搜索或状态筛选。"],
    ["Aucun dossier archivé ne correspond", "No archived shipment matches", "没有匹配的归档档案"], ["Aucun dossier ne correspond", "No shipment matches", "没有匹配的档案"],
    // rapport
    ["Périmètre", "Scope", "范围"], ["Tous les dossiers", "All shipments", "全部档案"], ["Transport", "Transport", "运输方式"], ["Paiement", "Payment", "付款"],
    ["Périodes selon", "Periods based on", "期间依据"], ["Date d'arrivée (ETA)", "Arrival date (ETA)", "到达日期 (ETA)"], ["Graphique", "Chart", "图表"],
    ["Par mois", "By month", "按月"], ["Par semaine", "By week", "按周"], ["ETA du", "ETA from", "ETA 起"], ["ETA au", "ETA to", "ETA 止"], ["PO du", "PO from", "PO 起"], ["PO au", "PO to", "PO 止"],
    ["du", "from", "从"], ["au", "to", "至"],
    ["Dossiers", "Shipments", "档案"], ["EVP", "TEU", "TEU"], ["Devise", "Currency", "币种"], ["Fret", "Freight", "运费"], ["Par transport", "By transport", "按运输方式"],
    ["Volume", "Volume", "体积"], ["Par statut", "By status", "按状态"], ["Ctn", "Ctn", "箱数"], ["Par type", "By type", "按箱型"], ["Documents manquants", "Missing documents", "缺失单据"],
    ["Le rapport Excel contient 12 onglets : Synthèse (avec logo), Rapport annuel PO, Détail des PO, Par mois, Par semaine, Graphiques, Suivi DI, Dossiers, Produits, Conteneurs, Groupage & aérien, Documents. Les tableaux ont des totaux, des filtres et des en-têtes figés. La date et l'heure d'extraction figurent dans le nom du fichier et en tête de chaque onglet.",
      "The Excel report has 12 tabs: Summary (with logo), Annual PO report, PO detail, By month, By week, Charts, DI tracking, Shipments, Products, Containers, LCL & air, Documents. Tables have totals, filters and frozen headers. The extraction date and time appear in the file name and at the top of every tab.",
      "Excel 报表包含 12 个工作表：汇总（含标志）、PO 年度报表、PO 明细、按月、按周、图表、DI 跟踪、档案、产品、集装箱、拼箱与空运、单据。表格带有合计、筛选和冻结表头。导出日期和时间显示在文件名及每个工作表顶部。"],
    ["Copier le résumé", "Copy summary", "复制摘要"], ["Exporter le rapport Excel", "Export Excel report", "导出 Excel 报表"], ["Préparation…", "Preparing…", "正在生成…"],
    ["Aucun dossier dans ce périmètre", "No shipments in this scope", "此范围内无档案"], ["Aucun conteneur", "No containers", "无集装箱"], ["Aucun dossier", "No shipments", "无档案"],
    ["Tous les documents sont joints", "All documents attached", "所有单据均已附上"], ["Aucune valeur saisie", "No values entered", "未录入金额"],
    // bandeaux et messages
    ["Mode local : les dossiers sont enregistrés uniquement dans ce navigateur.", "Local mode: shipments are saved in this browser only.", "本地模式：档案仅保存在此浏览器中。"],
    ["Version autonome : vos dossiers et PDF sont enregistrés dans ce navigateur, sur cet ordinateur. Cliquez régulièrement sur « Sauvegarder » pour garder une copie.", "Standalone version: your shipments and PDFs are saved in this browser, on this computer. Click “Back up” regularly to keep a copy.", "独立版本：您的档案和 PDF 保存在此电脑的浏览器中。请定期点击“备份”保留副本。"],
    ["Lecture seule : vous pouvez consulter et exporter, sans modifier.", "Read only: you can view and export, but not edit.", "只读：您可以查看和导出，但不能修改。"],
    ["Connexion lente : les dossiers ne sont pas encore chargés.", "Slow connection: shipments are not loaded yet.", "网络较慢：档案尚未加载。"],
    ["Les dossiers ne peuvent pas être chargés pour le moment.", "Shipments cannot be loaded right now.", "暂时无法加载档案。"],
    ["L'ajout de fichiers n'est pas disponible dans cette vue (mode local ou accès sans droit d'édition).", "Adding files is not available in this view (local mode or no edit access).", "此视图无法添加文件（本地模式或无编辑权限）。"],
    ["Lecture seule : vous pouvez ouvrir les documents joints.", "Read only: you can open the attached documents.", "只读：您可以打开已附单据。"],
    ["Renseignez le n° de dossier et le fournisseur.", "Enter the shipment number and the supplier.", "请填写档案编号和供应商。"],
    ["Attendez la fin de l'envoi du document.", "Wait for the document upload to finish.", "请等待单据上传完成。"],
    ["Enregistrement impossible. Vérifiez votre connexion puis réessayez.", "Could not save. Check your connection and try again.", "保存失败。请检查网络后重试。"],
    ["Espace plein : supprimez d'anciens dossiers archivés.", "Storage full: delete old archived shipments.", "存储已满：请删除旧的归档档案。"],
    ["Dossier créé", "Shipment created", "档案已创建"], ["Dossier mis à jour", "Shipment updated", "档案已更新"], ["Action impossible, réessayez.", "Action failed, try again.", "操作失败，请重试。"],
    ["Suppression impossible, réessayez.", "Could not delete, try again.", "删除失败，请重试。"], ["Fichier trop lourd : 20 Mo maximum", "File too large: 20 MB maximum", "文件过大：最大 20 MB"],
    ["Choisissez un PDF ou une image scannée", "Choose a PDF or a scanned image", "请选择 PDF 或扫描图片"], ["Espace de stockage plein", "Storage full", "存储空间已满"],
    ["Type de fichier refusé", "File type not accepted", "不支持的文件类型"], ["Envoi impossible, réessayez", "Upload failed, try again", "上传失败，请重试"],
    ["Fichier introuvable dans ce navigateur", "File not found in this browser", "在此浏览器中找不到文件"], ["Ouverture impossible", "Could not open", "无法打开"],
    ["Sauvegarde impossible", "Backup failed", "备份失败"], ["Ce fichier n'est pas une sauvegarde Suivi Import", "This file is not an Import Tracking backup", "此文件不是进口跟踪备份"],
    ["Fichier de sauvegarde illisible", "Backup file unreadable", "备份文件无法读取"], ["Copie refusée par le navigateur", "Copy blocked by the browser", "浏览器拒绝复制"], ["Résumé copié", "Summary copied", "摘要已复制"],
    ["Le module Excel n'a pas pu se charger. Vérifiez la connexion internet puis rechargez la page.", "The Excel module could not load. Check your internet connection and reload the page.", "Excel 模块无法加载。请检查网络并刷新页面。"],
    ["Création du rapport impossible", "Could not create the report", "无法生成报表"], ["Le téléchargement n'est pas disponible dans cette vue.", "Download is not available in this view.", "此视图不支持下载。"],
    ["Téléchargement annulé", "Download cancelled", "下载已取消"], ["Téléchargement impossible, réessayez", "Download failed, try again", "下载失败，请重试"],
    // Excel et graphiques
    ["Extrait le", "Extracted on", "导出时间"], ["à", "at", ""], ["Rapport de suivi des importations", "Import tracking report", "进口跟踪报表"],
    ["Indicateurs clés", "Key figures", "关键指标"], ["Indicateur", "Indicator", "指标"], ["Valeur", "Value", "数值"], ["Valeurs par devise", "Values by currency", "各币种金额"],
    ["dont maritime FCL", "of which sea FCL", "其中海运整箱"], ["dont LCL (groupage)", "of which LCL (groupage)", "其中拼箱"], ["dont aérien", "of which air", "其中空运"],
    ["Conteneurs 20'", "20' containers", "20' 集装箱"], ["Conteneurs 40'", "40' containers", "40' 集装箱"], ["Total EVP", "Total TEU", "TEU 合计"],
    ["Volume LCL (m³)", "LCL volume (m³)", "拼箱体积 (m³)"], ["Poids aérien (kg)", "Air weight (kg)", "空运重量 (kg)"], ["Dossiers livrés", "Delivered shipments", "已交付档案"],
    ["Document", "Document", "单据"], ["Montant", "Amount", "金额"], ["Mois", "Month", "月份"], ["Semaine", "Week", "周"], ["Du", "From", "起"], ["Au", "To", "止"],
    ["Livrés", "Delivered", "已交付"], ["Ctn 20'", "20' ctn", "20' 箱"], ["Ctn 40'", "40' ctn", "40' 箱"], ["Ctn / colis", "Ctn / packages", "箱数/件数"],
    ["N° dossier", "Shipment no.", "档案编号"], ["Fournisseur", "Supplier", "供应商"], ["N° PR", "PR no.", "PR 编号"], ["N° PO", "PO no.", "PO 编号"], ["Date PO", "PO date", "PO 日期"],
    ["Nb produits", "No. of products", "产品数"], ["Valeur produits", "Products value", "产品金额"], ["Marchandise", "Goods", "货物"], ["Origine", "Origin", "起运地"],
    ["Navire / Vol", "Vessel / Flight", "船名/航班"], ["N° BL / LTA", "B/L / AWB no.", "提单/空运单号"], ["Nb 20'", "No. 20'", "20' 数量"], ["Nb 40'", "No. 40'", "40' 数量"],
    ["Colis", "Packages", "件数"], ["Poids (kg)", "Weight (kg)", "重量 (kg)"], ["N° conteneurs", "Container nos.", "集装箱号"], ["N° conteneur", "Container no.", "集装箱号"],
    ["Docs joints", "Docs attached", "已附单据"], ["Archivé", "Archived", "已归档"], ["Archivé le", "Archived on", "归档日期"], ["Navire", "Vessel", "船名"],
    ["Contrôle ISO 6346", "ISO 6346 check", "ISO 6346 校验"], ["À vérifier", "To check", "待核实"], ["Oui", "Yes", "是"], ["Non", "No", "否"], ["Sans date", "No date", "无日期"],
    ["DOSSIERS D'IMPORT", "IMPORT SHIPMENTS", "进口档案"], ["PRODUITS", "PRODUCTS", "产品"], ["CONTENEURS (MARITIME FCL)", "CONTAINERS (SEA FCL)", "集装箱（海运整箱）"],
    ["GROUPAGE LCL & FRET AÉRIEN", "LCL GROUPAGE & AIR FREIGHT", "拼箱与空运"], ["SUIVI DES DOCUMENTS", "DOCUMENT TRACKING", "单据跟踪"], ["GRAPHIQUES", "CHARTS", "图表"],
    ["Graphiques", "Charts", "图表"], ["Groupage & aérien", "LCL & air", "拼箱与空运"],
    ["Dossiers par statut", "Shipments by status", "各状态档案数"], ["Aucune donnée sur la période", "No data for this period", "该期间无数据"],
    ["RAPPORT SUIVI IMPORT", "IMPORT TRACKING REPORT", "进口跟踪报表"]
  ];
  const MOIS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MOIS_FR = ["Janv.","Févr.","Mars","Avr.","Mai","Juin","Juil.","Août","Sept.","Oct.","Nov.","Déc."];
  const INCOTERMS = [
    ["EXW", "À l'usine", "Ex Works", "工厂交货", 0], ["FCA", "Franco transporteur", "Free Carrier", "货交承运人", 0],
    ["CPT", "Port payé jusqu'à", "Carriage Paid To", "运费付至", 0], ["CIP", "Port payé, assurance comprise, jusqu'à", "Carriage and Insurance Paid To", "运费和保险费付至", 0],
    ["DAP", "Rendu au lieu de destination", "Delivered at Place", "目的地交货", 0], ["DPU", "Rendu au lieu de destination déchargé", "Delivered at Place Unloaded", "卸货地交货", 0],
    ["DDP", "Rendu droits acquittés", "Delivered Duty Paid", "完税后交货", 0],
    ["FAS", "Franco le long du navire", "Free Alongside Ship", "船边交货", 1], ["FOB", "Franco à bord", "Free On Board", "船上交货", 1],
    ["CFR", "Coût et fret", "Cost and Freight", "成本加运费", 1], ["CIF", "Coût, assurance et fret", "Cost, Insurance and Freight", "成本、保险费加运费", 1]
  ];
  INCOTERMS.forEach(([c, fr, en, zh]) => { D.push([`${c} — ${fr}`, `${c} — ${en}`, `${c} — ${zh}`]); D.push([fr, en, zh]); });
  D.push(
    ["Incoterm", "Incoterm", "贸易术语"], ["Lieu Incoterm", "Incoterm place", "贸易术语地点"], ["Douala, Anvers, Shanghai…", "Douala, Antwerp, Shanghai…", "杜阿拉、安特卫普、上海…"],
    ["Choisir…", "Choose…", "请选择…"], ["Incoterms® 2020", "Incoterms® 2020", "Incoterms® 2020"],
    ["Tous modes de transport", "Any transport mode", "适用于所有运输方式"], ["Maritime et fluvial uniquement", "Sea and inland waterway only", "仅适用于海运和内河运输"],
    ["Attention : cet Incoterm est réservé au transport maritime.", "Warning: this Incoterm is for sea transport only.", "注意：该贸易术语仅适用于海运。"],
    ["Fret payé par", "Freight paid by", "运费承担方"], ["Assurance payée par", "Insurance paid by", "保险承担方"], ["Dédouanement import", "Import clearance", "进口清关"],
    ["Vendeur", "Seller", "卖方"], ["Acheteur", "Buyer", "买方"], ["Par Incoterm", "By Incoterm", "按贸易术语"], ["Non renseigné", "Not set", "未填写"],
    ["Aperçu", "Overview", "概览"], ["Aperçu du dossier", "Shipment overview", "档案概览"], ["Imprimer", "Print", "打印"],
    ["Valeur du dossier", "Shipment value", "档案金额"], ["Créé le", "Created on", "创建于"], ["Mis à jour le", "Updated on", "更新于"],
    ["Aucune note", "No notes", "无备注"], ["Aucun produit", "No products", "无产品"], ["Avancement", "Progress", "进度"], ["Chargement", "Loading", "装运"],
    ["Montant total", "Total amount", "总金额"], ["Conteneurs 20' / 40'", "Containers 20' / 40'", "集装箱 20' / 40'"], ["Document joint", "Attached", "已附"], ["Manquant", "Missing", "缺失"],
    ["Lot", "Cargo", "货物"], ["Date DI", "DI date", "DI 日期"], ["Date d'expiration DI", "DI expiry date", "DI 到期日"], ["DI à renouveler", "DI to renew", "待续期 DI"],
    ["État DI", "DI status", "DI 状态"], ["Jours restants", "Days left", "剩余天数"], ["Expirée", "Expired", "已过期"], ["Valide", "Valid", "有效"], ["Sans DI", "No DI", "无 DI"],
    ["Suivi des DI", "DI tracking", "DI 跟踪"], ["Clôturée (livré)", "Closed (delivered)", "已结案（已交付）"], ["Suivi DI", "DI tracking", "DI 跟踪"], ["SUIVI DES DÉCLARATIONS D'IMPORTATION (DI)", "IMPORT DECLARATION (DI) TRACKING", "进口申报 (DI) 跟踪"],
    ["DI expire aujourd'hui", "DI expires today", "DI 今日到期"], ["La date d'expiration doit être après la date de la DI.", "The expiry date must be after the DI date.", "到期日必须晚于 DI 日期。"], ["Connectez-vous avec le compte créé par votre administrateur.", "Sign in with the account your administrator created.", "请使用管理员为您创建的账户登录。"],
    ["E-mail", "Email", "电子邮箱"], ["Mot de passe", "Password", "密码"], ["Se connecter", "Sign in", "登录"], ["Connexion…", "Signing in…", "正在登录…"],
    ["E-mail ou mot de passe incorrect.", "Incorrect email or password.", "邮箱或密码错误。"], ["Déconnexion", "Sign out", "退出登录"],
    ["Connexion impossible. Vérifiez votre connexion internet.", "Cannot connect. Check your internet connection.", "无法连接，请检查网络。"],
    ["Envoyer en ligne", "Upload online", "上传到线上"], ["Renseignez l'e-mail et le mot de passe.", "Enter the email and password.", "请填写邮箱和密码。"], ["Montant facture", "Invoice amount", "发票金额"],
    ["Frais jusqu'à bord (à ajouter)", "Costs up to on board (to add)", "装船前费用（需加上）"], ["Fret (à ajouter)", "Freight (to add)", "运费（需加上）"],
    ["Fret (inclus dans la facture)", "Freight (included in invoice)", "运费（已含在发票中）"], ["Assurance (à ajouter)", "Insurance (to add)", "保险费（需加上）"],
    ["Assurance (incluse dans la facture)", "Insurance (included in invoice)", "保险费（已含在发票中）"], ["Frais après arrivée (inclus, à déduire)", "Post-arrival costs (included, to deduct)", "到港后费用（已含，需扣除）"],
    ["Vérifiez les montants : le FOB calculé est négatif.", "Check the amounts: the calculated FOB is negative.", "请核对金额：计算出的 FOB 为负数。"],
    ["Choisissez l'Incoterm du PO pour adapter le calcul. Sans Incoterm, le montant saisi est traité comme un FOB.", "Choose the PO Incoterm to adapt the calculation. Without an Incoterm, the amount entered is treated as FOB.", "请选择 PO 的贸易术语以调整计算。未选择时，录入金额按 FOB 处理。"],
    ["La facture n'inclut ni le chargement à bord, ni le fret, ni l'assurance : ajoutez-les pour obtenir le CIF.", "The invoice includes neither loading on board, freight nor insurance: add them to get the CIF.", "发票不含装船费、运费和保险费：请加上以得出 CIF。"],
    ["Marchandise livrée à bord : ajoutez le fret et l'assurance pour obtenir le CIF.", "Goods delivered on board: add freight and insurance to get the CIF.", "货物已装船交付：加上运费和保险费即得 CIF。"],
    ["Le fret est inclus dans la facture : indiquez son montant et ajoutez l'assurance.", "Freight is included in the invoice: enter its amount and add insurance.", "运费已含在发票中：请填写运费金额并加上保险费。"],
    ["Fret et assurance inclus : le CIF est égal au montant de la facture. Indiquez-les pour calculer le FOB.", "Freight and insurance included: CIF equals the invoice amount. Enter them to calculate the FOB.", "运费和保险费已含：CIF 等于发票金额。填写二者以计算 FOB。"],
    ["Livraison à destination : déduisez les frais après arrivée inclus dans la facture pour obtenir le CIF.", "Delivered at destination: deduct the post-arrival costs included in the invoice to get the CIF.", "目的地交货：扣除发票中所含的到港后费用即得 CIF。"], ["Tous Incoterms", "All Incoterms", "全部贸易术语"], ["Filtrer par Incoterm", "Filter by Incoterm", "按贸易术语筛选"],
    ["+ Incoterm", "+ Incoterm", "+ 贸易术语"], ["Modifier l'Incoterm", "Change Incoterm", "修改贸易术语"], ["Incoterm enregistré", "Incoterm saved", "贸易术语已保存"],
    ["Lieu (ex. Anvers)", "Place (e.g. Antwerp)", "地点（如安特卫普）"], ["Ouvrir le PDF", "Open PDF", "打开 PDF"],
    ["Rapport annuel des PO", "Annual PO report", "PO 年度报表"], ["RAPPORT ANNUEL DES PO", "ANNUAL PO REPORT", "PO 年度报表"], ["Rapport annuel PO", "Annual PO report", "PO 年度报表"],
    ["Exporter le rapport annuel PO", "Export annual PO report", "导出 PO 年度报表"], ["Année", "Year", "年份"],
    ["PO livrés", "Delivered POs", "已交付 PO"], ["PO non livrés", "Undelivered POs", "未交付 PO"], ["Total PO", "Total POs", "PO 合计"], ["% livrés", "% delivered", "交付率"],
    ["Livré ?", "Delivered?", "是否交付"], ["Montant PO", "PO amount", "PO 金额"], ["Détail des PO", "PO detail", "PO 明细"], ["DÉTAIL DES PO", "PO DETAIL", "PO 明细"],
    ["Montant livré", "Delivered amount", "已交付金额"], ["Montant non livré", "Undelivered amount", "未交付金额"],
    ["Tous les dossiers (en cours et archivés), regroupés par année du PO. Un PO est « livré » quand son dossier a le statut Livré. Montant = valeur FOB du PO.",
      "All shipments (active and archived), grouped by PO year. A PO is “delivered” when its shipment has the status Delivered. Amount = PO FOB value.",
      "全部档案（进行中和已归档），按 PO 年份分组。档案状态为“已交付”时，PO 计为已交付。金额 = PO 的 FOB 金额。"],
    ["Nombre de PO livrés / non livrés par année", "Delivered / undelivered POs per year", "每年已交付/未交付 PO 数量"],
    ["Livrés", "Delivered", "已交付"], ["Non livrés", "Not delivered", "未交付"]
  );
  const DICT = new Map(D.map(r => [r[0], [r[1], r[2]]]));
  const REV = new Map(); D.forEach(r => { if (!DICT.has(r[1]) && r[1]) {REV.set(r[1], r[0]);} if (r[2]) {REV.set(r[2], r[0]);} });
  const T = (s) => LANG === "fr" ? s : (trCore(s) ?? s);
  const E = (en, zh) => LANG === "en" ? en : zh;
  const PATS = [
    [/^(\d\d\/\d\d\/\d{4}) à (\d\d:\d\d)$/, m => E(`${m[1]} at ${m[2]}`, `${m[1]} ${m[2]}`)],
    [/^DI expirée depuis (\d+) j$/, m => E(`DI expired ${m[1]} d ago`, `DI 已过期 ${m[1]} 天`)],
    [/^DI expire dans (\d+) j$/, m => E(`DI expires in ${m[1]} d`, `DI ${m[1]} 天后到期`)],
    [/^exp\. (.+)$/, m => E(`exp. ${m[1]}`, `到期 ${m[1]}`)],
    [/^Expire ≤ (\d+) j$/, m => E(`Expires ≤ ${m[1]} d`, `${m[1]} 天内到期`)],
    [/^(\d+) expirée\(s\) · (\d+) ≤ (\d+) j$/, m => E(`${m[1]} expired · ${m[2]} ≤ ${m[3]} d`, `已过期 ${m[1]} · ${m[3]} 天内 ${m[2]}`)],
    [/^Retard (\d+) j$/, m => E(`${m[1]} d late`, `延误 ${m[1]} 天`)],
    [/^dans (\d+) j$/, m => E(`in ${m[1]} d`, `${m[1]} 天后`)],
    [/^J-(\d+)$/, m => E(`D-${m[1]}`, `还剩 ${m[1]} 天`)],
    [/^(\d+) en retard$/, m => E(`${m[1]} late`, `${m[1]} 个延误`)],
    [/^(\d+) maritime · (\d+) LCL · (\d+) aérien$/, m => E(`${m[1]} sea · ${m[2]} LCL · ${m[3]} air`, `海运 ${m[1]} · 拼箱 ${m[2]} · 空运 ${m[3]}`)],
    [/^Manque : (.+)$/, m => E(`Missing: ${m[1]}`, `缺失：${m[1]}`)],
    [/^(\d+) ctn · (\d+) EVP$/, m => E(`${m[1]} ctn · ${m[2]} TEU`, `${m[1]} 箱 · ${m[2]} TEU`)],
    [/^ctn · (\d+) EVP$/, m => E(`ctn · ${m[1]} TEU`, `箱 · ${m[1]} TEU`)],
    [/^(\d+) ctn$/, m => E(`${m[1]} ctn`, `${m[1]} 箱`)],
    [/^(\d+) produits? · FOB$/, m => E(`${m[1]} product${m[1] > 1 ? "s" : ""} · FOB`, `${m[1]} 个产品 · FOB`)],
    [/^\(fret (.+) · ass\. (.+)\)$/, m => E(`(freight ${m[1]} · ins. ${m[2]})`, `（运费 ${m[1]} · 保险 ${m[2]}）`)],
    [/^(.+) kg · taxable (.+) kg$/, m => E(`${m[1]} kg · chargeable ${m[2]} kg`, `${m[1]} kg · 计费 ${m[2]} kg`)],
    [/^Archivé le (.+)$/, m => E(`Archived on ${m[1]}`, `归档于 ${m[1]}`)],
    [/^(.+) · (\d+(?:[.,]\d+)?) (Ko|Mo)$/, m => `${m[1]} · ${m[2]} ${m[3] === "Ko" ? "KB" : "MB"}`],
    [/^Dossier (.+) supprimé$/, m => E(`Shipment ${m[1]} deleted`, `档案 ${m[1]} 已删除`)],
    [/^Documents du dossier (.+)$/, m => E(`Documents for shipment ${m[1]}`, `档案 ${m[1]} 的单据`)],
    [/^Dossier (.+)$/, m => E(`Shipment ${m[1]}`, `档案 ${m[1]}`)],
    [/^(.+) archivé$/, m => E(`${m[1]} archived`, `${m[1]} 已归档`)],
    [/^(.+) restauré$/, m => E(`${m[1]} restored`, `${m[1]} 已恢复`)],
    [/^(\d+) conteneur\(s\) ajouté\(s\)$/, m => E(`${m[1]} container(s) added`, `已添加 ${m[1]} 个集装箱`)],
    [/^(\d+) produit\(s\) ajouté\(s\)$/, m => E(`${m[1]} product(s) added`, `已添加 ${m[1]} 个产品`)],
    [/^(\d+) dossier\(s\) de ce navigateur ne sont pas encore en ligne\.$/, m => E(`${m[1]} shipment(s) in this browser are not online yet.`, `此浏览器中有 ${m[1]} 个档案尚未上传到线上。`)],
    [/^(\d+) dossier\(s\) restauré\(s\) · (\d+) PDF non importé\(s\)$/, m => E(`${m[1]} shipment(s) restored · ${m[2]} PDF(s) not imported`, `已恢复 ${m[1]} 个档案 · ${m[2]} 个 PDF 未导入`)],
    [/^(\d+) dossier\(s\) restauré\(s\)$/, m => E(`${m[1]} shipment(s) restored`, `已恢复 ${m[1]} 个档案`)],
    [/^Sauvegarde créée : (\d+) dossier\(s\), (\d+) fichier\(s\)$/, m => E(`Backup created: ${m[1]} shipment(s), ${m[2]} file(s)`, `备份已创建：${m[1]} 个档案，${m[2]} 个文件`)],
    [/^(.+\.xlsx) prêt$/, m => E(`${m[1]} ready`, `${m[1]} 已就绪`)],
    [/^(.+\.(?:xlsx|json)) téléchargé$/, m => E(`${m[1]} downloaded`, `${m[1]} 已下载`)],
    [/^(.+) joint$/, m => E(`${T(m[1])} attached`, `${T(m[1])} 已附加`)],
    [/^Le n° (.+) existe déjà( dans les archives)?\.$/, m => E(`No. ${m[1]} already exists${m[2] ? " in the archive" : ""}.`, `编号 ${m[1]} 已存在${m[2] ? "于归档中" : ""}。`)],
    [/^(.+) : format attendu 4 lettres \+ 7 chiffres$/, m => E(`${m[1]}: expected format 4 letters + 7 digits`, `${m[1]}：格式应为 4 个字母 + 7 位数字`)],
    [/^(.+) : déjà dans ce dossier$/, m => E(`${m[1]}: already in this shipment`, `${m[1]}：已在此档案中`)],
    [/^(.+) : aussi présent dans le dossier (.+) \(ajouté quand même\)$/, m => E(`${m[1]}: also in shipment ${m[2]} (added anyway)`, `${m[1]}：也存在于档案 ${m[2]}（仍已添加）`)],
    [/^Vide = total produits \((.+)\)$/, m => E(`Empty = products total (${m[1]})`, `留空 = 产品合计（${m[1]}）`)],
    [/^FOB (.+?)( \(total des produits\))? \+ fret (.+) \+ assurance (.+?)( · écart avec le total produits : (.+))?$/, m => E(
      `FOB ${m[1]}${m[2] ? " (products total)" : ""} + freight ${m[3]} + insurance ${m[4]}${m[5] ? ` · difference with products total: ${m[6]}` : ""}`,
      `FOB ${m[1]}${m[2] ? "（产品合计）" : ""} + 运费 ${m[3]} + 保险 ${m[4]}${m[5] ? ` · 与产品合计差额：${m[6]}` : ""}`)],
    [/^Retirer la ligne (\d+)$/, m => E(`Remove row ${m[1]}`, `删除第 ${m[1]} 行`)],
    [/^Retirer (.+)$/, m => E(`Remove ${T(m[1])}`, `移除 ${T(m[1])}`)],
    [/^(.+) ligne (\d+)$/, m => E(`${T(m[1])} row ${m[2]}`, `第 ${m[2]} 行${T(m[1])}`)],
    [/^(Janv\.|Févr\.|Mars|Avr\.|Mai|Juin|Juil\.|Août|Sept\.|Oct\.|Nov\.|Déc\.) (\d{4})$/, m => { const k = MOIS_FR.indexOf(m[1]); return E(`${MOIS_EN[k]} ${m[2]}`, `${m[2]}年${k + 1}月`); }],
    [/^S(\d{2}) (\d{4})$/, m => E(`W${m[1]} ${m[2]}`, `${m[2]}年第${+m[1]}周`)],
    [/^(FOB|Fret|Assurance|CIF) ([A-Z]{3})$/, m => `${T(m[1])} ${m[2]}`],
    [/^Dossiers par mois \((.+)\) et par transport$/, m => E(`Shipments per month (${T(m[1])}) by transport`, `每月档案数（${T(m[1])}）按运输方式`)],
    [/^Conteneurs par mois \((.+)\)$/, m => E(`Containers per month (${T(m[1])})`, `每月集装箱数（${T(m[1])}）`)],
    [/^Dossiers par semaine \((.+?)\)( — 26 dernières semaines)?$/, m => E(`Shipments per week (${T(m[1])})${m[2] ? " — last 26 weeks" : ""}`, `每周档案数（${T(m[1])}）${m[2] ? " — 最近 26 周" : ""}`)],
    [/^EVP par semaine \((.+?)\)( — 26 dernières semaines)?$/, m => E(`TEU per week (${T(m[1])})${m[2] ? " — last 26 weeks" : ""}`, `每周 TEU（${T(m[1])}）${m[2] ? " — 最近 26 周" : ""}`)],
    [/^Valeur CIF par mois \((.+)\)$/, m => E(`CIF value per month (${m[1]})`, `每月 CIF 金额（${m[1]}）`)],
    [/^(Montant livré|Montant non livré|Total|Montant PO) ([A-Z]{3})$/, m => `${T(m[1])} ${m[2]}`],
    [/^Montant PO par année \(([A-Z]{3})\)$/, m => E(`PO amount per year (${m[1]})`, `每年 PO 金额（${m[1]}）`)],
    [/^Montant facture \(([A-Z]{3})\)$/, m => E(`Invoice amount (${m[1]})`, `发票金额（${m[1]}）`)],
    [/^ACTIVITÉ PAR MOIS \((.+)\)$/, m => E(`ACTIVITY BY MONTH (${T(m[1])})`, `按月业务（${T(m[1])}）`)],
    [/^ACTIVITÉ PAR SEMAINE ISO \((.+)\)$/, m => E(`ACTIVITY BY ISO WEEK (${T(m[1])})`, `按 ISO 周业务（${T(m[1])}）`)],
    [/^Détail des dossiers par (mois|semaine) \((.+)\)$/, m => E(`Shipment detail by ${m[1] === "mois" ? "month" : "week"} (${T(m[2])})`, `按${m[1] === "mois" ? "月" : "周"}的档案明细（${T(m[2])}）`)],
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

  const STATUTS = ["Commandé","En mer","Arrivé Douala","En dédouanement","Livré"];
  const PAIEMENTS = ["Non payé","Acompte versé","Soldé"];
  const DEVISES = ["EUR","USD","XAF","CNY","GBP","AED"];
  const UNITES = ["pce","kg","t","L","m","m²","m³","carton","sac","palette","lot"];
  let draftProd = [];
  const lineAmt = p => num(p.qte) * num(p.pu);
  const prodTotal = it => (it.produits || []).reduce((a, p) => a + lineAmt(p), 0);
  const money = (v, dev) => `${num(v).toLocaleString(LOC(), {minimumFractionDigits: dev === "XAF" ? 0 : 2, maximumFractionDigits: dev === "XAF" ? 0 : 2})} ${dev || ""}`.trim();
  const fobOf = it => String(it.fob ?? "").trim() !== "" ? num(it.fob) : prodTotal(it);
  const cifOf = it => fobOf(it) + num(it.fret) + num(it.assurance);
  const MODES = {fcl: "Maritime FCL (20' / 40')", lcl: "Maritime LCL (groupage)", air: "Aérien"};
  const MODE_SHORT = {fcl: "Maritime", lcl: "LCL", air: "Aérien"};
  const modeOf = it => it.mode && MODES[it.mode] ? it.mode : "fcl";
  const num = v => { const n = parseFloat(String(v ?? "").replace(",", ".")); return isFinite(n) ? n : 0; };
  const nfmt = (v, d = 0) => num(v).toLocaleString(LOC(), {maximumFractionDigits: d});
  const DOCS = [
    ["po","PO","Bon de commande (PO)"],["proforma","PRO","Facture proforma"],["di","DI","Déclaration d'importation (DI)"],
    ["swift","SWF","SWIFT (preuve de paiement)"],["facture","FAC","Facture finale"],["packing","PKL","Packing list"],
    ["bl","BL","Bill of Lading"],["rvc","RVC","RVC"],["anor","ANR","Certificat ANOR"],["dau","DAU","DAU"],["quittance","QTC","Quittance"]
  ];
  let assets = null;
  const STANDALONE = !window.claude;
  const SB = (STANDALONE && window.AFX_SUPABASE_URL && window.AFX_SUPABASE_KEY && window.supabase) ? window.supabase.createClient(window.AFX_SUPABASE_URL, window.AFX_SUPABASE_KEY) : null;
  const API_URL = window.AFX_API_URL || "";
  const USE_API = window.AFX_USE_API === "1" || window.AFX_USE_API === true;
  const API_KEY = window.AFX_API_KEY || "";
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
  let sessionUploads = []; // ids téléversés pendant l'ouverture du formulaire
  let uploadKey = null;
  const docCount = it => DOCS.filter(([k]) => it.docs && it.docs[k]).length;
  const fmtSize = b => b > 1048576 ? (b / 1048576).toFixed(1) + " Mo" : Math.max(1, Math.round(b / 1024)) + " Ko";
  const TEU = t => t.startsWith("20") ? 1 : 2;
  const $ = id => document.getElementById(id);
  let items = [];          // [{id, ...data}]
  let view = "actifs";
  let db = null, col = null, canWrite = true;
  let editing = null;      // id en cours d'édition ou null
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
  function fmtDate(iso){ if (!iso) {return "—";} const [y,m,d] = iso.split("-"); return `${d}/${m}/${y}`; }
  function toast(msg){ const t = $("toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => t.hidden = true, 2600); }
  const DI_ALERT = 30;
  function diState(it){
    if (!it.diExp) {return null;}
    const d = daysTo(it.diExp);
    if (it.statut === "Livré" || it.archive) {return {k: "done", d};}
    return d < 0 ? {k: "exp", d} : d <= DI_ALERT ? {k: "soon", d} : {k: "ok", d};
  }
  function diBadge(it){
    const s = diState(it); if (!s) {return "";}
    if (s.k === "exp") {return `<span class="d late">DI expirée depuis ${-s.d} j</span>`;}
    if (s.k === "soon") {return `<span class="d soon">${s.d === 0 ? "DI expire aujourd'hui" : `DI expire dans ${s.d} j`}</span>`;}
    return `<span class="d ok">exp. ${fmtDate(it.diExp)}</span>`;
  }
  const diLabel = it => { const s = diState(it); return !it.di && !it.diExp ? "Sans DI" : !s ? "Valide" : s.k === "done" ? "Clôturée (livré)" : s.k === "exp" ? "Expirée" : s.k === "soon" ? `Expire ≤ ${DI_ALERT} j` : "Valide"; };
  const ctnOf = it => modeOf(it) === "fcl" ? (it.conteneurs || []) : [];
  const teuOf = it => ctnOf(it).reduce((a, c) => a + TEU(c.t || "40'"), 0);

  /* ---------- stockage ---------- */
  const LS = "suivi-import-local";
  function lsLoad(){ try { return JSON.parse(localStorage.getItem(LS) || "[]"); } catch { return []; } }
  function lsSave(){ try { localStorage.setItem(LS, JSON.stringify(items)); } catch {} }
  function upsertLocal(id, data){ const i = items.findIndex(x => x.id === id); const row = {id, ...data}; if (i >= 0) {items[i] = row;} else {items.push(row);} }
  async function save(id, data){
    if (USE_API) {
      try {
        const {ref, ...rest} = data;
        const body = {id, ref, ...rest};
        const method = items.find(x => x.id === id) ? "PUT" : "POST";
        const url = method === "PUT" ? `${API_URL}/dossiers/${id}` : `${API_URL}/dossiers`;
        const headers = {"Content-Type": "application/json"};
        if (API_KEY) {headers["Authorization"] = `Bearer ${API_KEY}`;}
        const resp = await fetch(url, {method, headers, body: JSON.stringify(body)});
        if (!resp.ok) {throw new Error(`HTTP ${resp.status}`);}
        const saved = await resp.json();
        upsertLocal(saved.id, saved.data || saved);
        items = items.map(x => x.id === saved.id ? {id: saved.id, ...(saved.data || saved)} : x);
        render();
        return;
      } catch (err) { toast("Erreur API : " + err.message); return; }
    }
    if (SB) { const {error} = await SB.from("dossiers").upsert({id, data, updated_at: new Date().toISOString()}); if (error) {throw error;} upsertLocal(id, data); render(); }
    else if (col) { await col.doc(id).set(data); }
    else { const i = items.findIndex(x => x.id === id); const row = {id, ...data}; if (i >= 0) {items[i] = row;} else {items.push(row);} lsSave(); render(); }
  }
  async function remove(id){
    if (USE_API) {
      try {
        const headers = {};
        if (API_KEY) {headers["Authorization"] = `Bearer ${API_KEY}`;}
        const resp = await fetch(`${API_URL}/dossiers/${id}`, {method: "DELETE", headers});
        if (!resp.ok) {throw new Error(`HTTP ${resp.status}`);}
        items = items.filter(x => x.id !== id);
        render();
        return;
      } catch (err) { toast("Erreur API : " + err.message); return; }
    }
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
    $("k-dos-s").textContent = actifs.length ? `${byM("fcl")} maritime · ${byM("lcl")} LCL · ${byM("air")} aérien` : " ";
    $("k-ctn").textContent = ctn;
    const c20 = actifs.reduce((a, i) => a + ctnOf(i).filter(c => TEU(c.t) === 1).length, 0);
    $("k-ctn-s").textContent = ctn ? `${c20} × 20' · ${ctn - c20} × 40'` : " ";
    $("k-teu").textContent = actifs.reduce((a, i) => a + teuOf(i), 0);
    const soon = actifs.filter(i => { const d = daysTo(i.eta); return d !== null && d >= 0 && d <= 7 && STATUTS.indexOf(i.statut) < 2; });
    $("k-eta").textContent = soon.length;
    const late = actifs.filter(i => { const d = daysTo(i.eta); return d !== null && d < 0 && STATUTS.indexOf(i.statut) < 2; }).length;
    $("k-eta-s").textContent = late ? `${late} en retard` : "\u00a0";
    const diAct = actifs.filter(i => i.statut !== "Livré" && i.diExp);
    const diExpired = diAct.filter(i => daysTo(i.diExp) < 0).length, diSoon = diAct.filter(i => { const d = daysTo(i.diExp); return d >= 0 && d <= DI_ALERT; }).length;
    $("k-di").textContent = diExpired + diSoon; $("k-di").style.color = diExpired ? "var(--bad)" : diSoon ? "var(--warn)" : "";
    $("k-di-s").textContent = diExpired || diSoon ? `${diExpired} expirée(s) · ${diSoon} ≤ ${DI_ALERT} j` : "\u00a0";

    const rows = visible();
    const tb = $("rows");
    tb.innerHTML = rows.map(rowHtml).join("");
    const em = $("empty");
    if (!rows.length) {
      em.hidden = false;
      em.innerHTML = items.length === 0
        ? "<strong>Aucun dossier pour l'instant</strong><span>Créez votre premier dossier d'import pour suivre ses conteneurs.</span><button type=\"button\" class=\"primary\" data-act=\"new\">+ Nouveau dossier</button>"
        : `<strong>${view === "archives" ? "Aucun dossier archivé" : "Aucun dossier"} ne correspond</strong><span>Modifiez la recherche ou le filtre de statut.</span>`;
    } else {em.hidden = true;}
    if (viewId && !$("p-view").hidden) {renderView(viewId);}
    $("foot").textContent = view === "archives"
      ? "Les dossiers archivés restent consultables et peuvent être restaurés à tout moment."
      : "Classés par ETA. Archivez un dossier une fois livré pour garder la liste courte.";
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
    else if (it.archive) {act = `<div class="rowact"><button type="button" class="ghost" data-act="view" data-id="${it.id}">Aperçu</button><button type="button" class="ghost" data-act="restore" data-id="${it.id}">Restaurer</button><button type="button" class="ghost danger" data-act="del" data-id="${it.id}">Supprimer</button></div>`;}
    else {act = `<div class="rowact"><button type="button" class="ghost" data-act="view" data-id="${it.id}">Aperçu</button><button type="button" class="ghost" data-act="edit" data-id="${it.id}">Modifier</button><button type="button" class="ghost" data-act="archive" data-id="${it.id}">Archiver</button><button type="button" class="ghost danger" data-act="del" data-id="${it.id}">Supprimer</button></div>`;}
    return `<tr>
    <td><span class="mode m-${md}">${MODE_SHORT[md]}</span><br><button type="button" class="refbtn" data-act="view" data-id="${it.id}" title="Aperçu">${esc(it.ref)}</button>${it.exemple ? '<span class="tag-ex">exemple</span>' : ""}
      <div class="sub mono">PR ${esc(it.pr || "—")}</div>
      <div class="sub mono">PO ${esc(it.po || "—")}${it.poDate ? " · " + fmtDate(it.poDate) : ""}</div>
      ${incoEdit === it.id && canWrite
    ? `<div class="incoed"><select id="ie-c" aria-label="Incoterm">${incoOptions(incoDraft.c)}</select><input id="ie-l" value="${esc(incoDraft.l)}" placeholder="Lieu (ex. Anvers)" aria-label="Lieu Incoterm"><div class="b"><button type="button" class="primary" data-act="inco-save" data-id="${it.id}">Enregistrer</button><button type="button" class="ghost" data-act="inco-cancel">Annuler</button></div></div>`
    : it.incoterm
      ? (canWrite ? `<button type="button" class="incobtn" data-act="inco" data-id="${it.id}" title="Modifier l'Incoterm"><span class="inco">${esc(it.incoterm)}</span>${esc(it.incotermLieu || "")} ✎</button>` : `<div class="sub"><span class="inco">${esc(it.incoterm)}</span>${esc(it.incotermLieu || "")}</div>`)
      : (canWrite && !it.archive ? `<button type="button" class="incobtn add" data-act="inco" data-id="${it.id}">+ Incoterm</button>` : "")}
      ${it.archive && it.archiveLe ? `<div class="sub">Archivé le ${fmtDate(it.archiveLe.slice(0,10))}</div>` : ""}</td>
    <td>${esc(it.fournisseur)}<div class="sub">${esc(it.marchandise || "—")}${it.origine ? " · " + esc(it.origine) : ""}</div><span class="pay p${Math.max(0, PAIEMENTS.indexOf(it.paiement || "Non payé"))}">${esc(it.paiement || "Non payé")}</span>${cifOf(it) ? `<div class="prod-line">${(it.produits || []).length ? `${it.produits.length} produit${it.produits.length > 1 ? "s" : ""} · ` : ""}FOB <b>${esc(money(fobOf(it), it.devise || "EUR"))}</b></div><div class="prod-line">CIF <b>${esc(money(cifOf(it), it.devise || "EUR"))}</b>${num(it.fret) || num(it.assurance) ? ` <span class="sub">(fret ${esc(money(it.fret, ""))} · ass. ${esc(money(it.assurance, ""))})</span>` : ""}</div>` : ""}</td>
    <td>${esc(it.navire || "—")}<div class="sub mono">${md === "air" ? "LTA" : md === "lcl" ? "HBL" : "BL"} ${esc(it.bl || "—")}</div>${it.transitaire || it.transitaireRef ? `<div class="sub">${esc(it.transitaire || "Transitaire")}${it.transitaireRef ? ` · <span class="mono">${esc(it.transitaireRef)}</span>` : ""}</div>` : ""}${it.di || it.diExp ? `<div class="sub mono">DI ${esc(it.di || "—")}${it.diDate ? " · " + fmtDate(it.diDate) : ""}</div><div class="sub">${diBadge(it)}</div>` : ""}</td>
    <td class="eta mono">${fmtDate(it.eta)}${dl}</td>
    <td>${md === "fcl"
    ? `<div class="cnt-head"><b>${cs.length}</b><span class="teu">ctn · ${teuOf(it)} EVP</span></div><div class="chips">${shown}${more}</div>`
    : `<div class="lot"><b>${nfmt(it.colis)}</b> colis<br>${nfmt(it.poids, 2)} kg${md === "lcl" ? ` · ${nfmt(it.volume, 3)} m³` : it.taxable ? ` · taxable ${nfmt(it.taxable, 2)} kg` : ""}</div>`}</td>
    <td>${(() => { const n = docCount(it); const miss = DOCS.filter(([k]) => !(it.docs && it.docs[k])).map(d => d[1]);
    return `<button type="button" class="ghost" style="padding:0;min-height:0;text-align:left;display:block" data-act="edit" data-id="${it.id}" aria-label="Documents du dossier ${esc(it.ref)}"><div class="docmeter"><b>${n}<span> / ${DOCS.length}</span></b><div class="dbar${n === DOCS.length ? " full" : ""}"><i style="width:${Math.round(n / DOCS.length * 100)}%"></i></div></div></button>${miss.length && miss.length < DOCS.length ? `<div class="miss">Manque : ${miss.slice(0, 5).join(", ")}${miss.length > 5 ? "…" : ""}</div>` : ""}`; })()}</td>
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
    $("lot-legend").textContent = m === "air" ? "Colis (fret aérien)" : "Colis (groupage)";
    $("l-origine").textContent = m === "air" ? "Aéroport de départ" : "Port de chargement";
    $("l-navire").textContent = m === "air" ? "Compagnie / n° de vol" : "Navire / voyage";
    $("l-bl").textContent = m === "air" ? "N° LTA (AWB)" : m === "lcl" ? "N° BL / HBL" : "N° Bill of Lading";
    $("l-eta").textContent = m === "air" ? "ETA aéroport" : "ETA Douala";
    $("f-origine").placeholder = m === "air" ? "Paris CDG, Dubaï…" : "Anvers, Shanghai…";
    $("f-navire").placeholder = m === "air" ? "AF 0900" : "MSC ANNA / 245W";
    $("f-bl").placeholder = m === "air" ? "057-12345675" : "MEDU1234567";
  }
  $("f-mode").addEventListener("change", applyMode);
  const F = ["ref","statut","mode","colis","poids","volume","taxable","pr","po","poDate","paiement","devise","incoterm","incotermLieu","facture","fraisAvant","fraisApres","fret","assurance","fournisseur","marchandise","origine","navire","bl","eta","transitaire","transitaireRef","di","diDate","diExp","notes"];
  const DEFAULTS = {statut: "Commandé", paiement: "Non payé", mode: "fcl", devise: "EUR"};

  /* ---------- produits ---------- */
  function drawProd(){
    const ro = !canWrite;
    const dis = ro ? " disabled" : "";
    $("p-list").innerHTML = (draftProd.length ? "<div class=\"prow head\"><span>#</span><span>Code article</span><span>Désignation</span><span>Code SH</span><span>Quantité</span><span>Unité</span><span>Prix unit.</span><span></span></div>" : "") +
    (draftProd.map((p, i) => `<div class="prow" data-pi="${i}">
      <span class="idx">${String(i + 1).padStart(2, "0")}</span>
      <input data-k="code" value="${esc(p.code)}" aria-label="Code article ligne ${i + 1}"${dis}>
      <input data-k="des" value="${esc(p.des)}" placeholder="Désignation" aria-label="Désignation ligne ${i + 1}"${dis}>
      <input data-k="hs" value="${esc(p.hs)}" class="pnum" aria-label="Code SH ligne ${i + 1}"${dis}>
      <input data-k="qte" value="${esc(p.qte)}" class="pnum" inputmode="decimal" aria-label="Quantité ligne ${i + 1}"${dis}>
      <select data-k="u" aria-label="Unité ligne ${i + 1}"${dis}>${UNITES.concat(UNITES.includes(p.u) || !p.u ? [] : [p.u]).map(u => `<option value="${esc(u)}"${u === (p.u || "pce") ? " selected" : ""}>${esc(u)}</option>`).join("")}</select>
      <input data-k="pu" value="${esc(p.pu)}" class="pnum" inputmode="decimal" aria-label="Prix unitaire ligne ${i + 1}"${dis}>
      ${ro ? "<span></span>" : `<button type="button" class="ghost" data-pr="${i}" aria-label="Retirer la ligne ${i + 1}">✕</button>`}
    </div>`).join("") || "<p class=\"note\" style=\"margin:4px 0\">Aucun produit. Ajoutez les lignes du PO : code article, désignation, quantité et prix.</p>");
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
  // montant facture d'un dossier enregistré avant l'arrivée de ce champ
  function factureOf(it){
    if (it.facture !== undefined) {return it.facture;}
    if (String(it.fob ?? "").trim() === "") {return "";}
    const g = IGRP(it.incoterm), f = num(it.fob);
    const v = g === "C" ? f + num(it.fret) : (g === "CI" || g === "D") ? f + num(it.fret) + num(it.assurance) : f;
    return String(+v.toFixed(2));
  }
  const RULES = {A: "La facture n'inclut ni le chargement à bord, ni le fret, ni l'assurance : ajoutez-les pour obtenir le CIF.",
    F: "Marchandise livrée à bord : ajoutez le fret et l'assurance pour obtenir le CIF.", C: "Le fret est inclus dans la facture : indiquez son montant et ajoutez l'assurance.",
    CI: "Fret et assurance inclus : le CIF est égal au montant de la facture. Indiquez-les pour calculer le FOB.", D: "Livraison à destination : déduisez les frais après arrivée inclus dans la facture pour obtenir le CIF."};
  function diHint(){
    const a = $("f-diDate").value, b = $("f-diExp").value, el = $("di-hint");
    if (a && b && b < a) { el.textContent = "La date d'expiration doit être après la date de la DI."; el.className = "hint warn"; return; }
    if (b) { const d = daysTo(b); el.className = d < 0 ? "hint warn" : "hint";
      el.textContent = d < 0 ? `DI expirée depuis ${-d} j` : d === 0 ? "DI expire aujourd'hui" : `DI expire dans ${d} j`; return; }
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
    $("l-fret").textContent = (g === "A" || g === "F") ? "Fret (à ajouter)" : "Fret (inclus dans la facture)";
    $("l-ass").textContent = (g === "CI" || g === "D") ? "Assurance (incluse dans la facture)" : "Assurance (à ajouter)";
    $("v-rule").textContent = c ? RULES[g] : "Choisissez l'Incoterm du PO pour adapter le calcul. Sans Incoterm, le montant saisi est traité comme un FOB.";
    const v = valCalc(c, $("f-facture").value, pt, $("f-fraisAvant").value, $("f-fret").value, $("f-assurance").value, $("f-fraisApres").value);
    $("v-cif").textContent = money(v.cif, dev);
    $("v-note").innerHTML = `<span>FOB</span> ${esc(money(v.fob, dev))} · <span>Fret</span> ${esc(money($("f-fret").value, dev))} · <span>Assurance</span> ${esc(money($("f-assurance").value, dev))}`;
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
    $("p-paste").value = ""; drawProd(); if (n) {toast(`${n} produit(s) ajouté(s)`);}
  });

  /* ---------- documents ---------- */
  function drawDocs(){
    const canUp = !!assets && canWrite;
    $("d-note").hidden = canUp;
    if (!canUp) {$("d-note").textContent = canWrite ? "L'ajout de fichiers n'est pas disponible dans cette vue (mode local ou accès sans droit d'édition)." : "Lecture seule : vous pouvez ouvrir les documents joints.";}
    $("d-tot").textContent = DOCS.filter(([k]) => draftDocs[k]).length;
    $("d-list").innerHTML = DOCS.map(([k, code, label]) => {
      const d = draftDocs[k];
      const busy = uploadKey === k;
      const info = busy ? "Envoi en cours…" : d ? `${esc(d.name)} · ${fmtSize(d.size)}` : "Non joint";
      const acts = [];
      if (d && !busy) {acts.push(`<a href="/_blob/${esc(d.id)}" data-file="${esc(d.id)}" data-name="${esc(d.name)}" target="_blank" rel="noopener">Ouvrir</a>`);}
      if (canUp && !busy) {acts.push(`<button type="button" class="ghost" data-up="${k}">${d ? "Remplacer" : "Joindre"}</button>`);}
      if (d && canUp && !busy) {acts.push(`<button type="button" class="ghost danger" data-rm="${k}" aria-label="Retirer ${label}">✕</button>`);}
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
    if (!/pdf|image\//.test(f.type) && !/\.pdf$/i.test(f.name)) { toast("Choisissez un PDF ou une image scannée"); return; }
    uploadKey = k; drawDocs();
    try {
      const blob = f.type ? f : new Blob([f], {type: "application/pdf"});
      const r = await assets.upload(blob);
      sessionUploads.push(r.id);
      draftDocs[k] = {id: r.id, name: f.name, size: r.sizeBytes || f.size, type: r.contentType || f.type, at: new Date().toISOString()};
      toast(`${DOCS.find(d => d[0] === k)[2]} joint`);
    } catch (err) {
      toast(err?.code === "quota_exceeded" ? "Espace de stockage plein" : err?.code === "unsupported_type" ? "Type de fichier refusé" : "Envoi impossible, réessayez");
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
    <span class="chk ${isoValid(c.n) ? "v" : "x"}" title="${isoValid(c.n) ? "Chiffre de contrôle valide" : "Chiffre de contrôle à vérifier"}">${isoValid(c.n) ? "✓" : "!"}</span>
    <button type="button" class="ghost" data-ri="${i}" aria-label="Retirer ${esc(c.n)}">✕</button>
  </div>`).join("") || "<p class=\"note\" style=\"margin:4px 0\">Aucun conteneur ajouté.</p>";
    $("c-tot").textContent = draft.length;
    $("c-teu").textContent = draft.reduce((a, c) => a + TEU(c.t), 0);
  }
  function addNums(list){
    const t = $("c-type").value; const errs = []; let added = 0;
    list.map(clean).filter(Boolean).forEach(n => {
      if (!/^[A-Z]{4}\d{7}$/.test(n)) { errs.push(`${n} : format attendu 4 lettres + 7 chiffres`); return; }
      if (draft.some(c => c.n === n)) { errs.push(`${n} : déjà dans ce dossier`); return; }
      const other = items.find(it => it.id !== editing && !it.archive && ctnOf(it).some(c => c.n === n));
      if (other) {errs.push(`${n} : aussi présent dans le dossier ${other.ref} (ajouté quand même)`);}
      draft.push({n, t}); added++;
    });
    $("c-err").hidden = !errs.length; $("c-err").innerHTML = errs.map(esc).join("<br>");
    drawDraft(); return added;
  }
  $("c-add").addEventListener("click", () => { if (addNums([$("c-num").value])) {$("c-num").value = "";} $("c-num").focus(); });
  $("c-num").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); $("c-add").click(); } });
  $("c-paste-add").addEventListener("click", () => { const n = addNums($("c-paste").value.split(/[\s,;]+/)); if (n) { $("c-paste").value = ""; toast(`${n} conteneur(s) ajouté(s)`); } });
  $("c-list").addEventListener("click", e => { const b = e.target.closest("[data-ri]"); if (b) { draft.splice(+b.dataset.ri, 1); drawDraft(); } });
  $("c-list").addEventListener("change", e => { const s = e.target.closest("[data-ti]"); if (s) { draft[+s.dataset.ti].t = s.value; drawDraft(); } });

  $("form").addEventListener("submit", async e => {
    e.preventDefault();
    const data = {}; F.forEach(k => data[k] = $("f-" + k).value.trim());
    if (!data.ref || !data.fournisseur) { $("f-err").hidden = false; $("f-err").textContent = "Renseignez le n° de dossier et le fournisseur."; return; }
    if (data.diDate && data.diExp && data.diExp < data.diDate) { $("f-err").hidden = false; $("f-err").textContent = "La date d'expiration doit être après la date de la DI."; return; }
    const dup = items.find(x => x.id !== editing && x.ref.toLowerCase() === data.ref.toLowerCase());
    if (dup) { $("f-err").hidden = false; $("f-err").textContent = `Le n° ${data.ref} existe déjà${dup.archive ? " dans les archives" : ""}.`; return; }
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
      closePanels(); toast(old ? "Dossier mis à jour" : "Dossier créé");
    }
    catch (err) { $("f-err").hidden = false; $("f-err").textContent = err?.code === "quota_exceeded" ? "Espace plein : supprimez d'anciens dossiers archivés." : "Enregistrement impossible. Vérifiez votre connexion puis réessayez."; }
    finally { $("f-save").disabled = false; }
  });

  async function deleteDossier(id){
    const it = items.find(x => x.id === id); if (!it) {return;}
    const files = Object.values(it.docs || {}).map(d => d.id);
    await remove(id); files.forEach(f => assets?.delete(f).catch(() => {}));
    toast(`Dossier ${it.ref} supprimé`);
  }
  $("f-del").addEventListener("click", () => { $("f-del").hidden = true; $("f-del-confirm").hidden = false; $("f-del-no").focus(); });
  $("f-del-no").addEventListener("click", () => { $("f-del").hidden = false; $("f-del-confirm").hidden = true; });
  $("f-del-yes").addEventListener("click", async () => {
    if (!editing) {return;}
    const id = editing; $("f-del-yes").disabled = true;
    try {
      const ids = sessionUploads; sessionUploads = []; ids.forEach(x => assets?.delete(x).catch(() => {}));
      await deleteDossier(id); editing = null; closePanels();
    } catch { toast("Suppression impossible, réessayez."); }
    finally { $("f-del-yes").disabled = false; }
  });
  /* ---------- Incoterms ---------- */
  const incoOf = c => INCOTERMS.find(x => x[0] === c);
  function incoOptions(sel){
    const o = x => `<option value="${x[0]}"${x[0] === sel ? " selected" : ""}>${x[0]} — ${x[1]}</option>`;
    return `<option value="">Choisir…</option><optgroup label="Tous modes de transport">${INCOTERMS.filter(x => !x[4]).map(o).join("")}</optgroup><optgroup label="Maritime et fluvial uniquement">${INCOTERMS.filter(x => x[4]).map(o).join("")}</optgroup>`;
  }
  $("finco").innerHTML = `<option value="">Tous Incoterms</option>${INCOTERMS.map(x => `<option value="${x[0]}">${x[0]} — ${x[1]}</option>`).join("")}<option value="-">Non renseigné</option>`;
  document.addEventListener("input", e => { if (e.target.id === "ie-l") {incoDraft.l = e.target.value;} });
  document.addEventListener("change", e => { if (e.target.id === "ie-c") {incoDraft.c = e.target.value;} });
  document.addEventListener("keydown", e => {
    if (e.target.id === "ie-l" && e.key === "Enter") { e.preventDefault(); document.querySelector('[data-act="inco-save"]')?.click(); }
    if ((e.target.id === "ie-l" || e.target.id === "ie-c") && e.key === "Escape") { e.stopPropagation(); incoEdit = null; render(); }
  }, true);
  // Qui paie le transport principal, l'assurance et le dédouanement import
  const INCO_RESP = {EXW: ["Acheteur","Acheteur","Acheteur"], FCA: ["Acheteur","Acheteur","Acheteur"], FAS: ["Acheteur","Acheteur","Acheteur"], FOB: ["Acheteur","Acheteur","Acheteur"],
    CPT: ["Vendeur","Acheteur","Acheteur"], CFR: ["Vendeur","Acheteur","Acheteur"], CIP: ["Vendeur","Vendeur","Acheteur"], CIF: ["Vendeur","Vendeur","Acheteur"],
    DAP: ["Vendeur","Vendeur","Acheteur"], DPU: ["Vendeur","Vendeur","Acheteur"], DDP: ["Vendeur","Vendeur","Vendeur"]};
  function incoHint(){
    const c = $("f-incoterm").value, x = incoOf(c), el = $("inco-hint");
    document.querySelectorAll(".ichip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.ic === c)));
    $("inco-desc").innerHTML = x ? `<b class="mono">${x[0]}</b> — <span>${x[1]}</span>` : "<span>Non renseigné</span>";
    if (!x) { el.textContent = "Incoterms® 2020"; el.className = "hint"; return; }
    if (x[4] && $("f-mode").value === "air") { el.textContent = "Attention : cet Incoterm est réservé au transport maritime."; el.className = "hint warn"; return; }
    el.className = "hint"; el.textContent = x[4] ? "Maritime et fluvial uniquement" : "Tous modes de transport";
  }
  document.querySelectorAll(".ichip").forEach(b => b.addEventListener("click", () => { if (!canWrite) {return;} $("f-incoterm").value = b.dataset.ic; incoHint(); valTotals(); }));
  $("f-mode").addEventListener("change", incoHint);

  /* ---------- aperçu du dossier ---------- */
  let viewId = null;
  const kv = rows => `<dl class="kv">${rows.filter(r => r).map(([k, v, mono]) => `<dt>${k}</dt><dd${mono ? ' class="mono"' : ""}>${v === "" || v === null || v === undefined ? "—" : v}</dd>`).join("")}</dl>`;
  function renderView(id){
    const it = items.find(x => x.id === id); if (!it) { closePanels(); return; }
    const md = modeOf(it), si = Math.max(0, STATUTS.indexOf(it.statut)), dev = it.devise || "EUR";
    const cs = ctnOf(it), d = daysTo(it.eta), x = incoOf(it.incoterm), resp = INCO_RESP[it.incoterm];
    let dl = "";
    if (d !== null && !it.archive && si < 2) {dl = d < 0 ? ` <span class="d late">Retard ${-d} j</span>` : d === 0 ? " <span class=\"d soon\">Aujourd'hui</span>" : d <= 7 ? ` <span class="d soon">J-${d}</span>` : ` <span class="d ok">dans ${d} j</span>`;}
    const fob = fobOf(it), fr = num(it.fret), as = num(it.assurance), cif = fob + fr + as;
    const pct = v => cif ? (v / cif * 100).toFixed(2) + "%" : "0";
    const pay = it.paiement || "Non payé";
    const prods = it.produits || [];
    const html = `
  <div class="vhead">
    <div class="top"><span class="mode m-${md}">${MODE_SHORT[md]}</span><span class="pill s${si}">${esc(it.statut)}</span><span class="pay p${Math.max(0, PAIEMENTS.indexOf(pay))}" style="margin:0">${esc(pay)}</span>${it.incoterm ? `<span class="inco" style="font-size:12px;padding:2px 7px">${esc(it.incoterm)}${it.incotermLieu ? " " + esc(it.incotermLieu) : ""}</span>` : ""}${it.exemple ? '<span class="tag-ex">exemple</span>' : ""}${it.archive ? '<span class="tag-ex">Archivé</span>' : ""}</div>
    <h3>${esc(it.ref)}</h3>
    <div class="sup">${esc(it.fournisseur)}${it.marchandise ? ` <span>· ${esc(it.marchandise)}</span>` : ""}</div>
    <div class="stepper${si === 4 ? " done" : ""}" aria-label="Avancement">${STATUTS.map((s, k) => `<div class="${k <= si ? "on" : ""}"><i></i><span class="${k === si ? "cur" : ""}">${s}</span></div>`).join("")}</div>
  </div>
  <div class="vgrid">
    <section class="vsec"><h4><span>Achat</span></h4>${kv([
    ["N° PR", esc(it.pr), 1], ["N° PO", esc(it.po), 1], ["Date du PO", it.poDate ? fmtDate(it.poDate) : "", 1],
    ["Fournisseur", esc(it.fournisseur)], ["Paiement fournisseur", esc(pay)], ["Devise", dev, 1],
    ["Incoterm", x ? `<b class="mono">${x[0]}</b> — <span>${x[1]}</span>` : "<span>Non renseigné</span>"], ["Lieu Incoterm", esc(it.incotermLieu)]])}</section>
    <section class="vsec"><h4><span>Transport</span></h4>${kv([
    ["Mode de transport", MODES[md]], [md === "air" ? "Aéroport de départ" : "Port de chargement", esc(it.origine)],
    [md === "air" ? "Compagnie / n° de vol" : "Navire / voyage", esc(it.navire)], [md === "air" ? "N° LTA (AWB)" : md === "lcl" ? "N° BL / HBL" : "N° Bill of Lading", esc(it.bl), 1],
    [md === "air" ? "ETA aéroport" : "ETA Douala", (it.eta ? `<span class="mono">${fmtDate(it.eta)}</span>` : "") + dl],
    ["Transitaire", esc(it.transitaire)], ["N° dossier transitaire", esc(it.transitaireRef), 1], ["N° DI", esc(it.di), 1], ["Date DI", it.diDate ? fmtDate(it.diDate) : "", 1], ["Date d'expiration DI", it.diExp ? `<span class="mono">${fmtDate(it.diExp)}</span> ${diBadge(it)}` : ""]])}</section>
    <section class="vsec"><h4><span>Valeur du dossier</span><span>${dev}</span></h4>
      <div class="cifbig"><span>Total CIF</span><b>${esc(money(cif, dev))}</b></div>
      <div class="vbar" role="img" aria-label="FOB · Fret · Assurance"><i style="width:${pct(fob)};background:var(--steel)"></i><i style="width:${pct(fr)};background:var(--brand-blue)"></i><i style="width:${pct(as)};background:var(--brand-orange)"></i></div>
      <div class="vleg"><span style="--c:var(--steel)">FOB</span><span style="--c:var(--brand-blue)">Fret</span><span style="--c:var(--brand-orange)">Assurance</span></div>
      ${kv([[it.incoterm ? `Montant facture (${it.incoterm})` : "Montant facture", factureOf(it) === "" ? "" : esc(money(factureOf(it), dev)), 1], num(it.fraisAvant) ? ["Frais jusqu'à bord (à ajouter)", esc(money(it.fraisAvant, dev)), 1] : null, num(it.fraisApres) ? ["Frais après arrivée (inclus, à déduire)", esc(money(it.fraisApres, dev)), 1] : null, ["Total FOB", esc(money(fob, dev)), 1], ["Fret", esc(money(fr, dev)), 1], ["Assurance", esc(money(as, dev)), 1],
    resp ? ["Fret payé par", resp[0]] : null, resp ? ["Assurance payée par", resp[1]] : null, resp ? ["Dédouanement import", resp[2]] : null])}</section>
    <section class="vsec"><h4><span>${md === "fcl" ? "Conteneurs" : "Lot"}</span>${md === "fcl" ? `<span>${cs.length} ctn · ${teuOf(it)} EVP</span>` : ""}</h4>
      ${md === "fcl"
    ? (cs.length ? `<div class="chips" style="max-width:none">${cs.map(c => `<span class="chip" title="${isoValid(c.n) ? "Chiffre de contrôle valide" : "Chiffre de contrôle à vérifier"}">${esc(c.n)}<i>${esc(c.t)}</i> ${isoValid(c.n) ? "✓" : "!"}</span>`).join("")}</div>` + kv([["Conteneurs 20' / 40'", `${cs.filter(c => TEU(c.t) === 1).length} / ${cs.filter(c => TEU(c.t) === 2).length}`, 1], ["EVP", teuOf(it), 1]]) : "<p class=\"note\" style=\"margin:0\">Aucun conteneur</p>")
    : kv([["Nombre de colis", nfmt(it.colis), 1], ["Poids brut (kg)", nfmt(it.poids, 2), 1], md === "lcl" ? ["Volume (m³)", nfmt(it.volume, 3), 1] : ["Poids taxable (kg)", nfmt(it.taxable, 2), 1]])}
    </section>
    <section class="vsec wide"><h4><span>Produits</span><span>${prods.length}</span></h4>
      ${prods.length ? `<div style="overflow-x:auto"><table class="vtbl"><thead><tr><th>Code article</th><th>Désignation</th><th>Code SH</th><th class="r">Quantité</th><th>Unité</th><th class="r">Prix unitaire</th><th class="r">Montant</th></tr></thead>
        <tbody>${prods.map(q => `<tr><td class="mono">${esc(q.code)}</td><td>${esc(q.des)}</td><td class="mono">${esc(q.hs)}</td><td class="r">${nfmt(q.qte, 3)}</td><td>${esc(q.u)}</td><td class="r">${esc(money(q.pu, ""))}</td><td class="r">${esc(money(lineAmt(q), ""))}</td></tr>`).join("")}</tbody>
        <tfoot><tr><td colspan="6">Montant total</td><td class="r">${esc(money(prodTotal(it), dev))}</td></tr></tfoot></table></div>` : "<p class=\"note\" style=\"margin:0\">Aucun produit</p>"}
    </section>
    <section class="vsec wide"><h4><span>Documents du dossier</span><span>${docCount(it)} / ${DOCS.length}</span></h4>
      <div class="vdocs">${DOCS.map(([k, _code, label]) => { const f = it.docs && it.docs[k];
    return `<div class="vdoc${f ? " has" : ""}"><span class="ic">${f ? "✓" : "—"}</span><span class="lb">${label}</span>${f ? `<a href="/_blob/${esc(f.id)}" data-file="${esc(f.id)}" data-name="${esc(f.name)}" target="_blank" rel="noopener">Ouvrir</a>` : "<span></span>"}</div>`; }).join("")}</div>
    </section>
    <section class="vsec wide"><h4><span>Notes</span></h4>${it.notes ? `<p class="vnotes">${esc(it.notes)}</p>` : "<p class=\"note\" style=\"margin:0\">Aucune note</p>"}</section>
  </div>
  <div class="vmeta">${it.creeLe ? `<span><span>Créé le</span> ${fmtDate(it.creeLe.slice(0, 10))}</span>` : ""}${it.majLe ? `<span><span>Mis à jour le</span> ${fmtDate(it.majLe.slice(0, 10))}</span>` : ""}${it.archiveLe ? `<span><span>Archivé le</span> ${fmtDate(it.archiveLe.slice(0, 10))}</span>` : ""}</div>`;
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
        incoEdit = null; render(); toast("Incoterm enregistré");
      }
      else if (a === "edit") { $("p-view").hidden = true; viewId = null; openForm(id); }
      else if (a === "archive") { await save(id, strip({...it, archive: true, archiveLe: new Date().toISOString(), majLe: new Date().toISOString()})); toast(`${it.ref} archivé`); }
      else if (a === "restore") { await save(id, strip({...it, archive: false, archiveLe: "", majLe: new Date().toISOString()})); toast(`${it.ref} restauré`); }
      else if (a === "del") { pendingConfirm = id; render(); }
      else if (a === "del-no") { pendingConfirm = null; render(); }
      else if (a === "del-yes") {
        pendingConfirm = null; await deleteDossier(id);
      }
    } catch { toast("Action impossible, réessayez."); }
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
      .filter(i => !$("r-pay").value || (i.paiement || "Non payé") === $("r-pay").value)
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
      const v = k === "fcl" ? `${g.reduce((a, i) => a + ctnOf(i).length, 0)} ctn` : k === "lcl" ? `${nfmt(g.reduce((a, i) => a + num(i.volume), 0), 3)} m³` : `${nfmt(g.reduce((a, i) => a + num(i.poids), 0), 2)} kg`;
      return `<tr><td>${MODES[k]}</td><td class="mono">${g.length}</td><td>${v}</td></tr>`; }).join("") || "<tr><td colspan=\"3\" class=\"note\">Aucun dossier dans ce périmètre</td></tr>";
    $("r-bystat").innerHTML = STATUTS.map(st => { const g = s.filter(i => i.statut === st); return g.length ? `<tr><td>${st}</td><td class="mono">${g.length}</td><td>${g.reduce((a, i) => a + ctnOf(i).length, 0)}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"3\" class=\"note\">Aucun dossier dans ce périmètre</td></tr>";
    const bt = {}; allC.forEach(c => bt[c.t] = (bt[c.t] || 0) + 1);
    $("r-bytype").innerHTML = Object.entries(bt).map(([t, n]) => `<tr><td>${esc(t)}</td><td>${n}</td></tr>`).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun conteneur</td></tr>";
    const an = annualData();
    $("r-annual").innerHTML = an.years.map(y => `<tr><td class="mono">${y.label}</td><td class="r">${y.liv.n}</td><td class="r">${y.non.n}</td><td class="r">${y.liv.n + y.non.n ? Math.round(y.liv.n / (y.liv.n + y.non.n) * 100) : 0} %</td></tr>`).join("") || "<tr><td colspan=\"4\" class=\"note\">Aucun dossier</td></tr>";
    $("r-bydi").innerHTML = ["Expirée", `Expire ≤ ${DI_ALERT} j`, "Valide", "Clôturée (livré)", "Sans DI"].map(l => { const n = s.filter(i => diLabel(i) === l).length; return n ? `<tr><td>${l}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun dossier</td></tr>";
    $("r-byinco").innerHTML = [...INCOTERMS.map(x => x[0]), ""].map(c => { const n = s.filter(i => (i.incoterm || "") === c).length; return n ? `<tr><td>${c ? `<span class="inco">${c}</span>${incoOf(c)[1]}` : "Non renseigné"}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun dossier</td></tr>";
    $("r-bypay").innerHTML = PAIEMENTS.map(p => { const n = s.filter(i => (i.paiement || "Non payé") === p).length; return n ? `<tr><td>${p}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Aucun dossier</td></tr>";
    $("r-bydoc").innerHTML = DOCS.map(([k, , label]) => { const n = s.filter(i => !(i.docs && i.docs[k])).length; return n ? `<tr><td>${label}</td><td>${n}</td></tr>` : ""; }).join("") || "<tr><td colspan=\"2\" class=\"note\">Tous les documents sont joints</td></tr>";
    drawPreview();
  }
  $("r-base").addEventListener("change", () => { const t = $("r-base").value === "po" ? "PO" : "ETA"; $("l-from").textContent = `${t} du`; $("l-to").textContent = `${t} au`; });
  ["r-scope","r-stat","r-mode","r-pay","r-from","r-to","r-base","r-view"].forEach(id => $(id).addEventListener("input", drawReport));
  $("btn-report").addEventListener("click", () => { $("r-scope").value = view; drawReport(); openPanel("p-report"); });

  const pad = n => String(n).padStart(2, "0");
  const _stamp = () => new Date().toISOString().slice(0, 10);
  const nowParts = () => { const d = new Date(); return {d, txt: `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} à ${pad(d.getHours())}:${pad(d.getMinutes())}`, file: `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}h${pad(d.getMinutes())}`}; };
  const utc = d => d ? new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) : null;
  const xDate = iso => iso ? utc(new Date(iso.slice(0, 10) + "T00:00:00")) : null;
  const xNum = v => (v === "" || v === null || v === undefined) ? null : num(v);

  /* ---------- périodes ---------- */
  const MOIS = ["Janv.","Févr.","Mars","Avr.","Mai","Juin","Juil.","Août","Sept.","Oct.","Nov.","Déc."];
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
      livres: g.filter(i => i.statut === "Livré").length, v: {}
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
    // légende
    let lx = 16; const ly = 38;
    if (o.series.length > 1) {o.series.forEach(se => { x.fillStyle = se.color; x.fillRect(lx, ly + 2, 10, 10); x.fillStyle = pal.muted; x.font = font(400, 12); x.fillText(tr(se.name), lx + 14, ly); lx += 14 + x.measureText(tr(se.name)).width + 16; });}
    const n = o.labels.length;
    const totals = o.labels.map((_, k) => o.stacked ? o.series.reduce((a, se) => a + (se.values[k] || 0), 0) : Math.max(0, ...o.series.map(se => se.values[k] || 0)));
    const max = niceMax(Math.max(0, ...totals));
    if (!n || !totals.some(v => v > 0)) { x.fillStyle = pal.muted; x.font = font(400, 13); x.fillText(tr("Aucune donnée sur la période"), 16, H / 2); return cv; }
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
        {name: "Maritime FCL", color: CH.steel, values: mm.map(m => m.fcl)}, {name: "LCL", color: CH.amber, values: mm.map(m => m.lcl)}, {name: "Aérien", color: CH.orange, values: mm.map(m => m.air)}]},
      {title: `Conteneurs par mois (${B})`, labels: pm.map(p => p.label), stacked: true, series: [
        {name: "20'", color: CH.blue, values: mm.map(m => m.c20)}, {name: "40'", color: CH.steel, values: mm.map(m => m.c40)}]},
      {title: `Dossiers par semaine (${B})${pw.length > 26 ? " — 26 dernières semaines" : ""}`, labels: wk.map(p => p.label), stacked: true, series: [
        {name: "Maritime FCL", color: CH.steel, values: wkm.map(m => m.fcl)}, {name: "LCL", color: CH.amber, values: wkm.map(m => m.lcl)}, {name: "Aérien", color: CH.orange, values: wkm.map(m => m.air)}]},
      {title: `EVP par semaine (${B})${pw.length > 26 ? " — 26 dernières semaines" : ""}`, labels: wk.map(p => p.label), series: [{name: "EVP", color: CH.blue, values: wkm.map(m => m.evp)}]},
    ];
    if (main) {list.push({title: `Valeur CIF par mois (${main})`, labels: pm.map(p => p.label), stacked: true, series: [
      {name: "FOB", color: CH.steel, values: mm.map(m => m.v[main].fob)}, {name: "Fret", color: CH.blue, values: mm.map(m => m.v[main].fret)}, {name: "Assurance", color: CH.orange, values: mm.map(m => m.v[main].ass)}]});}
    list.push({title: "Dossiers par statut", labels: STATUTS, horizontal: true, series: [{name: "Dossiers", color: CH.steel, values: STATUTS.map(st => s.filter(i => i.statut === st).length)}]});
    list.push({title: "Paiement fournisseur", labels: PAIEMENTS, horizontal: true, series: [{name: "Dossiers", color: CH.orange, values: PAIEMENTS.map(p => s.filter(i => (i.paiement || "Non payé") === p).length)}]});
    return list;
  }

  /* ---------- classeur Excel (ExcelJS) ---------- */
  const XC = {head: "FF0A6D98", headTxt: "FFFFFFFF", band: "FFEAF4F9", tot: "FFFDE5DA", line: "FFD3DEE4", title: "FF0A6D98", orange: "FFEB4E1B", muted: "FF5B6B75"};
  const F_INT = "#,##0", F_DEC = "#,##0.00", F_DATE = "dd/mm/yyyy", F_M3 = "#,##0.000";
  function titleBlock(ws, title, meta, ncol){
    ws.mergeCells(1, 1, 1, Math.max(2, ncol));
    const c = ws.getCell(1, 1); c.value = `AFRILUX SMART — ${tr(title)}`; c.font = {bold: true, size: 14, color: {argb: XC.title}};
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
      {h: "Dossiers", w: 9, f: F_INT}, {h: "Maritime FCL", w: 10, f: F_INT}, {h: "LCL", w: 7, f: F_INT}, {h: "Aérien", w: 8, f: F_INT},
      {h: "Ctn 20'", w: 8, f: F_INT}, {h: "Ctn 40'", w: 8, f: F_INT}, {h: "EVP", w: 7, f: F_INT},
      {h: "Volume LCL (m³)", w: 11, f: F_M3}, {h: "Poids aérien (kg)", w: 12, f: F_DEC}, {h: "Livrés", w: 8, f: F_INT},
      ...devs.flatMap(d => [{h: `FOB ${d}`, w: 14, f: F_DEC}, {h: `Fret ${d}`, w: 12, f: F_DEC}, {h: `Assurance ${d}`, w: 12, f: F_DEC}, {h: `CIF ${d}`, w: 14, f: F_DEC}])
    ];
    const rows = ps.map(p => { const m = metrics(p.items, devs); return [p.label, utc(p.start), utc(p.end), m.dos, m.fcl, m.lcl, m.air, m.c20, m.c40, m.evp, +m.m3.toFixed(3), +m.kg.toFixed(2), m.livres,
      ...devs.flatMap(d => [+m.v[d].fob.toFixed(2), +m.v[d].fret.toFixed(2), +m.v[d].ass.toFixed(2), +m.v[d].cif.toFixed(2)])]; });
    const ws = wb.addWorksheet(tr(name), {views: [{state: "frozen", ySplit: 5, xSplit: 1}], pageSetup: {orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
    titleBlock(ws, title, meta, 10);
    table(ws, 5, cols, rows, {totals: cols.map((_, j) => j).filter(j => j >= 3)});
    // détail : dossiers par période
    let r = 5 + rows.length + 3;
    ws.getCell(r, 1).value = tr(`Détail des dossiers par ${kind === "mois" ? "mois" : "semaine"} (${baseLabel()})`); ws.getCell(r, 1).font = {bold: true, size: 12, color: {argb: XC.title}};
    r += 1;
    const dcols = [{h: kind === "mois" ? "Mois" : "Semaine"}, {h: baseLabel(), f: F_DATE}, {h: "N° dossier"}, {h: "Transport"}, {h: "Fournisseur"}, {h: "N° PO"}, {h: "Statut"}, {h: "Paiement"}, {h: "Ctn / colis", f: F_INT}, {h: "Devise"}, {h: "CIF", f: F_DEC}];
    const drows = ps.flatMap(p => p.items.slice().sort((a, b) => String(dateOf(a)).localeCompare(String(dateOf(b)))).map(i => [p.label, xDate(dateOf(i)), i.ref, MODE_SHORT[modeOf(i)], i.fournisseur, i.po || "", i.statut, i.paiement || "Non payé", modeOf(i) === "fcl" ? ctnOf(i).length : xNum(i.colis), i.devise || "EUR", +cifOf(i).toFixed(2)]));
    table(ws, r, dcols, drows, {filter: false, keepWidths: true});
    [5, 6, 7, 8].forEach(c => { if ((ws.getColumn(c).width || 0) < 14) {ws.getColumn(c).width = 14;} });
    return ws;
  }
  async function buildWorkbook(){
    const s = repSet(), np = nowParts();
    const fr = $("r-from").value, to = $("r-to").value;
    const sep = LANG === "zh" ? "：" : LANG === "en" ? ": " : " : ";
    const filtres = [[T("Périmètre"), $("r-scope").selectedOptions[0].text], [T("Transport"), $("r-mode").selectedOptions[0].text], [T("Statut"), $("r-stat").selectedOptions[0].text], [T("Paiement"), $("r-pay").selectedOptions[0].text], [T("Périodes selon"), T(baseLabel())]]
      .map(([a, b]) => a + sep + b).join(" · ") + (fr || to ? ` · ${T("du")} ${fr ? fmtDate(fr) : "…"} ${T("au")} ${to ? fmtDate(to) : "…"}` : "");
    const meta = {txt: np.txt, filtres};
    const wb = new ExcelJS.Workbook();
    wb.creator = "Afrilux Smart — Suivi Import"; wb.company = "Afrilux Smart"; wb.created = np.d; wb.title = "Rapport Suivi Import";
    const devs = devisesIn(s);
    const all = metrics(s, devs);

    // 1. Synthèse
    const ws = wb.addWorksheet(tr("Synthèse"), {views: [{showGridLines: false}], pageSetup: {orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0}});
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
    block("Indicateurs clés", [{h: "Indicateur"}, {h: "Valeur", f: F_INT}], [
      ["Dossiers", all.dos], ["dont maritime FCL", all.fcl], ["dont LCL (groupage)", all.lcl], ["dont aérien", all.air],
      ["Conteneurs 20'", all.c20], ["Conteneurs 40'", all.c40], ["Total EVP", all.evp],
      ["Volume LCL (m³)", +all.m3.toFixed(3)], ["Poids aérien (kg)", +all.kg.toFixed(2)], ["Dossiers livrés", all.livres]]);
    ws.getCell(r - 4, 2).numFmt = F_M3; ws.getCell(r - 3, 2).numFmt = F_DEC;
    if (devs.length) {block("Valeurs par devise", [{h: "Devise"}, {h: "FOB", f: F_DEC}, {h: "Fret", f: F_DEC}, {h: "Assurance", f: F_DEC}, {h: "Total CIF", f: F_DEC}],
      devs.map(d => [d, +all.v[d].fob.toFixed(2), +all.v[d].fret.toFixed(2), +all.v[d].ass.toFixed(2), +all.v[d].cif.toFixed(2)]));}
    block("Par statut", [{h: "Statut"}, {h: "Dossiers", f: F_INT}, {h: "Conteneurs", f: F_INT}], STATUTS.map(st => { const g = s.filter(i => i.statut === st); return [st, g.length, g.reduce((a, i) => a + ctnOf(i).length, 0)]; }));
    block("Par Incoterm", [{h: "Incoterm"}, {h: "Dossiers", f: F_INT}], [...INCOTERMS.map(x => [`${x[0]} — ${x[1]}`, s.filter(i => i.incoterm === x[0]).length]).filter(r => r[1]), ["Non renseigné", s.filter(i => !i.incoterm).length]].filter(r => r[1]));
    block("Paiement fournisseur", [{h: "Statut"}, {h: "Dossiers", f: F_INT}], PAIEMENTS.map(p => [p, s.filter(i => (i.paiement || "Non payé") === p).length]));
    block("Documents manquants", [{h: "Document"}, {h: "Dossiers", f: F_INT}], DOCS.map(([k, , l]) => [l, s.filter(i => !(i.docs && i.docs[k])).length]));

    // Rapport annuel des PO
    annualSheets(wb, meta);
    // 2-3. Par mois / par semaine
    periodSheet(wb, "Par mois", `ACTIVITÉ PAR MOIS (${baseLabel().toUpperCase()})`, meta, s, "mois");
    periodSheet(wb, "Par semaine", `ACTIVITÉ PAR SEMAINE ISO (${baseLabel().toUpperCase()})`, meta, s, "sem");

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
    sheetWithTable(wb, "Suivi DI", "SUIVI DES DÉCLARATIONS D'IMPORTATION (DI)", meta, [
      {h: "N° dossier", w: 15}, {h: "N° DI", w: 18}, {h: "Date DI", w: 11, f: F_DATE}, {h: "Date d'expiration DI", w: 13, f: F_DATE}, {h: "Jours restants", w: 10, f: F_INT},
      {h: "État DI", w: 14}, {h: "Statut", w: 18}, {h: "Fournisseur", w: 26}, {h: "N° PO", w: 16}, {h: "Transport", w: 22}, {h: "ETA", w: 11, f: F_DATE}, {h: "Transitaire", w: 20}],
    s.filter(i => i.di || i.diExp || i.diDate).slice().sort((a, b) => String(a.diExp || "9999").localeCompare(String(b.diExp || "9999"))).map(i => [
      i.ref, i.di || "", xDate(i.diDate), xDate(i.diExp), i.diExp ? daysTo(i.diExp) : null, diLabel(i), i.statut, i.fournisseur, i.po || "", MODES[modeOf(i)], xDate(i.eta), i.transitaire || ""]),
    {xSplit: 1});
    // 5. Dossiers
    sheetWithTable(wb, "Dossiers", "DOSSIERS D'IMPORT", meta, [
      {h: "N° dossier", w: 15}, {h: "Transport", w: 22}, {h: "Statut", w: 16}, {h: "Mois", w: 11}, {h: "Semaine", w: 11}, {h: "N° PR", w: 14}, {h: "N° PO", w: 16}, {h: "Date PO", w: 11, f: F_DATE},
      {h: "Fournisseur", w: 26}, {h: "Paiement fournisseur", w: 15}, {h: "Devise", w: 8}, {h: "Incoterm", w: 9}, {h: "Lieu Incoterm", w: 16}, {h: "Montant facture", w: 15, f: F_DEC}, {h: "Nb produits", w: 9, f: F_INT}, {h: "Valeur produits", w: 14, f: F_DEC},
      {h: "Total FOB", w: 14, f: F_DEC}, {h: "Fret", w: 12, f: F_DEC}, {h: "Assurance", w: 12, f: F_DEC}, {h: "Total CIF", w: 14, f: F_DEC},
      {h: "Marchandise", w: 22}, {h: "Origine", w: 16}, {h: "Navire / Vol", w: 22}, {h: "N° BL / LTA", w: 18}, {h: "ETA", w: 11, f: F_DATE},
      {h: "Transitaire", w: 20}, {h: "N° dossier transitaire", w: 16}, {h: "N° DI", w: 16}, {h: "Date DI", w: 11, f: F_DATE}, {h: "Date d'expiration DI", w: 13, f: F_DATE}, {h: "État DI", w: 14}, {h: "Nb 20'", w: 7, f: F_INT}, {h: "Nb 40'", w: 7, f: F_INT}, {h: "EVP", w: 6, f: F_INT},
      {h: "Colis", w: 8, f: F_INT}, {h: "Poids (kg)", w: 11, f: F_DEC}, {h: "Volume (m³)", w: 11, f: F_M3}, {h: "Poids taxable (kg)", w: 12, f: F_DEC},
      {h: "N° conteneurs", w: 40}, {h: "Docs joints", w: 9}, {h: "Archivé", w: 8}, {h: "Archivé le", w: 11, f: F_DATE}, {h: "Notes", w: 30}],
    s.map(i => { const c = ctnOf(i), fcl = modeOf(i) === "fcl", d = dateOf(i), dt = d ? new Date(d + "T00:00:00") : null, w = dt ? isoWeek(dt) : null;
      return [i.ref, MODES[modeOf(i)], i.statut, dt ? `${MOIS[dt.getMonth()]} ${dt.getFullYear()}` : "", w ? `S${pad(w.w)} ${w.y}` : "", i.pr || "", i.po || "", xDate(i.poDate),
        i.fournisseur, i.paiement || "Non payé", i.devise || "EUR", i.incoterm || "", i.incotermLieu || "", factureOf(i) === "" ? null : +num(factureOf(i)).toFixed(2), (i.produits || []).length, +prodTotal(i).toFixed(2),
        +fobOf(i).toFixed(2), +num(i.fret).toFixed(2), +num(i.assurance).toFixed(2), +cifOf(i).toFixed(2),
        i.marchandise || "", i.origine || "", i.navire || "", i.bl || "", xDate(i.eta), i.transitaire || "", i.transitaireRef || "", i.di || "", xDate(i.diDate), xDate(i.diExp), diLabel(i),
        fcl ? c.filter(x => TEU(x.t) === 1).length : null, fcl ? c.filter(x => TEU(x.t) === 2).length : null, fcl ? teuOf(i) : null,
        xNum(i.colis), xNum(i.poids), xNum(i.volume), xNum(i.taxable), c.map(x => x.n).join(", "), `${docCount(i)}/${DOCS.length}`, i.archive ? "Oui" : "Non", i.archiveLe ? xDate(i.archiveLe.slice(0, 10)) : null, i.notes || ""]; }),
    {xSplit: 1, totals: [14, 31, 32, 33, 34, 35, 36, 37]});
    // 6. Produits
    sheetWithTable(wb, "Produits", "PRODUITS", meta, [
      {h: "N° dossier", w: 15}, {h: "N° PO", w: 16}, {h: "Fournisseur", w: 26}, {h: "Transport", w: 10}, {h: "Code article", w: 14}, {h: "Désignation", w: 36}, {h: "Code SH", w: 12},
      {h: "Quantité", w: 10, f: F_DEC}, {h: "Unité", w: 8}, {h: "Prix unitaire", w: 13, f: F_DEC}, {h: "Montant", w: 14, f: F_DEC}, {h: "Devise", w: 8}, {h: "ETA", w: 11, f: F_DATE}, {h: "Statut", w: 16}, {h: "Archivé", w: 8}],
    s.flatMap(i => (i.produits || []).map(p => [i.ref, i.po || "", i.fournisseur, MODE_SHORT[modeOf(i)], p.code || "", p.des || "", p.hs || "", xNum(p.qte), p.u || "", xNum(p.pu), +lineAmt(p).toFixed(2), i.devise || "EUR", xDate(i.eta), i.statut, i.archive ? "Oui" : "Non"])),
    {xSplit: 1});
    // 7. Conteneurs
    sheetWithTable(wb, "Conteneurs", "CONTENEURS (MARITIME FCL)", meta, [
      {h: "N° conteneur", w: 15}, {h: "Type", w: 7}, {h: "EVP", w: 6, f: F_INT}, {h: "Contrôle ISO 6346", w: 14}, {h: "N° dossier", w: 15}, {h: "N° PO", w: 16}, {h: "Fournisseur", w: 26},
      {h: "Navire", w: 22}, {h: "N° Bill of Lading", w: 18}, {h: "N° dossier transitaire", w: 16}, {h: "ETA", w: 11, f: F_DATE}, {h: "Statut", w: 16}, {h: "Archivé", w: 8}],
    s.flatMap(i => ctnOf(i).map(c => [c.n, c.t, TEU(c.t), isoValid(c.n) ? "OK" : "À vérifier", i.ref, i.po || "", i.fournisseur, i.navire || "", i.bl || "", i.transitaireRef || "", xDate(i.eta), i.statut, i.archive ? "Oui" : "Non"])),
    {xSplit: 1, totals: [2]});
    // 8. LCL & aérien
    sheetWithTable(wb, "Groupage & aérien", "GROUPAGE LCL & FRET AÉRIEN", meta, [
      {h: "N° dossier", w: 15}, {h: "Transport", w: 22}, {h: "N° BL / LTA", w: 18}, {h: "Navire / Vol", w: 22}, {h: "Origine", w: 16}, {h: "Colis", w: 8, f: F_INT},
      {h: "Poids (kg)", w: 11, f: F_DEC}, {h: "Volume (m³)", w: 11, f: F_M3}, {h: "Poids taxable (kg)", w: 13, f: F_DEC}, {h: "Fournisseur", w: 26}, {h: "ETA", w: 11, f: F_DATE}, {h: "Statut", w: 16}, {h: "Archivé", w: 8}],
    s.filter(i => modeOf(i) !== "fcl").map(i => [i.ref, MODES[modeOf(i)], i.bl || "", i.navire || "", i.origine || "", xNum(i.colis), xNum(i.poids), xNum(i.volume), xNum(i.taxable), i.fournisseur, xDate(i.eta), i.statut, i.archive ? "Oui" : "Non"]),
    {xSplit: 1, totals: [5, 6, 7, 8]});
    // 9. Documents
    sheetWithTable(wb, "Documents", "SUIVI DES DOCUMENTS", meta,
      [{h: "N° dossier", w: 15}, {h: "Transport", w: 10}, {h: "Fournisseur", w: 26}, ...DOCS.map(d => ({h: d[2], w: 13})), {h: "Total", w: 8}],
      s.map(i => [i.ref, MODE_SHORT[modeOf(i)], i.fournisseur, ...DOCS.map(([k]) => i.docs && i.docs[k] ? "Oui" : "—"), `${docCount(i)}/${DOCS.length}`]),
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
      const g = map.get(y), k = i.statut === "Livré" ? g.liv : g.non, dev = i.devise || "EUR";
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
    n.value = tr("Tous les dossiers (en cours et archivés), regroupés par année du PO. Un PO est « livré » quand son dossier a le statut Livré. Montant = valeur FOB du PO.");
    n.font = {italic: true, size: 9, color: {argb: XC.muted}}; n.alignment = {wrapText: true}; ws.getRow(4).height = 26;
    const cols = [{h: "Année", w: 11}, {h: "PO livrés", w: 11, f: F_INT}, {h: "PO non livrés", w: 13, f: F_INT}, {h: "Total PO", w: 10, f: F_INT}, {h: "% livrés", w: 10, f: "0%"},
      ...devs.flatMap(d => [{h: `Montant livré ${d}`, w: 17, f: F_DEC}, {h: `Montant non livré ${d}`, w: 19, f: F_DEC}, {h: `Total ${d}`, w: 17, f: F_DEC}])];
    const rows = years.map(y => { const t = y.liv.n + y.non.n; return [y.label, y.liv.n, y.non.n, t, t ? y.liv.n / t : 0,
      ...devs.flatMap(d => { const a = y.liv.v[d] || 0, b = y.non.v[d] || 0; return [+a.toFixed(2), +b.toFixed(2), +(a + b).toFixed(2)]; })]; });
    const end = table(ws, 6, cols, rows, {totals: cols.map((_, j) => j).filter(j => j >= 1 && j !== 4)});
    if (rows.length) { const c = ws.getCell(end, 5); c.value = {formula: `IF(D${end}=0,0,B${end}/D${end})`}; c.numFmt = "0%"; }
    // graphiques
    const real = years.filter(y => y.key !== "zz");
    const main = devs.slice().sort((a, b) => years.reduce((s, y) => s + (y.liv.v[b] || 0) + (y.non.v[b] || 0), 0) - years.reduce((s, y) => s + (y.liv.v[a] || 0) + (y.non.v[a] || 0), 0))[0];
    const charts = [{title: "Nombre de PO livrés / non livrés par année", labels: real.map(y => y.label), series: [
      {name: "Livrés", color: CH.green, values: real.map(y => y.liv.n)}, {name: "Non livrés", color: CH.orange, values: real.map(y => y.non.n)}]}];
    if (main) {charts.push({title: `Montant PO par année (${main})`, labels: real.map(y => y.label), series: [
      {name: "Livrés", color: CH.green, values: real.map(y => y.liv.v[main] || 0)}, {name: "Non livrés", color: CH.orange, values: real.map(y => y.non.v[main] || 0)}]});}
    const top = end + 2;
    charts.forEach((o, k) => {
      const cv = chart(Object.assign({w: 760, h: 380}, o));
      ws.addImage(wb.addImage({base64: cv.toDataURL("image/png"), extension: "png"}), {tl: {col: k * 7, row: top}, ext: {width: 620, height: 310}});
    });
    // détail
    sheetWithTable(wb, "Détail des PO", "DÉTAIL DES PO", meta, [
      {h: "Année", w: 9}, {h: "N° PO", w: 16}, {h: "Date PO", w: 11, f: F_DATE}, {h: "N° PR", w: 14}, {h: "Fournisseur", w: 26}, {h: "N° dossier", w: 15},
      {h: "Transport", w: 22}, {h: "Incoterm", w: 9}, {h: "Statut", w: 18}, {h: "Livré ?", w: 9}, {h: "Paiement fournisseur", w: 16}, {h: "Devise", w: 8}, {h: "Montant PO", w: 15, f: F_DEC}, {h: "ETA", w: 11, f: F_DATE}, {h: "Archivé", w: 8}],
    all.slice().sort((a, b) => (poYear(a) || "9999").localeCompare(poYear(b) || "9999") || String(a.po || "").localeCompare(String(b.po || ""))).map(i => [
      poYear(i) || "Sans date", i.po || "", xDate(i.poDate), i.pr || "", i.fournisseur, i.ref, MODES[modeOf(i)], i.incoterm || "", i.statut, i.statut === "Livré" ? "Oui" : "Non",
      i.paiement || "Non payé", i.devise || "EUR", +fobOf(i).toFixed(2), xDate(i.eta), i.archive ? "Oui" : "Non"]),
    {xSplit: 2, totals: [12]});
  }
  async function deliver(wb, file, btn){
    const lbl = btn.textContent; btn.disabled = true; btn.textContent = tr("Préparation…");
    try {
      const buf = await wb.xlsx.writeBuffer();
      const blob = new Blob([buf], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      let dl = null; try { dl = await window.claude?.use?.("downloads"); } catch {}
      if (!dl) { if (STANDALONE) { saveBlobLocal(file, blob); toast(`${file} téléchargé`); } else {toast("Le téléchargement n'est pas disponible dans cette vue.");} return; }
      try { await dl.save({filename: file, data: blob}); toast(`${file} prêt`); }
      catch (e) { toast(e?.code === "dismissed" || e?.code === "declined" ? "Téléchargement annulé" : "Téléchargement impossible, réessayez"); }
    } catch (e) { console.error(e); toast("Création du rapport impossible"); }
    finally { btn.disabled = false; btn.textContent = lbl; }
  }
  $("r-annual-xlsx").addEventListener("click", async () => {
    if (!window.ExcelJS) { toast("Le module Excel n'a pas pu se charger. Vérifiez la connexion internet puis rechargez la page."); return; }
    try {
      const np = nowParts();
      const sep = LANG === "zh" ? "：" : LANG === "en" ? ": " : " : ";
      const meta = {txt: np.txt, filtres: `${T("Périmètre")}${sep}${T("Tous les dossiers")} · ${T("Transport")}${sep}${$("r-mode").selectedOptions[0].text}`};
      const wb = new ExcelJS.Workbook(); wb.creator = "Afrilux Smart — Suivi Import"; wb.created = np.d;
      annualSheets(wb, meta);
      await deliver(wb, `afrilux_rapport-annuel-PO_${np.file}.xlsx`, $("r-annual-xlsx"));
    } catch (e) { console.error(e); toast("Création du rapport impossible"); }
  });
  $("r-xlsx").addEventListener("click", async () => {
    if (!window.ExcelJS) { toast("Le module Excel n'a pas pu se charger. Vérifiez la connexion internet puis rechargez la page."); return; }
    const btn = $("r-xlsx"); btn.disabled = true; const lbl = btn.textContent; btn.textContent = "Préparation…";
    try {
      const {wb, file} = await buildWorkbook();
      const buf = await wb.xlsx.writeBuffer();
      const blob = new Blob([buf], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      let dl = null; try { dl = await window.claude?.use?.("downloads"); } catch {}
      if (!dl) { if (STANDALONE) { saveBlobLocal(file, blob); toast(`${file} téléchargé`); } else {toast("Le téléchargement n'est pas disponible dans cette vue.");} return; }
      try { await dl.save({filename: file, data: blob}); toast(`${file} prêt`); }
      catch (e) { toast(e?.code === "dismissed" || e?.code === "declined" ? "Téléchargement annulé" : "Téléchargement impossible, réessayez"); }
    } catch (e) { console.error(e); toast("Création du rapport impossible"); }
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
    const sep = LANG === "zh" ? "：" : LANG === "en" ? ": " : " : ";
    const lines = [`AFRILUX SMART — ${T("RAPPORT SUIVI IMPORT")} — ${T(np.txt)}`, `${T("Périmètre")}${sep}${$("r-scope").selectedOptions[0].text}${$("r-mode").value ? " · " + T(MODES[$("r-mode").value]) : ""}${$("r-stat").value ? " · " + T($("r-stat").value) : ""}`,
      `${T("Dossiers")}${sep}${s.length} · ${T("Conteneurs")}${sep}${allC.length} · ${T("EVP")}${sep}${allC.reduce((a,c)=>a+TEU(c.t),0)}`, "",
      ...s.map(i => { const md = modeOf(i); const vol = md === "fcl" ? `${T(ctnOf(i).length + " ctn")}${sep}${ctnOf(i).map(c=>c.n+" ("+c.t+")").join(", ")}` : `${nfmt(i.colis)} ${T("colis")}, ${nfmt(i.poids,2)} kg${md === "lcl" ? ", " + nfmt(i.volume,3) + " m³" : ""}`;
        return `${i.ref} | ${T(MODE_SHORT[md])} | PO ${i.po || "—"} | ${i.fournisseur} (${T(i.paiement || "Non payé")}) | FOB ${money(fobOf(i), i.devise || "EUR")} · CIF ${money(cifOf(i), i.devise || "EUR")} | ${md === "air" ? "LTA" : "BL"} ${i.bl || "—"} | ETA ${fmtDate(i.eta)} | ${T(i.statut)} | Docs ${docCount(i)}/${DOCS.length} | ${vol}`; })];
    try { await navigator.clipboard.writeText(lines.join("\n")); toast("Résumé copié"); }
    catch { toast("Copie refusée par le navigateur"); }
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
        if (!dl) { toast("Le téléchargement n'est pas disponible dans cette vue."); return; }
        try { await dl.save({filename: file, data: blob}); } catch (e) { toast(e?.code === "dismissed" || e?.code === "declined" ? "Téléchargement annulé" : "Sauvegarde impossible"); return; }
      }
      toast(`Sauvegarde créée : ${items.length} dossier(s), ${Object.keys(files).length} fichier(s)`);
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
      toast(lost ? `${list.length} dossier(s) restauré(s) · ${lost} PDF non importé(s)` : `${list.length} dossier(s) restauré(s)`);
      return true;
    } catch (e) { toast(e?.code === "quota_exceeded" ? "Espace de stockage plein" : "Enregistrement impossible. Vérifiez votre connexion puis réessayez."); return false; }
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
      toast(`${j.dossiers.length} dossier(s) restauré(s)`);
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
    catch { $("banner").hidden = false; $("banner").textContent = "Les dossiers ne peuvent pas être chargés pour le moment."; return; }
    SB.channel("dossiers-live").on("postgres_changes", {event: "*", schema: "public", table: "dossiers"}, p => {
      if (p.eventType === "DELETE") {items = items.filter(x => x.id !== (p.old && p.old.id));}
      else if (p.new) {upsertLocal(p.new.id, p.new.data || {});}
      render();
    }).subscribe();
    // dossiers restés dans ce navigateur (ancienne version Netlify)
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
      $("lg-btn").disabled = true; $("lg-btn").textContent = "Connexion…"; err.hidden = true;
      try {
        const {data, error} = await SB.auth.signInWithPassword({email, password});
        if (error) { err.hidden = false; err.textContent = /fetch|network/i.test(error.message || "") ? "Connexion impossible. Vérifiez votre connexion internet." : "E-mail ou mot de passe incorrect."; return; }
        $("lg-pass").value = ""; await sbAfterLogin(data.user);
      } catch { err.hidden = false; err.textContent = "Connexion impossible. Vérifiez votre connexion internet."; }
      finally { $("lg-btn").disabled = false; $("lg-btn").textContent = "Se connecter"; }
    });
    $("btn-logout").addEventListener("click", async () => { try { await SB.auth.signOut(); } catch {} location.reload(); });
    let session = null;
    try { session = (await SB.auth.getSession()).data.session; } catch {}
    if (session) {await sbAfterLogin(session.user);}
    else { $("login").hidden = false; setTimeout(() => $("lg-email").focus(), 50); }
  }

  /* ---------- démarrage ---------- */
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
    if (STANDALONE && window.AFX_SUPABASE_URL && !window.supabase) { render(); $("btn-new").hidden = true; $("banner").hidden = false; $("banner").textContent = "Connexion impossible. Vérifiez votre connexion internet."; return; }
    let ns = null;
    try { ns = await window.claude?.use?.("db"); } catch {}
    if (!ns) {
      if (USE_API) {
        try {
          const headers = {};
          if (API_KEY) {headers["Authorization"] = `Bearer ${API_KEY}`;}
          const resp = await fetch(`${API_URL}/dossiers`, {headers});
          if (resp.ok) {
            items = await resp.json();
            render();
            $("banner").hidden = false;
            $("banner").textContent = "Mode API PostgreSQL : dossiers chargés depuis le serveur.";
            return;
          }
        } catch { /* fallback localStorage */ }
      }
      items = lsLoad();
      if (STANDALONE && window.indexedDB) { assets = localAssets; localFiles = true; $("btn-backup").hidden = false; $("btn-restore").hidden = false; }
      render();
      $("banner").hidden = false;
      $("banner").textContent = STANDALONE
        ? "Version autonome : vos dossiers et PDF sont enregistrés dans ce navigateur, sur cet ordinateur. Cliquez régulièrement sur « Sauvegarder » pour garder une copie."
        : "Mode local : les dossiers sont enregistrés uniquement dans ce navigateur.";
      return;
    }
    db = ns; col = db.collection("dossiers");
    try { assets = await window.claude.use("assets"); } catch { assets = null; }
    try { const u = await window.claude.use("user"); const w = await u?.can?.("data.write"); if (w === false) {canWrite = false;} } catch {}
    $("btn-backup").hidden = false; $("btn-restore").hidden = !canWrite;
    if (!canWrite) { $("btn-new").hidden = true; $("banner").hidden = false; $("banner").textContent = "Lecture seule : vous pouvez consulter et exporter, sans modifier."; }
    const timer = setTimeout(() => { $("banner").hidden = false; $("banner").textContent = "Connexion lente : les dossiers ne sont pas encore chargés."; }, 10000);
    col.onSnapshot(snap => {
      items = snap.docs.map(d => ({id: d.id, ...d.data()}));
      if (!snap.metadata.fromCache) { clearTimeout(timer); if (canWrite) {$("banner").hidden = true;} }
      render();
    }, () => { clearTimeout(timer); $("banner").hidden = false; $("banner").textContent = "Les dossiers ne peuvent pas être chargés pour le moment."; });
  })();
})();
