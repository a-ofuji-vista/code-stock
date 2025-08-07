const t=`<button class="my-button">Click Me</button>
`,e=`.my-button {
  padding: 10px 20px;
  color: white;
  background-color: #1ea7fd;
  border: none;
  border-radius: 4px;
}
`,o={title:"Code/Button"},n={render:()=>`
    <style>${e}</style>
    ${t}
  `,parameters:{sourceCode:[{name:"HTML",code:t},{name:"CSS",code:e}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>\${cssButton}</style>
    \${button}
  \`,
  parameters: {
    sourceCode: [{
      name: "HTML",
      code: button
    }, {
      name: "CSS",
      code: cssButton
    }]
  }
}`,...n.parameters?.docs?.source}}};const r=["Button01"];export{n as Button01,r as __namedExportsOrder,o as default};
