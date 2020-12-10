import { Navlink } from "./models/navlink";
import { Player } from './models/player';
import { Video } from './models/video';

export const navlinks = [
  new Navlink("Home", "dashboard", "/home"),
  new Navlink("Klappers", "slideshow", "/videos"),
  new Navlink("Gouveneurs", "contacts", "/players"),
  new Navlink("Deuntjes", "equalizer", "/music"),
  new Navlink("Quotes", "format_quote", "/quotes"),
  new Navlink("Leaderboards", "leaderboard", "/leaderboards"),
  new Navlink("Sfeerimpressie", "image", "/images"),
  new Navlink("Eten & Co.", "fastfood", "/etenenco"),
  new Navlink("Zittingen", "event", "/agenda"),
];

export const videos = [
  new Video("Kees van der Spek", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "CODMW"),
  new Video("COD spelers aangepakt", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "CODMW"),
  new Video("Kees", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "CODMW"),
  new Video("van der Spek", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "COD2"),
  new Video("COD", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "COD2"),
]

export const players = [
  new Player("BENNIEMAN", "", "", ""),
  new Player("KUBEROAL", "", "", ""),
  new Player("MARTINZIKI", "", "", ""),
  new Player("ROEL", "", "", ""),
  new Player("KRAAKY", "", "", ""),
  new Player("BLOKTASTIC", "", "", ""),
  new Player("PANINI", "", "", ""),
  new Player("WARHEAD", "", "", ""),
  new Player("BRIANPLAYER69", "", "", ""),
];

export const Games = [
  "Call of Duty 2",
  "Call of Duty 4",
  "Call of Duty: Modern Warfare",
  "Apex Legends"
];