# Transición Energética en las Américas (2000–2025) 🌎⚡
**Proyecto de Visualización de Información (IIC2026) — Grupo 27**  
*Pontificia Universidad Católica de Chile*

---

## 📌 Descripción del Proyecto

Aplicación interactiva y multisensorial que permite explorar la evolución de la matriz energética en 19 países de las Américas durante el período 2000–2025. El proyecto busca responder cómo ha avanzado la generación de energías limpias y renovables frente a la persistencia de fuentes fósiles, combinando visualización espacial 3D, gráficos temporales dinámicos y sonificación acústica.

---

## 🚀 Características Principales

1. **Globo Terráqueo Interactivo (3D)**:
   - Proyección ortográfica navegable con rotación 360° y zoom interactivo mediante D3.js y TopoJSON.
   - Clasificación por las 3 macro-regiones de las Américas:
     - 🟠 **Norteamérica**
     - 🟢 **Centroamérica y el Caribe**
     - 🔵 **Sudamérica**
   - Tooltips enriquecidos con la bandera de cada país y su pertenencia regional.

2. **Carrera Temporal y Desglose Energético**:
   - Animación fluida año a año (2000 a 2025) que compara fuentes limpias vs. fósiles.
   - Modos de métrica cuantitativa:
     - **Generación Eléctrica Anual**: Medida en Teravatios-hora (**TWh**).
     - **Participación en la Matriz**: Medida en porcentaje relativo (**%**).
   - Filtros para desglosar fuentes específicas: Solar, Eólica, Hidroeléctrica, Bioenergía, Gas Natural, Carbón y otros fósiles.

3. **Sonificación Acústica Continua (Web Audio API)**:
   - Mapeo perceptual de 1 solo canal continuo: **Frecuencia/Tono**.
     - 🔊 **Tono Grave**: Predominancia de generación fósil.
     - 🎵 **Tono Agudo**: Mayor participación de energías limpias y renovables.
   - Control de activación/silenciado de audio en tiempo real.

4. **Rankings y Contexto**:
   - **Top 5 de Transición**: Países con mayor avance o retroceso relativo en participación limpia.
   - **Top Generación**: Comparación entre gigantes eléctricos regionales y países de menor escala.

---

## 🛠️ Tecnologías Utilizadas

- **D3.js (v7)**: Manipulación de datos, proyecciones geográficas y renderizado dinámico de curvas y ejes SVG.
- **TopoJSON**: Geometría cartográfica optimizada de países a escala 110m.
- **Web Audio API**: Síntesis de sonido armónico en tiempo real para la sonificación.
- **Vanilla JavaScript, HTML5 & CSS3**: Estructura, lógica e interfaz moderna con diseño responsive y soporte accesible.

---

## 📂 Estructura de Archivos

```text
├── index.html           # Estructura principal y maquetación de la interfaz
├── style.css            # Estilos, sistema de diseño y paletas cromáticas
├── main.js              # Lógica del globo D3, interacción, gráficos y audio
├── flags_data.js        # Banderas vectoriales en Base64 para carga instantánea
├── energy_data.json     # Dataset procesado de generación y matrices energéticas
├── Notebook_Proyecto.ipynb # Cuaderno de análisis, limpieza de datos y fundamentación
└── README.md            # Documentación del repositorio
```
