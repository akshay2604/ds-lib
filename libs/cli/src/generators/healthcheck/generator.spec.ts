import { readJson, type Tree, writeJson } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { healthcheckGenerator } from './generator';

import moduleMap from '../migrate-module-imports/import-map';

describe('healthcheck generator', () => {
	let tree: Tree;

	beforeEach(async () => {
		tree = createTreeWithEmptyWorkspace();

		writeJson(tree, 'package.json', {
			dependencies: {
				'grg-ui-ui/brain': '0.0.1-alpha.300',
				'grg-ui-ui/ui-checkbox-brain': '0.0.1-alpha.300',
			},
			devDependencies: {
				'grg-ui-ui/cli': '0.0.1-alpha.300',
			},
		});

		// add a file with legacy imports
		tree.write(
			'libs/my-lib/src/index.ts',
			`
			import { BrnCheckbox } from 'grg-ui-ui/ui-checkbox-brain';
			import { hlm } from 'grg-ui-ui/ui-core';
			import { HlmButtonDirective } from 'grg-ui-ui/ui-button-helm';
		`,
		);

		// add a file with the module imports

		tree.write(
			'libs/my-lib/src/modules-legacy.component.ts',
			`
import { Component } from '@angular/core';

import { BrnAccordionModule } from 'grg-ui-ui/brain/accordion';
import { BrnAlertDialogModule } from 'grg-ui-ui/brain/alertDialog';
import { BrnAutocompleteModule } from 'grg-ui-ui/brain/autocomplete';
import { BrnAvatarModule } from 'grg-ui-ui/brain/avatar';
import { BrnButtonModule } from 'grg-ui-ui/brain/button';
import { BrnCalendarModule } from 'grg-ui-ui/brain/calendar';
import { BrnCheckboxModule } from 'grg-ui-ui/brain/checkbox';
import { BrnCollapsibleModule } from 'grg-ui-ui/brain/collapsible';
import { BrnCommandModule } from 'grg-ui-ui/brain/command';
import { BrnDialogModule } from 'grg-ui-ui/brain/dialog';
import { BrnHoverCardModule } from 'grg-ui-ui/brain/hoverCard';
import { BrnInputOtpModule } from 'grg-ui-ui/brain/inputOtp';
import { BrnLabelModule } from 'grg-ui-ui/brain/label';
import {
  BrnMenuItemImports,
  BrnMenuBarImports,
  BrnContextMenuImports,
  BrnMenuItemModule,
  BrnMenuModule,
  BrnMenuBarModule,
  BrnContextMenuModule
} from 'grg-ui-ui/brain/menu';
import { BrnPopoverModule } from 'grg-ui-ui/brain/popover';
import { BrnProgressModule } from 'grg-ui-ui/brain/progress';
import { BrnRadioGroupModule } from 'grg-ui-ui/brain/radioGroup';
import { BrnSelectModule } from 'grg-ui-ui/brain/select';
import { BrnSeparatorModule } from 'grg-ui-ui/brain/separator';
import { BrnSheetModule } from 'grg-ui-ui/brain/sheet';
import { BrnSwitchModule } from 'grg-ui-ui/brain/switch';
import { BrnTabsModule } from 'grg-ui-ui/brain/tabs';
import { BrnToggleModule } from 'grg-ui-ui/brain/toggle';
import {
  BrnToggleGroupModule,
  BrnToggleGroupItemModule
} from 'grg-ui-ui/brain/toggleGroup';
import { BrnTooltipModule } from 'grg-ui-ui/brain/tooltip';

// --- HLM imports ---
import { HlmAccordionModule } from 'grg-ui-ui/helm/accordion';
import { HlmAlertModule } from 'grg-ui-ui/helm/alert';
import { HlmAlertDialogModule } from 'grg-ui-ui/helm/alertDialog';
import { HlmAspectRatioModule } from 'grg-ui-ui/helm/aspectRatio';
import { HlmAutocompleteModule } from 'grg-ui-ui/helm/autocomplete';
import { HlmAvatarModule } from 'grg-ui-ui/helm/avatar';
import { HlmBadgeModule } from 'grg-ui-ui/helm/badge';
import { HlmBreadCrumbModule } from 'grg-ui-ui/helm/breadCrumb';
import { HlmButtonModule } from 'grg-ui-ui/helm/button';
import { HlmCalendarModule } from 'grg-ui-ui/helm/calendar';
import { HlmCardModule } from 'grg-ui-ui/helm/card';
import { HlmCarouselModule } from 'grg-ui-ui/helm/carousel';
import { HlmCheckboxModule } from 'grg-ui-ui/helm/checkbox';
import { HlmCommandModule } from 'grg-ui-ui/helm/command';
import { HlmDatePickerModule } from 'grg-ui-ui/helm/datePicker';
import { HlmDialogModule } from 'grg-ui-ui/helm/dialog';
import { HlmFormFieldModule } from 'grg-ui-ui/helm/formField';
import { HlmHoverCardModule } from 'grg-ui-ui/helm/hoverCard';
import { HlmIconModule } from 'grg-ui-ui/helm/icon';
import { HlmInputModule } from 'grg-ui-ui/helm/input';
import { HlmInputOtpModule } from 'grg-ui-ui/helm/inputOtp';
import { HlmLabelModule } from 'grg-ui-ui/helm/label';
import { HlmMenuModule, HlmMenuItemModule, HlmMenuBarModule } from 'grg-ui-ui/helm/menu';
import { HlmPaginationModule } from 'grg-ui-ui/helm/pagination';
import { HlmPopoverModule } from 'grg-ui-ui/helm/popover';
import { HlmProgressModule } from 'grg-ui-ui/helm/progress';
import { HlmRadioGroupModule } from 'grg-ui-ui/helm/radioGroup';
import { HlmScrollAreaModule } from 'grg-ui-ui/helm/scrollArea';
import { HlmSelectModule } from 'grg-ui-ui/helm/select';
import { HlmSeparatorModule } from 'grg-ui-ui/helm/separator';
import { HlmSheetModule } from 'grg-ui-ui/helm/sheet';
import { HlmSidebarModule } from 'grg-ui-ui/helm/sidebar';
import { HlmSkeletonModule } from 'grg-ui-ui/helm/skeleton';
import { HlmSliderModule } from 'grg-ui-ui/helm/slider';
import { HlmToasterModule } from 'grg-ui-ui/helm/toaster';
import { HlmSpinnerModule } from 'grg-ui-ui/helm/spinner';
import { HlmSwitchModule } from 'grg-ui-ui/helm/switch';
import { HlmTableModule } from 'grg-ui-ui/helm/table';
import { HlmTabsModule } from 'grg-ui-ui/helm/tabs';
import { HlmToggleModule } from 'grg-ui-ui/helm/toggle';
import { HlmToggleGroupModule } from 'grg-ui-ui/helm/toggleGroup';
import { HlmTooltipModule } from 'grg-ui-ui/helm/tooltip';

@Component({
  standalone: true,
  selector: 'app-brn-demo',
  template: \`<p>Brn + Hlm Demo Works!</p>\`,
  imports: [
    // Brn modules
    BrnAccordionModule,
    BrnAlertDialogModule,
    BrnAutocompleteModule,
    BrnAvatarModule,
    BrnButtonModule,
    BrnCalendarModule,
    BrnCheckboxModule,
    BrnCollapsibleModule,
    BrnCommandModule,
    BrnDialogModule,
    BrnHoverCardModule,
    BrnInputOtpModule,
    BrnLabelModule,
    BrnMenuItemImports,
    BrnMenuBarImports,
    BrnContextMenuImports,
    BrnMenuItemModule,
    BrnMenuModule,
    BrnMenuBarModule,
    BrnContextMenuModule,
    BrnPopoverModule,
    BrnProgressModule,
    BrnRadioGroupModule,
    BrnSelectModule,
    BrnSeparatorModule,
    BrnSheetModule,
    BrnSwitchModule,
    BrnTabsModule,
    BrnToggleModule,
    BrnToggleGroupModule,
    BrnToggleGroupItemModule,
    BrnTooltipModule,

    // Hlm modules
    HlmAccordionModule,
    HlmAlertModule,
    HlmAlertDialogModule,
    HlmAspectRatioModule,
    HlmAutocompleteModule,
    HlmAvatarModule,
    HlmBadgeModule,
    HlmBreadCrumbModule,
    HlmButtonModule,
    HlmCalendarModule,
    HlmCardModule,
    HlmCarouselModule,
    HlmCheckboxModule,
    HlmCommandModule,
    HlmDatePickerModule,
    HlmDialogModule,
    HlmFormFieldModule,
    HlmHoverCardModule,
    HlmIconModule,
    HlmInputModule,
    HlmInputOtpModule,
    HlmLabelModule,
    HlmMenuModule,
    HlmMenuItemModule,
    HlmMenuBarModule,
    HlmPaginationModule,
    HlmPopoverModule,
    HlmProgressModule,
    HlmRadioGroupModule,
    HlmScrollAreaModule,
    HlmSelectModule,
    HlmSeparatorModule,
    HlmSheetModule,
    HlmSidebarModule,
    HlmSkeletonModule,
    HlmSliderModule,
    HlmToasterModule,
    HlmSpinnerModule,
    HlmSwitchModule,
    HlmTableModule,
    HlmTabsModule,
    HlmToggleModule,
    HlmToggleGroupModule,
    HlmTooltipModule,
  ]
})
export class BrnDemoComponent {}


@NgModule({})
export class HlmButtonModule {}
		`,
		);

		// add a file with a helm icon
		tree.write(
			'libs/my-lib/src/app.component.html',
			`
			<hlm-icon />
			<hlm-scroll-area />
		`,
		);

		// add a file with legacy naming conventions
		tree.write(
			'libs/my-lib/src/legacy.component.ts',
			`			import { HlmMenuItemRadioComponent } from 'grg-ui-ui/helm/menu';
			import { BrnTooltipContentDirective } from 'grg-ui-ui/brain/tooltip';
			import { BrnSelectValueDirective } from 'grg-ui-ui/brain/select';
			`,
		);

		// add a file with legacy output conventions
		tree.write(
			'libs/my-lib/src/date-picker-legacy.component.ts',
			`<hlm-date-picker (changed)="onDateChange($event)"/>
		   <hlm-date-picker-multi (changed)="onDateChange($event)">;`,
		);

		// add a file with legacy output conventions
		tree.write('libs/my-lib/src/switch-legacy.component.ts', `<brn-switch (changed)="onChange($event)"/>`);

		// add a file with legacy output conventions
		tree.write('libs/my-lib/src/checkbox-legacy.component.ts', `<brn-checkbox (changed)="onChange($event)"/>`);

		// add a html file with legacy brain accordion trigger
		tree.write(
			'libs/my-lib/src/brn-accordion-trigger-legacy.component.html',
			`
			<div hlmAccordion>
			<div hlmAccordionItem>
					<button hlmAccordionTrigger>
						Product Information
						<ng-icon name="lucideChevronDown" hlm hlmAccIcon />
					</button>
				<hlm-accordion-content>
					<p>
						Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it
						offers unparalleled performance and reliability.
					</p>

					<p>
						Key features include advanced processing capabilities, and an intuitive user interface designed for both
						beginners and experts.
					</p>
				</hlm-accordion-content>
			</div>


			<div hlmAccordionItem>
					<button brnAccordionTrigger>
						Product Information
					</button>
					<ng-icon name="lucideChevronDown" hlm hlmAccIcon />
				<hlm-accordion-content>
					<p>
						Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it
						offers unparalleled performance and reliability.
					</p>

					<p>
						Key features include advanced processing capabilities, and an intuitive user interface designed for both
						beginners and experts.
					</p>
				</hlm-accordion-content>
			</div>
			</div>
		`,
		);

		await healthcheckGenerator(tree, { skipFormat: true, autoFix: true });
	});

	it('should update to latest dependencies', () => {
		const packageJson = readJson(tree, 'package.json');

		expect(packageJson.dependencies['grg-ui-ui/brain']).not.toEqual('0.0.1-alpha.300');
		expect(packageJson.devDependencies['grg-ui-ui/cli']).not.toEqual('0.0.1-alpha.300');
	});

	it('should update brain imports', () => {
		const contents = tree.read('libs/my-lib/src/index.ts', 'utf-8');

		expect(contents).not.toContain('grg-ui-ui/ui-checkbox-brain');
		expect(contents).toContain('grg-ui-ui/brain/checkbox');

		// check if package.json was updated
		const packageJson = readJson(tree, 'package.json');
		expect(packageJson.dependencies['grg-ui-ui/ui-checkbox-brain']).toBeUndefined();
	});

	it('should update core imports', () => {
		const contents = tree.read('libs/my-lib/src/index.ts', 'utf-8');

		expect(contents).not.toContain('grg-ui-ui/ui-core');
		expect(contents).toContain('grg-ui-ui/brain/core');
	});

	it('should update helm imports', () => {
		const contents = tree.read('libs/my-lib/src/index.ts', 'utf-8');

		expect(contents).not.toContain('grg-ui-ui/ui-button-helm');
		expect(contents).toContain('grg-ui-ui/helm/button');
	});

	it('should update helm icons', () => {
		const contents = tree.read('libs/my-lib/src/app.component.html', 'utf-8');

		expect(contents).not.toContain('<hlm-icon');
		expect(contents).toContain('<ng-icon hlm');
	});

	it('should update helm scroll areas', () => {
		const contents = tree.read('libs/my-lib/src/app.component.html', 'utf-8');

		expect(contents).not.toContain('<hlm-scroll-area');
		expect(contents).toContain('<ng-scrollbar hlm');
	});

	it('should update naming conventions', () => {
		const contents = tree.read('libs/my-lib/src/legacy.component.ts', 'utf-8');

		expect(contents).toContain('HlmMenuItemRadioIndicator');
		expect(contents).not.toContain('BrnTooltipContentDirective');
		expect(contents).toContain('BrnTooltipContentTemplate');
		expect(contents).not.toContain('BrnSelectValueDirective');
		expect(contents).toContain('BrnSelectValueTemplate');
	});

	it('should update helm date-picker output conventions', () => {
		const contents = tree.read('libs/my-lib/src/date-picker-legacy.component.ts', 'utf-8');

		expect(contents).toContain('<hlm-date-picker (dateChange)="onDateChange($event)"/>');
		expect(contents).not.toContain('<hlm-date-picker (changed)="onDateChange($event)"/>');
		expect(contents).toContain('<hlm-date-picker-multi (dateChange)="onDateChange($event)">');
		expect(contents).not.toContain('<hlm-date-picker-multi (changed)="onDateChange($event)">');
	});

	it('should update brn accordion triggers', () => {
		const contents = tree.read('libs/my-lib/src/brn-accordion-trigger-legacy.component.html', 'utf-8');

		expect(contents).toContain(`<h3 class="contents"><button hlmAccordionTrigger>`);
		expect(contents).toContain(`</button></h3>`);

		expect(contents).toContain(`<h3 class="contents"><button brnAccordionTrigger>`);
		expect(contents).toContain(`</button></h3>`);
	});

	it('should update brn-switch output conventions', () => {
		const contents = tree.read('libs/my-lib/src/switch-legacy.component.ts', 'utf-8');

		expect(contents).toContain('<brn-switch (checkedChange)="onChange($event)"/>');
		expect(contents).not.toContain('<brn-switch (changed)="onChange($event)"/>');
	});

	it('should update brn-checkbox output conventions', () => {
		const contents = tree.read('libs/my-lib/src/checkbox-legacy.component.ts', 'utf-8');

		expect(contents).toContain('<brn-checkbox (checkedChange)="onChange($event)"/>');
		expect(contents).not.toContain('<brn-checkbox (changed)="onChange($event)"/>');
	});

	it('should update module imports to const imports', () => {
		const contents = tree.read('libs/my-lib/src/modules-legacy.component.ts', 'utf-8');

		const mapping: Record<string, string> = moduleMap;
		// dynamically assert each mapping
		Object.entries(mapping).forEach(([oldModule, newImport]) => {
			const regex = new RegExp(`(?<!export\\s+class\\s+)\\b${oldModule}\\b`);
			expect(regex.test(contents)).toBe(false);
			expect(contents).toContain(newImport);
		});

		expect(contents).toContain('export class HlmButtonModule');
		expect(contents).not.toContain('export class HlmButtonImports');
		// should only import every import once in the import from
		const importStatements = contents.match(/import {([^}]+)} from 'grg-ui-ui\/(brain|helm)\/[^']+';/g) || [];

		const allImports = importStatements.flatMap((statement) => statement.match(/(Brn|Hlm)\w+/g) || []);

		const uniqueImports = new Set(allImports);
		expect(allImports.length).toEqual(uniqueImports.size);

		// should have only one import from everyone in the imports array inside the @Component decorator
		const componentImportsMatch = contents.match(/@Component\(\s*{[^}]*imports:\s*\[([^\]]+)\][^}]*}\s*\)/s);
		expect(componentImportsMatch).toBeTruthy();

		const componentImports = componentImportsMatch ? componentImportsMatch[1].split(',').map((s) => s.trim()) : [];

		const uniqueComponentImports = new Set(componentImports);
		expect(componentImports.length).toEqual(uniqueComponentImports.size);
	});
});
