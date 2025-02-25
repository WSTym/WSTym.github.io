document.addEventListener('DOMContentLoaded', () => {
    let currentTypingTimeout = null; // Controla a digitação atual

    // Função para atualizar os números de linha com padding
    const updateLineNumbers = (text) => {
        const lines = text.split('\n').length;
        const lineNumbers = document.querySelector('.line-numbers');
        const numbers = Array.from({ length: lines }, (_, i) => {
            const num = (i + 1).toString();
            // Padding à direita para alinhar números
            return `<span style="display: block; height: 1.5em; padding-right: 1em;">${num}</span>`;
        });
        lineNumbers.innerHTML = numbers.join('');
    };

    // Efeito de digitação com ajuste de estilo
    const typeWriter = (element, text, speed = 10) => {
        if (currentTypingTimeout) {
            clearTimeout(currentTypingTimeout);
        }
        
        // Adiciona estilos para alinhamento
        element.style.lineHeight = '1.5em';
        element.style.display = 'block';
        element.style.paddingLeft = '0.5em';
        
        element.innerHTML = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1);
                updateLineNumbers(text.substring(0, i + 1));
                i++;
                currentTypingTimeout = setTimeout(type, speed);
            } else {
                currentTypingTimeout = null;
                updateLineNumbers(text);
            }
        };
        type();
    };

    // Simula um ambiente de desenvolvimento real
    const codeSnippets = {
        'sobre.html': `<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
<span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;h1&gt;</span><span class="text">Wallison dos Santos</span><span class="tag">&lt;/h1&gt;</span>
    <span class="tag">&lt;div</span> <span class="attribute">class=</span><span class="value">"profile"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;p&gt;</span><span class="text">Desenvolvedor Full Stack com 5 anos de experiência</span><span class="tag">&lt;/p&gt;</span>
        <span class="tag">&lt;/a&gt;</span>
        <span class="tag">&lt;ul</span> <span class="attribute">class=</span><span class="value">"skills"</span><span class="tag">&gt;</span>
            <span class="comment">&lt;!-- Gerado por JavaScript --&gt;</span>
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;script</span> <span class="attribute">src=</span><span class="value">"habilidades.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
<span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>`,

        'habilidades.js': `<span class="keyword">const</span> <span class="variable">skills</span> <span class="operator">=</span> <span class="bracket">{</span>
    <span class="property">backend</span><span class="operator">:</span> <span class="bracket">[</span><span class="string">'.NET'</span><span class="operator">,</span> <span class="string">'C#'</span><span class="operator">,</span> <span class="string">'NodeJS'</span><span class="operator">,</span> <span class="string">'PHP'</span><span class="bracket">]</span><span class="operator">,</span>
    <span class="property">frontend</span><span class="operator">:</span> <span class="bracket">[</span><span class="string">'ReactJS'</span><span class="operator">,</span> <span class="string">'VueJS'</span><span class="operator">,</span> <span class="string">'Windows Forms'</span><span class="operator">,</span> <span class="string">'WPF'</span><span class="bracket">]</span><span class="operator">,</span>
    <span class="property">mobile</span><span class="operator">:</span> <span class="bracket">[</span><span class="string">'Java Android'</span><span class="bracket">]</span><span class="operator">,</span>
    <span class="property">database</span><span class="operator">:</span> <span class="bracket">[</span><span class="string">'MySQL'</span><span class="operator">,</span> <span class="string">'PostgreSQL'</span><span class="operator">,</span> <span class="string">'Firebird'</span><span class="bracket">]</span><span class="operator">,</span>
    <span class="property">devops</span><span class="operator">:</span> <span class="bracket">[</span><span class="string">'Docker'</span><span class="bracket">]</span>
<span class="bracket">}</span><span class="operator">;</span>

<span class="keyword">function</span> <span class="function">renderSkills</span><span class="bracket">()</span> <span class="bracket">{</span>
    <span class="keyword">const</span> <span class="variable">skillsList</span> <span class="operator">=</span> <span class="function">document</span><span class="operator">.</span><span class="function">querySelector</span><span class="bracket">(</span><span class="string">'.skills'</span><span class="bracket">)</span><span class="operator">;</span>
    
    <span class="keyword">for</span> <span class="bracket">(</span><span class="keyword">const</span> <span class="bracket">[</span><span class="variable">category</span><span class="operator">,</span> <span class="variable">items</span><span class="bracket">]</span> <span class="keyword">of</span> <span class="function">Object</span><span class="operator">.</span><span class="function">entries</span><span class="bracket">(</span><span class="variable">skills</span><span class="bracket">)</span><span class="bracket">)</span> <span class="bracket">{</span>
        <span class="keyword">const</span> <span class="variable">li</span> <span class="operator">=</span> <span class="function">document</span><span class="operator">.</span><span class="function">createElement</span><span class="bracket">(</span><span class="string">'li'</span><span class="bracket">)</span><span class="operator">;</span>
        <span class="variable">li</span><span class="operator">.</span><span class="property">innerHTML</span> <span class="operator">=</span> <span class="string">\`\${category}: \${items.join(', ')}\`</span><span class="operator">;</span>
        <span class="variable">skillsList</span><span class="operator">.</span><span class="function">appendChild</span><span class="bracket">(</span><span class="variable">li</span><span class="bracket">)</span><span class="operator">;</span>
    <span class="bracket">}</span>
<span class="bracket">}</span>

<span class="function">renderSkills</span><span class="bracket">()</span><span class="operator">;</span>`,

        'projetos.css': `<span class="comment">/* Perfil e Projetos */</span>
<span class="selector">.profile</span> <span class="bracket">{</span>
    <span class="property">background</span><span class="operator">:</span> <span class="value">url(<a href="https://github.com/WSTym" target="_blank" style="color: #58a6ff; text-decoration: none; transition: all 0.3s ease;">"https://github.com/WSTym"</a>)</span><span class="operator">;</span>
    <span class="property">background-size</span><span class="operator">:</span> <span class="value">cover</span><span class="operator">;</span>
    <span class="property">border-radius</span><span class="operator">:</span> <span class="value">8px</span><span class="operator">;</span>
    <span class="property">transition</span><span class="operator">:</span> <span class="value">all 0.3s ease</span><span class="operator">;</span>
<span class="bracket">}</span>

<span class="selector">.skills</span> <span class="bracket">{</span>
    <span class="property">display</span><span class="operator">:</span> <span class="value">flex</span><span class="operator">;</span>
    <span class="property">flex-wrap</span><span class="operator">:</span> <span class="value">wrap</span><span class="operator">;</span>
    <span class="property">gap</span><span class="operator">:</span> <span class="value">10px</span><span class="operator">;</span>
    <span class="property">margin-top</span><span class="operator">:</span> <span class="value">20px</span><span class="operator">;</span>
<span class="bracket">}</span>

<span class="selector">.profile:hover</span> <span class="bracket">{</span>
    <span class="property">transform</span><span class="operator">:</span> <span class="value">translateY(-5px)</span><span class="operator">;</span>
    <span class="property">box-shadow</span><span class="operator">:</span> <span class="value">0 5px 15px rgba(0,0,0,0.3)</span><span class="operator">;</span>
<span class="bracket">}</span>`
    };

    // Gerencia cliques nos arquivos
    const files = document.querySelectorAll('.file');
    const editorContent = document.querySelector('.code-content pre code');
    const lineNumbers = document.querySelector('.line-numbers');

    // Adiciona estilos para alinhamento
    lineNumbers.style.lineHeight = '1.5em';
    lineNumbers.style.paddingTop = '0';
    lineNumbers.style.textAlign = 'right';
    lineNumbers.style.userSelect = 'none';
    lineNumbers.style.color = '#858585';
    
    editorContent.style.margin = '0';
    editorContent.style.paddingTop = '0';

    const tab = document.querySelector('.tab');

    files.forEach(file => {
        file.addEventListener('click', () => {
            files.forEach(f => f.classList.remove('active'));
            file.classList.add('active');

            const fileName = file.querySelector('span').textContent;
            const fileIcon = file.querySelector('i').cloneNode(true);
            tab.innerHTML = '';
            tab.appendChild(fileIcon);
            tab.appendChild(document.createTextNode(' ' + fileName));
            tab.innerHTML += '<span class="close-tab">×</span>';

            document.querySelector('.line-numbers').innerHTML = '<span style="display: block; height: 1.5em; padding-right: 1em;">1</span>';
            typeWriter(editorContent, codeSnippets[fileName], 10);
        });
    });

    // Inicia com o conteúdo padrão
    typeWriter(editorContent, codeSnippets['sobre.html'], 10);

    // Efeito hover nos controles da janela
    const controls = document.querySelectorAll('.control');
    controls.forEach(control => {
        control.addEventListener('mouseover', () => {
            control.style.opacity = '0.8';
        });
        control.addEventListener('mouseout', () => {
            control.style.opacity = '1';
        });
    });
});