import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nx-welcome',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <div class="container">
      <h1>Welcome to Angular Material</h1>
      
      <mat-card class="example-card">
        <mat-card-header>
          <mat-card-title>Example Card</mat-card-title>
          <mat-card-subtitle>Angular Material Components</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>This is an example using Angular Material components.</p>
          
          <mat-form-field appearance="outline">
            <mat-label>Enter your name</mat-label>
            <input matInput placeholder="Name">
          </mat-form-field>
          
          <div class="button-group">
            <button mat-raised-button color="primary">Primary</button>
            <button mat-raised-button color="accent">Accent</button>
            <button mat-raised-button color="warn">Warn</button>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
