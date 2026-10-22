# Italiano Facile v1.5 — mise à jour automatique guidée

48 cours A1–C2 et fonctionnalités de la v1.4 conservés.

## Mise à jour du site
Importez les fichiers à la racine du même dépôt GitHub. L’application vérifie le Service Worker lors de l’ouverture et du retour à l’onglet, puis affiche un bandeau quand une nouvelle version est installée en attente. L’apprenant peut cliquer sur « Mettre à jour ».

Le cache d’éléments statiques passe à `italiano-facile-v1.5-static`. Les anciens caches de cette application sont supprimés à l’activation, sans toucher à `localStorage` qui conserve les XP, leçons, scores et révisions.

Pour les *futures* versions, changer la valeur `CACHE` dans `sw.js` à chaque déploiement modifiant des ressources.

Remarque : lors de la toute première migration depuis la v1.4, certains anciens navigateurs peuvent encore avoir besoin d’un rechargement avant que le nouveau système de mise à jour prenne le relais.
