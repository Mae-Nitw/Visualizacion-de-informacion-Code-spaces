// Lista de 19 países participantes de las Américas
const PAISES_PRINCIPALES = [
  'Argentina',
  'Bolivia',
  'Brazil',
  'Canada',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Ecuador',
  'Guatemala',
  'Honduras',
  'Mexico',
  'Nicaragua',
  'Panama',
  'Paraguay',
  'Peru',
  'United States',
  'Uruguay',
  'Venezuela'
];

// Mapeo amigable de nombres (Inglés <-> Español)
const NOMBRES_ESP = {
  'Argentina': 'Argentina',
  'Bolivia': 'Bolivia',
  'Brazil': 'Brasil',
  'Canada': 'Canadá',
  'Chile': 'Chile',
  'Colombia': 'Colombia',
  'Costa Rica': 'Costa Rica',
  'Cuba': 'Cuba',
  'Ecuador': 'Ecuador',
  'Guatemala': 'Guatemala',
  'Honduras': 'Honduras',
  'Mexico': 'México',
  'Nicaragua': 'Nicaragua',
  'Panama': 'Panamá',
  'Paraguay': 'Paraguay',
  'Peru': 'Perú',
  'United States': 'Estados Unidos',
  'United States of America': 'Estados Unidos',
  'Uruguay': 'Uruguay',
  'Venezuela': 'Venezuela'
};

// Códigos ISO de dos letras para cargar banderas
const ISO_BANDERAS = {
  'Argentina': 'ar',
  'Bolivia': 'bo',
  'Brazil': 'br',
  'Canada': 'ca',
  'Chile': 'cl',
  'Colombia': 'co',
  'Costa Rica': 'cr',
  'Cuba': 'cu',
  'Ecuador': 'ec',
  'Guatemala': 'gt',
  'Honduras': 'hn',
  'Mexico': 'mx',
  'Nicaragua': 'ni',
  'Panama': 'pa',
  'Paraguay': 'py',
  'Peru': 'pe',
  'United States': 'us',
  'Uruguay': 'uy',
  'Venezuela': 've'
};

// Zonas Geográficas de las Américas clasificadas en las 3 macro-regiones
// 1. Norteamérica (Anaranjados)
// 2. Centroamérica y Caribe (Verdes)
// 3. Sudamérica (Azules)
const ZONAS_GEOGRAFICAS = {
  // 1. América del Norte (Gama Cálida / Anaranjados y Ámbar)
  'Canada': { zona: 'Norteamérica', color: '#ea580c', border: '#fdba74' },
  'United States': { zona: 'Norteamérica', color: '#f97316', border: '#fcd34d' },
  'Mexico': { zona: 'Norteamérica', color: '#c2410c', border: '#fb923c' },

  // 2. Centroamérica y el Caribe (Gama Verde / Esmeralda y Menta)
  'Guatemala': { zona: 'Centroamérica y Caribe', color: '#16a34a', border: '#86efac' },
  'Honduras': { zona: 'Centroamérica y Caribe', color: '#15803d', border: '#4ade80' },
  'Nicaragua': { zona: 'Centroamérica y Caribe', color: '#059669', border: '#6ee7b7' },
  'Costa Rica': { zona: 'Centroamérica y Caribe', color: '#10b981', border: '#a7f3d0' },
  'Panama': { zona: 'Centroamérica y Caribe', color: '#047857', border: '#34d399' },
  'Cuba': { zona: 'Centroamérica y Caribe', color: '#65a30d', border: '#bef264' },

  // 3. América del Sur (Gama Azul / Zafiro y Celeste)
  'Colombia': { zona: 'Sudamérica', color: '#0284c7', border: '#7dd3fc' },
  'Venezuela': { zona: 'Sudamérica', color: '#0369a1', border: '#38bdf8' },
  'Ecuador': { zona: 'Sudamérica', color: '#0ea5e9', border: '#bae6fd' },
  'Peru': { zona: 'Sudamérica', color: '#0284c7', border: '#7dd3fc' },
  'Bolivia': { zona: 'Sudamérica', color: '#075985', border: '#38bdf8' },
  'Brazil': { zona: 'Sudamérica', color: '#1d4ed8', border: '#60a5fa' },
  'Chile': { zona: 'Sudamérica', color: '#2563eb', border: '#93c5fd' },
  'Argentina': { zona: 'Sudamérica', color: '#1e40af', border: '#3b82f6' },
  'Paraguay': { zona: 'Sudamérica', color: '#3b82f6', border: '#93c5fd' },
  'Uruguay': { zona: 'Sudamérica', color: '#1d4ed8', border: '#60a5fa' }
};

// Paleta cromática semántica para fuentes individuales (Normativa del curso)
const FUENTES_CONFIG = {
  'Renewables': { label: 'Renovables (Total)', color: '#10b981', type: 'macro' },
  'Fossil': { label: 'Fósiles (Total)', color: '#ef4444', type: 'macro' },
  'Solar': { label: 'Solar', color: '#f59e0b', type: 'individual', category: 'ren' },
  'Wind': { label: 'Eólica', color: '#06b6d4', type: 'individual', category: 'ren' },
  'Hydro': { label: 'Hidroeléctrica', color: '#3b82f6', type: 'individual', category: 'ren' },
  'Bioenergy': { label: 'Bioenergía', color: '#84cc16', type: 'individual', category: 'ren' },
  'Other renewables': { label: 'Otras Renovables', color: '#10b981', type: 'individual', category: 'ren' },
  'Coal': { label: 'Carbón', color: '#64748b', type: 'individual', category: 'fos' },
  'Gas': { label: 'Gas Natural', color: '#f97316', type: 'individual', category: 'fos' },
  'Other fossil': { label: 'Otros Fósiles', color: '#e11d48', type: 'individual', category: 'fos' }
};

// Datos calculados del Top 5 de transición (2000 vs Último año disponible)
const TOP5_MAYOR = [
  { country: 'Nicaragua', start_year: 2000, end_year: 2024, start_share: 21.5, end_share: 62.4, diff: 40.9 },
  { country: 'Guatemala', start_year: 2000, end_year: 2024, start_share: 50.2, end_share: 68.3, diff: 18.2 },
  { country: 'Venezuela', start_year: 2000, end_year: 2024, start_share: 73.8, end_share: 91.1, diff: 17.4 },
  { country: 'Chile', start_year: 2000, end_year: 2025, start_share: 49.8, end_share: 66.4, diff: 16.5 },
  { country: 'United States', start_year: 2000, end_year: 2025, start_share: 9.2, end_share: 25.6, diff: 16.4 }
];

