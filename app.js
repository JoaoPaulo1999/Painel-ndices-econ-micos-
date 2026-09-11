let products = [
  { name: 'Soja e derivados', value: 'US$ 39,21 bi', change: '+6,8%', width: 100 },
  { name: 'Petróleo bruto', value: 'US$ 31,48 bi', change: '+3,2%', width: 80 },
  { name: 'Minério de ferro', value: 'US$ 22,76 bi', change: '−8,4%', width: 58 },
  { name: 'Carnes bovina e suína', value: 'US$ 14,92 bi', change: '+15,6%', width: 49 },
  { name: 'Café não torrado', value: 'US$ 8,73 bi', change: '+29,1%', width: 30 },
  { name: 'Óleos combustíveis', value: 'US$ 8,42 bi', change: '+22,4%', width: 28 },
  { name: 'Açúcares e melaços', value: 'US$ 7,98 bi', change: '+9,7%', width: 25 },
  { name: 'Celulose', value: 'US$ 7,35 bi', change: '−3,1%', width: 23 },
  { name: 'Ouro e pedras preciosas', value: 'US$ 5,88 bi', change: '+11,9%', width: 19 },
  { name: 'Automóveis', value: 'US$ 5,67 bi', change: '+31,2%', width: 18 }
];

const destinations = [
  { name: 'China', share: '31,2%', color: '#0d8079' },
  { name: 'União Europeia', share: '15,1%', color: '#e86552' },
  { name: 'Estados Unidos', share: '12,5%', color: '#edb84f' },
  { name: 'Argentina', share: '9,8%', color: '#4779aa' },
  { name: 'Chile', share: '4,1%', color: '#c7795a' },
  { name: 'México', share: '3,4%', color: '#816ca8' },
  { name: 'Japão', share: '3,1%', color: '#d39445' },
  { name: 'Índia', share: '2,7%', color: '#5b9b8e' },
  { name: 'Singapura', share: '2,1%', color: '#7b8794' },
  { name: 'Outros destinos', share: '16,0%', color: '#9cb9ab' }
];

const balanceSeries = {
  goods: { code: 22707 },
  services: { code: 22719 },
  primary: { code: 22800 },
  secondary: { code: 22838 },
  financial: { code: 22863 }
};

const baseProducts = products.map(product => ({
  ...product,
  amount: Number(product.value.replace('US$ ', '').replace(' bi', '').replace(',', '.'))
}));

const periodData = {
  '2026-ytd': {
    heading: 'JANEIRO–AGOSTO 2026', display: 'Jan–Ago 2026', factor: 1,
    kpis: { total: '227,4', manufactured: '76,8', balance: '47,2', destinations: '219', totalTrend: '+4,7%', manufacturedTrend: '+8,2%', balanceTrend: '+2,1%' },
    productChanges: ['+6,8%', '+3,2%', '−8,4%', '+15,6%', '+29,1%', '+22,4%', '+9,7%', '−3,1%', '+11,9%', '+31,2%'],
    destinationShares: ['31,2%', '15,1%', '12,5%', '9,8%', '4,1%', '3,4%', '3,1%', '2,7%', '2,1%', '16,0%'],
    sectors: ['21,6', '14,8', '10,9', '9,7'], manufactured: ['8,42', '6,17', '4,96', '4,72', '4,38', '4,12', '3,96', '3,74', '3,21', '2,87']
  },
  '2025-full': {
    heading: 'JANEIRO–DEZEMBRO 2025', display: 'Jan–Dez 2025', factor: 1.46,
    kpis: { total: '348,7', manufactured: '119,4', balance: '74,6', destinations: '229', totalTrend: '+3,9%', manufacturedTrend: '+10,6%', balanceTrend: '+5,4%' },
    productChanges: ['+4,2%', '+11,7%', '−2,1%', '+18,4%', '+7,8%', '+16,2%', '+12,5%', '+1,9%', '+8,4%', '+27,6%'],
    destinationShares: ['29,8%', '16,7%', '13,8%', '8,9%', '4,0%', '3,5%', '3,0%', '2,6%', '2,0%', '15,7%'],
    sectors: ['33,1', '21,9', '16,8', '14,5'], manufactured: ['12,64', '9,08', '7,12', '6,88', '6,25', '6,02', '5,78', '5,46', '4,68', '4,18']
  },
  '2025-ytd': {
    heading: 'JANEIRO–AGOSTO 2025', display: 'Jan–Ago 2025', factor: 0.94,
    kpis: { total: '217,2', manufactured: '71,0', balance: '46,2', destinations: '213', totalTrend: '−2,8%', manufacturedTrend: '+1,5%', balanceTrend: '−4,1%' },
    productChanges: ['−2,4%', '+1,8%', '−11,2%', '+8,7%', '+18,9%', '+13,1%', '+4,8%', '−6,4%', '+7,2%', '+22,5%'],
    destinationShares: ['30,4%', '15,8%', '12,1%', '10,2%', '4,0%', '3,3%', '2,9%', '2,4%', '2,0%', '16,9%'],
    sectors: ['19,2', '12,6', '10,1', '9,2'], manufactured: ['7,18', '5,22', '4,31', '4,87', '3,99', '3,82', '3,68', '3,51', '3,01', '2,69']
  }
};

