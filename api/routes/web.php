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
   
});

$router->get('/presets', function () use ($router) {
    return response()->json([
        [
        "id" => 0,
        "value"=> 0,
        "text"=> "Slim Edition",
        "active"=> true,
        "items"=> [
            [
            "id" => 0,
            "title" => "ich kann alleine",
            "elementID" => 0
            ],[
            "id" => 1,
            "title" => "ich kann alleine",
            "elementID" => 1
            ]
        ]
        ],[
            "id" => 1,
            "value"=> 1,
            "text"=> "Summer Edition",
            "active"=> true,
            "items"=> []
        ]

    ]);
});
$router->get('/clipartimages', function () use ($router) {
    return response()->json([
        
        [
            "id" => 0,
            "src" => "/img/cliparts/1.jpg",
            "filename" => "1.jpg"
        ],[
            "id" => 1,
            "src" =>  "/img/cliparts/sonne.png",
            "filename" => "sonne.png"
        ]
        

    ]);
});
$router->get('/backgroundimages', function () use ($router) {
    return response()->json([
        [
            "id" => 0,
            "src" => "/img/bg/no.png",
            "filename" => "no.png"
        ],[
            "id" => 1,
            "src" => "/img/bg/flower.png",
            "filename" => "flower.png"
        ],
        [
            "id" => 2,
            "src" => "/img/bg/flower1.png",
            "filename" => "flower1.png"
        ]
    ]);
});

$router->post('/elements/{id}', function ($id) use ($router) {
    print_r($id);
});
$router->get('/elements1', function () use ($router) {
     $results = app('db')->select("SELECT * FROM elements");
        $x = json_decode($results[0]->childs);
     return response()->json($x);
    #$string = '[{"width":200,"height":21,"top":170,"left":10,"draggable":true,"resizable":true,"minw":10,"minh":10,"axis":"both","parentLim":true,"snapToGrid":true,"aspectRatio":false,"zIndex":3,"transform":"rotate(20deg)","active":false,"class":"text apply-font","text":"NEUER TEXT","type":"text","style":{"background-color":"#EF9A9A","background-image":"","background-size":"","font-size":"12px","font-family":"Comic Sans MS","color":"#000000","letter-spacing":"0em","font-weight":800,"font-style":"","text-decoration":"","text-align":"center"}},{"width":300,"height":250,"top":370,"left":300,"draggable":true,"resizable":true,"minw":10,"minh":10,"axis":"both","parentLim":true,"snapToGrid":true,"aspectRatio":false,"zIndex":2,"type":"text","active":false,"class":"text","text":"NEUER TEXT13","style":{"background-color":"#EF9A4A","background-image":"","background-size":"","color":"#000000","font-size":"12px","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left"}},{"width":150,"height":21,"top":165,"left":342,"draggable":true,"resizable":true,"minw":10,"minh":10,"axis":"both","parentLim":true,"snapToGrid":true,"aspectRatio":false,"zIndex":3,"active":false,"type":"text","class":"text","text":"Dein Text hier","style":{"background-color":"transparent","font-size":"16px","color":"#000000","letter-spacing":"0em","font-weight":400,"font-style":"","text-decoration":"","text-align":"left"}}]';
    #print_r(json_decode($string));
});


$router->get('/elements/{id}', function ($id) use ($router) {
    return response()->json(
        [
            
            "id" => 0,
            "page"=> [
              "backgroundimage"=> "flower1.png",
              "backgroundimageID"=> 2,
              "backgroundcolor"=> "#f2ffe8",
              "opacity"=> ".7"
            ],
            "childs" => [
                [
                    "width"=> 200,
                    "height"=> 21,
                    "top"=> 170,
                    "left"=> 10,
                    "draggable"=> true,
                    "resizable"=> true,
                    "minw"=> 10,
                    "minh"=> 10,
                    "axis"=> "both",
                    "parentLim"=> true,
                    "snapToGrid"=> true,
                    "aspectRatio"=> false,
                    "zIndex"=> 3,
                    "transform"=> "rotate(20deg)",
                    "active"=> false,
                    "class"=> "text apply-font",
                    "text"=> "NEUER TEXT",
                    "type"=> "text",
                    "style" => [
                        "background-color"=> "#EF9A9A",
                        "background-image"=> "",
                        "background-size"=> "",
                        "font-size"=> "12px",
                        "font-family"=> "Comic Sans MS",
                        "color"=> "#000000",
                        "letter-spacing"=> "0em",
                        "font-weight"=> 800,
                        "font-style"=> "",
                        "text-decoration"=> "",
                        "text-align"=> "center"
                    ]
                ],
                [
                    "width"=> 300,
                    "height"=> 250,
                    "top"=> 370,
                    "left"=> 300,
                    "draggable"=> true,
                    "resizable"=> true,
                    "minw"=> 10,
                    "minh"=> 10,
                    "axis"=> "both",
                    "parentLim"=> true,
                    "snapToGrid"=> true,
                    "aspectRatio"=> false,
                    "zIndex"=> 2,
                    "type"=> "text",
                    "active"=> false,
                    "class"=> "text",
                    "text"=> "NEUER TEXT13",
                    "style"=> [
                      "background-color"=> "#EF9A4A",
                      "background-image"=> "",
                      "background-size"=> "",
                      "color"=> "#000000",
                      "font-size"=> "12px",
                      "letter-spacing"=> "0em",
                      "font-weight"=> 400,
                      "font-style"=> "",
                      "text-decoration"=> "",
                      "text-align"=> "left"
                    ]        
                ]
            
            ]
        ]
                
    );
});


