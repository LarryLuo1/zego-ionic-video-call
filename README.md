# README

## Project Configuration
### 1. Disable sourceMap

![](media/16868197786831/16868199035770.jpg)

### 2. Set `AllowInlineMediaPlayback` property
![](assets/16868216692069.jpg)

### 3. Set iOS camera and microphone permissions

![](media/16868197786831/16868199670979.jpg)

### 4. Set Android camera and microphone permissions
![](media/16868197786831/16868200151295.jpg)

## Implement Video Call

### 1. Add a `div` module to the page where Video Call needs to be displayed.
![](media/16868197786831/16868201149132.jpg)

### 2. Add permission request
- [Install `Android Permissions` plugin](https://danielsogl.gitbook.io/awesome-cordova-plugins/android-permissions#usage-documentation).
- Before initiating a call, we need to request camera and microphone permissions.
![](media/16868197786831/16868202373722.jpg)

### 3. Add start call method
- Install the ZEGO UIKit package using the following command.
```
npm install @zegocloud/zego-uikit-prebuilt@latest
```

- Import ZEGO UIKit SDK

```
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
```

- Update AppID and Server Secret with the Token obtained from your business backend. For more details, please refer to the [reference documentation](https://docs.zegocloud.com/article/14741).
![](media/16868197786831/16868202027197.jpg)

> For detailed usage instructions, please refer to the [official documentation](https://docs.zegocloud.com/article/15385).