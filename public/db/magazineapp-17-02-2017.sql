-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 17, 2017 at 06:46 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.6.23-1+deprecated+dontuse+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `magazineapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `action_log`
--

CREATE TABLE IF NOT EXISTS `action_log` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `action` text,
  `user_id` int(99) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `action_log`
--

INSERT INTO `action_log` (`id`, `action`, `user_id`, `created_at`) VALUES
(1, 'testing history', 1, '2017-01-16 11:05:59'),
(2, 'Creating User developer editor', 1, '2017-01-16 11:19:54'),
(3, 'Creating User testing supervisor position editor', 1, '2017-01-16 11:22:14'),
(4, 'Remove User  position ', 1, '2017-01-16 16:49:17'),
(5, 'Remove User aa', 1, '2017-01-16 16:51:32'),
(6, 'Remove User aabc', 1, '2017-01-16 16:56:01'),
(7, 'Remove User aa', 1, '2017-01-16 16:57:03'),
(8, 'Remove User aabc', 1, '2017-01-16 16:57:08'),
(9, 'Remove User test', 1, '2017-01-16 17:00:14'),
(10, 'Change User testing supervisor Password', 1, '2017-01-16 17:33:22'),
(11, 'Change User developer editor Password', 1, '2017-01-16 17:33:48'),
(12, 'Change User developer editor Password', 1, '2017-01-16 17:34:24'),
(13, 'Change User developer editor Password', 1, '2017-01-16 17:34:31'),
(14, 'Change User developer editor Password', 1, '2017-01-16 17:35:19'),
(15, 'Change User developer editor Password', 1, '2017-01-16 17:35:37'),
(16, 'Change User testing supervisor position to supervisor', 1, '2017-01-17 11:25:13'),
(17, 'Change User testing supervisor position to leader', 1, '2017-01-17 11:25:48'),
(18, 'Change User testing supervisor position to supervisor', 1, '2017-01-17 11:25:54'),
(19, 'Change User developer editor position to ', 1, '2017-01-17 11:33:09'),
(20, 'Change User developer editor position to ', 1, '2017-01-17 11:33:14'),
(21, 'Change User developer editor position to editor', 1, '2017-01-17 11:34:44'),
(22, 'Change User developer editor position to ', 1, '2017-01-17 11:34:47'),
(23, 'Change User developer editor position to editor', 1, '2017-01-17 11:36:35'),
(24, 'Change User developer editor position to ', 1, '2017-01-17 11:36:39'),
(25, 'Change User developer editor position to ', 1, '2017-01-17 11:37:25'),
(26, 'Change User developer editor position to editor', 1, '2017-01-17 11:39:14'),
(27, 'Change User developer editor Password', 1, '2017-01-17 11:39:39'),
(28, 'Change User testing design position to designer', 1, '2017-01-17 11:41:15'),
(29, 'Change User developer editor position to editor', 1, '2017-01-17 12:37:13'),
(30, 'Creating User admin elle position ', 1, '2017-01-23 08:56:56'),
(31, 'Creating User elle magazine position ', 1, '2017-01-23 08:58:51'),
(32, 'Creating User elle position ', 1, '2017-01-23 09:03:42'),
(33, 'Creating User eee position ', 1, '2017-01-23 09:05:03'),
(34, 'Creating Issue Weekly ELLE', 1, '2017-01-31 13:37:44');

-- --------------------------------------------------------

--
-- Table structure for table `apps`
--

CREATE TABLE IF NOT EXISTS `apps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) DEFAULT NULL,
  `apps_name` varchar(50) DEFAULT NULL,
  `status` enum('published','development') DEFAULT NULL,
  `api_key` varchar(99) DEFAULT NULL,
  `screen_orientation` enum('default','portrait','landscape''') DEFAULT 'default',
  `provisioning` varchar(99) DEFAULT NULL,
  `certificate_ios` varchar(99) DEFAULT NULL,
  `certificate_ios_password` varchar(99) DEFAULT NULL,
  `keystore_file` varchar(99) DEFAULT NULL,
  `ios_url` text NOT NULL,
  `android_url` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(99) NOT NULL,
  `company_phone` varchar(18) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `company_phone`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'EllE', '0877289992', '2017-02-06 08:10:18', '2017-02-17 02:52:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE IF NOT EXISTS `invoice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `payment` enum('cash','credit card','transfer','unpaid') NOT NULL DEFAULT 'unpaid',
  `nominal` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `issue`
