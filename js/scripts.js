/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
// Espera o DOM ser carregado
window.addEventListener('DOMContentLoaded', event => {
    // Obtém a referência para o elemento com o ID 'sidebar-wrapper'
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    // Inicializa a variável que controla a visibilidade do botão "scroll-to-top"
    let scrollToTopVisible = false;

    // Fecha o menu lateral
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon(); // Chama a função para alternar o ícone do menu
        menuToggle.classList.toggle('active');
    })

    // Fecha o menu responsivo quando um link do gatilho de rolagem é clicado
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon(); // Chama a função para alternar o ícone do menu
        })
    });

    // Função para alternar o ícone do menu
    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Rolagem para o topo: Mostra ou oculta o botão "scroll-to-top"
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop); // Mostra o botão com uma animação de fade
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop); // Oculta o botão com uma animação de fade
                scrollToTopVisible = false;
            }
        }
    })
})

// Função para ocultar um elemento com uma animação de fade-out
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

// Função para mostrar um elemento com uma animação de fade-in
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

// -----------------------------------------------------------------
// Janela de promoção e preços
function togglePromocao() {
    var promoContainer = document.getElementById('promoContainer');
    var btnTogglePromocao = document.getElementById('btnTogglePromocao');

    if (promoContainer.style.display === 'none' || promoContainer.style.display === '') {
      mostrarPromocao();
      btnTogglePromocao.textContent = 'Ocultar';
    } else {
      fecharPromocao();
      btnTogglePromocao.textContent = 'Mostrar';
    }
  }

  function mostrarPromocao() {
    var promoContainer = document.getElementById('promoContainer');
    promoContainer.style.display = 'block';
  }

  function fecharPromocao() {
    var promoContainer = document.getElementById('promoContainer');
    promoContainer.style.display = 'none';
  }

//   -------------Banco de dados-------------------------
function enviarFormulario() {
    var form = document.querySelector("form");
    var mensagemDiv = document.querySelector("#mensagemDiv");

    if (form && mensagemDiv) {
        var formData = new FormData(form);

        fetch("db.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na solicitação: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.status) {
                mensagemDiv.innerText = data.status;

                // Redirecionar para a tela index.html após um breve atraso
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000); // Aguarda 2 segundos (ajuste conforme necessário)
            } else {
                throw new Error("Resposta inválida do servidor");
            }
        })
        .catch(error => {
            console.error("Erro ao enviar formulário:", error.message);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var enviarBotao = document.querySelector("#enviarBotao");

    if (enviarBotao) {
        enviarBotao.addEventListener("click", enviarFormulario);
    }
});

// -----------------Janela de carregamento geral Sobre nós----------------
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a div pelo ID
    var contGeral = document.getElementById('cont-geral');

    // Adiciona a classe 'visible' para mostrar a div com efeito de fade-in
    contGeral.classList.add('visible');
});

// -----------------Janela de carregamento geral Formulario ----------------
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a div pelo ID
    var formulariogeral = document.getElementById('formulario-geral');

    // Adiciona a classe 'visible' para mostrar a div com efeito de fade-in
    formulariogeral.classList.add('visible');
});