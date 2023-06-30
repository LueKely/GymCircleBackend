-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2023 at 09:52 AM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
