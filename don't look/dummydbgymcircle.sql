-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2023 at 02:10 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dummydbgymcircle`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `name`, `email`, `password`) VALUES
(1, 'joe', 'mama', 'awdawdawd'),
(3, 'luekelyadwad', 'lue', '$2b$10$.PkEZ86byrWBJ9v3fOHiKeWC50v0nDRSrrlQXnfp4l0mX7iQHuV1S'),
(4, 'luekelyadwad', 'lue', '$2b$10$IM/nwEh7eMcHUrFuZ/NVuezmJ8T3F8KqW3jYRhy39e.5rCGe16ony'),
(5, 'luekelyadwad', 'lue', '$2b$10$1u2XX86L/FkcA9Y42a/cCuFOsLehYpTF8ZaMhDrXpflW3LjHIfnVq'),
(9, 'lue', 'luekelyadwad', '$2b$10$.6suDeb5qA1eWuYx9cga8eZKrZKNvuhpdaYdVfXaug9c43muwq86C'),
(10, 'lue', 'luekelyadwa', '$2b$10$Vey2D3Xz8RQXQTipBiVrtOUWnYMnVGR8uF52k2c.RGTtcIGqZnkSK'),
(11, 'Admin', 'Admin', '$2b$10$eQmzZrqxY9vF5OGTKcWM/.cx621ramDYnxG2Anx.8609QSSoYLMzm'),
(12, 'testing', 'lue', '$2b$10$gkGJWeW.7ty2VE/eqVZYY.U0nZi04g1fGSGqGVf.IEr9MLJLM.pKq'),
(13, 'Lue', 'TestingAdmin', '$2b$10$V6jn7lR3/TOADoWIRBIQC./lhCysOIUO6djrqCOwt0.Rt1Nf7FQKi');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `user_id` int(11) NOT NULL,
  `days` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`user_id`, `days`) VALUES
(8, 4),
(577919, 0),
(148004, 2);

-- --------------------------------------------------------

--
-- Table structure for table `bulletinboard`
--

CREATE TABLE `bulletinboard` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bulletinboard`
--

INSERT INTO `bulletinboard` (`id`, `type`, `description`) VALUES
(2, 'discount', 'SUBO TITE FUENTES BARE WITH ME FUCKER');

-- --------------------------------------------------------

--
-- Table structure for table `secret_phrase`
--

CREATE TABLE `secret_phrase` (
  `phrase` varchar(100) NOT NULL,
  `phrase_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `secret_phrase`
--

INSERT INTO `secret_phrase` (`phrase`, `phrase_id`) VALUES
('$2b$10$bygDAkuZb2WK93.YzIXtCuHig9qgwFyzHD/wi2gNk.bqb/GRg57/C', 0);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_history`
--

CREATE TABLE `transaction_history` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `buyer_id` int(100) NOT NULL,
  `price` int(11) NOT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaction_history`
--

INSERT INTO `transaction_history` (`id`, `name`, `type`, `buyer_id`, `price`, `date`, `status`) VALUES
('1', 'Lue', 'subscription', 10, 0, 'ngaun lang', 'paid'),
('bd5d4a3b-535a-457d-bbec-b91a59ed2cf6', 'testing', 'subscription', 148004, 10, 'not paid', '6/29/2023'),
('cfb45670-f08f-470b-96fa-26b7d7018a27', 'testing', 'subscription', 148004, 10, '6/29/2023', 'paid');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `tier` varchar(50) NOT NULL,
  `points` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `password`, `age`, `address`, `tier`, `points`) VALUES
(8, 'new', 'super lue', '$2b$10$zzGsJFbPYy5iavQP0yb2OOIWKLEiWApYvGbrgRoqOezrDElZbkUa6', 100, 'niggers', 'poor', 5),
(10, 'not lue', 'super not lue', '$2b$10$hRe5Bi/LMm2jOwMt5.MweOl5ZYjzlqq1GOJCAfGiPtRB44wKQk/AK', 100, 'no where', 'rich', 0),
(11, 'register', 'superb lue', '$2b$10$dXE0DjjaxV46MBJGtt85ZetaGFqHHaHrNcHe1lOOlfdCFQV0d9u0u', 5, 'adwad', 'PROOO', 0),
(148004, 'Ernest', 'monti', '$2b$10$7eAXwYNKPTABY94/Pn7fcetxjjyLuBT.wXq.mI5KErUAEDLDnlCle', 5, 'awdawdawd', 'Gold', 150),
(577919, 'register', 'final', '$2b$10$CwO3r1IGAmAsxLXNXE8hVeign4lWJ7IUcJdmo8.gEBVwHmGV7u83e', 5, 'adwad', 'PROOO', 0),
(667238, 'register', 'superb ue', '$2b$10$N83rIMHpc.VsJfqULS9us.yV0uaEsNPoIQDrjPbAZ9auzbzCIJJ.G', 5, 'adwad', 'PROOO', 0),
(736315, 'register', 'supeb ue', '$2b$10$jAESnUg.lWBgDScTWb5./Om3vzzJXyBxzCwemWJXJZavGVTY7jaby', 5, 'adwad', 'PROOO', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `bulletinboard`
--
ALTER TABLE `bulletinboard`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `secret_phrase`
--
ALTER TABLE `secret_phrase`
  ADD PRIMARY KEY (`phrase_id`);

--
-- Indexes for table `transaction_history`
--
ALTER TABLE `transaction_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `bulletinboard`
--
ALTER TABLE `bulletinboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction_history`
--
ALTER TABLE `transaction_history`
  ADD CONSTRAINT `transaction_history_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
