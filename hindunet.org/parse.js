var request = require('request')
  , cheerio = require('cheerio');
var csv = require('ya-csv');
var fs = require('fs');
var writer = csv.createCsvStreamWriter(fs.createWriteStream('hinduNames.csv'));
writer.writeRecord(["Name","Gender","Religion","Cast","Country"]);
for(var i = 1; i<394;i++)
{
      var url = "http://www.hindunet.org/baby_names/BabynameCategories/index/page:"+i;
      console.log(url);
         request(url, function(err, resp, body){
        		$ = cheerio.load(body);
        			p_values = $('.dataTable tr'); //use your CSS selector here
          		$(p_values).each(function(i, p_value){
                value=$(p_value).find('td');
                name=$(value[0]).html();
                gender = $(value[2]).html();
                if (name && gender)
                {
                //console.log($(value[0]).html(),($(value[2]).html()).trim());
                  writer.writeRecord([name,gender.trim(),"hindu","","India"]);
                  //console.log(this.gender);
                }
        	   	});
  });
}
