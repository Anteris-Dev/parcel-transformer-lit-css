import { Transformer } from "@parcel/plugin";
import { minifyHTMLLiterals } from "minify-html-literals";

export default new Transformer({
    async transform({ asset }) {
        const source = await asset.getCode();

        let updatedSource = `
            import { css } from 'lit';
            export default css\`${source}\`;
        `;

        // Minify Lit's html`` and css`` literals, because Parcel won't do it.
        if (asset.env.shouldOptimize) {
            const minifyResult = minifyHTMLLiterals(updatedSource, { fileName: asset.filePath });
            updatedSource = minifyResult?.code || updatedSource;
        }

        asset.type = 'js';
        asset.setCode(updatedSource);

        return [asset];
    }
});