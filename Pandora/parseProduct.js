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
      var url = "https://us.pandora.net/en/limited-edition-flourishing-heart-padlock-bangle/B800873.html";
      var col_head = ["Resource Certifications:","Certified Architects:","Certified Solution Strategists:","Certified Solution Support:","Projects Completed:"];

         request(url, function(err, resp, body){
        		$ = cheerio.load(body);
        			p_values = $('.pdp-title-product h1'); //use your CSS selector here
              p_number = $('.product-number');
              p_images = $('.image-container li a img');
              p_price = $('.product-price .price-sales ');
              p_description = $('.description')
          		$(p_values).each(function(i, p_value){
                value=$(p_value).text();
                console.log(value);
        	   	});

              $(p_images).each(function(i, p_images){
                  console.log(p_images.attribs.src);
        	   	});

              $(p_price).each(function(i, p_price){
                  //console.log(p_price);
        	   	});
              $(p_description).each(function(i, p_description){
                  console.log($(p_description).text());
        	   	});

  }.bind({gender : ''}));
//}
//}
