var links = ['http://google.com', 'http://yahoo.com'];
for (link in links) {
var url = links[link];

require('request')(url, function() {

    console.log(this.urlAsy);

}.bind({urlAsy:url}));
}
