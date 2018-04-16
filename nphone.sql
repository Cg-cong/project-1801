/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : nphone

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-16 10:44:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for denglu
-- ----------------------------
DROP TABLE IF EXISTS `denglu`;
CREATE TABLE `denglu` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of denglu
-- ----------------------------
INSERT INTO `denglu` VALUES ('1', 'username1', '123456', '1552232331', '999@qq.com', '00:00:00');
INSERT INTO `denglu` VALUES ('2', 'admin', '666666', '1561234561', '666@qq.com', null);
INSERT INTO `denglu` VALUES ('3', '123', '123456', '1781981088', '123@qq.com', null);
INSERT INTO `denglu` VALUES ('5', 'user666', 'e10adc3949ba59abbe56e057f20f883e', null, null, null);
INSERT INTO `denglu` VALUES ('4', 'qweq', '4297f44b13955235245b2497399d7a93', null, null, null);
INSERT INTO `denglu` VALUES ('7', '110', '324d1907d9ca6733d399b87affe48c74', null, null, null);
INSERT INTO `denglu` VALUES ('6', '666', 'f379eaf3c831b04de153469d1bec345e', null, null, null);
INSERT INTO `denglu` VALUES ('10', 'admin1', 'e00cf25ad42683b3df678c61f42c6bda', null, null, null);

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pingjia` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '../css/img/l_i8.jpg', 'iPhone 8（A1863）国行版', ' 深空灰色 【爆款特价】官网最高直降1100元！以旧换新最高再补贴200元！', '4780.00', '6154', '2017-10-23');
INSERT INTO `list` VALUES ('2', '../css/img/l_ix.jpg', 'iPhone X（A1865）国行版', ' 深空灰色 【爆款特价】官网直降600！超值特惠！', '7699.00', '12628', '2017-11-23');
INSERT INTO `list` VALUES ('3', '../css/img/l_i6.jpg', 'iPhone 6（A1586）国行版', 'iPhone 6（A1586）国行版金色 32GB 【爆款iPhone】32GB大内存特惠价！以旧换新最高再补贴200元！', '2099.00', '14895', '2016-08-16');
INSERT INTO `list` VALUES ('4', '../css/img/l_s9.jpg', '三星 Galaxy S9（SM-G9600） 全网通', '三星 Galaxy S9（SM-G9600） 全网通谜夜黑 4GB+64GB 【火热销售】购机选赠300元配件通用券！或选10期免息分期购机！', '5799.00', '88', '2018-03-09');
INSERT INTO `list` VALUES ('5', '../css/img/l_p20.jpg', '华为 P20 Pro（CLT-AL00） 全网通版', '华为 P20 Pro（CLT-AL00） 全网通版极光色 6GB+64GB 【国内4月12日发布】具体价格、规格、详情以国内发布为准', '6999.00', '250', '2018-04-05');
INSERT INTO `list` VALUES ('6', '../css/img/l_i8p.jpg', 'iPhone 8 Plus（A1864）国行版', 'iPhone 8 Plus（A1864）国行版金色 64GB 【爆款特价】官网最高直降1000元！以旧换新最高再补贴200元！', '5650.00', '10643', '2017-10-23');
INSERT INTO `list` VALUES ('7', '../css/img/l_3e.jpg', '华为nova 3e（ANE-AL00） 全网通版', ' 樱语粉 【高颜值爱自拍】5.8英寸全面屏，前置2400万自然美妆自拍，人脸识别', '1999.00', '119', '2017-07-11');
INSERT INTO `list` VALUES ('8', '../css/img/l_meta10.jpg', '华为 Mate10（ALP-AL00）全网通版', '华为 Mate10（ALP-AL00）全网通版亮黑色 4GB+64GB 【华为旗舰】进店购机享惊喜福利！或选10期免息分期购机！', '2899.00', '2373', '2018-01-17');
INSERT INTO `list` VALUES ('9', '../css/img/l_i6sp.jpg', 'iPhone 6s Plus（A1699）国行版', 'iPhone 6s Plus（A1699）国行版玫瑰金色 32GB 【大屏iPhone冰点价】官网直降千元低至3350元！以旧换新最高再补贴200元！', '3350.00', '10961', '2016-05-20');
INSERT INTO `list` VALUES ('10', '../css/img/l_hwry7x.jpg', '华为 荣耀畅玩7X（BND-AL00）全网通高配版', '华为 荣耀畅玩7X（BND-AL00）全网通高配版极光蓝 4GB+64GB 【爆款全面屏】5.93寸全面屏，多彩金属机身，面部识别解锁', '1520.00', '3708', '2017-08-09');
INSERT INTO `list` VALUES ('11', '../css/img/l_p20l.jpg', '华为 P20 （EML-AL00）全网通版', '华为 P20 （EML-AL00）全网通版亮黑色 6GB+64GB 【国内4月12日发布】具体价格、规格、详情以国内发布为准', '5999.00', '110', '2017-03-31');
INSERT INTO `list` VALUES ('12', '../css/img/l_hwryv10.jpg', '华为 荣耀V10（BKL-AL20） 全网通高配版', '华为 荣耀V10（BKL-AL20） 全网通高配版幻夜黑 6GB+64GB 【荣耀旗舰】麒麟970！AI芯片！人脸解锁！', '2650.00', '1906', '2017-12-25');
INSERT INTO `list` VALUES ('13', '../css/img/l_ix.jpg', 'iPhone X（A1865）国行版', ' 深空灰色 【爆款特价】官网直降600！超值特惠！', '7699.00', '12628', '2017-07-19');
INSERT INTO `list` VALUES ('14', '../css/img/l_i8p.jpg', 'iPhone 8 Plus（A1864）国行版', 'iPhone 8 Plus（A1864）国行版金色 64GB 【爆款特价】官网最高直降1000元！以旧换新最高再补贴200元！', '5650.00', '10643', '2017-08-02');
INSERT INTO `list` VALUES ('15', '../css/img/l_meta10.jpg', '华为 Mate10（ALP-AL00）全网通版', '华为 Mate10（ALP-AL00）全网通版亮黑色 4GB+64GB 【华为旗舰】进店购机享惊喜福利！或选10期免息分期购机！', '2899.00', '2373', '2016-07-13');
INSERT INTO `list` VALUES ('16', '../css/img/l_p20l.jpg', '华为 P20 （EML-AL00）全网通版', '华为 P20 （EML-AL00）全网通版亮黑色 6GB+64GB 【国内4月12日发布】具体价格、规格、详情以国内发布为准', '5999.00', '110', '2017-12-16');
INSERT INTO `list` VALUES ('17', '../css/img/l_s9.jpg', '三星 Galaxy S9（SM-G9600） 全网通', '三星 Galaxy S9（SM-G9600） 全网通谜夜黑 4GB+64GB 【火热销售】购机选赠300元配件通用券！或选10期免息分期购机！', '5799.00', '88', '2018-01-01');
INSERT INTO `list` VALUES ('18', '../css/img/l_i8p.jpg', 'iPhone 8 Plus（A1864）国行版', 'iPhone 8 Plus（A1864）国行版金色 64GB 【爆款特价】官网最高直降1000元！以旧换新最高再补贴200元！', '5650.00', '10643', '2017-11-13');
INSERT INTO `list` VALUES ('19', '../css/img/l_i6sp.jpg', 'iPhone 6s Plus（A1699）国行版', 'iPhone 6s Plus（A1699）国行版玫瑰金色 32GB 【大屏iPhone冰点价】官网直降千元低至3350元！以旧换新最高再补贴200元！', '3350.00', '10961', '2017-04-25');
INSERT INTO `list` VALUES ('20', '../css/img/l_hwryv10.jpg', '华为 荣耀V10（BKL-AL20） 全网通高配版', '华为 荣耀V10（BKL-AL20） 全网通高配版幻夜黑 6GB+64GB 【荣耀旗舰】麒麟970！AI芯片！人脸解锁！', '2650.00', '1906', '2018-07-20');

-- ----------------------------
-- Table structure for shouye
-- ----------------------------
DROP TABLE IF EXISTS `shouye`;
CREATE TABLE `shouye` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `jianjie` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '当前时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouye
-- ----------------------------
INSERT INTO `shouye` VALUES ('1', 'iPhone 6 全网通版', '爆款特价 火热销售', '2099.00', 'img/i6.jpg', '2018-04-10 20:02:47');
INSERT INTO `shouye` VALUES ('2', 'iPhone 8 Plus', '官网直降1000 现货立购', '5650.00', 'img/i8p.jpg', '2018-04-10 20:03:16');
INSERT INTO `shouye` VALUES ('3', '华为Mate10 Pro全网通', '卓越性能 强劲续航', '4899.00', 'img/hwm10.jpg', '2018-04-10 20:03:38');
INSERT INTO `shouye` VALUES ('4', '小米5X 全网通版', '光学变焦双摄', '1299.00', 'img/xm5x.jpg', '2018-04-10 20:04:04');
INSERT INTO `shouye` VALUES ('5', '小米MIX2', '全面旗舰 官网直降400', '3099.00', 'img/xmmix2.jpg', '2018-04-10 20:04:29');
INSERT INTO `shouye` VALUES ('6', '华为 Mate10 保时捷版', '限时抢购价  8688', '8999.00', 'img/hwm10bsj.jpg', '2018-04-10 20:04:50');
INSERT INTO `shouye` VALUES ('7', '荣耀7X 全网通高配版', '爆款全面屏 价低官网', '1520.00', 'img/ry7x.jpg', '2018-04-10 20:05:11');
INSERT INTO `shouye` VALUES ('8', '锤子坚果Pro 2', '野蛮性能 腼腆功耗', '2399.00', 'img/czjgpro2.jpg', '2018-04-10 20:05:33');

-- ----------------------------
-- Table structure for shouyetop
-- ----------------------------
DROP TABLE IF EXISTS `shouyetop`;
CREATE TABLE `shouyetop` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `jieshao` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `fenlei` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouyetop
-- ----------------------------
INSERT INTO `shouyetop` VALUES ('1', '三星 Galaxy S9 全网通', '凝时拍摄 动态萌拍', 'img/mc_sxs9.jpg', 'phone');
INSERT INTO `shouyetop` VALUES ('2', 'iPhone 8', '无线充电 A11芯片', 'img/mc_i8.jpg', 'phone');
INSERT INTO `shouyetop` VALUES ('3', '华为 Mate10 全网通', '卓越性能 强劲续航', 'img/mc_hwm10.jpg', 'phone');
INSERT INTO `shouyetop` VALUES ('4', 'iMac 21.5英寸', '酷睿i5 流畅商务', 'img/mc_im21.5.jpg', 'computer');
INSERT INTO `shouyetop` VALUES ('5', 'AOC 23.6英寸曲面显示器', '超值曲面', 'img/mc_AOC23.6.jp', 'computer');
INSERT INTO `shouyetop` VALUES ('6', '戴尔 新游匣7567', '十系显卡 畅爽游戏', 'img/mc_7567.jpg', 'computer');
INSERT INTO `shouyetop` VALUES ('7', '华米手表2', '支持支付宝 听歌', 'img/mc_hmsb2.jpg', 'shuma');
INSERT INTO `shouyetop` VALUES ('8', '飞利浦 电动剃须刀', '浮动刀头 全身水洗', 'img/mc_flp.jpg', 'shuma');
INSERT INTO `shouyetop` VALUES ('9', '大疆 “御”Mavic Air', '便携折叠 4K拍摄', 'img/mc_MA.jpg', 'shuma');
SET FOREIGN_KEY_CHECKS=1;
