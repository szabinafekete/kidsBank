-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3308
-- Létrehozás ideje: 2022. Máj 01. 15:33
-- Kiszolgáló verziója: 10.3.16-MariaDB
-- PHP verzió: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `kidsbank`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `adminok`
--

CREATE TABLE `adminok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `jelszo` varchar(32) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `adminok`
--

INSERT INTO `adminok` (`id`, `nev`, `email`, `jelszo`) VALUES
(1, 'szasza', 'fgth@dgfdh.hu', '$2a$10$RkgeKeof2I2vsbE/WjTNseqKP');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `befektetes`
--

CREATE TABLE `befektetes` (
  `befektetes_id` int(11) NOT NULL,
  `felhasznalo_id` int(11) DEFAULT NULL,
  `megnevezes` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `napok` int(11) DEFAULT NULL,
  `osszeg` int(11) DEFAULT NULL,
  `hozam` double DEFAULT NULL,
  `varhato_penz` int(11) DEFAULT NULL,
  `lejarat` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `befektetes`
--

INSERT INTO `befektetes` (`befektetes_id`, `felhasznalo_id`, `megnevezes`, `napok`, `osszeg`, `hozam`, `varhato_penz`, `lejarat`) VALUES
(1, NULL, '1 hetes befektetés', 7, 100, 0.1, NULL, NULL),
(2, NULL, '2 hetes befektetés', 14, 100, 0.25, NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `feladatok`
--

CREATE TABLE `feladatok` (
  `feladatok_id` int(11) NOT NULL,
  `megnevezes` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `hatarido` date DEFAULT NULL,
  `felhasznalo_id` int(11) DEFAULT NULL,
  `pont` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `feladatok`
--

INSERT INTO `feladatok` (`feladatok_id`, `megnevezes`, `hatarido`, `felhasznalo_id`, `pont`) VALUES
(1, 'söprés', '2022-05-04', 1, 13),
(2, 'mosogatás', '2022-05-04', 2, 24);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `id` int(11) NOT NULL,
  `becenev` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `kor` int(11) DEFAULT NULL,
  `penz` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalo`
--

INSERT INTO `felhasznalo` (`id`, `becenev`, `kor`, `penz`) VALUES
(1, 'Jóska', 12, 523),
(2, 'Pista', 10, 53),
(3, 'Rita', 8, 423);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jutalmak`
--

CREATE TABLE `jutalmak` (
  `jutalmak_id` int(11) NOT NULL,
  `megnevezes` varchar(255) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `szukseges_pont` int(11) DEFAULT NULL,
  `felhasznalo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jutalmak`
--

INSERT INTO `jutalmak` (`jutalmak_id`, `megnevezes`, `szukseges_pont`, `felhasznalo_id`) VALUES
(1, 'Csoki', 5, NULL),
(2, 'Labda', 45, NULL);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `adminok`
--
ALTER TABLE `adminok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `befektetes`
--
ALTER TABLE `befektetes`
  ADD PRIMARY KEY (`befektetes_id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A tábla indexei `feladatok`
--
ALTER TABLE `feladatok`
  ADD PRIMARY KEY (`feladatok_id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `jutalmak`
--
ALTER TABLE `jutalmak`
  ADD PRIMARY KEY (`jutalmak_id`),
  ADD KEY `felhasznalo_id` (`felhasznalo_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `adminok`
--
ALTER TABLE `adminok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `befektetes`
--
ALTER TABLE `befektetes`
  MODIFY `befektetes_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `feladatok`
--
ALTER TABLE `feladatok`
  MODIFY `feladatok_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `jutalmak`
--
ALTER TABLE `jutalmak`
  MODIFY `jutalmak_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `befektetes`
--
ALTER TABLE `befektetes`
  ADD CONSTRAINT `befektetes_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalo` (`id`);

--
-- Megkötések a táblához `feladatok`
--
ALTER TABLE `feladatok`
  ADD CONSTRAINT `feladatok_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalo` (`id`);

--
-- Megkötések a táblához `jutalmak`
--
ALTER TABLE `jutalmak`
  ADD CONSTRAINT `jutalmak_ibfk_1` FOREIGN KEY (`felhasznalo_id`) REFERENCES `felhasznalo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
