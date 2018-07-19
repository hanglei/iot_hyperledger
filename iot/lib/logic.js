'use strict';
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
/**
 * Add stream data to blockchain
 * @param {org.acme.iot.adddata} input - the input to be processed
 * @transaction
 */
function adddata(input){
    var factory = getFactory();
    var sensor_value=input.sensor_value;
    var rID=makeid();
    var id =input.ID;
    var current_time=input.current_time;
    return getAssetRegistry("org.acme.iot.stream_data")
    .then(function(assetRegistry){
        newdata=factory.newResource("org.acme.iot", "stream_data",rID);
        newdata.ID=id;
        newdata.current_time=current_time;
        newdata.sensor_value=sensor_value;
        assetRegistry.add(newdata);

    });
   
}

