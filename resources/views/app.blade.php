<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title> Laravel-Vue - @yield('title') </title>


        <!-- Styles -->

        <link disabled id="theme" rel="stylesheet" href="{{ mix('css/themes/azure.css') }}">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">


        <!-- Scripts -->

        <script src="{{ mix('js/app.js') }}" defer></script>

    </head>

    <body class="app">

        @if (app()->isLocal())
            <script src="http://localhost:3000/browser-sync/browser-sync-client.js" async></script>
        @endif

        <div id="app">

{{--            @yield('content')--}}

        </div>
    </body>
</html>

