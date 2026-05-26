// ══════════════════════════════════════════════════════════════════════
//  DADOS.JS — Banco de dados unificado — Catálogos MAXXWELD
//  SE JAGUARA 345 kV · CEMIG GERAÇÃO E TRANSMISSÃO · TK 20405 LOTE 01
//  Revisado em: 2026-05-25 — Páginas verificadas contra PDFs físicos
//
//  CONVENÇÃO DE PÁGINAS:
//  pagina = número físico da página PDF − 1
//  O app abre: #page=(pagina+1) = número físico correto
// ══════════════════════════════════════════════════════════════════════

// ── PASTA DE PDFs (relativa ao catalogo.html) ────────────────────────
const PDF_BASE = "pdfs/";

// ── CATÁLOGOS MAXXWELD ───────────────────────────────────────────────
const CATALOGOS = {
  "15036": {
    oc:      "15036",
    escopo:  "01",
    rev:     "B",
    arquivo: "oc_15036.pdf",
    titulo:  "Escopo 01 — Instalação Autotransformador Reserva 100 MVA (T7 e T8)",
    paginas: 13,
  },
  "15083": {
    oc:      "15083",
    escopo:  "04",
    rev:     "B",
    arquivo: "oc_15083.pdf",
    titulo:  "Escopo 04 — Adequações no Terciário do Banco T7",
    paginas: 16,
  },
  "15040": {
    oc:      "15040",
    escopo:  "10",
    rev:     "B",
    arquivo: "oc_15040.pdf",
    titulo:  "Escopo 10 — Substituição Banco de Autotransformadores T7",
    paginas: 13,
  },
  "15041": {
    oc:      "15041",
    escopo:  "11",
    rev:     "B",
    arquivo: "oc_15041.pdf",
    titulo:  "Escopo 11 — Relocação do Disjuntor 79F4",
    paginas: 12,
  },
  "15042": {
    oc:      "15042",
    escopo:  "15",
    rev:     "C",
    arquivo: "oc_15042.pdf",
    titulo:  "Escopo 15 — Substituição Secionadores 4K1 e 4K5",
    paginas: 10,
  },
  "15073": {
    oc:      "15073",
    escopo:  "27",
    rev:     "B",
    arquivo: "oc_15073.pdf",
    titulo:  "Escopo 27 — Instalação Equipamentos Vão 8K",
    paginas: 3,
  },
};

