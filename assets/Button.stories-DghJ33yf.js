const a=`<a href="#" class="buttonRound">テキスト</a>
`,r=`.buttonRound {
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
`,i=`<div class="buttonList">
  <a href="#" class="buttonIconText02 buttonIconText02__reverse">
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
</div>
`,c=`.buttonIconText02 {
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
`,d=`<div class="c-button-cta">
  <p class="c-button-cta__cath">
    <span class="c-button-cta__em">1分</span>
    <span>で申し込める！住所不要</span>
  </p>
  <p class="c-button-cta__inner">
    <a
      href="https://www.tcm.ac.jp/event/form.html?event_code=45914&amp;form_code=6615"
      class="c-button-gradation --pink"
      >お申込みはコチラ</a
    >
  </p>
</div>
`,s=`/* コンポーネント */
:root {
  --width-content: min(90%, 1080px);
  --font-family-base: "Noto Sans JP", sans-serif;
  --font-family-emphasis: "Zen Maru Gothic", "Noto Sans JP", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  padding: 0;
  font-family: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

@media screen and (min-width: 768px), print {
  .spacer {
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 767.98px) {
  .spacer {
    margin-bottom: 20px;
  }
}

.l-container {
  width: var(--width-content);
  margin: 80px auto;
}

.u-gc {
  display: -ms-grid !important;
  display: grid !important;
  place-items: center !important;
}

.u-w-fit {
  width: -webkit-fit-content !important;
  width: -moz-fit-content !important;
  width: fit-content !important;
}

.u-mb-40 {
  margin-bottom: 40px !important;
}

.c-button-gradation {
  display: -ms-grid;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  -webkit-column-gap: 8px;
  -moz-column-gap: 8px;
  column-gap: 8px;
  align-items: center;
  font-weight: bold;
  line-height: 1.25;
  color: #fff !important;
  background-image: linear-gradient(
    135deg,
    #afe3e8 0%,
    #67e1e5 12.5%,
    #10d7b2 50%,
    #67e1e5 70%,
    #4dcbda 85%,
    #10d7b2 100%
  );
  background-position: 0% center;
  background-size: 200% 100%;
  border-radius: 9999px;
  -ms-grid-columns: 1fr 8px auto 8px 1fr;
}
@media screen and (min-width: 768px), print {
  .c-button-gradation {
    width: min(34vw, 440px);
    padding: 2rem;
    font-size: 1.8rem;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-gradation {
    width: 90%;
    padding: 1.6rem;
    font-size: 1.6rem;
  }
}
.c-button-gradation::before {
  content: "";
}
.c-button-gradation::after {
  -ms-grid-column-align: end;
  justify-self: end;
  content: "";
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
@media screen and (min-width: 768px), print {
  .c-button-gradation::after {
    width: 8px;
    height: 8px;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-gradation::after {
    width: max(2vw, 8px);
    height: max(2vw, 8px);
  }
}
@media (any-hover: hover) {
  .c-button-gradation {
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }
  .c-button-gradation:hover {
    background-position: 100% center;
    opacity: 1 !important;
  }
}
.c-button-gradation.--blue {
  background-image: linear-gradient(
    135deg,
    #afe3e8 0%,
    #67e1e5 12.5%,
    #10d7b2 50%,
    #67e1e5 70%,
    #4dcbda 85%,
    #10d7b2 100%
  );
}
.c-button-gradation.--pink {
  background-image: linear-gradient(
    135deg,
    #f78ca0 0%,
    #f9748f 12.5%,
    #fd868c 30%,
    #fe9a8b 50%,
    #fd868c 70%,
    #f9748f 85%,
    #f78ca0 100%
  );
}

.c-button-cta {
  display: -ms-inline-grid;
  display: inline-grid;
  place-items: center;
}

.c-button-cta__cath {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  font-weight: bold;
  line-height: 1.25;
  color: #474747;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #fff;
  border: 2px solid #474747;
  border-radius: 9999px;
  translate: 0 6px;
}
@media screen and (min-width: 768px), print {
  .c-button-cta__cath {
    padding: min(0.2vw, 4px) min(1.8vw, 24px);
    font-size: 1.9rem;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__cath {
    padding: min(0.5vw, 8px) min(4vw, 16px);
    font-size: 1.4rem;
  }
}
.c-button-cta__cath::before,
.c-button-cta__cath::after {
  position: absolute;
  left: 50%;
  content: "";
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  translate: -50% 0;
}
@media screen and (min-width: 768px), print {
  .c-button-cta__cath::before,
  .c-button-cta__cath::after {
    top: 100%;
    width: min(1.5vw, 15px);
    height: min(0.9vw, 10px);
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__cath::before,
  .c-button-cta__cath::after {
    top: 100%;
    width: min(4vw, 30px);
    height: min(2vw, 15px);
  }
}
.c-button-cta__cath::before {
  top: calc(100% - 3px);
  z-index: 1;
  background-color: #fff;
}
.c-button-cta__cath::after {
  background-color: #474747;
}

.c-button-cta__em {
  color: #fa788e;
}
@media screen and (min-width: 768px), print {
  .c-button-cta__em {
    font-size: 2.2rem;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__em {
    font-size: 1.6rem;
  }
}

.c-button-cta__inner {
  position: relative;
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__inner {
    width: 90%;
  }
}
@media screen and (min-width: 768px), print {
  .c-button-cta__inner > a {
    padding-left: min(3vw, 40px);
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__inner > a {
    width: 100%;
    padding-left: min(5vw, 40px);
  }
}
.c-button-cta__inner::before,
.c-button-cta__inner::after {
  pointer-events: none;
}
.c-button-cta__inner::before {
  position: absolute;
  content: "";
  background-image: url("./../../images/components/image_button-cta_tap.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
@media screen and (min-width: 768px), print {
  .c-button-cta__inner::before {
    top: calc(50% - min(1.5vw, 16px));
    right: calc(100% - min(3.5vw, 50px));
    width: min(9vw, 116px);
    height: min(7vw, 78px);
    translate: 0 -50%;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__inner::before {
    top: calc(50% - min(3vw, 20px));
    right: calc(100% - min(6vw, 42px));
    width: min(16vw, 112px);
    height: min(13vw, 87px);
    translate: 0 -50%;
  }
}
.c-button-cta__inner::after {
  position: absolute;
  content: "";
  background-image: url("./../../images/components/image_button-cta_person.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
@media screen and (min-width: 768px), print {
  .c-button-cta__inner::after {
    top: calc(50% + 3px);
    left: calc(100% - min(3.8vw, 47px));
    width: min(9vw, 118px);
    height: min(10vw, 131px);
    translate: 0 -50%;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__inner::after {
    top: calc(50% + 6px);
    left: calc(100% - min(8vw, 58px));
    width: min(17vw, 121px);
    height: min(18vw, 124px);
    translate: 0 -50%;
  }
}

.c-button-cta__tel {
  font-weight: bold;
  border-bottom: 2px solid #fa788e;
}
@media screen and (min-width: 768px), print {
  .c-button-cta__tel {
    margin-top: 28px;
  }
}
@media screen and (max-width: 767.98px) {
  .c-button-cta__tel {
    margin-top: 16px;
  }
}
.c-button-cta__tel a {
  pointer-events: auto;
}
`,p=`<div class="tw:grid tw:gap-4">
  <a href="#" class="c-button-gradation --blue"
    >テキストテキストテキストテキスト</a
  >
  <a href="#" class="c-button-gradation --pink"
    >テキストテキストテキストテキスト</a
  >
</div>
`,m=`.c-button-gradation {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 8px;
  align-items: center;
  max-width: 320px;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  background-image: linear-gradient(
    135deg,
    #afe3e8 0%,
    #67e1e5 12.5%,
    #10d7b2 50%,
    #67e1e5 70%,
    #4dcbda 85%,
    #10d7b2 100%
  );
  background-position: 0% center;
  background-size: 200% 100%;
  border-radius: calc(1px * infinity);
}

.c-button-gradation::before {
  content: "";
}

.c-button-gradation::after {
  justify-self: end;
  width: 8px;
  height: 8px;
  content: "";
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
}

@media (any-hover: hover) {
  .c-button-gradation {
    transition: background 0.3s;
  }

  .c-button-gradation:hover {
    background-position: 100% center;
  }
}

.c-button-gradation.--blue {
  background-image: linear-gradient(
    135deg,
    #afe3e8 0%,
    #67e1e5 12.5%,
    #10d7b2 50%,
    #67e1e5 70%,
    #4dcbda 85%,
    #10d7b2 100%
  );
}

.c-button-gradation.--pink {
  background-image: linear-gradient(
    135deg,
    #f78ca0 0%,
    #f9748f 12.5%,
    #fd868c 30%,
    #fe9a8b 50%,
    #fd868c 70%,
    #f9748f 85%,
    #f78ca0 100%
  );
}
`,u={title:"Hover/Button"},n={render:()=>`
    <style>${r}</style>
    ${a}
  `,parameters:{sourceCode:[{name:"HTML",code:a},{name:"CSS",code:r}]}},t={render:()=>`
    <style>${c}</style>
    ${i}
  `,parameters:{sourceCode:[{name:"HTML",code:i},{name:"CSS",code:c}]}},e={render:()=>`
    <style>${s}</style>
    ${d}
  `,parameters:{sourceCode:[{name:"HTML",code:d},{name:"CSS",code:s}]}},o={render:()=>`
    <style>${m}</style>
    ${p}
  `,parameters:{sourceCode:[{name:"HTML",code:p},{name:"CSS",code:m}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssComment}</style>
    \${comment}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: comment
    }, {
      name: "CSS",
      code: cssComment
    }]
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssGradation}</style>
    \${gradation}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: gradation
    }, {
      name: "CSS",
      code: cssGradation
    }]
  }
}`,...o.parameters?.docs?.source}}};const l=["Round","IconArrow","Comment","Gradation"];export{e as Comment,o as Gradation,t as IconArrow,n as Round,l as __namedExportsOrder,u as default};
