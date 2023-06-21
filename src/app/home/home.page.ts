import { Component } from '@angular/core';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZIM } from "zego-zim-web";

declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  private zp: ZegoUIKitPrebuilt = new ZegoUIKitPrebuilt;

  ionViewDidEnter() {
    this.requestCameraPermissions();
    this.requestMicPermissions();
    this.createEngine();
  }

  requestCameraPermissions() {
    cordova.plugins.permissions.requestPermissions(
      [
        cordova.plugins.permissions.CAMERA
      ],
      function(status: { hasPermission: any; }) {
        if (status.hasPermission) {
          console.log('Permission granted');
        } else {
          console.log('Permission denied');
        }
      },
      function() {
        console.log('Permission request error');
      }
    );
  }

  requestMicPermissions() {
    cordova.plugins.permissions.requestPermissions(
      [
        cordova.plugins.permissions.RECORD_AUDIO
      ],
      function(status: { hasPermission: any; }) {
        if (status.hasPermission) {
          console.log('Permission granted');
        } else {
          console.log('Permission denied');
        }
      },
      function() {
        console.log('Permission request error');
      }
    );
  }

  createEngine() {
    const myText: string = "Hello World";
    console.log(myText);
    console.log('------',navigator.userAgent)
    // Set the required parameters.
    const roomID: string = '123456';
    const userID: string = "123321";//Math.floor(Math.random() * 10000) + "";
    const userName: string = "userName" + userID;
    const appID: number = Your app id;
    const serverSecret: string = "Your Server secret";

    // Generate a Kit Token using the ZegoUIKitPrebuilt method.
    const kitToken: string = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

    // Create an instance of ZegoUIKitPrebuilt and join the room.
    this.zp = ZegoUIKitPrebuilt.create(kitToken);
    this.zp.addPlugins({ ZIM });
  }

  startRTC() {
    const targetUser = {
      userID:'123',
      userName:'123'
    };

    this.zp.sendCallInvitation({
      callees: [targetUser],
      callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
      timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
     }).then((res) => {
      console.warn(res);
     })
     .catch((err) => {
     console.warn(err);
     });

    // zp.joinRoom({
    //   //@ts-ignore
    //   container: document.querySelector("#root"),
    //   showPreJoinView: false,
    //   showLeavingView: false,
    //   videoCodec:"VP8",
    //   sharedLinks: [{
    //     url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
    //   }],
    //   scenario: {
    //     mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoScenario.OneONoneCall].
    //   }
    // });
  }
}
