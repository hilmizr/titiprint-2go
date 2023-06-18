-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 18, 2023 at 06:45 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `titiprint_2go`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_file`
--

DROP TABLE IF EXISTS `detail_file`;
CREATE TABLE IF NOT EXISTS `detail_file` (
  `file_id` binary(16) NOT NULL,
  `format` varchar(5) NOT NULL,
  `ukuran_kertas` varchar(10) NOT NULL,
  `jenis_kertas` varchar(10) DEFAULT NULL,
  `warna` tinyint(1) DEFAULT NULL,
  `jumlah_copy` int DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
CREATE TABLE IF NOT EXISTS `file` (
  `file_id` binary(16) NOT NULL,
  `nama_file` varchar(60) NOT NULL,
  `sub_total_harga` int NOT NULL,
  `pesanan_id` binary(16) DEFAULT NULL,
  `user_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`file_id`),
  KEY `pesanan_id` (`pesanan_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

DROP TABLE IF EXISTS `level`;
CREATE TABLE IF NOT EXISTS `level` (
  `level_id` binary(16) NOT NULL,
  `level_name` varchar(10) DEFAULT NULL,
  `minimum_spending` int NOT NULL,
  PRIMARY KEY (`level_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE IF NOT EXISTS `member` (
  `member_id` binary(16) NOT NULL,
  `level_id` binary(16) NOT NULL,
  `has_promo` tinyint(1) DEFAULT NULL,
  `user_id` binary(16) DEFAULT NULL,
  `total_spending` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`member_id`),
  KEY `user_id` (`user_id`),
  KEY `level_id` (`level_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

DROP TABLE IF EXISTS `pembayaran`;
CREATE TABLE IF NOT EXISTS `pembayaran` (
  `kode_pembayaran` binary(16) NOT NULL,
  `metode_pembayaran` varchar(20) NOT NULL,
  `status_pembayaran` varchar(10) DEFAULT NULL,
  `pesanan_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`kode_pembayaran`),
  KEY `pesanan_id` (`pesanan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengiriman`
--

DROP TABLE IF EXISTS `pengiriman`;
CREATE TABLE IF NOT EXISTS `pengiriman` (
  `pengiriman_id` binary(16) NOT NULL,
  `no_pengiriman` int NOT NULL,
  `alamat_tujuan` varchar(100) NOT NULL,
  `status_pengiriman` varchar(20) DEFAULT NULL,
  `pesanan_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`pengiriman_id`),
  KEY `pesanan_id` (`pesanan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

DROP TABLE IF EXISTS `pesanan`;
CREATE TABLE IF NOT EXISTS `pesanan` (
  `pesanan_id` binary(16) NOT NULL,
  `jumlah_file` int NOT NULL,
  `total_harga` int NOT NULL,
  `status_pesanan` varchar(10) NOT NULL,
  `is_dikirim` tinyint(1) DEFAULT NULL,
  `tanggal_pesan` date DEFAULT NULL,
  `tanggal_selesai` date DEFAULT NULL,
  `user_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`pesanan_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `promo`
--

DROP TABLE IF EXISTS `promo`;
CREATE TABLE IF NOT EXISTS `promo` (
  `promo_id` binary(16) NOT NULL,
  `promo_name` varchar(20) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `discount_rate` decimal(4,2) NOT NULL,
  `level_id` binary(16) DEFAULT NULL,
  PRIMARY KEY (`promo_id`),
  KEY `level_id` (`level_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` binary(16) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` char(32) NOT NULL,
  `full_name` varchar(60) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `is_member` tinyint(1) NOT NULL,
  `role` enum('customer','admin') NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_file`
--
ALTER TABLE `detail_file`
  ADD CONSTRAINT `detail_file_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `file` (`file_id`);

--
-- Constraints for table `file`
--
ALTER TABLE `file`
  ADD CONSTRAINT `file_ibfk_1` FOREIGN KEY (`pesanan_id`) REFERENCES `pesanan` (`pesanan_id`),
  ADD CONSTRAINT `file_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `member_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `level` (`level_id`);

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`pesanan_id`) REFERENCES `pesanan` (`pesanan_id`);

--
-- Constraints for table `pengiriman`
--
ALTER TABLE `pengiriman`
  ADD CONSTRAINT `pengiriman_ibfk_1` FOREIGN KEY (`pesanan_id`) REFERENCES `pesanan` (`pesanan_id`);

--
-- Constraints for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD CONSTRAINT `pesanan_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `promo`
--
ALTER TABLE `promo`
  ADD CONSTRAINT `promo_ibfk_1` FOREIGN KEY (`level_id`) REFERENCES `level` (`level_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