const TOP5_MENOR = [
  { country: 'Peru', start_year: 2000, end_year: 2025, start_share: 82.0, end_share: 63.6, diff: -18.3 },
  { country: 'Bolivia', start_year: 2000, end_year: 2025, start_share: 51.5, end_share: 36.1, diff: -15.4 },
  { country: 'Honduras', start_year: 2000, end_year: 2024, start_share: 61.8, end_share: 55.4, diff: -6.4 },
  { country: 'Cuba', start_year: 2000, end_year: 2024, start_share: 6.9, end_share: 4.0, diff: -2.8 },
  { country: 'Brazil', start_year: 2000, end_year: 2025, start_share: 89.5, end_share: 86.9, diff: -2.6 }
];

// Datos del Top 5 de Generación Eléctrica (Pesos Pesados vs Menores Productores)
const TOP5_GIGANTES_GEN = [
  { country: 'United States', year: 2025, gen: 4519.8 },
  { country: 'Brazil', year: 2025, gen: 763.7 },
  { country: 'Canada', year: 2025, gen: 660.2 },
  { country: 'Mexico', year: 2025, gen: 389.7 },
  { country: 'Argentina', year: 2025, gen: 153.3 }
];

const TOP5_MENORES_GEN = [
  { country: 'Nicaragua', year: 2024, gen: 4.5 },
  { country: 'Costa Rica', year: 2025, gen: 11.8 },
  { country: 'Uruguay', year: 2025, gen: 12.0 },
  { country: 'Honduras', year: 2024, gen: 12.5 },
  { country: 'Panama', year: 2024, gen: 13.4 }
];

// Estado global de datos y visualización
let energyData = {};
let selectedCountry = null;
let chartAnimationId = null;
let currentMetric = 'gen'; // 'gen' (TWh) o 'share' (%)
let isAudioEnabled = true;

// Web Audio API para Sonificación Acústica
// 1 solo dato: Frecuencia continua (Tono). Sin ritmo.
// Grave = más uso de fósiles | Agudo = energías limpias/renovables.
let audioCtx = null;
let masterGain = null;
let baseCarrierOsc = null;
let carrierGain = null;
let isAudioRunning = false;

// Estado suave de frecuencia
let smoothFreq = 220;
let targetFreq = 220;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.80, audioCtx.currentTime); // Volumen óptimo para notebook
      masterGain.connect(audioCtx.destination);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Iniciar sintetizador de sonificación (tono continuo)
function startSonification() {
  if (!isAudioEnabled) return;
  initAudio();
  if (!audioCtx || !masterGain) return;

  // Detener cualquier instancia previa
  stopSonification();
  isAudioRunning = true;

  const now = audioCtx.currentTime;

  // Oscilador armónico continuo y suave
  baseCarrierOsc = audioCtx.createOscillator();
  carrierGain = audioCtx.createGain();

  baseCarrierOsc.type = 'sine';
  baseCarrierOsc.frequency.setValueAtTime(smoothFreq, now);

  carrierGain.gain.setValueAtTime(0.001, now);
  carrierGain.gain.linearRampToValueAtTime(0.35, now + 0.12);

  baseCarrierOsc.connect(carrierGain);
  carrierGain.connect(masterGain);
  baseCarrierOsc.start(now);
}

// Actualizar tono: Grave (110 Hz = fósil) -> Agudo (780 Hz = energías limpias)
function updateSonification(renewShare) {
  if (!isAudioEnabled || !audioCtx) return;

  const renRatio = Math.max(0, Math.min(1, (renewShare || 0) / 100));
  // 110 Hz (grave) a 780 Hz (agudo)
  targetFreq = Math.round(110 + renRatio * 670);

  // Suavizado exponencial para evitar clics acústicos
  smoothFreq += (targetFreq - smoothFreq) * 0.28;

  const now = audioCtx.currentTime;
  if (baseCarrierOsc) {
    baseCarrierOsc.frequency.setTargetAtTime(smoothFreq, now, 0.08);
  }
}

function stopSonification() {
  isAudioRunning = false;
  if (baseCarrierOsc) {
    try {
      baseCarrierOsc.stop();
      baseCarrierOsc.disconnect();
    } catch (e) {}
    baseCarrierOsc = null;
  }
  if (carrierGain) {
    try {
      carrierGain.disconnect();
    } catch (e) {}
    carrierGain = null;
  }
  // Al detener o pausar la animación, Arduino vuelve al estado de espera (parpadeo cada 0.5s)
  enviarComandoArduino('S');
}

// ==========================================
// COMPATIBILIDAD COMANDOS ARDUINO
// ==========================================
let arduinoUltimoEstado = '';

async function conectarArduinoAutomatico() {
  // Conexión gestionada mediante el botón dedicado "Conectar Arduino"
}

async function enviarComandoArduino(cmd) {
  if (arduinoWriter && cmd !== arduinoUltimoEstado) {
    try {
      arduinoUltimoEstado = cmd;
      await arduinoWriter.write(cmd + "\n");
    } catch (err) {
      console.warn("Error enviando comando a Arduino:", err);
    }
  }
}

// Elementos del DOM
const viewIntro = document.getElementById('view-intro');
const viewCountrySelected = document.getElementById('view-country-selected');
const headerCountryBadge = document.getElementById('header-country-badge');
const selectedCountryNameEl = document.getElementById('selected-country-name');
const btnSelectOptions = document.getElementById('btn-select-options');
const optionsPanel = document.getElementById('options-panel');
const checkMacroUnified = document.getElementById('check-macro-unified');
const btnStart = document.getElementById('btn-start');
const btnBackToIntro = document.getElementById('btn-back-to-intro');
const actionFeedback = document.getElementById('action-feedback');
const tooltip = document.getElementById('map-tooltip');

// Top Generación Eléctrica elements
const btnShowTopGen = document.getElementById('btn-show-top-gen');
const topGenContainer = document.getElementById('top-gen-container');
const tabGenGigantes = document.getElementById('tab-gen-gigantes');
const tabGenMenores = document.getElementById('tab-gen-menores');
const topGenList = document.getElementById('top-gen-list');

// Top 5 Transición elements
const btnShowTop5 = document.getElementById('btn-show-top5');
const top5Container = document.getElementById('top5-container');
const tabTopMayor = document.getElementById('tab-top-mayor');
const tabTopMenor = document.getElementById('tab-top-menor');
const top5List = document.getElementById('top5-list');

