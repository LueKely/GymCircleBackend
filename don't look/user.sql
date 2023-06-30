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
(148004, 'Ernest', 'monti', '$2b$10$7eAXwYNKPTABY94/Pn7fcetxjjyLuBT.wXq.mI5KErUAEDLDnlCle', 5, 'awdawdawd', 'Gold', 140),
(577919, 'register', 'final', '$2b$10$CwO3r1IGAmAsxLXNXE8hVeign4lWJ7IUcJdmo8.gEBVwHmGV7u83e', 5, 'adwad', 'PROOO', 0),
(667238, 'register', 'superb ue', '$2b$10$N83rIMHpc.VsJfqULS9us.yV0uaEsNPoIQDrjPbAZ9auzbzCIJJ.G', 5, 'adwad', 'PROOO', 0),
(736315, 'register', 'supeb ue', '$2b$10$jAESnUg.lWBgDScTWb5./Om3vzzJXyBxzCwemWJXJZavGVTY7jaby', 5, 'adwad', 'PROOO', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
