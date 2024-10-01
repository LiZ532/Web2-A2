
//Client-side website
CREATE DATABASE IF NOT EXISTS `crowdfunding_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;


DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `fundraiser_id` int(11) NOT NULL AUTO_INCREMENT,
  `organizer` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组织者',
  `caption` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `target_funding` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '目标资金',
  `current_funding` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '当前\r\n资金',
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '城市',
  `active` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '活动0是1否',
  `category_id` int(11) NULL DEFAULT NULL COMMENT '类别id',
  `image` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '募捐图片',
  PRIMARY KEY (`fundraiser_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;


INSERT INTO `fundraiser` VALUES (6, 'Corneby and Titmus Family and Friends and Rob Corneby  is organizing this fundraiser', 'Help a Family in Need on their Journey to Healing', '100,000', '176,465', 'Los Angeles', '0', 1, 'smcase6.png');
INSERT INTO `fundraiser` VALUES (7, 'Claudia Elsässer is organizing  is organizing this fundraiser', 'Plötzlicher Tod des Familienvaters', '60,000', '50,075', 'Los Angeles', '0', 1, 'smcase7.png');
INSERT INTO `fundraiser` VALUES (8, 'OC Firefighters Local 3631  is organizing this fundraiser', 'Fundraiser for OCFA Handcrew', '500,000', '223,782', 'Chicago', '1', 1, 'smcase1.png');
INSERT INTO `fundraiser` VALUES (10, 'Toni Ocallaghan  is organizing this fundraiser', 'Saving Jay', '250,000', '29,695', 'Los Angeles', '1', 2, 'smcase2.png');
INSERT INTO `fundraiser` VALUES (11, 'Roxanne De Groof  is organizing this fundraiser', 'Help mij het leven nog wat langer te vieren.', '95,000', '112,785', 'Los Angeles', '0', 3, 'smcase4.png');
INSERT INTO `fundraiser` VALUES (12, 'Nico Pellatz  is organizing this fundraiser', 'Neustart für Berkin', '2,000,000', '259,928', 'Seattle', '1', 1, 'smcase3.png');

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称',
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;


INSERT INTO `category` VALUES (1, 'Medical');
INSERT INTO `category` VALUES (2, 'Memorial');
INSERT INTO `category` VALUES (3, 'Family');