// Chart elements
const chartTitle = document.getElementById('chart-title');
const chartPlaceholder = document.getElementById('chart-placeholder');
const chartContainer = document.getElementById('chart-container');
const chartPlaybackBar = document.getElementById('chart-playback-bar');
const chartYearBadge = document.getElementById('chart-year-badge');
const playbackProgress = document.getElementById('playback-progress');
const playbackStatus = document.getElementById('playback-status');
const btnReplay = document.getElementById('btn-replay');
const soundIndicator = document.getElementById('sound-indicator');

// Normalizador de nombres de países
function normalizarNombre(nombre) {
  if (!nombre) return '';
  const n = nombre.trim();
  if (n === 'United States of America' || n === 'USA' || n === 'United States') return 'United States';
  if (n === 'Bolivia, Plurinational State of' || n === 'Bolivia (Plurinational State of)') return 'Bolivia';
  if (n === 'Venezuela, Bolivarian Republic of' || n === 'Venezuela (Bolivarian Republic of)') return 'Venezuela';
  return n;
}

// Cargar dataset exportado
async function loadEnergyData() {
  try {
    const res = await fetch('energy_data.json');
    if (res.ok) {
      energyData = await res.json();
    }
  } catch (err) {
    console.warn('Cargando con fallback interno:', err);
  }
}

// ==========================================
// RENDERIZADO DEL MAPA INTERACTIVO (GLOBO)
// ==========================================
async function renderMap() {
  const container = document.getElementById('map-container');
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 700;

  const initialScale = Math.min(width, height) * 0.45;
  const initialRotation = [75, -10, 0];
  let currentScale = initialScale;

  const projection = d3.geoOrthographic()
    .scale(currentScale)
    .translate([width / 2, height / 2])
    .rotate([...initialRotation])
    .clipAngle(90);

  const pathGenerator = d3.geoPath().projection(projection);

  const svg = d3.select('#map-container')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const defs = svg.append('defs');

  // Gradiente esférico
  const globeGradient = defs.append('radialGradient')
    .attr('id', 'globe-shading')
    .attr('cx', '45%')
    .attr('cy', '40%')
    .attr('r', '60%');
  globeGradient.append('stop').attr('offset', '0%').attr('stop-color', '#172847');
  globeGradient.append('stop').attr('offset', '70%').attr('stop-color', '#091122');
  globeGradient.append('stop').attr('offset', '100%').attr('stop-color', '#050a14');

  const sphereCircle = svg.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', projection.scale())
    .attr('fill', 'url(#globe-shading)')
    .attr('stroke', '#38bdf8')
    .attr('stroke-opacity', 0.25)
    .attr('stroke-width', 1.5);

  const g = svg.append('g').attr('class', 'globe-features');

  const graticule = d3.geoGraticule10();
  const graticulePath = g.append('path')
    .datum(graticule)
    .attr('class', 'graticule')
    .attr('d', pathGenerator)
    .attr('fill', 'none')
    .attr('stroke', 'rgba(255, 255, 255, 0.05)')
    .attr('stroke-width', 0.5);

  let countriesPaths;

  function updateGlobe() {
    sphereCircle.attr('r', projection.scale());
    pathGenerator.projection(projection);
    graticulePath.attr('d', pathGenerator);
    if (countriesPaths) {
      countriesPaths.attr('d', pathGenerator);
    }
  }

  // Interacción de Arrastre 360°
  let dragStartPos = null;
  let dragStartRotation = null;

  const drag = d3.drag()
    .on('start', (event) => {
      dragStartPos = [event.x, event.y];
      dragStartRotation = [...projection.rotate()];
    })
    .on('drag', (event) => {
      if (!dragStartPos) return;
      const dx = event.x - dragStartPos[0];
      const dy = event.y - dragStartPos[1];
      const sensitivity = 0.35;
      const newLambda = dragStartRotation[0] + dx * sensitivity;
      const newPhi = Math.max(-80, Math.min(80, dragStartRotation[1] - dy * sensitivity));
      projection.rotate([newLambda, newPhi, 0]);
      updateGlobe();
    });

  // Zoom
  const zoom = d3.zoom()
    .scaleExtent([0.5, 4.0])
    .on('zoom', (event) => {
      const newScale = initialScale * event.transform.k;
      projection.scale(newScale);
      updateGlobe();
    });

  svg.call(drag);
  svg.call(zoom);

  document.getElementById('btn-zoom-in').addEventListener('click', () => {
    projection.scale(projection.scale() * 1.3);
    updateGlobe();
  });
  document.getElementById('btn-zoom-out').addEventListener('click', () => {
    projection.scale(projection.scale() * 0.77);
    updateGlobe();
  });
  document.getElementById('btn-reset-view').addEventListener('click', () => {
    projection.scale(initialScale);
    projection.rotate([...initialRotation]);
    updateGlobe();
  });

  try {
    const worldData = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const countries = topojson.feature(worldData, worldData.objects.countries).features;

    countriesPaths = g.selectAll('path.country')
      .data(countries)
      .enter()
      .append('path')
      .attr('class', (d) => {
        const countryName = normalizarNombre(d.properties.name);
        const isEligible = PAISES_PRINCIPALES.includes(countryName);
        return isEligible ? 'country country-eligible' : 'country';
      })
      .attr('d', pathGenerator)
      .attr('data-name', (d) => normalizarNombre(d.properties.name))
      .style('fill', (d) => {
        const countryName = normalizarNombre(d.properties.name);
        const zonaInfo = ZONAS_GEOGRAFICAS[countryName];
        return zonaInfo ? zonaInfo.color : '#1a2538';
      })
      .style('stroke', (d) => {
        const countryName = normalizarNombre(d.properties.name);
        const zonaInfo = ZONAS_GEOGRAFICAS[countryName];
        return zonaInfo ? zonaInfo.border : '#0b111e';
      })
      .style('stroke-width', (d) => {
        const countryName = normalizarNombre(d.properties.name);
        return PAISES_PRINCIPALES.includes(countryName) ? '1.6px' : '0.6px';
      })
      .on('mouseover', function (event, d) {
        const countryName = normalizarNombre(d.properties.name);
        const isEligible = PAISES_PRINCIPALES.includes(countryName);
        const label = NOMBRES_ESP[countryName] || countryName;
        const iso = ISO_BANDERAS[countryName];
        const zonaInfo = ZONAS_GEOGRAFICAS[countryName];
        const flagSrc = (typeof FLAGS_BASE64 !== 'undefined' && FLAGS_BASE64[iso]) ? FLAGS_BASE64[iso] : `flags/${iso}.png`;
        
        tooltip.style.display = 'block';
        if (isEligible) {
          tooltip.innerHTML = `
            <div class="tooltip-content-with-flag">
              <img src="${flagSrc}" class="tooltip-flag-img" alt="${label}" />
              <div class="tooltip-text-group">
                <span class="tooltip-country-name">${label}</span>
                <span class="tooltip-zone-badge" style="color:${zonaInfo ? zonaInfo.border : '#38bdf8'}">📍 ${zonaInfo ? zonaInfo.zona : 'América'}</span>
                <span class="tooltip-participant-badge">✓ Clic para ver carrera</span>
              </div>
            </div>
          `;
        } else {
          tooltip.innerHTML = `<span>${label}</span>`;
        }
      })
      .on('mousemove', function (event) {
        tooltip.style.left = `${event.pageX}px`;
        tooltip.style.top = `${event.pageY}px`;
      })
      .on('mouseleave', function () {
        tooltip.style.display = 'none';
      })
      .on('click', function (event, d) {
        const countryName = normalizarNombre(d.properties.name);
        if (!PAISES_PRINCIPALES.includes(countryName)) return;
        selectCountry(countryName, this);
      });

  } catch (error) {
    console.error('Error al cargar datos del globo:', error);
    container.innerHTML = `<div style="padding: 40px; color: #ef4444; text-align: center;">Error al cargar mapa.</div>`;
  }
}

