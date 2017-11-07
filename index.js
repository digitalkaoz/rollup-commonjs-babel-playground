import { rollup } from "rollup";

import CONFIG from "./rollup.config.js";

const build = async () => {
    const bundle = await rollup({input : CONFIG.input});
    const { code, map } = await bundle.generate(CONFIG.output);

    return await bundle.write(CONFIG.output);
}

export default build