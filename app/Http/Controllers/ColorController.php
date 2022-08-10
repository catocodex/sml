<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Color;
use Alert;

class ColorController extends Controller
{

    public function index()
    {
        return view('frontend.color.setup');
    }

    public function update(Request $request)
    {
        try {
        
            if ($request->has('primary_color')) {
                $system = Color::where('name', 'primary_color')->updateOrCreate([
                    'name' => 'primary_color',
                    'value' => $request->primary_color,
                ]);
            }
            if ($request->has('secondary_color')) {
                $system = Color::where('name', 'secondary_color')->updateOrCreate([
                    'name' => 'secondary_color',
                    'value' => $request->secondary_color,
                ]);
            }
            if ($request->has('text_color')) {
                $system = Color::where('name', 'text_color')->updateOrCreate([
                    'name' => 'text_color',
                    'value' => $request->text_color,
                ]);
            }
            if ($request->has('topbar')) {
                $system = Color::where('name', 'topbar')->updateOrCreate([
                    'name' => 'topbar',
                    'value' => $request->topbar,
                ]);
            }
            if ($request->has('primary_navbar')) {
                $system = Color::where('name', 'primary_navbar')->updateOrCreate([
                    'name' => 'primary_navbar',
                    'value' => $request->primary_navbar,
                ]);
            }
            if ($request->has('btn')) {
                $system = Color::where('name', 'btn')->updateOrCreate([
                    'name' => 'btn',
                    'value' => $request->btn,
                ]);
            }
            if ($request->has('btn_hover')) {
                $system = Color::where('name', 'btn_hover')->updateOrCreate([
                    'name' => 'btn_hover',
                    'value' => $request->btn_hover,
                ]);
            }
            if ($request->has('btn_color')) {
                $system = Color::where('name', 'btn_color')->updateOrCreate([
                    'name' => 'btn_color',
                    'value' => $request->btn_color,
                ]);
            }
            if ($request->has('btn_hover_color')) {
                $system = Color::where('name', 'btn_hover_color')->updateOrCreate([
                    'name' => 'btn_hover_color',
                    'value' => $request->btn_hover_color,
                ]);
            }
            if ($request->has('section_title')) {
                $system = Color::where('name', 'section_title')->updateOrCreate([
                    'name' => 'section_title',
                    'value' => $request->section_title,
                ]);
            }
            if ($request->has('section_bg')) {
                $system = Color::where('name', 'section_bg')->updateOrCreate([
                    'name' => 'section_bg',
                    'value' => $request->section_bg,
                ]);
            }
            if ($request->has('footer_title')) {
                $system = Color::where('name', 'footer_title')->updateOrCreate([
                    'name' => 'footer_title',
                    'value' => $request->footer_title,
                ]);
            }
            if ($request->has('footer_link')) {
                $system = Color::where('name', 'footer_link')->updateOrCreate([
                    'name' => 'footer_link',
                    'value' => $request->footer_link,
                ]);
            }
            if ($request->has('footer_bg')) {
                $system = Color::where('name', 'footer_bg')->updateOrCreate([
                    'name' => 'footer_bg',
                    'value' => $request->footer_bg,
                ]);
            }

            Alert::success(translate('Done'), translate('Color Updated Successfully'));
            return back();

        } catch (\Throwable $th) {
            Alert::success(translate('Opps'), translate('Something went wrong'));
            return back();
        }
    }

    //ENDS
}
