import { visitNotIgnoredFiles } from '@nx/devkit';
import { migrateToggleGroupGenerator } from '../../migrate-toggle-group/generator';
import { type Healthcheck, HealthcheckSeverity } from '../healthchecks';

export const brainToggleGroupHealthcheck: Healthcheck = {
	name: 'Brain Toggle Group',
	async detect(tree, failure) {
		visitNotIgnoredFiles(tree, '/', (file) => {
			// if the file is a .ts or .htlm file, check for helm icons
			if (!file.endsWith('.ts') && !file.endsWith('.html')) {
				return;
			}

			const contents = tree.read(file, 'utf-8');

			if (!contents) {
				return;
			}

			if (
				contents.includes("BrnToggleGroupModule } from 'grg-ui-ui/brain/toggle'") ||
				contents.includes("import { BrnToggleGroupModule } from 'grg-ui-ui/brain/toggle'") ||
				(contents.includes('BrnToggleGroupModule') && contents.includes('grg-ui-ui/brain/toggle')) ||
				contents.includes("HlmToggleGroupModule } from 'grg-ui-ui/ui-toggle-helm'") ||
				(contents.includes('HlmToggleGroupModule') && contents.includes('grg-ui-ui/ui-toggle-helm'))
			) {
				failure(
					'The <brn-toggle-group> component from the toggle brain package is deprecated. Please use the <brn-toggle-group> from the toggle-group package instead.',
					HealthcheckSeverity.Error,
					true,
				);
			}
		});
	},
	fix: async (tree) => {
		await migrateToggleGroupGenerator(tree, { skipFormat: true });
		return true;
	},
	prompt: 'Would you like to migrate toggle-group?',
};
