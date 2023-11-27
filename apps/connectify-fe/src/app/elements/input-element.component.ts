import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'input-element',
  standalone: true,
  imports: [CommonModule, NzInputModule, NzFormModule, ReactiveFormsModule],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.less',
})
export class InputElementComponent {
  @Input() control!: any;
  @Input() placeholder = '';
  @Input() type!: 'text' | 'password';
}
