# Place-Pick-App

## react-native-maps (google maps) 설정

npm 설치:

```
npm install react-native-maps --save
```

## iOS

Podfile에 코드추가 `Podfile`:

```
pod 'GoogleMaps'
pod 'Google-Maps-iOS-Utils'
```

ios/

```
pod install
```

AppDelegate.mm 에 import 추가 및 api키 등록:

```
#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <GoogleMaps/GoogleMaps.h> <<-- 추가
```

api key 추가:

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"GoogleMapTest";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  [GMSServices provideAPIKey:@"GOOGLE_API_KEY"]; <<--- 추가
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
```

xcode project open 후 Libraries 폴더에 파일 추가:
"../node_modules/react-native-maps/ios/AirGoogleMaps 파일 및 AirMaps.xcodeproj

사이드 바에 PROJECT 선택 후 Apple Clang - Preprocessing 에서 Preprocessor Macros 에 + 클릭 후

```
HAVE_GOOGLE_MAPS=1
```

위에 값 추가

## Android

android 설정 AndroidManifest.xml 에 api 코드 추가:

```
 <application>
   ...
   <meta-data android:name="com.google.android.geo.API_KEY" android:value="GOOGLE_API_KEY"/>
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
 </application>
```

## react-native-config 설정 방법

npm 설치:

```
npm install react-native-config
```

## Android

최상위 폴더에 .env 파일 생성 후 밑에 처럼 환경변수 설정:

```
GOOGLE_API_KEY=12345671235123
```

android/app/build.gradle 파일에 밑에 코드 추가:

```
apply plugin: "com.android.application"
apply plugin: "com.facebook.react"

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

android/app/build.gradle 파일에 밑에 코드 추가:

```
defaultConfig {
    ...
    targetSdkVersion rootProject.ext.targetSdkVersion
    resValue "string", "build_config_package", "패키지 명"
}
```

AndroidManifest.xml 해당 파일에서 사용법:

```
 <meta-data android:name="com.google.android.geo.API_KEY" android:value="@string/GOOGLE_API_KEY" />
```

## iOS

AppDelegate.mm 에 import 추가 및 env 사용법:

```
#import "RNCConfig.h"

NSString *apiKey = [RNCConfig envFor: @"GOOGLE_API_KEY" ];
[GMSServices provideAPIKey:apiKey];
```
