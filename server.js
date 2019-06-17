const express    = require ('express'),
      app        = express(),
      cors       = require ('cors'),
      fetch      = require ('node-fetch'),
      port       = process.env.PORT||3001;

const options = {
  origin: true,
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers": true,
  "Access-Control-Expose-Headers": true
};

const url = " https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

app.use(cors(options));

app.get('/', (req, res) => {
  fetch(url)
  .then(response => response.json())
  .then(json => res.send(json))
  .catch(err => console.log(err));
});

app.listen(port, () => console.log(`app listening on ${port}`))
 