const importBaseProducts = [
  { name: 'Máquinas e equipamentos', amount: 28.64, change: '+9,4%', width: 100 },
  { name: 'Petróleo refinado', amount: 18.27, change: '−4,2%', width: 64 },
  { name: 'Circuitos e componentes eletrônicos', amount: 14.82, change: '+18,6%', width: 52 },
  { name: 'Medicamentos e insumos farmacêuticos', amount: 12.36, change: '+7,9%', width: 43 },
  { name: 'Adubos e fertilizantes', amount: 11.94, change: '−12,1%', width: 41 },
  { name: 'Peças e acessórios para veículos', amount: 9.88, change: '+11,5%', width: 35 },
  { name: 'Produtos químicos orgânicos', amount: 9.42, change: '+5,6%', width: 33 },
  { name: 'Gás natural', amount: 8.71, change: '+2,8%', width: 30 },
  { name: 'Instrumentos e aparelhos médicos', amount: 7.95, change: '+13,2%', width: 28 },
  { name: 'Carvão mineral', amount: 7.31, change: '−8,7%', width: 25 }
];

function makeImportPeriod(config) {
  return {
    ...config,
    products: importBaseProducts.map(product => ({ ...product, value: formatBi(product.amount * config.factor) }))
  };
}

const importData = {
  '2026-ytd': makeImportPeriod({
    heading: 'JANEIRO–AGOSTO 2026', display: 'Jan–Ago 2026', factor: 1,
    kpis: { total: '181,3', manufactured: '121,4', balance: '47,2', destinations: '198', totalTrend: '+6,1%', manufacturedTrend: '+8,9%', balanceTrend: '+2,1%' },
    destinationNames: ['China', 'Estados Unidos', 'União Europeia', 'Alemanha', 'Japão', 'Coreia do Sul', 'Argentina', 'Itália', 'Índia', 'Outros fornecedores'], destinationShares: ['24,6%', '18,4%', '16,1%', '6,8%', '5,0%', '4,6%', '4,1%', '3,1%', '2,5%', '14,8%'],
    sectors: ['31,8', '24,6', '18,9', '15,3'], manufactured: ['28,64', '18,27', '14,82', '12,36', '11,94', '9,42', '8,55', '7,88', '6,91', '5,76']
  }),
  '2025-full': makeImportPeriod({
    heading: 'JANEIRO–DEZEMBRO 2025', display: 'Jan–Dez 2025', factor: 1.43,
    kpis: { total: '259,6', manufactured: '174,8', balance: '74,6', destinations: '207', totalTrend: '+2,7%', manufacturedTrend: '+4,3%', balanceTrend: '+5,4%' },
    destinationNames: ['China', 'Estados Unidos', 'União Europeia', 'Alemanha', 'Japão', 'Coreia do Sul', 'Argentina', 'Itália', 'Índia', 'Outros fornecedores'], destinationShares: ['23,8%', '19,1%', '16,8%', '7,2%', '5,3%', '4,8%', '4,3%', '3,2%', '2,6%', '12,9%'],
    sectors: ['45,5', '35,2', '26,4', '21,8'], manufactured: ['40,96', '26,13', '21,19', '17,67', '17,07', '13,47', '12,23', '11,27', '9,89', '8,24']
  }),
  '2025-ytd': makeImportPeriod({
    heading: 'JANEIRO–AGOSTO 2025', display: 'Jan–Ago 2025', factor: 0.93,
    kpis: { total: '170,9', manufactured: '113,6', balance: '46,2', destinations: '194', totalTrend: '−1,7%', manufacturedTrend: '+2,2%', balanceTrend: '−4,1%' },
    destinationNames: ['China', 'Estados Unidos', 'União Europeia', 'Alemanha', 'Japão', 'Coreia do Sul', 'Argentina', 'Itália', 'Índia', 'Outros fornecedores'], destinationShares: ['25,1%', '17,9%', '15,8%', '6,5%', '5,1%', '4,4%', '4,0%', '3,0%', '2,3%', '15,9%'],
    sectors: ['29,6', '22,9', '17,4', '14,2'], manufactured: ['26,64', '16,99', '13,78', '11,49', '11,10', '8,87', '8,05', '7,40', '6,48', '5,40']
  })
};

const tradeShares = {
  '2026-ytd': { export: '33,8', import: '67,0' },
  '2025-full': { export: '34,2', import: '67,3' },
  '2025-ytd': { export: '32,7', import: '66,5' }
};

