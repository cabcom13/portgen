-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 17. Jul 2019 um 21:32
-- Server-Version: 10.1.30-MariaDB
-- PHP-Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `api`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `elements`
--

CREATE TABLE `elements` (
  `id` int(11) NOT NULL,
  `page` text,
  `childs` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `elements`
--

INSERT INTO `elements` (`id`, `page`, `childs`) VALUES
(1, 'test', '{\"id\":0,\"data\":[{\"width\":200,\"height\":21,\"top\":170,\"left\":10,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":3,\"transform\":\"rotate(20deg)\",\"active\":false,\"class\":\"text apply-font\",\"text\":\"NEUER TEXT\",\"type\":\"text\",\"style\":{\"background-color\":\"#EF9A9A\",\"background-image\":\"\",\"background-size\":\"\",\"font-size\":\"12px\",\"font-family\":\"Comic Sans MS\",\"color\":\"#000000\",\"letter-spacing\":\"0em\",\"font-weight\":800,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"center\"}},{\"width\":300,\"height\":250,\"top\":370,\"left\":300,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":2,\"type\":\"text\",\"active\":false,\"class\":\"text\",\"text\":\"NEUER TEXT13\",\"style\":{\"background-color\":\"#EF9A4A\",\"background-image\":\"\",\"background-size\":\"\",\"color\":\"#000000\",\"font-size\":\"12px\",\"letter-spacing\":\"0em\",\"font-weight\":400,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"left\"}},{\"width\":150,\"height\":21,\"top\":165,\"left\":342,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":3,\"active\":false,\"type\":\"text\",\"class\":\"text\",\"text\":\"Dein Text hier\",\"style\":{\"background-color\":\"transparent\",\"font-size\":\"16px\",\"color\":\"#000000\",\"letter-spacing\":\"0em\",\"font-weight\":400,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"left\"}}]}');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `elements`
--
ALTER TABLE `elements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_elements_id` (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `elements`
--
ALTER TABLE `elements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
