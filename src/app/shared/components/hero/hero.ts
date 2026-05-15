import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from "../header/header";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header],
})
export class Hero {}
