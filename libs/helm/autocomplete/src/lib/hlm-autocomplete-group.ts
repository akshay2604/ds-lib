import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BrnAutocompleteGroup } from 'grg-ui-ui/brain/autocomplete';
import { hlm } from 'grg-ui-ui/helm/utils';

@Component({
	selector: 'hlm-autocomplete-group',
	template: '<ng-content />',
	hostDirectives: [
		{
			directive: BrnAutocompleteGroup,
			inputs: ['id'],
		},
	],
	host: {
		'[class]': '_computedClass()',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HlmAutocompleteGroup {
	/** The user defined class  */
	public readonly userClass = input<string>('', { alias: 'class' });

	/** The styles to apply  */
	protected readonly _computedClass = computed(() =>
		hlm('text-foreground block overflow-hidden p-1', this.userClass()),
	);
}
