import { computed, Directive, effect, inject, input } from '@angular/core';
import { HlmInput } from 'grg-ui-ui/helm/input';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: 'input[hlmInputGroupInput]',
	hostDirectives: [HlmInput],
	host: {
		'[class]': '_computedClass()',
		'data-slot': 'input-group-control',
	},
})
export class HlmInputGroupInput {
	private readonly _hlmInput = inject(HlmInput);

	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() =>
		hlm(
			'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
			this.userClass(),
		),
	);

	constructor() {
		effect(() => {
			this._hlmInput.setClass(this._computedClass());
		});
	}
}
