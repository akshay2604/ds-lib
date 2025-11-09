import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BrnRadioGroup } from 'grg-ui-ui/brain/radio-group';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Component({
	selector: 'hlm-radio-group',
	hostDirectives: [
		{
			directive: BrnRadioGroup,
			inputs: ['name', 'value', 'disabled', 'required', 'direction'],
			outputs: ['valueChange'],
		},
	],
	host: {
		'data-slot': 'radio-group',
		'[class]': '_computedClass()',
	},
	template: '<ng-content />',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HlmRadioGroup {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm('grid gap-3', this.userClass()));
}
