import { Component } from '@angular/core';
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import{faJava} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import{faFacebookF} from '@fortawesome/free-brands-svg-icons';
import{faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  faLaptopCode=faLaptopCode;
  faJava=faJava;
  faDatabase=faDatabase;
  faLinkedin=faLinkedin;
  faFacebookF=faFacebookF;
  faInstagram=faInstagram;
  faEnvelope=faEnvelope;
  faAngular=faAngular;
  faDownload=faDownload;

  constructor() { }

  ngOnInit():void{

  }

  downloadCV():any{

    alert("CV Scaricato correttamente!")
  }



}
