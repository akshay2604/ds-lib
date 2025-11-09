import { formatFiles, type Tree } from '@nx/devkit';
import { visitFiles } from '../../utils/visit-files';
import type { MigrateCoreGeneratorSchema } from './schema';

export async function migrateCoreGenerator(tree: Tree, options: MigrateCoreGeneratorSchema) {
	updateImports(tree);
	updateTailwindConfig(tree);

	if (!options.skipFormat) {
		await formatFiles(tree);
	}
}

/**
 * Update imports from grg-ui-ui/ui-core to grg-ui-ui/brain/core
 */
function updateImports(tree: Tree) {
	visitFiles(tree, '/', (path) => {
		const content = tree.read(path).toString('utf-8');

		if (content.includes('grg-ui-ui/ui-core')) {
			const updatedCode = content
				// Handle `import { ... } from 'grg-ui-ui/ui-core';`
				.replace(/import\s+\{[^}]*\}\s+from\s+['"]grg-ui-ui\/ui-core['"];/g, (match) =>
					match.replace('grg-ui-ui/ui-core', 'grg-ui-ui/brain/core'),
				)
				// Handle `import type { ... } from 'grg-ui-ui/ui-core';`
				.replace(/import\s+type\s+\{[^}]*\}\s+from\s+['"]grg-ui-ui\/ui-core['"];/g, (match) =>
					match.replace('grg-ui-ui/ui-core', 'grg-ui-ui/brain/core'),
				)
				// Handle `export { ... } from 'grg-ui-ui/ui-core';`
				.replace(/export\s+\{[^}]*\}\s+from\s+['"]grg-ui-ui\/ui-core['"];/g, (match) =>
					match.replace('grg-ui-ui/ui-core', 'grg-ui-ui/brain/core'),
				)
				// Handle `import * as name from 'grg-ui-ui/ui-core';`
				.replace(/import\s+\*\s+as\s+\w+\s+from\s+['"]grg-ui-ui\/ui-core['"];/g, (match) =>
					match.replace('grg-ui-ui/ui-core', 'grg-ui-ui/brain/core'),
				)
				// Handle `import defaultExport from 'grg-ui-ui/ui-core';`
				.replace(/import\s+\w+\s+from\s+['"]grg-ui-ui\/ui-core['"];/g, (match) =>
					match.replace('grg-ui-ui/ui-core', 'grg-ui-ui/brain/core'),
				)
				// Handle `export * from 'grg-ui-ui/ui-core';`
				.replace(/export\s+\*\s+from\s+['"]grg-ui-ui\/ui-core['"];/g, (match) =>
					match.replace('grg-ui-ui/ui-core', 'grg-ui-ui/brain/core'),
				);

			tree.write(path, updatedCode);
		}
	});
}

/**
 * Update the tailwind config file
 */
function updateTailwindConfig(tree: Tree) {
	visitFiles(tree, '/', (path) => {
		// technically the tailwind config file could be anywhere and named anything
		// but all we need to do is a simple string replace 'grg-ui-ui/ui-core/hlm-tailwind-preset' with 'grg-ui-ui/brain/hlm-tailwind-preset'
		const content = tree.read(path).toString('utf-8');

		if (content.includes('grg-ui-ui/ui-core/hlm-tailwind-preset')) {
			const updatedCode = content.replace(
				/grg-ui-ui\/ui-core\/hlm-tailwind-preset/g,
				'grg-ui-ui/brain/hlm-tailwind-preset',
			);

			tree.write(path, updatedCode);
		}
	});
}

export default migrateCoreGenerator;
