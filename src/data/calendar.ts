export type DayType = "theory" | "practice" | "project" | "rest" | "english" | "review" | "win";

export interface Day {
  day: "Lun" | "Mar" | "Mer" | "Jeu" | "Ven" | "Sam" | "Dim";
  title: string;
  description: string;
  duration: string;
  type: DayType;
  resources?: { label: string; url?: string }[];
  win?: string;
  english?: boolean;
}

export interface Week {
  number: number;
  phase: "Confiance" | "Intermédiaire" | "Portfolio" | "Job Ready";
  title: string;
  intro: string;
  goal: string;
  celebration: string;
  days: Day[];
}

const ENGLISH_DAYS: Array<Day["day"]> = ["Lun", "Mar", "Jeu"];

const eng = (day: Day["day"]): boolean => ENGLISH_DAYS.includes(day);

export const calendar: Week[] = [
  // ========== PHASE 1: CONFIANCE ==========
  {
    number: 1,
    phase: "Confiance",
    title: "Réveiller la curiosité",
    intro: "Cette semaine, on ne cherche pas à tout maîtriser. On découvre, on s'amuse, on installe une routine douce. Tu as déjà les bases — il suffit de les rallumer. ✨",
    goal: "Installer Power BI Desktop et créer ton tout premier visuel.",
    celebration: "🎉 Premier dashboard publié = première victoire !",
    days: [
      { day: "Lun", title: "Anglais + petite installation", description: "Cours d'anglais le matin. Le soir, installe Power BI Desktop tranquillement et explore l'interface 15 min. Pas de pression.", duration: "30 min", type: "theory", english: true, resources: [{ label: "Power BI Desktop (gratuit)", url: "https://powerbi.microsoft.com/desktop/" }] },
      { day: "Mar", title: "Anglais + tour guidé", description: "Après l'anglais, regarde une vidéo d'introduction Power BI. Note simplement 3 mots qui t'ont marquée.", duration: "45 min", type: "theory", english: true, resources: [{ label: "Power BI in 30 min – Guy in a Cube", url: "https://www.youtube.com/c/GuyinaCube" }] },
      { day: "Mer", title: "Premier import de données", description: "Télécharge un dataset simple (ventes café). Importe-le. Regarde tes données. C'est tout.", duration: "1h", type: "practice", resources: [{ label: "Dataset café Maven Analytics", url: "https://mavenanalytics.io/data-playground" }] },
      { day: "Jeu", title: "Anglais + premier visuel", description: "Crée ton tout premier graphique en barres. Change la couleur. Ressens la satisfaction.", duration: "1h", type: "practice", english: true, win: "🌟 Premier visuel créé !" },
      { day: "Ven", title: "Mini-dashboard 3 visuels", description: "Ajoute 2 autres visuels (camembert, KPI). Joue avec les couleurs. C'est déjà un dashboard.", duration: "1h30", type: "project", win: "🎨 Tu as créé un VRAI dashboard." },
      { day: "Sam", title: "Polissage & screenshot", description: "Aligne, ajoute un titre, choisis une jolie palette. Fais une capture d'écran et garde-la précieusement — c'est le jour 1 de ton portfolio.", duration: "1h30", type: "project", win: "📸 Premier asset portfolio !" },
      { day: "Dim", title: "Repos & fierté", description: "Repos total. Regarde ta capture d'écran. Souviens-toi : il y a une semaine, tu n'avais rien. Aujourd'hui, tu as un dashboard.", duration: "0", type: "rest" },
    ],
  },
  {
    number: 2,
    phase: "Confiance",
    title: "Power Query & nettoyage joyeux",
    intro: "Tu sais importer. Maintenant, on apprend à nettoyer — c'est 80% du métier et c'est étrangement satisfaisant. 🧼",
    goal: "Maîtriser les transformations de base de Power Query.",
    celebration: "🏆 Tu sais transformer des données crades en données propres.",
    days: [
      { day: "Lun", title: "Anglais + concept Power Query", description: "Anglais le matin. Le soir : 20 min de vidéo sur Power Query. Juste comprendre à quoi ça sert.", duration: "30 min", type: "theory", english: true },
      { day: "Mar", title: "Anglais + supprimer colonnes", description: "Pratique : importe un dataset, supprime les colonnes inutiles, renomme proprement.", duration: "45 min", type: "practice", english: true },
      { day: "Mer", title: "Filtrer & remplacer valeurs", description: "Filtre des lignes, remplace des valeurs nulles. Tu nettoies comme un pro.", duration: "1h30", type: "practice" },
      { day: "Jeu", title: "Anglais + fusionner tables", description: "Apprends Merge & Append. Concept clé pour la suite.", duration: "1h", type: "theory", english: true },
      { day: "Ven", title: "Mini-projet : ventes propres", description: "Prends un dataset 'sale' (Kaggle), nettoie-le entièrement avec Power Query. Documente chaque étape.", duration: "2h", type: "project", resources: [{ label: "Datasets gratuits Kaggle", url: "https://www.kaggle.com/datasets" }] },
      { day: "Sam", title: "Dashboard semaine 2", description: "Avec ces données propres, refais un dashboard. Compare-le à celui de la semaine 1. Tu vois la différence ?", duration: "2h", type: "project", win: "📈 Progression visible en 14 jours !" },
      { day: "Dim", title: "Pause & journaling", description: "Repos. Note dans un carnet : 'Cette semaine, j'ai appris ___'. Trois lignes suffisent.", duration: "0", type: "rest" },
    ],
  },

  // ========== PHASE 2: INTERMÉDIAIRE ==========
  {
    number: 3,
    phase: "Intermédiaire",
    title: "Modèle de données & relations",
    intro: "On entre dans le cœur de Power BI. Tu vas comprendre POURQUOI il est si puissant. C'est un peu comme apprendre la grammaire après le vocabulaire. 🧩",
    goal: "Créer un modèle en étoile avec relations.",
    celebration: "🌟 Tu comprends comment Power BI 'pense'.",
    days: [
      { day: "Lun", title: "Anglais + théorie schéma étoile", description: "Concept de tables de faits / dimensions. Vidéo + schéma sur papier.", duration: "45 min", type: "theory", english: true, resources: [{ label: "SQLBI – Star schema", url: "https://www.sqlbi.com/articles/star-schema-and-snowflake-schema/" }] },
      { day: "Mar", title: "Anglais + créer relations", description: "Manipule un modèle, crée 2 relations. Vois la magie opérer.", duration: "1h", type: "practice", english: true },
      { day: "Mer", title: "Cardinalités & filtres", description: "Comprends 1-à-plusieurs, plusieurs-à-plusieurs. Cas pratiques simples.", duration: "1h30", type: "theory" },
      { day: "Jeu", title: "Anglais + table date", description: "Crée ta première table calendrier (DAX). Indispensable pour la suite.", duration: "1h", type: "practice", english: true },
      { day: "Ven", title: "Modèle complet ventes", description: "Construis un modèle complet : Ventes / Produits / Clients / Date.", duration: "2h", type: "project", win: "🏗️ Premier vrai modèle de données !" },
      { day: "Sam", title: "Dashboard exécutif", description: "Sur ce modèle, fais un dashboard 'CEO view' : KPI, tendances, top produits.", duration: "2h30", type: "project", win: "💼 Niveau pro débloqué." },
      { day: "Dim", title: "Repos mérité", description: "Vraie pause. Promenade, livre, série. Le cerveau consolide pendant le repos.", duration: "0", type: "rest" },
    ],
  },
  {
    number: 4,
    phase: "Intermédiaire",
    title: "DAX – les premières mesures",
    intro: "DAX = la baguette magique de Power BI. On commence DOUCEMENT, formule par formule. Tu vas voir, ce n'est pas si effrayant. 🪄",
    goal: "Écrire 10 mesures DAX utiles sans regarder.",
    celebration: "✨ Tu écris du DAX. Tu peux le mettre sur ton CV.",
    days: [
      { day: "Lun", title: "Anglais + SUM, AVERAGE", description: "Tes 2 premières mesures. C'est facile, promis.", duration: "45 min", type: "practice", english: true },
      { day: "Mar", title: "Anglais + CALCULATE basics", description: "LA fonction reine de DAX. Un seul exemple simple aujourd'hui.", duration: "1h", type: "theory", english: true, resources: [{ label: "SQLBI Learn DAX (gratuit)", url: "https://www.sqlbi.com/guides/dax/" }] },
      { day: "Mer", title: "FILTER & contexte", description: "Comprendre le contexte de filtre. Le concept clé qui débloquera tout.", duration: "1h30", type: "theory" },
      { day: "Jeu", title: "Anglais + Time intelligence", description: "TOTALYTD, SAMEPERIODLASTYEAR. Les fonctions qui impressionnent.", duration: "1h30", type: "practice", english: true },
      { day: "Ven", title: "10 mesures sur un dataset", description: "Écris 10 mesures utiles : CA, marge, % croissance, panier moyen, etc.", duration: "2h", type: "project", win: "🧠 10 mesures DAX maîtrisées." },
      { day: "Sam", title: "Dashboard analytique", description: "Construis un dashboard analytique avec drill-down et bookmarks.", duration: "2h30", type: "project" },
      { day: "Dim", title: "Repos", description: "Off. Tu l'as gagné.", duration: "0", type: "rest" },
    ],
  },
  {
    number: 5,
    phase: "Intermédiaire",
    title: "Visualisations avancées & UX",
    intro: "Cette semaine, ton dashboard passe de 'bien' à 'wow'. Design, interactions, narration visuelle. 🎨",
    goal: "Maîtriser bookmarks, tooltips personnalisés et navigation.",
    celebration: "🎨 Tes dashboards ont une vraie identité visuelle.",
    days: [
      { day: "Lun", title: "Anglais + théorie design", description: "Principes de data viz : Stephen Few, Cole Knaflic. Inspiration pure.", duration: "45 min", type: "theory", english: true, resources: [{ label: "Storytelling with Data", url: "https://www.storytellingwithdata.com/" }] },
      { day: "Mar", title: "Anglais + thème & palette", description: "Crée ton thème JSON personnalisé. Signature visuelle.", duration: "1h", type: "practice", english: true },
      { day: "Mer", title: "Bookmarks & navigation", description: "Crée un menu de navigation entre pages. Effet 'app pro' garanti.", duration: "1h30", type: "practice", win: "🚀 Ton dashboard ressemble à une app." },
      { day: "Jeu", title: "Anglais + tooltips custom", description: "Tooltips visuels avec mini-graphiques. Le détail qui tue.", duration: "1h30", type: "practice", english: true },
      { day: "Ven", title: "Drill-through & filtres", description: "Drill-through entre pages. Sync slicers. UX impeccable.", duration: "2h", type: "project" },
      { day: "Sam", title: "Refonte d'un dashboard", description: "Reprends ton dashboard semaine 3 et refais-le avec tout ce que tu sais. Comparaison avant/après pour ton portfolio.", duration: "2h30", type: "project", win: "📊 Avant/Après spectaculaire !" },
      { day: "Dim", title: "Pause", description: "Repos. Regarde des dashboards sur Awwwards / Behance pour le plaisir.", duration: "0", type: "rest" },
    ],
  },

  // ========== PHASE 3: PORTFOLIO ==========
  {
    number: 6,
    phase: "Portfolio",
    title: "Projet 1 — Analyse RH",
    intro: "On entre dans le concret. Un projet par semaine, du début à la fin. Comme en entreprise. Tu vas voir, tu es prête. 💪",
    goal: "Livrer un dashboard RH complet documenté.",
    celebration: "🏅 Premier projet portfolio publié sur LinkedIn.",
    days: [
      { day: "Lun", title: "Anglais + cadrage projet", description: "Définis 5 questions business RH (turnover, absentéisme, etc.). Note-les.", duration: "45 min", type: "theory", english: true, resources: [{ label: "Dataset HR Analytics – Kaggle", url: "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset" }] },
      { day: "Mar", title: "Anglais + import & nettoyage", description: "Power Query sur le dataset RH. Tu sais faire.", duration: "1h", type: "practice", english: true },
      { day: "Mer", title: "Modèle & mesures", description: "Modèle étoile + 8 mesures DAX RH.", duration: "2h", type: "project" },
      { day: "Jeu", title: "Anglais + maquette visuelle", description: "Wireframe sur papier de tes 3 pages. Avant de toucher Power BI.", duration: "1h", type: "theory", english: true },
      { day: "Ven", title: "Construction des pages", description: "3 pages : Vue d'ensemble, Démographie, Turnover.", duration: "2h30", type: "project" },
      { day: "Sam", title: "Polissage + publication", description: "Documente sur GitHub/Notion + publie sur LinkedIn avec un post court.", duration: "2h", type: "project", win: "📣 Premier projet PUBLIC !" },
      { day: "Dim", title: "Repos & fierté", description: "Off. Relis les commentaires LinkedIn s'il y en a. Souris.", duration: "0", type: "rest" },
    ],
  },
  {
    number: 7,
    phase: "Portfolio",
    title: "Projet 2 — Analyse e-commerce",
    intro: "Deuxième projet, plus rapide car tu as la méthode. Focus sur le storytelling cette fois. 🛍️",
    goal: "Dashboard e-commerce avec narration claire.",
    celebration: "🏆 Deux projets pro dans ton portfolio.",
    days: [
      { day: "Lun", title: "Anglais + brief e-commerce", description: "Dataset Olist ou similaire. Définis l'audience (CEO, marketing, ops).", duration: "45 min", type: "theory", english: true, resources: [{ label: "Olist e-commerce dataset", url: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce" }] },
      { day: "Mar", title: "Anglais + ETL", description: "Nettoyage + modèle. Plus rapide qu'avant, non ?", duration: "1h30", type: "practice", english: true },
      { day: "Mer", title: "DAX avancé", description: "Cohortes, retention, RFM si tu te sens d'attaque.", duration: "2h", type: "project" },
      { day: "Jeu", title: "Anglais + design pages", description: "3-4 pages avec un fil narratif clair.", duration: "1h30", type: "project", english: true },
      { day: "Ven", title: "Interactivité avancée", description: "What-if parameters, drill-through, tooltips riches.", duration: "2h30", type: "project" },
      { day: "Sam", title: "Publication + post LinkedIn", description: "Publie. Cette fois, demande du feedback dans le post.", duration: "2h", type: "project", win: "🌐 Visibilité qui s'installe." },
      { day: "Dim", title: "Repos", description: "Pause complète.", duration: "0", type: "rest" },
    ],
  },
  {
    number: 8,
    phase: "Portfolio",
    title: "Projet 3 — Domaine au choix",
    intro: "Choisis un secteur qui te passionne (santé, sport, culture, finance...). C'est CE projet qui parlera de toi en entretien. ❤️",
    goal: "Projet signature qui te distingue.",
    celebration: "💎 Tu as une signature data qui te ressemble.",
    days: [
      { day: "Lun", title: "Anglais + choix dataset", description: "Cherche un dataset dans un domaine que tu aimes. Prends le temps.", duration: "45 min", type: "theory", english: true, resources: [{ label: "data.gouv.fr", url: "https://www.data.gouv.fr/" }, { label: "Our World in Data", url: "https://ourworldindata.org/" }] },
      { day: "Mar", title: "Anglais + exploration", description: "Explore librement. Trouve l'angle qui t'émeut.", duration: "1h", type: "practice", english: true },
      { day: "Mer", title: "Construction rapide", description: "Tu connais le process. Vas-y avec confiance.", duration: "2h", type: "project" },
      { day: "Jeu", title: "Anglais + finition", description: "Polissage, design, accessibilité.", duration: "2h", type: "project", english: true },
      { day: "Ven", title: "Storytelling", description: "Écris un texte court qui raconte ton dashboard. C'est ce qui fera la différence.", duration: "1h30", type: "project" },
      { day: "Sam", title: "Publication + Power BI Service", description: "Publie sur Power BI Service public + LinkedIn + ajoute à ton portfolio.", duration: "2h30", type: "project", win: "🎯 Trois projets, trois angles, une professionnelle." },
      { day: "Dim", title: "Repos & relecture", description: "Repos. Relis tes 3 projets côte à côte. Mesure le chemin parcouru.", duration: "0", type: "rest" },
    ],
  },

  // ========== PHASE 4: JOB READY ==========
  {
    number: 9,
    phase: "Job Ready",
    title: "CV, portfolio, LinkedIn",
    intro: "Tu as les compétences. Maintenant, on les rend visibles. Cette semaine = marketing de toi-même. 📢",
    goal: "CV + portfolio + LinkedIn alignés et impactants.",
    celebration: "💼 Tu es officiellement candidate Data Analyst.",
    days: [
      { day: "Lun", title: "Anglais + audit LinkedIn", description: "Photo, headline ('Data Analyst | Power BI'), bannière, à propos.", duration: "1h", type: "theory", english: true },
      { day: "Mar", title: "Anglais + CV refonte", description: "CV 1 page orienté résultats. Mets tes 3 projets en avant.", duration: "1h30", type: "project", english: true },
      { day: "Mer", title: "Portfolio en ligne", description: "Notion ou site simple : 1 page par projet (problème, démarche, résultat).", duration: "2h", type: "project", resources: [{ label: "Template Notion portfolio", url: "https://www.notion.so/templates" }] },
      { day: "Jeu", title: "Anglais + post LinkedIn 'reconversion'", description: "Post personnel : ton parcours, ta motivation. Authenticité = traction.", duration: "1h", type: "project", english: true, win: "💖 Tu prends ta place." },
      { day: "Ven", title: "Veille & abonnements", description: "Suis 20 personnes Data sur LinkedIn. Commente 3 posts. Active la veille.", duration: "1h", type: "review" },
      { day: "Sam", title: "Candidatures (3-5)", description: "Première vague de candidatures. Lettre courte, personnalisée.", duration: "2h", type: "project", win: "🚀 Premières candidatures envoyées !" },
      { day: "Dim", title: "Repos", description: "Off. Tu as fait un travail immense.", duration: "0", type: "rest" },
    ],
  },
  {
    number: 10,
    phase: "Job Ready",
    title: "Entretiens & cas pratiques",
    intro: "Dernière ligne droite. On s'entraîne aux questions, aux cas pratiques, et on entretient le rituel. Tu es prête, Damienne. 🌟",
    goal: "Réussir un cas pratique en 1h sans stress.",
    celebration: "🎓 Tu es prête pour décrocher ton poste.",
    days: [
      { day: "Lun", title: "Anglais + questions techniques", description: "Liste les 30 questions Power BI/DAX classiques. Réponds par écrit.", duration: "1h30", type: "review", english: true, resources: [{ label: "Top Power BI interview questions", url: "https://www.simplilearn.com/tutorials/power-bi-tutorial/power-bi-interview-questions" }] },
      { day: "Mar", title: "Anglais + cas pratique 1h", description: "Dataset surprise : tu as 1h pour livrer un mini-dashboard. Chronomètre.", duration: "1h30", type: "practice", english: true },
      { day: "Mer", title: "Soft skills & STAR", description: "Prépare 5 anecdotes méthode STAR (Situation Tâche Action Résultat).", duration: "1h30", type: "review" },
      { day: "Jeu", title: "Anglais + mock interview", description: "Demande à un proche / un coach / ChatGPT de te faire passer un faux entretien.", duration: "1h30", type: "review", english: true, win: "🎤 Tu as fait ton premier entretien blanc." },
      { day: "Ven", title: "Cas pratique 2h", description: "Plus dur, plus long. Tu vas voir : tu y arrives.", duration: "2h", type: "practice" },
      { day: "Sam", title: "Bilan & vision", description: "Écris une lettre à la Damienne d'il y a 10 semaines. Raconte-lui tout. Garde-la.", duration: "1h", type: "review", win: "💌 Tu as transformé ta vie en 10 semaines." },
      { day: "Dim", title: "Célébration 🎉", description: "Aujourd'hui, on fête. Vraiment. Tu as accompli quelque chose d'énorme. La suite t'appartient.", duration: "0", type: "win", win: "🌅 Nouveau chapitre." },
    ],
  },
];
