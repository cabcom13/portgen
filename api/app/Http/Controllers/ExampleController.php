<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function save(Request $request){
        $elementID = $request->input('id');
        $element_page_data = json_encode($request->input('page'));
        $element_child_data = json_encode($request->input('data'));
        $update = DB::table('elements')
        ->where('id', $elementID)
        ->update(['page' => $element_page_data,'childs' => $element_child_data]);
        if($update){
            $statustext = 'Erfolgreich gespeichert';
        } else {
            $statustext = '';
        }
        
        return response()->json(['status' => $update, 'text' => $statustext]);
    }

    public function addPreset(Request $request){
        $newelementID =DB::table('elements')->insertGetId([
            'page' => '{"backgroundimage":"no.png","backgroundimageID":0,"backgroundcolor":"#FFFFFF","opacity":1}',
            'childs' => '[]'
        ]);
      
        $insert = DB::table('presets')->insertGetId([
            'preset_category_id' => $request->input('preset_category_id'),
            'title' => htmlspecialchars($request->input('title')),
            'elementID' => $newelementID
        ]);

        if($insert){
            $statustext = 'Erfolgreich gespeichert';
        } else {
            $statustext = '';
        }
        return response()->json([
            'status' => true,
            'text' => $statustext,
            'data' => [
                "id" => (int)$insert,
                "title" =>htmlspecialchars($request->input('title')),
           
            ]
            
            ]);
    }


    //
}
