$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // ATUALIZA APENAS O IFRAME A CADA 5MIN.
    setInterval(function () {
        const iframe = document.getElementById("calendario");
        if (iframe) {
            // RECARREGA PRESERVANDO O MESMO SRC
            iframe.src = iframe.src;
        }
    }, 300000); // 300.000 ms = 5 minutos

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#calendario', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    document.querySelectorAll('.auto-textarea').forEach(textarea => {
    const autoResize = () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    };
    autoResize();
    textarea.addEventListener("input", autoResize);
    });

});