--

CREATE TABLE IF NOT EXISTS `issue` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `issue_name` varchar(50) NOT NULL,
  `issue_master` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `issue_cover` text,
  `status` enum('published','unpublished') NOT NULL DEFAULT 'unpublished',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `issue`
--

INSERT INTO `issue` (`id`, `issue_name`, `issue_master`, `project_id`, `issue_cover`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 'test_issue_1', 1, 4, NULL, 'unpublished', '2016-12-13 11:17:41', NULL, NULL),
(8, 'test_issue_1', 1, 4, NULL, 'unpublished', '2016-12-13 11:18:44', NULL, NULL),
(9, 'test_issue_2', 1, 4, NULL, 'unpublished', '2016-12-13 11:19:04', NULL, NULL),
(10, 'test_issue_3', 1, 4, NULL, 'unpublished', '2016-12-13 11:19:41', NULL, NULL),
(11, 'test_issue_4', 1, 4, NULL, 'unpublished', '2016-12-13 11:20:32', '2017-01-31 06:47:06', '2017-01-31 06:47:06'),
(12, 'test_issue_5', 1, 4, NULL, 'unpublished', '2016-12-13 11:21:42', '2017-01-31 06:49:55', '2017-01-31 06:49:55'),
(14, 'Adidas Magazine', 1, 4, '/tmp/phpaY61W6.jpg', 'unpublished', '2017-01-11 12:47:11', '2017-01-31 06:49:45', '2017-01-31 06:49:45'),
(18, 'bohemian', 1, 4, '/tmp/phpGuuPd6.png', 'unpublished', '2017-01-11 13:04:23', NULL, NULL),
(19, 'Weekly Fashion #1', 1, 4, '/tmp/phpQWOuB1.png', 'unpublished', '2017-01-11 13:08:52', NULL, NULL),
(20, 'Weekly Fashion #1', 1, 4, '/tmp/phpVCMTZc.png', 'published', '2017-01-11 13:20:32', '2017-01-31 07:11:50', NULL),
(21, 'Weekly Fashion #1', 1, 4, '/tmp/php6OHDkT.png', 'unpublished', '2017-01-11 13:20:55', NULL, NULL),
(22, 'Weekly Fashion #1', 1, 4, '/tmp/phpy5ug1O.png', 'unpublished', '2017-01-11 13:24:25', NULL, NULL),
(23, 'aaa', 1, 4, NULL, 'unpublished', '2017-01-11 13:36:37', NULL, NULL),
(24, 'Weekly Fashion #2', 1, 4, '/tmp/phpASgY9V.png', 'unpublished', '2017-01-11 13:37:38', NULL, NULL),
(25, 'aaaa', 1, 4, NULL, 'unpublished', '2017-01-11 13:38:18', NULL, NULL),
(26, 'Weekly Fashion #4', 1, 4, '/tmp/phpDYGbi9.png', 'unpublished', '2017-01-11 13:39:15', NULL, NULL),
(27, 'sass', 1, 4, '/tmp/phpmP0nvm.png', 'unpublished', '2017-01-11 13:39:46', NULL, NULL),
(28, 'Geek Weekly', 1, 4, '/tmp/phpnapQ25.png', 'unpublished', '2017-01-11 13:40:42', NULL, NULL),
(29, '', 1, 4, NULL, 'unpublished', '2017-01-16 10:48:49', NULL, NULL),
(30, 'Weekly ELLE', 1, 6, '/tmp/phpcC9Yie.jpeg', 'unpublished', '2017-01-31 13:37:44', '2017-02-17 03:15:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE IF NOT EXISTS `page` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `issue_id` int(99) NOT NULL,
  `page_name` varchar(50) NOT NULL,
  `page_team` text NOT NULL,
  `page_description` text,
  `page_cover` text,
  `page_content` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`id`, `issue_id`, `page_name`, `page_team`, `page_description`, `page_cover`, `page_content`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 7, 'cover', '3', NULL, NULL, NULL, '2016-12-13 11:17:41', NULL, NULL),
