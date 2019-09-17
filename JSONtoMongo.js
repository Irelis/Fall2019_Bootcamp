'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/

mongoose.connect(config.db.uri, {useNewUrlParser: true});


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */

 fs.readFile('listings.json', 'utf8', function(err, data) {
  
  if (err) throw err;

  var fileData = JSON.parse(data);

  var array = fileData.entries;

  array.forEach(function(element) {

    
    var toInsert = new Listing(element);

    toInsert.save(function(err) {
      if (err) throw err;

});

 });

});

 /*console.log('after readFile()');
 console.log(fileData);*/

   /*Listing.name = element.name;
  Listing.code = element.code;
  Listing.coordinates.latitude = element.coordinates.latitude;
  Listing.coordinates.longitude = element.coordinates.longitude;
  Listing.address = element.address;*/

/*fileData.forEach(function(element) {
  Listing.name = element.name;
  Listing.code = element.code;
  Listing.coordinates.latitude = element.coordinates.latitude;
  Listing.coordinates.longitude = element.coordinates.longitude;
  Listing.address = element.address;*/

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */

 /*name: element.name,
      code: element.code,
      coordinates: {
        latitude: element.latitude,
        longitude: element.longitude,
      },
      address: element.address*/

      //newEntry = element;

//, {useNewUrlParser: true}