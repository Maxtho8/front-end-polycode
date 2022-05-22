# POLYCODE

Polycode est un projet réalisé dans le cadre de ma formation DevOps à Polytech Montpellier

# Front End 

## Technologies utilisées    

### React

Le front est réalisé avec le framework React. 

En cours nous avons eu l'occasion d'essayer les deux plus gros concurrents de React , Vue et Angular. D'un  point de vue plus personnel, je trouve le JSX très pratique. 



### React - Router


Router est utilisé dans le fichier App.js ou toutes les routes sont définies. Mon choix c'est porté sur ce module car il est simple d'utilisation et c'est aussi le plus populaire.


### Material-UI
 
Mon choix c'est porté sur cette library car elle est très populaire , et permet un énorme gain de temps avec des composants déja stylisés.

Le front-end utilise beaucoup MUI puisqu'il est composé en majorité de Grid et de Container qui permettent d'adapter la page à toutes les dimensions.
J'utilise aussi les thèmes qui permettent de styliser tout les composants MUI avec des attributs commun.

### Axios 

Pour les requêtes à l'API j'ai choisis Axios car c'est un client HTTP puissant basé sur les promesses. De plus j'ai déjà eu l'occasion de l'utiliser lors de la réalisation du Pokédex

### MUI to Markdown

Permet de convertir le markdown en élément MUI

## Pages disponibles





| Path   |      Description      |
|----------|:-------------:|
| /|  Landing page |
| /home |    Page d'acceuil avec tout les challenges   |
| /challenge/:id | Editeur de code pour le challenge | 
| /auth/login | Page de connexion | 
| /auth/register | Page d'inscription | 

## Editeur de code

![img](https://i.ibb.co/sygT06n/image.png)

En haut en droite la consigne du challenge en markdown. Juste en dessous les tests à réussir pour valider le challenge
La console permet d'avoir un retour sur l'exécution du programme.


# API 

https://github.com/Maxtho8/polycode-api


# Infrastructure

### Postgres


Pour la base de donnée de données j'ai choisi Postgres (conteneurisé) ce qui me permet de déployer rapidement plusieurs instances. 

Le mode relationnel est plus adapté pour la gestion d'utilisateur, cependant je voulais aussi mettre en place une base NoSQL pour garder une trace des exécutions 

### Watchtower

J'utilise Watchtower qui regarde toutes les 5 minutes si une nouvelle version de l'image de l'API est disponible, si oui il relance un nouveau container.

### Nginx

NGINX est configuré en tant que reverse proxy. 

Il me permet de rediriger une requête vers un certain port.
Par exemple api.polycode.xyz redirige vers le port 3000 et runner.polycode.xyz vers le port 3001

### S3
Pour servir les fichiers statiques comme les images ou les fichiers markdown , j'utilise un bucket S3 qui a un accès publique


# Runners

https://github.com/Maxtho8/runner-polycode

# Post mortem


## Points negatifs

Je n'ai pas terminé le projet et les consignes demandées à cause du mauvaise gestion du temps.
J'ai passé beaucoup trop de temps sur le runner à vouloir m'obstiner à faire tourner mon code dans un container alors qu'une simple exécution en ligne de commande aurait suffit. 
De plus j'ai perdu beaucoup de temps sur l'API avec NestJS car c'était la première fois que je l'utilisais. Un bug dépedance circulaire m'a bloqué presque 2 jours .par exemple...
Je voulais mettre une deuxième base de donnée NoSQL pour garder un historique d'éxécution du code.  
Au final il manque beaucoup de fonctionnalités : 

- la confirmation par mail 
- la validation du challenge après réussite
- historique de consultation des challenges


## Points positifs

Cependant même si le rendu final n'est pas celui attendu je suis quand même très satisfait du résultat d'un point de vue technique. J'ai vu et appris énormément de chose comme la gestion de flux et de containers en node.  
 J'ai pu mettre en place une CI/CD et watchtower que n'avais jamais utilisé. 
Même si j'ai eu beaucoup de difficultés au départ avec Nest il m'a permis un énorme gain de temps à la fin.

Pour conclure je peux dire que j'ai ressenti une grande évolution d'un point de vue technique, cependant il faut toujours que j'apprenne à gérer mon temps.