(3, 8, 'cover', '3', NULL, NULL, NULL, '2016-12-13 11:18:44', NULL, NULL),
(5, 9, 'cover', '3', NULL, NULL, NULL, '2016-12-13 11:19:04', NULL, NULL),
(6, 9, '1', '3', NULL, NULL, NULL, '2016-12-13 11:19:04', NULL, NULL),
(7, 10, 'cover', '3', NULL, NULL, NULL, '2016-12-13 11:19:41', NULL, NULL),
(8, 10, 'page2', '3', NULL, NULL, NULL, '2016-12-13 11:19:41', NULL, NULL),
(9, 11, 'cover', '3', NULL, NULL, '<li style="display: list-item; height: 474px; position: relative; left: 0px; top: 0px;" class="element headers ui-draggable ui-draggable-handle"><iframe style="height: 473px; background: rgb(255, 255, 255) url(&quot;builder_front/images/loading.gif&quot;) no-repeat scroll 50% 50%;" id="ui-id-2" src="builder_front/elements/header2.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 473px;" class="frameCover ui-sortable-handle"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span> remove</button><button type="button" class="btn btn-warning resetBlock"><i class="fa fa-refresh"></i> reset</button><button type="button" class="btn btn-inverse htmlBlock"><i class="fa fa-code"></i> source</button></div></li><li style="display: block; height: 1px;" class="element layout ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%; height: 0px;" id="ui-id-1" src="builder_front/elements/layout_1_column.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 0px;" class="frameCover ui-sortable-handle"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li><li style="display: block;" class="element layout ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%;" id="ui-id-2" src="builder_front/elements/layout_3_column.html" scrolling="no" frameborder="0"><iframe></iframe><div style="" class="frameCover ui-sortable-handle"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li><li style="display: list-item; height: 866px;" class="element embed ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%; height: 865px;" id="ui-id-1" src="builder_front/elements/content_section2.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 865px;" class="frameCover ui-sortable-handle"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li><li style="display: list-item; height: 430px;" class="element layout ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%; height: 429px;" id="ui-id-1" src="builder_front/elements/layout_1_column.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 429px;" class="frameCover ui-sortable-handle"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li>', '2016-12-13 11:20:32', '2017-02-14 05:13:49', NULL),
(10, 11, 'page 2', '3', NULL, NULL, '', '2016-12-13 11:20:33', '2017-02-14 05:13:49', NULL),
(11, 12, 'cover', '3', 'cover', NULL, NULL, '2016-12-13 11:21:42', NULL, NULL),
(12, 12, 'page 2', '3', 'page 1', NULL, NULL, '2016-12-13 11:21:42', NULL, NULL),
(13, 14, 'cover', '3', '', NULL, NULL, '2017-01-11 12:47:11', NULL, NULL),
(14, 14, 'page 2', '3', '', NULL, NULL, '2017-01-11 12:47:11', NULL, NULL),
(15, 14, 'page 3', '3', '', NULL, NULL, '2017-01-11 12:47:11', NULL, NULL),
(16, 14, 'page 4', '3', '', NULL, NULL, '2017-01-11 12:47:11', NULL, NULL),
(17, 15, 'cover', '3', '', NULL, NULL, '2017-01-11 12:53:48', NULL, NULL),
(18, 17, 'cover', '3', '', NULL, NULL, '2017-01-11 13:02:54', NULL, NULL),
(23, 22, 'cover', 'a:3:{i:0;s:1:"4";i:1;s:1:"6";i:2;i:1;}', '', NULL, NULL, '2017-01-11 13:24:25', NULL, NULL),
(24, 23, 's', 'a:1:{i:0;i:1;}', '', NULL, NULL, '2017-01-11 13:36:37', NULL, NULL),
(25, 24, 'cover', 'a:1:{i:0;i:1;}', '', NULL, NULL, '2017-01-11 13:37:38', NULL, NULL),
(26, 24, '1', 'a:1:{i:0;i:1;}', '', NULL, NULL, '2017-01-11 13:37:39', NULL, NULL),
(27, 24, '2', 'a:1:{i:0;i:1;}', '', NULL, NULL, '2017-01-11 13:37:39', NULL, NULL),
(28, 25, 'page 1', 'a:1:{i:0;i:1;}', '', NULL, NULL, '2017-01-11 13:38:18', NULL, NULL),
(29, 25, 'page 2', 'a:1:{i:0;i:1;}', '', NULL, NULL, '2017-01-11 13:38:19', NULL, NULL),
(30, 26, 'page 1', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"4";i:1;s:1:"6";}}', '', NULL, NULL, '2017-01-11 13:39:15', NULL, NULL),
(31, 26, 'page 2', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"4";i:1;s:1:"6";}}', '', NULL, NULL, '2017-01-11 13:39:15', NULL, NULL),
(32, 27, 'page 1', 'a:2:{i:0;i:1;i:1;N;}', '', NULL, NULL, '2017-01-11 13:39:47', NULL, NULL),
(33, 28, 'Cover', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"4";i:1;s:1:"6";}}', '', NULL, NULL, '2017-01-11 13:40:42', NULL, NULL),
(34, 28, 'page 2', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"4";i:1;s:1:"3";}}', '', NULL, NULL, '2017-01-11 13:40:42', NULL, NULL),
(35, 28, 'page 3', 'a:2:{i:0;i:1;i:1;a:4:{i:0;s:1:"4";i:1;s:1:"6";i:2;s:1:"3";i:3;s:1:"7";}}', '', NULL, NULL, '2017-01-11 13:40:42', NULL, NULL),
(36, 29, 'page 1', 'a:2:{i:0;i:1;i:1;N;}', '', NULL, NULL, '2017-01-16 10:48:49', NULL, NULL),
(37, 30, 'cover', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"8";i:1;s:2:"14";}}', '', NULL, '<li style="display: block; height: 471px;" class="element layout ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%; height: 470px;" id="ui-id-1" src="builder_front/elements/layout_1_column.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 470px; display: none;" class="frameCover"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li>', '2017-01-31 13:37:44', '2017-02-14 07:00:28', NULL),
(38, 30, 'page 2', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"8";i:1;s:2:"14";}}', '', NULL, '<li style="display: block; height: 719px; position: relative; left: 0px; top: 0px;" class="element layout ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%; height: 718px;" id="ui-id-2" src="builder_front/elements/layout_2_column.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 718px; display: none;" class="frameCover"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li>', '2017-01-31 13:37:44', '2017-02-14 07:00:28', NULL),
(39, 30, 'page 3', 'a:2:{i:0;i:1;i:1;a:2:{i:0;s:1:"8";i:1;s:2:"14";}}', '', NULL, '<li style="display: block; height: 1381px;" class="element layout ui-draggable ui-draggable-handle"><iframe style="background: rgb(255, 255, 255) url(&quot;images/loading.gif&quot;) no-repeat scroll 50% 50%; height: 1380px;" id="ui-id-3" src="builder_front/elements/layout_4_column.html" scrolling="no" frameborder="0"><iframe></iframe><div style="height: 1380px; display: none;" class="frameCover"><button type="button" class="btn btn-danger deleteBlock"><span class="fui-trash"></span></button></div></li>', '2017-01-31 13:37:44', '2017-02-14 07:00:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(30) NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `project_master` int(11) NOT NULL,
  `project_cover` text,
  `project_key` varchar(50) DEFAULT NULL,
  `status` enum('unpublished','published') NOT NULL DEFAULT 'unpublished',
  `domain` varchar(30) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `date_of_redeem` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `project_name`, `company_id`, `project_master`, `project_cover`, `project_key`, `status`, `domain`, `service_id`, `date_of_redeem`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, 'AHM', 2, 1, 'ahm.png', '18', 'unpublished', NULL, NULL, NULL, '2016-12-07 10:23:33', NULL, NULL),
