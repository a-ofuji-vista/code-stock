const e=`<a href="#" class="buttonRound">テキスト</a>
`,t=`.buttonRound {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 64px;
  padding: 8px 24px;
  font-family: sans-serif;
  font-size: 16px;
  color: #fff;
  text-align: center;
  overflow-wrap: anywhere;
  background-color: #6fa24a;
  border-radius: calc(1px * infinity);
}

@media (any-hover: hover) {
  .buttonRound {
    transition: background-color 0.2s;
  }

  .buttonRound:hover {
    background-color: #54802f;
  }
}
`,r=`<a href="#" class="buttonIconText02 buttonIconText02__reverse">
  <span class="buttonIconText02_icon">
    <svg
      class="iconArrowRight"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
        stroke="#ffffff"
        stroke-linecap="round"
      />
    </svg>
  </span>
  <span class="buttonIconText02_text">詳しく見る</span>
</a>
<a href="#" class="buttonIconText02">
  <span class="buttonIconText02_icon buttonIconText02_icon__left">
    <svg
      class="iconArrowLeft"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
        stroke="#ffffff"
        stroke-linecap="round"
      />
    </svg>
  </span>
  <span class="buttonIconText02_text">戻る</span>
</a>
`,s=`.buttonIconText02 {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  max-width: 320px;
  height: 64px;
  padding: 8px 64px 8px 8px;
  font-family: sans-serif;
  font-size: 16px;
  color: #fff;
  text-align: center;
  overflow-wrap: anywhere;
  background-color: #6fa24a;
  border-radius: calc(1px * infinity);
}

.buttonIconText02__reverse {
  flex-direction: row-reverse;
  padding: 8px 8px 8px 64px;
}

.buttonIconText02_icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 48px;
  aspect-ratio: 1;
  overflow: hidden;
}

.buttonIconText02_text {
  flex-shrink: 1;
  width: 100%;
}

@media (any-hover: hover) {
  .buttonIconText02 {
    transition: background-color 0.2s;
  }

  .buttonIconText02_icon {
    transition: transform 0.2s;
  }

  .buttonIconText02:hover {
    background-color: #54802f;
  }

  .buttonIconText02:hover .buttonIconText02_icon {
    transform: translateX(4px);
  }

  .buttonIconText02:hover .buttonIconText02_icon__left {
    transform: translateX(-4px);
  }
}

/* 左矢印アイコンのスタイル */
.iconArrowLeft {
  rotate: 180deg;
}
`,a={title:"Hover/Button"},n={render:()=>`
    <style>${t}</style>
    ${e}
  `,parameters:{sourceCode:[{name:"HTML",code:e},{name:"CSS",code:t}]}},o={render:()=>`
    <style>${s}</style>
    ${r}
  `,parameters:{sourceCode:[{name:"HTML",code:r},{name:"CSS",code:s}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssRound}</style>
    \${round}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: round
    }, {
      name: "CSS",
      code: cssRound
    }]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssIconArrow}</style>
    \${iconArrow}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: iconArrow
    }, {
      name: "CSS",
      code: cssIconArrow
    }]
  }
}`,...o.parameters?.docs?.source}}};const c=["Round","IconArrow"];export{o as IconArrow,n as Round,c as __namedExportsOrder,a as default};
