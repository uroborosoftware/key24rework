const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
function migrate(directory) {
  for (const name of fs.readdirSync(directory)) {
    const file = path.join(directory, name);
    if (fs.statSync(file).isDirectory()) { migrate(file); continue; }
    if (!name.endsWith('.tsx') || ['_app.tsx','_document.tsx'].includes(name)) continue;
    const source = fs.readFileSync(file,'utf8');
    if (source.includes("from '@/lib/localization'")) continue;
    const tree = ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
    const edits = [];
    function visit(node, inHead=false) {
      if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
        const opening = ts.isJsxElement(node) ? node.openingElement : node;
        const tag = opening.tagName.getText(tree);
        let replacement;
        if (tag==='Head') replacement='Key24LocalizedHead';
        else if (tag==='Link') replacement='Key24LocalizedLink';
        else if (!inHead && /^[a-z]/.test(tag) && !['style','script'].includes(tag)) replacement='Key24LocalizedElement';
        if (replacement) {
          edits.push([opening.tagName.getStart(tree),opening.tagName.end,replacement+(replacement==='Key24LocalizedElement'?` as="${tag}"`:'')]);
          if (ts.isJsxElement(node)) edits.push([node.closingElement.tagName.getStart(tree),node.closingElement.tagName.end,replacement]);
        }
        ts.forEachChild(node,child=>visit(child,inHead||tag==='Head'));
      } else ts.forEachChild(node,child=>visit(child,inHead));
    }
    visit(tree);
    if (!edits.length) continue;
    let result = source;
    for (const [start,end,text] of edits.sort((a,b)=>b[0]-a[0])) result=result.slice(0,start)+text+result.slice(end);
    result="import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';\n"+result;
    fs.writeFileSync(file,result);
  }
}
migrate(path.join(__dirname,'../src/components'));
migrate(path.join(__dirname,'../src/pages'));
