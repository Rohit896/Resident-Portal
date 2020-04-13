import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialougComponent } from 'src/app/shared/dialoug/dialoug.component';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth.service';
import { DataStorageService } from 'src/app/core/services/data-storage.service';
import { RegistrationService } from 'src/app/core/services/registration.service';
import { ConfigService } from 'src/app/core/services/config.service';
import * as appConstants from '../../app.constants';
import LanguageFactory from '../../../assets/i18n';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputPlaceholderContact = 'Email ID or Phone Number';
  inputPlaceholderOTP = 'Enter OTP';
  disableBtn = false;
  timer:any ;
  inputOTP: string;
  inputContactDetails = '';
  showSendOTP = true;
  showResend = false;
  showVerify = false;
  showContactDetails = true;
  showOTP = false;
  disableVerify = false;
  secondaryLanguagelabels: any;
  loggedOutLang: string;
<<<<<<< HEAD
  contactErrorMessage: string;
  uinErrorMessage: string;
=======
  errorMessage: string;
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
  minutes: string;
  seconds: string;
  showSpinner = true;
  selectedLanguage= '';
  validationMessages = {};
  servicesActivationStatus: boolean[] = [];
  activatedServiceJSON={};
<<<<<<< HEAD
  inputUinDetails = '';
=======
  UINDetails = '';
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private dialog: MatDialog,
    private dataService: DataStorageService,
    private regService: RegistrationService,
    private configService: ConfigService,
  ) {
  }

  ngOnInit() {
      this.setServiceId();  

      if (this.authService.isAuthenticated()) {
        this.authService.onLogout();
      }
  }
  setServiceId(){
      this.route.paramMap.subscribe((params: ParamMap)=>{
        this.initializeVariables();
        this.setTimer();
        let id = params.get('id');
        this.loadValidationMessages(id);
        
        this.servicesActivationStatus[id]=true;
        //this.ngOnInit();
      })
      
  }
  initializeVariables(){
    this.inputPlaceholderContact = 'Email ID or Phone Number';
  this.inputPlaceholderOTP = 'Enter OTP';
  this.disableBtn = false;
  this.inputOTP='';
  this.inputContactDetails = '';
  this.showSendOTP = true;
  this.showResend = false;
  this.showVerify = false;
  this.showContactDetails = true;
  this.showOTP = false;
  this.disableVerify = false;
 // secondaryLanguagelabels: any;
  this.loggedOutLang='';
<<<<<<< HEAD
  this.uinErrorMessage='';
  this.contactErrorMessage='';
=======
  this.errorMessage='';
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
  this.minutes='';
  this.seconds='';
  this.showSpinner = true;
  this.selectedLanguage= '';
  this.validationMessages = {};
  this.servicesActivationStatus = [];
  this.activatedServiceJSON={};
<<<<<<< HEAD
  this.inputUinDetails = '';
=======
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
  clearInterval(this.timer);
    // if (document.getElementById('timer').style.visibility === 'visible'){
    // document.getElementById('timer').style.visibility = 'hidden';
    // }
  }
  loadValidationMessages(id: any) {
    let langCode=localStorage.getItem('langCode');
    this.selectedLanguage = appConstants.languageMapping[langCode].langName;
    let factory = new LanguageFactory(langCode);
    let response = factory.getCurrentlanguage();
    this.validationMessages = response['authValidationMessages'];
    let residentServiceJSON = response['header']['residentServices'];
    this.activatedServiceJSON =response[id];
<<<<<<< HEAD
     // console.log(this.activatedServiceJSON);
=======
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
    //initialization of serviceActivationStatus array
    let size = Object.keys(residentServiceJSON).length;
    for (let i = 0; i < size; i++) {
      this.servicesActivationStatus[i]=false;
    }


    this.showSpinner=false;
  }

  loginIdValidator() {
<<<<<<< HEAD
    this.contactErrorMessage = undefined;
=======
    this.errorMessage = undefined;
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
    const modes = this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_login_mode);
    const emailRegex = new RegExp(this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_regex_email));
    const phoneRegex = new RegExp(this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_regex_phone));
    if (modes === 'email,mobile') {
      if (!(emailRegex.test(this.inputContactDetails) || phoneRegex.test(this.inputContactDetails))) {
<<<<<<< HEAD
        this.contactErrorMessage = this.validationMessages['invalidInput'];
      }
    } else if (modes === 'email') {
      if (!emailRegex.test(this.inputContactDetails)) {
        this.contactErrorMessage = this.validationMessages['invalidEmail'];
      }
    } else if (modes === 'mobile') {
      if (!phoneRegex.test(this.inputContactDetails)) {
        this.contactErrorMessage = this.validationMessages['invalidMobile'];
=======
        this.errorMessage = this.validationMessages['invalidInput'];
      }
    } else if (modes === 'email') {
      if (!emailRegex.test(this.inputContactDetails)) {
        this.errorMessage = this.validationMessages['invalidEmail'];
      }
    } else if (modes === 'mobile') {
      if (!phoneRegex.test(this.inputContactDetails)) {
        this.errorMessage = this.validationMessages['invalidMobile'];
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
      }
    }
  }

  setTimer() {
    const time = Number(this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_kernel_otp_expiry_time));
