function parseUplink(device, payload) {
    var parsed = payload.asJsonObject();
    env.log(parsed);
    
    var e1 = device.endpoints.byAddress("1");
    if(parsed.temperatureCelsius1 != null && e1 != null){
        e1.updateTemperatureSensorStatus(parsed.temperatureCelsius1);}

    var e2 = device.endpoints.byAddress("2");
    if(parsed.temperatureCelsius2 != null && e2 != null){
        e2.updateTemperatureSensorStatus(parsed.temperatureCelsius2);}

    var e3 = device.endpoints.byAddress("3");
    if(parsed.temperatureCelsius3 != null && e3 != null){
        e3.updateTemperatureSensorStatus(parsed.temperatureCelsius3);}

   var e4 = device.endpoints.byAddress("4");
    if(parsed.temperatureCelsius4 != null && e4 != null){
        e4.updateTemperatureSensorStatus(parsed.temperatureCelsius4);}

   var e5 = device.endpoints.byAddress("5");
    if(parsed.temperatureCelsius5 != null && e5 != null){
        e5.updateTemperatureSensorStatus(parsed.temperatureCelsius5);}

   var e6 = device.endpoints.byAddress("6");
    if(parsed.temperatureCelsius6 != null && e6 != null){
        e6.updateTemperatureSensorStatus(parsed.temperatureCelsius6);}

   var e7 = device.endpoints.byAddress("7");
    if(parsed.temperatureCelsius7 != null && e7 != null){
        e7.updateTemperatureSensorStatus(parsed.temperatureCelsius7);}

   var e8 = device.endpoints.byAddress("8");
    if(parsed.temperatureCelsius8 != null && e8 != null){
        e8.updateTemperatureSensorStatus(parsed.temperatureCelsius8);}

   var e9 = device.endpoints.byAddress("9");
    if (parsed.mp1 != null && e9 != null){
        e9.updateGenericSensorStatus(parsed.mp1);}
        
   var e10 = device.endpoints.byAddress("10");
    if (parsed.mp2 != null && e10 != null){
        e10.updateGenericSensorStatus(parsed.mp2);}

   var e11 = device.endpoints.byAddress("11");
    if (parsed.mp3 != null && e11 != null){
        e11.updateGenericSensorStatus(parsed.mp3);}

   var e12 = device.endpoints.byAddress("12");
    if (parsed.mp4 != null && e12 != null){
        e12.updateGenericSensorStatus(parsed.mp4);}

   var e13 = device.endpoints.byAddress("13");
    if (parsed.mp5 != null && e13 != null){
        e13.updateGenericSensorStatus(parsed.mp5);}

   var e14 = device.endpoints.byAddress("14");
    if (parsed.mp6 != null && e14 != null){
        e14.updateGenericSensorStatus(parsed.mp6);}

   var e15 = device.endpoints.byAddress("15");
    if (parsed.mp7 != null && e15 != null){
        e15.updateGenericSensorStatus(parsed.mp7);}
  
}

function buildDownlink(device, endpoint, command, payload) 
{ 

	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}