// ==========================================
// SELECCIÓN DE PAÍS Y ESTADOS DE INTERFAZ
// ==========================================
async function selectCountry(countryName, element) {
  // Solicita y conecta el puerto serie del Arduino con el clic del país
  await conectarArduinoAutomatico();

  selectedCountry = countryName;

  // Detener animación previa si la hubiera
  if (chartAnimationId) {
    cancelAnimationFrame(chartAnimationId);
    chartAnimationId = null;
  }

  // Resaltado en mapa
  d3.selectAll('.country').classed('country-selected', false);
  if (element) {
    d3.select(element).classed('country-selected', true);
  } else {
    // Si se seleccionó desde el Top 5
    d3.selectAll('.country').filter(function() {
      return d3.select(this).attr('data-name') === countryName;
    }).classed('country-selected', true);
  }

  // Actualizar títulos
  const displayName = NOMBRES_ESP[countryName] || countryName;
  selectedCountryNameEl.textContent = displayName;

  // Estado por defecto: Opción unificada Renovables vs Fósiles activada
  if (checkMacroUnified) checkMacroUnified.checked = true;
  document.querySelectorAll('.source-checkbox').forEach(cb => cb.checked = false);
  optionsPanel.style.display = 'none';

  // Ocultar información del gráfico hasta que se presione Comenzar
  chartPlaceholder.style.display = 'block';
  chartContainer.style.display = 'none';
  chartPlaybackBar.style.display = 'none';
  chartYearBadge.textContent = 'Año 2000';

  stopSonification();

  // Mostrar país seleccionado en la parte superior derecha del header
  if (headerCountryBadge) headerCountryBadge.style.display = 'block';

  // Cambiar vista del panel
  viewIntro.classList.remove('active');
  viewCountrySelected.classList.add('active');
  actionFeedback.style.display = 'none';

  // Iniciar la carrera altiro / inmediatamente al seleccionar el país
  if (window.autoStartTimeout) {
    clearTimeout(window.autoStartTimeout);
    window.autoStartTimeout = null;
  }
  startChartRace();
}

// Botón: Volver a la breve explicación
btnBackToIntro.addEventListener('click', () => {
  if (window.autoStartTimeout) {
    clearTimeout(window.autoStartTimeout);
    window.autoStartTimeout = null;
  }
  if (chartAnimationId) {
    cancelAnimationFrame(chartAnimationId);
    chartAnimationId = null;
  }
  stopSonification();

  selectedCountry = null;
  d3.selectAll('.country').classed('country-selected', false);

  if (headerCountryBadge) headerCountryBadge.style.display = 'none';

  viewCountrySelected.classList.remove('active');
  viewIntro.classList.add('active');
  actionFeedback.style.display = 'none';
});

// Toggle de sonido
if (soundIndicator) {
  soundIndicator.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    soundIndicator.textContent = isAudioEnabled ? '🔊 Sonido Activo' : '🔇 Sonido Silenciado';
    soundIndicator.style.color = isAudioEnabled ? '#10b981' : '#64748b';
    if (!isAudioEnabled) stopSonification();
  });
}

// Botón: Seleccionar opciones (Toggle menú de filtros)
btnSelectOptions.addEventListener('click', () => {
  const isHidden = optionsPanel.style.display === 'none';
  optionsPanel.style.display = isHidden ? 'flex' : 'none';
});

if (checkMacroUnified) {
  checkMacroUnified.addEventListener('change', (e) => {
    showFossil = e.target.checked;
    showRenew = e.target.checked;
    const legF = document.getElementById('legend-fossil');
    const legR = document.getElementById('legend-renew');
    if (legF) legF.style.opacity = showFossil ? '1' : '0.3';
    if (legR) legR.style.opacity = showRenew ? '1' : '0.3';
  });
}

document.querySelectorAll('input[name="metric-type"]').forEach((radio) => {
  radio.addEventListener('change', (e) => {
    currentMetric = e.target.value;
  });
});

// Botón: Comenzar (Inicia la revelación horizontal continua año a año)
btnStart.addEventListener('click', () => {
  startChartRace();
});

btnReplay.addEventListener('click', () => {
  startChartRace();
});

