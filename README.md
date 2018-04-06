## CLIENT

ADD CERTIF pour éviter les refresh intempestifs :
Dans le dossier ssl, ajouter le certificat certificat.crt dans : Ordinateur Local
Ensuite : Placer tous les certificats dans le magasin suivant (Autorités de certification racines de confiance)

npm install
npm start

## SERVER

mvn install -DskipTests
mvn package

Puis : 

java -jar target\covoit-0.1.1.jar