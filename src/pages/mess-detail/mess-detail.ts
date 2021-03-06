import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

import { Menu } from '../../models/model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-mess-detail',
  templateUrl: 'mess-detail.html',
})
export class MessDetailPage {
  
  items: Observable<Menu[]>;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private afs:AngularFirestore) {
    var d1= new Date();
    d1.setHours(0, 0, 0, 0);
    const collRef: AngularFirestoreCollection<Menu> = this.afs.collection(`mess/${this.navParams.get('mid')}/menu`, ref => ref.where('timeFrom', '>=', d1).orderBy('timeFrom'));    
    this.items=collRef.valueChanges();
  }

  ionViewDidLoad() {
  }

}
