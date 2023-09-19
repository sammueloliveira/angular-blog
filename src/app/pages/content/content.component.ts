import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";  
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
  
      this.id = params.get('id') || "0";
      
   
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id.toString() === id);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    } else {
      
      console.error('Article not found for the given ID:', id);
    }
  }
}
