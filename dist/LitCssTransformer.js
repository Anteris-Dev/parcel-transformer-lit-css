var $14OfC$parcelplugin = require("@parcel/plugin");
var $14OfC$minifyhtmlliterals = require("minify-html-literals");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $94a9ccccb030e2cd$export$2e2bcd8739ae039);


var $94a9ccccb030e2cd$export$2e2bcd8739ae039 = new (0, $14OfC$parcelplugin.Transformer)({
    async transform ({ asset: asset  }) {
        const source = await asset.getCode();
        let updatedSource = `
            import { css } from 'lit';
            export default css\`${source}\`;
        `;
        // Minify Lit's html`` and css`` literals, because Parcel won't do it.
        if (asset.env.shouldOptimize) {
            const minifyResult = (0, $14OfC$minifyhtmlliterals.minifyHTMLLiterals)(updatedSource, {
                fileName: asset.filePath
            });
            updatedSource = minifyResult?.code || updatedSource;
        }
        asset.type = "js";
        asset.setCode(updatedSource);
        return [
            asset
        ];
    }
});


//# sourceMappingURL=LitCssTransformer.js.map
