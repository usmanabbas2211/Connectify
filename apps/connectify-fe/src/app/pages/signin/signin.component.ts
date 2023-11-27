import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SigninFormComponent } from './components/signin-form.component';

@Component({
  selector: 'connectify-signin',
  standalone: true,
  imports: [CommonModule, NzGridModule, SigninFormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.less',
})
export class SigninComponent {}
