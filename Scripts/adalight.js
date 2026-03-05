export function Name() { return "Arduino Adalight Forzado"; }
export function DeviceId() { return "Arduino_Adalight_COM2_V1"; } // ID único nuevo
export function Author() { return "Custom"; }
export function Size() { return [60, 1]; } 
export function DefaultConfiguration() { return {"channel": 1}; }
export function LedNames() { return ["LED"]; }
export function LedPositions() { return [[0,0]]; }

// Esta función obliga a SignalRGB a cargar el script en el COM2
export function Scan() {
    return ["COM2"];
}

// Esta función es para que aparezca en la lista de dispositivos
export function Discovery() {
    return [
        ["COM2"]
    ];
}

// Configuración de comunicación (Adalight estándar)
export function Initialize() {
    device.write([0x41, 0x64, 0x61, 0x00, 0x00, 0x00], 6); // Saludo 'Ada'
}

export function Render(colors) {
    let packet = [0x41, 0x64, 0x61, 0x00, 0x3B, 0x3E]; // Cabecera Adalight
    packet.push(...colors);
    device.write(packet, packet.length);
}

export function Shutdown() {
    device.write([0x41, 0x64, 0x61, 0x00, 0x00, 0x00], 6);
}