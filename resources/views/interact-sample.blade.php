<html>
<head>
    <meta charset="UTF-8">
    <title> Magazine CMS - @yield('htmlheader_title', 'Your title here') </title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.4 -->
    <link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons -->
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="{{ asset('/css/AdminLTE.css') }}" rel="stylesheet" type="text/css" />
    <!-- custom style -->
    <link href="{{ asset('/css/custom.css') }}" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
          page. However, you can choose any other skin. Make sure you
          apply the skin class to the body tag so the changes take effect.
    -->
    <link href="{{ asset('/css/skins/skin-blue.css') }}" rel="stylesheet" type="text/css" />
    <!-- iCheck -->
    <link href="{{ asset('/plugins/iCheck/square/blue.css') }}" rel="stylesheet" type="text/css" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="{{ asset('/plugins/jQuery/jQuery-2.1.4.min.js') }}"></script>
    <!-- Bootstrap 3.3.2 JS -->
    <script src="{{ asset('/js/bootstrap.min.js') }}" type="text/javascript"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('/js/app.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('/js/autosize.js') }}" type="text/javascript"></script>
    <!-- DataTables -->
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{ asset('plugins/datatables/dataTables.bootstrap.min.js')}}"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.6/interact.min.js"></script>
</head>
<body>
<style>

    body{
    background-color: blue;
    }
    #drag-1, #drag-2 {
        width: 25%;
        min-height: 6.5em;
        margin: 0px;
        background-color: transparent;
        color: white;
        border: solid black 1px;
        border-radius: 0.75em;
        padding: 4%;
        position: absolute;
        -webkit-transform: translate(0px, 0px);
        transform: translate(0px, 0px);
        padding: 0px;
        padding-top: 10px;
    }
    #drag-1, #drag-2:focus{
        outline-style: solid;
        outline-width: 1px;
    }
    #drag-me::before {
        content: "#" attr(id);
        font-weight: bold;
    }
    textarea {
        padding: 10px;
        vertical-align: top;
        width: 98%;
        margin: 5px;
        resize:none;
        background: transparent;
    }
    textarea:focus {
        resize: both;
    }
    .jeje{
        border: solid black 1px;
        height: 500px;
        padding: 0px !important;
        background-color: white;
    }
    .draggable:focus{
        cursor: hand;
    }

</style>

    <div class="col-md-8 jeje" style="z-index: -10">

        <div id="drag-2" class="draggable" style="z-index: 1">
           <img src="{{asset('/img/projects/ahm.png')}}">
        </div>

        <div id="drag-1" class="draggable form-group" style="transform: translate(10%, 10%);">
            <textarea style="color: black;border: none;"  ></textarea>
        </div>
    </div>
    <div class="blus" style="z-index: -100;background-color: red">
asdasdasd
    </div>

</body>
<script>

    $(function () {
        autosize($('textarea'));
        interact('.draggable')
                .draggable({
                    // enable inertial throwing
                    inertia: true,
                    // keep the element within the area of it's parent
                    restrict: {
                        restriction: "parent",
                        endOnly: true,
                        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                    },
                    // enable autoScroll
                    autoScroll: true,

                    // call this function on every dragmove event
                    onmove: dragMoveListener,
                    // call this function on every dragend event
                    onend: function (event) {
                        var textEl = event.target.querySelector('p');

                        textEl && (textEl.textContent =
                                'moved a distance of '
                                + (Math.sqrt(event.dx * event.dx +
                                        event.dy * event.dy)|0) + '%');
                        document.body.style.cursor = 'default';
                    }

                });
        function hand(){
            document.body.style.cursor = 'hand';
        }
        function dragMoveListener (event) {
            var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
                    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
                    target.style.transform =
                            'translate(' + x + '%, ' + y + '%)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
            document.body.style.cursor = 'none';
        }

        // this is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener;


    })

</script>
</html>