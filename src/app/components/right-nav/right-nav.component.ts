import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import{faFacebookF} from '@fortawesome/free-brands-svg-icons';
import{faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent {

  faLinkedin=faLinkedin;
  faFacebookF=faFacebookF;
  faInstagram=faInstagram;
  faEnvelope=faEnvelope;
}
