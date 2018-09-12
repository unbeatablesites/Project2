require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;

var dbx = new Dropbox({ accessToken: 'NvhMl7q9YvAAAAAAAAAADdbyHNeYAFSnw8hg89GVv8f5gQv4Sl-kozyZhDMYbx-1' });

dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response.entries);
    })
    .catch(function(error) {
      console.error(error);
    });