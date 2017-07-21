<?php echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'; ?>
<widget
        xmlns='{{$widget['_xmlns']}}'
        xmlns:cdv='{{$widget['_xmlns:cdv']}}' id='{{$widget['_id']}}' version='{{$widget['_version']}}'>
    <name>{{$widget['name']}}</name>
    <description>{{$widget['description']}}</description>
    <author email='{{$widget["author"]["_email"]}}' href='{{$widget["author"]["_href"]}}'>
        {{$widget["author"]["_text"]}}
    </author>
    <content src='{{$widget["content"]["_src"]}}'/>
    <access origin='*' />
    <allow-navigation href='http://ionic.local/*' />
    <allow-intent href='http://*/*' />
    <allow-intent href='https://*/*' />
    <allow-intent href='tel:*' />
    <allow-intent href='sms:*' />
    <allow-intent href='mailto:*' />
    <allow-intent href='geo:*' />
    <preference name='webviewbounce' value='false' />
    <preference name='UIWebViewBounce' value='false' />
    <preference name='DisallowOverscroll' value='true' />
    <preference name='android-minSdkVersion' value='16' />
    <preference name='BackupWebStorage' value='none' />
    <preference name='SplashMaintainAspectRatio' value='true' />
    <preference name='FadeSplashScreenDuration' value='2000' />
    <preference name='SplashShowOnlyFirstTime' value='false' />
    <preference name='SplashScreenDelay' value='4000' />
    <preference name='SplashScreen' value='screen' />
    <preference name='android-targetSdkVersion' value='19' />
    <feature name='{{$widget["feature"]["_name"]}}'>
        <param name='{{$widget["feature"]["param"]["_name"]}}' value='{{$widget["feature"]["param"]["_value"]}}' onload='{{$widget["feature"]["param"]["_onload"]}}'/>
    </feature>
    <platform name='ios'>
      <icon height='57' src='www/res/icons/ios/icon-57.png' width='57' />
      <icon height='114' src='www/res/icons/ios/icon-57-2x.png' width='114' />
      <icon height='40' src='www/res/icons/ios/icon-40.png' width='40' />
      <icon height='50' src='www/res/icons/ios/icon-50.png' width='50' />
      <icon height='100' src='www/res/icons/ios/icon-50-2x.png' width='100' />
      <icon height='60' src='www/res/icons/ios/icon-60.png' width='60' />
      <icon height='120' src='www/res/icons/ios/icon-60-2x.png' width='120' />
      <icon height='180' src='www/res/icons/ios/icon-60-3x.png' width='180' />
      <icon height='72' src='www/res/icons/ios/icon-72.png' width='72' />
      <icon height='144' src='www/res/icons/ios/icon-72-2x.png' width='144' />
      <icon height='76' src='www/res/icons/ios/icon-76.png' width='76' />
      <icon height='152' src='www/res/icons/ios/icon-76-2x.png' width='152' />
      <icon height='29' src='www/res/icons/ios/icon-small.png' width='29' />
      <icon height='58' src='www/res/icons/ios/icon-small-2x.png' width='58' />
      <splash height='1136' src='www/res/screens/ios/screen-iphone-568h-2x.png' width='640' />
      <splash height='1334' src='www/res/screens/ios/screen-iphone-portrait-667h.png' width='750' />
      <splash height='2208' src='www/res/screens/ios/screen-iphone-portrait-736h.png' width='1242' />
      <splash height='1242' src='www/res/screens/ios/screen-iphone-landscape-736h.png' width='2208' />
      <splash height='1536' src='www/res/screens/ios/screen-ipad-landscape-2x.png' width='2048' />
      <splash height='768' src='www/res/screens/ios/screen-ipad-landscape.png' width='1024' />
      <splash height='2048' src='www/res/screens/ios/screen-ipad-portrait-2x.png' width='1536' />
      <splash height='1024' src='www/res/screens/ios/screen-ipad-portrait.png' width='768' />
      <splash height='960' src='www/res/screens/ios/screen-iphone-portrait-2x.png' width='640' />
      <splash height='480' src='www/res/screens/ios/screen-iphone-portrait.png' width='320' />
    </platform>
    <platform name='android'>
      <icon src='www/res/icons/android/icon-36-ldpi.png' density='ldpi'></icon>
      <icon src='www/res/icons/android/icon-48-mdpi.png' density='mdpi'></icon>
      <icon src='www/res/icons/android/icon-72-hdpi.png' density='hdpi'></icon>
      <icon src='www/res/icons/android/icon-96-xhdpi.png' density='xhdpi'></icon>
      <icon src='www/res/icons/android/icon-144-xxhdpi.png' density='xxhdpi'></icon>
      <icon src='www/res/icons/android/icon-192-xxxhdpi.png' density='xxxhdpi'></icon>
      <splash src='www/res/screens/android/screen-ldpi-landscape.png' density='land-ldpi'></splash>
      <splash src='www/res/screens/android/screen-mdpi-landscape.png' density='land-mdpi'></splash>
      <splash src='www/res/screens/android/screen-hdpi-landscape.png' density='land-hdpi'></splash>
      <splash src='www/res/screens/android/screen-xhdpi-landscape.png' density='land-xhdpi'></splash>
      <splash src='www/res/screens/android/screen-ldpi-portrait.png' density='port-ldpi'></splash>
      <splash src='www/res/screens/android/screen-mdpi-portrait.png' density='port-mdpi'></splash>
      <splash src='www/res/screens/android/screen-hdpi-portrait.png' density='port-hdpi'></splash>
      <splash src='www/res/screens/android/screen-xhdpi-portrait.png' density='port-xhdpi'></splash>
    </platform>
    <icon src='{{$widget["icon"][0]["_src"]}}'></icon>
    <plugin name='com-sarriaroman-photoviewer' spec='1.1.10' />
    <plugin name='cordova-plugin-console' spec='1.0.5' />
    <plugin name='cordova-plugin-device' spec='1.1.6' />
    <plugin name='cordova-plugin-file' spec='4.3.3' />
    <plugin name='cordova-plugin-file-transfer' spec='1.6.3' />
    <plugin name='cordova-plugin-inapppurchase' spec='1.1.0' />
    <plugin name='cordova-plugin-splashscreen' spec='4.0.3' />
    <plugin name='cordova-plugin-statusbar' spec='2.2.1' />
    <plugin name='cordova-plugin-whitelist' spec='1.3.1' />
    <plugin spec='https://github.com/MobileChromeApps/zip.git#977b57d' />
    <plugin name='ionic-plugin-keyboard' spec='2.2.1' />
    <plugin spec='https://github.com/pbernasconi/cordova-progressIndicator.git#3f2885e' />
    <plugin name='cordova-plugin-inappbrowser' spec='^1.7.1' />
</widget>
