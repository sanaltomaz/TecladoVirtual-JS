// Seleciona todas as teclas do piano
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Seleciona o controle deslizante de volume e a caixa de verificação de teclas
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

// Array para armazenar as teclas mapeadas
let mappedKeys = [];

// Função para reproduzir o som da tecla clicada
const playTune = (key) => {
    // Cria o caminho do áudio diretamente usando o nome da tecla
    const audio = new Audio(`src/tunes/${key}.wav`);

    audio.play();

    // Encontra o elemento da tecla clicada
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        // Adiciona e remove a classe 'active' para efeito visual
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
};

// Adiciona um evento de clique para cada tecla do piano
pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

// Adiciona um evento de tecla pressionada em todo o documento
document.addEventListener("keydown", (e) => {
    if (mappedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

// Função para ajustar o volume do áudio
const handleVolume = (e) => {
    // Cria um áudio com um nome fixo (no caso, "a.wav") para ajustar o volume
    const audio = new Audio(`src/tunes/a.wav`);
    audio.volume = e.target.value;
    audio.play();
};

// Função para mostrar/ocultar as teclas do piano
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

// Adiciona eventos aos elementos de controle
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
