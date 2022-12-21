# FraZaya DM All
### Version 1.1
- ##### Plusieurs **centaines** de membres par minute !
- ##### Une interface **facile** d'utilisation !
- ##### *FraZaYa#9999* pour des questions !


## Sommaire
- ### [Prérequis](#Prérequis nécessaires)
- ### [Tutoriel](#Tuto)
- ### [Commandes](#Commandes du bot)
- ### [ID](#Obtenir ID)


## Prérequis nécessaires
- ### [Visual Studio Code](https://code.visualstudio.com)


## Tuto
- #### Tout d'abord, télécharger le code grâce au bouton `<> Code` puis `Download ZIP`
- #### Une fois le code téléchargé,
	- ##### Extrayez-le à l'aide de Windows, Winrar, 7Zip...
	- ##### Lancez le fichier `installer.bat` qui va installer les modules nécessaires au fonctionnement du programme.
	
- #### Il faut ensuite vous créer un bot Discord grâce à [Discord Developpers](https://discord.com/developers/applications).
	- ##### Sur le lien, connectez vous si besoin et cliquez sur le bouton `New Application`.
	- ##### Définissez un nom au bot et acceptez les [TOS Dév.](https://discord.com/developers/docs/policies-and-agreements/developer-terms-of-service) de discord.
	- ##### Sur le menu latéral, allez sur `Bot`et cliquez sur `Add Bot` puis `Yes, do it`.
	- ##### Ensuite, désactivez l'option `Public bot` puis activez les 3 intents : `PRESENCE INTENT`, `SERVER MEMBERS INTENT` et `MESSAGE CONTENT INTENT`.
	- ##### Vous pouvez ensuite obtenir le **Token** du bot ( qui ne doit être partagé à personne ) en cliquant sur `Reset Token`.
	- ##### Retournez sur les fichiers du bot et ouvrez `params.json` à l'aide de [Visual Studio Code](https://code.visualstudio.com).
		- ##### Dans la partie `"token"`, insérez le votre entre les guillemets ou il y à `"TOKEN_HERE"`.
		- ##### Dans la partie `"server"` qui se trouve dans `"id"`, entrez l'ID du serveur ( [L'obtenir](#ID) ).
		- ##### Dans la partie `"user"` qui se trouve dans `"id"`, insérez votre ID Discord ( [L'obtenir](#ID) ).
		- ##### Dans la partie `"prefix"`, insérez un prefix des commandes.
- #### Vous pouvez ensuite lancer le fichier `start.bat` qui va éxécuter le programme.

## Commandes du bot
###### *Le prefix par défaut utilisé ici est `%`*
#### - `%check` : Vérifie si votre bot détecte bien le message
#### - `%start <message>` : Envoie le message ( envoyé après la commande ) à tout les membres du serveur.


## Obtenir ID
##### Pour obtenir votre ID Discord, 
- ##### Rendez vous dans vos paramètres, puis `Avancés` puis `Mode développeur`. 
- ##### Activez l'option.
- ##### Faites clic droit sur votre pseudo, `Copier l'ID`.

##### Pour obtenir l'ID d'un serveur, 
- ##### Rendez vous dans vos paramètres, puis `Avancés` puis `Mode développeur`. 
- ##### Activez l'option.
- ##### Faites clic droit sur votre serveur, `Copier l'ID`.
