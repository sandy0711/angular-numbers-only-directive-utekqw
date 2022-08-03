import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[numbersOnly]',
})
export class NumberDirective {
  @Input('numbersOnly')
  numericRegex = '[^0-9]*';
  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    const regex = new RegExp(`${this.numericRegex}`, 'g');
    this._el.nativeElement.value = initalValue.replace(regex, '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}

@Directive({
  selector: '[numberOnly]',
})
export class NumberOnlyDirective implements OnInit {
  // Allow decimal numbers and negative values
  private allRegex: RegExp = new RegExp(/^-?[0-9]+$/g);
  private positiveRegex: RegExp = new RegExp(/^[0-9]+$/g);
  private negativeRegex: RegExp = new RegExp(/^-?[0-9]+$/g);
  private regex: RegExp;
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];
  @Input('numberOnly') public numberType = 'positive';
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (this.numberType === 'positive') {
      this.regex = this.positiveRegex;
    } else if (this.numberType === 'negative') {
      this.regex = this.negativeRegex;
    } else {
      this.regex = this.allRegex;
    }
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
