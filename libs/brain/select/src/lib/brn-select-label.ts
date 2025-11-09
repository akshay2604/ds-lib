import { Directive, inject } from '@angular/core';
import { BrnLabel } from 'grg-ui-ui/brain/label';
import { BrnSelectGroup } from './brn-select-group';

@Directive({
	selector: '[brnSelectLabel]',
	hostDirectives: [BrnLabel],
})
export class BrnSelectLabel {
	private readonly _group = inject(BrnSelectGroup, { optional: true });
	private readonly _label = inject(BrnLabel, { host: true });

	constructor() {
		this._group?.labelledBy.set(this._label.id());
	}
}
