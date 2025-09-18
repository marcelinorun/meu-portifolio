// Funcionalidade da Tela de Introdução
const introScreen = document.getElementById('intro-screen');
const introVideo = document.getElementById('intro-video');
const skipButton = document.getElementById('skip-button');
const muteToggleButton = document.getElementById('mute-toggle-button');
const mainContent = document.getElementById('main-content');
const backgroundAudio = document.getElementById('background-audio');

// Novo: Pega o novo botão de controle de áudio
const audioControlButton = document.getElementById('audio-control-button');

// Função para esconder a tela de introdução e mostrar o site
function hideIntro() {
    introScreen.classList.add('fade-out');

    // Toca o áudio de fundo ao revelar o site
    backgroundAudio.muted = false; // Desmuta o áudio
    backgroundAudio.play();        // Começa a tocar

    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 1000);
}

// Oculta a introdução quando o vídeo termina
introVideo.addEventListener('ended', () => {
    hideIntro();
});

// Oculta a introdução quando o botão "Pular" é clicado
skipButton.addEventListener('click', () => {
    introVideo.pause();
    hideIntro();
});

// Adiciona a funcionalidade de ativar/desativar o áudio do vídeo
muteToggleButton.addEventListener('click', () => {
    if (introVideo.muted) {
        introVideo.muted = false;
        muteToggleButton.textContent = 'Desativar Áudio';
    } else {
        introVideo.muted = true;
        muteToggleButton.textContent = 'Ativar Áudio';
    }
});

// Nova funcionalidade: Controle de reprodução do áudio de fundo
// Nova funcionalidade: Controle de reprodução do áudio de fundo
audioControlButton.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o link de recarregar a página
    const icon = audioControlButton.querySelector('i'); // Seleciona o ícone

    if (backgroundAudio.paused) {
        backgroundAudio.play();
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    } else {
        backgroundAudio.pause();
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
});