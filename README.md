# Italiano Facile v1.7 — envoi d’avis et mises à jour

- 48 cours A1–C2, exercices, niveaux et progression de la v1.6 préservés.
- Envoi d’avis directement à Formspree (`https://formspree.io/f/xbgdnvrd`). Champ e-mail facultatif. Le navigateur envoie uniquement le type d’avis, le message et l’éventuel e-mail fourni ; aucun score ni donnée de progression n’est envoyé.
- Confirmation de réussite uniquement si Formspree confirme la réception ; en cas d’échec, message d’erreur et possibilité de copier l’avis.
- Service Worker v1.7 : navigation en réseau prioritaire puis hors-ligne, mise en cache de la page HTML mise à jour et suppression des caches statiques plus anciens.

## Déploiement
Décompresser le ZIP et téléverser **les 6 fichiers** à la racine du dépôt GitHub existant. Valider le commit. Le site reste accessible à `https://frank91-lang.github.io/italiano-facile/`.

## Tests requis
1. Actualiser le site, puis ouvrir Paramètres > Donner ton avis.
2. Envoyer un court message de test ; vérifier sa présence dans **Formspree > Soumissions**, et l’e-mail de notification (à configurer dans Formspree).
3. Simuler une déconnexion et vérifier le cours hors ligne après première visite.
4. Vérifier scores et leçons. Les tests de réseau externe Formspree ne peuvent pas être exécutés depuis cet environnement.

Note : une version déjà ouverte peut afficher une ancienne interface jusqu’au prochain contrôle du Service Worker ou rechargement. Ne jamais effacer les données du site sans exporter la progression.
