function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  
  endpoints.addEndpoint("1", "Temperatura Retorno Climatización", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Ida Climatización", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temperatura Acumulador Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temperatura Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  var s1 = endpoints.addEndpoint("9", "MP B.Secundario", endpointType.genericSensor);
  s1.variableTypeId = 1316;
  
  // Con esto podemos hacer un on-off //endpoints.addEndpoint("11", "MP B.Caldera", endpointType.appliance, applianceEndpointSubType.pump);
   var s2 = endpoints.addEndpoint("10", "MP B.Primario", endpointType.genericSensor); 
   s2.variableTypeId = 1316;
   var s3 = endpoints.addEndpoint("11", "MP B.Retorno", endpointType.genericSensor);
   s3.variableTypeId = 1316;
   var s4 = endpoints.addEndpoint("12", "Alarma disparo seta", endpointType.genericSensor);
   s4.variableTypeId = 1317; 
   var s5 = endpoints.addEndpoint("13", "Alarma Disyuntor B.Retorno", endpointType.genericSensor);
   s5.variableTypeId = 1317;
   var s6 = endpoints.addEndpoint("14", "Alarma Disyuntor B.Secundario", endpointType.genericSensor);
   s6.variableTypeId = 1317;
   var s7 = endpoints.addEndpoint("15", "Alarma Disyuntor B.Primario", endpointType.genericSensor);
   s7.variableTypeId = 1317;


}


function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}


