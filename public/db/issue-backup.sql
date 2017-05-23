-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 23, 2017 at 01:02 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `magazineapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `issue`
--

CREATE TABLE `issue` (
  `id` int(99) NOT NULL,
  `issue_name` varchar(50) NOT NULL,
  `issue_master` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `issue_cover` text,
  `status` enum('published','unpublished') NOT NULL DEFAULT 'unpublished',
  `compiled` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `issue`
--

INSERT INTO `issue` (`id`, `issue_name`, `issue_master`, `project_id`, `issue_cover`, `status`, `compiled`, `created_at`, `updated_at`, `deleted_at`) VALUES
(7, 'test_issue_1', 1, 4, NULL, 'unpublished', NULL, '2016-12-13 11:17:41', NULL, NULL),
(8, 'test_issue_1', 1, 4, NULL, 'unpublished', NULL, '2016-12-13 11:18:44', NULL, NULL),
(9, 'test_issue_2', 1, 4, NULL, 'unpublished', NULL, '2016-12-13 11:19:04', NULL, NULL),
(10, 'test_issue_3', 1, 4, NULL, 'unpublished', NULL, '2016-12-13 11:19:41', NULL, NULL),
(11, 'test_issue_4', 1, 4, NULL, 'unpublished', NULL, '2016-12-13 11:20:32', '2017-01-31 06:47:06', '2017-01-31 06:47:06'),
(12, 'test_issue_5', 1, 4, NULL, 'unpublished', NULL, '2016-12-13 11:21:42', '2017-01-31 06:49:55', '2017-01-31 06:49:55'),
(14, 'Adidas Magazine', 1, 4, '/tmp/phpaY61W6.jpg', 'unpublished', NULL, '2017-01-11 12:47:11', '2017-01-31 06:49:45', '2017-01-31 06:49:45'),
(18, 'bohemian', 1, 4, '/tmp/phpGuuPd6.png', 'unpublished', NULL, '2017-01-11 13:04:23', NULL, NULL),
(19, 'Weekly Fashion #1', 1, 4, '/tmp/phpQWOuB1.png', 'unpublished', NULL, '2017-01-11 13:08:52', NULL, NULL),
(20, 'Weekly Fashion #1', 1, 4, '/tmp/phpVCMTZc.png', 'unpublished', NULL, '2017-01-11 13:20:32', '2017-01-31 07:11:50', NULL),
(21, 'Weekly Fashion #1', 1, 4, '/tmp/php6OHDkT.png', 'unpublished', NULL, '2017-01-11 13:20:55', NULL, NULL),
(22, 'Weekly Fashion #1', 1, 4, '/tmp/phpy5ug1O.png', 'unpublished', NULL, '2017-01-11 13:24:25', NULL, NULL),
(23, 'aaa', 1, 4, NULL, 'unpublished', NULL, '2017-01-11 13:36:37', NULL, NULL),
(24, 'Weekly Fashion #2', 1, 4, '/tmp/phpASgY9V.png', 'unpublished', NULL, '2017-01-11 13:37:38', NULL, NULL),
(25, 'aaaa', 1, 4, NULL, 'unpublished', NULL, '2017-01-11 13:38:18', NULL, NULL),
(26, 'Weekly Fashion #4', 1, 4, '/tmp/phpDYGbi9.png', 'unpublished', NULL, '2017-01-11 13:39:15', NULL, NULL),
(27, 'sass', 1, 4, '/tmp/phpmP0nvm.png', 'unpublished', NULL, '2017-01-11 13:39:46', NULL, NULL),
(28, 'Geek Weekly', 1, 4, '/tmp/phpnapQ25.png', 'unpublished', NULL, '2017-01-11 13:40:42', NULL, NULL),
(29, '', 1, 4, NULL, 'unpublished', NULL, '2017-01-16 10:48:49', NULL, NULL),
(30, 'Weekly ELLE', 1, 6, '/tmp/phpcC9Yie.jpeg', 'unpublished', NULL, '2017-01-31 13:37:44', '2017-05-22 17:14:38', NULL),
(31, '', 14, 6, NULL, 'unpublished', NULL, '2017-03-27 01:26:55', '2017-03-26 18:27:04', '2017-03-26 18:27:04'),
(32, 'Testing Issue 1', 14, 6, NULL, 'unpublished', NULL, '2017-05-19 14:15:01', '2017-05-19 14:20:05', '2017-05-19 14:20:05'),
(33, 'Testing Issue 2', 14, 6, '/private/var/folders/gh/m1js6ckx1cbfkgwn_dnj95t40000gn/T/phpvgo7qZ.mp4', 'unpublished', NULL, '2017-05-19 14:16:45', '2017-05-19 14:20:31', '2017-05-19 14:20:31'),
(34, 'Testing Issue 3', 14, 6, '/private/var/folders/gh/m1js6ckx1cbfkgwn_dnj95t40000gn/T/phpLlKByl.jpeg', 'unpublished', NULL, '2017-05-19 14:19:05', '2017-05-19 14:20:34', '2017-05-19 14:20:34'),
(35, 'Testing Issue 1', 14, 6, '/private/var/folders/gh/m1js6ckx1cbfkgwn_dnj95t40000gn/T/phpSETV48.jpeg', 'published', NULL, '2017-05-19 14:21:05', '2017-05-22 12:46:27', '2017-05-22 12:46:27'),
(36, 'Testing Device', 14, 6, 'https://s3-ap-southeast-1.amazonaws.com/publixx-statics/images-issue/1495536105-8b7b025711941f86691eebe2144f101b.jpg', 'unpublished', '1495536624-36.zip', '2017-05-23 10:41:45', '2017-05-23 10:50:31', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `issue`
--
ALTER TABLE `issue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `issue`
--
ALTER TABLE `issue`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
