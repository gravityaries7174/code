export function Name() { return "Arduino Adalight Gravity"; }
export function DeviceId() { return "Arduino_Adalight_COM7"; }
export function Author() { return "Gravityaries7174"; }
export function Size() { return [60, 1]; } 

export function Scan() {
    return ["COM7"];
}

export function Discovery() {
    return [["COM7"]];
}

export function Initialize() {
    device.write([0x41, 0x64, 0x61, 0x00, 0x3B, 0x3E], 6); 
}

export function Render(colors) {
    let packet = [0x41, 0x64, 0x61, 0x00, 0x3B, 0x3E]; 
    packet.push(...colors);
    device.write(packet, packet.length);
}