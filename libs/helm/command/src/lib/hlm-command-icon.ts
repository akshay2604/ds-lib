import { computed, Directive, input } from '@angular/core';
import { provideHlmIconConfig } from 'grg-ui-ui/helm/icon';
import { hlm } from 'grg-ui-ui/helm/utils';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmCommandIcon]',
	host: {
		'[class]': '_computedClass()',
	},
	providers: [provideHlmIconConfig({ size: 'sm' })],
})
export class HlmCommandIcon {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() =>
		hlm('text-muted-foreground pointer-events-none shrink-0', this.userClass()),
	);
}
