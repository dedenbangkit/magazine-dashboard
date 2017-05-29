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
    <access origin='{{$widget["access"]["_origin"]}}'/>
    <allow-navigation href='http://ionic.local/*' />
    <allow-intent href='http://*/*' />
    <allow-intent href='https://*/*' />
    <allow-intent href='tel:*' />
    <allow-intent href='sms:*' />
    <allow-intent href='mailto:*' />
    <allow-intent href='geo:*' />
    <preference name='{{$widget["preference"][0]["_name"]}}' value='{{$widget["preference"][0]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][1]["_name"]}}' value='{{$widget["preference"][1]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][2]["_name"]}}' value='{{$widget["preference"][2]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][3]["_name"]}}' value='{{$widget["preference"][3]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][4]["_name"]}}' value='{{$widget["preference"][4]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][5]["_name"]}}' value='{{$widget["preference"][5]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][6]["_name"]}}' value='{{$widget["preference"][6]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][7]["_name"]}}' value='{{$widget["preference"][7]["_value"]}}'></preference>
    <preference name='{{$widget["preference"][8]["_name"]}}' value='{{$widget["preference"][8]["_value"]}}'></preference>
    <feature name='{{$widget["feature"]["_name"]}}'>
        <param name='{{$widget["feature"]["param"]["_name"]}}' value='{{$widget["feature"]["param"]["_value"]}}' onload='{{$widget["feature"]["param"]["_onload"]}}'/>
    </feature>
    <platform name='ios'>
        <icon src='{{$widget["platform"][0]["icon"][0]["_src"]}}' width='57' height='57'></icon>
        <icon src='{{$widget["platform"][0]["icon"][1]["_src"]}}' width='114' height='114'></icon>
        <icon src='{{$widget["platform"][0]["icon"][2]["_src"]}}' width='40' height='40'></icon>
        <icon src='{{$widget["platform"][0]["icon"][3]["_src"]}}' width='80' height='80'></icon>
        <icon src='{{$widget["platform"][0]["icon"][4]["_src"]}}' width='120' height='120'></icon>
        <icon src='{{$widget["platform"][0]["icon"][5]["_src"]}}' width='50' height='50'></icon>
        <icon src='{{$widget["platform"][0]["icon"][6]["_src"]}}' width='100' height='100'></icon>
        <icon src='{{$widget["platform"][0]["icon"][7]["_src"]}}' width='60' height='60'></icon>
        <icon src='{{$widget["platform"][0]["icon"][8]["_src"]}}' width='120' height='120'></icon>
        <icon src='{{$widget["platform"][0]["icon"][9]["_src"]}}' width='180' height='180'></icon>
        <icon src='{{$widget["platform"][0]["icon"][10]["_src"]}}' width='72' height='72'></icon>
        <icon src='{{$widget["platform"][0]["icon"][11]["_src"]}}' width='144' height='144'></icon>
        <icon src='{{$widget["platform"][0]["icon"][12]["_src"]}}' width='76' height='76'></icon>
        <icon src='{{$widget["platform"][0]["icon"][13]["_src"]}}' width='152' height='152'></icon>
        <icon src='{{$widget["platform"][0]["icon"][14]["_src"]}}' width='167' height='167'></icon>
        <icon src='{{$widget["platform"][0]["icon"][15]["_src"]}}' width='29' height='29'></icon>
        <icon src='{{$widget["platform"][0]["icon"][16]["_src"]}}' width='58' height='58'></icon>
        <icon src='{{$widget["platform"][0]["icon"][17]["_src"]}}' width='87' height='87'></icon>
        <splash src='{{$widget["platform"][0]["splash"][0]["_src"]}}' width='640' height='1136'></splash>
        <splash src='{{$widget["platform"][0]["splash"][1]["_src"]}}' width='750' height='1334'></splash>
        <splash src='{{$widget["platform"][0]["splash"][2]["_src"]}}' width='1242' height='2208'></splash>
        <splash src='{{$widget["platform"][0]["splash"][3]["_src"]}}' width='2208' height='1242'></splash>
        <splash src='{{$widget["platform"][0]["splash"][4]["_src"]}}' width='2048' height='1536'></splash>
        <splash src='{{$widget["platform"][0]["splash"][5]["_src"]}}' width='1024' height='768'></splash>
        <splash src='{{$widget["platform"][0]["splash"][6]["_src"]}}' width='1536' height='2048'></splash>
        <splash src='{{$widget["platform"][0]["splash"][7]["_src"]}}' width='768' height='1024'></splash>
        <splash src='{{$widget["platform"][0]["splash"][8]["_src"]}}' width='640' height='960'></splash>
        <splash src='{{$widget["platform"][0]["splash"][9]["_src"]}}' width='320' height='480'></splash>
    </platform>
    <platform name='android'>
        <icon src='{{$widget["platform"][1]["icon"][0]["_src"]}}' density='ldpi'></icon>
        <icon src='{{$widget["platform"][1]["icon"][1]["_src"]}}' density='mdpi'></icon>
        <icon src='{{$widget["platform"][1]["icon"][2]["_src"]}}' density='hdpi'></icon>
        <icon src='{{$widget["platform"][1]["icon"][3]["_src"]}}' density='xhdpi'></icon>
        <icon src='{{$widget["platform"][1]["icon"][4]["_src"]}}' density='xxhdpi'></icon>
        <icon src='{{$widget["platform"][1]["icon"][5]["_src"]}}' density='xxxhdpi'></icon>
        <splash src='{{$widget["platform"][1]["splash"][0]["_src"]}}' density='land-ldpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][1]["_src"]}}' density='land-mdpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][2]["_src"]}}' density='land-hdpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][3]["_src"]}}' density='land-xhdpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][4]["_src"]}}' density='port-ldpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][5]["_src"]}}' density='port-mdpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][6]["_src"]}}' density='port-hdpi'></splash>
        <splash src='{{$widget["platform"][1]["splash"][7]["_src"]}}' density='port-xhdpi'></splash>
    </platform>
    <icon src='{{$widget["icon"][0]["_src"]}}'></icon>
    <plugin name="com-sarriaroman-photoviewer" spec="^1.1.10" />
    <plugin name="cordova-plugin-console" spec="1.0.5" />
    <plugin name="cordova-plugin-device" spec="1.1.4" />
    <plugin name="cordova-plugin-file" spec="^4.3.3" />
    <plugin name="cordova-plugin-file-transfer" spec="^1.6.3" />
    <plugin name="cordova-plugin-splashscreen" spec="~4.0.1" />
    <plugin name="cordova-plugin-statusbar" spec="2.2.1" />
    <plugin name="cordova-plugin-whitelist" spec="1.3.1" />
    <plugin name="cordova-plugin-zip" spec="https://github.com/MobileChromeApps/zip.git" />
    <plugin name="ionic-plugin-keyboard" spec="~2.2.1" />
    <plugin name="org.pbernasconi.progressindicator" spec="https://github.com/pbernasconi/cordova-progressIndicator.git" />
</widget>
