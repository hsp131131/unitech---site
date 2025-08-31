<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unitech Chemical – 高性能化学助剂 | Bilingual Homepage</title>
  <meta name="description" content="Unitech Chemical provides high‑performance chemical additives for oil & gas, water treatment, and industrial applications. ISO 9001 quality. 全球供应，高品质助剂。" />
  <meta name="theme-color" content="#0f172a" />
  <meta property="og:title" content="Unitech Chemical – 高性能化学助剂" />
  <meta property="og:description" content="High‑performance additives for oil & gas and industrial applications. 全球供应，高品质助剂。" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/assets/og-hero.jpg" />
  <link rel="icon" href="/assets/favicon.ico" />
  <style>
    /* --- Design tokens --- */
    :root{
      --bg:#0b1220;         /* page bg (deep navy) */
      --panel:#0f172a;      /* card/nav bg */
      --muted:#94a3b8;      /* secondary text */
      --text:#e2e8f0;       /* primary text */
      --brand:#22c55e;      /* brand accent (green) */
      --brand-2:#38bdf8;    /* secondary accent (sky) */
      --ring:rgba(56,189,248,.35);
      --max:1200px;
      --radius:18px;
      --shadow:0 10px 30px rgba(2, 6, 23, .55);
    }

    /* --- Reset / base --- */
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,"Noto Sans",Ubuntu,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji";
      color:var(--text); background:radial-gradient(1200px 600px at 80% -10%, rgba(56,189,248,.18), transparent 60%),
                          radial-gradient(1200px 600px at -10% -10%, rgba(34,197,94,.18), transparent 60%),
                          var(--bg);
    }
    a{color:inherit; text-decoration:none}
    img{max-width:100%; display:block}
    .wrap{max-width:var(--max); margin-inline:auto; padding-inline:24px}
    .btn{display:inline-flex; align-items:center; gap:.6rem; padding:.8rem 1.1rem; border-radius:999px; background:linear-gradient(90deg,var(--brand),#16a34a); color:#071316; font-weight:700; box-shadow:0 6px 18px rgba(34,197,94,.3); border:1px solid rgba(34,197,94,.4)}
    .btn.secondary{background:transparent; color:var(--text); border:1px solid rgba(148,163,184,.3); box-shadow:none}
    .chip{display:inline-flex; align-items:center; gap:.4rem; padding:.35rem .7rem; border-radius:999px; background:rgba(148,163,184,.12); color:var(--muted); border:1px solid rgba(148,163,184,.14)}
    .kicker{letter-spacing:.16em; text-transform:uppercase; color:var(--brand-2); font-weight:800; font-size:.8rem}
    section{scroll-margin-top:90px}

    /* --- Header --- */
    header{
      position:sticky; top:0; z-index:50; backdrop-filter:saturate(140%) blur(8px);
      background:color-mix(in oklab, var(--panel) 92%, transparent);
      border-bottom:1px solid rgba(148,163,184,.14);
    }
    .nav{display:flex; align-items:center; justify-content:space-between; gap:1rem; height:68px}
    .brand{display:flex; align-items:center; gap:.75rem}
    .logo{width:34px; height:34px; border-radius:10px; background:linear-gradient(120deg,var(--brand-2),var(--brand)); display:grid; place-items:center; font-weight:900; color:#07201a}
    nav ul{display:flex; gap:1.2rem; list-style:none; margin:0; padding:0}
    .lang-toggle{display:flex; gap:.4rem; align-items:center; padding:.35rem; border-radius:999px; border:1px solid rgba(148,163,184,.18)}
    .lang-toggle button{background:transparent; border:0; color:var(--muted); padding:.35rem .6rem; border-radius:999px; cursor:pointer}
    .lang-toggle button.active{background:rgba(56,189,248,.18); color:#e0f2fe}
    .menu-btn{display:none}

    /* --- Hero --- */
    .hero{padding:72px 0 56px; position:relative}
    .hero-grid{display:grid; grid-template-columns:1.15fr .85fr; gap:48px; align-items:center}
    h1{font-size:clamp(1.9rem, 2.4vw + 1rem, 3.2rem); line-height:1.1; margin:0 0 16px}
    .sub{color:var(--muted); font-size:1.05rem}
    .hero-card{background:linear-gradient(180deg, rgba(15,23,42,.8), rgba(15,23,42,.6)); border:1px solid rgba(148,163,184,.16); border-radius:var(--radius); padding:14px; box-shadow:var(--shadow)}
    .hero-card img{border-radius:14px; aspect-ratio: 16/10; object-fit:cover}
    .stats{display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:14px}
    .stat{background:rgba(148,163,184,.08); border:1px solid rgba(148,163,184,.14); border-radius:12px; padding:12px}
    .stat b{font-size:1.2rem}

    /* --- Sections --- */
    .section{padding:64px 0}
    .grid-3{display:grid; grid-template-columns:repeat(3,1fr); gap:22px}
    .card{background:color-mix(in oklab, var(--panel) 96%, transparent); border:1px solid rgba(148,163,184,.14); border-radius:var(--radius); padding:18px; box-shadow:var(--shadow)}
    .card h3{margin:.2rem 0 .6rem}
    .badge{font-size:.75rem; color:#c7f9cc; border:1px dashed rgba(34,197,94,.35); padding:.2rem .5rem; border-radius:999px}
    .media{border-radius:14px; overflow:hidden; border:1px solid rgba(148,163,184,.12); background:rgba(148,163,184,.06)}
    .media img{aspect-ratio:16/10; object-fit:cover}

    /* --- Timeline / Certifications --- */
    .items{display:grid; grid-template-columns:repeat(2,1fr); gap:16px}
    .item{display:flex; gap:12px; align-items:flex-start; background:rgba(148,163,184,.08); border:1px solid rgba(148,163,184,.14); padding:12px 14px; border-radius:12px}
    .item .dot{width:10px; height:10px; border-radius:50%; background:var(--brand)}

    /* --- Contact --- */
    form{display:grid; gap:12px}
    input, textarea, select{
      width:100%; background:rgba(2,6,23,.35); border:1px solid rgba(148,163,184,.24); color:var(--text);
      padding:.9rem 1rem; border-radius:12px; outline:none; transition:border-color .2s, box-shadow .2s;
    }
    input:focus, textarea:focus, select:focus{border-color:var(--brand-2); box-shadow:0 0 0 4px var(--ring)}
    textarea{min-height:140px; resize:vertical}

    /* --- Footer --- */
    footer{padding:40px 0 56px; color:var(--muted)}
    .foot{display:grid; grid-template-columns:1.1fr .9fr; gap:24px; align-items:start}

    /* --- Responsive --- */
    @media (max-width: 980px){
      .hero-grid, .foot{grid-template-columns:1fr}
      .stats{grid-template-columns:repeat(2,1fr)}
      .grid-3{grid-template-columns:1fr 1fr}
    }
    @media (max-width: 720px){
      nav ul{display:none}
      .menu-btn{display:inline-flex; align-items:center; gap:.5rem; padding:.45rem .7rem; border:1px solid rgba(148,163,184,.2); border-radius:10px; color:var(--muted); background:transparent}
      .grid-3{grid-template-columns:1fr}
    }
    /* Mobile sheet */
    .sheet{position:fixed; inset:auto 0 0 0; background:var(--panel); border-top:1px solid rgba(148,163,184,.18); translate:0 110%; transition:translate .3s ease; padding:12px 18px; z-index:40}
    .sheet.open{translate:0 0}
    .sheet ul{list-style:none; display:grid; gap:10px; padding:0; margin:8px 0}
    .sheet a{display:block; padding:14px; border:1px solid rgba(148,163,184,.16); border-radius:12px}
  </style>
</head>
<body>
  <!-- Header / Nav -->
  <header>
    <div class="wrap nav">
      <a class="brand" href="#top" aria-label="logo">
        <span class="logo">U</span>
        <strong>Unitech Chemical</strong>
      </a>
      <nav aria-label="primary">
        <ul>
          <li><a href="#about" data-i18n="nav.about">About</a></li>
          <li><a href="#products" data-i18n="nav.products">Products</a></li>
          <li><a href="#applications" data-i18n="nav.applications">Applications</a></li>
          <li><a href="#quality" data-i18n="nav.quality">Quality</a></li>
          <li><a href="#sustain" data-i18n="nav.sustain">Sustainability</a></li>
          <li><a href="#contact" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </nav>
      <div style="display:flex; align-items:center; gap:.6rem">
        <div class="lang-toggle" role="group" aria-label="language">
          <button id="btn-en" class="active" aria-pressed="true">EN</button>
          <button id="btn-zh">中文</button>
        </div>
        <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileSheet">☰ <span data-i18n="nav.menu">Menu</span></button>
      </div>
    </div>
    <div class="sheet" id="mobileSheet" role="dialog" aria-modal="true" aria-label="Navigation">
      <div class="wrap">
        <ul>
          <li><a href="#about" class="sheet-link" data-i18n="nav.about">About</a></li>
          <li><a href="#products" class="sheet-link" data-i18n="nav.products">Products</a></li>
          <li><a href="#applications" class="sheet-link" data-i18n="nav.applications">Applications</a></li>
          <li><a href="#quality" class="sheet-link" data-i18n="nav.quality">Quality</a></li>
          <li><a href="#sustain" class="sheet-link" data-i18n="nav.sustain">Sustainability</a></li>
          <li><a href="#contact" class="sheet-link" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <main id="top" class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="kicker" data-i18n="hero.kicker">Trusted Additives • Global Supply</span>
        <h1 data-i18n="hero.title">High‑Performance Oilfield & Industrial Chemical Additives</h1>
        <p class="sub" data-i18n="hero.sub">From upstream production to water treatment, we formulate demulsifiers, corrosion and scale inhibitors, PPDs, and surfactants with ISO‑driven quality and fast lead times.</p>
        <div style="display:flex; gap:.7rem; margin-top:18px">
          <a href="#contact" class="btn" data-i18n="cta.quote">Get a Quote</a>
          <a href="#products" class="btn secondary" data-i18n="cta.view">View Products</a>
        </div>
        <div style="display:flex; gap:.5rem; margin-top:14px; align-items:center">
          <span class="chip">ISO 9001</span>
          <span class="chip">REACH</span>
          <span class="chip">RoHS</span>
          <span class="chip" data-i18n="hero.moq">Flexible MOQs</span>
        </div>
        <div class="stats">
          <div class="stat"><div class="badge" data-i18n="stats.years.label">Experience</div><b>20+</b><div class="muted" data-i18n="stats.years.val">years</div></div>
          <div class="stat"><div class="badge" data-i18n="stats.capacity.label">Capacity</div><b>10k+</b><div class="muted" data-i18n="stats.capacity.val">tons/year</div></div>
          <div class="stat"><div class="badge" data-i18n="stats.clients.label">Clients</div><b>30+</b><div class="muted" data-i18n="stats.clients.val">countries</div></div>
          <div class="stat"><div class="badge" data-i18n="stats.lead.label">Lead Time</div><b>7‑21</b><div class="muted" data-i18n="stats.lead.val">days</div></div>
        </div>
      </div>
      <div class="hero-card">
        <div class="media">
          <!-- Replace with a real photo of your plant or lab -->
          <img src="/assets/hero-plant.jpg" alt="Production plant and laboratory" />
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px">
          <img class="media" src="/assets/lab.jpg" alt="QC laboratory" />
          <img class="media" src="/assets/tanks.jpg" alt="Bulk storage tanks" />
        </div>
      </div>
    </div>
  </main>

  <!-- About -->
  <section id="about" class="section">
    <div class="wrap">
      <div class="grid-3">
        <div class="card">
          <div class="kicker" data-i18n="about.kicker">Who We Are</div>
          <h2 data-i18n="about.title">Manufacturing in Kaiping, Guangdong • Serving the World</h2>
          <p data-i18n="about.p1">Unitech Chemical specializes in tailored additives for oil & gas, water treatment, and industrial processing. With in‑house R&amp;D and strict QC, we deliver consistent performance and reliable logistics.</p>
          <p data-i18n="about.p2">We welcome OEM/ODM, toll‑manufacturing, and long‑term supply partnerships.</p>
        </div>
        <div class="card">
          <div class="kicker" data-i18n="about.values">What Makes Us Different</div>
          <ul style="margin:0; padding-left:1.1rem">
            <li data-i18n="about.v1">Fast lab screening and field‑driven formulation.</li>
            <li data-i18n="about.v2">ISO 9001 quality system with batch COA/COQ.</li>
            <li data-i18n="about.v3">Export‑ready docs: MSDS/SDS, REACH, RoHS.</li>
            <li data-i18n="about.v4">Flexible packaging: IBCs, drums, totes.</li>
          </ul>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/about.jpg" alt="Team and facility" /></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Products -->
  <section id="products" class="section">
    <div class="wrap">
      <div style="display:flex; align-items:end; justify-content:space-between; gap:1rem; margin-bottom:12px">
        <div>
          <div class="kicker" data-i18n="prod.kicker">Core Portfolio</div>
          <h2 data-i18n="prod.title">Featured Products</h2>
        </div>
        <a href="#contact" class="btn secondary" data-i18n="prod.cta">Request TDS/SDS</a>
      </div>
      <div class="grid-3">
        <div class="card">
          <div class="media"><img src="/assets/demulsifier.jpg" alt="Demulsifier" /></div>
          <h3>Demulsifiers</h3>
          <p data-i18n="prod.demul">Fast water‑oil separation for crude and produced water; optimized for temperature and salinity windows.</p>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/corrosion.jpg" alt="Corrosion inhibitor" /></div>
          <h3>Corrosion Inhibitors</h3>
          <p data-i18n="prod.corr">Film‑forming and oxygen‑scavenging packages for pipelines, tanks, and downhole metallurgy.</p>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/scale.jpg" alt="Scale inhibitor" /></div>
          <h3>Scale Inhibitors</h3>
          <p data-i18n="prod.scale">Phosphonate/polymer blends targeting CaCO₃, BaSO₄, and mixed‑salt scales across pH and TDS ranges.</p>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/ppd.jpg" alt="Pour point depressant" /></div>
          <h3>Pour Point Depressants</h3>
          <p data-i18n="prod.ppd">Improve low‑temperature flow, reduce wax deposition, and protect cold‑start operations.</p>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/biocide.jpg" alt="Biocides" /></div>
          <h3>Biocides</h3>
          <p data-i18n="prod.bio">Broad‑spectrum control against sulfate‑reducing and slime‑forming bacteria in systems.</p>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/surfactant.jpg" alt="Surfactants" /></div>
          <h3>Surfactants</h3>
          <p data-i18n="prod.surf">Nonionic/anionic blends for wetting, cleaning, and emulsion stability tuning.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Applications -->
  <section id="applications" class="section">
    <div class="wrap">
      <div class="kicker" data-i18n="app.kicker">Where We Help</div>
      <h2 data-i18n="app.title">Applications & Industries</h2>
      <div class="grid-3">
        <div class="card">
          <h3 data-i18n="app.oil">Upstream Oil & Gas</h3>
          <p data-i18n="app.oilp">Production chemicals for flow assurance, separation, H₂S control, and integrity.</p>
        </div>
        <div class="card">
          <h3 data-i18n="app.refine">Refining & Petrochem</h3>
          <p data-i18n="app.refinep">Anti‑foulants, corrosion control, and process aids to stabilize throughput.</p>
        </div>
        <div class="card">
          <h3 data-i18n="app.water">Water Treatment</h3>
          <p data-i18n="app.waterp">Coagulants/dispersants and tailored chemistries for industrial wastewater.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Quality & Certifications -->
  <section id="quality" class="section">
    <div class="wrap">
      <div class="kicker" data-i18n="qual.kicker">Quality & Reliability</div>
      <h2 data-i18n="qual.title">Certifications & Process</h2>
      <div class="items" style="margin-top:14px">
        <div class="item"><span class="dot"></span><div><b>ISO 9001</b> — <span data-i18n="qual.iso">Documented SOPs, traceability, and corrective action loops.</span></div></div>
        <div class="item"><span class="dot"></span><div><b>REACH/RoHS</b> — <span data-i18n="qual.reach">Compliance-ready dossiers and restricted‑substances control.</span></div></div>
        <div class="item"><span class="dot"></span><div><b>QC Lab</b> — <span data-i18n="qual.qc">Viscosity, pH, FTIR, and performance testing with retain samples.</span></div></div>
        <div class="item"><span class="dot"></span><div><b>Logistics</b> — <span data-i18n="qual.log">IBCs, drums, totes; EXW/FOB/CIF/—flexible incoterms.</span></div></div>
      </div>
    </div>
  </section>

  <!-- Sustainability -->
  <section id="sustain" class="section">
    <div class="wrap">
      <div class="grid-3">
        <div class="card">
          <div class="kicker" data-i18n="sus.kicker">Sustainability</div>
          <h2 style="margin-top:.2rem" data-i18n="sus.title">Safer Chemistry, Lower Impact</h2>
          <p data-i18n="sus.p1">We prioritize formulations with reduced VOCs, optimized treat rates, and responsible sourcing. Packaging take‑back and recycling available for partners.</p>
        </div>
        <div class="card">
          <div class="media"><img src="/assets/sustain.jpg" alt="Sustainability" /></div>
        </div>
        <div class="card">
          <ul style="margin:0; padding-left:1.1rem">
            <li data-i18n="sus.l1">VOC‑reduced and low‑tox options.</li>
            <li data-i18n="sus.l2">Energy‑efficient batch processes.</li>
            <li data-i18n="sus.l3">Waste minimization and water reuse.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="section">
    <div class="wrap">
      <div class="grid-3">
        <div class="card">
          <div class="kicker" data-i18n="contact.kicker">Contact</div>
          <h2 data-i18n="contact.title">Tell Us What You Need</h2>
          <p data-i18n="contact.p">Share your crude specs, operating window, or application details. Our team will recommend a package and send TDS/SDS.</p>
          <div style="display:grid; gap:6px; color:var(--muted); margin-top:8px">
            <div>✉︎ <a href="mailto:sales@yourdomain.com">sales@yourdomain.com</a></div>
            <div>☎︎ +86‑000‑0000</div>
            <div>📍 Kaiping, Guangdong, China</div>
          </div>
        </div>
        <div class="card" style="grid-column: span 2">
          <form id="contactForm" action="mailto:sales@yourdomain.com" method="post" enctype="text/plain">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px">
              <input name="name" placeholder="Your Name" aria-label="Your Name" required data-i18n-placeholder="form.name" />
              <input type="email" name="email" placeholder="Work Email" aria-label="Work Email" required data-i18n-placeholder="form.email" />
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px">
              <input name="company" placeholder="Company" aria-label="Company" data-i18n-placeholder="form.company" />
              <select name="incoterm" aria-label="Incoterm">
                <option value="" data-i18n="form.incoterm.none">Incoterm</option>
                <option>EXW</option><option>FOB</option><option>CIF</option><option>FCA</option>
              </select>
            </div>
            <textarea name="message" placeholder="Tell us about your application (temp, salinity, viscosity, etc.)" aria-label="Message" data-i18n-placeholder="form.msg"></textarea>
            <div style="display:flex; gap:.7rem; align-items:center; justify-content:space-between">
              <button class="btn" type="submit" data-i18n="form.send">Send</button>
              <small style="color:var(--muted)" data-i18n="form.note">Submitting opens your email client. For a hosted form, we can connect Formspree or your backend later.</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="wrap foot">
      <div>
        <div class="brand"><span class="logo">U</span> <strong>Unitech Chemical</strong></div>
        <p style="margin:.6rem 0 0" data-i18n="foot.tag">High‑performance additives • Reliable supply • Partner mindset</p>
      </div>
      <div style="display:grid; gap:.4rem; justify-items:end">
        <a href="#top" class="chip" data-i18n="foot.back">Back to top</a>
        <small>© <span id="year"></span> Unitech Chemical</small>
      </div>
    </div>
  </footer>

  <script>
  // --- Language dictionary ---
  const I18N = {
    en: {
      'nav.about':'About','nav.products':'Products','nav.applications':'Applications','nav.quality':'Quality','nav.sustain':'Sustainability','nav.contact':'Contact','nav.menu':'Menu',
      'hero.kicker':'Trusted Additives • Global Supply',
      'hero.title':'High‑Performance Oilfield & Industrial Chemical Additives',
      'hero.sub':'From upstream production to water treatment, we formulate demulsifiers, corrosion and scale inhibitors, PPDs, and surfactants with ISO‑driven quality and fast lead times.',
      'hero.moq':'Flexible MOQs',
      'cta.quote':'Get a Quote','cta.view':'View Products',
      'stats.years.label':'Experience','stats.years.val':'years',
      'stats.capacity.label':'Capacity','stats.capacity.val':'tons/year',
      'stats.clients.label':'Clients','stats.clients.val':'countries',
      'stats.lead.label':'Lead Time','stats.lead.val':'days',
      'about.kicker':'Who We Are','about.title':'Manufacturing in Kaiping, Guangdong • Serving the World',
      'about.p1':'Unitech Chemical specializes in tailored additives for oil & gas, water treatment, and industrial processing. With in‑house R&D and strict QC, we deliver consistent performance and reliable logistics.',
      'about.p2':'We welcome OEM/ODM, toll‑manufacturing, and long‑term supply partnerships.',
      'about.values':'What Makes Us Different','about.v1':'Fast lab screening and field‑driven formulation.','about.v2':'ISO 9001 quality system with batch COA/COQ.','about.v3':'Export‑ready docs: MSDS/SDS, REACH, RoHS.','about.v4':'Flexible packaging: IBCs, drums, totes.',
      'prod.kicker':'Core Portfolio','prod.title':'Featured Products','prod.cta':'Request TDS/SDS',
      'prod.demul':'Fast water‑oil separation for crude and produced water; optimized for temperature and salinity windows.',
      'prod.corr':'Film‑forming and oxygen‑scavenging packages for pipelines, tanks, and downhole metallurgy.',
      'prod.scale':'Phosphonate/polymer blends targeting CaCO₃, BaSO₄, and mixed‑salt scales across pH and TDS ranges.',
      'prod.ppd':'Improve low‑temperature flow, reduce wax deposition, and protect cold‑start operations.',
      'prod.bio':'Broad‑spectrum control against sulfate‑reducing and slime‑forming bacteria in systems.',
      'prod.surf':'Nonionic/anionic blends for wetting, cleaning, and emulsion stability tuning.',
      'app.kicker':'Where We Help','app.title':'Applications & Industries',
      'app.oil':'Upstream Oil & Gas','app.oilp':'Production chemicals for flow assurance, separation, H₂S control, and integrity.',
      'app.refine':'Refining & Petrochem','app.refinep':'Anti‑foulants, corrosion control, and process aids to stabilize throughput.',
      'app.water':'Water Treatment','app.waterp':'Coagulants/dispersants and tailored chemistries for industrial wastewater.',
      'qual.kicker':'Quality & Reliability','qual.title':'Certifications & Process','qual.iso':'Documented SOPs, traceability, and corrective action loops.','qual.reach':'Compliance-ready dossiers and restricted‑substances control.','qual.qc':'Viscosity, pH, FTIR, and performance testing with retain samples.','qual.log':'IBCs, drums, totes; EXW/FOB/CIF/—flexible incoterms.',
      'sus.kicker':'Sustainability','sus.title':'Safer Chemistry, Lower Impact','sus.p1':'We prioritize formulations with reduced VOCs, optimized treat rates, and responsible sourcing. Packaging take‑back and recycling available for partners.','sus.l1':'VOC‑reduced and low‑tox options.','sus.l2':'Energy‑efficient batch processes.','sus.l3':'Waste minimization and water reuse.',
      'contact.kicker':'Contact','contact.title':'Tell Us What You Need','contact.p':'Share your crude specs, operating window, or application details. Our team will recommend a package and send TDS/SDS.',
      'form.name':'Your Name','form.email':'Work Email','form.company':'Company','form.incoterm.none':'Incoterm','form.msg':'Tell us about your application (temp, salinity, viscosity, etc.)','form.send':'Send','form.note':'Submitting opens your email client. For a hosted form, we can connect Formspree or your backend later.',
      'foot.tag':'High‑performance additives • Reliable supply • Partner mindset','foot.back':'Back to top'
    },
    zh: {
      'nav.about':'关于我们','nav.products':'产品','nav.applications':'应用领域','nav.quality':'质量','nav.sustain':'可持续','nav.contact':'联系','nav.menu':'菜单',
      'hero.kicker':'值得信赖的助剂 • 全球供应',
      'hero.title':'高性能油田与工业化学助剂',
      'hero.sub':'覆盖上游开采到水处理，我们提供破乳剂、缓蚀剂、阻垢剂、降凝剂与表面活性剂。严格的 ISO 质量体系，交期快速。',
      'hero.moq':'支持小批量',
      'cta.quote':'获取报价','cta.view':'查看产品',
      'stats.years.label':'经验','stats.years.val':'年',
      'stats.capacity.label':'产能','stats.capacity.val':'吨/年',
      'stats.clients.label':'客户国家','stats.clients.val':'个',
      'stats.lead.label':'交期','stats.lead.val':'天',
      'about.kicker':'我们是谁','about.title':'产自广东开平 • 服务全球',
      'about.p1':'Unitech Chemical 专注于油气、水处理与工业流程的定制助剂。自有研发与严格品控，确保稳定性能与可靠物流。',
      'about.p2':'支持 OEM/ODM、来料/来样代工以及长期供货合作。',
      'about.values':'我们的优势','about.v1':'实验室快速筛选 + 现场反馈配方。','about.v2':'ISO 9001 质量体系与批次 COA/COQ。','about.v3':'出口合规文件：MSDS/SDS、REACH、RoHS。','about.v4':'多样化包装：IBC、铁桶、吨桶。',
      'prod.kicker':'核心产品','prod.title':'精选产品','prod.cta':'索取 TDS/SDS',
      'prod.demul':'用于原油与采出水快速破乳分离；可按温度和含盐窗口优化。',
      'prod.corr':'成膜型与除氧型方案，保护管线、储罐及井下材质。',
      'prod.scale':'膦酸盐/聚合物体系，针对碳酸钙、硫酸钡及混合结垢。',
      'prod.ppd':'改善低温流动性，减少蜡沉积，保障冷启动。',
      'prod.bio':'广谱抑菌，控制硫酸盐还原菌与粘泥菌。',
      'prod.surf':'非离子/阴离子复配，用于润湿、清洗与乳化稳定。',
      'app.kicker':'服务领域','app.title':'应用与行业',
      'app.oil':'油气上游','app.oilp':'保障流程、分离、H₂S 控制与完整性管理的药剂。',
      'app.refine':'炼化与石化','app.refinep':'防垢/防腐与助剂，帮助稳定装置负荷。',
      'app.water':'水处理','app.waterp':'混凝/分散与定制药剂，适用于工业废水。',
      'qual.kicker':'质量与可靠性','qual.title':'认证与流程','qual.iso':'完备的 SOP、追溯体系与纠正预防。','qual.reach':'REACH/RoHS 合规与受限物质控制。','qual.qc':'粘度、pH、红外及性能测试，并留存样品。','qual.log':'IBC、铁桶、吨桶；支持 EXW/FOB/CIF/FCA 等贸易条款。',
      'sus.kicker':'可持续','sus.title':'更安全的化学，更低的影响','sus.p1':'优先采用低 VOC、优化加药量与负责任采购。可为合作伙伴提供包装回收服务。','sus.l1':'低 VOC、低毒选项。','sus.l2':'节能的批量工艺。','sus.l3':'减少废弃物与水资源循环利用。',
      'contact.kicker':'联系我们','contact.title':'告诉我们您的需求','contact.p':'请提供原油性质、工况窗口或应用信息，我们将推荐方案并发送 TDS/SDS。',
      'form.name':'您的姓名','form.email':'工作邮箱','form.company':'公司','form.incoterm.none':'贸易术语','form.msg':'请描述应用（温度、含盐、粘度等）','form.send':'发送','form.note':'提交后会打开您的邮箱客户端。如需在线表单，可稍后接入 Formspree 或自有后端。',
      'foot.tag':'高性能助剂 • 稳定供货 • 合作共赢','foot.back':'返回顶部'
    }
  };

  // Utility to apply translations
  function applyI18n(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(I18N[lang][key]) el.setAttribute('placeholder', I18N[lang][key]);
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    // Toggle active state
    document.getElementById('btn-en').classList.toggle('active', lang==='en');
    document.getElementById('btn-zh').classList.toggle('active', lang==='zh');
    localStorage.setItem('lang', lang);
  }

  // Init
  (function(){
    const saved = localStorage.getItem('lang') || 'en';
    applyI18n(saved);
    document.getElementById('btn-en').addEventListener('click',()=>applyI18n('en'));
    document.getElementById('btn-zh').addEventListener('click',()=>applyI18n('zh'));
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    const sheet = document.getElementById('mobileSheet');
    const btn = document.getElementById('menuBtn');
    const toggle = () => { const open = sheet.classList.toggle('open'); btn.setAttribute('aria-expanded', open); };
    btn.addEventListener('click', toggle);
    sheet.querySelectorAll('.sheet-link').forEach(a=>a.addEventListener('click',()=>sheet.classList.remove('open')));
  })();
  </script>
</body>
</html>
