var request = require('request')
  , cheerio = require('cheerio');
var partners = require('./sfcc_partners.json');

var stats_lebel = ["Resource Certifications:","Certified Architects:","Certified Solution Strategists:","Certified Solution Support:","Projects Completed:"];
console.log('"URL","Partner Type","Resource Certifications","Certified Architects","Certified Solution Strategists","Certified Solution Support","Projects Completed"');
partners.forEach(function(partner){
	
	var url="http://www.demandware.com"+partner.page_uri;
	var partner_type = partner.partner_type[0];
	//console.log(url);
	request(url, function(err, resp, body){
  		$ = cheerio.load(body);
  			p_values = $('.partner-stats .partner-details-section'); //use your CSS selector here 			
  			var data=["0","0","0","0","0"];
  			var len = p_values.length;
  			if(len === 0)
  				console.log(url+","+partner_type+'0,0,0,0,0');
  			$(p_values).each(function(i, p_value){
  				lable=$(p_value).find('h6').text();
  				data[stats_lebel.findIndex(x => x==lable)] = $(p_value).find('p').text();
  				//console.log(p_value.length);
  				//data = data+$(p_value).text()+",";
  				if (i === (len - 1))
  				{
  				console.log(url+","+partner_type+","+data[0]+","+data[1]+","+data[2]+","+data[3]+","+data[4]);
  				data=["0","0","0","0","0"];
  				}
  	   	}
  	   	);
});
});