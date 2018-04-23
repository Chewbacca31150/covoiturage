# COVOIT

## ACCEDER A L'APPLICATION

https://localhost:4300

## AU PREALABLE

ADD CERTIF pour éviter les refresh intempestifs :
Dans le dossier ssl, ajouter le certificat certificat.crt dans : Ordinateur Local
Ensuite : Placer tous les certificats dans le magasin suivant (Autorités de certification racines de confiance)

## JAR

Un jar a été compilé et est dans le dossier parent.
Pour lancer l'application, faire ``java -jar covoit-0.1.1.jar``
Si l'application ne peut se lancer, suivre les instructions plus bas...

## STEP 1 : BUILD l'application entière

mvn install .\pom.xml

## CLIENT

DOSSIER : covoiturage-client

npm install
npm start

## SERVER

DOSSIER : covoiturage-server

java -jar covoit-0.1.1.jar

mvn install -DskipTests
mvn package

Puis : 

java -jar target\covoit-0.1.1.jar