const commodityData = {
  '2026-ytd': { export: { value: '150,6', share: '66,2' }, import: { value: '59,9', share: '33,0' } },
  '2025-full': { export: { value: '229,3', share: '65,8' }, import: { value: '84,8', share: '32,7' } },
  '2025-ytd': { export: { value: '146,2', share: '67,3' }, import: { value: '57,3', share: '33,5' } }
};

const commodityProducts = {
  export: {

    '2026-ytd': [
      ['Soja e derivados', '39,21', '+6,8%', '17,2%'], ['Petróleo bruto', '31,48', '+3,2%', '13,8%'], ['Minério de ferro', '22,76', '−8,4%', '10,0%'], ['Carnes bovina e suína', '14,92', '+15,6%', '6,6%'], ['Café não torrado', '8,73', '+29,1%', '3,8%'], ['Açúcares e melaços', '7,98', '+22,4%', '3,5%'], ['Celulose', '7,35', '−3,1%', '3,2%'], ['Ouro e pedras preciosas', '5,88', '+11,9%', '2,6%'], ['Algodão', '5,34', '+31,2%', '2,3%'], ['Milho', '4,87', '+8,6%', '2,1%']
    ],

    '2025-full': [
      ['Soja e derivados', '57,25', '+4,2%', '16,4%'], ['Petróleo bruto', '45,96', '+11,7%', '13,2%'], ['Minério de ferro', '33,23', '−2,1%', '9,5%'], ['Carnes bovina e suína', '21,78', '+18,4%', '6,2%'], ['Café não torrado', '12,75', '+7,8%', '3,7%'], ['Açúcares e melaços', '11,65', '+12,5%', '3,3%'], ['Celulose', '10,73', '+1,9%', '3,1%'], ['Ouro e pedras preciosas', '8,58', '+8,4%', '2,5%'], ['Algodão', '7,80', '+24,2%', '2,2%'], ['Milho', '7,11', '+5,8%', '2,0%']
    ],
    '2025-ytd': [
      ['Soja e derivados', '36,86', '−2,4%', '17,0%'], ['Petróleo bruto', '29,59', '+1,8%', '13,6%'], ['Minério de ferro', '21,39', '−11,2%', '9,9%'], ['Carnes bovina e suína', '14,02', '+8,7%', '6,5%'], ['Café não torrado', '8,21', '+18,9%', '3,8%'], ['Açúcares e melaços', '7,50', '+4,8%', '3,5%'], ['Celulose', '6,91', '−6,4%', '3,2%'], ['Ouro e pedras preciosas', '5,53', '+7,2%', '2,5%'], ['Algodão', '5,02', '+22,1%', '2,3%'], ['Milho', '4,58', '+3,6%', '2,1%']
    ]
  },
  import: {
    '2026-ytd': [
      ['Petróleo refinado', '18,27', '−4,2%', '10,1%'], ['Adubos e fertilizantes', '11,94', '−12,1%', '6,6%'], ['Gás natural', '8,71', '+2,8%', '4,8%'], ['Carvão mineral', '7,31', '−8,7%', '4,0%'], ['Algodão e fibras', '3,42', '+6,4%', '1,9%'], ['Cobre refinado', '3,18', '+9,2%', '1,8%'], ['Trigo', '2,94', '−3,6%', '1,6%'], ['Borracha natural', '2,61', '+4,8%', '1,4%'], ['Lã e fibras sintéticas', '2,22', '+7,1%', '1,2%'], ['Leite em pó', '1,97', '−5,3%', '1,1%']

    ],
    '2025-full': [
      ['Petróleo refinado', '26,13', '−1,9%', '10,1%'], ['Adubos e fertilizantes', '17,07', '−7,4%', '6,6%'], ['Gás natural', '12,46', '+5,1%', '4,8%'], ['Carvão mineral', '10,45', '−4,3%', '4,0%'], ['Algodão e fibras', '4,89', '+8,2%', '1,9%'], ['Cobre refinado', '4,55', '+6,4%', '1,8%'], ['Trigo', '4,21', '−2,8%', '1,6%'], ['Borracha natural', '3,74', '+3,5%', '1,4%'], ['Lã e fibras sintéticas', '3,18', '+5,9%', '1,2%'], ['Leite em pó', '2,82', '−3,7%', '1,1%']
    ],
    '2025-ytd': [
      ['Petróleo refinado', '16,99', '−6,8%', '9,9%'], ['Adubos e fertilizantes', '11,10', '−14,5%', '6,5%'], ['Gás natural', '8,06', '+1,4%', '4,7%'], ['Carvão mineral', '6,78', '−10,2%', '4,0%'], ['Algodão e fibras', '3,18', '+4,5%', '1,9%'], ['Cobre refinado', '2,95', '+4,1%', '1,7%'], ['Trigo', '2,74', '−4,4%', '1,6%'], ['Borracha natural', '2,43', '+2,6%', '1,4%'], ['Lã e fibras sintéticas', '2,07', '+4,8%', '1,2%'], ['Leite em pó', '1,84', '−5,1%', '1,1%']

    ]
  }
};

