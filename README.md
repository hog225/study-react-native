# React Native App
## 초기 세팅
    npm 이용을 위해 nodejs 설치 필요 

### Expo 이용
----
    npm install -g create-react-native-app
    npx create-react-native-app [myApp]
    npm install -g react-native-cli
    cd [myApp]
    expo start
    1. 실행 
        - expo start 시 웹사이트가 뜬다.
        - 폰에서 Expo 앱을 다운받아서 웹사이트의 QR 코드를 스캔하면 동작 

### react-native 이용
----
    Android 혹은 iOS 시험 환경 구성 후 
    npx react-native init [Proj-Name]
    cd [myApp]
    npx react-native run-android
    react-native run-ios

    git clone 시
    - npm install - dependency install
    CTRL+M debug mode 


## Android 시험 환경 구성
---
    1. Android Studuio 설치 필요 (설치 시 아래 사항 확인)
    - Android SDK
    - Android SDK Platform
    - Performance (Intel ® HAXM) (See here for AMD)
    - Android Virtual Device
    2. 우측 하단 Configure > SDK Manager > Appearance & Behavior > System Settings > Android SDK 
    Show package Detail 누른 뒤 아래 내용 설치 
        SDK Platforms 탭
            - Android SDK Platform 28
            - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
        SDK Tool Tab
            - Android SDK Build-Tools 28.0.3
    3. 환경변수 추가 
    - ANDROID_HOME : C:\Users\{username}\AppData\Local\Android\Sdk
    4. 환경변수 Path 수정 
    - C:\Users\{username}\AppData\Local\Android\Sdk\platform-tools
    5. npx react-native run-android 로 실행 
    - npx 를 붙혀야 해당 Project의 React-native 버전을 이용해서 App을 Build 하고 실행 하는 듯 
        
    

## iOS 시험 환경 구성 (MAC)
---
    Mac book 으로 Xcode 설치 후 테스트 
    
    sudo gem install cocoapods
    cd [myApp]/ios
    pod install 
    delete build folder

    cd ..
    react-native run-ios

## Lib
---
    npm install --save react-native-gesture-handler react-native-reanimated
    npm install --save uuid react-navigation react-navigation-stack react-navigation-tabs
## Tip
---
    folder import 시 folder 내부에 index.js 파일이 존재 해야 한다. 

## Project Struct 
--- 
    [myApp]
    |---[src]
    |   |---[components]
    |   |---theme.js (테마관련 설정)
    |   |---index.js (네비게이션 설정 정보)
    
