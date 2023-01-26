import { Component } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import{faFacebookF} from '@fortawesome/free-brands-svg-icons';
import{faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faAngular=faAngular;
  faLinkedin=faLinkedin;
  faFacebookF=faFacebookF;
  faInstagram=faInstagram;
  faEnvelope=faEnvelope;
}
