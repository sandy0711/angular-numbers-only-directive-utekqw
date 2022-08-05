import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[expandTextOnHover]',
})
export class ExpandTextDirective {
  @Input() originalText;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.innerHTML = this.truncateText(
      this.originalText,
      50
    );
  }

  @HostListener('mouseenter') mouseover() {
    this.elementRef.nativeElement.innerHTML = this.splitFunc(this.originalText);
  }

  @HostListener('mouseleave') mouseleave() {
    this.elementRef.nativeElement.innerHTML = this.truncateText(
      this.originalText,
      50
    );
  }

  truncateText(data: string, limit: number) {
    if (data && data.length > limit) {
      data = data.substr(0, limit) + '...';
    }
    return data;
  }

  splitFunc(data: string) {
    return data.split('\r\n').join('<br />');
  }
}
