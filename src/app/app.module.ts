import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ElasticModule } from 'ng-elastic';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/create/create';
import { ProfilePage } from '../pages/profile/profile';
import { ArchievePage } from '../pages/archieve/archieve';
import { MessDetailPage } from '../pages/mess-detail/mess-detail';


import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { AuthProvider } from '../providers/auth/auth';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC_KeK56MdvteYU96PocSxfAaOgO9aVBSI",
  authDomain: "mymess-11f8c.firebaseapp.com",
  databaseURL: "https://mymess-11f8c.firebaseio.com",
  projectId: "mymess-11f8c",
  storageBucket: "mymess-11f8c.appspot.com",
  messagingSenderId: "201921251715"
};

@NgModule({
  declarations: [
    MyApp,

    HomePage,
    CreatePage,
    ProfilePage,
    ArchievePage,
    MessDetailPage,

    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    
    TabsPage
  ],
  imports: [
    BrowserModule,
    ElasticModule,
    IonicModule.forRoot(MyApp),

    
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    HomePage,
    CreatePage,
    ProfilePage,
    ArchievePage,
    MessDetailPage,
    
    LoginPage,
    RegisterPage,
    ResetPasswordPage,

    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule {}
