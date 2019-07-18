-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 18. Jul 2019 um 12:59
-- Server-Version: 10.1.36-MariaDB
-- PHP-Version: 7.2.10

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
(1, '{\"backgroundimage\": \"flower1.png\",\"backgroundimageID\": 2,\"backgroundcolor\": \"#f2ffe8\",\"opacity\": \".7\"}', '[{\"width\":200,\"height\":21,\"top\":170,\"left\":10,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":3,\"transform\":\"rotate(20deg)\",\"active\":false,\"class\":\"text apply-font\",\"text\":\"NEUER TEXT\",\"type\":\"text\",\"style\":{\"background-color\":\"#EF9A9A\",\"background-image\":\"\",\"background-size\":\"\",\"font-size\":\"12px\",\"font-family\":\"Comic Sans MS\",\"color\":\"#000000\",\"letter-spacing\":\"0em\",\"font-weight\":800,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"center\"}},{\"width\":300,\"height\":250,\"top\":370,\"left\":300,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":2,\"type\":\"text\",\"active\":false,\"class\":\"text\",\"text\":\"NEUER TEXT13\",\"style\":{\"background-color\":\"#EF9A4A\",\"background-image\":\"\",\"background-size\":\"\",\"color\":\"#000000\",\"font-size\":\"12px\",\"letter-spacing\":\"0em\",\"font-weight\":400,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"left\"}},{\"width\":150,\"height\":21,\"top\":165,\"left\":342,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":3,\"active\":false,\"type\":\"text\",\"class\":\"text\",\"text\":\"Dein Text hier\",\"style\":{\"background-color\":\"transparent\",\"font-size\":\"16px\",\"color\":\"#000000\",\"letter-spacing\":\"0em\",\"font-weight\":400,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"left\"}}]'),
(3, '{\"backgroundimage\": \"flower.png\",\"backgroundimageID\": 2,\"backgroundcolor\": \"#ff0000\",\"opacity\": \".7\"}', '[{\"width\":200,\"height\":21,\"top\":170,\"left\":10,\"draggable\":true,\"resizable\":true,\"minw\":10,\"minh\":10,\"axis\":\"both\",\"parentLim\":true,\"snapToGrid\":true,\"aspectRatio\":false,\"zIndex\":3,\"active\":false,\"class\":\"text apply-font\",\"text\":\"NEUER TEXT\",\"type\":\"text\",\"style\":{\"background-color\":\"#EF9A9A\",\"background-image\":\"\",\"background-size\":\"\",\"font-size\":\"12px\",\"font-family\":\"Comic Sans MS\",\"color\":\"#000000\",\"letter-spacing\":\"0em\",\"font-weight\":800,\"font-style\":\"\",\"text-decoration\":\"\",\"text-align\":\"center\"}}]');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `presets`
--

CREATE TABLE `presets` (
  `preset_id` int(12) NOT NULL,
  `preset_category_id` int(12) NOT NULL,
  `title` varchar(255) NOT NULL,
  `elementID` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `presets`
--

INSERT INTO `presets` (`preset_id`, `preset_category_id`, `title`, `elementID`) VALUES
(1, 1, 'ich kann alleine', 1),
(2, 1, 'blablabla', 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `preset_category`
--

CREATE TABLE `preset_category` (
  `preset_category_id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `preset_category`
--

INSERT INTO `preset_category` (`preset_category_id`, `text`) VALUES
(1, 'Slim Edition'),
(2, 'Summer Edition');

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
-- Indizes für die Tabelle `presets`
--
ALTER TABLE `presets`
  ADD PRIMARY KEY (`preset_id`);

--
-- Indizes für die Tabelle `preset_category`
--
ALTER TABLE `preset_category`
  ADD PRIMARY KEY (`preset_category_id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `elements`
--
ALTER TABLE `elements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `presets`
--
ALTER TABLE `presets`
  MODIFY `preset_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `preset_category`
--
ALTER TABLE `preset_category`
  MODIFY `preset_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;