// les dépendances
const express = require('express');
const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
})

// définition des routes
const crudRoutes = require('./routes/crud');

// back end routes
app.use("/api/crud", crudRoutes);





module.exports = app;


// Le« partage de ressources entre origines multiples»(Cross - Origin Resource Sharing, CORS) est un mécanisme qui permet à des resources restreintes d 'une page web , d'
// être récupérées par un autre domaine extérieur au domaine à partir duquel la première ressource a été servie1.Une page web peut librement intégrer des ressources d 'origines différentes telles que des images, des feuilles de style, des scripts, des iframes et des vidéos2. Certaines "demandes inter-domaine" (en anglais : cross-domain), notamment les requêtes Ajax, sont interdites par défaut par la politique de sécurité de même origine (en anglais : same origin security policy). 