// ==========================================
// GRÁFICO DINÁMICO: REVELACIÓN HORIZONTAL FLUIDA
// ==========================================
function startChartRace() {
  if (!selectedCountry || !energyData[selectedCountry]) {
    alert('No hay datos energéticos disponibles para ' + selectedCountry);
    return;
  }

  const countryData = energyData[selectedCountry];
  const years = countryData.years;
  if (!years || years.length === 0) return;

  // Mostrar contenedor de gráfico y playback bar
  chartPlaceholder.style.display = 'none';
  chartContainer.style.display = 'block';
  chartPlaybackBar.style.display = 'flex';
  optionsPanel.style.display = 'none';

  // Actualizar título informativo del gráfico
  if (chartTitle) {
    const espName = NOMBRES_ESP[selectedCountry] || selectedCountry;
    const metricDesc = currentMetric === 'share' ? 'Participación (%)' : 'Generación (TWh)';
    chartTitle.textContent = `Evolución Anual en ${espName} (${metricDesc})`;
  }

  // Preparar series a dibujar según las opciones seleccionadas
  const seriesToDraw = [];

  // 1. Si está marcada la opción macro unificada Renovables vs Fósiles
  if (checkMacroUnified && checkMacroUnified.checked) {
    if (countryData.sources && countryData.sources['Renewables']) {
      seriesToDraw.push({
        key: 'Renewables',
        label: '🌱 Renovables',
        color: FUENTES_CONFIG['Renewables'].color,
        values: currentMetric === 'gen' ? countryData.sources['Renewables'].gen : countryData.sources['Renewables'].share,
        isMacro: true
      });
    } else if (countryData.renew_gen) {
      seriesToDraw.push({
        key: 'Renewables',
        label: '🌱 Renovables',
        color: FUENTES_CONFIG['Renewables'].color,
        values: currentMetric === 'gen' ? countryData.renew_gen : countryData.renew_share,
        isMacro: true
      });
    }

    if (countryData.sources && countryData.sources['Fossil']) {
      seriesToDraw.push({
        key: 'Fossil',
        label: '🔥 Fósiles',
        color: FUENTES_CONFIG['Fossil'].color,
        values: currentMetric === 'gen' ? countryData.sources['Fossil'].gen : countryData.sources['Fossil'].share,
        isMacro: true
      });
    } else if (countryData.fossil_gen) {
      seriesToDraw.push({
        key: 'Fossil',
        label: '🔥 Fósiles',
        color: FUENTES_CONFIG['Fossil'].color,
        values: currentMetric === 'gen' ? countryData.fossil_gen : countryData.fossil_share,
        isMacro: true
      });
    }
  }

  // 2. Fuentes individuales marcadas
  document.querySelectorAll('.source-checkbox:checked').forEach(cb => {
    const sKey = cb.getAttribute('data-source');
    if (countryData.sources && countryData.sources[sKey]) {
      const cfg = FUENTES_CONFIG[sKey];
      seriesToDraw.push({
        key: sKey,
        label: cfg.label,
        color: cfg.color,
        values: currentMetric === 'gen' ? countryData.sources[sKey].gen : countryData.sources[sKey].share,
        isMacro: false
      });
    }
  });

  if (seriesToDraw.length === 0) {
    alert('Por favor selecciona al menos una opción en "Seleccionar opciones".');
    return;
  }

  // Dimensiones ampliadas para mejor visualización y títulos de ejes legibles
  const width = chartContainer.clientWidth || 550;
  const height = 310;
  const margin = { top: 22, right: 35, bottom: 48, left: 68 };

  chartContainer.innerHTML = '';

  const svg = d3.select('#chart-container')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const minYear = years[0];
  const maxYear = years[years.length - 1];

  const xScale = d3.scaleLinear()
    .domain([minYear, maxYear])
    .range([0, innerW]);

  // Encontrar valor máximo para el eje Y
  let allVals = [];
  seriesToDraw.forEach(s => {
    allVals = allVals.concat(s.values);
  });
  const maxVal = d3.max(allVals) || 10;
  const yMax = currentMetric === 'share' ? 100 : Math.max(10, maxVal * 1.15);

  const yScale = d3.scaleLinear()
    .domain([0, yMax])
    .range([innerH, 0]);

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Ejes X e Y
  const xAxis = d3.axisBottom(xScale).ticks(6).tickFormat(d3.format('d'));
  const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat((d) => (currentMetric === 'share' ? `${d}%` : `${d}`));

  g.append('g')
    .attr('class', 'axis axis-x')
    .attr('transform', `translate(0,${innerH})`)
    .call(xAxis)
    .attr('color', '#64748b');

  g.append('g')
    .attr('class', 'axis axis-y')
    .call(yAxis)
    .attr('color', '#64748b');

  // Título del Eje X: Años (Cápsula 14 & 15: claridad de escalas y variables)
  g.append('text')
    .attr('class', 'axis-title axis-title-x')
    .attr('x', innerW / 2)
    .attr('y', innerH + 38)
    .attr('text-anchor', 'middle')
    .attr('fill', '#94a3b8')
    .attr('font-size', '11px')
    .attr('font-weight', '600')
    .text('Línea de Tiempo (Años 2000 — 2025)');

  // Título del Eje Y: Métrica cuantitativa con definición precisa
  const yTitleText = currentMetric === 'share'
    ? 'Participación en la Matriz Eléctrica (% del total)'
    : 'Generación Eléctrica Anual (TWh = Teravatios-hora)';

  g.append('text')
    .attr('class', 'axis-title axis-title-y')
    .attr('transform', 'rotate(-90)')
    .attr('x', -innerH / 2)
    .attr('y', -50)
    .attr('text-anchor', 'middle')
    .attr('fill', '#94a3b8')
    .attr('font-size', '11px')
    .attr('font-weight', '600')
    .text(yTitleText);

  // Cuadrícula horizontal sutil
  g.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickFormat(''))
    .attr('stroke', 'rgba(255,255,255,0.06)');

  // Clip Path para revelación horizontal continua
  const clipId = `clip-race-${Date.now()}`;
  svg.append('defs')
    .append('clipPath')
    .attr('id', clipId)
    .append('rect')
    .attr('id', 'clip-rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 0)
    .attr('height', innerH);

  const chartArea = g.append('g').attr('clip-path', `url(#${clipId})`);

  // Líneas y áreas para cada serie
  seriesToDraw.forEach(s => {
    const lineGen = d3.line()
      .x((d, i) => xScale(years[i]))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    if (s.isMacro) {
      const areaGen = d3.area()
        .x((d, i) => xScale(years[i]))
        .y0(innerH)
        .y1((d) => yScale(d))
        .curve(d3.curveMonotoneX);

      chartArea.append('path')
        .datum(s.values)
        .attr('d', areaGen)
        .attr('fill', s.color)
        .attr('fill-opacity', 0.12);
    }

    chartArea.append('path')
      .datum(s.values)
      .attr('d', lineGen)
      .attr('fill', 'none')
      .attr('stroke', s.color)
      .attr('stroke-width', s.isMacro ? 3.0 : 2.2);
  });

  // Cursor vertical animado
  const cursorLine = g.append('line')
    .attr('y1', 0)
    .attr('y2', innerH)
    .attr('stroke', '#38bdf8')
    .attr('stroke-width', 1.5)
    .attr('stroke-dasharray', '3 3')
    .attr('x1', 0)
    .attr('x2', 0);

  // Puntos guía para cada serie trazada
  const guideDots = seriesToDraw.map(s => {
    return g.append('circle')
      .attr('r', s.isMacro ? 5.5 : 4)
      .attr('fill', s.color)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1);
  });

  // Activar sonificación acústica al arrancar la carrera (Tono: Grave = fósil, Agudo = limpio)
  startSonification();

  // Animación continua y fluida (~7.6 segundos)
  const duration = 7600;
  let startTime = null;

  if (chartAnimationId) cancelAnimationFrame(chartAnimationId);
  playbackStatus.textContent = 'Revelando generación año a año...';

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const currentX = innerW * progress;
    svg.select('#clip-rect').attr('width', currentX);

    const currentYearVal = minYear + (maxYear - minYear) * progress;
    const displayYear = Math.min(Math.round(currentYearVal), maxYear);
    chartYearBadge.textContent = `Año ${displayYear}`;

    cursorLine.attr('x1', currentX).attr('x2', currentX);

    const idx = Math.min(Math.floor(progress * (years.length - 1)), years.length - 1);
    seriesToDraw.forEach((s, i) => {
      guideDots[i].attr('cx', currentX).attr('cy', yScale(s.values[idx]));
    });

    // Actualizar sonificación acústica (1 solo dato: participación renovable vs fósil)
    const currentRenShare = (countryData.sources && countryData.sources['Renewables'] && countryData.sources['Renewables'].share[idx]) || (countryData.renew_share && countryData.renew_share[idx]) || 0;
    updateSonification(currentRenShare);

    // Actuador Físico: Rotores de Turbinas Eólicas sincronizadas con el año actual
    actualizarTurbinasDuranteCarrera(idx);

    // Actuador Físico Arduino LED (compatibilidad):
    if (currentRenShare >= 50) {
      enviarComandoArduino('1');
    } else {
      enviarComandoArduino('0');
    }

    playbackProgress.style.width = `${progress * 100}%`;

    if (progress < 1) {
      chartAnimationId = requestAnimationFrame(animate);
    } else {
      playbackStatus.textContent = 'Carrera completada ✓';
      chartAnimationId = null;
      stopSonification();
      // Al finalizar la carrera, ambas turbinas físicas quedan girando fijas
      // con la velocidad final registrada en 2025 hasta mover o levantar el peón
      actualizarTurbinasDuranteCarrera(years.length - 1);
    }
  }

  chartAnimationId = requestAnimationFrame(animate);
}

