import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[allowInputs]',
})
export class AllowInputsDirective implements OnInit {
  @Input('allowInputs')
  inputPattern = '';
  private regex: RegExp;
  // Allow key codes for special events. Reflect :Backspace, tab, end, home
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    '-',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
  ];

  constructor(private el: ElementRef) {
    // decimal pattern upto 2 digits: ^[0-9]+\.?[0-9]{0,2}$ or ^(\d+\.?\d{0,2})$ or ^\d*\.?\d{0,2}$
    // positive number: ^(\d+)$
    // comma separated number: ^([0-9]+(?:\,[0-9]*)?)*$ or ^(\d+(?:\,\d*)?)*$
  }

  ngOnInit(): void {
    this.regex = new RegExp(this.inputPattern, 'g');
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    // console.log("current : " + current);
    // console.log("next : " + next);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
