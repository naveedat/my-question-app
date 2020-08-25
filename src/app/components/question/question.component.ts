import { Component, OnInit } from '@angular/core';
import { FaqsService } from './../../services/faqs.service';
import { Faq } from './../../models/Faq';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  faqs: Faq[];

  constructor(private faqsService: FaqsService) { }

  ngOnInit(): void {
    this.faqsService.getJSON().subscribe(res => {
      this.faqs = res;
    });
  }
}
