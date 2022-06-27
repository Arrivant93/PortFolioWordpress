<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'portfolio_de_mouhamed_zeboudj' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jYxI>[]1Ne2[LC63tZ)g^B5B1WQrp)qYNbAo!+{Mw5g++`b{K$5(Bo1=~UxpPyZ7' );
define( 'SECURE_AUTH_KEY',  '}LZi%)marqbep$gYW6GPL.pHz{U}F_!]d7E1H<(,9:PoBV$>{8rSaW%)0JXJEQje' );
define( 'LOGGED_IN_KEY',    'c;C$8oZEYYCJ(.Z@s-X^UXK&*69kMv)CLWK,~.cx8[o+;~X$xK`UQj6w5P!Pk+BR' );
define( 'NONCE_KEY',        'M^0#o.?=J,}%w`sdwj/1U`v8fq! w$A6[WQK$q^x~MNrgrQ^jvf&IQXg5=_=Hj6t' );
define( 'AUTH_SALT',        '#L5{Th<{72+>q)2Dt7?k3f>mHEm-(U+Q9SbSk%2{/0T@`]<owVn}.A}x Np>v)~I' );
define( 'SECURE_AUTH_SALT', 'wIj3Z(FS|EM^{kn=E%_/YgqO0z1^9+&^!@ORDn]TTPiZ2IxW|?dV07hd$KZc`p}7' );
define( 'LOGGED_IN_SALT',   'M5H&9RC1S_@~L;fvWWqV1LcB;5afu`c+i^liB!`{vb54]Z^#`4k&Na|-O&ujw]J_' );
define( 'NONCE_SALT',       'A(qJk<$nO7gFp4K#YneH<aX9_C!qMm3^sT{*r#LOg^tEwyOO/5|YEKcwDeODru7q' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
