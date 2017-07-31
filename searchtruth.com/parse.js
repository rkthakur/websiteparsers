var request = require('request')
  , cheerio = require('cheerio');
var csv = require('ya-csv');
var fs = require('fs');
var genders = ["m","f"];
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//writer.pipe(fs.createWriteStream('muslimNames.csv'));
var writer = csv.createCsvStreamWriter(fs.createWriteStream('muslimNames.csv'));
writer.writeRecord(["Name","Gender","Religion","Cast","Country"]);
for (var i=0;i<genders.length;i++)
{
  for(var j=0; j<letters.length;j++)
  {
      var url = "http://www.searchtruth.com/baby_names/names.php?ntype="+genders[i]+"&find=2&letter="+letters[j];
      var col_head = ["Resource Certifications:","Certified Architects:","Certified Solution Strategists:","Certified Solution Support:","Projects Completed:"];

         request(url, function(err, resp, body){
        		$ = cheerio.load(body);
        			p_values = $('td .QuranData a'); //use your CSS selector here
        			var data=["0","0","0","0","0"];
        			var len = p_values.length;
          		$(p_values).each(function(i, p_value){
                value=$(p_value).text();
                if(value.length>1 && (value.indexOf(' ') === -1))
                {
                  var gend=(this.gender === "m") ? "Male" : "Female";
                  writer.writeRecord([value,gend,"muslim","","India"]);
                  //console.log(this.gender);
                }
        	   	}.bind({gender : this.gender}));
  }.bind({gender : genders[i]}));
}
}
