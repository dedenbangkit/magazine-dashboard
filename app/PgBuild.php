<?php namespace App;
/**
 *   Author: Vitaliy Pitvalo
 *   Email: av.tehnik@gmail.com
 *   License: GPL
 *
 */
class PgBuild {

    private $ch;

    public function __construct($name, $password) {
        $this->ch = curl_init();
        curl_setopt($this->ch, CURLOPT_USERPWD, "$name:$password");
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, false);
    }
    public function getApps() {
        $url = "https://build.phonegap.com/api/v1/apps";
        curl_setopt($this->ch, CURLOPT_URL, $url);
        $output = curl_exec($this->ch);
        $obj = json_decode($output);
        return json_encode($obj->apps);
    }
    public function uploadApp($file, $title, $createMethod) {
        $url = "https://build.phonegap.com/api/v1/apps";
        curl_setopt($this->ch, CURLOPT_POST, 1);
        curl_setopt($this->ch, CURLOPT_URL, $url);
        $post = array(
            "data" => json_encode(array('create_method' => $createMethod, 'title' => $title)),
            "repo" => 'https://github.com/jdnichollsc/Ionic-Starter-Template.git'
        );
        curl_setopt($this->ch, CURLOPT_POSTFIELDS, $post);
        $output = curl_exec($this->ch);
        $obj = json_decode($output);
        if (is_object($obj) && isset($obj->id)) {
            return json_encode($obj->id);
        } else {
            return false;
        }
    }
    public function checkApp($id) {
        $app = $this->getApp($id);
        if ($app) {
            return json_encode($app->status);
        } else {
            return false;
        }
    }
    public function getApp($id) {
        $url = "https://build.phonegap.com/api/v1/apps/" . $id;
        curl_setopt($this->ch, CURLOPT_URL, $url);
        $output = curl_exec($this->ch);
        $out = json_decode($output);
        if (is_object($out)) {
            return json_encode($out);
        } else {
            return false;
        }
    }
    public function getDownloadLink($id, $platform) {
        $app = $this->getApp($id);
        if ($app->status->{$platform} == 'complete') {
            $url = "https://build.phonegap.com" . $app->download->{$platform};
            curl_setopt($this->ch, CURLOPT_URL, $url);
            $data = curl_exec($this->ch);
            if (is_object($data) && isset($data->location)) {
                return json_encode($data->location);
            } else {
                false;
            }
        }
    }
    public function deleteApp($id) {
        $url = "https://build.phonegap.com/api/v1/apps/" . $id;
        curl_setopt($this->ch, CURLOPT_URL, $url);
        curl_setopt($this->ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
        $r = curl_exec($this->ch);
        return json_encode($r);
    }
    public function deleteApps() {
        $apps = $this->getApps();
        foreach ($apps as $app) {
            $this->deleteApp($app->id);
        }
    }
    public function __destruct() {
        curl_close($this->ch);
    }
}
