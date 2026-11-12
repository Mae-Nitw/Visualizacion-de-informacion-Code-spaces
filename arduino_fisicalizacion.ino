// ==========================================================
// CONTROL DE TURBINA EÓLICA (ROTOR CONTINUO) POR USB
// Visualización de Información (IIC2026) - Grupo 27
// ==========================================================
// Este código se graba en AMBOS Arduinos:
// - Arduino 1: Controla la Turbina del Peón Blanco
// - Arduino 2: Controla la Turbina del Peón Negro
//
// CONEXIONES DEL ROTOR (Servo de rotación continua):
// - Cable Marrón / Negro: GND de Arduino
// - Cable Rojo:          5V de Arduino (o fuente externa si el motor consume mucho)
// - Cable Naranja / Amarillo: Pin Digital 9 de Arduino (PWM)
// ==========================================================

#include <Servo.h>

Servo turbinaEolica;

const int PIN_ROTOR = 9;   // Pin de control del servo continuo
const int PIN_LED = 13;    // LED integrado en la placa

// Calibración estándar de servo de rotación continua:
// 90 = Completamente detenido (velocidad 0)
// 96 a 180 = Giro continuo en sentido horario (de suave a máxima velocidad)
const int SERVO_STOP = 90;
const int SERVO_MIN = 96;
const int SERVO_MAX = 180;

int velocidadActual = 0;   // 0% a 100%
unsigned long tiempoUltimoComando = 0;
bool ledBlink = false;

void setup() {
  Serial.begin(9600); // Comunicación a 9600 baudios con la página web
  pinMode(PIN_LED, OUTPUT);
  
  turbinaEolica.attach(PIN_ROTOR);
  turbinaEolica.write(SERVO_STOP); // Inicialmente apagado
  digitalWrite(PIN_LED, LOW);
  
  Serial.println("✓ Turbina Eólica lista en Pin 9");
}

void loop() {
  // Leer comando recibido desde el navegador por USB
  if (Serial.available() > 0) {
    String comando = Serial.readStringUntil('\n');
    comando.trim();
    
    if (comando.length() > 0) {
      tiempoUltimoComando = millis();
      
      if (comando == "S" || comando == "0") {
        // Detener turbina
        velocidadActual = 0;
      } 
      else if (comando == "1") {
        // Compatibilidad estado activo medio
        velocidadActual = 50;
      } 
      else {
        // Valor numérico de porcentaje (ej: "35", "78", "100")
        int valor = comando.toInt();
        velocidadActual = constrain(valor, 0, 100);
      }
      
      aplicarVelocidad(velocidadActual);
    }
  }
}

// Controla el pulso del servo según el porcentaje de generación eólica (0 a 100%)
void aplicarVelocidad(int pct) {
  if (pct <= 0) {
    turbinaEolica.write(SERVO_STOP);
    digitalWrite(PIN_LED, LOW);
  } else {
    // Mapeo no-lineal para que velocidades bajas también tengan buen torque
    int pulso = map(pct, 1, 100, SERVO_MIN, SERVO_MAX);
    turbinaEolica.write(pulso);
    digitalWrite(PIN_LED, HIGH);
  }
}
