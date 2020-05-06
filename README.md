Clone the project into local
Go into the wallpaperApp folder and run the following command to install all npm packages
##npm install 
Go into the backendAPI folder and run the following command to install all npm packages
##npm install 
In order to run the application run the following command in backendAPI folder
##npm start
The Application will Runs on localhost:3000
In order to run the application run the following command in wallpaperApp folder
##npm start
The Application will Runs on localhost:3001

##create the database in mysql
database name:test

make table signup using query

Create table `signup`(
   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
   `email` longtext CHARACTER SET ascii COLLATE ascii_bin,
   `password` longtext CHARACTER SET ascii COLLATE ascii_bin,
   `name` longtext CHARACTER SET ascii COLLATE ascii_bin,
   PRIMARY KEY (`id`)
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 make images signup using query
 
 Create table `images`(
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
   `author` longtext CHARACTER SET ascii COLLATE ascii_bin,
   `width` int(11) unsigned DEFAULT NULL,
   `height` int(11) unsigned DEFAULT NULL,
   `url` longtext CHARACTER SET ascii COLLATE ascii_bin,
   `download_url` longtext CHARACTER SET ascii COLLATE ascii_bin,
     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 
 



