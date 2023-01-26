import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import{faFacebookF} from '@fortawesome/free-brands-svg-icons';
import{faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  faLinkedin=faLinkedin;
  faFacebookF=faFacebookF;
  faInstagram=faInstagram;
  faEnvelope=faEnvelope;
  faAngular=faAngular;



  constructor() { }

  ngOnInit():void{

    let images:any[]=[];
    images[0]="../../../assets/img/mont.png";
    images[1]="../../../assets/img/laurea.jpg";
    images[2]="../../../assets/img/insta1.png";
    var myImg = <HTMLInputElement>document.getElementById('imagechange');

    setInterval(function(){

      let random = Math.floor(Math.random()*3);
      myImg.src = images[random]!;
    },2000);




  }

}