// ==========================================
// TOP 5 TRANSICIÓN EN PLANO BASE
// ==========================================
function renderTop5(rankingList, isMayor) {
  top5List.innerHTML = '';
  rankingList.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'top5-item';
    const espName = NOMBRES_ESP[item.country] || item.country;
    const sign = item.diff > 0 ? '+' : '';
    const diffClass = item.diff >= 0 ? 'diff-positive' : 'diff-negative';

    el.innerHTML = `
      <span class="top5-rank">#${index + 1}</span>
      <span class="top5-name">${espName}</span>
      <span class="top5-diff ${diffClass}">${sign}${item.diff}%</span>
    `;

    // Al hacer clic, selecciona automáticamente el país y lo lleva al plano interactivo
    el.addEventListener('click', () => {
      selectCountry(item.country, null);
    });

    top5List.appendChild(el);
  });
}

// ==========================================
// TOP GENERACIÓN ELÉCTRICA (PESOS PESADOS VS MENORES)
// ==========================================
function renderTopGen(rankingList, isGigantes) {
  topGenList.innerHTML = '';
  rankingList.forEach((item, index) => {
    const el = document.createElement('div');
    el.className = 'top5-item';
    const espName = NOMBRES_ESP[item.country] || item.country;
    const badgeClass = isGigantes ? 'diff-positive' : 'diff-negative';

    el.innerHTML = `
      <span class="top5-rank">#${index + 1}</span>
      <span class="top5-name">${espName} <small style="color:#64748b;">(${item.year})</small></span>
      <span class="top5-diff ${badgeClass}">${item.gen} TWh</span>
    `;

    el.addEventListener('click', () => {
      selectCountry(item.country, null);
    });

    topGenList.appendChild(el);
  });
}

if (btnShowTopGen) {
  btnShowTopGen.addEventListener('click', () => {
    const isHidden = topGenContainer.style.display === 'none';
    topGenContainer.style.display = isHidden ? 'flex' : 'none';
    if (isHidden) {
      renderTopGen(TOP5_GIGANTES_GEN, true);
      tabGenGigantes.classList.add('active');
      tabGenMenores.classList.remove('active');
    }
  });

  tabGenGigantes.addEventListener('click', () => {
    tabGenGigantes.classList.add('active');
    tabGenMenores.classList.remove('active');
    renderTopGen(TOP5_GIGANTES_GEN, true);
  });

  tabGenMenores.addEventListener('click', () => {
    tabGenMenores.classList.add('active');
    tabGenGigantes.classList.remove('active');
    renderTopGen(TOP5_MENORES_GEN, false);
  });
}

// Botón Top 5 Transición Renovable
btnShowTop5.addEventListener('click', () => {
  const isHidden = top5Container.style.display === 'none';
  top5Container.style.display = isHidden ? 'flex' : 'none';
  if (isHidden) {
    renderTop5(TOP5_MAYOR, true);
    tabTopMayor.classList.add('active');
    tabTopMenor.classList.remove('active');
  }
});

tabTopMayor.addEventListener('click', () => {
  tabTopMayor.classList.add('active');
  tabTopMenor.classList.remove('active');
  renderTop5(TOP5_MAYOR, true);
});

tabTopMenor.addEventListener('click', () => {
  tabTopMenor.classList.add('active');
  tabTopMayor.classList.remove('active');
  renderTop5(TOP5_MENOR, false);
});

// ==========================================
// MÓDULO FÍSICO: DUAL TURBINAS EÓLICAS (1 ARDUINO: PINES 6 Y 7)
// ==========================================
let arduinoPort = null;
let arduinoWriter = null;
let arduinoConnected = false;

const turbina1 = {
  id: 1,
  color: 'blanco',
  nombre: 'Turbina 1 (Peón Blanco - Pin 6)',
  country: null,
  speed: 0,
  ultimoEnvio: -1
};

const turbina2 = {
  id: 2,
  color: 'negro',
  nombre: 'Turbina 2 (Peón Negro - Pin 7)',
  country: null,
  speed: 0,
  ultimoEnvio: -1
};

async function conectarArduinoUnico() {
  const btn = document.getElementById('btn-conn-arduino');
  if (!("serial" in navigator)) {
    alert("Web Serial API no disponible en este navegador. Por favor usa Google Chrome o Microsoft Edge en tu PC.");
    return;
  }
  
  try {
    arduinoPort = await navigator.serial.requestPort();
    await arduinoPort.open({ baudRate: 9600 });
    const textEncoder = new TextEncoderStream();
    textEncoder.readable.pipeTo(arduinoPort.writable);
    arduinoWriter = textEncoder.writable.getWriter();
    arduinoConnected = true;
    
    if (btn) {
      btn.textContent = "✓ Arduino Conectado (Pines 6 & 7)";
      btn.classList.add("connected");
    }
    console.log("✓ Arduino conectado con éxito: Pin 6 (Turbina Blanca), Pin 7 (Turbina Negra)");
    
    // Inicializar velocidades actuales
    if (turbina1.country) actualizarTurbinaPais(1, turbina1.country);
    else enviarVelocidadTurbina(turbina1, 0);

    if (turbina2.country) actualizarTurbinaPais(2, turbina2.country);
    else enviarVelocidadTurbina(turbina2, 0);
  } catch (err) {
    console.warn("Error al conectar Arduino:", err);
  }
}

