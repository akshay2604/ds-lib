import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BrnTooltip } from 'grg-ui-ui/brain/tooltip';

@Component({
	selector: 'hlm-tooltip',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[style]': '{display: "contents"}',
	},
	hostDirectives: [BrnTooltip],
	template: `
		<ng-content />
	`,
})
export class HlmTooltip {}
