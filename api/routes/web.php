<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
   echo 'asdasd';
});

$router->get('/presets', function () use ($router) {

    function getPresets($preset_category_id){
        $return_data = [];
        $results = app('db')->select("SELECT * FROM presets WHERE preset_category_id = $preset_category_id");
        foreach($results as $result){
            array_push($return_data, [
                "id" => $result->preset_id,
                "title" => $result->title,
                "elementID" => $result->elementID
            ]);
        }
        return $return_data;
    }

    $results = app('db')->select("SELECT * FROM preset_category");
    $return_data = [];
    foreach($results as $result){
       
        array_push($return_data, [
            "id" => $result->preset_category_id,
            "text" => $result->text,
            "active"=> false,
            "items"=> getPresets($result->preset_category_id)
        ]);
 
    }
    return response()->json($return_data);
});
$router->get('/clipartimages', function () use ($router) {
    $dir = '/img/cliparts/';
    $files = scandir('../../public'.$dir);
    $images  = [];
    $id = 0;
    foreach($files as $file){
        if($file != '.' && $file != '..'){
           array_push($images, [
            "id" => $id,
            "src" =>   $dir.$file,
            "filename" => $file  
           ]);
           
            $id++;
        }
    }
    return response()->json($images);
 
});
$router->get('/backgroundimages', function () use ($router) {
    $dir = '/img/bg/';
    $files = scandir('../../public'.$dir);
    $images  = [];
    $id = 0;
    foreach($files as $file){
        if($file != '.' && $file != '..'){
           array_push($images, [
            "id" => $id,
            "src" =>   $dir.$file,
            "filename" => $file  
           ]);
           
            $id++;
        }
    }
    return response()->json($images);

});

$router->post('/elements/{id}', function ($id) use ($router) {
    print_r($id);
});
$router->get('/elements1', function () use ($router) {
     $results = app('db')->select("SELECT * FROM elements");
        $x = json_decode($results[0]->childs);
     return response()->json($x);

});


$router->get('/elements/{id}', function ($id) use ($router) {
    if(isset($id)){
        $results = app('db')->select("SELECT * FROM elements WHERE id = ".$id);
        if($results >0){

            $page_json = json_decode($results[0]->page);
            $childs_json = json_decode($results[0]->childs);
            $return = array("id" =>$id, "page" => $page_json,"childs"=>$childs_json);
            return response()->json($return); 
        } else {
            $x = array('error' => 'nothing found');
            return response()->json($x); 
        }
    }


});


