-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: webapi_project_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.5-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dogs`
--

DROP TABLE IF EXISTS `dogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dogs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `birthday` date NOT NULL,
  `shelter` int(10) unsigned NOT NULL,
  `chip_id` varchar(256) NOT NULL,
  `img` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogs`
--

LOCK TABLES `dogs` WRITE;
/*!40000 ALTER TABLE `dogs` DISABLE KEYS */;
INSERT INTO `dogs` VALUES (5,'Hasky321','LUCKY123','2022-02-24',2,'34534534124','dog-img-e74cb4eb-1080-48e0-8d47-b9207fe89a66.gif'),(6,'Tang dog','BRUCE','2022-05-24',1,'453445345',NULL),(9,'Hasky','CHARLIE','2022-01-24',2,'345345',NULL),(11,'Tang dog','BRUCE','2021-02-24',2,'3453453',NULL),(12,'Tang dog','LUCKY','2020-05-24',1,'54345345',NULL),(13,'Hasky','BRUCE','2022-05-14',1,'54345345',NULL),(14,'Tang dog','CHARLIE','2020-05-24',1,'453453453',NULL),(15,'Tang dog','BRUCE','2018-05-24',2,'5345345',NULL),(16,'Tang dog','ROCKY','2022-05-10',1,'378278728',NULL),(17,'Tang dog','BRUCE','2021-05-24',1,'45345387387',NULL),(18,'Hasky','BRUCE','2021-05-24',1,'278278',NULL),(19,'Tang dog','ROCKY','2021-05-24',2,'2782782',NULL),(20,'Tang dog','BRUCE','2022-05-10',1,'27827827',NULL),(21,'Tang dog','CHARLIE','2022-05-10',1,'7827837837',NULL),(22,'Tang dog','LUCKY','2021-05-24',2,'7287827',NULL),(23,'Tang dog','ROCKY','2021-05-24',1,'783782827',NULL),(24,'Hasky','CHARLIE','2021-05-24',1,'78378378378',NULL),(25,'Tang dog','LUCKY','2022-05-24',2,'8727827837',NULL),(26,'Hasky','CHARLIE','2022-05-10',1,'728278273',NULL),(27,'Tang dog','ROCKY','2022-05-24',1,'28727278',NULL),(28,'Tang dog','LUCKY','2022-05-24',2,'4834834',NULL),(29,'Tang dog','ROCKY','2022-05-21',1,'37837837',NULL),(30,'Tang dog','CHARLIE','2022-05-21',1,'27837',NULL),(31,'Hasky','BRUCE','2022-05-21',2,'48348348',NULL),(32,'Tang dog','ROCKY','2022-05-21',1,'453453',NULL),(33,'Tang dog','CHARLIE','2022-05-21',1,'82782',NULL),(34,'Hasky','LUCKY','2022-05-21',1,'8737827',NULL),(35,'Tang dog','BRUCE','2022-05-21',2,'873378',NULL),(36,'Tang dog','ROCKY','2022-05-24',1,'453453455',NULL),(37,'Tang dog','LUCKY','2022-05-24',1,'78378345',NULL),(38,'Tang dog','BRUCE','2022-05-21',2,'4545378',NULL),(39,'Tang dog','CHARLIE','2022-05-21',1,'783745345',NULL),(40,'Hasky','BRUCE','2022-05-21',1,'783783453',NULL),(41,'Tang dog','CHARLIE','2022-05-21',1,'873783453',NULL),(42,'Tang dog','ROCKY','2022-05-21',2,'4537837',NULL),(43,'Tang dog','BRUCE','2022-05-21',1,'7837453',NULL),(44,'Tang dog','LUCKY','2022-05-21',2,'3873453',NULL),(45,'Hasky','CHARLIE','2022-05-21',1,'45345378',NULL),(46,'Tang dog','BRUCE','2022-05-21',1,'4375837',NULL),(47,'Tang dog','ROCKY','2022-05-24',1,'78345378',NULL),(48,'Tang dog','LUCKY','2022-05-24',2,'78378343',NULL),(49,'Hasky','CHARLIE','2022-05-10',1,'78378378',NULL),(50,'Tang dog','LUCKY','2022-05-10',2,'7834538',NULL),(51,'Tang dog','BRUCE','2022-05-10',1,'3845',NULL),(52,'Tang dog','ROCKY','2022-05-10',1,'78378378',NULL),(53,'Tang dog','BRUCE','2022-05-10',1,'7354',NULL),(54,'Hasky','CHARLIE','2022-05-10',1,'48375',NULL),(55,'Tang dog','BRUCE','2022-05-24',2,'45345',NULL),(56,'Tang dog','ROCKY','2022-05-24',2,'783783',NULL),(57,'Tang dog','CHARLIE','2022-05-24',1,'78387',NULL),(58,'Tang dog','BRUCE','2022-05-10',2,'78378',NULL),(59,'Tang dog','LUCKY','2022-05-10',1,'38737',NULL),(60,'Hasky','CHARLIE','2022-05-10',2,'37837',NULL),(61,'Tang dog','ROCKY','2022-05-24',1,'45378',NULL),(62,'Tang dog','ROCKY','2022-05-24',1,'78378387',NULL),(63,'Test type','Test name','2022-05-24',1,'21412412312','dog-img-a8c98514-efaf-46ea-8549-a6d0262ddf33.jpg'),(64,'Test type','Test name','2022-05-24',1,'21412412312','dog-img-0f0fc6c8-7a08-4ed8-a1c0-af3afd8e3bc9.jpg'),(65,'Test type','Test name','2022-05-24',1,'2141241224','dog-img-1c4f5c13-b049-469e-90cd-cd29d5e7c4c8.jpg'),(66,'Test type','Test name','2022-05-24',1,'2141241231241','dog-img-73240048-01f6-4ac7-989b-f1692060c917.jpg'),(67,'Test type','Test name','2022-05-24',1,'2141241231223','dog-img-a1061b4d-b556-45e9-af55-11fdd9aa9d9f.jpg'),(68,'Test type','Test name','2022-05-24',1,'21412412312',NULL),(69,'Test type','Test name','2022-05-24',2,'2141241231231',NULL),(70,'awfawfaw42141','awfawfaw412412','2022-05-04',2,'12412412412','dog-img-ec8bc592-9b40-4fe2-a0bc-b9b56383c34b.png'),(71,'Test type 1','Test name 1','2022-05-24',1,'2141241231213','dog-img-6ee117fe-ea81-4d3d-992e-2c79ddb2f675.jpg'),(72,'Test type','Test name','2022-05-27',1,'21412412231321',NULL),(73,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(74,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(75,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(76,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(77,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(78,'Test type','Test name','2022-05-27',1,'2141241231223123',NULL),(79,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(80,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(81,'Test type','Test name','2022-05-27',1,'21412412312',NULL),(82,'Test type','Test name','2022-05-28',1,'21412412312',NULL),(83,'Test type','Test name','2022-05-28',1,'21412412312',NULL),(84,'Test type 12','Test name 12','2022-05-28',1,'12412412412','dog-img-223378b2-3d34-4d82-8f75-430de841d355.png'),(86,'Test type 24','Test name 24','2022-05-29',1,'21412412312','dog-img-b9edf1e3-4bc6-45a4-b3b3-a9eef5fabea5.jpg'),(88,'stbernard','test','2022-05-31',2,'2411251','dog-img-06971d31-3f6f-41ca-be75-d7a9b1ad65e7.jpg');
/*!40000 ALTER TABLE `dogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorites` (
  `user` int(10) unsigned NOT NULL,
  `dog` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user`,`dog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (15,88);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `user` int(10) unsigned NOT NULL,
  `sender` int(10) unsigned NOT NULL,
  `msg_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  `msg` varchar(4096) NOT NULL,
  `id` varchar(128) NOT NULL,
  PRIMARY KEY (`user`,`sender`,`msg_datetime`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (9,1,'2022-05-27 03:37:15','hi','7caaafe6-7aed-4a6d-91d8-c675dd6891e3'),(9,1,'2022-05-27 03:38:10','456','07e9c935-4165-4f13-b2cd-cdb3f7b634d6'),(9,1,'2022-05-27 03:41:10','awffwawfwf','ac711a40-c89f-48d4-8fa3-b0941f15892c'),(9,1,'2022-05-27 03:41:11','agwawgagwe','8e1b8ae4-084f-48e5-a249-59d8fb964bbd'),(9,1,'2022-05-29 03:48:56','yoyo','44560dd5-7163-4ba8-946c-5cd850b8887c'),(9,1,'2022-05-29 03:53:42','yoyoyoyo','873b25b6-05b6-4a3a-a739-7d9aa7ddddde'),(9,1,'2022-05-29 04:08:18','agwagaw','72f29f06-c355-4ab9-9c03-19387d369864'),(9,1,'2022-05-29 04:10:16','yoyo','09dbee9f-f4a9-46dc-9a74-47cf88706f1b'),(9,9,'2022-05-27 03:37:10','hi','d355689f-a440-4b55-88bd-3b8701db26ed'),(9,9,'2022-05-27 03:38:04','bye','fa593ef3-18bd-4762-b18e-0f94d125b446'),(9,9,'2022-05-27 03:38:06','123','e0c86749-a2b6-45c1-8765-436692f2abd3'),(9,9,'2022-05-27 03:41:21','sgsegsegsehtjtr','71d50d96-9cc8-496e-8541-6a26d084eb81'),(9,9,'2022-05-29 03:53:33','yoyoyo','ca323653-a6dd-4b42-abee-f9e6bd2c0e5f'),(9,9,'2022-05-29 04:10:47','gyckgyk','f44e7f35-2e9e-4360-a53d-c335eaef671a'),(15,1,'2022-05-31 04:34:33','LOL','2e451534-f123-4f3a-b85a-9b0b6eb4fdbe'),(15,1,'2022-05-31 04:34:53','byebye','6d845939-ffcb-47a3-bf4d-d5f20426d35e'),(15,15,'2022-05-31 04:35:00','byebye','0cbe5588-8ca8-4a61-884f-011471dd2e85');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelters`
--

DROP TABLE IF EXISTS `shelters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shelters` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `address` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelters`
--

LOCK TABLES `shelters` WRITE;
/*!40000 ALTER TABLE `shelters` DISABLE KEYS */;
INSERT INTO `shelters` VALUES (1,'Sai Kung Shelter','Sai Kung ABC 123'),(2,'Sha Tin Shelter','Sha Tin DEF 456'),(3,'test','test a');
/*!40000 ALTER TABLE `shelters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sign_up_code`
--

DROP TABLE IF EXISTS `sign_up_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sign_up_code` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(256) NOT NULL,
  `enable` int(11) NOT NULL DEFAULT 1 COMMENT '0 = false, 1 = true',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sign_up_code`
--

LOCK TABLES `sign_up_code` WRITE;
/*!40000 ALTER TABLE `sign_up_code` DISABLE KEYS */;
INSERT INTO `sign_up_code` VALUES (1,'admin',0),(2,'S217105400',1),(3,'abc',1),(4,'test',1),(5,'abcder',1),(6,'aaa',1);
/*!40000 ALTER TABLE `sign_up_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(256) NOT NULL,
  `pwd_hash` varchar(256) NOT NULL,
  `salt` varchar(256) NOT NULL,
  `type` int(11) NOT NULL DEFAULT 2 COMMENT '0 = admin, 1 = workers, 2 = public',
  `sign_up_code` int(10) unsigned DEFAULT NULL,
  `google_oauth_id` varchar(128) DEFAULT NULL,
  `google_oauth_email` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','cdf9c4b5cdaa9be28dd1a35b859553a04a1eb1cc331fac3d7daaf9ec1fc5b4f05e2a70033984128fb917b3988a315a2c7157c86d9c84e9cebf3431f8538896d5','awofinAWFnklokn2qrnionaf2inf@RFNQniao2ffw@gfwag3#$GASF#',0,0,'105603785615601681223','yutinglia@gmail.com'),(7,'staff','fe4a9b540e07173da6f51c5815f19d7f9fe62292f98965820856a857b15035b890f6ac7364d3625da6b29f1ca70a4e250702bfc1c4538c8f89d281860bf1f4dc','441560c783938839bc339b7f094fd657965c9bad820c4c358341b85bb299c58e3b1bef809f29fd599f4c5c5657eae30001952d5fc497a9dbfde6b9ed4202',1,2,NULL,NULL),(9,'test','2a5c06379aa11df001a38627fb7b327b1eb740c36fa9f98b3c1d00539c0b4568903dfd58913fac1808fb32ff7dd5e39f2949e6a6a0603a601a57c71802ff1c65','7d19120249afcbfb098eb9acf7d1c2ec9e243f54bda97cdd2b967efd3b6b54ccf550202ce5eb343ff622a504',2,NULL,NULL,NULL),(14,'public1','d88885b271ef9e983101332eceb8c708df1266bdca17147f3f276b2f619030fb3e5e9505c6e51fbe98b1b3c8ac4b49d7c678eb7faee52321c9761440b8ff978a','5e7db714aa8e0818eac4855625b2cbb121f6a19980654b2622e60ed069ce4ae291727bce79470114e1ccec622ea1f68b3ca7d2',2,NULL,NULL,NULL),(15,'test2','2f4f0c76a98f80d97e672ee33b793ab1952807d491a0f93e75e308684a7c41da9822f4c5f37de7da46fdbf77a41219cc5199503f81c4100b1410568ef30bb2df','1d6cc52d8584670d3255e2d12ff01a1df3be3eda5658fbff274a8fe071bd8f8d9f5f77e8e985e9f120b0e673b611c97f56ef7912b478',2,NULL,NULL,NULL),(16,'staff2','440cbe04841efcf8351abcc4cd2e85f6fd99a18d19d95b3362d2acead5b2049fee372ca4983b8326377f7719f845f6e17e94b3b24f9d0e624fadb69ef9dc882e','554a7b53d9ebbf211834e83c361a99c965f261d9b98339c3e743170ae40ef0f4517724eb9d7bc7af37f0d70c1e1ed3a44f',1,6,'113076508438327811761','yutingliahome@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'webapi_project_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31  9:30:31
