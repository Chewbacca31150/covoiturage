# VROUM VROUM

## ACCEDER A L'APPLICATION

 ``https://localhost:4300``

Pour tester : 

USER
* username : user
* password : user

ADMIN
* username : admin
* password : admin

## DESCRIPTION

Cette application est une application de covoiturage.
Features : 
- Création, modification, remove user
- Connexion, déconnexion
- Ajout de préférences d'un utilisateur
- Lister ses trajets
- Ajout d'un trajet (on peut utiliser notre localisation pour le trajet départ et/ou arrivée)
- Ajout d'un passager à un trajet
- Accepter ou refuser un passager à un trajet (en fonction du nombre max de places)
- Recherche d'un trajet : en fonction des préférences, tous les trajets, en fonction de la distance
- Système de chat avec notifications pour un trajet (passagers et conducteur)


## AU PREALABLE

ADD CERTIF pour éviter les refresh intempestifs sur chrome :
Dans le dossier ./covoiturage-client/ssl, ajouter le certificat certificat.crt dans : Ordinateur Local
Ensuite : Placer tous les certificats dans le magasin suivant (Autorités de certification racines de confiance)

## LANCEMENT DE L'APPLICATION...

### SERVEUR

Un jar a été compilé et est dans le dossier parent, il contient le serveur.
Pour lancer le serveur, faire ``java -jar covoiturage-server-0.1.1.jar``

### CLIENT

DOSSIER : covoiturage-client

Si vous n'avez pas node, un dossier node est présent dans le client.

``npm install``
``npm start``

Ensuite, accéder à l'applicaition en allant sur un navigateur et en tapant ``https://localhost:4300``

## ERREUR SI LE SERVEUR NE FONCTIONNE PAS

DOSSIER : covoiturage-server

``mvn install``

``mvn package``

Puis : 

``java -jar target\covoit-0.1.1.jar``
