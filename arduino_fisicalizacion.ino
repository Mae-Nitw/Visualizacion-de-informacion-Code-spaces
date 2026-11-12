// ==========================================================
// CONTROL DE DUAL TURBINAS EÓLICAS CON 1 ARDUINO (LEONARDO / UNO)
// Visualización de Información (IIC2026) - Grupo 27
// ==========================================================
// - Turbina 1 (Peón Blanco): Servo continuo en Pin Digital 6
// - Turbina 2 (Peón Negro):  Servo continuo en Pin Digital 7
//
// CONEXIONES SEGÚN ESQUEMA ARDUINO LEONARDO:
// - Servo 1 (Blanco):
//     * Señal (Amarillo):   Pin Digital ~6
//     * VCC (Rojo):         Pin 5V
//     * GND (Marrón/Negro): Pin GND
// - Servo 2 (Negro):
//     * Señal (Amarillo):   Pin Digital 7
//     * VCC (Rojo):         Pin 2 de cabezal ICSP (+5V)
//     * GND (Marrón/Negro): Pin GND superior
// ==========================================================

#include <Servo.h>

Servo turbinaBlanca; // Turbina 1 (Pin 6)
Servo turbinaNegra;  // Turbina 2 (Pin 7)

const int PIN_TURBINA_1 = 6;   // Peón Blanco
const int PIN_TURBINA_2 = 7;   // Peón Negro
const int PIN_LED = 13;        // LED integrado en la placa Arduino

// Calibración estándar de servo de rotación continua:
// 90 = Completamente detenido (velocidad 0)
// 96 a 180 = Giro continuo horario (de suave a máxima velocidad)
const int SERVO_STOP = 90;
const int SERVO_MIN = 96;
const int SERVO_MAX = 180;

int vel1 = 0; // Porcentaje de velocidad Turbina 1 (0 a 100%)
int vel2 = 0; // Porcentaje de velocidad Turbina 2 (0 a 100%)

void setup() {
  Serial.begin(9600); // 9600 baudios USB con el navegador
  pinMode(PIN_LED, OUTPUT);
  
  turbinaBlanca.attach(PIN_TURBINA_1);
  turbinaNegra.attach(PIN_TURBINA_2);
  
  // Ambas turbinas inician detenidas
  turbinaBlanca.write(SERVO_STOP);
  turbinaNegra.write(SERVO_STOP);
  digitalWrite(PIN_LED, LOW);
  
  Serial.println("✓ Arduino Dual Turbinas listo: T1=Pin6, T2=Pin7");
}

void loop() {
  // Escuchar comandos seriales recibidos desde la página web
  if (Serial.available() > 0) {
    String comando = Serial.readStringUntil('\n');
    comando.trim();
    if (comando.length() == 0) return;

    // Comando específico para Turbina 1: "T1:65"
    if (comando.startsWith("T1:")) {
      int val = comando.substring(3).toInt();
      vel1 = constrain(val, 0, 100);
      aplicarVelocidad(turbinaBlanca, vel1);
    }
    // Comando específico para Turbina 2: "T2:85"
    else if (comando.startsWith("T2:")) {
      int val = comando.substring(3).toInt();
      vel2 = constrain(val, 0, 100);
      aplicarVelocidad(turbinaNegra, vel2);
    }
    // Comando conjunto: "65,85" (vel1, vel2)
    else if (comando.indexOf(',') != -1) {
      int coma = comando.indexOf(',');
      vel1 = constrain(comando.substring(0, coma).toInt(), 0, 100);
      vel2 = constrain(comando.substring(coma + 1).toInt(), 0, 100);
      aplicarVelocidad(turbinaBlanca, vel1);
      aplicarVelocidad(turbinaNegra, vel2);
    }
    // Comando de parada general: "S" o "0"
    else if (comando == "S" || comando == "0") {
      vel1 = 0;
      vel2 = 0;
      aplicarVelocidad(turbinaBlanca, 0);
      aplicarVelocidad(turbinaNegra, 0);
    }
    // Compatibilidad comando numérico simple (aplica a Turbina 1)
    else {
      int val = comando.toInt();
      vel1 = constrain(val, 0, 100);
      aplicarVelocidad(turbinaBlanca, vel1);
    }

    // El LED 13 permanece encendido si al menos una turbina está girando
    digitalWrite(PIN_LED, (vel1 > 0 || vel2 > 0) ? HIGH : LOW);
  }
}

// Aplica la velocidad en pulsos de servo a un motor continuo
void aplicarVelocidad(Servo &motor, int pct) {
  if (pct <= 0) {
    motor.write(SERVO_STOP); // Detenido
  } else {
    // Mapea de 1%-100% a 96-180 de pulso servo para torque firme
    int pulso = map(pct, 1, 100, SERVO_MIN, SERVO_MAX);
    motor.write(pulso);
  }
}
