/* Add all the required libraries*/

var //fs = require('fs'),
    db;
    mongoose = require('mongoose');
    //Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true});/*, function(err, db){
  console.log("connected");
  console.log(db);

});*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.find({name: "Library West"}, function(err, data){
    if (err){
      throw error;
    }

    console.log(data[0]);
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndDelete({code: "CABL"}, function(err, data){
    if (err){
      throw error;
    }


  })
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {$set:{address: "1953 Museum Rd, Gainesville, FL 32603"}}, {new: true}, function(err, doc){
    if (err){
      throw error;
    }

    console.log(doc);
   })
};

//var counter = 0;

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listing.find({}, function(err, data){
    if (err){
      throw error;
    }

    data.forEach(function(element) {

    
    console.log(/*counter + '. ' + */element);
        //counter++;

   })
 })
};

findLibraryWest();

//console.log("Find before:")


/*Listing.find({code: "CABL"}, function(err, data){
    if (err){
      throw error;
    }

    console.log(data[0]);
   })*/

removeCable();

updatePhelpsMemorial();


retrieveAllListings();