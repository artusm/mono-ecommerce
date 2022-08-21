import { defineConfig } from 'windicss/helpers';

export function createConfig(includeOptions = []) {
    const include = ['**/*.{jsx,tsx,css}'];

    includeOptions.forEach((option) => {
        switch (option) {
            case 'INCLUDE: shared/ui TO: nx-ecommerce':
                include.push('../../libs/shared/ui/**/*.{jsx,tsx,css}');
                break;
        }
    });

    return defineConfig({
        theme: {
            extend: {
                screens: {
                    '350px': '350px',
                    xs: '545px',
                },
            },
        },
        extract: {
            include,
            exclude: ['node_modules', '.git', '.next'],
        },
        plugins: [require('windicss/plugin/aspect-ratio')],
    });
}

export default createConfig();
