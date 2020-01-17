'use strict'

window.addEventListener("load", function(){

    
    $(document).ready(function(){

        // "powermode.enabled": true;

        // Slider
        if(window.location.href.indexOf('index') > -1){
            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200,
                randomStart: false,
                auto: true,
                pager: false
            });
        }

        // ###################################################################### //

        // Posts
        if(window.location.href.indexOf('index') > -1){
            var posts = [ // Array de JSONs con los POSTS
                {
                    title: 'Prueba de título 1',
                    date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas placerat tempus. Ut porta turpis vitae augue pharetra, non consequat sem gravida. Vestibulum eleifend turpis vitae commodo lacinia. Nulla laoreet ac nibh eu ornare. Pellentesque condimentum nulla quis turpis viverra, vitae pulvinar lacus volutpat. Sed interdum viverra rhoncus. Nunc malesuada laoreet molestie. Praesent rhoncus ipsum augue, luctus ullamcorper ante sodales elementum. Morbi id mi at erat faucibus tempor nec a nibh. Aenean non placerat massa, eu placerat dui. Pellentesque consectetur ultrices purus, in porta odio luctus a. Vivamus et commodo elit. Nullam nec nibh ornare, eleifend magna quis, tempus mi. Nullam et lobortis nulla. Etiam nulla sapien, euismod porttitor vestibulum nec, cursus ac diam.'
                },
                {
                    title: 'Prueba de título 2',
                    date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas placerat tempus. Ut porta turpis vitae augue pharetra, non consequat sem gravida. Vestibulum eleifend turpis vitae commodo lacinia. Nulla laoreet ac nibh eu ornare. Pellentesque condimentum nulla quis turpis viverra, vitae pulvinar lacus volutpat. Sed interdum viverra rhoncus. Nunc malesuada laoreet molestie. Praesent rhoncus ipsum augue, luctus ullamcorper ante sodales elementum. Morbi id mi at erat faucibus tempor nec a nibh. Aenean non placerat massa, eu placerat dui. Pellentesque consectetur ultrices purus, in porta odio luctus a. Vivamus et commodo elit. Nullam nec nibh ornare, eleifend magna quis, tempus mi. Nullam et lobortis nulla. Etiam nulla sapien, euismod porttitor vestibulum nec, cursus ac diam.'
                },
                {
                    title: 'Prueba de título 3',
                    date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas placerat tempus. Ut porta turpis vitae augue pharetra, non consequat sem gravida. Vestibulum eleifend turpis vitae commodo lacinia. Nulla laoreet ac nibh eu ornare. Pellentesque condimentum nulla quis turpis viverra, vitae pulvinar lacus volutpat. Sed interdum viverra rhoncus. Nunc malesuada laoreet molestie. Praesent rhoncus ipsum augue, luctus ullamcorper ante sodales elementum. Morbi id mi at erat faucibus tempor nec a nibh. Aenean non placerat massa, eu placerat dui. Pellentesque consectetur ultrices purus, in porta odio luctus a. Vivamus et commodo elit. Nullam nec nibh ornare, eleifend magna quis, tempus mi. Nullam et lobortis nulla. Etiam nulla sapien, euismod porttitor vestibulum nec, cursus ac diam.'
                },
                {
                    title: 'Prueba de título 4',
                    date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas placerat tempus. Ut porta turpis vitae augue pharetra, non consequat sem gravida. Vestibulum eleifend turpis vitae commodo lacinia. Nulla laoreet ac nibh eu ornare. Pellentesque condimentum nulla quis turpis viverra, vitae pulvinar lacus volutpat. Sed interdum viverra rhoncus. Nunc malesuada laoreet molestie. Praesent rhoncus ipsum augue, luctus ullamcorper ante sodales elementum. Morbi id mi at erat faucibus tempor nec a nibh. Aenean non placerat massa, eu placerat dui. Pellentesque consectetur ultrices purus, in porta odio luctus a. Vivamus et commodo elit. Nullam nec nibh ornare, eleifend magna quis, tempus mi. Nullam et lobortis nulla. Etiam nulla sapien, euismod porttitor vestibulum nec, cursus ac diam.'
                },
                {
                    title: 'Prueba de título 5',
                    date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas placerat tempus. Ut porta turpis vitae augue pharetra, non consequat sem gravida. Vestibulum eleifend turpis vitae commodo lacinia. Nulla laoreet ac nibh eu ornare. Pellentesque condimentum nulla quis turpis viverra, vitae pulvinar lacus volutpat. Sed interdum viverra rhoncus. Nunc malesuada laoreet molestie. Praesent rhoncus ipsum augue, luctus ullamcorper ante sodales elementum. Morbi id mi at erat faucibus tempor nec a nibh. Aenean non placerat massa, eu placerat dui. Pellentesque consectetur ultrices purus, in porta odio luctus a. Vivamus et commodo elit. Nullam nec nibh ornare, eleifend magna quis, tempus mi. Nullam et lobortis nulla. Etiam nulla sapien, euismod porttitor vestibulum nec, cursus ac diam.'
                }
            ];

            posts.forEach((item, index) => {
                var post = `
                    <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span> 
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="buttom-more">Leer más</a>
                    </article>
                `;

                $('#posts').append(post);
            });
        }

        // ###################################################################### //
       
        // Selector de tema
        var theme = $('#theme')
        var myTheme = localStorage.getItem('theme');

        switch(myTheme){
            case 'thGreen':
                theme.attr('href','css/green.css');
                break;
            case 'thRed':
                theme.attr('href','css/red.css');
                break;
            case 'thBlue':
                theme.attr('href','css/blue.css');
                break;
        }

        $('#to-green').click(function(){
            theme.attr('href', 'css/green.css');
            localStorage.setItem('theme','thGreen');
        });

        $('#to-red').click(function(){
            theme.attr('href', 'css/red.css');
            localStorage.setItem('theme','thRed');
        });

        $('#to-blue').click(function(){
            theme.attr('href', 'css/blue.css');
            localStorage.setItem('theme','thBlue');
        });
        // console.log(myTheme);

        // ###################################################################### //

        // Scroll hacia arriba
        var subir = $('subir');

        subir.fadeOut();
        $(window).scroll(function(){
            if($(this).scrollTop() > 150){
                subir.fadeIn();
            }else{
                subir.fadeOut();
            }
        });

        subir.click(function(e){
            e.preventDefault();

            $('html', 'body').animate({ scrollTop: 0 }, 1000);
            return false;
        });

        // ###################################################################### //

        // Login falso
        var login = $('#login form');

        login.submit(function(){
            var form_name = $('#form_name').val();

            localStorage.setItem('form_name', form_name);
        });

        var form_name = localStorage.getItem('form_name');

        if(form_name != null && form_name != undefined){
            var about_parrafo = $('#about p');

            about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
            about_parrafo.append("<br><br><a href='#' id='logout'>Cerrar sesión</a>");

            login.hide();

            $('#logout').click(function(){
                localStorage.clear();
                location.reload();
            });
        }

        // ###################################################################### //

        // Acordeon
        if(window.location.href.indexOf('about') > -1){
            $('#acordeon').accordion();
        }

        // ###################################################################### //

        // Reloj
        if(window.location.href.indexOf('reloj') > -1){

            setInterval(function(){
                var fecha = moment().format('dddd DD MMMM YYYY');
                var reloj = moment().format('hh:mm:ss a');
                $('#fecha').html(fecha);
                $('#reloj').html(reloj);
            }, 1000);
        }

        // ###################################################################### //

        // Validación de formulario
        if(window.location.href.indexOf('contact') > -1){

            $('form input[name="date"]').datepicker({
                dateFormat: 'dd-mm-yy'
            });

            $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollToTopOnError: true
            });
        }
        
    }); // end of jQuery

}); // end of load