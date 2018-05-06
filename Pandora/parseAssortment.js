var request = require('request')
  , cheerio = require('cheerio');
var csv = require('ya-csv');
var fs = require('fs');
//var genders = ["m","f"];
//var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//writer.pipe(fs.createWriteStream('muslimNames.csv'));
var writer = csv.createCsvStreamWriter(fs.createWriteStream('PandoraProducts.csv'));
writer.writeRecord(["Name","Gender","Religion","Cast","Country"]);
/*for (var i=0;i<genders.length;i++)
{
  for(var j=0; j<letters.length;j++)
  {*/
      var url = "https://us.pandora.net/en/iconic-bracelet-gift-sets/";
      var col_head = ["Resource Certifications:","Certified Architects:","Certified Solution Strategists:","Certified Solution Support:","Projects Completed:"];

         request(url, function(err, resp, body){
        		$ = cheerio.load(body);
        			cat_name = $('.charms-only-header .refinement-header'); //use your CSS selector here
              products = $('.product-tile');
          		$(cat_name).each(function(i, cat_name){
                value=$(cat_name).text();
                console.log(value);
        	   	});
              console.log(products[0]);
            /*  $(products).each(function(i, products){
                  console.log($(products).('.product-image'));
        	   	});
*/
  }.bind({gender : ''}));
//}
//}