async function enviarVelocidadTurbina(t, pct) {
  t.speed = pct;
  
  // Actualizar indicadores UI
  const fillEl = document.getElementById(t.id === 1 ? 't1-fill' : 't2-fill');
  const labelEl = document.getElementById(t.id === 1 ? 't1-pct-label' : 't2-pct-label');
  const rotorIcon = document.getElementById(t.id === 1 ? 't1-rotor-symbol' : 't2-rotor-symbol');
  
  if (fillEl) fillEl.style.width = pct + '%';
  if (labelEl) labelEl.textContent = pct > 0 ? (pct + '%') : '0 RPM';
  
  // Animación del rotor visual en pantalla
  if (rotorIcon) {
    if (pct > 0) {
      const dur = Math.max(0.18, (100 - pct) / 60);
      rotorIcon.style.animation = `spin-slow ${dur.toFixed(2)}s linear infinite`;
    } else {
      rotorIcon.style.animation = 'none';
    }
  }

  // Enviar comando al Arduino único por USB ("T1:65\n" para Pin 6 o "T2:80\n" para Pin 7)
  if (arduinoWriter && pct !== t.ultimoEnvio) {
    t.ultimoEnvio = pct;
    const prefix = t.id === 1 ? "T1:" : "T2:";
    try {
      await arduinoWriter.write(prefix + pct + "\n");
    } catch (err) {
      console.warn(`Error enviando velocidad a ${t.nombre}:`, err);
    }
  }
}

// Cálculo de velocidad de la turbina según datos eólicos en el año index (0 = 2000, 25 = 2025)
function calcularVelocidadEolica(countryName, yearIdx) {
  if (!countryName || !energyData || !energyData[countryName]) return 0;
  const cData = energyData[countryName];
  if (!cData.sources || !cData.sources.Wind) return 0;

  const windShare = cData.sources.Wind.share;
  const windGen = cData.sources.Wind.gen;
  
  const share = (windShare && windShare[yearIdx] != null) ? windShare[yearIdx] : 0;
  const gen = (windGen && windGen[yearIdx] != null) ? windGen[yearIdx] : 0;
  
  if (gen <= 0.001) return 0; // Sin energía eólica en ese año
  
  // Mapeo no-lineal: share de 0.1% a 25% mapea suavemente a 20% - 100%
  let pct = Math.round(20 + (share / 25) * 80);
  return Math.min(100, Math.max(0, pct));
}

function actualizarTurbinaPais(tNum, countryName) {
  const t = tNum === 1 ? turbina1 : turbina2;
  t.country = countryName;
  
  const nameEl = document.getElementById(tNum === 1 ? 't1-country-name' : 't2-country-name');
  const genEl = document.getElementById(tNum === 1 ? 't1-gen-val' : 't2-gen-val');
  const shareEl = document.getElementById(tNum === 1 ? 't1-share-val' : 't2-share-val');
  
  if (!countryName) {
    if (nameEl) nameEl.textContent = tNum === 1 ? 'Coloca el peón blanco en el mapa...' : 'Coloca el peón negro en el mapa...';
    if (genEl) genEl.textContent = '0 TWh';
    if (shareEl) shareEl.textContent = '0%';
    enviarVelocidadTurbina(t, 0); // Motor se detiene
    return;
  }

  const displayName = NOMBRES_ESP[countryName] || countryName;
  if (nameEl) nameEl.textContent = `📍 ${displayName}`;

  // Si hay datos, obtener el último año registrado (2025, idx = 25)
  if (energyData && energyData[countryName]) {
    const cData = energyData[countryName];
    const wGen = cData.sources?.Wind?.gen;
    const wShare = cData.sources?.Wind?.share;
    const lastGen = (wGen && wGen.length > 0) ? wGen[wGen.length - 1] : 0;
    const lastShare = (wShare && wShare.length > 0) ? wShare[wShare.length - 1] : 0;

    if (genEl) genEl.textContent = `${lastGen.toFixed(1)} TWh`;
    if (shareEl) shareEl.textContent = `${lastShare.toFixed(1)}%`;

    // Si la carrera no está en animación activa, girar con el valor del año final
    if (!chartAnimationId) {
      const speed = calcularVelocidadEolica(countryName, 25);
      enviarVelocidadTurbina(t, speed);
    }
  }
}

// Sincronización en vivo año a año durante la animación
function actualizarTurbinasDuranteCarrera(yearIdx) {
  if (turbina1.country) {
    const sp1 = calcularVelocidadEolica(turbina1.country, yearIdx);
    enviarVelocidadTurbina(turbina1, sp1);
    
    const cData1 = energyData[turbina1.country];
    if (cData1?.sources?.Wind) {
      const g = cData1.sources.Wind.gen[yearIdx] || 0;
      const s = cData1.sources.Wind.share[yearIdx] || 0;
      const genEl = document.getElementById('t1-gen-val');
      const shareEl = document.getElementById('t1-share-val');
      if (genEl) genEl.textContent = `${g.toFixed(1)} TWh`;
      if (shareEl) shareEl.textContent = `${s.toFixed(1)}%`;
    }
  }
  
  if (turbina2.country) {
    const sp2 = calcularVelocidadEolica(turbina2.country, yearIdx);
    enviarVelocidadTurbina(turbina2, sp2);
    
    const cData2 = energyData[turbina2.country];
    if (cData2?.sources?.Wind) {
      const g = cData2.sources.Wind.gen[yearIdx] || 0;
      const s = cData2.sources.Wind.share[yearIdx] || 0;
      const genEl = document.getElementById('t2-gen-val');
      const shareEl = document.getElementById('t2-share-val');
      if (genEl) genEl.textContent = `${g.toFixed(1)} TWh`;
      if (shareEl) shareEl.textContent = `${s.toFixed(1)}%`;
    }
  }
}

