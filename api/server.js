const fs = require("fs");
const path = require("path");

// Lecture simple du fichier .env (sans dépendance dotenv)
function loadEnv() {
  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^([A-Z_]+)=(.*)$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].replace(/^"|"$|^'|'$/g, "");
      }
    }
  }
}
loadEnv();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configuration PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "postgres",
  database: process.env.PGDATABASE || "afrilux",
});

pool.connect()
  .then(() => console.log("Connecté à PostgreSQL"))
  .catch(err => console.error("Erreur de connexion PostgreSQL:", err));

// ---------- DOSSIERS ----------

// Lister tous les dossiers
app.get("/api/dossiers", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, ref, data FROM dossiers ORDER BY id DESC");
    const rows = result.rows.map(r => ({ id: r.id, ref: r.ref, ...r.data }));
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Créer un dossier
app.post("/api/dossiers", async (req, res) => {
  try {
    const { id, ref, ...data } = req.body;
    const result = await pool.query(
      "INSERT INTO dossiers (id, ref, data) VALUES ($1, $2, $3) RETURNING id, ref, data",
      [id, ref, JSON.stringify(data)]
    );
    const row = result.rows[0];
    res.status(201).json({ id: row.id, ref: row.ref, ...row.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mettre à jour un dossier
app.put("/api/dossiers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { ref, ...data } = req.body;
    const result = await pool.query(
      "UPDATE dossiers SET ref = $1, data = $2 WHERE id = $3 RETURNING id, ref, data",
      [ref, JSON.stringify(data), id]
    );
    if (result.rows.length === 0) {return res.status(404).json({ error: "Dossier non trouvé" });}
    const row = result.rows[0];
    res.json({ id: row.id, ref: row.ref, ...row.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Supprimer un dossier
app.delete("/api/dossiers/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM dossiers WHERE id = $1", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- PRODUITS ----------

app.get("/api/produits", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produits ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/produits", async (req, res) => {
  try {
    const { dossier_id, code, des, hs, qte, u, pu } = req.body;
    const result = await pool.query(
      "INSERT INTO produits (dossier_id, code, des, hs, qte, u, pu) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [dossier_id, code, des, hs, qte, u, pu]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/produits/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM produits WHERE id = $1", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- CONTENEURS ----------

app.get("/api/conteneurs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM conteneurs ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/conteneurs", async (req, res) => {
  try {
    const { dossier_id, numero, type } = req.body;
    const result = await pool.query(
      "INSERT INTO conteneurs (dossier_id, numero, type) VALUES ($1,$2,$3) RETURNING *",
      [dossier_id, numero, type]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/conteneurs/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM conteneurs WHERE id = $1", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------- DOCUMENTS ----------

app.get("/api/documents", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM documents ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/documents", async (req, res) => {
  try {
    const { dossier_id, type, nom, taille_octets, type_mime, chemin_stockage } = req.body;
    const result = await pool.query(
      "INSERT INTO documents (dossier_id, type, nom, taille_octets, type_mime, chemin_stockage) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
      [dossier_id, type, nom, taille_octets, type_mime, chemin_stockage]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/documents/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM documents WHERE id = $1", [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API Afrilux sur http://localhost:${PORT}`);
});
