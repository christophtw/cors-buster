import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

string: string = "";
cordova: string = "";

  constructor(  public navCtrl: NavController,
                private platform: Platform,
                private nativeHttp: HTTP,
                private http: HttpClient  ) {

  }

ionViewDidLoad() {
  this.http.get('https://www.dropbox.com', {responseType: "arraybuffer"})
  .subscribe(res => {
    console.log(res)
    this.string = "GET Ok"
  }, (err) => {
    console.log(err)
    this.string = "GET Failed"

  })

  this.platform.ready().then(() => {
       this.nativeHttp.post('https://httpbin.org/post', {a: 'b'}, {})
           .then(() => {
               console.log('cordova-plugin-advanced-http is installed properly');
               this.cordova = "cordova-plugin-advanced-http is installed properly"
           });
   });

}

}
