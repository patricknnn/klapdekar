import { Navlink } from "./models/navlink";
import { Video } from './models/video';

export const navlinks = [
  new Navlink("Home", "dashboard", "/home"),
  new Navlink("Klappers", "slideshow", "/videos"),
];

export const videos = [
  new Video("Kees van der Spek: COD spelers aangepakt", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "CODMW"),
  new Video("Kees van der Spek: COD spelers aangepakt", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "CODMW"),
  new Video("Kees van der Spek: COD spelers aangepakt", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "CODMW"),
  new Video("Kees van der Spek: COD spelers aangepakt", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "COD2"),
  new Video("Kees van der Spek: COD spelers aangepakt", "BENNIEMAN", "https://www.youtube.com/embed/_zTf8YLPWOk", "COD2"),
]