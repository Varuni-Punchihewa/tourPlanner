import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus) {

  }
  login(){
    this.googleplus.login({
      'webClientId':'117493625647-6dvi9s42um3ldjeoje4qkfvuhnluc6vc.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
        alert("LOGIN SUCCESSFULLY")
      }).catch(ns=>{
        alert("NOT SUCCESS")
      })
    })
  }

}