const industrializedNames = {
  export: ['Óleos combustíveis', 'Automóveis e comerciais leves', 'Aeronaves e componentes', 'Celulose branqueada', 'Açúcares e confeitaria', 'Produtos químicos', 'Máquinas e equipamentos', 'Plásticos e polímeros', 'Papel e embalagens', 'Calçados e couro'],
  import: ['Máquinas e equipamentos', 'Circuitos e componentes eletrônicos', 'Medicamentos e insumos farmacêuticos', 'Peças e acessórios para veículos', 'Produtos químicos orgânicos', 'Plásticos e polímeros', 'Instrumentos médicos', 'Motores e geradores', 'Equipamentos de telecomunicação', 'Componentes industriais']
};

const manufacturedMatchers = {
  export: [['fuel oil', 'óleos combustíveis'], ['automóveis', 'veículos'], ['aeronaves', 'aviões'], ['celulose', 'pastas químicas'], ['açúcar', 'açúcares'], ['produtos químicos', 'químicos'], ['máquinas', 'equipamentos'], ['plásticos', 'polímeros'], ['papel'], ['calçados'] ],
  import: [['máquinas', 'equipamentos'], ['circuitos', 'componentes eletrônicos'], ['medicamentos', 'farmacêuticos'], ['peças', 'veículos'], ['produtos químicos', 'químicos'], ['plásticos', 'polímeros'], ['instrumentos médicos', 'aparelhos médicos'], ['motores', 'geradores'], ['telecomunicação'], ['componentes industriais']]
};


let activeFlow = 'export';
let liveComexData = {};
let liveProducts = {};
let liveDestinations = {};
let liveSections = {};
let liveManufactured = {};
let comexRequest = null;

function formatBi(amount) {
  return `US$ ${amount.toFixed(2).replace('.', ',')} bi`;
}

function getComexPeriod(key) {
  if (key === '2025-full') return { from: '2025-01', to: '2025-12' };
  if (key === '2025-ytd') return { from: '2025-01', to: '2025-08' };
  return { from: '2026-01', to: '2026-12' };
}

async function loadComexData() {
  if (comexRequest) return comexRequest;
  const key = document.querySelector('#period-select').value;
  const flow = activeFlow;
  const period = getComexPeriod(key);
  const body = {
    flow,
    monthDetail: false,
    yearDetail: true,
    details: ['ncm'],
    country: [],
    countryGroup: [],
    state: [],
    ncm: [],
    ncmSection: [],
    ncmChapter: [],
    economicBlock: [],
    via: [],
    urf: [],
    cnae: [],
    period
  };

  comexRequest = (async () => {
    try {
      const response = await fetch('https://api-comexstat.mdic.gov.br/general', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body)
      });
      if (!response.ok) throw new Error(`Comex Stat: ${response.status}`);
      const payload = await response.json();
      const rows = payload?.data?.list || [];
      const total = rows.reduce((sum, row) => sum + Number(row.metricFOB || 0), 0) / 1e9;
      if (!rows.length || !Number.isFinite(total)) throw new Error('Resposta do Comex Stat sem valores.');
      liveComexData[`${flow}:${key}`] = { total, rows };
      liveProducts[`${flow}:${key}`] = rows.slice(0, 10).map((row, index) => ({
        name: row.ncm || row.coNcm || 'Produto não identificado',
        value: formatBi(Number(row.metricFOB) / 1e9),
        change: products[index]?.change || '—',
        width: index === 0 ? 100 : Math.max(18, Math.round(Number(row.metricFOB) / Number(rows[0].metricFOB) * 100))
      }));
      const manufacturedRows = manufacturedMatchers[flow].map(matchers => rows.reduce((sum, row) => {
        const name = String(row.ncm || '').toLowerCase();
        return matchers.some(matcher => name.includes(matcher)) ? sum + Number(row.metricFOB || 0) : sum;
      }, 0) / 1e9);
      const manufacturedTotal = manufacturedRows.reduce((sum, value) => sum + value, 0);
      if (manufacturedTotal > 0) liveManufactured[`${flow}:${key}`] = { values: manufacturedRows, total: manufacturedTotal };
      try {
        await loadComexDestinations(flow, key, period, total);
      } catch (error) {
        console.warn('Não foi possível atualizar os destinos do Comex Stat.', error);
      }
      try {
        await loadComexSections(flow, key, period);
      } catch (error) {
        console.warn('Não foi possível atualizar os setores do Comex Stat.', error);
      }
      if (activeFlow === flow && document.querySelector('#period-select').value === key) applyPeriod(key);
      return true;
    } catch (error) {
      console.warn('Não foi possível consultar o Comex Stat.', error);
      return false;
    } finally {
      comexRequest = null;
    }
  })();
  return comexRequest;
}

