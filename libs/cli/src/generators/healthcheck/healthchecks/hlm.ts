import { visitNotIgnoredFiles } from '@nx/devkit';
import migrateHlmGenerator from '../../migrate-hlm/generator';
import { type Healthcheck, HealthcheckSeverity } from '../healthchecks';

export const hlmImportHealthcheck: Healthcheck = {
	name: 'Helm imports',
	async detect(tree, failure) {
		visitNotIgnoredFiles(tree, '/', (file) => {
			// if the file is a .ts or .json file, check for helm imports/packages
			if (!file.endsWith('.ts')) {
				return;
			}

			const contents = tree.read(file, 'utf-8');
			if (!contents) {
				return;
			}

			// If any import from grg-ui-ui/brain/core contains hlm
			if (/import\s*{[^}]*\bhlm\b[^}]*}\s*from\s*['"]grg-ui-ui\/brain\/core['"]/.test(contents)) {
				failure(
					`The { hlm } import from 'grg-ui-ui/brain/core' is deprecated; import it from 'grg-ui-ui/helm/utils' instead.`,
					HealthcheckSeverity.Error,
					true,
				);
			}
		});
	},
	fix: async (tree, { angularCli }) => {
		await migrateHlmGenerator(tree, { skipFormat: true, angularCli });
		return true;
	},
	prompt: 'Would you like to migrate hlm import?',
};