// ── CONECTORES — banco unificado ─────────────────────────────────────
// Cada item é único por código CEMIG.
// "aparicoes" lista catálogos, páginas físicas (−1) e aplicação real.
// O app calcula: #page = pagina + 1  →  abre a página física correta.
const CONECTORES = [

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: CONECTOR DE EMENDA (MCEA / MLS)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2372",
    ref_maxxweld: "MCEA-17A17A-T04",
    codigo_sap:   "226951",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE EMENDA",
    nome:         "Conector Emenda Tubo DN 40mm Reto",
    descricao:    "CONECTOR, EMENDA, TUBO DN 40mm (1.1/2\"IPS), RETO, LIGA ALUMÍNIO, APARAFUSADO, 138kV, RIV 200μV. Conforme DES 02118-CEMIG-0334A ITEM 2 e ET-02118-CEMIG-293J.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "2,3",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0334A ITEM 2", "ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 6,  qtd: 6,  aplicacao: "13,8 kV" }, // phys 7
      { oc: "15041", pagina: 5,  qtd: 6,  aplicacao: "13,8 kV" }, // phys 6
    ],
  },
  {
    codigo_cemig: "2373",
    ref_maxxweld: "MCEA-20A20A-T04",
    codigo_sap:   "226944",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE EMENDA",
    nome:         "Conector Emenda Tubo DN 80mm Reto",
    descricao:    "CONECTOR, EMENDA, TUBO DN 80mm (3\"IPS), RETO, LIGA ALUMÍNIO, APARAFUSADO, 138kV, RIV 200μV. Conforme DES 02118-CEMIG-0334A ITEM 3 e ET-02118-CEMIG-293J.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "1,7",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0334A ITEM 3", "ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 1,  qtd: 4,  aplicacao: "138 kV"  }, // phys 2
      { oc: "15036", pagina: 2,  qtd: 2,  aplicacao: "13,8 kV" }, // phys 3
      { oc: "15083", pagina: 7,  qtd: 15, aplicacao: "13,8 kV" }, // phys 8
      { oc: "15040", pagina: 4,  qtd: 2,  aplicacao: "13,8 kV" }, // phys 5
      { oc: "15042", pagina: 4,  qtd: 3,  aplicacao: "138 kV"  }, // phys 5
    ],
  },
  {
    codigo_cemig: "21654",
    ref_maxxweld: "MLS-24A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE EMENDA",
    nome:         "Conector Emenda Reta Tubo-Tubo Ø5\" Soldado",
    descricao:    "CONECTOR EMENDA RETA, TUBO-TUBO, LIGA ALUMÍNIO FUNDIDO (ASTM 356), ENCAIXE INTERNO, SOLDADO, PARA TUBOS Ø5\" IPS, SCHEDULE 40, TENSÃO 362kV, ANTI-CORONA, RIV < 200μV. Conf. ET 2118-CEMG-0293.",
    tensao:       "362 kV",
    tensao_kv:    362,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356",
    normas:       ["ET 2118-CEMG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 9,  qtd: 4, aplicacao: "345 kV" }, // phys 10
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: SUPORTE FIXO (MSPA)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2447",
    ref_maxxweld: "MSPA-17A-3-50-T04",
    codigo_sap:   "228452",
    codigo_remo:  "—",
    tipo:         "SUPORTE FIXO",
    nome:         "Suporte Fixo Tubo DN 20-40mm · Base 76mm",
    descricao:    "SUPORTE, FIXO, TUBO DN 20-40mm (3/4-1.1/2\"IPS), CÍRCULO FURAÇÃO BASE DN 76mm (3\"), LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-203B ITEM 2 e ET-02118-CEMIG-279E.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "0,6",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-203 ITEM 2", "ET-02118-CEMIG-279A", "ET-02118-CEMIG-293"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 3,  qtd: 2, aplicacao: "13,8 kV" }, // phys 4
      { oc: "15083", pagina: 10, qtd: 6, aplicacao: "13,8 kV" }, // phys 11
      { oc: "15041", pagina: 9,  qtd: 3, aplicacao: "13,8 kV" }, // phys 10
    ],
  },
  {
    codigo_cemig: "2449",
    ref_maxxweld: "MSPA-20A-3-70",
    codigo_sap:   "228502",
    codigo_remo:  "—",
    tipo:         "SUPORTE FIXO",
    nome:         "Suporte Fixo Tubo DN 80mm · Base 76mm",
    descricao:    "SUPORTE, FIXO, TUBO DN 80mm (3\"IPS), CÍRCULO FURAÇÃO BASE DN 76mm (3\"), LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-203B ITEM 4 e ET-02118-CEMIG-279E.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "1,2",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0203 ITEM 4", "ET-02118-CEMIG-0279"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 4,  qtd: 1, aplicacao: "13,8 kV" }, // phys 5
      { oc: "15083", pagina: 11, qtd: 6, aplicacao: "13,8 kV" }, // phys 12
      { oc: "15040", pagina: 6,  qtd: 2, aplicacao: "13,8 kV" }, // phys 7
    ],
  },
  {
    codigo_cemig: "2450",
    ref_maxxweld: "MSPA-20A-5-70",
    codigo_sap:   "228510",
    codigo_remo:  "—",
    tipo:         "SUPORTE FIXO",
    nome:         "Suporte Fixo Tubo DN 80mm · Base 127mm",
    descricao:    "SUPORTE, FIXO, TUBO DN 80mm (3\"IPS), CÍRCULO FURAÇÃO BASE DN 127mm (5\"), LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-203B ITEM 5 e ET-02118-CEMIG-279E.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "1,3",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-203B ITEM 5", "ET-02118-CEMIG-0279A"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 5,  qtd: 1, aplicacao: "138 kV" }, // phys 6
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: SUPORTE LIVRE (MSTA)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2454",
    ref_maxxweld: "MSTA-17A-3-65",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "SUPORTE LIVRE",
    nome:         "Suporte Livre Tubo DN 40mm · Base 76mm",
    descricao:    "SUPORTE, LIVRE, TUBO DN 40mm (1.1/2\"IPS), CÍRCULO FURAÇÃO BASE DN 76mm (3\"), LIGA ALUMÍNIO, APARAFUSADO. Conf. ET-02118-CEMIG-0279.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0279"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 10, qtd: 6, aplicacao: "13,8 kV" }, // phys 11
    ],
  },
  {
    codigo_cemig: "2456",
    ref_maxxweld: "MSTA-20A-3-80",
    codigo_sap:   "228486",
    codigo_remo:  "—",
    tipo:         "SUPORTE LIVRE",
    nome:         "Suporte Livre Tubo DN 80mm · Base 76mm",
    descricao:    "SUPORTE, LIVRE, TUBO DN 80mm (3\"IPS), CÍRCULO FURAÇÃO BASE 76mm (3\"), LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-157B ITEM 4 e ET-02118-CEMIG-279E.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "0,6",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0157A ITEM 4", "ET-02118-CEMIG-0279"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 6,  qtd: 2, aplicacao: "13,8 kV" }, // phys 7
      { oc: "15083", pagina: 12, qtd: 9, aplicacao: "13,8 kV" }, // phys 13
      { oc: "15040", pagina: 7,  qtd: 3, aplicacao: "13,8 kV" }, // phys 8
    ],
  },
  {
    codigo_cemig: "2457",
    ref_maxxweld: "MSTA-20A-5-100",
    codigo_sap:   "228494",
    codigo_remo:  "—",
    tipo:         "SUPORTE LIVRE",
    nome:         "Suporte Livre Tubo DN 80mm · Base 127mm",
    descricao:    "SUPORTE, LIVRE, TUBO DN 80mm (3\"IPS), CÍRCULO FURAÇÃO BASE DN 127mm (5\"), LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-157B ITEM 5 e ET-02118-CEMIG-279E.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "0,9",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-157B ITEM 5", "ET-02118-CEMIG-0279A"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 7,  qtd: 1, aplicacao: "138 kV" }, // phys 8
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: CONECTOR DE SUPORTE (MXCST / MCS2SA / MCSE)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2786",
    ref_maxxweld: "MXCST-24A-5-135-T05",
    codigo_sap:   "232785",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE SUPORTE",
    nome:         "Conector Suporte Tubo DN 125mm Anti-corona 345kV",
    descricao:    "CONECTOR, SUPORTE, TUBO DN 125mm (5\"IPS), FIXO/LIVRE, CÍRCULO FURAÇÃO BASE DN 125mm (5\"), LIGA ALUMÍNIO, APARAFUSADO, ANTICORONA, 345kV, RIV 200μV. Conf. ET-02118-CEMIG-293J.",
    tensao:       "345 kV",
    tensao_kv:    345,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-000293"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 8,  qtd: 2, aplicacao: "345 kV" }, // phys 9
    ],
  },
  {
    codigo_cemig: "2787",
    ref_maxxweld: "MCS2SA-45A-5-T01",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE SUPORTE",
    nome:         "Conector Suporte Duplo Tubo DN 125mm 138kV",
    descricao:    "CONECTOR, SUPORTE DUPLO, TUBO DN 125mm (5\"IPS), LIGA ALUMÍNIO, APARAFUSADO, 138kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15042", pagina: 7,  qtd: 4, aplicacao: "138 kV" }, // phys 8
    ],
  },
  {
    codigo_cemig: "25541",
    ref_maxxweld: "MCSE-20A-3-95",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE SUPORTE",
    nome:         "Conector Suporte Expansão Tubo DN 80mm · Base 76mm",
    descricao:    "CONECTOR, SUPORTE, TUBO DN 80mm (3\"IPS), EXPANSÃO, CÍRCULO FURAÇÃO BASE 76mm (3\"), LIGA ALUMÍNIO, APARAFUSADO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 15, qtd: 3, aplicacao: "13,8 kV" }, // phys 16
    ],
  },
  {
    codigo_cemig: "25542",
    ref_maxxweld: "MCSE-20A-5-100-T05",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE SUPORTE",
    nome:         "Conector Suporte Expansão Tubo DN 80mm · Base 127mm",
    descricao:    "CONECTOR, SUPORTE, TUBO DN 80mm (3\"IPS), EXPANSÃO, CÍRCULO FURAÇÃO BASE 127mm (5\"), LIGA ALUMÍNIO, APARAFUSADO, 138kV, RIV < 200μV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 11, qtd: 1, aplicacao: "138 kV" }, // phys 12
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: CONECTOR DE DERIVAÇÃO (MDTA / MDTT / MXDTA / M2DTC / MX2DTC)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2330",
    ref_maxxweld: "MDTA-45A45A-T04",
    codigo_sap:   "228197",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Cabo CAA DN 40mm 138kV",
    descricao:    "CONECTOR, DERIVAÇÃO T, TUBO DN 40mm (1.1/2\"IPS) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, APARAFUSADO, 138kV. Conf. DES 02118-CEMIG-0321B e ET-02118-CEMIG-293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "1,3",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0321B", "ET-02118-CEMIG-293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 1,  qtd: 6, aplicacao: "138 kV" }, // phys 2
    ],
  },
  {
    codigo_cemig: "2358",
    ref_maxxweld: "MDTT-15A15A-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Tubo DN 20mm Tronco e Derivação",
    descricao:    "CONECTOR, DERIVAÇÃO T, TUBO DN 20mm (3/4\"IPS) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, APARAFUSADO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 4,  qtd: 3, aplicacao: "13,8 kV" }, // phys 5
    ],
  },
  {
    codigo_cemig: "2361",
    ref_maxxweld: "MDTT-17A17A",
    codigo_sap:   "228148",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Cabo CAA 456-483mm² 138kV",
    descricao:    "CONECTOR, DERIVAÇÃO T, CABO CAA 456,0-483,4mm² (900-954) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, APARAFUSADO, 138kV, RIV 200μV. Conf. DES 02118-CEMIG-323B ITEM 11.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0323B", "ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 4,  qtd: 3, aplicacao: "13,8 kV" }, // phys 5
    ],
  },
  {
    codigo_cemig: "2362",
    ref_maxxweld: "MDTT-20A17A-T04",
    codigo_sap:   "228155",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Tubo DN 80mm / DN 40mm",
    descricao:    "CONECTOR, DERIVAÇÃO T, TUBO DN 80mm (3\"IPS) TRONCO, DN 40mm (1.1/2\"IPS) DERIVAÇÃO, LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-321C ITEM 4 e ET-02118-CEMIG-293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "3,2",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0321B ITEM 4", "ET-02118-CEMIG-293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 5,  qtd: 8, aplicacao: "13,8 kV" }, // phys 6
    ],
  },
  {
    codigo_cemig: "2363",
    ref_maxxweld: "MDTT-20A20A-T04",
    codigo_sap:   "372966",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Tubo DN 80mm Tronco e Derivação",
    descricao:    "CONECTOR, DERIVAÇÃO T, TUBO DN 80mm (3\"IPS) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, APARAFUSADO. Conf. DES 02118-CEMIG-321C ITEM 5 e ET-02118-CEMIG-293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0321B ITEM 5", "ET-02118-CEMIG-293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 3,  qtd: 3, aplicacao: "13,8 kV" }, // phys 4
    ],
  },
  {
    codigo_cemig: "2719",
    ref_maxxweld: "MXDTA-44A44A-T01",
    codigo_sap:   "378665",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Cabo 2×CAA 954 345kV",
    descricao:    "CONECTOR DERIVAÇÃO T, CABO CAA 456,0-563,9mm² (900-1113) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, PARAFUSO DURALUMÍNIO, 345kV, RIV 200μV. Conf. ET-02118-CEMIG-0293E.",
    tensao:       "345 kV",
    tensao_kv:    345,
    unidade:      "pç",
    peso_kg:      "26,2",
    material:     "Liga Alumínio / Duralumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 9,  qtd: 6, aplicacao: "345 kV" }, // phys 10
    ],
  },
  {
    codigo_cemig: "21694",
    ref_maxxweld: "M2DTC-20A45A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação T Tubo DN 80mm / 2×ACAR 954 138kV",
    descricao:    "CONECTOR DERIVAÇÃO T, TUBO-CABO, LIGA ALUMÍNIO FUNDIDO (ASTM 356-T6), APARAFUSADO, TUBO Ø3\" IPS (80DN) TRONCO, 2 CABOS ACAR 954MCM RAIL DERIVAÇÃO, 138kV. Conf. ET 2118-CEMG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356-T6",
    normas:       ["ET 2118-CEMG-0293", "ET 2118-CEMIG-0304"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 10, qtd: 1, aplicacao: "138 kV" }, // phys 11
    ],
  },
  {
    codigo_cemig: "25543",
    ref_maxxweld: "MX2DTC-24A44A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE DERIVAÇÃO",
    nome:         "Conector Derivação Paralelo Tubo DN 125mm / 2×ACAR 954 550kV",
    descricao:    "CONECTOR DERIVAÇÃO PARALELO, TUBO-CABO, LIGA ALUMÍNIO FUNDIDO (ASTM 356-T6), APARAFUSADO, ANTI-CORONA, TUBO Ø5\" IPS (125DN) TRONCO, 2 CABOS ACAR 954MCM ESPAÇADOS, 550kV. Conf. ET 2118-CEMG-0293.",
    tensao:       "550 kV",
    tensao_kv:    345,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356-T6",
    normas:       ["ET 2118-CEMG-0293", "ET 2118-CEMIG-0304"],
    foto:         null,
    aparicoes: [
      { oc: "15036", pagina: 12, qtd: 1, aplicacao: "550 kV" }, // phys 13
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: CONECTOR PARALELO (MCPA / MXCPA)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2394",
    ref_maxxweld: "MCPA-44A44A",
    codigo_sap:   "227959",
    codigo_remo:  "—",
    tipo:         "CONECTOR PARALELO",
    nome:         "Conector Paralelo Cabo CA/Cu 500mm² 138kV",
    descricao:    "CONECTOR, PARALELO, CABO CA/Cu 500mm² (1000) / CAA 483,4mm² (954) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, APARAFUSADO, 138kV, RIV 200μV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 5,  qtd: 12, aplicacao: "138 kV" }, // phys 6
    ],
  },
  {
    codigo_cemig: "2768",
    ref_maxxweld: "MXCPA-44A44A-T01",
    codigo_sap:   "233049",
    codigo_remo:  "—",
    tipo:         "CONECTOR PARALELO",
    nome:         "Conector Paralelo Cabo CAA 345kV Anti-corona",
    descricao:    "CONECTOR, PARALELO, CABO CA/Cu 523,4-563,9mm² (1033-1113) / CAA 456,0-563,9mm² (900-1033) TRONCO E DERIVAÇÃO, LIGA ALUMÍNIO, PARAFUSO DURALUMÍNIO, 345kV, RIV 200μV. Conf. ET-02118-CEMIG-293J.",
    tensao:       "345 kV",
    tensao_kv:    345,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio / Duralumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 10, qtd: 12, aplicacao: "345 kV" }, // phys 11
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: TERMINAL ANTI-CORONA / CABO (MTCE / MTAC / MTCI)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2462",
    ref_maxxweld: "MTCE-17A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL ANTI-CORONA",
    nome:         "Terminal Anti-corona Tubo DN 40mm",
    descricao:    "TERMINAL, ANTI-CORONA, PARA TUBO DN 40mm (1.1/2\"IPS), EXTERNO, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-293J.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-293J"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 11, qtd: 6, aplicacao: "13,8 kV" }, // phys 12
    ],
  },
  {
    codigo_cemig: "2464",
    ref_maxxweld: "MTCE-20A",
    codigo_sap:   "230003",
    codigo_remo:  "—",
    tipo:         "TERMINAL ANTI-CORONA",
    nome:         "Terminal Anti-corona Tubo DN 80mm",
    descricao:    "TERMINAL, ANTI-CORONA, PARA TUBO DN 80mm (3\"IPS), EXTERNO, LIGA ALUMÍNIO, 138kV. Conf. DES 02118-CEMIG-170B ITEM 3 e ET-02118-CEMIG-293J.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "0,25",
    material:     "Liga Alumínio",
    normas:       ["DES 02118-CEMIG-0170B ITEM 3", "ET-02118-CEMIG-293J"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 13, qtd: 3, aplicacao: "13,8 kV" }, // phys 14
      { oc: "15040", pagina: 8,  qtd: 3, aplicacao: "13,8 kV" }, // phys 9
    ],
  },
  {
    codigo_cemig: "2418",
    ref_maxxweld: "MTAC-10-N4",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL DE CABO",
    nome:         "Terminal Cabo CAA 10mm² 4 Furos",
    descricao:    "TERMINAL, CABO CAA 10mm², 4 FUROS NEMA, RETO, COMPRESSÃO, ALUMÍNIO. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 8,  qtd: 6, aplicacao: "13,8 kV" }, // phys 9
    ],
  },
  {
    codigo_cemig: "2424",
    ref_maxxweld: "MTAC-150-N4",
    codigo_sap:   "372958",
    codigo_remo:  "—",
    tipo:         "TERMINAL DE CABO",
    nome:         "Terminal Cabo CA 150mm² 4 Furos",
    descricao:    "CONECTOR, TERMINAL, CABO CA 150mm² COMPACTADO, CHAPA 4 FUROS NEMA, RETO, COMPRESSÃO, ALUMÍNIO. Conf. DES 02118-CEMIG-258G ITEM 7 e ET-02118-CEMIG-293J.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Alumínio",
    normas:       ["DES N° 02118-CEMIG-0258 ITEM 7", "ET 02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 9,  qtd: 3, aplicacao: "13,8 kV" }, // phys 10
    ],
  },
  {
    codigo_cemig: "2427",
    ref_maxxweld: "MTAC-451-RT / MTAC-49RT-4N-W",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL DE CABO",
    nome:         "Terminal Cabo ACAR 954 4 Furos 138kV",
    descricao:    "TERMINAL, CABO ACAR 954MCM RAIL (483,8mm²), 4 FUROS NEMA, RETO, COMPRESSÃO, LIGA ALUMÍNIO, 138kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15042", pagina: 5,  qtd: 22, aplicacao: "138 kV" }, // phys 6
      { oc: "15073", pagina: 1,  qtd: 6,  aplicacao: "138 kV" }, // phys 2
    ],
  },
  {
    codigo_cemig: "21615",
    ref_maxxweld: "MTCI-20A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL DE CABO",
    nome:         "Tampão Terminal Tubo DN 80mm 138kV",
    descricao:    "TAMPÃO, TERMINAL, ANTI-CORONA, PARA TUBO DN 80mm (3\"IPS), EXTERNO, LIGA ALUMÍNIO, 138kV. Conf. ET-02118-CEMIG-0286.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0286"],
    foto:         null,
    aparicoes: [
      { oc: "15073", pagina: 2,  qtd: 2, aplicacao: "138 kV" }, // phys 3
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: CONECTOR TERMINAL TUBO (MEXT / MCPT)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2232",
    ref_maxxweld: "MEXT-20A-4N-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR TERMINAL",
    nome:         "Conector Terminal Expansão Tubo DN 80mm 4 Furos 138kV",
    descricao:    "CONECTOR, TERMINAL EXPANSÃO, TIPO TUBO-PINO, LIGA ALUMÍNIO FUNDIDO (ASTM 356-T6), APARAFUSADO, 138kV, PARA CONEXÃO DE TUBO DN 80mm A PINO LISO Ø40mm. Conf. ET 2118-CEMG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356-T6",
    normas:       ["ET 2118-CEMG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15042", pagina: 3,  qtd: 3, aplicacao: "138 kV" }, // phys 4
    ],
  },
  {
    codigo_cemig: "21699",
    ref_maxxweld: "MCPT-20A45A-T100",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR TERMINAL",
    nome:         "Conector Terminal Tubo DN 80mm / Cabo 2×ACAR 138kV",
    descricao:    "CONECTOR TERMINAL PARALELO, TIPO TUBO-CABO, LIGA ALUMÍNIO FUNDIDO (ASTM 356-T6), APARAFUSADO, ANTI-CORONA, TUBO Ø3\" IPS (80DN) TRONCO, 2 CABOS ACAR 954MCM, 138kV. Conf. ET 2118-CEMG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356-T6",
    normas:       ["ET 2118-CEMG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15042", pagina: 9,  qtd: 2, aplicacao: "138 kV" }, // phys 10
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: CONECTOR ESPAÇADOR (MXCEC / MYCEC)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "21651",
    ref_maxxweld: "MXCEC-44A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR ESPAÇADOR",
    nome:         "Conector Espaçador Anti-corona 2×ACAR 954 · 345kV",
    descricao:    "CONECTOR ESPAÇADOR, ANTI-CORONA, LIGA ALUMÍNIO FUNDIDO (ASTM 356-T6), APARAFUSADO, ESPAÇAMENTO 450mm, 2 CABOS CAA 954 MCM RAIL (483,8mm²), 362kV, RIV < 200μV. Conf. ET 2118-CEMG-0293.",
    tensao:       "362 kV",
    tensao_kv:    362,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356-T6",
    normas:       ["ET 2118-CEMG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 11, qtd: 15, aplicacao: "345 kV" }, // phys 12
    ],
  },
  {
    codigo_cemig: "21656",
    ref_maxxweld: "MYCEC-R-42A-20",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR ESPAÇADOR",
    nome:         "Conector Espaçador Anti-corona 2×ACAR 954 · 230kV",
    descricao:    "CONECTOR ESPAÇADOR, ANTI-CORONA, LIGA ALUMÍNIO FUNDIDO (ASTM 356-T6), APARAFUSADO, ESPAÇAMENTO 200mm, 2 CABOS CAA 954MCM RAIL (483,8mm²), 230kV, RIV < 200μV. Conf. ET 2118-CEMG-0293.",
    tensao:       "230 kV",
    tensao_kv:    230,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio Fundido ASTM 356-T6",
    normas:       ["ET 2118-CEMG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 12, qtd: 15, aplicacao: "138 kV" }, // phys 13
      { oc: "15042", pagina: 8,  qtd: 9,  aplicacao: "138 kV" }, // phys 9
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: TERMINAL FLEXÍVEL — TUBO (MTTA)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2441",
    ref_maxxweld: "MTTA-17A-4N-W-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Tubo DN 40mm 4 Furos Reto",
    descricao:    "TERMINAL, FLEXÍVEL, TUBO DN 40mm, 4 FUROS NEMA, RETO, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 6,  qtd: 15, aplicacao: "13,8 kV" }, // phys 7
    ],
  },
  {
    codigo_cemig: "2442",
    ref_maxxweld: "MTTA-20A-4N-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Tubo DN 80mm 4 Furos Reto",
    descricao:    "TERMINAL, FLEXÍVEL, TUBO DN 80mm, 4 FUROS NEMA, RETO, LIGA ALUMÍNIO, 138kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "138 kV",
    tensao_kv:    138,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 7,  qtd: 3,  aplicacao: "13,8 kV" }, // phys 8
      { oc: "15042", pagina: 6,  qtd: 7,  aplicacao: "138 kV"  }, // phys 7
    ],
  },
  {
    codigo_cemig: "2444",
    ref_maxxweld: "MTTA-17A-4N-W-90",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Tubo DN 40mm 4 Furos 90°",
    descricao:    "TERMINAL, FLEXÍVEL, TUBO DN 40mm, 4 FUROS NEMA, 90°, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 8,  qtd: 6, aplicacao: "13,8 kV" }, // phys 9
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: TERMINAL FLEXÍVEL — CABO (MLF / MT2CA)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2229",
    ref_maxxweld: "MLF-1200-4N-T09",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Cabo 1200mm² 4 Furos Reto",
    descricao:    "TERMINAL, FLEXÍVEL, CABO 1200mm², 4 FUROS NEMA, RETO, ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 1,  qtd: 12, aplicacao: "13,8 kV" }, // phys 2
    ],
  },
  {
    codigo_cemig: "2230",
    ref_maxxweld: "MLF-1200-4N-90-T09",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Cabo 1200mm² 4 Furos 90°",
    descricao:    "TERMINAL, FLEXÍVEL, CABO 1200mm², 4 FUROS NEMA, 90°, ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15041", pagina: 2,  qtd: 6, aplicacao: "13,8 kV" }, // phys 3
    ],
  },
  {
    codigo_cemig: "2191",
    ref_maxxweld: "MT2CA-45A-4N-W-T05",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex 2 Cabos ACAR 954 4 Furos Reto 230kV",
    descricao:    "TERMINAL, FLEXÍVEL, 2 CABOS ACAR 954MCM RAIL, 4 FUROS NEMA, RETO, LIGA ALUMÍNIO, 230kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "230 kV",
    tensao_kv:    230,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15042", pagina: 1,  qtd: 33, aplicacao: "230 kV" }, // phys 2
    ],
  },
  {
    codigo_cemig: "2192",
    ref_maxxweld: "MT2CA-45A-4N-W-90-T05",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex 2 Cabos ACAR 954 4 Furos 90° 230kV",
    descricao:    "TERMINAL, FLEXÍVEL, 2 CABOS ACAR 954MCM RAIL, 4 FUROS NEMA, 90°, LIGA ALUMÍNIO, 230kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "230 kV",
    tensao_kv:    230,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15042", pagina: 2,  qtd: 1, aplicacao: "138 kV" }, // phys 3
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // FAMÍLIA: TERMINAL FLEXÍVEL — BARRA (MVBA)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "2335",
    ref_maxxweld: "MVBA-15A-4N-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Cabo 4 Furos para Barra · Reto",
    descricao:    "TERMINAL, FLEXÍVEL, CABO, 4 FUROS NEMA, RETO, PARA BARRA ALUMÍNIO, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 1,  qtd: 3, aplicacao: "13,8 kV" }, // phys 2
    ],
  },
  {
    codigo_cemig: "2337",
    ref_maxxweld: "MVBA-17A-4N-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Cabo 4 Furos 90° para Barra",
    descricao:    "TERMINAL, FLEXÍVEL, CABO, 4 FUROS NEMA, 90°, PARA BARRA ALUMÍNIO, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 2,  qtd: 3, aplicacao: "13,8 kV" }, // phys 3
    ],
  },
  {
    codigo_cemig: "2339",
    ref_maxxweld: "MVBA-17A-2N-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Cabo 2 Furos 90° para Barra",
    descricao:    "TERMINAL, FLEXÍVEL, CABO, 2 FUROS NEMA, 90°, PARA BARRA ALUMÍNIO, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 3,  qtd: 3, aplicacao: "13,8 kV" }, // phys 4
    ],
  },
  {
    codigo_cemig: "2340",
    ref_maxxweld: "MVBA-20A-2N-T04",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "TERMINAL FLEXÍVEL",
    nome:         "Terminal Flex Cabo 2 Furos Reto para Barra",
    descricao:    "TERMINAL, FLEXÍVEL, CABO, 2 FUROS NEMA, RETO, PARA BARRA ALUMÍNIO, LIGA ALUMÍNIO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15040", pagina: 2,  qtd: 2, aplicacao: "13,8 kV" }, // phys 3
      { oc: "15041", pagina: 3,  qtd: 3, aplicacao: "13,8 kV" }, // phys 4
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // MISCELÂNEA (MRCA — Redução)
  // ══════════════════════════════════════════════════════════════════
  {
    codigo_cemig: "24008",
    ref_maxxweld: "MRCA-20A20A",
    codigo_sap:   "N/I",
    codigo_remo:  "—",
    tipo:         "CONECTOR DE EMENDA",
    nome:         "Conector Redução Tubo DN 80mm Reto",
    descricao:    "CONECTOR, REDUÇÃO, TUBO DN 80mm (3\"IPS), RETO, LIGA ALUMÍNIO, APARAFUSADO, 13,8kV. Conf. ET-02118-CEMIG-0293.",
    tensao:       "13,8 kV",
    tensao_kv:    13.8,
    unidade:      "pç",
    peso_kg:      "N/I",
    material:     "Liga Alumínio",
    normas:       ["ET-02118-CEMIG-0293"],
    foto:         null,
    aparicoes: [
      { oc: "15083", pagina: 14, qtd: 3, aplicacao: "13,8 kV" }, // phys 15
    ],
  },
];