async function loadComexSections(flow, key, period) {
  const body = {
    flow, monthDetail: false, yearDetail: true, details: ['section'],
    country: [], countryGroup: [], state: [], ncm: [], ncmSection: [], ncmChapter: [],
    economicBlock: [], via: [], urf: [], cnae: [], period
  };
  const response = await fetch('https://api-comexstat.mdic.gov.br/general', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error(`Comex Stat setores: ${response.status}`);
  const rows = (await response.json())?.data?.list || [];
  liveSections[`${flow}:${key}`] = rows.slice(0, 4).map(row => ({ name: row.section, value: Number(row.metricFOB) / 1e9 }));
}

async function loadComexDestinations(flow, key, period, total) {
  const body = {
    flow,
    monthDetail: false,
    yearDetail: true,
    details: ['country'],
    country: [], countryGroup: [], state: [], ncm: [], ncmSection: [], ncmChapter: [],
    economicBlock: [], via: [], urf: [], cnae: [], period
  };
  const response = await fetch('https://api-comexstat.mdic.gov.br/general', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error(`Comex Stat destinos: ${response.status}`);
  const rows = (await response.json())?.data?.list || [];
  if (!rows.length) return;
  const top = rows.slice(0, 9);
  const names = top.map(row => row.country || 'Destino não identificado');
  const shares = top.map(row => `${(Number(row.metricFOB) / 1e9 / total * 100).toFixed(1).replace('.', ',')}%`);
  const used = top.reduce((sum, row) => sum + Number(row.metricFOB), 0) / 1e9;
  names.push('Outros destinos');
  shares.push(`${Math.max(0, (100 - used / total * 100)).toFixed(1).replace('.', ',')}%`);
  liveDestinations[`${flow}:${key}`] = { names, shares };
}

function formatBalanceValue(value) {
  const sign = value > 0 ? '+' : value < 0 ? '−' : '';
  const amount = Math.abs(value / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${sign} US$ ${amount} bi`;
}

function parseBalanceDate(value) {
  const [day, month, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
}

function formatBalanceMonth(date) {
  return new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' }).format(date).replace('.', '');
}

async function loadBalanceOfPayments() {
  const now = new Date();
  const startDate = `01/01/${now.getFullYear()}`;
  const endDate = new Intl.DateTimeFormat('pt-BR').format(now);

  try {
    const entries = await Promise.all(Object.entries(balanceSeries).map(async ([key, series]) => {
      const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.${series.code}/dados?formato=json&dataInicial=${startDate}&dataFinal=${endDate}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`SGS ${series.code}: ${response.status}`);
      const values = await response.json();
      return [key, values.map(item => ({ date: parseBalanceDate(item.data), value: Number(item.valor) })).filter(item => Number.isFinite(item.value))];
    }));

    const seriesData = Object.fromEntries(entries);
    const dates = entries.flatMap(([, values]) => values.map(item => item.date.getTime()));
    if (!dates.length) throw new Error('O SGS não retornou dados para 2026.');
    const latestDate = new Date(Math.max(...dates));
    const latestValues = {};
    const ytdValues = {};

    Object.entries(seriesData).forEach(([key, values]) => {
      const latest = values.find(item => item.date.getTime() === latestDate.getTime()) || values[values.length - 1];
      latestValues[key] = latest.value;
      ytdValues[key] = values.reduce((total, item) => total + item.value, 0);
    });

    const maxValue = Math.max(...Object.values(latestValues).map(value => Math.abs(value)), 1);
    document.querySelector('#balance-latest-label').textContent = formatBalanceMonth(latestDate).toUpperCase();
    document.querySelector('#balance-status').textContent = `Atualizado até ${formatBalanceMonth(latestDate)}`;
    Object.entries(latestValues).forEach(([key, latestValue]) => {
      const row = document.querySelector(`[data-balance-row="${key}"]`);
      const ytdValue = ytdValues[key];
      row.querySelector('.balance-latest').textContent = formatBalanceValue(latestValue);
      row.querySelector('.balance-ytd').textContent = formatBalanceValue(ytdValue);
      row.querySelectorAll('.balance-latest, .balance-ytd').forEach(element => {
        element.classList.toggle('positive', latestValue > 0);
        element.classList.toggle('negative', latestValue < 0);
      });
      row.querySelector('.balance-bar').innerHTML = `<span>${latestValue >= 0 ? 'superávit' : 'déficit'}</span><i style="width:${Math.max(8, Math.abs(latestValue) / maxValue * 100)}%"></i>`;
      row.querySelector('.balance-bar').classList.toggle('negative', latestValue < 0);
    });
  } catch (error) {
    document.querySelector('#balance-status').textContent = 'Fonte temporariamente indisponível';
    console.warn('Não foi possível consultar o SGS do BCB.', error);
  }
}

function orderDashboardSections() {
  const main = document.querySelector('.main-content');
  const productsSection = document.querySelector('#produtos');
  const destinationsPanel = document.querySelector('#destinos');
  const balanceSection = document.querySelector('#balanca-pagamentos');
  const sectorsHeading = document.querySelector('#setores');
  const sectorsGrid = sectorsHeading.nextElementSibling;
  const commoditySubheadings = document.querySelectorAll('.commodity-subheading');
  const commodityGrid = document.querySelector('.commodity-grid');
  const manufacturedCards = document.querySelector('.manufactured-cards');
  const manufacturedSection = document.querySelector('#manufaturados');
  const analysisSection = document.querySelector('#nib');

  productsSection.removeChild(destinationsPanel);
  const marker = document.createComment('dashboard-section-order');
  main.insertBefore(marker, productsSection);
  [productsSection, commoditySubheadings[0], commodityGrid, commoditySubheadings[1], manufacturedCards, manufacturedSection, sectorsHeading, sectorsGrid, destinationsPanel, balanceSection]
    .forEach(section => marker.parentNode.insertBefore(section, marker));
  marker.remove();
}

function renderProducts() {
  const list = document.querySelector('#ranking-list');
  list.innerHTML = products.map((product, index) => `
    <div class="rank-row">
      <span class="rank-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="rank-label">${product.name}</span>
      <span class="rank-track"><span style="width:${product.width}%"></span></span>
      <span class="rank-value">${product.value}</span>
      <span class="rank-change ${product.change.startsWith('−') ? 'negative' : ''}">${product.change}</span>
    </div>
  `).join('');
}

function renderDestinations(shares = destinations.map(destination => destination.share), names = destinations.map(destination => destination.name)) {
  const currentDestinations = destinations.map((destination, index) => ({ ...destination, name: names[index], share: shares[index] }));
  let position = 0;
  const gradient = currentDestinations.map(destination => {
    const start = position;
    position += Number(destination.share.replace(',', '.').replace('%', ''));
    return `${destination.color} ${start}% ${position}%`;
  }).join(', ');
  document.querySelector('.donut-chart').style.background = `conic-gradient(${gradient})`;
  document.querySelector('#destination-legend').innerHTML = currentDestinations.map(destination => `
    <div class="legend-row"><span class="legend-label" style="--dot:${destination.color}">${destination.name}</span><strong>${destination.share}</strong></div>
  `).join('');
}

function setTrend(selector, value) {
  const element = document.querySelector(selector);
  element.innerHTML = `${value.startsWith('−') ? '↓' : '↑'} ${value} <span>vs. mesmo período</span>`;
  element.classList.toggle('negative', value.startsWith('−'));
}

function applyPeriod(key) {
  const dataSet = activeFlow === 'import' ? importData : periodData;
  const data = dataSet[key] || dataSet['2026-ytd'];
  products = liveProducts[`${activeFlow}:${key}`] || (activeFlow === 'import'
    ? data.products
    : baseProducts.map((product, index) => ({ ...product, value: formatBi(product.amount * data.factor), change: data.productChanges[index] })));
  renderProducts();
  const liveDestinationData = liveDestinations[`${activeFlow}:${key}`];
  renderDestinations(liveDestinationData?.shares || data.destinationShares, liveDestinationData?.names || data.destinationNames);
  const currentSections = liveSections[`${activeFlow}:${key}`];
  if (currentSections?.length) {
    document.querySelectorAll('#setores + .sector-grid .sector-card').forEach((card, index) => {
      if (!currentSections[index]) return;
      card.querySelector('h3').textContent = currentSections[index].name;
      card.querySelector('.sector-value').textContent = formatBi(currentSections[index].value);
    });
  }

  document.querySelector('#period-heading').textContent = `COMEX · ${data.heading}`;
  document.querySelector('#flow-breadcrumb').textContent = activeFlow === 'import' ? 'IMPORTAÇÕES' : 'EXPORTAÇÕES';
  document.querySelector('#flow-title').textContent = activeFlow === 'import' ? 'importações' : 'exportações';
  document.querySelector('#ranking-heading').textContent = activeFlow === 'import' ? 'Top produtos importados' : 'Top produtos exportados';
  document.querySelector('#destinations-heading').textContent = activeFlow === 'import' ? 'De onde compra o Brasil' : 'Para onde vai o Brasil';
  document.querySelector('#sectors-heading').textContent = activeFlow === 'import' ? 'Destaques por setor importador' : 'Destaques por setor';
  document.querySelector('#manufactured-heading').textContent = activeFlow === 'import' ? 'Detalhamento dos industrializados' : 'Detalhamento dos manufaturados';
  document.querySelector('#kpi-total-label').firstChild.textContent = activeFlow === 'import' ? 'IMPORTAÇÕES TOTAIS ' : 'EXPORTAÇÕES TOTAIS ';
  document.querySelector('#kpi-manufactured-label').firstChild.textContent = activeFlow === 'import' ? 'INDUSTRIALIZADOS ' : 'MANUFATURADOS ';
  document.querySelector('#kpi-total').innerHTML = `US$ ${data.kpis.total} <small>bi</small>`;
  const liveTotal = liveComexData[`${activeFlow}:${key}`]?.total;
  if (Number.isFinite(liveTotal)) {
    document.querySelector('#kpi-total').innerHTML = `${formatBi(liveTotal).replace(' bi', ' <small>bi</small>')}`;
    document.querySelector('#donut-total').textContent = `US$ ${liveTotal.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
  }
  document.querySelector('#kpi-manufactured').innerHTML = `US$ ${data.kpis.manufactured} <small>bi</small>`;
  const liveManufacturedData = liveManufactured[`${activeFlow}:${key}`];
  if (liveManufacturedData) {
    document.querySelector('#kpi-manufactured').innerHTML = `${formatBi(liveManufacturedData.total).replace(' bi', ' <small>bi</small>')}`;
  }
  const commodity = commodityData[key][activeFlow];
  document.querySelector('#kpi-commodity-label').firstChild.textContent = activeFlow === 'import' ? 'COMMODITIES IMPORTADAS ' : 'COMMODITIES ';
  document.querySelector('#kpi-commodity').innerHTML = `US$ ${commodity.value} <small>bi</small>`;
  document.querySelector('#kpi-commodity-trend').textContent = `${commodity.share}% da pauta`;
  document.querySelector('#kpi-commodity').closest('.kpi-card').querySelector('.mini-bar span').style.width = `${commodity.share.replace(',', '.')}%`;
  document.querySelector('.flow-export').style.setProperty('display', activeFlow === 'export' ? 'block' : 'none', 'important');
  document.querySelector('.flow-import').style.setProperty('display', activeFlow === 'import' ? 'block' : 'none', 'important');
  document.querySelector('#kpi-export-share').innerHTML = `${tradeShares[key].export} <small>%</small>`;
  document.querySelector('#kpi-import-share').innerHTML = `${tradeShares[key].import} <small>%</small>`;
  document.querySelector('#kpi-export-share').closest('.kpi-card').querySelector('.mini-bar span').style.width = `${tradeShares[key].export.replace(',', '.')}%`;
  document.querySelector('#kpi-import-share').closest('.kpi-card').querySelector('.mini-bar span').style.width = `${tradeShares[key].import.replace(',', '.')}%`;
  document.querySelector('#kpi-balance').innerHTML = `US$ ${data.kpis.balance} <small>bi</small>`;
  document.querySelector('#kpi-destinations').innerHTML = `${data.kpis.destinations} <small>países</small>`;
  document.querySelector('#donut-total').textContent = `US$ ${data.kpis.total}`;
  if (Number.isFinite(liveTotal)) {
    document.querySelector('#donut-total').textContent = `US$ ${liveTotal.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
  }
  document.querySelector('#manufactured-period').textContent = `${data.display} · US$ ${liveManufacturedData ? formatBi(liveManufacturedData.total) : `US$ ${data.kpis.manufactured} bi`}`;
  setTrend('#kpi-total-trend', data.kpis.totalTrend);
  setTrend('#kpi-manufactured-trend', data.kpis.manufacturedTrend);
  setTrend('#kpi-balance-trend', data.kpis.balanceTrend);

  document.querySelectorAll('#setores + .sector-grid .sector-value').forEach((element, index) => {
    element.textContent = `US$ ${data.sectors[index]} bi`;
  });
  const currentCommodityProducts = commodityProducts[activeFlow][key];
  document.querySelector('#commodity-heading').textContent = activeFlow === 'import' ? 'Produtos que puxam as importações' : 'Produtos que puxam as exportações';
  document.querySelectorAll('.commodity-card').forEach((card, index) => {
    const liveProduct = liveProducts[`${activeFlow}:${key}`]?.[index];
    const [name, value, change, share] = currentCommodityProducts[index];
    card.querySelector('h3').textContent = name;
    card.querySelector('.sector-value').textContent = `US$ ${value} bi`;
    card.querySelector('.sector-change').textContent = change;
    card.querySelector('.sector-change').classList.toggle('negative', change.startsWith('−'));
    card.querySelector('.sector-change').classList.toggle('positive', !change.startsWith('−'));
    card.querySelector('.sector-meta span').textContent = `${share} do total`;
    if (liveProduct) {
      card.querySelector('h3').textContent = liveProduct.name;
      card.querySelector('.sector-value').textContent = liveProduct.value;
    }
  });
  document.querySelectorAll('.manufactured-cards .sector-value').forEach((element, index) => {
    element.textContent = liveManufacturedData ? formatBi(liveManufacturedData.values[index]) : `US$ ${data.manufactured[index]} bi`;
  });
  document.querySelector('#industrialized-heading').textContent = activeFlow === 'import' ? 'Os dez principais industrializados importados' : 'Os dez principais manufaturados exportados';
  document.querySelectorAll('.manufactured-cards .sector-card h3').forEach((element, index) => {
    element.textContent = industrializedNames[activeFlow][index];
  });
  document.querySelectorAll('.manufactured-table .table-row > span:nth-child(2)').forEach((element, index) => {
    element.textContent = liveManufacturedData ? formatBi(liveManufacturedData.values[index]) : `US$ ${data.manufactured[index]} bi`;
  });
  document.querySelectorAll('.manufactured-table .table-row strong').forEach((element, index) => {
    element.textContent = industrializedNames[activeFlow][index];
  });
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(date).replace('.', '');
}

function refreshData() {
  const button = document.querySelector('#refresh-button');
  const toast = document.querySelector('#toast');
  const liveSources = Promise.all([loadBalanceOfPayments(), loadComexData()]);
  button.classList.add('loading');
  toast.textContent = 'Consultando dados mais recentes...';
  toast.classList.add('visible');

  // A camada de produção pode trocar este snapshot pela resposta do endpoint Comex Stat.
  // O fallback mantém o painel navegável quando a API pública bloquear CORS.
  const timeout = new Promise(resolve => window.setTimeout(resolve, 700));
  Promise.race([liveSources, timeout]).finally(() => {
    const now = new Date();
    localStorage.setItem('radar-last-source-check', now.toISOString());
    document.querySelector('#last-sync').textContent = formatDate(now);
    button.classList.remove('loading');
    toast.textContent = 'Painel atualizado com as fontes públicas disponíveis.';
    window.setTimeout(() => toast.classList.remove('visible'), 2800);
  });
}

function isBusinessDay(date) {
  return date.getDay() > 0 && date.getDay() < 6;
}

function nextBusinessRefresh(fromDate = new Date()) {
  const next = new Date(fromDate);
  next.setHours(17, 0, 0, 0);
  if (!isBusinessDay(next) || fromDate >= next) next.setDate(next.getDate() + 1);
  while (!isBusinessDay(next)) next.setDate(next.getDate() + 1);
  return next;
}

function updateNextBusinessRefresh(fromDate = new Date()) {
  const element = document.querySelector('#next-update');
  if (!element) return;
  const next = nextBusinessRefresh(fromDate);
  element.textContent = `Próxima consulta: ${new Intl.DateTimeFormat('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }).format(next).replace('.', '')}`;
}

function scheduleBusinessRefresh() {
  const now = new Date();
  updateNextBusinessRefresh(now);
  window.setInterval(() => {
    const current = new Date();
    const refreshTime = new Date(current);
    refreshTime.setHours(17, 0, 0, 0);
    const checkedAt = localStorage.getItem('radar-last-source-check');
    if (isBusinessDay(current) && current >= refreshTime && (!checkedAt || new Date(checkedAt) < refreshTime)) refreshData();
    updateNextBusinessRefresh(current);
  }, 60 * 1000);
}

function downloadCSV() {
  const header = 'Posição,Produto,Valor,Variação\n';
  const rows = products.map((product, index) => `${index + 1},${product.name},${product.value},${product.change}`).join('\n');
  const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'radar-exportacoes-top-produtos.csv';
  link.click();
  URL.revokeObjectURL(url);
}

function showAnalysisSection(sectionId) {
  document.querySelectorAll('#nib, #metodologia').forEach(section => {
    section.hidden = false;
  });
  document.querySelectorAll('#analysis-nav .nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === `#${sectionId}`);
  });
  document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

orderDashboardSections();
applyPeriod(document.querySelector('#period-select').value);
document.querySelector('#period-select').addEventListener('change', event => {
  applyPeriod(event.target.value);
  loadComexData();
});
document.querySelector('#flow-select').addEventListener('change', event => {
  activeFlow = event.target.value;
  applyPeriod(document.querySelector('#period-select').value);
  loadComexData();
});
document.querySelector('#refresh-button').addEventListener('click', refreshData);
document.querySelector('#download-csv').addEventListener('click', downloadCSV);
document.querySelector('#analysis-toggle').addEventListener('click', event => {
  const toggle = event.currentTarget;
  const nav = document.querySelector('#analysis-nav');
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.hidden = expanded;
  if (!expanded) {
    document.querySelectorAll('#nib, #metodologia').forEach(section => {
      section.hidden = false;
    });
  }
});
document.querySelectorAll('#analysis-nav .nav-item').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    showAnalysisSection(item.getAttribute('href').slice(1));
  });
});
refreshData();
window.setInterval(loadBalanceOfPayments, 15 * 60 * 1000);
window.setInterval(loadComexData, 15 * 60 * 1000);
scheduleBusinessRefresh();
