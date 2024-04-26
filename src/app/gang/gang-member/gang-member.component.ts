import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gang-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gang-member.component.html',
  styleUrl: './gang-member.component.scss'
})
export class GangMemberComponent {
  @Input() name?: string;
  @Input() description?: string;
  @Input() imageSrc?: string;
  @Input() class?: string;
  
}
