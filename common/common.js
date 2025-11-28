(function () {
    // 创建MathJax脚本
    const mathJaxScript = document.createElement('script');
    mathJaxScript.id = 'MathJax-script';
    mathJaxScript.async = true;
    mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';

    // 创建Mermaid脚本（注意：根据知识库，版本11可能不存在，使用10更安全）
    const mermaidScript = document.createElement('script');
    mermaidScript.type = 'module';
    mermaidScript.src = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

    // 将脚本添加到文档头部
    document.head.appendChild(mathJaxScript);
    document.head.appendChild(mermaidScript);
})();