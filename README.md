# React Native App
## 초기 세팅
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

    CTRL+M debug mode 


## Android 시험 환경 구성
---
    * 웹 참조 - https://blog.wonhada.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8Creact-native-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/
    Android Studuio 설치 필요 (AVD 도 같이 설치 되어야함)
    SDK 관리자에서 SDK 설치 
        Google APIs
        Intel x86 Atom System Image
        Intel x86 Atom_64 System Image
        Google APIs Intel x86 Atom_64 System Image
    Android SDK Build Tools 
        Android SDK Build-Tools 23.0.1
    선택 후 설치 
    {$SDK}\emulator path를 환경변수 PATH 에 추가 