(3, 'COMMUNITY', 3, 1, 'jogja-istimewa.png', '25', 'unpublished', NULL, NULL, NULL, '2016-12-07 10:23:49', NULL, NULL),
(4, 'EDUCATION', 4, 1, 'logomuda-new.png', '14', 'unpublished', NULL, NULL, NULL, '2016-12-07 10:24:03', NULL, NULL),
(6, 'Elle Magazine', 1, 1, 'rs_634x890-140312125920-634.COver-Emma-Watson-Elle-Magazine.jl.031214.jpg', '438183', 'unpublished', 'elle', 2, NULL, '2017-01-23 09:10:03', '2017-02-17 02:52:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE IF NOT EXISTS `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(33) NOT NULL,
  `service_type` enum('month','issue') NOT NULL,
  `number_of_issue` int(99) DEFAULT NULL,
  `service_price` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `service_name`, `service_type`, `number_of_issue`, `service_price`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'MODEL A', 'issue', 1, 10000000, '2017-02-06 09:11:01', NULL, NULL),
(2, 'MODEL B', 'issue', NULL, 10000000, '2017-02-06 09:11:01', NULL, NULL),
(3, 'MODEL C', 'issue', 10, 8000000, '2017-02-06 09:13:18', NULL, NULL),
(4, 'MODEL D', 'month', 12, 5000000, '2017-02-06 09:13:18', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `project_id` int(99) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `position` enum('administrator','supervisor','leader','editor','designer') COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_phone_unique` (`phone`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=15 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `project_id`, `name`, `email`, `phone`, `password`, `position`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, 'admin', 'admin@admin.com', '', '$2y$10$zRcL3jU1HGdQ/L3stwlquusyWuUBVJFJ7q0KiaWp4pVekUbhQGaOq', 'administrator', 'y0r8MES9jKvEUKon46Uh2ESSzcg7Ti8IRmOaWRG8fyJe0lmmOYpuQfJt9Duh', '2016-12-05 01:11:33', '2017-02-03 04:07:46', NULL),
(3, 2, 'test', 'test@we.com', NULL, '$2y$10$FY64KW5Q7JUS4otWC0sxMONmJXTqhpHlRa24fwxXzCmQNXcvWSbeW', 'supervisor', 'XchgnlE7zgQy5QCuvV2WmGF69s8I4tq1nIWVrbCgob4ZGqAgHDjXKjuIpgUx', '2016-12-05 04:43:11', '2017-01-16 10:00:14', '2017-01-16 10:00:14'),
(4, 2, 'aa', 'sss@ssss.com', NULL, 'aaaa', 'leader', '_token', '2016-12-05 12:11:06', '2017-01-16 09:57:03', '2017-01-16 09:57:03'),
(6, 2, 'aabc', 'sss@sssss.com', '089917722', '$2y$10$pi4AHikrJYs4Ial36hh3eOCPMn46/VQdUgwA3OdkZ/9C9Is.u/dsW', 'designer', 'MYIy31wOFR2XGUu3DoDnCVY6a0xgnKOVnZ5xpuwD', '2016-12-05 12:20:17', '2017-01-16 09:57:08', '2017-01-16 09:57:08'),
(7, 2, 'testing design', 'design@test.com', '082893929', '$2y$10$.yqx2rDF63t63dftww4x6ea8KVuPIMYWFdXzPG8DUFz7YiBcB7CN6', 'designer', 'nEPSKlNSnDHcX6OoSscNUYN61OmLRh7IoXgpZHlU', '2016-12-06 09:37:12', '2017-01-17 04:41:15', NULL),
(8, 2, 'developer editor', 'editor@game.com', '08238832', '$2y$10$AjlRpiB6b46XQky2dZV9ne66tjjQ8GJjjMqpxF0AAXjYPSbaSUvMq', 'editor', 'VNowTbUNcMeivOH1UPK7M2qzlNWh952OAlpCK21x', '2017-01-16 11:19:54', '2017-01-17 05:37:13', NULL),
(9, 2, 'testing supervisor', 'supervisor@testing.com', '09293882382', '$2y$10$LvJtzu1xKRg8VP.m86Su3Osr8HGRGbC/W23CA3eoPB8bd0kLH92aa', 'supervisor', 'VNowTbUNcMeivOH1UPK7M2qzlNWh952OAlpCK21x', '2017-01-16 11:22:14', '2017-01-17 04:25:54', NULL),
(14, 6, 'elle', 'elle@test.com', '0899922323', '$2y$10$hEtDSJWq2j0R2Gi7Q8p6yO4eVeNG2Rbw8dQ7YyU3DjN5jUT4Zhlva', 'supervisor', 'I7qXba1qKi3DWikIfeNEZkaBN5OXbZqI8kXDVvatGyDcJ81LnmdiAK61RhP2', '2017-01-23 09:10:03', '2017-02-14 05:15:31', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
