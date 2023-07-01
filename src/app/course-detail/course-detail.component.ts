import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {

  course: string = '';

  constructor(private route: ActivatedRoute) {}

  // Uso ciclo de vida del componente
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.course = params['course'];
    });
  }

}