// Inicialización de la aplicación (resistente a cualquier estado de carga del DOM)
async function iniciarAplicacion() {
  await loadEnergyData();
  await renderMap();
  initProtobjectIntegration();

  // Botón de conexión única para el Arduino con 2 motores (Pin 6 y 7)
  const btnConn = document.getElementById('btn-conn-arduino');
  if (btnConn) {
    btnConn.addEventListener('click', conectarArduinoUnico);
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', iniciarAplicacion);
} else {
  iniciarAplicacion();
}

// ==========================================
// INTEGRACIÓN PROTOBJECT: PEONES ARUCO & SENSOR FÍSICO
// ==========================================

const COORDENADAS_MAPA_FISICO = [
  // Norteamérica (calibrado con mapa_referencia.jpg)
  { country: 'Canada', x: 0.445, y: 0.181, r: 0.120 },
  { country: 'United States', x: 0.411, y: 0.303, r: 0.090 },
  { country: 'Mexico', x: 0.365, y: 0.430, r: 0.065 },

  // Centroamérica y Caribe
  { country: 'Cuba', x: 0.531, y: 0.454, r: 0.045 },
  { country: 'Guatemala', x: 0.417, y: 0.496, r: 0.038 },
  { country: 'Honduras', x: 0.451, y: 0.503, r: 0.038 },
  { country: 'Nicaragua', x: 0.474, y: 0.522, r: 0.038 },
  { country: 'Costa Rica', x: 0.485, y: 0.547, r: 0.035 },
  { country: 'Panama', x: 0.519, y: 0.562, r: 0.035 },

  // Sudamérica
  { country: 'Colombia', x: 0.576, y: 0.581, r: 0.058 },
  { country: 'Venezuela', x: 0.651, y: 0.566, r: 0.058 },
  { country: 'Ecuador', x: 0.531, y: 0.620, r: 0.048 },
  { country: 'Peru', x: 0.559, y: 0.669, r: 0.062 },
  { country: 'Bolivia', x: 0.634, y: 0.728, r: 0.058 },
  { country: 'Brazil', x: 0.742, y: 0.684, r: 0.115 },
  { country: 'Paraguay', x: 0.668, y: 0.781, r: 0.048 },
  { country: 'Uruguay', x: 0.685, y: 0.825, r: 0.042 },
  { country: 'Chile', x: 0.588, y: 0.840, r: 0.048 },
  { country: 'Argentina', x: 0.639, y: 0.859, r: 0.068 }
];

let physicalHoverCountry = null;
let physicalHoverStartTime = 0;
let lastSelectedPhysicalCountry = null;
const HOVER_THRESHOLD_MS = 320;

function playPhysicalClickFeedback() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(740, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1280, audioCtx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {}
}

function initProtobjectIntegration() {
  const badgeDot = document.getElementById('protobject-dot');
  const badgeText = document.getElementById('protobject-status-text');
  const fingerCursor = document.getElementById('physical-finger-cursor');
  const fingerLabel = document.getElementById('finger-hover-label');
  const mapSection = document.querySelector('.map-section');

  if (typeof Protobject === 'undefined' || !Protobject.Core) {
    if (badgeText) badgeText.textContent = 'Sensor: Modo Autónomo Web';
    return;
  }

  if (badgeText) badgeText.textContent = 'Sensor: Listo (esperando peones)';
  if (badgeDot) badgeDot.classList.add('connected');

  Protobject.Core.onReceived((data) => {
    if (!data) return;

    if (badgeDot && !badgeDot.classList.contains('connected')) {
      badgeDot.classList.add('connected');
    }

    // 1. RECEPCIÓN DE PEONES DOBLES ARUCO (TURBINAS FÍSICAS)
    if (data.tipo === 'peones_dobles') {
      // Peón Blanco -> Turbina 1
      if (data.peonBlanco && data.peonBlanco.activo && data.peonBlanco.pais) {
        if (turbina1.country !== data.peonBlanco.pais) {
          console.log(`⚪ Peón Blanco detectado en: ${data.peonBlanco.pais}`);
          playPhysicalClickFeedback();
          actualizarTurbinaPais(1, data.peonBlanco.pais);
          if (!selectedCountry) selectCountry(data.peonBlanco.pais, null);
        }
      } else {
        if (turbina1.country !== null) {
          console.log('⚪ Peón Blanco levantado -> Turbina 1 apagada');
          actualizarTurbinaPais(1, null);
        }
      }

      // Peón Negro -> Turbina 2
      if (data.peonNegro && data.peonNegro.activo && data.peonNegro.pais) {
        if (turbina2.country !== data.peonNegro.pais) {
          console.log(`⚫ Peón Negro detectado en: ${data.peonNegro.pais}`);
          playPhysicalClickFeedback();
          actualizarTurbinaPais(2, data.peonNegro.pais);
        }
      } else {
        if (turbina2.country !== null) {
          console.log('⚫ Peón Negro levantado -> Turbina 2 apagada');
          actualizarTurbinaPais(2, null);
        }
      }
      return;
    }

    // 2. RECEPCIÓN DE APUNTADO CON DEDO (COMPATIBILIDAD)
    if (data.tipo === 'apuntado') {
      if (!data.activo) {
        if (fingerCursor) fingerCursor.style.display = 'none';
        physicalHoverCountry = null;
        return;
      }

      if (fingerCursor && mapSection) {
        const rect = mapSection.getBoundingClientRect();
        const posX = data.x * rect.width;
        const posY = data.y * rect.height;

        fingerCursor.style.display = 'flex';
        fingerCursor.style.left = posX + 'px';
        fingerCursor.style.top = posY + 'px';
      }

      let closestCountry = null;
      let minDistance = 999;

      for (const target of COORDENADAS_MAPA_FISICO) {
        const dx = data.x - target.x;
        const dy = data.y - target.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < target.r && dist < minDistance) {
          minDistance = dist;
          closestCountry = target.country;
        }
      }

      if (closestCountry) {
        const nombreEsp = NOMBRES_ESP[closestCountry] || closestCountry;
        if (fingerLabel) fingerLabel.textContent = 'Tocando: ' + nombreEsp;

        if (physicalHoverCountry === closestCountry) {
          if (Date.now() - physicalHoverStartTime >= HOVER_THRESHOLD_MS) {
            if (lastSelectedPhysicalCountry !== closestCountry) {
              lastSelectedPhysicalCountry = closestCountry;
              playPhysicalClickFeedback();
              selectCountry(closestCountry, null);
              actualizarTurbinaPais(1, closestCountry);
            }
          }
        } else {
          physicalHoverCountry = closestCountry;
          physicalHoverStartTime = Date.now();
        }
      } else {
        if (fingerLabel) fingerLabel.textContent = 'Mano detectada';
        physicalHoverCountry = null;
      }
    }
  });
}
