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
        DB::table('elements')
        ->where('id', 1)
        ->update(['page' => $element_page_data,'childs' => $element_child_data]);
        return response()->json($element_child_data);
    }

    //
}
