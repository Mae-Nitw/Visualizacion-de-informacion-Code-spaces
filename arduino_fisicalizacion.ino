// ==========================================
// CONTROL DE LED ARDUINO UNO POR USB
// Visualización de Información (IIC2026) - Grupo 27
// ==========================================
// LED integrado en la placa Arduino Uno: Pin 13
const int pinLed = 13;

// Estados posibles:
// 'S' = Standby / Espera (parpadea cada 0.5s)
// '1' = Ganan energías limpias (LED encendido fijo)
// '0' = Ganan fósiles (LED apagado)
char estadoActual = 'S';

unsigned long tiempoAnterior = 0;
bool estadoLedBlink = false;

void setup() {
  Serial.begin(9600); // 9600 baudios (misma velocidad que la web)
  pinMode(pinLed, OUTPUT);
  digitalWrite(pinLed, LOW);
}

void loop() {
  // Leer comando recibido desde la página web por USB
  if (Serial.available() > 0) {
    char nuevoComando = Serial.read();
    if (nuevoComando == '1' || nuevoComando == '0' || nuevoComando == 'S') {
      estadoActual = nuevoComando;
    }
  }

  // Comportamiento del LED según la información de la web:
  if (estadoActual == '1') {
    // Predominan energías limpias (>= 50%): LED encendido continuo
    digitalWrite(pinLed, HIGH);
  } 
  else if (estadoActual == '0') {
    // Predominan energías fósiles (> 50%): LED apagado
    digitalWrite(pinLed, LOW);
  } 
  else if (estadoActual == 'S') {
    // Modo reposo / espera: Parpadea cada medio segundo (500 ms)
    unsigned long tiempoActual = millis();
    if (tiempoActual - tiempoAnterior >= 500) {
      tiempoAnterior = tiempoActual;
      estadoLedBlink = !estadoLedBlink;
      digitalWrite(pinLed, estadoLedBlink ? HIGH : LOW);
    }
  }
}