<<<<<<< HEAD
=======
    console.log(time);
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
    if (!isNaN(time)) {
      const minutes = time / 60;
      const seconds = time % 60;
      if (minutes < 10) {
        this.minutes = '0' + minutes;
      } else {
        this.minutes = String(minutes);
      }
      if (seconds < 10) {
        this.seconds = '0' + seconds;
      } else {
        this.seconds = String(seconds);
      }
    } else {
      this.minutes = '02';
      this.seconds = '00';
    }
  }

  showVerifyBtn() {
    if (
      this.inputOTP.length ===
      Number(this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_kernel_otp_default_length))
    ) {
      this.showVerify = true;
      this.showResend = false;
    } else {
      this.showResend = true;
      this.showVerify = false;
    }
  }

<<<<<<< HEAD
  uinValidator(){
    this.uinErrorMessage = undefined;
    //const modes = this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_login_mode);
    //const emailRegex = new RegExp(this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_regex_email));
    //const phoneRegex = new RegExp(this.configService.getConfigByKey(appConstants.CONFIG_KEYS.mosip_regex_phone));
    const uinRegex = new RegExp("^([0-9]{10})$");
    if(!uinRegex.test(this.inputUinDetails)){
      this.uinErrorMessage = this.validationMessages['invalidUin'];
    }
  }
  verifyUin(uin: any){

  }
  submit(): void {
    this.loginIdValidator();
    this.uinValidator();


    this.verifyUin(this.inputUinDetails);
    if ((this.showSendOTP || this.showResend) && this.contactErrorMessage === undefined && (this.uinErrorMessage === undefined || this.servicesActivationStatus[0]))  {
=======
  submit(): void {
    this.loginIdValidator();
    if ((this.showSendOTP || this.showResend) && this.errorMessage === undefined) {
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
      this.inputOTP = '';
      this.showResend = true;
      this.showOTP = true;
      this.showSendOTP = false;
      this.showContactDetails = false;

      const timerFn = () => {
        let secValue = Number(document.getElementById('secondsSpan').innerText);
        const minValue = Number(document.getElementById('minutesSpan').innerText);

        if (secValue === 0) {
          secValue = 60;
          if (minValue === 0) {
            // redirecting to initial phase on completion of timer
            this.showContactDetails = true;
            this.showSendOTP = true;
            this.showResend = false;
            this.showOTP = false;
            this.showVerify = false;
            document.getElementById('minutesSpan').innerText = this.minutes;
            document.getElementById('timer').style.visibility = 'hidden';
            clearInterval(this.timer);
            return;
          }
          document.getElementById('minutesSpan').innerText = '0' + (minValue - 1);
        }

        if (secValue === 10 || secValue < 10) {
          document.getElementById('secondsSpan').innerText = '0' + --secValue;
        } else {
          document.getElementById('secondsSpan').innerText = --secValue + '';
        }
      };

      // update of timer value on click of resend
      if (document.getElementById('timer').style.visibility === 'visible') {
        document.getElementById('secondsSpan').innerText = this.seconds;
        document.getElementById('minutesSpan').innerText = this.minutes;
      } else {
        // initial set up for timer
        document.getElementById('timer').style.visibility = 'visible';
        this.timer = setInterval(timerFn, 1000);
      }

      this.dataService.sendOtp(this.inputContactDetails).subscribe(response => {});

      // dynamic update of button text for Resend and Verify
<<<<<<< HEAD
    } else if (this.showVerify && this.contactErrorMessage === undefined && (this.uinErrorMessage === undefined || this.servicesActivationStatus[0])) {
=======
    } else if (this.showVerify && this.errorMessage === undefined) {
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
      this.disableVerify = true;
      this.dataService.verifyOtp(this.inputContactDetails, this.inputOTP).subscribe(
        response => {
          if (!response['errors']) {
            clearInterval(this.timer);
<<<<<<< HEAD
            //console.log(response);
            //console.log("otp verified");
            
            for (let index = 0; index < this.servicesActivationStatus.length; index++) {
                    if(this.servicesActivationStatus[index] && index=== 0)
                        this.preRegLogin();
                    else if(this.servicesActivationStatus[index] && index=== 1)
                        this.generatevid();
            }

=======
            localStorage.setItem('loggedIn', 'true');
            this.authService.setToken();
            this.regService.setLoginId(this.inputContactDetails);
            this.disableVerify = false;
            this.router.navigate(['dashboard']);
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca
          } else {
            this.disableVerify = false;
            this.showOtpMessage();
          }
        },
        error => {
          this.disableVerify = false;
          this.showErrorMessage();
        }
      );
    }
  }
<<<<<<< HEAD
  preRegLogin(){
    localStorage.setItem('loggedIn', 'true');
    this.authService.setToken();
    this.regService.setLoginId(this.inputContactDetails);
    this.disableVerify = false;
    this.router.navigate(['dashboard']);
  }
  generatevid(){
      console.log("generate Vid");
      this.dataService.generateVid(this.inputUinDetails,this.inputOTP).subscribe(response=>{
        console.log(response);
      })

  }
=======
>>>>>>> 42c1877c2f4cac2911a65ed6915567fd3ff092ca

  showOtpMessage() {
    this.inputOTP = '';
    let factory = new LanguageFactory(localStorage.getItem('langCode'));
    let response = factory.getCurrentlanguage();
    let otpmessage = response['message']['login']['msg3'];
    const message = {
      case: 'MESSAGE',
      message: otpmessage
    };
    this.dialog.open(DialougComponent, {
      width: '350px',
      data: message
    });
  }

  showErrorMessage() {
    let factory = new LanguageFactory(localStorage.getItem('langCode'));
    let response = factory.getCurrentlanguage();
    let errormessage = response['error']['error'];
    const message = {
      case: 'MESSAGE',
      message: errormessage
    };
    this.dialog.open(DialougComponent, {
      width: '350px',
      data: message
    });
  }
}
