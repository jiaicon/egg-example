/*
Navicat MySQL Data Transfer

Source Server         : 192.168.199.155
Source Server Version : 50734
Source Host           : 192.168.199.155:3306
Source Database       : gis-v2

Target Server Type    : MYSQL
Target Server Version : 50734
File Encoding         : 65001

Date: 2021-06-08 09:33:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL DEFAULT '5',
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`userName`) USING BTREE,
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `userName_2` (`userName`),
  UNIQUE KEY `userName_3` (`userName`),
  UNIQUE KEY `userName_4` (`userName`),
  UNIQUE KEY `userName_5` (`userName`),
  UNIQUE KEY `userName_6` (`userName`),
  UNIQUE KEY `userName_7` (`userName`),
  UNIQUE KEY `userName_8` (`userName`),
  UNIQUE KEY `userName_9` (`userName`),
  UNIQUE KEY `userName_10` (`userName`),
  UNIQUE KEY `userName_11` (`userName`),
  UNIQUE KEY `userName_12` (`userName`),
  UNIQUE KEY `userName_13` (`userName`),
  UNIQUE KEY `userName_14` (`userName`),
  UNIQUE KEY `userName_15` (`userName`),
  UNIQUE KEY `userName_16` (`userName`),
  UNIQUE KEY `userName_17` (`userName`),
  UNIQUE KEY `userName_18` (`userName`),
  UNIQUE KEY `userName_19` (`userName`),
  UNIQUE KEY `userName_20` (`userName`),
  UNIQUE KEY `userName_21` (`userName`),
  UNIQUE KEY `userName_22` (`userName`),
  UNIQUE KEY `userName_23` (`userName`),
  UNIQUE KEY `userName_24` (`userName`),
  UNIQUE KEY `userName_25` (`userName`),
  UNIQUE KEY `userName_26` (`userName`),
  UNIQUE KEY `userName_27` (`userName`),
  UNIQUE KEY `userName_28` (`userName`),
  UNIQUE KEY `userName_29` (`userName`),
  UNIQUE KEY `userName_30` (`userName`),
  UNIQUE KEY `userName_31` (`userName`),
  UNIQUE KEY `userName_32` (`userName`),
  UNIQUE KEY `userName_33` (`userName`),
  UNIQUE KEY `userName_34` (`userName`),
  UNIQUE KEY `userName_35` (`userName`),
  UNIQUE KEY `userName_36` (`userName`),
  UNIQUE KEY `userName_37` (`userName`),
  UNIQUE KEY `userName_38` (`userName`),
  UNIQUE KEY `userName_39` (`userName`),
  UNIQUE KEY `userName_40` (`userName`),
  UNIQUE KEY `userName_41` (`userName`),
  UNIQUE KEY `userName_42` (`userName`),
  UNIQUE KEY `userName_43` (`userName`),
  UNIQUE KEY `userName_44` (`userName`),
  UNIQUE KEY `userName_45` (`userName`),
  UNIQUE KEY `userName_46` (`userName`),
  UNIQUE KEY `userName_47` (`userName`),
  UNIQUE KEY `userName_48` (`userName`),
  UNIQUE KEY `userName_49` (`userName`),
  UNIQUE KEY `userName_50` (`userName`),
  UNIQUE KEY `userName_51` (`userName`),
  UNIQUE KEY `userName_52` (`userName`),
  UNIQUE KEY `userName_53` (`userName`),
  UNIQUE KEY `userName_54` (`userName`),
  UNIQUE KEY `userName_55` (`userName`),
  UNIQUE KEY `userName_56` (`userName`),
  UNIQUE KEY `userName_57` (`userName`),
  UNIQUE KEY `userName_58` (`userName`),
  UNIQUE KEY `userName_59` (`userName`),
  UNIQUE KEY `userName_60` (`userName`),
  UNIQUE KEY `userName_61` (`userName`),
  UNIQUE KEY `userName_62` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '5', 'admin', '4297f44b13955235245b2497399d7a93', '123', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiaWF0IjoxNjIyNTM1Mjc4LCJleHAiOjE2MjI2MjE2Nzh9.RpT0X7Y2Hs6fVinAROoSb6Eqj3WKELAqdmAyZ-7DS3A', null, null, '2021-06-01 16:14:38');
INSERT INTO `users` VALUES ('2', '5', 'admin1', '123', '123', null, null, null, '2021-03-12 10:23:00');
INSERT INTO `users` VALUES ('8', '5', 'admin2', '4297f44b13955235245b2497399d7a93', '2222', null, null, '2021-06-01 16:25:25', '2021-06-01 16:25:25');
INSERT INTO `users` VALUES ('10', '5', 'admin3', 'fcea920f7412b5da7be0cf42b8c93759', '15603806990', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluMyIsImlhdCI6MTYyMzExNTg0NCwiZXhwIjoxNjIzMjAyMjQ0fQ.qf020JBhNc8-IfU_n1baRNnWiLQTLdOPHFpbMoDtBAk', null, '2021-06-01 16:28:57', '2021-06-08 09:30:44');
INSERT INTO `users` VALUES ('11', '5', 'admin4', '196cde68a5791e27b45d2712da66939c', '2222', null, null, '2021-06-01 16:43:02', '2021-06-01 16:43:02');
